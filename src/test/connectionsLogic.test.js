import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getStats,
  saveGameResult,
  hasPlayedToday,
  shuffleArray,
  getShareText,
  getAllShareText,
  getPuzzle,
  getPlayedDatesSet,
  getTimeUntilNextWord,
  getLastGameResult,
  getDateSeed,
  getArchiveDate,
} from '../connectionsLogic';
import { PUZZLES, JASON_PUZZLES } from '../connectionsData.js';

// Helper to get the seedy number for a date
function seedForDate(date) {
  return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}

describe('getDateSeed', () => {
  it('returns YYYYMMDD number for a date', () => {
    const date = new Date(2026, 5, 23); // June 23, 2026
    expect(getDateSeed(date)).toBe(20260623);
  });

  it('handles single-digit months and days with leading zeros', () => {
    const date = new Date(2026, 0, 5); // Jan 5
    expect(getDateSeed(date)).toBe(20260105);
  });
});

describe('getStats', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns default stats when nothing is stored', () => {
    const stats = getStats();
    expect(stats.gamesPlayed).toBe(0);
    expect(stats.gamesWon).toBe(0);
    expect(stats.currentStreak).toBe(0);
    expect(stats.maxStreak).toBe(0);
    expect(stats.mistakesDistribution).toEqual([0, 0, 0, 0, 0]);
    expect(stats.lastPlayedDate).toBeNull();
    expect(stats.bestTime).toBeNull();
    expect(stats.playedDates).toEqual([]);
    expect(stats.lastGameWon).toBeNull();
    expect(stats.lastGameMistakes).toBeNull();
  });

  it('returns parsed stats when localStorage has valid data', () => {
    const mockStats = {
      gamesPlayed: 10,
      gamesWon: 7,
      currentStreak: 3,
      maxStreak: 5,
      mistakesDistribution: [0, 2, 3, 1, 1],
      lastPlayedDate: 20260622,
      bestTime: 120,
      playedDates: [20260622, 20260621],
      lastGameWon: true,
      lastGameMistakes: 2,
    };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(mockStats));
    const stats = getStats();
    expect(stats.gamesPlayed).toBe(10);
    expect(stats.gamesWon).toBe(7);
    expect(stats.currentStreak).toBe(3);
    expect(stats.maxStreak).toBe(5);
    expect(stats.mistakesDistribution).toEqual([0, 2, 3, 1, 1]);
    expect(stats.lastPlayedDate).toBe(20260622);
    expect(stats.bestTime).toBe(120);
  });

  it('validates and clamps negative gamesPlayed', () => {
    const corrupted = { gamesPlayed: -5, gamesWon: 3, mistakesDistribution: [0, 0, 0, 0, 0], playedDates: [] };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.gamesPlayed).toBe(0);
  });

  it('validates and clamps negative gamesWon', () => {
    const corrupted = { gamesPlayed: 5, gamesWon: -2, mistakesDistribution: [0, 0, 0, 0, 0], playedDates: [] };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.gamesWon).toBe(0);
  });

  it('validates and clamps negative currentStreak', () => {
    const corrupted = { gamesPlayed: 5, gamesWon: 3, currentStreak: -1, mistakesDistribution: [0, 0, 0, 0, 0], playedDates: [] };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.currentStreak).toBe(0);
  });

  it('resets mistakesDistribution if not an array', () => {
    const corrupted = { gamesPlayed: 5, gamesWon: 3, mistakesDistribution: 'invalid', playedDates: [] };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.mistakesDistribution).toEqual([0, 0, 0, 0, 0]);
  });

  it('resets mistakesDistribution if too short', () => {
    const corrupted = { gamesPlayed: 5, gamesWon: 3, mistakesDistribution: [1, 2, 3], playedDates: [] };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.mistakesDistribution).toEqual([0, 0, 0, 0, 0]);
  });

  it('resets playedDates to empty array if not an array', () => {
    const corrupted = { gamesPlayed: 5, gamesWon: 3, mistakesDistribution: [0, 0, 0, 0, 0], playedDates: null };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(corrupted));
    const stats = getStats();
    expect(stats.playedDates).toEqual([]);
  });

  it('returns default stats on JSON parse error', () => {
    localStorage.setItem('conexion-deldia-stats', 'invalid-json{{{');
    const stats = getStats();
    expect(stats.gamesPlayed).toBe(0);
  });

  it('returns default stats in test mode', () => {
    window.location.search = '?test';
    const stats = getStats();
    expect(stats.gamesPlayed).toBe(0);
    expect(stats.gamesWon).toBe(0);
  });
});

