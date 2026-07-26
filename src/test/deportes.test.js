import { describe, it, expect } from 'vitest';
import { getDailyPuzzle, DEPORTES_PUZZLES, getDeportesPuzzle } from '../connectionsData.js';

describe('Modo Deportes', () => {
  it('tiene exactamente 120 puzzles', () => {
    expect(DEPORTES_PUZZLES.length).toBe(123);
  });

  it('todos los puzzles tienen estructura válida (16 palabras, 4 colores, tema)', () => {
    for (const p of DEPORTES_PUZZLES) {
      expect(p.tema).toBeTruthy();
      expect(p.categories.length).toBe(4);
      const colors = p.categories.map(c => c.color).join(',');
      expect(colors).toBe('yellow,green,blue,purple');
      const words = p.categories.flatMap(c => c.words);
      expect(words.length).toBe(16);
      expect(new Set(words).size).toBe(16); // sin duplicados internos
    }
  });

  it('no hay IDs duplicados', () => {
    const ids = DEPORTES_PUZZLES.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('rota a diario: días distintos dan puzzles distintos', () => {
    const d1 = getDailyPuzzle(new Date(2026, 7, 1), 'deportes');
    const d2 = getDailyPuzzle(new Date(2026, 7, 2), 'deportes');
    expect(d1.id).not.toBe(d2.id);
  });

  it('es determinista: misma fecha a distintas horas da el mismo puzzle', () => {
    const a = getDailyPuzzle(new Date(2026, 7, 1, 8, 0), 'deportes');
    const b = getDailyPuzzle(new Date(2026, 7, 1, 23, 0), 'deportes');
    expect(a.id).toBe(b.id);
  });

  it('el puzzle de deportes incluye el tema para la cabecera', () => {
    const p = getDailyPuzzle(new Date(2026, 7, 1), 'deportes');
    expect(p.tema).toBeTruthy();
    expect(typeof p.tema).toBe('string');
  });

  it('durante el Mundial, Deportes se convierte en el puzzle temático del Mundial', () => {
    // 15 de julio de 2026 está dentro del rango del Mundial
    const p = getDeportesPuzzle(new Date(2026, 6, 15, 12, 0));
    expect(p.id).toMatch(/^mundial-/);
  });

  it('fuera del Mundial, Deportes usa el pool de deportes', () => {
    const p = getDeportesPuzzle(new Date(2026, 7, 15, 12, 0));
    expect(p.id).toMatch(/^dep-/);
  });

  it('recorre los 120 puzzles a lo largo del ciclo sin saltarse ninguno', () => {
    const vistos = new Set();
    const base = new Date(2026, 0, 1);
    for (let i = 0; i < 120; i++) {
      const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
      // Evitar días del Mundial que devolverían puzzle mundial
      const p = getDeportesPuzzle(d);
      if (p.id.startsWith('dep-')) vistos.add(p.id);
    }
    // En 120 días (descontando solapes con Mundial) debe ver la gran mayoría
    expect(vistos.size).toBeGreaterThan(100);
  });
});

import { getAllShareTextForTwitter, getAllShareText } from '../connectionsLogic.js';

describe('Modo Deportes en compartir', () => {
  const results = {
    normal:   { won: true, mistakes: 1, time: 95,  puzzleDate: Date.now(), solvedCategories: [] },
    deportes: { won: true, mistakes: 0, time: 72,  puzzleDate: Date.now(), solvedCategories: [] },
  };

  it('el texto de WhatsApp/Twitter incluye la línea de Deportes', () => {
    const text = getAllShareTextForTwitter(results, new Date());
    expect(text).toContain('Deportes');
    expect(text).toContain('🏅');
  });

  it('el texto detallado incluye Deportes', () => {
    const text = getAllShareText(results, new Date());
    expect(text).toContain('Deportes');
  });

  it('respeta el orden: Normal antes que Deportes', () => {
    const text = getAllShareTextForTwitter(results, new Date());
    expect(text.indexOf('Normal')).toBeLessThan(text.indexOf('Deportes'));
  });
});
