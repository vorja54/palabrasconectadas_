import { describe, it, expect } from 'vitest';
import { getDailyPuzzle, TEMATICO_PUZZLES, TEMATICO_TEMAS, getTematicoPuzzle } from '../connectionsData.js';
import { getAllShareTextForTwitter, getAllShareText } from '../connectionsLogic.js';

describe('Modo Temático', () => {
  it('tiene al menos 180 puzzles', () => {
    expect(TEMATICO_PUZZLES.length).toBeGreaterThanOrEqual(240);
  });

  it('los 4 temas están presentes', () => {
    expect(TEMATICO_TEMAS).toEqual(['Deportes', 'Historia', 'Literatura', 'Ciencia']);
    for (const tema of TEMATICO_TEMAS) {
      const count = TEMATICO_PUZZLES.filter((p) => p.tema === tema).length;
      expect(count).toBeGreaterThan(0);
    }
  });

  it('todos los puzzles tienen estructura válida (16 palabras, 4 colores, tema y subtema)', () => {
    for (const p of TEMATICO_PUZZLES) {
      expect(p.tema).toBeTruthy();
      expect(p.subtema).toBeTruthy();
      expect(p.categories.length).toBe(4);
      const colors = p.categories.map((c) => c.color).join(',');
      expect(colors).toBe('yellow,green,blue,purple');
      const words = p.categories.flatMap((c) => c.words);
      expect(words.length).toBe(16);
      expect(new Set(words).size).toBe(16);
    }
  });

  it('no hay IDs duplicados', () => {
    const ids = TEMATICO_PUZZLES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('rota de tema cada día (Deportes, Historia, Literatura, Ciencia)', () => {
    const temas = [];
    for (let i = 0; i < 4; i++) {
      const d = new Date(2026, 0, 1 + i);
      temas.push(getTematicoPuzzle(d).tema);
    }
    // Los 4 temas deben aparecer en 4 días consecutivos
    expect(new Set(temas).size).toBe(4);
  });

  it('es determinista: misma fecha a distintas horas da el mismo puzzle', () => {
    const a = getDailyPuzzle(new Date(2026, 7, 1, 8, 0), 'tematico');
    const b = getDailyPuzzle(new Date(2026, 7, 1, 23, 0), 'tematico');
    expect(a.id).toBe(b.id);
  });

  it('el alias "deportes" sigue funcionando (compatibilidad)', () => {
    const a = getDailyPuzzle(new Date(2026, 7, 1), 'deportes');
    const b = getDailyPuzzle(new Date(2026, 7, 1), 'tematico');
    expect(a.id).toBe(b.id);
  });

  it('el puzzle temático incluye tema y subtema para la cabecera', () => {
    const p = getDailyPuzzle(new Date(2026, 7, 1), 'tematico');
    expect(p.tema).toBeTruthy();
    expect(p.subtema).toBeTruthy();
  });

  it('durante el Mundial, el modo se convierte en el puzzle temático del Mundial', () => {
    const p = getTematicoPuzzle(new Date(2026, 6, 15, 12, 0));
    expect(p.id).toMatch(/^mundial-/);
  });

  it('el puzzle temático tiene exactamente 16 palabras (sin señuelos)', () => {
    const p = getDailyPuzzle(new Date(2026, 7, 1), 'tematico');
    const words = p.categories.flatMap((c) => c.words);
    expect(words.length).toBe(16);
  });
});

describe('Modo Temático en compartir', () => {
  const results = {
    normal:   { won: true, mistakes: 1, time: 95,  puzzleDate: Date.now(), solvedCategories: [] },
    deportes: { won: true, mistakes: 0, time: 72,  puzzleDate: Date.now(), solvedCategories: [] },
  };

  it('el texto de WhatsApp/Twitter incluye la línea del modo temático', () => {
    const text = getAllShareTextForTwitter(results, new Date());
    expect(text).toContain('Tematico');
    expect(text).toContain('🎯');
  });

  it('el texto detallado incluye el modo temático', () => {
    const text = getAllShareText(results, new Date());
    expect(text).toContain('Tematico');
  });

  it('respeta el orden: Normal antes que Temático', () => {
    const text = getAllShareTextForTwitter(results, new Date());
    expect(text.indexOf('Normal')).toBeLessThan(text.indexOf('Tematico'));
  });
});