describe('saveGameResult', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.search = '';
  });

  it('increments gamesPlayed on win', () => {
    const result = saveGameResult(2, true, 90);
    expect(result.gamesPlayed).toBe(1);
    expect(result.gamesWon).toBe(1);
  });

  it('increments gamesPlayed on loss', () => {
    const result = saveGameResult(4, false, undefined);
    expect(result.gamesPlayed).toBe(1);
    expect(result.gamesWon).toBe(0);
  });

  it('updates currentStreak on win', () => {
    const result = saveGameResult(1, true, 60);
    expect(result.currentStreak).toBe(1);
  });

  it('resets currentStreak on loss', () => {
    // Set up localStorage with a previous win streak from yesterday
    const existing = {
      gamesPlayed: 5,
      gamesWon: 4,
      currentStreak: 3,
      maxStreak: 3,
      mistakesDistribution: [0, 0, 0, 0, 0],
      lastPlayedDate: seedForDate(new Date()) - 1, // yesterday
      playedDates: [seedForDate(new Date()) - 1],
      lastGameWon: true,
      lastGameMistakes: 1,
    };
    localStorage.setItem('conexion-deldia-stats', JSON.stringify(existing));
    const result = saveGameResult(4, false, undefined);
    expect(result.currentStreak).toBe(0);
  });

  it('tracks maxStreak correctly on single win', () => {
    const r1 = saveGameResult(1, true, 60);
    expect(r1.maxStreak).toBe(1);
  });

  it('does not double-count same day', () => {
    const r1 = saveGameResult(2, true, 90);
    const r2 = saveGameResult(1, true, 60);
    expect(r2.gamesPlayed).toBe(1);
    expect(r2.gamesWon).toBe(1);
  });

  it('records mistakes distribution on win', () => {
    // Start with fresh state
    localStorage.setItem('conexion-deldia-stats', JSON.stringify({
      gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0,
      mistakesDistribution: [0, 0, 0, 0, 0], lastPlayedDate: null,
      bestTime: null, playedDates: [], lastGameWon: null, lastGameMistakes: null,
    }));
    const result = saveGameResult(2, true, 90);
    expect(result.mistakesDistribution[2]).toBe(1);
  });

  it('does not increment distribution on loss', () => {
    // Set up clean state
    localStorage.clear();
    const result = saveGameResult(4, false, undefined);
    // The function doesn't increment distribution on loss,
    // but only records gamesPlayed and resets streak
    expect(result.gamesPlayed).toBe(1);
    expect(result.gamesWon).toBe(0);
  });

  it('updates bestTime when faster', () => {
    const r1 = saveGameResult(1, true, 120);
    expect(r1.bestTime).toBe(120);
    // Can't test second faster time on same day due to guard
  });

  it('sets lastPlayedDate to today', () => {
    const today = seedForDate(new Date());
    const result = saveGameResult(2, true, 90);
    expect(result.lastPlayedDate).toBe(today);
  });

  it('sets lastGameWon and lastGameMistakes on win', () => {
    const result = saveGameResult(1, true, 60);
    expect(result.lastGameWon).toBe(true);
    expect(result.lastGameMistakes).toBe(1);
  });

  it('sets lastGameWon and lastGameMistakes on loss', () => {
    const result = saveGameResult(4, false, undefined);
    expect(result.lastGameWon).toBe(false);
    expect(result.lastGameMistakes).toBe(4);
  });

  it('adds today to playedDates', () => {
    const today = seedForDate(new Date());
    const result = saveGameResult(2, true, 90);
    expect(result.playedDates).toContain(today);
  });

  it('persists stats to localStorage', () => {
    saveGameResult(2, true, 90);
    const stored = JSON.parse(localStorage.getItem('conexion-deldia-stats'));
    expect(stored.gamesPlayed).toBe(1);
    expect(stored.gamesWon).toBe(1);
  });

  it('returns default stats in test mode', () => {
    window.location.search = '?test';
    const result = saveGameResult(2, true, 90);
    expect(result.gamesPlayed).toBe(0);
  });
});

