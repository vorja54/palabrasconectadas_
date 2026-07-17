import { getDailyPuzzle, getWeeklyPracticePuzzle, getActiveSpecial } from './connectionsData.js';
import { syncStatsToCloud } from './utils/statsSync.js';

const STATS_KEY = 'conexion-deldia-stats';
const STATS_KEY_JASON = 'conexion-deldia-stats-jason';
const STATS_KEY_SPECIAL = 'conexion-deldia-stats-special';
const isTestMode = () => typeof window !== 'undefined' && window.location.search.includes('test');
const getArchiveDate = () => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  let dateStr = params.get('date');
  // Also check for /puzzle/YYYY-MM-DD path
  if (!dateStr) {
    const pathMatch = window.location.pathname.match(/^\/puzzle\/(\d{4}-\d{2}-\d{2})/);
    if (pathMatch) dateStr = pathMatch[1];
  }
  if (!dateStr) return null;
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
};

const defaultStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  mistakesDistribution: [0, 0, 0, 0, 0],
  lastPlayedDate: null,
  bestTime: null,
  playedDates: [],
  lastGameWon: null,
  lastGameMistakes: null,
};

function getDateSeed(date) {
  return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}

export function getPuzzle(date, mode = 'normal') {
  let puzzle;
  if (date) puzzle = getDailyPuzzle(date, mode);
  else {
    const archiveDate = getArchiveDate();
    if (archiveDate) puzzle = getDailyPuzzle(archiveDate, mode);
    else puzzle = getDailyPuzzle(new Date(), mode);
  }
  return puzzle;
}

function getStatsKey(mode) {
  if (mode === 'jason') return STATS_KEY_JASON;
  if (mode === 'special') return STATS_KEY_SPECIAL;
  return STATS_KEY;
}

export { getArchiveDate, getDateSeed, getWeeklyPracticePuzzle, getActiveSpecial };

// Sincronización manual de estadísticas actuales a la nube
export function syncCurrentStats(mode = 'normal') {
  const stats = getStats(mode);
  syncStatsToCloud(stats, mode);
}

export function getPlayedDatesSet(mode = 'normal') {
  const stats = getStats(mode);
  return new Set(stats.playedDates || []);
}

export function markArchivePlayed(date, mode = 'normal') {
  const key = getStatsKey(mode);
  const stats = getStats(mode);
  const seed = getDateSeed(date);
  if (!stats.playedDates.includes(seed)) {
    stats.playedDates.push(seed);
    localStorage.setItem(key, JSON.stringify(stats));
  }
}

export function getStats(mode = 'normal') {
  const key = getStatsKey(mode);
  if (isTestMode()) return { ...defaultStats };
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return { ...defaultStats };
    const parsed = JSON.parse(stored);
    // Validate key fields to prevent data corruption from resetting to defaults
    const validated = { ...defaultStats, ...parsed };
    if (typeof validated.gamesPlayed !== 'number' || validated.gamesPlayed < 0) validated.gamesPlayed = 0;
    if (typeof validated.gamesWon !== 'number' || validated.gamesWon < 0) validated.gamesWon = 0;
    if (typeof validated.currentStreak !== 'number' || validated.currentStreak < 0) validated.currentStreak = 0;
    if (typeof validated.maxStreak !== 'number' || validated.maxStreak < 0) validated.maxStreak = 0;
    if (!Array.isArray(validated.mistakesDistribution) || validated.mistakesDistribution.length < 5) {
      validated.mistakesDistribution = [0, 0, 0, 0, 0];
    }
    if (!Array.isArray(validated.playedDates)) validated.playedDates = [];
    return validated;
  } catch {
    return { ...defaultStats };
  }
}

