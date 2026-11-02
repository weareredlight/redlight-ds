import { colors } from './colors'
import { shadows } from './shadows'
import { sizes } from './sizes'

type Scale = Record<string, string | number>
type Scales = Record<string, Scale>

export const defaultScales = {
  colors,
  ...sizes,
  shadows,
} satisfies Scales

// `--colors-primary`, `--space-xxsm`, ... (same names as with Stitches, so overrides still work)
const tokenVar = (scale: string, token: string) => `--${scale}-${token}`

// Resolves token references inside values, e.g. `0 4px 20px $colors$neutral200`
// or `$neutral200` (same scale) to `var(--colors-neutral200)`.
const resolveTokenRefs = (value: string, scale: string) => value
  .replace(/\$(\w+)\$(\w+)/g, (_, refScale, token) => `var(${tokenVar(refScale, token)})`)
  .replace(/\$(\w+)/g, (_, token) => `var(${tokenVar(scale, token)})`)

// An empty token (e.g. a theme without accent), and the on* color of an empty color, is set to
// `initial`: components then use their var() fallback (accent → neutral or primary), and a theme
// scoped to a class doesn't inherit the value another theme set on :root.
const isUnset = (scale: string, token: string, tokens: Scale) => {
  if (tokens[token] === '') return true
  const onColor = scale === 'colors' ? /^on([A-Z])(\w*)$/.exec(token) : null
  return onColor !== null && tokens[onColor[1].toLowerCase() + onColor[2]] === ''
}

const scalesToCssVars = (scales: Scales) => Object.entries(scales)
  .flatMap(([scale, tokens]) => Object.entries(tokens)
    .map(([token, value]) => `${tokenVar(scale, token)}:${
      isUnset(scale, token, tokens) ? 'initial' : resolveTokenRefs(String(value), scale)
    }`))

export const scalesToCss = (selector: string, scales: Scales) => `${selector}{${scalesToCssVars(scales).join(';')}}`

// `{ colors: { primary: 'var(--colors-primary)' }, ... }`, for inline styles and JS.
export const scalesToVarRefs = <T extends Scales>(scales: T) => Object.fromEntries(
  Object.entries(scales).map(([scale, tokens]) => [
    scale,
    Object.fromEntries(Object.keys(tokens).map(token => [token, `var(${tokenVar(scale, token)})`])),
  ]),
) as { [S in keyof T]: { [K in keyof T[S]]: string } }
