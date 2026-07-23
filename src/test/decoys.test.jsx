import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ConnectionsGame from '../components/ConnectionsGame';
import { getDailyPuzzle } from '../connectionsData';
import { getDecoyWords } from '../utils/decoyWords';

// Regresion: las palabras señuelo comparten categoryIndex -1, por lo que
// seleccionar 4 señuelos se contaba como "4 de la misma categoria" y el
// juego lo daba por bueno (y luego crasheaba al pintar una categoria inexistente).

const FECHA = new Date(2026, 6, 23, 12, 0, 0);

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
  vi.setSystemTime(FECHA);
  localStorage.clear();
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {}, addListener: () => {}, removeListener: () => {} }));
  window.scrollTo = () => {};
  if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
});

const clean = (s) => s.replace(/\u00AD/g, '');
const vidasActivas = () => document.querySelectorAll('.mistake-heart-active, .mistake-heart-warning').length;
const pulsar = (w) => fireEvent.click(screen.getByText((_, n) => n.children.length === 0 && clean(n.textContent) === w));
const enviar = async () => {
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    vi.advanceTimersByTime(3000);
  });
};

// Datos reales del puzzle y sus señuelos para esa fecha
const puzzleDe = (modo) => getDailyPuzzle(FECHA, modo);
const señuelosDe = (modo) => {
  const p = puzzleDe(modo);
  return getDecoyWords(modo === 'jason' ? 8 : 4, p.categories.flatMap((c) => c.words), p.date);
};

describe('Palabras señuelo', () => {
  for (const modo of ['normal', 'jason']) {
    it(`[${modo}] seleccionar 4 señuelos cuenta como error, no como acierto`, async () => {
      localStorage.setItem('pc-game-mode', modo);
      render(<ConnectionsGame />);
      await act(async () => { vi.advanceTimersByTime(200); });

      const antes = vidasActivas();
      const señuelos = señuelosDe(modo).slice(0, 4);
      señuelos.forEach(pulsar);
      await enviar();

      expect(vidasActivas()).toBe(antes - 1);           // resta una vida
      expect(document.body.textContent).toContain(señuelos[0]); // siguen en el tablero
    }, 20000);

    it(`[${modo}] 3 señuelos + 1 palabra real tampoco resuelve`, async () => {
      localStorage.setItem('pc-game-mode', modo);
      render(<ConnectionsGame />);
      await act(async () => { vi.advanceTimersByTime(200); });

      const antes = vidasActivas();
      const mezcla = [...señuelosDe(modo).slice(0, 3), puzzleDe(modo).categories[0].words[0]];
      mezcla.forEach(pulsar);
      await enviar();

      expect(vidasActivas()).toBe(antes - 1);
    }, 20000);

    it(`[${modo}] una categoria real sigue resolviendose correctamente`, async () => {
      localStorage.setItem('pc-game-mode', modo);
      render(<ConnectionsGame />);
      await act(async () => { vi.advanceTimersByTime(200); });

      const cat = puzzleDe(modo).categories[0];
      cat.words.forEach(pulsar);
      await enviar();

      expect(document.body.textContent).toContain(cat.name);
    }, 20000);
  }
});
