// Cloudflare Pages Function — /api/contact
// Recibe mensajes del formulario de contacto y los envía por email

import { jsonResponse, CORS_HEADERS } from './_leaderboard-helpers';

/**
 * Valida el formulario de contacto
 */
function validateContact(body) {
  const errors = [];

  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }
  if (typeof body.name === 'string' && body.name.trim().length > 100) {
    errors.push('El nombre es demasiado largo');
  }

  if (!body.email || typeof body.email !== 'string') {
    errors.push('El email es requerido');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Email no válido');
  }

  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }
  if (typeof body.message === 'string' && body.message.trim().length > 5000) {
    errors.push('El mensaje es demasiado largo (máximo 5000 caracteres)');
  }

  if (typeof body.subject === 'string' && body.subject.length > 200) {
    errors.push('El asunto es demasiado largo');
  }

  return errors;
}

/**
 * POST /api/contact
 * Body: { name, email, subject?, message }
 * Envía un email a hola@laconexiondeldia.com usando la API de Resend
 */
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();

    // Validar
    const errors = validateContact(body);
    if (errors.length > 0) {
      return jsonResponse({ error: 'Datos inválidos', details: errors }, 400);
    }

    const { name, email, subject, message } = body;
    const subjectLine = subject
      ? `[Contacto Web] ${subject}`
      : `[Contacto Web] Mensaje de ${name}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A1A2E; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 20px;">Palabras Conectadas</h1>
          <p style="margin: 5px 0 0; opacity: 0.8;">Nuevo mensaje de contacto</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666; width: 100px;">Nombre:</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${subject ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Asunto:</td>
              <td style="padding: 8px 0;">${escapeHtml(subject)}</td>
            </tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <h3 style="margin: 0 0 8px; color: #333;">Mensaje:</h3>
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 16px;">
          Enviado desde el formulario de contacto de laconexiondeldia.com
        </p>
      </div>
    `;

    // Enviar email vía Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Palabras Conectadas <contacto@laconexiondeldia.com>',
        to: 'hola@laconexiondeldia.com',
        replyTo: email,
        subject: subjectLine,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend error:', resendData);
      return jsonResponse({ error: 'Error al enviar el mensaje' }, 500);
    }

    return jsonResponse({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (err) {
    console.error('Contact form error:', err);
    return jsonResponse({ error: 'Error interno del servidor' }, 500);
  }
}

/**
 * OPTIONS /api/contact — CORS preflight
 */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}