export function saveGameResult(mistakes, won, elapsed, mode = 'normal', date) {
  const key = getStatsKey(mode);
  if (isTestMode()) return { ...defaultStats };
  const stats = getStats(mode);
  const isArchive = !!date;
  const today = getDateSeed(date || new Date());

  // Guard: don't double-count the same day/archive date
  if (stats.lastPlayedDate === today) return stats;

  stats.gamesPlayed += 1;
  if (won) {
    stats.gamesWon += 1;
    // Streaks only for today's puzzle, not archive
    if (!isArchive) {
      stats.currentStreak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    }
    if (mistakes >= 0 && mistakes < stats.mistakesDistribution.length) {
      stats.mistakesDistribution[mistakes] += 1;
    }
    if (elapsed !== undefined && elapsed > 0 && (stats.bestTime === null || elapsed < stats.bestTime)) {
      stats.bestTime = elapsed;
    }
  } else if (!isArchive) {
    // Only reset streak on today's loss
    stats.currentStreak = 0;
  }
  stats.lastPlayedDate = today;
  stats.lastGameWon = won;
  stats.lastGameMistakes = mistakes;

  if (!stats.playedDates.includes(today)) {
    stats.playedDates.push(today);
  }

  localStorage.setItem(key, JSON.stringify(stats));
  // Sync a la nube (fire-and-forget)
  if (!isArchive) syncStatsToCloud(stats, mode);
  return stats;
}

export function hasPlayedToday(mode = 'normal') {
  if (isTestMode()) return false;
  const stats = getStats(mode);
  const today = getDateSeed(new Date());
  return stats.lastPlayedDate === today;
}

export function getLastGameResult(mode = 'normal') {
  const stats = getStats(mode);
  return {
    won: stats.lastGameWon,
    mistakes: stats.lastGameMistakes,
  };
}

export function getTimeUntilNextWord() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const SHARE_DIFFICULTY_LABELS = { yellow: 'Fácil', green: 'Media', blue: 'Difícil', purple: 'Súper difícil' };

export function getShareText(solvedCategories, mistakes, won, totalTime, maxMistakes = 4, puzzleDate) {
  const dateObj = puzzleDate || new Date();
  const dateStr = dateObj.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const mistakeStr = won ? `${mistakes}/${maxMistakes} errores` : `X/${maxMistakes}`;
  const puzzleUrl = puzzleDate
    ? `https://laconexiondeldia.com/puzzle/${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`
    : 'https://laconexiondeldia.com';
  const lines = [`Palabras Conectadas - ${dateStr}\n${mistakeStr}\n`];

  const colorMap = { yellow: '🟨', green: '🟩', blue: '🟦', purple: '🟪' };
  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };
  for (const cat of solvedCategories) {
    const emoji = colorMap[cat.color] || '⬜';
    const time = cat.solvedAt !== undefined ? ` (${fmt(cat.solvedAt)})` : '';
    const label = SHARE_DIFFICULTY_LABELS[cat.color] || cat.name;
    lines.push(`${emoji.repeat(4)} ${label}${time}`);
  }

  if (totalTime !== undefined && won) {
    lines.push(`\nTotal: ${fmt(totalTime)}`);
  }

  if (!won) {
    lines.push('❌ Sin resolver');
  }

  lines.push(`\n🔗 ${puzzleUrl}`);

  return lines.join('\n');
}

export function getShareTextForTwitter(solvedCategories, mistakes, won, totalTime, maxMistakes = 4, puzzleDate) {
  const dateObj = puzzleDate || new Date();
  const dateStr = `${dateObj.getDate()}/${dateObj.getMonth() + 1}`;
  const url = 'laconexiondeldia.com';

  // Determine mode label from maxMistakes
  let modeLabel = 'Normal';
  let modeIcon = '🔗';
  if (maxMistakes === 3) { modeLabel = 'Dificil'; modeIcon = '🧐'; }

  const time = totalTime !== undefined ? fmtTime(totalTime) : '?:??';
  const status = won ? '✅' : '❌';
  const mistakesStr = `${mistakes} fallos`;

  const lines = [
    `🟨🟩🟦🟪 Palabras Conectadas ${dateStr} 🟪🟦🟩🟨`,
    `Conexión ${modeIcon} ${modeLabel}: ${status} ${time} / ${mistakesStr}`,
    url,
  ];
  return lines.join('\n');
}