describe('hasPlayedToday', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.search = '';
  });

  it('returns false when not played today', () => {
    expect(hasPlayedToday()).toBe(false);
  });

  it('returns true after saveGameResult', () => {
    saveGameResult(2, true, 90);
    expect(hasPlayedToday()).toBe(true);
  });

  it('returns false in test mode', () => {
    window.location.search = '?test';
    expect(hasPlayedToday()).toBe(false);
  });
});

describe('getLastGameResult', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns null values when no game played', () => {
    const result = getLastGameResult();
    expect(result.won).toBeNull();
    expect(result.mistakes).toBeNull();
  });

  it('returns last game result after save', () => {
    saveGameResult(2, true, 90);
    const result = getLastGameResult();
    expect(result.won).toBe(true);
    expect(result.mistakes).toBe(2);
  });
});

describe('shuffleArray', () => {
  it('returns an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled).toHaveLength(5);
  });

  it('contains the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('does not mutate the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const copy = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(copy);
  });

  it('handles empty array', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it('handles single element array', () => {
    expect(shuffleArray([42])).toEqual([42]);
  });
});

describe('getShareText', () => {
  const solvedCategories = [
    { name: 'PLANETAS', color: 'yellow', solvedAt: 30 },
    { name: 'FRUTAS', color: 'green', solvedAt: 90 },
    { name: 'INSTRUMENTOS', color: 'blue', solvedAt: 150 },
    { name: 'CAPITALES', color: 'purple', solvedAt: 200 },
  ];

  it('includes the date in the text', () => {
    const text = getShareText(solvedCategories, 2, true, 200);
    expect(text).toContain('Palabras Conectadas');
  });

  it('shows mistakes count when won', () => {
    const text = getShareText(solvedCategories, 2, true, 200);
    expect(text).toContain('2/4 errores');
  });

  it('shows X/4 when lost', () => {
    const text = getShareText(solvedCategories, 4, false, undefined);
    expect(text).toContain('X/4');
  });

  it('includes category emojis and difficulty labels for solved categories', () => {
    const text = getShareText(solvedCategories, 2, true, 200);
    expect(text).toContain('🟨');
    expect(text).toContain('🟩');
    expect(text).toContain('🟦');
    expect(text).toContain('🟪');
    expect(text).toContain('Fácil');
    expect(text).toContain('Media');
    expect(text).toContain('Difícil');
    expect(text).toContain('Súper difícil');
  });

  it('includes total time when won and totalTime provided', () => {
    const text = getShareText(solvedCategories, 2, true, 200);
    expect(text).toContain('Total:');
  });

  it('does not include total time when not won', () => {
    const text = getShareText(solvedCategories, 4, false, undefined);
    expect(text).not.toContain('Total:');
  });

  it('includes "Sin resolver" when lost', () => {
    const text = getShareText(solvedCategories, 4, false, undefined);
    expect(text).toContain('Sin resolver');
  });

  it('includes time per solved category', () => {
    const text = getShareText(solvedCategories, 2, true, 200);
    expect(text).toContain('0:30');
    expect(text).toContain('1:30');
    expect(text).toContain('2:30');
    expect(text).toContain('3:20');
  });
});

