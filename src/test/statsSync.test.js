import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getUserId } from '../utils/statsSync';

describe('getUserId', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('generates a userId if none exists', () => {
    const id = getUserId();
    expect(id).toBeTruthy();
    expect(typeof id).toBe('string');
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });

  it('returns the same userId on subsequent calls', () => {
    const id1 = getUserId();
    const id2 = getUserId();
    expect(id1).toBe(id2);
  });

  it('persists userId in localStorage', () => {
    const id = getUserId();
    expect(localStorage.getItem('pc-user-id')).toBe(id);
  });
});

describe('syncStatsToCloud', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('returns null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    const { syncStatsToCloud } = await import('../utils/statsSync');
    const result = await syncStatsToCloud({ gamesPlayed: 1 });
    expect(result).toBeNull();
  });

  it('returns stats on successful sync', async () => {
    const cloudStats = { gamesPlayed: 5, gamesWon: 3 };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ stats: cloudStats }),
    });
    const { syncStatsToCloud } = await import('../utils/statsSync');
    const result = await syncStatsToCloud({ gamesPlayed: 5, gamesWon: 3 });
    expect(result).toEqual(cloudStats);
  });
});

describe('fetchCloudStats', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('returns null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    const { fetchCloudStats } = await import('../utils/statsSync');
    const result = await fetchCloudStats();
    expect(result).toBeNull();
  });

  it('returns null when no cloud stats exist', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ stats: null }),
    });
    const { fetchCloudStats } = await import('../utils/statsSync');
    const result = await fetchCloudStats();
    expect(result).toBeNull();
  });

  it('returns cloud stats when they exist', async () => {
    const cloudStats = { gamesPlayed: 10, gamesWon: 8 };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ stats: cloudStats }),
    });
    const { fetchCloudStats } = await import('../utils/statsSync');
    const result = await fetchCloudStats();
    expect(result).toEqual(cloudStats);
  });
});

describe('hasCloudStats', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('returns false when no cloud stats', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ stats: null }),
    });
    const { hasCloudStats } = await import('../utils/statsSync');
    const result = await hasCloudStats();
    expect(result).toBe(false);
  });

  it('returns true when cloud stats exist', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ stats: { gamesPlayed: 5, gamesWon: 3 } }),
    });
    const { hasCloudStats } = await import('../utils/statsSync');
    const result = await hasCloudStats();
    expect(result).toBe(true);
  });
});

describe('syncAndMerge', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('returns local stats when no cloud stats exist', async () => {
    // First call (fetch) returns null
    // Second call (sync) returns the synced stats
    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ stats: null }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ stats: { gamesPlayed: 3, gamesWon: 2 } }),
      });
    const { syncAndMerge } = await import('../utils/statsSync');
    const result = await syncAndMerge({ gamesPlayed: 3, gamesWon: 2 });
    expect(result).toEqual({ gamesPlayed: 3, gamesWon: 2 });
  });

  it('returns cloud stats when cloud has more games', async () => {
    const localStats = { gamesPlayed: 3, gamesWon: 2 };
    const cloudStats = { gamesPlayed: 10, gamesWon: 8 };
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ stats: cloudStats }),
    });
    const { syncAndMerge } = await import('../utils/statsSync');
    const result = await syncAndMerge(localStats);
    expect(result).toEqual(cloudStats);
  });
});