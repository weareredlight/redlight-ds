import { colors } from './colors'
import { shadows } from './shadows'
import { sizes } from './sizes'

export type Scale = Record<string, string | number>
export type Scales = Record<string, Scale>

export const defaultScales: Scales = {
  colors,
  ...sizes,
  shadows,
}

// `--colors-primary`, `--space-xxsm`, ... (same names as with Stitches, so overrides still work)
export const tokenVar = (scale: string, token: string) => `--${scale}-${token}`

// Resolves token references inside values, e.g. `0 4px 20px $colors$neutral200`
// or `$neutral200` (same scale) to `var(--colors-neutral200)`.
const resolveTokenRefs = (value: string, scale: string) => value
  .replace(/\$(\w+)\$(\w+)/g, (_, refScale, token) => `var(${tokenVar(refScale, token)})`)
  .replace(/\$(\w+)/g, (_, token) => `var(${tokenVar(scale, token)})`)

export const scalesToCssVars = (scales: Scales) => Object.entries(scales)
  .flatMap(([scale, tokens]) => Object.entries(tokens)
    .map(([token, value]) => `${tokenVar(scale, token)}:${resolveTokenRefs(String(value), scale)}`))

export const scalesToCss = (selector: string, scales: Scales) => `${selector}{${scalesToCssVars(scales).join(';')}}`

// `{ colors: { primary: 'var(--colors-primary)' }, ... }`, for inline styles and JS.
export const scalesToVarRefs = <T extends Scales>(scales: T) => Object.fromEntries(
  Object.entries(scales).map(([scale, tokens]) => [
    scale,
    Object.fromEntries(Object.keys(tokens).map(token => [token, `var(${tokenVar(scale, token)})`])),
  ]),
) as { [S in keyof T]: { [K in keyof T[S]]: string } }
