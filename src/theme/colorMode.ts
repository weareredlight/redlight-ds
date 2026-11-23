// Light / dark mode from React, e.g. for a toggle in a settings page. The dark tokens are in
// style.css; the `data-rl-color-mode` attribute on <html> picks the mode. The attribute is the
// only state, so every component that calls useColorMode shows the same mode, with no provider.

import { useCallback, useEffect, useSyncExternalStore } from 'react'

/** The modes `data-rl-color-mode` takes. `system` follows the operating system's setting. */
export type ColorMode = 'light' | 'dark' | 'system'

const ATTRIBUTE = 'data-rl-color-mode'
// Where setColorMode saves the choice. useColorMode, and the README's inline script, read it back
const STORAGE_KEY = 'rl-color-mode'
const MODES: ColorMode[] = ['light', 'dark', 'system']
const SYSTEM_DARK = '(prefers-color-scheme: dark)'

// Puts a saved mode on the page. Only writes when it's a mode and differs from the page's, so
// calling it again (another useColorMode, another listener) doesn't touch the page
const applyMode = (mode: string | null) => {
  const root = document.documentElement
  if (mode && MODES.includes(mode as ColorMode) && root.getAttribute(ATTRIBUTE) !== mode) {
    root.setAttribute(ATTRIBUTE, mode)
  }
}

/**
 * The mode the page shows now: `'light'` or `'dark'` (`system` resolves to the operating
 * system's setting). On the server, where there's no page yet, `'light'`.
 */
export const getColorMode = (): 'light' | 'dark' => {
  if (typeof document === 'undefined') return 'light'
  const mode = document.documentElement.getAttribute(ATTRIBUTE)
  if (mode === 'dark') return 'dark'
  if (mode === 'system' && window.matchMedia(SYSTEM_DARK).matches) return 'dark'
  return 'light'
}

/** Applies a mode to the page, and saves it in this browser for the next visits. */
export const setColorMode = (mode: ColorMode) => {
  document.documentElement.setAttribute(ATTRIBUTE, mode)
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // Storage unavailable (private mode, blocked site data): the mode applies until a reload
  }
}

/**
 * Calls `onChange` when the mode the page shows may have changed: the attribute changed (from
 * setColorMode or any other code), the operating system's setting did, or another tab saved a
 * mode (which is then applied here too). Returns a function that stops listening.
 */
export const subscribeToColorMode = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: [ATTRIBUTE] })
  const system = window.matchMedia(SYSTEM_DARK)
  system.addEventListener('change', onChange)
  // Another tab: the attribute changes, so the observer above calls onChange
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) applyMode(event.newValue)
  }
  window.addEventListener('storage', onStorage)

  return () => {
    observer.disconnect()
    system.removeEventListener('change', onChange)
    window.removeEventListener('storage', onStorage)
  }
}

// Applies the choice saved by a previous visit
const applySavedColorMode = () => {
  try {
    applyMode(localStorage.getItem(STORAGE_KEY))
  } catch {
    // Storage unavailable: the page keeps the mode it has
  }
}

/**
 * The page's light / dark mode, for a toggle:
 * - `mode`: what the page shows, `'light'` or `'dark'` (`system` resolves to the operating
 *   system's setting). `'light'` on the server.
 * - `toggle()`: switches between light and dark.
 * - `setMode(mode)`: `'light'`, `'dark'` or `'system'`.
 *
 * The choice is saved in the browser and applied again when the hook mounts on the next visit.
 * Every component that calls it stays in sync.
 */
export const useColorMode = () => {
  useEffect(applySavedColorMode, [])
  const mode = useSyncExternalStore(subscribeToColorMode, getColorMode, () => 'light' as const)
  const toggle = useCallback(() => {
    setColorMode(getColorMode() === 'dark' ? 'light' : 'dark')
  }, [])

  return { mode, toggle, setMode: setColorMode }
}
