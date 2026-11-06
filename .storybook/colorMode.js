// Light / dark mode of the Storybook, chosen with the toolbar toggle (light by default).
// Saved in localStorage, which the manager and the preview iframe share (same origin),
// so a change in the manager reaches the preview through the `storage` event.
const STORAGE_KEY = 'redlight-ds:color-mode';

/** @returns {'light' | 'dark'} */
export const getColorMode = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

/** @param {'light' | 'dark'} mode */
export const setColorMode = (mode) => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Storage unavailable: the preview won't follow and the choice isn't kept after a reload
  }
};

/**
 * Calls `callback` when another window (the manager or the preview) changes the mode.
 * @param {() => void} callback
 * @returns {() => void} unsubscribe
 */
export const subscribeToColorMode = (callback) => {
  /** @param {StorageEvent} event */
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener('storage', onStorage);
  return () => window.removeEventListener('storage', onStorage);
};
