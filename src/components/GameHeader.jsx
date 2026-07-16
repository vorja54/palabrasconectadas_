import { trackEvent } from '../analytics';

export default function GameHeader({
  soundEnabled, toggleSound,
  theme, toggleTheme,
  fontSize, cycleFontSize,
  setShowStats, setShowArchive, setShowHowToPlay,
}) {
  return (
    <header className="py-3 mb-3">
      <h1 className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] tracking-tight uppercase text-center">
        PALABRAS{' '}
        <img
          src="/logo.png"
          alt="Palabras Conectadas"
          className="inline-block w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] align-middle"
          style={{ transform: 'translateY(-2px)' }}
        />{' '}
        CONECTADAS
      </h1>
      <hr className="border-[var(--color-border)] my-3" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => { setShowStats(true); trackEvent('open_modal', { modal: 'stats' }); }}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer"
            aria-label="Estadísticas"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </button>
          <button
            onClick={() => { setShowArchive(true); trackEvent('open_modal', { modal: 'archive' }); }}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer"
            aria-label="Archivo de puzzles"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleSound}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer"
            aria-label={soundEnabled ? 'Silenciar sonido' : 'Activar sonido'}
          >
            {soundEnabled ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={cycleFontSize}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-xs font-bold"
            aria-label="Tamaño de letra"
          >
            <span className={fontSize === 'xl' ? 'text-xs' : fontSize === 'lg' ? 'text-[10px]' : 'text-[9px]'}>A</span>
            <span className={`${fontSize === 'xl' ? 'text-[9px]' : fontSize === 'lg' ? 'text-[8px]' : 'text-[7px]'} font-normal`}>A</span>
          </button>
          <button
            onClick={() => { setShowHowToPlay(true); trackEvent('open_modal', { modal: 'howtoplay' }); }}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-xs font-bold"
            aria-label="Cómo jugar"
          >
            ?
          </button>
        </div>
      </div>
    </header>
  );
}