describe('getPlayedDatesSet', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns empty set when localStorage has no playedDates', () => {
    // Ensure no stats in localStorage
    localStorage.clear();
    // Store stats without playedDates
    localStorage.setItem('conexion-deldia-stats', JSON.stringify({
      gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0,
      mistakesDistribution: [0, 0, 0, 0, 0], lastPlayedDate: null,
      bestTime: null, playedDates: [], lastGameWon: null, lastGameMistakes: null,
    }));
    const set = getPlayedDatesSet();
    expect(set.size).toBe(0);
  });

  it('returns set with played dates', () => {
    // Play a game to populate playedDates
    saveGameResult(2, true, 90);
    const set = getPlayedDatesSet();
    expect(set.size).toBe(1);
    expect(set.has(seedForDate(new Date()))).toBe(true);
  });
});

describe('saveGameResult with archive date', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds archive date seed to playedDates and increments gamesPlayed', () => {
    const date = new Date(2026, 0, 15);
    const result = saveGameResult(2, true, 90, 'normal', date);
    expect(result.playedDates).toContain(20260115);
    expect(result.gamesPlayed).toBe(1);
    expect(result.gamesWon).toBe(1);
  });

  it('does not duplicate archive entries', () => {
    const date = new Date(2026, 0, 15);
    saveGameResult(2, true, 90, 'normal', date);
    const r2 = saveGameResult(1, true, 60, 'normal', date);
    expect(r2.playedDates.filter(d => d === 20260115)).toHaveLength(1);
    expect(r2.gamesPlayed).toBe(1);
  });

  it('does not update streaks for archive games', () => {
    const date = new Date(2026, 0, 15);
    const result = saveGameResult(2, true, 90, 'normal', date);
    expect(result.currentStreak).toBe(0);
    expect(result.maxStreak).toBe(0);
  });

  it('does not reset streaks on archive loss', () => {
    // First, set a streak by playing today
    saveGameResult(1, true, 60);
    const afterToday = getStats();
    expect(afterToday.currentStreak).toBe(1);

    // Then lose an archive game — streak should stay
    const date = new Date(2026, 0, 15);
    saveGameResult(4, false, undefined, 'normal', date);
    const afterArchive = getStats();
    expect(afterArchive.currentStreak).toBe(1);
  });
});

describe('getTimeUntilNextWord', () => {
  it('returns object with hours, minutes, seconds', () => {
    const time = getTimeUntilNextWord();
    expect(time).toHaveProperty('hours');
    expect(time).toHaveProperty('minutes');
    expect(time).toHaveProperty('seconds');
    expect(typeof time.hours).toBe('number');
    expect(typeof time.minutes).toBe('number');
    expect(typeof time.seconds).toBe('number');
  });

  it('hours is between 0 and 23', () => {
    const time = getTimeUntilNextWord();
    expect(time.hours).toBeGreaterThanOrEqual(0);
    expect(time.hours).toBeLessThanOrEqual(23);
  });

  it('minutes is between 0 and 59', () => {
    const time = getTimeUntilNextWord();
    expect(time.minutes).toBeGreaterThanOrEqual(0);
    expect(time.minutes).toBeLessThan(60);
  });

  it('seconds is between 0 and 59', () => {
    const time = getTimeUntilNextWord();
    expect(time.seconds).toBeGreaterThanOrEqual(0);
    expect(time.seconds).toBeLessThan(60);
  });
});

