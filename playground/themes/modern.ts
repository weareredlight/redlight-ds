// Modern — clean SaaS look: indigo, cool slate, rounded corners, soft shadows.
import type { PlaygroundTheme } from './base'

import { baseSizes } from './base'

const modern: PlaygroundTheme = {
  id: 'modern',
  label: 'Modern',
  fontFamily: "'Plus Jakarta Sans', sans-serif",

  colors: {
    black: '#0F172A',
    white: '#FFFFFF',
    // primary colors — indigo
    primary100: '#EDEDFC', // 90% tint
    primary200: '#DCDAFA', // 80% tint
    primary300: '#B9B5F5', // 60% tint
    primary400: '#9590EF', // 40% tint
    primary500: '#726BEA', // 20% tint
    primary: '#4F46E5', // base
    primary600: '#3F38B7', // 20% shade
    primary700: '#2F2A89', // 40% shade
    primary800: '#201C5C', // 60% shade
    primary900: '#100E2E', // 80% shade
    // accent colors — pink
    accent100: '#FDEDF5', // 90% tint
    accent200: '#FBDAEB', // 80% tint
    accent300: '#F7B6D6', // 60% tint
    accent400: '#F491C2', // 40% tint
    accent500: '#F06DAD', // 20% tint
    accent: '#EC4899', // base
    accent600: '#BD3A7A', // 20% shade
    accent700: '#8E2B5C', // 40% shade
    accent800: '#5E1D3D', // 60% shade
    accent900: '#2F0E1F', // 80% shade
    // neutral colors — cool slate
    neutral100: '#F8FAFC', // 80% tint
    neutral200: '#E2E8F0', // 60% tint
    neutral300: '#CBD5E1', // 40% tint
    neutral400: '#B4BFCE', // 20% tint
    neutral500: '#94A3B8', // 10% tint
    neutral: '#7C8BA1', // base
    neutral600: '#64748B', // 20% shade
    neutral700: '#475569', // 40% shade
    neutral800: '#334155', // 60% shade
    neutral900: '#0F172A', // 80% shade
    // success colors — emerald
    success100: '#CFF1E6', // 80% tint
    success200: '#9FE3CD', // 60% tint
    success300: '#70D5B3', // 40% tint
    success400: '#40C79A', // 20% tint
    success: '#10B981', // base
    success500: '#0D9467', // 20% shade
    success600: '#0A6F4D', // 40% shade
    // danger colors — rose
    danger100: '#FDD9DF', // 80% tint
    danger200: '#FBB2BF', // 60% tint
    danger300: '#F88C9E', // 40% tint
    danger400: '#F6657E', // 20% tint
    danger: '#F43F5E', // base
    danger500: '#C3324B', // 20% shade
    danger600: '#922638', // 40% shade
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
    mainShadow: '0px 12px 32px -8px rgba(15, 23, 42, 0.12), 0px 2px 6px rgba(15, 23, 42, 0.04)',
    cardShadow: '0px 1px 3px rgba(15, 23, 42, 0.06), 0px 1px 2px rgba(15, 23, 42, 0.04)',
  },

}

export default modern
