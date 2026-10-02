import merge from 'lodash.merge'

import { colors } from './colors'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { defaultScales, scalesToCss, scalesToVarRefs } from './tokens'

// Class that carries the default tokens (they are also set on :root by the generated tokens CSS).
export const DEFAULT_THEME_CLASS = 'rl-theme-default'

export const theme = {
  ...scalesToVarRefs({ colors, ...sizes, shadows }),
  // Class of the last theme created by `setupTheme` (the default theme until then).
  className: DEFAULT_THEME_CLASS,
}

export type ColorType = keyof typeof colors
export const colorOptions = Object.keys(colors) as ColorType[]
export const getColor = (color: ColorType) => theme.colors[color]

let themeCount = 0

/**
 * Creates a theme from the default tokens merged with the given overrides.
 * Like before, the new theme also becomes the global one (applied on :root);
 * the returned `className` scopes it to an element instead.
 */
export const setupTheme = ({
  userColors,
  userSizes,
  userShadows,
  fontFamily = 'Roboto',
}: {
  userColors?: Record<string, string>
  userSizes?: Record<string, Record<string, (string | number)>>
  userShadows?: Record<string, string>
  fontFamily?: string
}) => {
  themeCount += 1
  const className = `rl-theme-${themeCount}`
  const scales = merge({}, defaultScales, {
    colors: userColors,
    ...userSizes,
    shadows: userShadows,
  })

  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.dataset.rlTheme = className
    style.textContent = `*{font-family:${fontFamily}}${scalesToCss(`:root,.${className}`, scales)}`
    document.head.appendChild(style)
  }

  theme.className = className
  return { className }
}
