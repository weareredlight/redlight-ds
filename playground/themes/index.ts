// Registers every playground theme with the library up front, then switches
// between them by swapping the theme's class on <body>.
import type { PlaygroundTheme } from './base'

import { setupTheme, theme } from '../../src'

import brutalist from './brutalist'
import editorial from './editorial'
import midnight from './midnight'
import modern from './modern'

export const themes: PlaygroundTheme[] = [modern, editorial, brutalist, midnight]

const STORAGE_KEY = 'playground-theme'

// setupTheme sets the font with a `*` rule shared by all themes, so each theme
// gets its own font rule scoped to its class instead.
const fontStyles = document.createElement('style')
document.head.appendChild(fontStyles)

const classNames: Record<string, string> = {}
themes.forEach(t => {
  setupTheme({
    fontFamily: t.fontFamily,
    userColors: t.colors,
    userSizes: t.sizes,
    userShadows: t.shadows,
    userMedia: t.media,
  })
  // Reading className also injects the theme's token CSS.
  classNames[t.id] = theme.className
  fontStyles.textContent += `.${theme.className}, .${theme.className} * { font-family: ${t.fontFamily}; }\n`
})

export const getSavedThemeId = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved && classNames[saved] ? saved : themes[0].id
}

// The default tokens live on :root. The active theme's class on <body> wins
// everywhere, including portals (modals, toasts, popovers).
export const applyTheme = (id: string) => {
  Object.values(classNames).forEach(className => document.body.classList.remove(className))
  document.body.classList.add(classNames[id])
  document.documentElement.style.colorScheme = themes.find(t => t.id === id)?.dark ? 'dark' : 'light'
  localStorage.setItem(STORAGE_KEY, id)
}

applyTheme(getSavedThemeId())
