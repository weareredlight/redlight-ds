// Midnight — dark mode with a hot pink primary. Every scale is inverted:
// "tints" (100–500) blend toward the dark surface and "shades" (600–900)
// toward white, so hover/selected states and text-on-fill pairs still read.
// `white` is the card surface and `black` the brightest text.
import type { PlaygroundTheme } from './base'

import { baseMedia, baseSizes } from './base'

const midnight: PlaygroundTheme = {
  id: 'midnight',
  label: 'Midnight',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  dark: true,

  colors: {
    black: '#F4F4F6', // brightest text
    white: '#18181F', // card / input surface
    // primary colors — hot pink
    primary100: '#392636', // 85% toward surface
    primary200: '#4F2F45', // 75% toward surface
    primary300: '#7B4163', // 55% toward surface
    primary400: '#A75381', // 35% toward surface
    primary500: '#D3659F', // 15% toward surface
    primary: '#F472B6', // base
    primary600: '#F68EC5', // 20% toward white
    primary700: '#F8AAD3', // 40% toward white
    primary800: '#FBC7E2', // 60% toward white
    primary900: '#FDE3F0', // 80% toward white
    // accent colors — violet
    accent100: '#2D2940', // 85% toward surface
    accent200: '#3C3556', // 75% toward surface
    accent300: '#584C82', // 55% toward surface
    accent400: '#7563AD', // 35% toward surface
    accent500: '#927AD9', // 15% toward surface
    accent: '#A78BFA', // base
    accent600: '#B9A2FB', // 20% toward white
    accent700: '#CAB9FC', // 40% toward white
    accent800: '#DCD1FD', // 60% toward white
    accent900: '#EDE8FE', // 80% toward white
    // neutral colors — inverted: 100 is the darkest ground, 900 near-white text
    neutral100: '#0E0E13', // page ground
    neutral200: '#26262F', // borders, subtle fills
    neutral300: '#363641',
    neutral400: '#4A4A57',
    neutral500: '#62626F',
    neutral: '#7D7D8A', // base
    neutral600: '#9C9CA8',
    neutral700: '#BDBDC7', // secondary text
    neutral800: '#DCDCE3', // body text
    neutral900: '#F4F4F6', // headings
    // success colors — mint
    success100: '#1E3D37', // 80% toward surface
    success200: '#236350', // 60% toward surface
    success300: '#298868', // 40% toward surface
    success400: '#2EAE81', // 20% toward surface
    success: '#34D399', // base
    success500: '#67DEB3', // 25% toward white
    success600: '#8FE7C7', // 45% toward white
    // danger colors — coral
    danger100: '#452A33', // 80% toward surface
    danger200: '#733C48', // 60% toward surface
    danger300: '#A04D5C', // 40% toward surface
    danger400: '#CE5F71', // 20% toward surface
    danger: '#FB7185', // base
    danger500: '#FC95A4', // 25% toward white
    danger600: '#FDB1BC', // 45% toward white
  },

  sizes: {
    ...baseSizes,
    radii: {
      xxsm: '4px',
      xsm: '8px',
      sm: '10px',
      md: '14px',
      lg: '16px',
      xlg: '20px',
      full: '9999px',
    },
  },

  shadows: {
    mainShadow: '0px 16px 40px -8px rgba(0, 0, 0, 0.6), 0px 0px 0px 1px rgba(244, 114, 182, 0.08)',
    cardShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
  },

  media: baseMedia,
}

export default midnight
