import path from 'path'

import type { CSSModulesOptions, CSSOptions, Plugin } from 'vite'

import { defaultScales, scalesToCss } from '../../src/theme/tokens'

const TOKENS_ID = 'virtual:rl-tokens.css'

/**
 * Serves `virtual:rl-tokens.css`: the default theme tokens as CSS variables,
 * generated from src/theme so the TS objects stay the single source of truth.
 */
export const tokensPlugin = (): Plugin => ({
  name: 'rl-tokens',
  resolveId: id => (id === TOKENS_ID ? TOKENS_ID : null),
  load: id => (id === TOKENS_ID ? scalesToCss(':root,.rl-theme-default', defaultScales) : null),
})

/**
 * Stable, readable class names: `rl-<Component>-<class>` (e.g. `rl-Button-primary`),
 * so consumers can target them and they are identical across builds.
 */
export const cssModules: CSSModulesOptions = {
  generateScopedName: (name, filename) => {
    const component = path.basename(path.dirname(filename.split('?')[0]))
    return `rl-${component}-${name}`
  },
}

/**
 * Sass resolves `@use` paths from `src`, so shared partials load the same way from any depth
 * (e.g. `@use 'styles/typography'` instead of `@use '../../styles/typography'`).
 */
export const scssOptions: NonNullable<CSSOptions['preprocessorOptions']>['scss'] = {
  loadPaths: [path.resolve(__dirname, '../../src')],
}
