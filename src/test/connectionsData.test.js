import { describe, it, expect } from 'vitest';
import { getDailyPuzzle, PUZZLES, JASON_PUZZLES, SPECIAL_PUZZLES, MUNDIAL_PUZZLES, isMundialActive } from '../connectionsData.js';

describe('PUZZLES data integrity', () => {
  it('has exactly 150 puzzles', () => {
    expect(PUZZLES.length).toBe(150);
  });

  it('has sequential IDs from 1 to 150', () => {
    const ids = PUZZLES.map(p => p.id).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 150 }, (_, i) => i + 1));
  });

  it('each puzzle has exactly 4 categories', () => {
    for (const puzzle of PUZZLES) {
      expect(puzzle.categories).toHaveLength(4);
    }
  });

  it('each category has exactly 4 words', () => {
    for (const puzzle of PUZZLES) {
      for (const cat of puzzle.categories) {
        expect(cat.words).toHaveLength(4);
        expect(cat.name).toBeTruthy();
        expect(['yellow', 'green', 'blue', 'purple']).toContain(cat.color);
      }
    }
  });

  it('categories are in yellow-green-blue-purple order', () => {
    for (const puzzle of PUZZLES) {
      expect(puzzle.categories[0].color).toBe('yellow');
      expect(puzzle.categories[1].color).toBe('green');
      expect(puzzle.categories[2].color).toBe('blue');
      expect(puzzle.categories[3].color).toBe('purple');
    }
  });

  it('no duplicate words within a puzzle', () => {
    for (const puzzle of PUZZLES) {
      const allWords = puzzle.categories.flatMap(c => c.words);
      const uniqueWords = new Set(allWords);
      expect(uniqueWords.size).toBe(16);
    }
  });
});

describe('SPECIAL_PUZZLES', () => {
  it('has all special dates', () => {
    const expected = ['0101', '1225', '1031', '0214', '0704', '0916', '1206', '0520', '0601'];
    for (const key of expected) {
      expect(SPECIAL_PUZZLES[key]).toBeDefined();
    }
  });

  it('special puzzles have valid structure', () => {
    for (const [key, puzzle] of Object.entries(SPECIAL_PUZZLES)) {
      expect(puzzle.id).toBe(`special-${key}`);
      expect(puzzle.categories).toHaveLength(4);
      for (const cat of puzzle.categories) {
        expect(cat.words).toHaveLength(4);
        expect(['yellow', 'green', 'blue', 'purple']).toContain(cat.color);
      }
    }
  });
});

describe('JASON_PUZZLES data integrity', () => {
  it('has at least 25 puzzles', () => {
    expect(JASON_PUZZLES.length).toBeGreaterThanOrEqual(25);
  });

  it('each puzzle has exactly 4 categories', () => {
    for (const puzzle of JASON_PUZZLES) {
      expect(puzzle.categories).toHaveLength(4);
    }
  });

  it('each category has exactly 4 words', () => {
    for (const puzzle of JASON_PUZZLES) {
      for (const cat of puzzle.categories) {
        expect(cat.words).toHaveLength(4);
        expect(cat.name).toBeTruthy();
        expect(['yellow', 'green', 'blue', 'purple']).toContain(cat.color);
      }
    }
  });

  it('categories are in yellow-green-blue-purple order', () => {
    for (const puzzle of JASON_PUZZLES) {
      expect(puzzle.categories[0].color).toBe('yellow');
      expect(puzzle.categories[1].color).toBe('green');
      expect(puzzle.categories[2].color).toBe('blue');
      expect(puzzle.categories[3].color).toBe('purple');
    }
  });

  it('no duplicate words within a puzzle', () => {
    for (const puzzle of JASON_PUZZLES) {
      const allWords = puzzle.categories.flatMap(c => c.words);
      const uniqueWords = new Set(allWords);
      expect(uniqueWords.size).toBe(16);
    }
  });

  it('no puzzle id conflicts with normal PUZZLES', () => {
    const normalIds = new Set(PUZZLES.map(p => p.id));
    for (const puzzle of JASON_PUZZLES) {
      expect(normalIds.has(puzzle.id)).toBe(false);
    }
  });
});

