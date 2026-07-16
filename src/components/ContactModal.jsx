import { useState } from 'react';

export default function ContactModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={handleClose}>
      <div
        className="modal-content bg-white w-full max-w-sm p-6 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wider">Contacto</h2>
          <button
            onClick={handleClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="text-3xl mb-3">✓</div>
            <p className="font-semibold mb-2">Mensaje enviado!</p>
            <p className="text-sm text-[var(--color-text-subtle)] mb-4">
              Gracias por contactarnos. Te responderemos pronto.
            </p>
            <button onClick={handleClose} className="nyt-btn nyt-btn-primary">
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)] mb-1">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                placeholder="Tu nombre"
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)] mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)] mb-1">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                maxLength={200}
                placeholder="¿Sobre qué quieres escribir?"
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)] mb-1">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)] transition-colors resize-vertical"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="nyt-btn nyt-btn-primary w-full flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}