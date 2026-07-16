import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem('pc-install-dismissed') === 'true'
  );
  const [isInstalled, setIsInstalled] = useState(
    () => window.matchMedia('(display-mode: standalone)').matches
  );

  useEffect(() => {
    if (isInstalled) return;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Only show after a small delay so it doesn't appear immediately on load
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Also detect if user already installed
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const onChange = (e) => setIsInstalled(e.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      mediaQuery.removeEventListener('change', onChange);
    };
  }, [isInstalled]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') {
      setShowPrompt(false);
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('pc-install-dismissed', 'true');
  };

  if (isInstalled || !showPrompt || dismissed) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 max-w-sm mx-auto z-50 animate-slide-up">
      <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-xl shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <svg className="h-4 w-4 text-purple-600 dark:text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[var(--color-text)]">Instala Palabras Conectadas</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">Añade el juego a la pantalla de inicio para jugar m&aacute;s r&aacute;pido, incluso sin internet.</p>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleInstall}
            className="flex-1 text-sm font-semibold py-2 px-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
          >
            Instalar
          </button>
          <button
            onClick={handleDismiss}
            className="text-sm py-2 px-3 rounded-lg bg-[var(--color-tile-default)] text-[var(--color-text-subtle)] hover:bg-[var(--color-border)] transition-colors cursor-pointer"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
}