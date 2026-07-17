import { useState, useEffect, useCallback, useRef } from 'react';
import Confetti from './Confetti';
import Toast from './Toast';
import GameHeader from './GameHeader';
import GamePlayArea from './GamePlayArea';
import GameOverSection from './GameOverSection';
import AlreadyPlayedSection from './AlreadyPlayedSection';
import StatsModal from './StatsModal';
import HowToPlay from './HowToPlay';
import ArchiveModal from './ArchiveModal';
import ChallengeModal from './ChallengeModal';
import ContactModal from './ContactModal';
import SpecialDaySplash from './SpecialDaySplash';
import {
  getPuzzle,
  saveGameResult,
  hasPlayedToday,
  shuffleArray,
  getAllShareTextForTwitter,
  getArchiveDate,
  getWeeklyPracticePuzzle,
  getActiveSpecial,
  getDateSeed,
} from '../connectionsLogic';
import { getChallengeCodeFromURL } from '../utils/statsSync';
import { getDecoyWords } from '../utils/decoyWords';
import { trackEvent } from '../analytics';
import { downloadResultImage } from '../utils/shareImage';
import {
  playSelect,
  playDeselect,
  playSubmitCorrect,
  playSubmitWrong,
  playOneAway,
  playWin,
  playLose,
  playCategorySolved,
} from '../utils/sounds';