describe('MUNDIAL_PUZZLES data integrity', () => {
  it('has at least 25 puzzles', () => {
    expect(MUNDIAL_PUZZLES.length).toBeGreaterThanOrEqual(25);
  });

  it('each puzzle has exactly 4 categories', () => {
    for (const puzzle of MUNDIAL_PUZZLES) {
      expect(puzzle.categories).toHaveLength(4);
    }
  });

  it('each category has exactly 4 words', () => {
    for (const puzzle of MUNDIAL_PUZZLES) {
      for (const cat of puzzle.categories) {
        expect(cat.words).toHaveLength(4);
        expect(cat.name).toBeTruthy();
        expect(['yellow', 'green', 'blue', 'purple']).toContain(cat.color);
      }
    }
  });

  it('categories are in yellow-green-blue-purple order', () => {
    for (const puzzle of MUNDIAL_PUZZLES) {
      expect(puzzle.categories[0].color).toBe('yellow');
      expect(puzzle.categories[1].color).toBe('green');
      expect(puzzle.categories[2].color).toBe('blue');
      expect(puzzle.categories[3].color).toBe('purple');
    }
  });

  it('no duplicate words within a puzzle', () => {
    for (const puzzle of MUNDIAL_PUZZLES) {
      const allWords = puzzle.categories.flatMap(c => c.words);
      const uniqueWords = new Set(allWords);
      expect(uniqueWords.size).toBe(16);
    }
  });

  it('all puzzles have unique ids', () => {
    const ids = MUNDIAL_PUZZLES.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('Modo Mundial - rotacion diaria', () => {
  it('isMundialActive returns true during June 11 - July 19', () => {
    expect(isMundialActive(new Date(2026, 5, 11))).toBe(true);
    expect(isMundialActive(new Date(2026, 6, 19))).toBe(true);
    expect(isMundialActive(new Date(2026, 5, 15))).toBe(true);
  });

  it('isMundialActive returns false outside the date range', () => {
    expect(isMundialActive(new Date(2026, 5, 10))).toBe(false);
    expect(isMundialActive(new Date(2026, 6, 20))).toBe(false);
    expect(isMundialActive(new Date(2026, 0, 1))).toBe(false);
  });

  it('special mode returns a Mundial puzzle during the event', () => {
    const date = new Date(2026, 6, 4);
    const puzzle = getDailyPuzzle(date, 'special');
    expect(puzzle).not.toBeNull();
    expect(puzzle.id).toMatch(/^mundial-/);
    expect(puzzle.categories).toHaveLength(4);
  });

  it('special mode returns null outside the event period', () => {
    const date = new Date(2026, 5, 10);
    const puzzle = getDailyPuzzle(date, 'special');
    expect(puzzle).toBeNull();
  });

  it('returns deterministic results for same date in special mode', () => {
    const date = new Date(2026, 6, 7);
    const p1 = getDailyPuzzle(date, 'special');
    const p2 = getDailyPuzzle(date, 'special');
    expect(p1.id).toBe(p2.id);
  });

  it('returns different puzzles for different dates in special mode', () => {
    const puzzles = new Set();
    for (let day = 11; day <= 19; day++) {
      const date = new Date(2026, 5, day);
      const puzzle = getDailyPuzzle(date, 'special');
      if (puzzle) puzzles.add(puzzle.id);
    }
    // At least some days should have different puzzles
    expect(puzzles.size).toBeGreaterThan(3);
  });
});

describe('Modo Mundial - fechas limite con hora del dia', () => {
  // Regresion del bug del 19/07/2026: el modo desaparecia el ultimo dia
  // porque el limite final se creaba a las 00:00:00. Estos tests prueban
  // horas reales del dia, no solo la medianoche exacta.

  it('el modo esta activo durante TODO el ultimo dia (19 de julio)', () => {
    expect(isMundialActive(new Date(2026, 6, 19, 0, 0, 1))).toBe(true);   // madrugada
    expect(isMundialActive(new Date(2026, 6, 19, 8, 30))).toBe(true);     // manana
    expect(isMundialActive(new Date(2026, 6, 19, 14, 0))).toBe(true);     // tarde
    expect(isMundialActive(new Date(2026, 6, 19, 21, 0))).toBe(true);     // hora de la final
    expect(isMundialActive(new Date(2026, 6, 19, 23, 59, 59))).toBe(true); // ultimo segundo
  });

  it('el modo esta activo durante TODO el primer dia (11 de junio)', () => {
    expect(isMundialActive(new Date(2026, 5, 11, 0, 0, 0))).toBe(true);
    expect(isMundialActive(new Date(2026, 5, 11, 12, 0))).toBe(true);
    expect(isMundialActive(new Date(2026, 5, 11, 23, 59, 59))).toBe(true);
  });

  it('el modo NO esta activo justo antes ni justo despues del rango', () => {
    expect(isMundialActive(new Date(2026, 5, 10, 23, 59, 59))).toBe(false); // vispera, ultimo segundo
    expect(isMundialActive(new Date(2026, 6, 20, 0, 0, 0))).toBe(false);    // dia siguiente, medianoche
    expect(isMundialActive(new Date(2026, 6, 20, 0, 0, 1))).toBe(false);
  });

  it('getDailyPuzzle devuelve puzzle Mundial a cualquier hora del ultimo dia', () => {
    const morning = getDailyPuzzle(new Date(2026, 6, 19, 9, 0), 'special');
    const evening = getDailyPuzzle(new Date(2026, 6, 19, 22, 0), 'special');
    expect(morning).not.toBeNull();
    expect(evening).not.toBeNull();
    expect(morning.id).toMatch(/^mundial-/);
    // El puzzle del dia debe ser el mismo sin importar la hora
    expect(morning.id).toBe(evening.id);
  });
});

describe('Normal vs Jason mode', () => {
  it('returns different puzzles for the same date', () => {
    const date = new Date(2026, 6, 1);  // July 1, 2026
    const normalPuzzle = getDailyPuzzle(date, 'normal');
    const jasonPuzzle = getDailyPuzzle(date, 'jason');
    expect(normalPuzzle.id).not.toBe(jasonPuzzle.id);
  });

  it('jason mode puzzle comes from JASON_PUZZLES pool', () => {
    const date = new Date(2026, 6, 15);
    const puzzle = getDailyPuzzle(date, 'jason');
    expect(JASON_PUZZLES.some(p => p.id === puzzle.id)).toBe(true);
  });

  it('jason puzzle index stays within bounds', () => {
    for (let year = 2026; year <= 2030; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 15);
        const puzzle = getDailyPuzzle(date, 'jason');
        if (typeof puzzle.id === 'number') {
          expect(puzzle.id).toBeGreaterThanOrEqual(1);
          expect(puzzle.id).toBeLessThanOrEqual(JASON_PUZZLES.length);
        }
      }
    }
  });
});

describe('getDailyPuzzle', () => {
  it('returns a special puzzle for known special dates', () => {
    const newYear = new Date(2026, 0, 1);  // Jan 1
    const puzzle = getDailyPuzzle(newYear);
    expect(puzzle.id).toBe('special-0101');
  });

  it('returns a regular puzzle for non-special dates', () => {
    const date = new Date(2026, 5, 15);  // June 15
    const puzzle = getDailyPuzzle(date);
    expect(['number', 'string']).toContain(typeof puzzle.id);
    expect(puzzle.categories).toHaveLength(4);
  });

  it('returns deterministic results for the same date', () => {
    const date = new Date(2027, 3, 10);  // April 10, 2027
    const puzzle1 = getDailyPuzzle(date);
    const puzzle2 = getDailyPuzzle(date);
    expect(puzzle1.id).toBe(puzzle2.id);
  });

  it('returns different puzzles for different dates', () => {
    const d1 = new Date(2026, 0, 1);
    const d2 = new Date(2026, 0, 2);
    const p1 = getDailyPuzzle(d1);
    const p2 = getDailyPuzzle(d2);
    // Jan 1 is special, Jan 2 should be different
    expect(p1.id).not.toBe(p2.id);
  });

  it('attaches the date to the puzzle', () => {
    const date = new Date(2026, 11, 25);
    const puzzle = getDailyPuzzle(date);
    expect(puzzle.date).toEqual(date);
  });

  it('puzzle index stays within bounds with 150 puzzles', () => {
    // Test a wide range of dates to ensure no out-of-bounds
    for (let year = 2026; year <= 2030; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 15);
        const puzzle = getDailyPuzzle(date);
        if (typeof puzzle.id === 'number') {
          expect(puzzle.id).toBeGreaterThanOrEqual(1);
          expect(puzzle.id).toBeLessThanOrEqual(150);
        }
      }
    }
  });

  it('defaults to today when no date is provided', () => {
    const now = new Date();
    const puzzle = getDailyPuzzle();
    expect(puzzle.date.getFullYear()).toBe(now.getFullYear());
    expect(puzzle.date.getMonth()).toBe(now.getMonth());
    expect(puzzle.date.getDate()).toBe(now.getDate());
  });
});
