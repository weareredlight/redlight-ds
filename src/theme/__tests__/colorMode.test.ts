import { act, renderHook } from '@testing-library/react'

import {
  getColorMode, setColorMode, subscribeToColorMode, useColorMode,
} from 'src/theme/colorMode'

const ATTRIBUTE = 'data-rl-color-mode'

// jsdom has no matchMedia: answer `prefers-color-scheme: dark`, and let tests fire `change`
let systemDark = false
const systemListeners = new Set<() => void>()
window.matchMedia = jest.fn().mockImplementation((query: string) => ({
  get matches() { return systemDark && query === '(prefers-color-scheme: dark)' },
  addEventListener: (_: string, listener: () => void) => systemListeners.add(listener),
  removeEventListener: (_: string, listener: () => void) => systemListeners.delete(listener),
}))
const setSystemDark = (dark: boolean) => {
  systemDark = dark
  systemListeners.forEach(listener => listener())
}

// MutationObserver callbacks run as microtasks
const flush = () => new Promise(resolve => { setTimeout(resolve, 0) })

describe('color mode', () => {
  afterEach(() => {
    document.documentElement.removeAttribute(ATTRIBUTE)
    localStorage.clear()
    systemDark = false
  })

  it('getColorMode is light without the attribute, and with "light"', () => {
    expect(getColorMode()).toBe('light')

    document.documentElement.setAttribute(ATTRIBUTE, 'light')
    expect(getColorMode()).toBe('light')
  })

  it('getColorMode is dark with "dark"', () => {
    document.documentElement.setAttribute(ATTRIBUTE, 'dark')

    expect(getColorMode()).toBe('dark')
  })

  it('getColorMode resolves "system" to the operating system setting', () => {
    document.documentElement.setAttribute(ATTRIBUTE, 'system')
    expect(getColorMode()).toBe('light')

    systemDark = true
    expect(getColorMode()).toBe('dark')
  })

  it('setColorMode sets the attribute and saves the choice', () => {
    setColorMode('dark')

    expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')
    expect(localStorage.getItem('rl-color-mode')).toBe('dark')

    setColorMode('system')
    expect(localStorage.getItem('rl-color-mode')).toBe('system')
  })

  it('subscribeToColorMode calls back when the attribute changes, until unsubscribed', async () => {
    const onChange = jest.fn()
    const unsubscribe = subscribeToColorMode(onChange)

    setColorMode('dark')
    await flush()
    expect(onChange).toHaveBeenCalledTimes(1)

    unsubscribe()
    setColorMode('light')
    await flush()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('subscribeToColorMode calls back when the operating system setting changes', () => {
    const onChange = jest.fn()
    const unsubscribe = subscribeToColorMode(onChange)

    setSystemDark(true)
    expect(onChange).toHaveBeenCalledTimes(1)

    unsubscribe()
    setSystemDark(false)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('subscribeToColorMode applies a mode saved in another tab, and calls back', async () => {
    const onChange = jest.fn()
    const unsubscribe = subscribeToColorMode(onChange)

    // What the browser fires here when another tab of the same site saves a mode
    window.dispatchEvent(new StorageEvent('storage', { key: 'rl-color-mode', newValue: 'dark' }))
    await flush()
    expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')
    expect(onChange).toHaveBeenCalledTimes(1)

    // Other keys and values that aren't a mode are ignored
    window.dispatchEvent(new StorageEvent('storage', { key: 'other', newValue: 'light' }))
    window.dispatchEvent(new StorageEvent('storage', { key: 'rl-color-mode', newValue: 'purple' }))
    await flush()
    expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')

    unsubscribe()
    window.dispatchEvent(new StorageEvent('storage', { key: 'rl-color-mode', newValue: 'light' }))
    expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')
  })

  describe('useColorMode', () => {
    it('shows the mode of the page', () => {
      document.documentElement.setAttribute(ATTRIBUTE, 'dark')
      const { result } = renderHook(() => useColorMode())

      expect(result.current.mode).toBe('dark')
    })

    it('toggles between light and dark, and saves the choice', async () => {
      const { result } = renderHook(() => useColorMode())

      await act(async () => {
        result.current.toggle()
        await flush()
      })
      expect(result.current.mode).toBe('dark')
      expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')
      expect(localStorage.getItem('rl-color-mode')).toBe('dark')

      await act(async () => {
        result.current.toggle()
        await flush()
      })
      expect(result.current.mode).toBe('light')
    })

    it('keeps every component that calls it in sync', async () => {
      const first = renderHook(() => useColorMode())
      const second = renderHook(() => useColorMode())

      await act(async () => {
        first.result.current.setMode('dark')
        await flush()
      })

      expect(second.result.current.mode).toBe('dark')
    })

    it('follows the operating system with "system"', async () => {
      const { result } = renderHook(() => useColorMode())

      await act(async () => {
        result.current.setMode('system')
        await flush()
      })
      expect(result.current.mode).toBe('light')

      act(() => setSystemDark(true))
      expect(result.current.mode).toBe('dark')
    })

    it('applies the choice saved by a previous visit when it mounts', async () => {
      document.documentElement.setAttribute(ATTRIBUTE, 'system')
      localStorage.setItem('rl-color-mode', 'dark')

      const { result } = renderHook(() => useColorMode())
      await act(flush)

      expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('dark')
      expect(result.current.mode).toBe('dark')
    })

    it('ignores a saved value that is not a mode', async () => {
      document.documentElement.setAttribute(ATTRIBUTE, 'light')
      localStorage.setItem('rl-color-mode', 'purple')

      renderHook(() => useColorMode())
      await act(flush)

      expect(document.documentElement.getAttribute(ATTRIBUTE)).toBe('light')
    })
  })
})
