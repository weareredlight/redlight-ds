// Editorial — warm print feel: deep emerald, stone neutrals, sharp corners.
import type { PlaygroundTheme } from './base'

import { baseMedia, baseSizes } from './base'

const editorial: PlaygroundTheme = {
  id: 'editorial',
  label: 'Editorial',
  fontFamily: "'Space Grotesk', sans-serif",

  colors: {
    black: '#1C1917',
    white: '#FFFDF8',
    // primary colors — deep emerald
    primary100: '#E7F1F1', // 90% tint
    primary200: '#CFE4E2', // 80% tint
    primary300: '#9FC8C5', // 60% tint
    primary400: '#6FADA8', // 40% tint
    primary500: '#3F918B', // 20% tint
    primary: '#0F766E', // base
    primary600: '#0C5E58', // 20% shade
    primary700: '#094742', // 40% shade
    primary800: '#062F2C', // 60% shade
    primary900: '#031816', // 80% shade
    // accent colors — amber
    accent100: '#FEF5E7', // 90% tint
    accent200: '#FDECCE', // 80% tint
    accent300: '#FBD89D', // 60% tint
    accent400: '#F9C56D', // 40% tint
    accent500: '#F7B13C', // 20% tint
    accent: '#F59E0B', // base
    accent600: '#C47E09', // 20% shade
    accent700: '#935F07', // 40% shade
    accent800: '#623F04', // 60% shade
    accent900: '#312002', // 80% shade
    // neutral colors — warm stone
    neutral100: '#F5F5F4', // 80% tint
    neutral200: '#E7E5E4', // 60% tint
    neutral300: '#D6D3D1', // 40% tint
    neutral400: '#C2BDB9', // 20% tint
    neutral500: '#A8A29E', // 10% tint
    neutral: '#8A837E', // base
    neutral600: '#78716C', // 20% shade
    neutral700: '#57534E', // 40% shade
    neutral800: '#44403C', // 60% shade
    neutral900: '#1C1917', // 80% shade
    // success colors — olive green
    success100: '#DBE5CF', // 80% tint
    success200: '#B8CB9F', // 60% tint
    success300: '#94B06F', // 40% tint
    success400: '#71963F', // 20% tint
    success: '#4D7C0F', // base
    success500: '#3E630C', // 20% shade
    success600: '#2E4A09', // 40% shade
    // danger colors — burnt orange
    danger100: '#F3D9CE', // 80% tint
    danger200: '#E7B39E', // 60% tint
    danger300: '#DA8D6D', // 40% tint
    danger400: '#CE673D', // 20% tint
    danger: '#C2410C', // base
    danger500: '#9B340A', // 20% shade
    danger600: '#742707', // 40% shade
  },

  sizes: {
    ...baseSizes,
    radii: {
      xxsm: '0px',
      xsm: '0px',
      sm: '2px',
      md: '2px',
      lg: '4px',
      xlg: '4px',
      full: '9999px',
    },
  },

  shadows: {
    mainShadow: '0px 4px 20px $colors$neutral200',
    cardShadow: '0px 2px 8px $colors$neutral200',
  },

  media: baseMedia,
}

export default editorial
