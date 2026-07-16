// Synchronización de estadísticas con la nube via Cloudflare Pages Functions.
// Genera un userId anónimo persistente y sincroniza stats en segundo plano.
// Si la API no está disponible (offline / dev local), degrada gracefulmente a localStorage.

const USER_ID_KEY = 'pc-user-id';
const DISPLAY_NAME_KEY = 'pc-display-name';
const SYNC_API = '/api/stats';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getUserId() {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = generateUUID();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

/**
 * Sube las stats locales a la nube.
 * @param {object} stats - Objeto de estadísticas (getStats())
 * @param {string} mode - 'normal' | 'jason'
 * @returns {Promise<object|null>} - Las stats sincronizadas o null si falla
 */
export async function syncStatsToCloud(stats, mode = 'normal') {
  if (typeof window === 'undefined') return null;

  const userId = getUserId();
  const displayName = getDisplayName();
  const payload = {
    userId,
    stats,
    displayName,
    mode,
    timestamp: Date.now(),
  };

  try {
    const res = await fetch(SYNC_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.stats || null;
  } catch {
    // Falla silenciosamente — la próxima vez se sincronizará
    return null;
  }
}

/**
 * Obtiene las stats desde la nube.
 * @param {string} mode - 'normal' | 'jason'
 * @returns {Promise<object|null>} - Las stats cloud o null si falla / no hay
 */
export async function fetchCloudStats(mode = 'normal') {
  if (typeof window === 'undefined') return null;

  const userId = getUserId();

  try {
    const res = await fetch(`${SYNC_API}?userId=${encodeURIComponent(userId)}&mode=${encodeURIComponent(mode)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.stats || null;
  } catch {
    return null;
  }
}

/**
 * Sincronización completa: obtiene cloud stats, mergea con local, guarda el mejor.
 * @param {object} localStats
 * @param {string} mode - 'normal' | 'jason'
 * @returns {Promise<object>} - Las stats finales (locales o cloud)
 */
export async function syncAndMerge(localStats, mode = 'normal') {
  const cloudStats = await fetchCloudStats(mode);

  if (!cloudStats) {
    // Sin datos en la nube, subir locales
    const synced = await syncStatsToCloud(localStats, mode);
    return synced || localStats;
  }

  // Merge: la que tenga más partidas jugadas gana
  if (cloudStats.gamesPlayed > localStats.gamesPlayed) {
    // Cloud tiene más datos — usar cloud
    return cloudStats;
  }

  if (
    cloudStats.gamesPlayed === localStats.gamesPlayed &&
    cloudStats.gamesWon > localStats.gamesWon
  ) {
    return cloudStats;
  }

  // Local tiene más datos — subir a cloud
  const synced = await syncStatsToCloud(localStats, mode);
  return synced || localStats;
}

/**
 * Verifica si el userId actual tiene estadísticas en la nube.
 * @param {string} mode - 'normal' | 'jason'
 */
export async function hasCloudStats(mode = 'normal') {
  const stats = await fetchCloudStats(mode);
  return stats !== null && stats.gamesPlayed > 0;
}

/**
 * Genera o recupera un nombre para mostrar.
 */
export function getDisplayName() {
  let name = localStorage.getItem(DISPLAY_NAME_KEY);
  if (!name) {
    const shortId = getUserId().slice(0, 4).toUpperCase();
    name = `Jugador#${shortId}`;
    localStorage.setItem(DISPLAY_NAME_KEY, name);
  }
  return name;
}

/**
 * Actualiza el nombre para mostrar.
 */
export function setDisplayName(name) {
  localStorage.setItem(DISPLAY_NAME_KEY, name);
}

/**
 * Obtiene el código de desafío de la URL (?challenge=XXX).
 */
export function getChallengeCodeFromURL() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('challenge') || null;
}

/**
 * Crea un desafío con el resultado actual.
 * @param {object} result - { puzzleDate, time, mistakes, won, solvedCategories }
 * @returns {Promise<{code: string}|null>}
 */
export async function createChallenge(result) {
  if (typeof window === 'undefined') return null;

  const userId = getUserId();
  const displayName = getDisplayName();

  try {
    const res = await fetch('/api/challenge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'create', userId, displayName, ...result }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.code ? { code: data.code } : null;
  } catch {
    return null;
  }
}

/**
 * Resuelve un desafío con el resultado del amigo.
 */
export async function resolveChallenge(code, result) {
  if (typeof window === 'undefined') return null;

  const userId = getUserId();
  const displayName = getDisplayName();

  try {
    const res = await fetch('/api/challenge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'resolve', code, userId, displayName, ...result }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.challenge || null;
  } catch {
    return null;
  }
}

/**
 * Obtiene los datos de un desafío por código.
 */
export async function fetchChallenge(code) {
  if (typeof window === 'undefined') return null;

  try {
    const res = await fetch(`/api/challenge?code=${encodeURIComponent(code)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.challenge || null;
  } catch {
    return null;
  }
}