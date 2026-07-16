// Test setup — mock browser APIs for vitest
import { vi } from 'vitest';

// Mock localStorage
const store = {};
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn((key) => store[key] ?? null),
    setItem: vi.fn((key, value) => { store[key] = value; }),
    removeItem: vi.fn((key) => { delete store[key]; }),
    clear: vi.fn(() => { Object.keys(store).forEach(k => delete store[k]); }),
  },
  writable: true,
});

// Mock window.location.search
delete window.location;
window.location = new URL('https://laconexiondeldia.com');

// Mock crypto for Math.random — not needed directly but prevents warnings

// Clean up between tests
beforeEach(() => {
  store.__CLEAR__ = true;
  Object.keys(store).forEach(k => delete store[k]);
  window.location.search = '';
});