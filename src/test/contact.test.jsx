import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// ======================================================
// Tests de validación del lado del servidor
// (inline como en leaderboard.test.js para testear la lógica pura)
// ======================================================

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
    errors.push('Email inválido');
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

describe('validateContact (server-side)', () => {
  it('accepts valid contact data', () => {
    const errors = validateContact({
      name: 'Juan Pérez',
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toEqual([]);
  });

  it('rejects missing name', () => {
    const errors = validateContact({
      name: '',
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('El nombre debe tener al menos 2 caracteres');
  });

  it('rejects name that is too short', () => {
    const errors = validateContact({
      name: 'A',
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('El nombre debe tener al menos 2 caracteres');
  });

  it('rejects name that is too long', () => {
    const errors = validateContact({
      name: 'A'.repeat(101),
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('El nombre es demasiado largo');
  });

  it('rejects missing email', () => {
    const errors = validateContact({
      name: 'Juan',
      email: '',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('El email es requerido');
  });

  it('rejects invalid email format', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'not-an-email',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('Email inválido');
  });

  it('rejects email without domain', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@',
      message: 'Hola, me gusta el juego.',
    });
    expect(errors).toContain('Email inválido');
  });

  it('rejects missing message', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      message: '',
    });
    expect(errors).toContain('El mensaje debe tener al menos 10 caracteres');
  });

  it('rejects message that is too short', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      message: 'Corto',
    });
    expect(errors).toContain('El mensaje debe tener al menos 10 caracteres');
  });

  it('rejects message that is too long', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      message: 'A'.repeat(5001),
    });
    expect(errors).toContain('El mensaje es demasiado largo (máximo 5000 caracteres)');
  });

  it('rejects subject that is too long', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      subject: 'A'.repeat(201),
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toContain('El asunto es demasiado largo');
  });

  it('accepts valid data with optional subject', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      subject: 'Sugerencia',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toEqual([]);
  });

  it('handles non-string name', () => {
    const errors = validateContact({
      name: 123,
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toContain('El nombre debe tener al menos 2 caracteres');
  });

  it('handles null body fields', () => {
    const errors = validateContact({
      name: null,
      email: null,
      message: null,
    });
    expect(errors).toContain('El nombre debe tener al menos 2 caracteres');
    expect(errors).toContain('El email es requerido');
    expect(errors).toContain('El mensaje debe tener al menos 10 caracteres');
  });

  it('trims whitespace from name check', () => {
    const errors = validateContact({
      name: '  ',
      email: 'juan@example.com',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toContain('El nombre debe tener al menos 2 caracteres');
  });

  it('trims whitespace from message check', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@example.com',
      message: '   ',
    });
    expect(errors).toContain('El mensaje debe tener al menos 10 caracteres');
  });

  it('returns multiple errors at once', () => {
    const errors = validateContact({
      name: '',
      email: 'bad',
      message: '',
    });
    expect(errors.length).toBeGreaterThanOrEqual(3);
  });

  it('accepts email with subdomain', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan@sub.example.com',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toEqual([]);
  });

  it('accepts email with plus sign', () => {
    const errors = validateContact({
      name: 'Juan',
      email: 'juan+test@example.com',
      message: 'Hola, me gusta el juego. Muy buen trabajo.',
    });
    expect(errors).toEqual([]);
  });
});

describe('escapeHtml', () => {
  it('escapes & < > " and \'', () => {
    const result = escapeHtml('<script>alert("xss") & \'test\'</script>');
    expect(result).toBe('&lt;script&gt;alert(&quot;xss&quot;) &amp; &#039;test&#039;&lt;/script&gt;');
  });

  it('returns empty string for empty input', () => {
    expect(escapeHtml('')).toBe('');
  });

  it('handles non-string input gracefully', () => {
    expect(escapeHtml(null)).toBe('null');
    expect(escapeHtml(undefined)).toBe('undefined');
    expect(escapeHtml(123)).toBe('123');
  });

  it('leaves safe strings unchanged', () => {
    expect(escapeHtml('Hola, ¿cómo estás?')).toBe('Hola, ¿cómo estás?');
  });
});

// ======================================================
// Tests del componente ContactModal
// ======================================================