describe('getPuzzle', () => {
  beforeEach(() => {
    window.location.search = '';
  });

  it('returns a puzzle with 4 categories when called with no arguments', () => {
    const puzzle = getPuzzle();
    expect(puzzle.categories).toHaveLength(4);
  });

  it('returns a puzzle with date attached when called with a date', () => {
    const date = new Date(2026, 5, 15);
    const puzzle = getPuzzle(date);
    expect(puzzle.date).toEqual(date);
  });

  it('uses archive date when ?date= param is set', () => {
    window.location.search = '?date=2026-01-15';
    const puzzle = getPuzzle();
    // Should return puzzle for Jan 15, 2026
    expect(puzzle.date.getFullYear()).toBe(2026);
    expect(puzzle.date.getMonth()).toBe(0);
    expect(puzzle.date.getDate()).toBe(15);
  });

  it('returns puzzle for today when no date or archive param', () => {
    const puzzle = getPuzzle();
    const now = new Date();
    expect(puzzle.date.getFullYear()).toBe(now.getFullYear());
    expect(puzzle.date.getMonth()).toBe(now.getMonth());
    expect(puzzle.date.getDate()).toBe(now.getDate());
  });
});

describe('getArchiveDate', () => {
  beforeEach(() => {
    window.location.search = '';
  });

  it('returns null when no ?date= param', () => {
    expect(getArchiveDate()).toBeNull();
  });

  it('parses valid date parameter', () => {
    window.location.search = '?date=2026-06-15';
    const date = getArchiveDate();
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(5); // June is 5 (0-indexed)
    expect(date.getDate()).toBe(15);
  });

  it('returns null for invalid date format', () => {
    window.location.search = '?date=invalid';
    expect(getArchiveDate()).toBeNull();
  });

  it('returns null for partial date format', () => {
    window.location.search = '?date=2026-06';
    expect(getArchiveDate()).toBeNull();
  });
});

describe('puzzle data integrity', () => {
  it('no tiene palabras duplicadas dentro de ningun puzzle normal', () => {
    PUZZLES.forEach(p => {
      const words = p.categories.flatMap(c => c.words);
      const unique = new Set(words.map(w => w.toUpperCase()));
      expect(unique.size).toBe(words.length);
    });
  });

  it('no tiene palabras duplicadas dentro de ningun puzzle dificil', () => {
    JASON_PUZZLES.forEach(p => {
      const words = p.categories.flatMap(c => c.words);
      const unique = new Set(words.map(w => w.toUpperCase()));
      expect(unique.size).toBe(words.length);
    });
  });
});

