// Dark version of the default theme, used by Storybook in dark mode (the toggle in the toolbar).
// Same rule as the playground's Midnight theme: every scale is inverted, so "tints" (100–500)
// blend toward the dark surface and "shades" (600–900) toward white. The base colors (and so
// the on* colors over them) stay the same. `white` is the card surface and `black` the text.
import { scalesToCss } from 'src/theme/tokens'

const darkColors = {
  black: '#F4F4F6', // brightest text
  white: '#18181F', // card / input surface
  // primary colors
  primary100: '#1C2441', // 85% toward surface
  primary200: '#1F2C57', // 75% toward surface
  primary300: '#243B84', // 55% toward surface
  primary400: '#2A4BB1', // 35% toward surface
  primary500: '#2F5ADD', // 15% toward surface
  primary: '#3366FF', // base
  primary600: '#5C85FF', // 20% toward white
  primary700: '#85A3FF', // 40% toward white
  primary800: '#ADC2FF', // 60% toward white
  primary900: '#D6E0FF', // 80% toward white
  // neutral colors: 100 is the page ground (darker than the surface), 900 near-white text
  neutral100: '#0E0E13',
  neutral200: '#26262F',
  neutral300: '#363641',
  neutral400: '#4A4A57',
  neutral500: '#62626F',
  neutral: '#7D7D8A', // base
  neutral600: '#9C9CA8',
  neutral700: '#BDBDC7', // secondary text
  neutral800: '#DCDCE3', // body text
  neutral900: '#F4F4F6', // headings
  // success colors
  success100: '#243936', // 80% toward surface
  success200: '#2F5A4E', // 60% toward surface
  success300: '#3B7B65', // 40% toward surface
  success400: '#469C7D', // 20% toward surface
  success: '#52BD94', // base
  success500: '#7DCEAF', // 25% toward white
  success600: '#A0DBC4', // 45% toward white
  // danger colors
  danger100: '#3D2126', // 80% toward surface
  danger200: '#62292D', // 60% toward surface
  danger300: '#873235', // 40% toward surface
  danger400: '#AC3A3C', // 20% toward surface
  danger: '#D14343', // base
  danger500: '#DC7272', // 25% toward white
  danger600: '#E69898', // 45% toward white
}

const darkShadows = {
  mainShadow: '0px 16px 40px -8px rgba(0, 0, 0, 0.6)',
  cardShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
}

// Only the tokens above change; the rest keep the default values from virtual:rl-tokens.css.
// .storybook/preview.ts sets `data-rl-color-mode` on <html>.
export const darkThemeCss = `${
  scalesToCss(':root[data-rl-color-mode="dark"]', { colors: darkColors, shadows: darkShadows })
}:root[data-rl-color-mode="dark"]{color-scheme:dark}`