describe('ContactModal component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the form when show is true', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('¿Sobre qué quieres escribir?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe tu mensaje aquí...')).toBeInTheDocument();
    expect(screen.getByText('Enviar mensaje')).toBeInTheDocument();
  });

  it('displays the title and close button', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('✕')).toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    await userEvent.click(screen.getByText('✕'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the overlay', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    const overlay = screen.getByText('Contacto').closest('.modal-overlay');
    await userEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when clicking inside the modal content', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    const modalContent = screen.getByText('Contacto').closest('.modal-content');
    await userEvent.click(modalContent);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('submits the form and shows success state', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, message: 'Mensaje enviado correctamente' }),
    });

    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByPlaceholderText('tu@email.com'), 'juan@example.com');
    await userEvent.type(screen.getByPlaceholderText('¿Sobre qué quieres escribir?'), 'Sugerencia');
    await userEvent.type(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), 'Hola, me gusta el juego. Muy buen trabajo.');

    await userEvent.click(screen.getByText('Enviar mensaje'));

    await waitFor(() => {
      expect(screen.getByText('Mensaje enviado!')).toBeInTheDocument();
    });

    expect(screen.getByText('Gracias por contactarnos. Te responderemos pronto.')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Juan Pérez',
        email: 'juan@example.com',
        subject: 'Sugerencia',
        message: 'Hola, me gusta el juego. Muy buen trabajo.',
      }),
    });
  });

  it('shows error message when API returns error', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ error: 'Error del servidor' }),
    });

    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByPlaceholderText('tu@email.com'), 'juan@example.com');
    await userEvent.type(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), 'Hola, me gusta el juego. Muy buen trabajo.');

    await userEvent.click(screen.getByText('Enviar mensaje'));

    await waitFor(() => {
      expect(screen.getByText('Error del servidor')).toBeInTheDocument();
    });
  });

  it('shows error message when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByPlaceholderText('tu@email.com'), 'juan@example.com');
    await userEvent.type(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), 'Hola, me gusta el juego. Muy buen trabajo.');

    await userEvent.click(screen.getByText('Enviar mensaje'));

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });

  it('disables the submit button while sending', async () => {
    // Create a promise that never resolves to keep status as "sending"
    let resolvePromise;
    const fetchPromise = new Promise((resolve) => { resolvePromise = resolve; });
    global.fetch = vi.fn().mockReturnValue(fetchPromise);

    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    render(<ContactModal show={true} onClose={onClose} />);

    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByPlaceholderText('tu@email.com'), 'juan@example.com');
    await userEvent.type(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), 'Hola, me gusta el juego. Muy buen trabajo.');

    await userEvent.click(screen.getByText('Enviar mensaje'));

    // Should show "Enviando..." and button should be disabled
    await waitFor(() => {
      const sendingBtn = screen.getByText('Enviando...');
      expect(sendingBtn).toBeInTheDocument();
      expect(sendingBtn.closest('button')).toBeDisabled();
    });

    // Clean up
    resolvePromise({ ok: true, json: () => Promise.resolve({ success: true }) });
  });

  it('resets form state on close and reopen', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    const ContactModal = (await import('../components/ContactModal')).default;
    const onClose = vi.fn();
    const { rerender } = render(<ContactModal show={true} onClose={onClose} />);

    // Submit form
    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByPlaceholderText('tu@email.com'), 'juan@example.com');
    await userEvent.type(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), 'Hola, me gusta el juego. Muy buen trabajo.');
    await userEvent.click(screen.getByText('Enviar mensaje'));

    await waitFor(() => {
      expect(screen.getByText('Mensaje enviado!')).toBeInTheDocument();
    });

    // Close
    await userEvent.click(screen.getByText('Cerrar'));
    expect(onClose).toHaveBeenCalled();

    // Reopen
    rerender(<ContactModal show={true} onClose={onClose} />);

    // Should show the form again, not success
    await waitFor(() => {
      expect(screen.getByText('Enviar mensaje')).toBeInTheDocument();
    });
  });

  it('renders all form labels', async () => {
    const ContactModal = (await import('../components/ContactModal')).default;
    render(<ContactModal show={true} onClose={vi.fn()} />);

    expect(screen.getByText('Nombre *')).toBeInTheDocument();
    expect(screen.getByText('Email *')).toBeInTheDocument();
    expect(screen.getByText('Asunto')).toBeInTheDocument();
    expect(screen.getByText('Mensaje *')).toBeInTheDocument();
  });
});

describe('ContactModal integration with game', () => {
  it('imports correctly in ConnectionsGame', async () => {
    // Verify the import path works
    const ContactModal = await import('../components/ContactModal');
    expect(ContactModal.default).toBeDefined();
    expect(typeof ContactModal.default).toBe('function');
  });
});