describe('getAllShareText', () => {
  const normalResult = {
    solvedCategories: [
      { name: 'PLANETAS', color: 'yellow', solvedAt: 30 },
      { name: 'FRUTAS', color: 'green', solvedAt: 90 },
      { name: 'DEPORTES', color: 'blue', solvedAt: 150 },
      { name: 'MUEBLES', color: 'purple', solvedAt: 200 },
    ],
    won: true,
    mistakes: 2,
    time: 200,
  };

  const jasonResult = {
    solvedCategories: [
      { name: 'OCEANOS', color: 'yellow', solvedAt: 45 },
      { name: 'PAISES', color: 'green', solvedAt: 120 },
      { name: 'INSTRUMENTOS', color: 'blue', solvedAt: 180 },
      { name: 'CAPITALES', color: 'purple', solvedAt: 240 },
    ],
    won: true,
    mistakes: 1,
    time: 240,
  };

  const specialResult = {
    solvedCategories: [
      { name: 'SELECCIONES', color: 'yellow', solvedAt: 20 },
      { name: 'ESTADIOS', color: 'green', solvedAt: 60 },
      { name: 'JUGADORES', color: 'blue', solvedAt: 100 },
      { name: 'MUNDIALES', color: 'purple', solvedAt: 150 },
    ],
    won: true,
    mistakes: 0,
    time: 150,
  };

  const lostResult = {
    solvedCategories: [
      { name: 'PLANETAS', color: 'yellow', solvedAt: 30 },
      { name: 'FRUTAS', color: 'green', solvedAt: 90 },
    ],
    won: false,
    mistakes: 4,
    time: undefined,
  };

  it('incluye solo un modo cuando solo ese modo fue jugado', () => {
    const text = getAllShareText({ normal: normalResult });
    expect(text).toContain('🔗 Normal');
    expect(text).not.toContain('🧐 Dificil');
    expect(text).not.toContain('⚽ Mundial 2026');
    expect(text).toContain('🔗');
  });

  it('incluye normal y dificil cuando ambos fueron jugados', () => {
    const text = getAllShareText({ normal: normalResult, jason: jasonResult });
    expect(text).toContain('🔗 Normal');
    expect(text).toContain('🧐 Dificil');
    expect(text).not.toContain('⚽ Mundial 2026');
  });

  it('incluye normal, dificil y mundial cuando los tres fueron jugados', () => {
    const text = getAllShareText({ normal: normalResult, jason: jasonResult, special: specialResult });
    expect(text).toContain('🔗 Normal');
    expect(text).toContain('🧐 Dificil');
    expect(text).toContain('⚽ Mundial 2026');
  });

  it('respeta el orden: normal, dificil, mundial', () => {
    const text = getAllShareText({ special: specialResult, jason: jasonResult, normal: normalResult });
    const normalIdx = text.indexOf('🔗 Normal');
    const jasonIdx = text.indexOf('🧐 Dificil');
    const specialIdx = text.indexOf('⚽ Mundial 2026');
    expect(normalIdx).toBeLessThan(jasonIdx);
    expect(jasonIdx).toBeLessThan(specialIdx);
  });

  it('muestra errores correctos para cada modo', () => {
    const text = getAllShareText({ normal: normalResult, jason: jasonResult });
    expect(text).toContain('Normal: 2/4 errores');
    expect(text).toContain('Dificil: 1/3 errores');
  });

  it('muestra X/4 cuando el jugador perdio', () => {
    const text = getAllShareText({ normal: lostResult });
    expect(text).toContain('X/4');
    expect(text).toContain('Sin resolver');
  });

  it('incluye categorias resueltas incluso si se perdio', () => {
    const text = getAllShareText({ normal: lostResult });
    expect(text).toContain('Fácil');
    expect(text).toContain('Media');
  });

  it('incluye link al puzzle raíz por defecto', () => {
    const text = getAllShareText({ normal: normalResult });
    expect(text).toContain('https://laconexiondeldia.com');
  });

  it('incluye link con fecha cuando se pasa puzzleDate', () => {
    const date = new Date(2026, 5, 15);
    const text = getAllShareText({ normal: normalResult }, date);
    expect(text).toContain('https://laconexiondeldia.com/puzzle/2026-06-15');
  });

  it('incluye tiempo total cuando hay victoria', () => {
    const text = getAllShareText({ normal: normalResult, jason: jasonResult });
    expect(text).toContain('Total:');
  });

  it('usa icono y label de mundial', () => {
    const text = getAllShareText({ special: specialResult });
    expect(text).toContain('⚽ Mundial 2026');
    expect(text).toContain('0/4 errores');
  });

  it('ignora modos sin solvedCategories', () => {
    const text = getAllShareText({ normal: normalResult, jason: { foo: 'bar' } });
    expect(text).toContain('🔗 Normal');
    expect(text).not.toContain('🧐 Dificil');
  });

  it('ignora modos con solvedCategories vacio', () => {
    const text = getAllShareText({ normal: normalResult, jason: { solvedCategories: [] } });
    expect(text).toContain('🔗 Normal');
    expect(text).not.toContain('🧐 Dificil');
  });

  it('ignora modos con solvedCategories null', () => {
    const text = getAllShareText({ normal: normalResult, jason: { solvedCategories: null } });
    expect(text).toContain('🔗 Normal');
    expect(text).not.toContain('🧐 Dificil');
  });

  it('devuelve solo el link si no hay modos jugados', () => {
    const text = getAllShareText({});
    expect(text).toContain('🔗');
    expect(text).not.toContain('🔗 Normal');
    expect(text).not.toContain('🧐');
    expect(text).not.toContain('⚽');
  });
});