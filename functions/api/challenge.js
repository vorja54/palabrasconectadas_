// Cloudflare Pages Function — /api/challenge
// Desafíos entre amigos: crear desafío con resultado, resolverlo al completar la partida.
import { jsonResponse, CORS_HEADERS } from './_leaderboard-helpers';

const CHALLENGE_PREFIX = 'challenge:';

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function formatCategories(categories) {
  return (categories || []).map((c) => ({
    name: c.name,
    color: c.color,
    solvedAt: c.solvedAt || null,
  }));
}

/**
 * POST /api/challenge
 * Acciones: create | resolve
 *
 * create: { action: "create", userId, displayName, puzzleDate, time, mistakes, won, solvedCategories, mode }
 * resolve: { action: "resolve", code, userId, displayName, time, mistakes, won, solvedCategories }
 */
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { action, userId } = body;

    if (action === 'create') {
      const { displayName, puzzleDate, time, mistakes, won, solvedCategories, mode } = body;
      if (!userId || puzzleDate === undefined) {
        return jsonResponse({ error: 'userId and puzzleDate required' }, 400);
      }

      const code = generateCode();
      const challenge = {
        code,
        puzzleDate,
        mode: mode || 'normal',
        challenger: {
          userId,
          displayName: displayName || 'Anónimo',
          time: time ?? null,
          mistakes: mistakes ?? 0,
          won: won ?? false,
          solvedCategories: formatCategories(solvedCategories),
        },
        friendResult: null,
        createdAt: Date.now(),
      };

      await env.STATS.put(CHALLENGE_PREFIX + code, JSON.stringify(challenge), {
        expirationTtl: 7 * 24 * 60 * 60,
      });

      return jsonResponse({ code, challenge });
    }

    if (action === 'resolve') {
      const { code, displayName, time, mistakes, won, solvedCategories } = body;
      if (!code || !userId) {
        return jsonResponse({ error: 'code and userId required' }, 400);
      }

      const raw = await env.STATS.get(CHALLENGE_PREFIX + code);
      if (!raw) {
        return jsonResponse({ error: 'Challenge not found' }, 404);
      }

      const challenge = JSON.parse(raw);

      if (challenge.friendResult) {
        return jsonResponse({ error: 'Challenge already resolved' }, 409);
      }

      challenge.friendResult = {
        userId,
        displayName: displayName || 'Amigo',
        time: time ?? null,
        mistakes: mistakes ?? 0,
        won: won ?? false,
        solvedCategories: formatCategories(solvedCategories),
      };
      challenge.resolvedAt = Date.now();

      await env.STATS.put(CHALLENGE_PREFIX + code, JSON.stringify(challenge), {
        expirationTtl: 7 * 24 * 60 * 60,
      });

      return jsonResponse({ challenge });
    }

    return jsonResponse({ error: 'Invalid action' }, 400);
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

/**
 * GET /api/challenge?code=XXX
 * Devuelve los datos de un desafío.
 */
export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return jsonResponse({ error: 'code parameter required' }, 400);
    }

    const raw = await env.STATS.get(CHALLENGE_PREFIX + code);
    if (!raw) {
      return jsonResponse({ error: 'Challenge not found' }, 404);
    }

    return jsonResponse({ challenge: JSON.parse(raw) });
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}