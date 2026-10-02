// Registers every playground theme with the library, then switches between
// them by swapping the theme's class on <body>.
import type { PlaygroundTheme } from './base'

import { setupTheme, theme } from '../../src'

import brutalist from './brutalist'
import editorial from './editorial'
import midnight from './midnight'
import modern from './modern'

export const themes: PlaygroundTheme[] = [modern, editorial, brutalist, midnight]

const STORAGE_KEY = 'playground-theme'

let classNames: Record<string, string> = {}
let fontStyles: HTMLStyleElement | undefined
let previousClassName = theme.className

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

// Registers the themes and applies the saved one. Safe to call more than once.
export const setupThemes = () => {
  if (fontStyles) return

  previousClassName = theme.className
  // setupTheme sets the font with a `*` rule shared by all themes, so each theme
  // gets its own font rule scoped to its class instead.
  fontStyles = document.createElement('style')
  document.head.appendChild(fontStyles)

  themes.forEach(t => {
    const { className } = setupTheme({
      fontFamily: t.fontFamily,
      userColors: t.colors,
      userSizes: t.sizes,
      userShadows: t.shadows,
    })
    classNames[t.id] = className
    fontStyles!.textContent += `.${className}, .${className} * { font-family: ${t.fontFamily}; }\n`
  })

  applyTheme(getSavedThemeId())
}

// setupTheme also makes each theme global (its tokens on :root, its font on `*`),
// so a page that embeds the playground (Storybook) removes them all when leaving it.
export const teardownThemes = () => {
  Object.values(classNames).forEach(className => {
    document.body.classList.remove(className)
    document.querySelector(`style[data-rl-theme="${className}"]`)?.remove()
  })
  fontStyles?.remove()
  fontStyles = undefined
  classNames = {}
  theme.className = previousClassName
  document.documentElement.style.colorScheme = ''
}
