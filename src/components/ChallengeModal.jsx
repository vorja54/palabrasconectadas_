import { useState, useEffect, useCallback } from 'react';
import { createChallenge, resolveChallenge, fetchChallenge } from '../utils/statsSync';

const categoryColors = {
  yellow: '#F9DF6D',
  green: '#A0C35A',
  blue: '#B0C4EF',
  purple: '#BA81C5',
};

function fmtTime(s) {
  if (s === null || s === undefined) return '--:--';
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

function PlayerResult({ player, isWinner }) {
  if (!player) return null;
  return (
    <div className={`rounded p-3 ${isWinner ? 'ring-2 ring-green-500' : ''}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-sm truncate">{player.displayName}</span>
        {isWinner && <span className="text-xs font-bold text-green-600">GANADOR</span>}
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-[var(--color-text-subtle)]">Resultado:</span>
          <span className="font-semibold">{player.won ? '✅ Ganó' : '❌ Perdió'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-subtle)]">Tiempo:</span>
          <span className="font-mono tabular-nums">{fmtTime(player.time)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-subtle)]">Errores:</span>
          <span>{player.mistakes}/4</span>
        </div>
      </div>
      {player.solvedCategories && player.solvedCategories.length > 0 && (
        <div className="mt-2 space-y-1">
          {player.solvedCategories.map((cat, i) => (
            <div
              key={i}
              className="px-2 py-0.5 text-[10px] font-medium rounded"
              style={{ backgroundColor: categoryColors[cat.color] || '#EFEFE6', color: '#000' }}
            >
              {cat.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function determineWinner(challenger, friend) {
  if (!challenger || !friend) return null;
  // Whoever won, or fewer mistakes, or faster time
  if (challenger.won && !friend.won) return 'challenger';
  if (!challenger.won && friend.won) return 'friend';
  if (challenger.mistakes < friend.mistakes) return 'challenger';
  if (friend.mistakes < challenger.mistakes) return 'friend';
  if ((challenger.time ?? 99999) < (friend.time ?? 99999)) return 'challenger';
  if ((friend.time ?? 99999) < (challenger.time ?? 99999)) return 'friend';
  return 'tie';
}

const MODE_LABELS = { special: 'Mundial', jason: 'Difícil', normal: 'Normal' };

export default function ChallengeModal({ show, onClose, gameResult, challengeCode, onModeSwitch }) {
  const [step, setStep] = useState('menu'); // menu | created | loading | resolved | view
  const [challenge, setChallenge] = useState(null);
  const [challengeCode_State, setChallengeCode] = useState('');
  const [error, setError] = useState('');

  const loadChallenge = useCallback(async (code) => {
    const data = await fetchChallenge(code);
    if (data) {
      setChallenge(data);
      // Switch to the challenge's game mode (e.g. 'special' for Mundial)
      if (data.mode && data.mode !== 'normal' && onModeSwitch) {
        onModeSwitch(data.mode);
      }
      if (data.friendResult) {
        setStep('resolved');
      } else {
        setStep('view');
      }
    } else {
      setError('Desafío no encontrado');
      setStep('menu');
    }
  }, [onModeSwitch]);

  // Reset when modal opens
  useEffect(() => {
    if (!show) return;
    if (challengeCode) {
      // Viewing an existing challenge
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep('loading');
      loadChallenge(challengeCode);
    } else if (gameResult) {
      setStep('menu');
      setChallengeCode('');
      setError('');
    }
  }, [show, challengeCode, gameResult, loadChallenge]);

  const handleCreate = async () => {
    if (!gameResult) return;
    setError('');
    const result = await createChallenge(gameResult);
    if (result && result.code) {
      setChallengeCode(result.code);
      setStep('created');
    } else {
      setError('Error al crear el desafío. Intenta de nuevo.');
    }
  };

  const handleResolve = async () => {
    if (!gameResult || !challengeCode_State) return;
    setError('');
    const data = await resolveChallenge(challengeCode_State, gameResult);
    if (data) {
      setChallenge(data);
      setStep('resolved');
    } else {
      setError('Error al resolver el desafío.');
    }
  };

  const shareUrl = challengeCode_State
    ? `${window.location.origin}${window.location.pathname}?challenge=${challengeCode_State}`
    : '';

  const copyLink = () => {
    if (navigator.clipboard && shareUrl) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="modal-content bg-white w-full max-w-sm p-6 sm:p-8 my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider">Desafío</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-500 text-sm text-center mb-3 bg-red-50 rounded px-3 py-2">{error}</div>
        )}

        {/* Menu step — choose create or enter code */}
        {step === 'menu' && (
          <div className="space-y-4">
            <p className="text-sm text-center text-[var(--color-text-subtle)]">
              Desafía a un amigo a jugar el mismo puzzle y compara los resultados.
            </p>
            {gameResult && (
              <button onClick={handleCreate} className="nyt-btn nyt-btn-primary w-full">
                Crear desafío con mi resultado
              </button>
            )}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--color-border)]" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-2 text-xs text-[var(--color-text-subtle)]">o</span></div>
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-subtle)] uppercase tracking-wider block mb-1">
                Ingresa un código de desafío
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={challengeCode_State}
                  onChange={(e) => setChallengeCode(e.target.value.toUpperCase())}
                  placeholder="ABC123"
                  maxLength={6}
                  className="flex-1 px-3 py-2 border border-[var(--color-border)] rounded text-sm uppercase text-center font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  onClick={() => {
                    if (challengeCode_State.length === 6) {
                      setStep('loading');
                      loadChallenge(challengeCode_State);
                    }
                  }}
                  disabled={challengeCode_State.length !== 6}
                  className="nyt-btn nyt-btn-primary"
                >
                  Ver
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Created step — show shareable link */}
        {step === 'created' && (
          <div className="space-y-4 text-center">
            <div className="text-3xl font-bold tracking-widest text-green-600">
              {challengeCode_State}
            </div>
            {gameResult?.mode && gameResult.mode !== 'normal' && (
              <span className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
                {MODE_LABELS[gameResult.mode] || gameResult.mode}
              </span>
            )}
            <p className="text-sm text-[var(--color-text-subtle)]">
              Comparte este código con un amigo para que juegue el mismo puzzle.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-[var(--color-border)] rounded text-xs bg-gray-50"
                onClick={(e) => e.target.select()}
              />
              <button onClick={copyLink} className="nyt-btn nyt-btn-secondary text-xs">
                Copiar
              </button>
            </div>
            <p className="text-xs text-[var(--color-text-subtle)]">
              O ingresa el código manualmente en "Desafío" en el menú principal.
            </p>
            <button onClick={onClose} className="nyt-btn nyt-btn-primary">
              Listo
            </button>
          </div>
        )}

        {/* View step — challenge not resolved yet */}
        {step === 'view' && challenge && (
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider font-bold">
                Esperando respuesta...
              </span>
              {challenge.mode && challenge.mode !== 'normal' && (
                <span className="ml-2 inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
                  {MODE_LABELS[challenge.mode] || challenge.mode}
                </span>
              )}
              <p className="text-sm mt-1">Tu amigo aún no ha jugado este desafío.</p>
            </div>
            <PlayerResult player={challenge.challenger} label="Tú" isWinner={false} />
            {gameResult && (
              <>
                <div className="text-center text-xs text-[var(--color-text-subtle)] uppercase">ahora tú</div>
                <button onClick={handleResolve} className="nyt-btn nyt-btn-primary w-full">
                  Enviar mi resultado
                </button>
              </>
            )}
          </div>
        )}

        {/* Resolved step — show comparison */}
        {step === 'resolved' && challenge && (
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider font-bold">
                Resultado del desafío
              </span>
              {challenge.mode && challenge.mode !== 'normal' && (
                <span className="ml-2 inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
                  {MODE_LABELS[challenge.mode] || challenge.mode}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <PlayerResult
                player={challenge.challenger}
                label="Desafiante"
                isWinner={determineWinner(challenge.challenger, challenge.friendResult) === 'challenger'}
              />
              <PlayerResult
                player={challenge.friendResult}
                label="Amigo"
                isWinner={determineWinner(challenge.challenger, challenge.friendResult) === 'friend'}
              />
            </div>
            {determineWinner(challenge.challenger, challenge.friendResult) === 'tie' && (
              <div className="text-center text-sm font-semibold text-[var(--color-text-subtle)]">
                Empate!
              </div>
            )}
          </div>
        )}

        {/* Loading */}
        {step === 'loading' && (
          <div className="text-center py-8 text-sm text-[var(--color-text-subtle)]">
            Cargando desafío...
          </div>
        )}
      </div>
    </div>
  );
}