export function getAllShareTextForTwitter(results, puzzleDate) {
  const dateObj = puzzleDate || new Date();
  const dateStr = `${dateObj.getDate()}/${dateObj.getMonth() + 1}`;
  const url = 'laconexiondeldia.com';

  const order = ['normal', 'jason', 'special'];
  const played = order.filter(
    (mode) => results[mode] && results[mode].won !== undefined
  );

  if (played.length === 0) return '';

  const lines = [`🟨🟩🟦🟪 Palabras Conectadas ${dateStr} 🟪🟦🟩🟨`];

  for (const mode of played) {
    const data = results[mode];
    const cfg = MODE_CONFIG[mode] || { icon: '🔗', label: mode, maxMistakes: 4 };
    const won = data.won;
    const mistakes = data.mistakes !== undefined ? data.mistakes : '?';
    const time = data.time !== undefined ? fmtTime(data.time) : '?:??';
    const status = won ? '✅' : '❌';
    const mistakesStr = `${mistakes} fallos`;
    lines.push(`Conexión ${cfg.icon} ${cfg.label}: ${status} ${time} / ${mistakesStr}`);
  }

  lines.push(url);
  return lines.join('\n');
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

const MODE_CONFIG = {
  normal: { icon: '🔗', label: 'Normal', maxMistakes: 4 },
  jason: { icon: '🧐', label: 'Dificil', maxMistakes: 3 },
  special: { icon: '⚽', label: 'Mundial 2026', maxMistakes: 4 },
};

function appendModeResult(lines, mode, data) {
  if (!data) return;
  const cfg = MODE_CONFIG[mode] || { icon: '🎮', label: mode, maxMistakes: 4 };
  const won = data.won;
  const mistakes = data.mistakes !== undefined ? data.mistakes : '?';
  const mistakeStr = won ? `${mistakes}/${cfg.maxMistakes}` : `X/${cfg.maxMistakes}`;
  lines.push(`${cfg.icon} ${cfg.label}: ${mistakeStr} errores`);

  if (data.solvedCategories && data.solvedCategories.length > 0) {
    const colorMap = { yellow: '🟨', green: '🟩', blue: '🟦', purple: '🟪' };
    const fmt = (s) => {
      const m = Math.floor(s / 60);
      const sec = s % 60;
      return `${m}:${String(sec).padStart(2, '0')}`;
    };

    for (const cat of data.solvedCategories) {
      const emoji = colorMap[cat.color] || '⬜';
      const time = cat.solvedAt !== undefined ? ` (${fmt(cat.solvedAt)})` : '';
      const label = SHARE_DIFFICULTY_LABELS[cat.color] || cat.name;
      lines.push(`${emoji.repeat(4)} ${label}${time}`);
    }
    if (data.time !== undefined && won) {
      lines.push(`Total: ${fmt(data.time)}`);
    }
  }
  if (!won) {
    lines.push('❌ Sin resolver');
  }
}

export function getAllShareText(results, puzzleDate) {
  const dateObj = puzzleDate || new Date();
  const dateStr = dateObj.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const puzzleUrl = puzzleDate
    ? `https://laconexiondeldia.com/puzzle/${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`
    : 'https://laconexiondeldia.com';
  const lines = [`Palabras Conectadas - ${dateStr}\n`];

  // Only include modes that have been played
  const playedModes = Object.keys(results).filter(
    (mode) => results[mode] && results[mode].won !== undefined
  );

  const order = ['normal', 'jason', 'special'];
  for (const mode of order) {
    if (playedModes.includes(mode)) {
      appendModeResult(lines, mode, results[mode]);
      lines.push('');
    }
  }

  lines.push(`🔗 ${puzzleUrl}`);
  return lines.join('\n');
}