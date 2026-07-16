// Cloudflare Pages Function — /api/subscribe
// Gestiona suscripciones a notificaciones push web

import { jsonResponse, CORS_HEADERS } from './_leaderboard-helpers';

const SUBSCRIPTIONS_KEY = 'push:subscriptions';

/**
 * POST /api/subscribe
 * Body: { subscription: PushSubscription }
 * Guarda la suscripción en KV para enviar notificaciones más tarde.
 */
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { subscription } = body;

    if (!subscription || !subscription.endpoint) {
      return jsonResponse({ error: 'subscription object with endpoint required' }, 400);
    }

    // Leer suscripciones existentes
    const raw = await env.STATS.get(SUBSCRIPTIONS_KEY);
    let subscriptions = raw ? JSON.parse(raw) : [];

    // Evitar duplicados por endpoint
    const exists = subscriptions.some(s => s.endpoint === subscription.endpoint);
    if (!exists) {
      subscriptions.push(subscription);
      await env.STATS.put(SUBSCRIPTIONS_KEY, JSON.stringify(subscriptions));
    }

    return jsonResponse({ success: true, subscribed: !exists });
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

/**
 * DELETE /api/subscribe
 * Body: { endpoint: string }
 * Elimina una suscripción.
 */
export async function onRequestDelete({ request, env }) {
  try {
    const body = await request.json();
    const { endpoint } = body;

    if (!endpoint) {
      return jsonResponse({ error: 'endpoint required' }, 400);
    }

    const raw = await env.STATS.get(SUBSCRIPTIONS_KEY);
    let subscriptions = raw ? JSON.parse(raw) : [];

    subscriptions = subscriptions.filter(s => s.endpoint !== endpoint);
    await env.STATS.put(SUBSCRIPTIONS_KEY, JSON.stringify(subscriptions));

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

/**
 * OPTIONS /api/subscribe — CORS preflight
 */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}