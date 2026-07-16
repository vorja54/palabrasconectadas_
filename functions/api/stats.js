// Cloudflare Pages Function — /api/stats
// Sincroniza estadísticas del jugador via Cloudflare KV y actualiza leaderboard.

import { jsonResponse, CORS_HEADERS } from './_leaderboard-helpers';

const STATS_PREFIX = 'stats:';

function getKey(userId, mode) {
  return mode === 'jason' ? `${STATS_PREFIX}${userId}:jason` : `${STATS_PREFIX}${userId}`;
}

/**
 * GET /api/stats?userId=xxx
 * Devuelve las estadísticas guardadas en la nube para un usuario.
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const mode = url.searchParams.get('mode') || 'normal';

  if (!userId) {
    return jsonResponse({ error: 'userId parameter required' }, 400);
  }

  try {
    const raw = await env.STATS.get(getKey(userId, mode));
    if (!raw) {
      return jsonResponse({ stats: null });
    }
    return jsonResponse({ stats: JSON.parse(raw) });
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

/**
 * POST /api/stats
 * Body: { userId, stats, timestamp, displayName }
 * Merge: se queda con las stats que tengan más partidas jugadas (más completas).
 * Además actualiza el leaderboard global.
 */
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { userId, stats: localStats, timestamp, displayName, mode } = body;

    if (!userId || !localStats) {
      return jsonResponse({ error: 'userId and stats required' }, 400);
    }

    const key = getKey(userId, mode || 'normal');

    // Leer stats existentes en la nube
    const raw = await env.STATS.get(key);
    let mergedStats = localStats;

    if (raw) {
      const cloudStats = JSON.parse(raw);
      if (cloudStats.gamesPlayed > localStats.gamesPlayed) {
        mergedStats = cloudStats;
      } else if (cloudStats.gamesPlayed === localStats.gamesPlayed && cloudStats.gamesWon > localStats.gamesWon) {
        mergedStats = cloudStats;
      }
    }

    // Guardar stats del usuario
    await env.STATS.put(key, JSON.stringify(mergedStats), {
      expirationTtl: 365 * 24 * 60 * 60, // 1 año
    });

    // Actualizar leaderboard
    if (mergedStats.gamesPlayed > 0) {
      // Stats synced successfully
    }

    return jsonResponse({ stats: mergedStats, syncedAt: timestamp || Date.now() });
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

/**
 * OPTIONS /api/stats — CORS preflight
 */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}