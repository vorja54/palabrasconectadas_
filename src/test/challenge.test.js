import { describe, it, expect, beforeEach, vi } from 'vitest';

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

describe('generateCode', () => {
  it('generates a 6-character code', () => {
    const code = generateCode();
    expect(code).toHaveLength(6);
  });

  it('only uses valid characters', () => {
    for (let i = 0; i < 100; i++) {
      const code = generateCode();
      expect(code).toMatch(/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/);
    }
  });

  it('generates unique codes', () => {
    const codes = new Set();
    for (let i = 0; i < 1000; i++) {
      codes.add(generateCode());
    }
    expect(codes.size).toBeGreaterThan(900);
  });
});

describe('createChallenge', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('returns null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    const { createChallenge } = await import('../utils/statsSync');
    const result = await createChallenge({ puzzleDate: Date.now(), time: 90, mistakes: 2, won: true, solvedCategories: [] });
    expect(result).toBeNull();
  });

  it('returns code on successful creation', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ code: 'ABC123' }),
    });
    const { createChallenge } = await import('../utils/statsSync');
    const result = await createChallenge({ puzzleDate: Date.now(), time: 90, mistakes: 2, won: true, solvedCategories: [] });
    expect(result).toEqual({ code: 'ABC123' });
  });
});

describe('resolveChallenge', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('returns null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    const { resolveChallenge } = await import('../utils/statsSync');
    const result = await resolveChallenge('ABC123', { time: 60, mistakes: 1, won: true, solvedCategories: [] });
    expect(result).toBeNull();
  });

  it('returns challenge on successful resolve', async () => {
    const mockChallenge = {
      code: 'ABC123',
      challenger: { displayName: 'Retador', time: 90, mistakes: 2, won: true },
      friendResult: { displayName: 'Amigo', time: 60, mistakes: 1, won: true },
    };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ challenge: mockChallenge }),
    });
    const { resolveChallenge } = await import('../utils/statsSync');
    const result = await resolveChallenge('ABC123', { time: 60, mistakes: 1, won: true, solvedCategories: [] });
    expect(result).toEqual(mockChallenge);
  });
});

describe('fetchChallenge', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('returns null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    const { fetchChallenge } = await import('../utils/statsSync');
    const result = await fetchChallenge('ABC123');
    expect(result).toBeNull();
  });

  it('returns challenge data on success', async () => {
    const mockChallenge = { code: 'ABC123', challenger: { displayName: 'Test' }, friendResult: null };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ challenge: mockChallenge }),
    });
    const { fetchChallenge } = await import('../utils/statsSync');
    const result = await fetchChallenge('ABC123');
    expect(result).toEqual(mockChallenge);
  });

  it('returns null on 404', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false });
    const { fetchChallenge } = await import('../utils/statsSync');
    const result = await fetchChallenge('INVALID');
    expect(result).toBeNull();
  });
});

describe('getChallengeCodeFromURL', () => {
  it('returns null when no challenge param', async () => {
    window.location.search = '';
    const { getChallengeCodeFromURL } = await import('../utils/statsSync');
    expect(getChallengeCodeFromURL()).toBeNull();
  });

  it('returns challenge code from URL', async () => {
    window.location.search = '?challenge=XYZ789';
    const { getChallengeCodeFromURL } = await import('../utils/statsSync');
    expect(getChallengeCodeFromURL()).toBe('XYZ789');
  });
});

describe('determineWinner logic', () => {
  function determineWinner(challenger, friend) {
    if (!challenger || !friend) return null;
    if (challenger.won && !friend.won) return 'challenger';
    if (!challenger.won && friend.won) return 'friend';
    if (challenger.mistakes < friend.mistakes) return 'challenger';
    if (friend.mistakes < challenger.mistakes) return 'friend';
    if ((challenger.time ?? 99999) < (friend.time ?? 99999)) return 'challenger';
    if ((friend.time ?? 99999) < (challenger.time ?? 99999)) return 'friend';
    return 'tie';
  }

  it('challenger wins when they won and friend lost', () => {
    expect(determineWinner({ won: true, mistakes: 2, time: 90 }, { won: false, mistakes: 4, time: 120 })).toBe('challenger');
  });

  it('friend wins when friend won and challenger lost', () => {
    expect(determineWinner({ won: false, mistakes: 4, time: 120 }, { won: true, mistakes: 2, time: 90 })).toBe('friend');
  });

  it('challenger wins with fewer mistakes', () => {
    expect(determineWinner({ won: true, mistakes: 1, time: 90 }, { won: true, mistakes: 2, time: 90 })).toBe('challenger');
  });

  it('friend wins with fewer mistakes', () => {
    expect(determineWinner({ won: true, mistakes: 3, time: 90 }, { won: true, mistakes: 1, time: 90 })).toBe('friend');
  });

  it('challenger wins with faster time when same mistakes', () => {
    expect(determineWinner({ won: true, mistakes: 2, time: 60 }, { won: true, mistakes: 2, time: 90 })).toBe('challenger');
  });

  it('returns tie when everything is equal', () => {
    expect(determineWinner({ won: true, mistakes: 2, time: 90 }, { won: true, mistakes: 2, time: 90 })).toBe('tie');
  });

  it('handles missing time gracefully', () => {
    expect(determineWinner({ won: true, mistakes: 2, time: null }, { won: true, mistakes: 2, time: 90 })).toBe('friend');
  });
});