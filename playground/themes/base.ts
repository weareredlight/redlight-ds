// Shape every playground theme follows, plus the library's default scales
// (from src/theme/) for themes to build on.

export type PlaygroundTheme = {
  id: string
  label: string
  fontFamily: string
  // Dark themes also switch native controls and scrollbars to dark.
  dark?: boolean
  colors: Record<string, string>
  sizes: Record<string, Record<string, string | number>>
  shadows: Record<string, string>
}

export const baseSizes = {
  sizes: {
    xxxsm: '0.25rem', // 4px
    xxsm: '0.5rem', // 8px
    xsm: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    lg: '1rem', // 16px
    xlg: '1.25rem', // 20px
    xxlg: '1.5rem', // 24px
    xxxlg: '2rem', // 32px
  },
  space: {
    xxxsm: '0.25rem', // 4px
    xxsm: '0.5rem', // 8px
    xsm: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    lg: '1rem', // 16px
    xlg: '1.25rem', // 20px
    xxlg: '1.5rem', // 24px
    xxxlg: '2rem', // 32px
  },
  fontSizes: {
    xxsm: '0.625rem', // 10px
    xsm: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xlg: '1.25rem', // 20px
    xxlg: '1.5rem', // 24px
    xxxlg: '2rem', // 32px
  },
  fontWeights: {
    n: 400,
    md: 500,
    lg: 700,
  },
  lineHeights: {
    sm: '100%',
    md: '120%',
    lg: '140%',
    xlg: '150%',
  },
}
