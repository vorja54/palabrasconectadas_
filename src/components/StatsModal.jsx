import { getStats, getTimeUntilNextWord } from '../connectionsLogic';
import { useState, useEffect } from 'react';

export default function StatsModal({ show, onClose, won, hasPlayed, elapsed, defaultMode }) {
  const stats = getStats(defaultMode || 'normal');
  const winRate = stats.gamesPlayed > 0
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
    : 0;
  const [timer, setTimer] = useState(getTimeUntilNextWord());

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setTimer(getTimeUntilNextWord());
    }, 1000);
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="modal-content bg-white w-full max-w-xs p-6 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wider">Estadísticas</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-2 mb-5 text-center">
          {[
            { value: stats.gamesPlayed, label: 'Juegos' },
            { value: `${winRate}%`, label: 'Victorias' },
            { value: stats.currentStreak, label: 'Racha' },
            { value: stats.maxStreak, label: 'Mejor' },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-[11px] text-[var(--color-text-subtle)] uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Current game time */}
        {elapsed > 0 && (won || hasPlayed) && (
          <div className="text-center mb-5">
            <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-widest font-bold">
              Tiempo
            </span>
            <div className="text-xl font-bold font-mono tabular-nums">
              {String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}
            </div>
          </div>
        )}

        {/* Countdown */}
        {(hasPlayed || won) && (
          <div className="text-center border-t border-[var(--color-border)] pt-4">
            <p className="text-xs font-bold text-[var(--color-text-subtle)] uppercase tracking-widest mb-2">
              Nueva conexión en
            </p>
            <div className="flex justify-center gap-3 text-xl font-bold">
              {[
                { value: pad(timer.hours), label: 'h' },
                { value: pad(timer.minutes), label: 'm' },
                { value: pad(timer.seconds), label: 's' },
              ].map((unit, i) => (
                <span key={i}>
                  {unit.value}
                  <span className="text-[10px] text-[var(--color-text-subtle)] ml-0.5">{unit.label}</span>
                  {i < 2 && <span className="ml-0.5">:</span>}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}