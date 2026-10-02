// Brutalist — loud and graphic: electric blue, yellow, monospace type,
// square corners and hard offset shadows.
import type { PlaygroundTheme } from './base'

import { baseSizes } from './base'

const brutalist: PlaygroundTheme = {
  id: 'brutalist',
  label: 'Brutalist',
  fontFamily: "'Space Mono', monospace",

  colors: {
    black: '#0A0A0A',
    white: '#FFFFFF',
    // primary colors — electric blue
    primary100: '#EAEAFF', // 90% tint
    primary200: '#D5D5FF', // 80% tint
    primary300: '#AAAAFF', // 60% tint
    primary400: '#8080FF', // 40% tint
    primary500: '#5555FF', // 20% tint
    primary: '#2B2BFF', // base
    primary600: '#2222CC', // 20% shade
    primary700: '#1A1A99', // 40% shade
    primary800: '#111166', // 60% shade
    primary900: '#090933', // 80% shade
    // accent colors — signal yellow
    accent100: '#FFFAE8', // 90% tint
    accent200: '#FEF5D0', // 80% tint
    accent300: '#FDEBA1', // 60% tint
    accent400: '#FCE073', // 40% tint
    accent500: '#FBD644', // 20% tint
    accent: '#FACC15', // base
    accent600: '#C8A311', // 20% shade
    accent700: '#967A0D', // 40% shade
    accent800: '#645208', // 60% shade
    accent900: '#322904', // 80% shade
    // neutral colors — high-contrast greys on a pale yellow ground
    neutral100: '#FFF9DB', // 80% tint
    neutral200: '#E5E5E5', // 60% tint
    neutral300: '#A3A3A3', // 40% tint
    neutral400: '#8A8A8A', // 20% tint
    neutral500: '#737373', // 10% tint
    neutral: '#525252', // base
    neutral600: '#404040', // 20% shade
    neutral700: '#262626', // 40% shade
    neutral800: '#171717', // 60% shade
    neutral900: '#0A0A0A', // 80% shade
    // success colors — green
    success100: '#D0EDDB', // 80% tint
    success200: '#A2DAB7', // 60% tint
    success300: '#73C892', // 40% tint
    success400: '#45B56E', // 20% tint
    success: '#16A34A', // base
    success500: '#12823B', // 20% shade
    success600: '#0D622C', // 40% shade
    // danger colors — crimson
    danger100: '#F9D2DA', // 80% tint
    danger200: '#F3A5B6', // 60% tint
    danger300: '#ED7791', // 40% tint
    danger400: '#E74A6D', // 20% tint
    danger: '#E11D48', // base
    danger500: '#B4173A', // 20% shade
    danger600: '#87112B', // 40% shade
  },

  sizes: {
    ...baseSizes,
    radii: {
      xxsm: '0px',
      xsm: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xlg: '0px',
      full: '0px',
    },
  },

  shadows: {
    mainShadow: '6px 6px 0px $colors$black',
    cardShadow: '4px 4px 0px $colors$black',
  },

}

export default brutalist