export default function ConnectionsGame() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/') {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://laconexiondeldia.com${path}`);
      }
    }
  }, []);

  const [puzzle, setPuzzle] = useState(() => {
    const saved = localStorage.getItem('pc-game-mode');
    let mode = 'normal';
    if (saved === 'jason') mode = 'jason';
    else if (saved === 'special' && getActiveSpecial()) mode = 'special';
    return getPuzzle(null, mode);
  });
  const [isPractice, setIsPractice] = useState(false);
  const [isArchive] = useState(() => getArchiveDate() !== null);
  const [showArchive, setShowArchive] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [challengeCode] = useState(() => getChallengeCodeFromURL());
  const [shuffledWords, setShuffledWords] = useState([]);
  const [staggerKey, setStaggerKey] = useState(0);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [solvedCategories, setSolvedCategories] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [animatingIds, setAnimatingIds] = useState(new Set());
  const [mistakeShake, setMistakeShake] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  
  // Timer state
  const [elapsed, setElapsed] = useState(0);
  const elapsedRef = useRef(0);
  const timerStartedRef = useRef(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const selectedIdsRef = useRef(new Set());
  const [now] = useState(() => Date.now());

  // Keep ref in sync for save-on-exit
  useEffect(() => {
    selectedIdsRef.current = selectedIds;
  }, [selectedIds]);

  const [statsVersion, setStatsVersion] = useState(0);
  const [lastGameResult, setLastGameResult] = useState(() => {
    try {
      const saved = localStorage.getItem('pc-last-game-result-normal');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('pc-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('pc-font-size') || 'normal';
  });

  const [gameMode, setGameMode] = useState(() => {
    const saved = localStorage.getItem('pc-game-mode');
    if (saved === 'jason' || saved === 'special') {
      if (saved === 'special' && !getActiveSpecial()) return 'normal';
      return saved;
    }
    return 'normal';
  });

  // In-progress game state persistence
  const isSaveable = !isArchive && !isPractice;
  function getGameStateKey(mode) {
    return `pc-game-state-${mode}`;
  }
  const saveInProgressState = useCallback(() => {
    if (!isSaveable || gameOver || won || !puzzle) return;
    // Don't save empty state (game hasn't started)
    if (mistakes === 0 && solvedCategories.length === 0 && elapsed === 0) return;
    try {
      localStorage.setItem(getGameStateKey(gameMode), JSON.stringify({
        puzzleDateSeed: getDateSeed(puzzle.date || new Date()),
        solvedCategories,
        mistakes,
        shuffledWords,
        elapsed,
        timerStarted,
      }));
    } catch { /* ignore */ }
  }, [isSaveable, gameOver, won, puzzle, mistakes, solvedCategories, elapsed, timerStarted, gameMode, shuffledWords]);
  const loadGameState = useCallback((mode) => {
    try {
      const saved = localStorage.getItem(getGameStateKey(mode));
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      parsed.selectedIds = new Set(parsed.selectedIds || []);
      return parsed;
    } catch { return null; }
  }, []);
  const clearGameState = useCallback((mode) => {
    localStorage.removeItem(getGameStateKey(mode));
  }, []);

  const switchMode = (newMode) => {
    if (newMode === gameMode) return;
    saveInProgressState();
    setGameMode(newMode);
    localStorage.setItem('pc-game-mode', newMode);
    trackEvent('mode_selected', { mode: newMode });
  };

  const startPractice = () => {
    setIsPractice(true);
    setPuzzle(getWeeklyPracticePuzzle());
    resetGameState();
  };

  const resetGameState = () => {
    setSelectedIds(new Set());
    setMistakes(0);
    setGameOver(false);
    setWon(false);
    setSolvedCategories([]);
    timerStartedRef.current = false;
    setTimerStarted(false);
    setElapsed(0);
    elapsedRef.current = 0;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pc-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('pc-font-size', fontSize);
  }, [fontSize]);

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('pc-sound');
    return saved !== null ? saved === 'on' : true;
  });

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('pc-sound', next ? 'on' : 'off');
      return next;
    });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const cycleFontSize = () => {
    setFontSize((prev) => {
      if (prev === 'normal') return 'lg';
      if (prev === 'lg') return 'xl';
      return 'normal';
    });
  };

  const hasSpecial = !isArchive && getActiveSpecial() !== null;
  const playedNormal = !isArchive && hasPlayedToday('normal');
  const playedJason = !isArchive && hasPlayedToday('jason');
  const playedSpecial = !isArchive && hasPlayedToday('special');
  const currentMode = gameMode;
  const hasPlayed = !isArchive && hasPlayedToday(currentMode);
  const allPlayed = playedNormal && playedJason && (!hasSpecial || playedSpecial);
  const MAX_MISTAKES = gameMode === 'jason' ? 3 : 4;

  useEffect(() => {
    if (challengeCode) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowChallenge(true);
    }
  }, [challengeCode]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPuzzle(getPuzzle(null, gameMode));
    setSelectedIds(new Set());
    setMistakes(0);
    setGameOver(false);
    setWon(false);
    setSolvedCategories([]);
    timerStartedRef.current = false;
    setTimerStarted(false);
    setElapsed(0);
    elapsedRef.current = 0;
  }, [gameMode]);

  useEffect(() => {
    // Try to restore in-progress game state
    if (isSaveable) {
      const puzzleDateSeed = getDateSeed(puzzle.date || new Date());
      const saved = loadGameState(currentMode);
      if (saved && saved.puzzleDateSeed === puzzleDateSeed && !saved.gameOver) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSolvedCategories(saved.solvedCategories || []);
        setMistakes(saved.mistakes || 0);
        setShuffledWords(saved.shuffledWords || []);
        setSelectedIds(saved.selectedIds || new Set());
        setElapsed(saved.elapsed || 0);
        elapsedRef.current = saved.elapsed || 0;
        if (saved.timerStarted) {
          timerStartedRef.current = true;
          setTimerStarted(true);
        }
        setWon(false);
        setGameOver(false);
        setStaggerKey(k => k + 1);
        return;
      }
      // Saved state doesn't match this puzzle — clean it up
      if (saved) clearGameState(currentMode);
    }

    const items = [];
    const puzzleWords = [];
    puzzle.categories.forEach((cat, catIdx) => {
      cat.words.forEach((word) => {
        items.push({
          id: `${catIdx}-${word}`,
          word,
          categoryIndex: catIdx,
        });
        puzzleWords.push(word);
      });
    });

    const decoyCount = gameMode === 'jason' ? 8 : 4;
    const decoys = getDecoyWords(decoyCount, puzzleWords, puzzle.date);
    decoys.forEach((word) => {
      items.push({
        id: `decoy-${word}`,
        word,
        categoryIndex: -1,
      });
    });

    setShuffledWords(shuffleArray(items));
    setStaggerKey(k => k + 1);
  }, [puzzle, gameMode, currentMode, isSaveable, loadGameState, clearGameState]);

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: '' });
  }, []);

  const handleSelectWord = (id) => {
    if (gameOver || (hasPlayed && !isPractice)) return;
    if (!timerStartedRef.current && !selectedIds.has(id)) {
      timerStartedRef.current = true;
      setTimerStarted(true);
      trackEvent('game_start', { mode: currentMode });
    }
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        if (soundEnabled) playDeselect();
      } else if (next.size < 4) {
        next.add(id);
        if (soundEnabled) playSelect();
      }
      return next;
    });
  };

  const handleSubmit = () => {
    if (selectedIds.size !== 4 || gameOver || (hasPlayed && !isPractice)) return;
    setTimerStarted(true);

    const selectedItems = shuffledWords.filter((item) => selectedIds.has(item.id));
    const categoryCounts = {};
    for (const item of selectedItems) {
      categoryCounts[item.categoryIndex] = (categoryCounts[item.categoryIndex] || 0) + 1;
    }

    const matchIdx = Object.entries(categoryCounts).find(
      ([, count]) => count === 4
    );

    if (matchIdx) {
      const catIdx = parseInt(matchIdx[0]);
      const category = puzzle.categories[catIdx];

      if (soundEnabled) playSubmitCorrect();
      setAnimatingIds(new Set(selectedIds));
      setTimeout(() => {
        const currentElapsed = elapsedRef.current;
        setSolvedCategories((prev) => [
          ...prev,
          { ...category, categoryIndex: catIdx, solvedAt: currentElapsed },
        ]);
        setSelectedIds(new Set());
        setAnimatingIds(new Set());
        if (soundEnabled) playCategorySolved();

        const remaining = shuffledWords.filter((item) => !selectedIds.has(item.id));
        setShuffledWords(remaining);

        if (solvedCategories.length + 1 >= 4) {
          setWon(true);
          setGameOver(true);
          if (soundEnabled) playWin();
          if (!isPractice) saveGameResult(mistakes, true, currentElapsed, currentMode, isArchive ? puzzle.date : undefined);
          const finalSolved = [
            ...solvedCategories,
            { ...category, categoryIndex: catIdx, solvedAt: currentElapsed },
          ];
          const resultData = {
            puzzleDate: puzzle.date?.getTime ? puzzle.date.getTime() : now,
            time: currentElapsed,
            mistakes,
            won: true,
            solvedCategories: finalSolved.map((c) => ({
              name: c.name, color: c.color, solvedAt: c.solvedAt,
            })),
          };
          setLastGameResult(resultData);
          localStorage.setItem(`pc-last-game-result-${currentMode}`, JSON.stringify(resultData));
          clearGameState(currentMode);
          setStatsVersion((v) => v + 1);
          trackEvent('game_won', { mode: currentMode, mistakes, time_seconds: currentElapsed });
          setTimeout(() => setShowStats(true), 1500);
        }
      }, 600);
    } else {
      const isOneAway = Object.values(categoryCounts).some((count) => count === 3);
      if (isOneAway) {
        showToast('¡Falta uno!');
        if (soundEnabled) playOneAway();
      } else {
        if (soundEnabled) playSubmitWrong();
      }

      setMistakeShake(true);
      setTimeout(() => setMistakeShake(false), 500);

      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setSelectedIds(new Set());

      if (newMistakes >= MAX_MISTAKES) {
        setGameOver(true);
        if (soundEnabled) playLose();
        if (!isPractice) saveGameResult(MAX_MISTAKES, false, undefined, currentMode, isArchive ? puzzle.date : undefined);
        const resultData = {
          puzzleDate: puzzle.date?.getTime ? puzzle.date.getTime() : now,
          time: elapsedRef.current || 0,
          mistakes: MAX_MISTAKES,
          won: false,
          solvedCategories: solvedCategories.map((c) => ({
            name: c.name, color: c.color, solvedAt: c.solvedAt,
          })),
        };
        setLastGameResult(resultData);
        localStorage.setItem(`pc-last-game-result-${currentMode}`, JSON.stringify(resultData));
        clearGameState(currentMode);
        setStatsVersion((v) => v + 1);
        trackEvent('game_lost', { mode: currentMode, mistakes: MAX_MISTAKES });
        setTimeout(() => setShowStats(true), 1000);
      }
    }
  };

  const handleShuffle = () => {
    if (gameOver || (hasPlayed && !isPractice)) return;
    setShuffledWords((prev) => shuffleArray(prev));
  };

  const handleDeselectAll = () => {
    if (gameOver || (hasPlayed && !isPractice)) return;
    setSelectedIds(new Set());
  };

  const loadResultByMode = (mode) => {
    try {
      const saved = localStorage.getItem(`pc-last-game-result-${mode}`);
      if (saved) return JSON.parse(saved);
      // Fallback: old shared key (pre-migration) — only for normal mode
      if (mode === 'normal') {
        const old = localStorage.getItem('pc-last-game-result');
        if (old) return JSON.parse(old);
      }
      return null;
    } catch { return null; }
  };

  const loadAllResults = () => {
    const results = {};
    const modes = ['normal', 'jason', 'special'];
    for (const mode of modes) {
      const data = loadResultByMode(mode);
      if (data && data.won !== undefined) {
        results[mode] = data;
      }
    }
    return results;
  };

  const getPuzzleDateForShare = () => {
    if (isArchive && puzzle && puzzle.date) return puzzle.date;
    return null;
  };

  const shareAllResults = () => {
    const results = loadAllResults();
    if (Object.keys(results).length === 0) return;
    const pd = getPuzzleDateForShare();
    const text = getAllShareTextForTwitter(results, pd);
    trackEvent('share_result', { mode: 'all' });
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast('¡Resultado copiado!'));
    }
  };

  const shareAllWhatsApp = () => {
    const results = loadAllResults();
    if (Object.keys(results).length === 0) return;
    const pd = getPuzzleDateForShare();
    const text = getAllShareTextForTwitter(results, pd);
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
    trackEvent('share_whatsapp', { mode: 'all' });
  };

  const shareAllTwitter = () => {
    const results = loadAllResults();
    if (Object.keys(results).length === 0) return;
    const pd = getPuzzleDateForShare();
    const text = getAllShareTextForTwitter(results, pd);
    const encoded = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank');
    trackEvent('share_twitter', { mode: 'all' });
  };

  const shareInstagram = () => {
    const results = loadAllResults();
    if (Object.keys(results).length === 0) return;
    const pd = getPuzzleDateForShare();
    downloadResultImage(results, pd);
    showToast('Imagen descargada. Publícala en Instagram');
    trackEvent('share_instagram', { mode: 'all' });
  };

  // Timer effect
  useEffect(() => {
    if (!timerStarted || gameOver) return;
    const id = setInterval(() => {
      setElapsed((prev) => {
        elapsedRef.current = prev + 1;
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerStarted, gameOver]);

  useEffect(() => {
    elapsedRef.current = elapsed;
  }, [elapsed]);

  // Keyboard shortcuts
  const handleSubmitRef = useRef(handleSubmit);
  const handleDeselectAllRef = useRef(handleDeselectAll);
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
    handleDeselectAllRef.current = handleDeselectAll;
  });
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSubmitRef.current();
      else if (e.key === 'Backspace') handleDeselectAllRef.current();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-save in-progress game state on meaningful changes
  useEffect(() => {
    saveInProgressState();
  }, [solvedCategories, mistakes, shuffledWords, elapsed, timerStarted, saveInProgressState]);

  // Save full game state when the user leaves the tab/app (visibilitychange + pagehide for mobile)
  useEffect(() => {
    const saveStateOnExit = () => {
      if (!isSaveable || gameOver || won) return;
      saveInProgressState();
      // Also persist selected IDs
      const sel = selectedIdsRef.current;
      if (sel && sel.size > 0) {
        try {
          const key = getGameStateKey(currentMode);
          const saved = localStorage.getItem(key);
          if (saved) {
            const state = JSON.parse(saved);
            state.selectedIds = [...sel];
            localStorage.setItem(key, JSON.stringify(state));
          }
        } catch { /* ignore */ }
      }
    };
    document.addEventListener('visibilitychange', saveStateOnExit);
    window.addEventListener('pagehide', saveStateOnExit);
    return () => {
      document.removeEventListener('visibilitychange', saveStateOnExit);
      window.removeEventListener('pagehide', saveStateOnExit);
    };
  }, [currentMode, isArchive, isPractice, gameOver, won, solvedCategories, mistakes, shuffledWords, elapsed, timerStarted, isSaveable, saveInProgressState]);

  // Periodic save every 10s while game is in progress (mobile fallback)
  useEffect(() => {
    if (!isSaveable || gameOver || won) return;
    const interval = setInterval(saveInProgressState, 10000);
    return () => clearInterval(interval);
  }, [isSaveable, gameOver, won, currentMode, solvedCategories, mistakes, shuffledWords, elapsed, timerStarted, saveInProgressState]);

  const isSpecialDay = puzzle && puzzle.id && String(puzzle.id).startsWith('special-');

  return (
    <>
      <Confetti active={won} />
      {isSpecialDay && !isArchive && !isPractice && <SpecialDaySplash />}
      <div className={`game-container min-h-screen flex flex-col ${fontSize !== 'normal' ? 'font-size-' + fontSize : ''}`}>
        <Toast message={toast.message} show={toast.show} onClose={hideToast} />

        <GameHeader
          soundEnabled={soundEnabled}
          toggleSound={toggleSound}
          theme={theme}
          toggleTheme={toggleTheme}
          fontSize={fontSize}
          cycleFontSize={cycleFontSize}
          setShowStats={setShowStats}
          setShowArchive={setShowArchive}
          setShowHowToPlay={setShowHowToPlay}
        />

        {/* Archive banner */}
        {isArchive && (
          <div className="flex items-center justify-center gap-2 py-2 px-4 mb-3 bg-[var(--color-tile-default)] rounded text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>
              Archivo: {puzzle.date.toLocaleDateString('es', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <a href="/" className="font-semibold underline ml-1 text-[var(--color-text)] hover:opacity-70 transition-opacity">
              Volver al hoy
            </a>
          </div>
        )}

        {/* Practice mode banner */}
        {isPractice && (
          <div className="flex items-center justify-center gap-2 py-2 px-4 mb-3 bg-black dark:bg-green-900/30 rounded text-sm border border-white/10 dark:border-green-700/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-white dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-white dark:text-green-300 font-medium">Modo Práctica — los resultados no se guardan</span>
            <button
              onClick={() => { setIsPractice(false); setPuzzle(getPuzzle(null, currentMode)); resetGameState(); }}
              className="text-xs font-semibold underline ml-auto text-white dark:text-green-300 hover:opacity-70 cursor-pointer"
            >
              Salir
            </button>
          </div>
        )}

        {/* Mode selector tabs */}
        {!isPractice && (
          <>
            <div className="flex justify-center mb-3">
              <div className="flex bg-[var(--color-tile-default)] rounded-xl p-1 gap-1 shadow-sm">
                <button
                  onClick={() => switchMode('normal')}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                    gameMode === 'normal' && !playedNormal
                      ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400'
                      : playedNormal
                        ? 'text-[var(--color-text-subtle)] opacity-40 cursor-not-allowed'
                        : 'text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:bg-[var(--color-tile-absent)]/20'
                  }`}
                  disabled={playedNormal}
                  title={playedNormal ? 'Ya jugado hoy' : 'Modo Normal'}
                >
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${playedNormal ? 'bg-gray-400' : 'bg-emerald-400'}`} />
                  Normal{playedNormal ? ' ✓' : ''}
                </button>
                <button
                  onClick={() => switchMode('jason')}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                    gameMode === 'jason' && !playedJason
                      ? 'bg-orange-600 text-white shadow-md ring-2 ring-orange-400'
                      : playedJason
                        ? 'text-[var(--color-text-subtle)] opacity-40 cursor-not-allowed'
                        : 'text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:bg-[var(--color-tile-absent)]/20'
                  }`}
                  disabled={playedJason}
                  title={playedJason ? 'Ya jugado hoy' : 'Modo Difícil'}
                >
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${playedJason ? 'bg-gray-400' : 'bg-orange-400'}`} />
                  Difícil{playedJason ? ' ✓' : ''}
                </button>
                {hasSpecial && (
                  <button
                    onClick={() => switchMode('special')}
                    className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                      gameMode === 'special' && !playedSpecial
                        ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-400'
                        : playedSpecial
                          ? 'text-[var(--color-text-subtle)] opacity-40 cursor-not-allowed'
                          : 'text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:bg-[var(--color-tile-absent)]/20'
                    }`}
                    disabled={playedSpecial}
                    title={playedSpecial ? 'Ya jugado hoy' : 'Edición Mundial'}
                  >
                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${playedSpecial ? 'bg-gray-400' : 'bg-sky-400'}`} />
                    ⚽ Mundial 2026{playedSpecial ? ' ✓' : ''}
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-center mb-2">
              <div className="text-sm text-[var(--color-text)] text-center">
                {gameMode === 'normal' && (
                  <div className={!playedNormal ? 'font-medium' : 'text-[var(--color-text-subtle)]'}>
                    {playedNormal ? 'Completado' : '4 grupos de 4 · 4 palabras señuelo'}
                  </div>
                )}
                {gameMode === 'special' && (
                  <div className={!playedSpecial ? 'font-medium' : 'text-[var(--color-text-subtle)]'}>
                    {playedSpecial ? 'Completado' : '4 grupos de 4 · 4 palabras señuelo'}
                  </div>
                )}
                {gameMode === 'jason' && (
                  <div className={!playedJason ? 'font-medium' : 'text-[var(--color-text-subtle)]'}>
                    {playedJason ? 'Completado' : '4 grupos de 4 · 8 palabras señuelo'}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Already played today — hide tabs */}
        {hasPlayed && !isPractice && !gameOver && (
          <AlreadyPlayedSection
            allPlayed={allPlayed}
            playedNormal={playedNormal}
            playedJason={playedJason}
            playedSpecial={playedSpecial}
            hasSpecial={hasSpecial}
            switchMode={switchMode}
            startPractice={startPractice}
            lastGameResult={lastGameResult}
            setShowChallenge={setShowChallenge}
            shareAllResults={shareAllResults}
            shareAllWhatsApp={shareAllWhatsApp}
            shareAllTwitter={shareAllTwitter}
            shareInstagram={shareInstagram}
          />
        )}

        {/* Game */}
        {(!hasPlayed || isPractice) && (
          <GamePlayArea
            isPractice={isPractice}
            gameMode={gameMode}
            solvedCategories={solvedCategories}
            shuffledWords={shuffledWords}
            selectedIds={selectedIds}
            mistakeShake={mistakeShake}
            animatingIds={animatingIds}
            onSelectWord={handleSelectWord}
            timerStarted={timerStarted}
            elapsed={elapsed}
            mistakes={mistakes}
            MAX_MISTAKES={MAX_MISTAKES}
            gameOver={gameOver}
            handleSubmit={handleSubmit}
            handleShuffle={handleShuffle}
            handleDeselectAll={handleDeselectAll}
            fontSize={fontSize}
            staggerKey={staggerKey}
                      />
        )}

        {/* Game over banner */}
        {gameOver && (
          <GameOverSection
            won={won}
            puzzle={puzzle}
            solvedCategories={solvedCategories}
            isPractice={isPractice}
            startPractice={startPractice}
            shareAllResults={shareAllResults}
            shareAllWhatsApp={shareAllWhatsApp}
            shareAllTwitter={shareAllTwitter}
            shareInstagram={shareInstagram}
            setShowChallenge={setShowChallenge}
          />
        )}

        {/* Content Section — Editorially rich content for AdSense compliance */}
        <section className="mt-8 pt-6 border-t border-[var(--color-border)] seo-content-delayed">
          <div className="text-left space-y-4 text-sm leading-relaxed">
            <h2 className="text-base font-bold uppercase tracking-wider">¿Qué es Palabras Conectadas?</h2>
            <p className="text-[var(--color-text-subtle)]">
              Palabras Conectadas es el juego diario de conexiones de palabras en español. Cada día
              recibes 16 palabras que debes organizar en <strong>4 grupos ocultos de 4 palabras</strong>,
              donde cada grupo comparte un tema o categoría común. Adicionalmente, hay palabras señuelo
              diseñadas para ponerte a prueba.
            </p>

            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Cómo se juega</h3>
            <p className="text-[var(--color-text-subtle)]">
              Selecciona 4 palabras que creas que pertenecen a la misma categoría y presiona "Enviar".
              Si aciertas, se revelará el grupo con un color que indica su dificultad:
              <strong> amarillo</strong> (fácil), <strong>verde</strong> (medio), <strong>azul</strong>
              (difícil) o <strong>morado</strong> (muy difícil). Tienes 4 errores en modo Normal y
              3 en modo Difícil.
            </p>

            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Modos de juego</h3>
            <p className="text-[var(--color-text-subtle)]">
              <strong>Modo Normal:</strong> 16 palabras + 4 señuelos, 4 errores permitidos.
              Ideal para empezar. <strong>Modo Difícil:</strong> 16 palabras + 8 señuelos, 3 errores.
              Para jugadores experimentados. Durante el Mundial 2026, también hay puzzles temáticos especiales.
            </p>

            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Beneficios</h3>
            <p className="text-[var(--color-text-subtle)]">
              Jugar a Palabras Conectadas ejercita tu cerebro, amplía tu vocabulario y desarrolla
              el pensamiento lateral. Un puzzle nuevo cada día crea una rutina saludable de
              estimulación cognitiva. Puedes explorar <a href="/tips/" className="underline">consejos y trucos</a> para mejorar,
              leer nuestro <a href="/blog/" className="underline">blog</a> con artículos y estrategias, o conocer más
              <a href="/about/" className="underline"> acerca del juego</a>.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 text-xs text-[var(--color-text-subtle)]">
          <p>{isArchive ? 'Explora puzzles de días anteriores' : 'Un nuevo desafío cada día'}</p>
          <div className="flex items-center justify-center gap-3 mt-1 flex-wrap">
            <a href="/tips/" className="hover:underline">Tips y Consejos</a>
            <a href="/blog/" className="hover:underline">Blog</a>
            <a href="/about/" className="hover:underline">Acerca de</a>
            <a href="/privacy/" className="hover:underline">Privacidad</a>
            <button onClick={() => { setShowContact(true); trackEvent('open_modal', { modal: 'contact' }); }} className="hover:underline cursor-pointer bg-transparent border-none p-0 text-xs text-[var(--color-text-subtle)] font-[inherit]">
              Contacto
            </button>
          </div>
        </footer>

        <StatsModal
          key={statsVersion}
          show={showStats}
          onClose={() => setShowStats(false)}
          solvedCategories={solvedCategories}
          won={won}
          mistakes={mistakes}
          hasPlayed={hasPlayed || gameOver}
          elapsed={elapsed}
          defaultMode={currentMode}
        />
        <ArchiveModal
          show={showArchive}
          onClose={() => setShowArchive(false)}
        />
        <HowToPlay
          show={showHowToPlay}
          onClose={() => setShowHowToPlay(false)}
        />
        <ChallengeModal
          show={showChallenge}
          onClose={() => setShowChallenge(false)}
          onModeSwitch={(m) => { switchMode(m); setShowChallenge(false); }}
          gameResult={won || mistakes >= MAX_MISTAKES ? {
            puzzleDate: puzzle.date?.getTime ? puzzle.date.getTime() : now,
            time: elapsed,
            mistakes,
            won,
            mode: currentMode,
            solvedCategories: solvedCategories.map((c) => ({
              name: c.name,
              color: c.color,
              solvedAt: c.solvedAt,
            })),
          } : lastGameResult}
          challengeCode={challengeCode}
        />
        <ContactModal
          show={showContact}
          onClose={() => setShowContact(false)}
        />
      </div>
    </>
  );
}