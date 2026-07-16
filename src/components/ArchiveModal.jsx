import { useState, useMemo } from 'react';
import { getPlayedDatesSet } from '../connectionsLogic';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const FIRST_YEAR = 2026;
const FIRST_MONTH = 5; // June (0-indexed)
const FIRST_DAY = 15;

function dateSeed(y, m, d) {
  return y * 10000 + (m + 1) * 100 + d;
}

function firstDateSeed() {
  return dateSeed(FIRST_YEAR, FIRST_MONTH, FIRST_DAY);
}

export default function ArchiveModal({ show, onClose }) {
  const today = useMemo(() => new Date(), []);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const playedDates = useMemo(() => {
    const normal = getPlayedDatesSet('normal');
    const jason = getPlayedDatesSet('jason');
    return new Set([...normal, ...jason]);
  }, [show]);

  if (!show) return null;

  const firstDay = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startDay = firstDay.getDay();
  const todaySeed = dateSeed(today.getFullYear(), today.getMonth(), today.getDate());
  const startSeed = dateSeed(FIRST_YEAR, FIRST_MONTH, FIRST_DAY);
  const canGoPrev = viewYear > FIRST_YEAR || (viewYear === FIRST_YEAR && viewMonth > FIRST_MONTH);
  const canGoNext = viewYear < today.getFullYear() || (viewYear === today.getFullYear() && viewMonth < today.getMonth());

  const weeks = [];
  let cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
    if (cells.length === 7) {
      weeks.push(cells);
      cells = [];
    }
  }
  if (cells.length > 0) weeks.push(cells);

  const prevMonth = () => {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (!canGoNext) return;
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleDateClick = (day) => {
    const seed = dateSeed(viewYear, viewMonth, day);
    const isPlayed = playedDates.has(seed);
    // Today goes to the normal game (with save, hasPlayed check)
    if (seed === todaySeed) {
      window.location.href = '/';
      return;
    }
    // Already played — do nothing
    if (isPlayed) return;
    const y = viewYear;
    const m = String(viewMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    window.location.href = `/?date=${y}-${m}-${d}`;
  };

  const goToToday = () => {
    window.location.href = '/';
  };

  const dayClass = (day) => {
    const seed = dateSeed(viewYear, viewMonth, day);
    const isBeforeFirst = seed < startSeed;
    const isFuture = seed > todaySeed;
    const isPlayed = playedDates.has(seed);
    const isT = seed === todaySeed;

    let classes = 'w-full h-full flex items-center justify-center text-sm rounded transition-colors';

    if (isFuture || isBeforeFirst) {
      classes += ' text-[var(--color-text-subtle)] opacity-40 cursor-not-allowed';
    } else if (isPlayed) {
      classes += ' bg-[var(--color-tile-default)] text-[var(--color-text)] opacity-60 cursor-not-allowed';
    } else if (isT) {
      classes += ' bg-black text-white font-bold dark:bg-white dark:text-black';
    } else {
      classes += ' bg-[var(--color-tile-default)] text-[var(--color-text)] cursor-pointer hover:opacity-70';
    }

    return classes;
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="modal-content bg-white w-full max-w-sm p-6 sm:p-8 my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider">Archivo</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-[var(--color-text-subtle)] mb-4 text-center">
          Selecciona una fecha para jugar
        </p>

        {/* Month/Year navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            disabled={!canGoPrev}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-lg font-bold ${
              canGoPrev
                ? 'hover:bg-[var(--color-tile-default)] cursor-pointer'
                : 'opacity-20 cursor-not-allowed'
            }`}
            aria-label="Mes anterior"
          >
            ‹
          </button>
          <span className="font-bold text-sm">{MONTHS[viewMonth]} {viewYear}</span>
          <button
            onClick={nextMonth}
            disabled={!canGoNext}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-lg font-bold ${
              canGoNext
                ? 'hover:bg-[var(--color-tile-default)] cursor-pointer'
                : 'opacity-20 cursor-not-allowed'
            }`}
            aria-label="Mes siguiente"
          >
            ›
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center text-[11px] text-[var(--color-text-subtle)] font-semibold uppercase tracking-wider py-1"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="space-y-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => (
                <div key={di} className="aspect-square p-0.5">
                  {day !== null ? (
                    <button
                      onClick={() => {
                        const seed = dateSeed(viewYear, viewMonth, day);
                        if (seed >= startSeed && seed <= todaySeed) handleDateClick(day);
                      }}
                      className={dayClass(day)}
                      disabled={dateSeed(viewYear, viewMonth, day) > todaySeed || dateSeed(viewYear, viewMonth, day) < startSeed || playedDates.has(dateSeed(viewYear, viewMonth, day))}
                    >
                      <span className="flex flex-col items-center gap-0.5">
                        <span>{day}</span>
                        {playedDates.has(dateSeed(viewYear, viewMonth, day)) && (
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Today button */}
        <div className="text-center mt-5">
          <button onClick={goToToday} className="nyt-btn nyt-btn-secondary text-sm">
            Volver al puzzle de hoy
          </button>
        </div>
      </div>
    </div>
  );
}