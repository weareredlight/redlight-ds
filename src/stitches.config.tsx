import { createStitches, globalCss } from '@stitches/react'
import { mixins } from 'stitches-mixins'

import { themeColors } from 'theme'

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'SFProRegular',
      src: 'url("./fonts/SFProText-Regular.woff")',
    },
    {
      fontFamily: 'SFProMedium',
      src: 'url("./fonts/SFProText-Medium.woff")',
    },
    {
      fontFamily: 'SFProSemiBold',
      src: 'url("./fonts/SFProText-Semibold.woff")',
    },
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})
globalStyles()

export const { styled, theme } = createStitches({
  theme: {
    colors: themeColors,
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
      lg: 600,
    },
    lineHeights: {
      sm: '100%',
      md: '120%',
      lg: '140%',
      xlg: '150%',
    },
    radii: {
      xxsm: '2px',
      xsm: '4px',
      sm: '8px',
      md: '12px',
      lg: '14px',
      xlg: '16px',
      full: '9999px'
    },
    shadows: {
      mainShadow: '0px 4px 20px $colors$neutral200',
      cardShadow: '0px 2px 8px $colors$neutral200',
    }

  },
  utils: {
    include: mixins({
      // headings
      heading1: {
        fontSize: '$xxxlg',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold'
      },
      heading2: {
        fontSize: '$xxlg',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold'
      },
      heading3: {
        fontSize: '$xlg',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold'
      },
      heading4: {
        fontSize: '$lg',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold'
      },
      heading5: {
        fontSize: '$md',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold'
      },
      heading6: {
        fontSize: '$sm',
        fontWeight: '$md',
        lineHeight: '$md',
        fontFamily: 'SFProMedium'
      },
      heading7: {
        fontSize: '$xsm',
        fontWeight: '$md',
        lineHeight: '$md',
        fontFamily: 'SFProMedium'
      },
      // subHeadings
      subHeading: {
        fontSize: '$xsm',
        fontWeight: '$lg',
        lineHeight: '$md',
        fontFamily: 'SFProSemiBold',
        textTransform: 'uppercase'
      },
      subHeadingSmall: {
        fontSize: '$xxsm',
        fontWeight: '$md',
        lineHeight: '$sm',
        fontFamily: 'SFProMedium',
        textTransform: 'uppercase'
      },
      // paragraphs
      paragraph: {
        fontSize: '$md',
        fontWeight: '$n',
        lineHeight: '$xlg',
        fontFamily: 'SFProRegular'
      },
      textBlock: {
        fontSize: '$sm',
        fontWeight: '$n',
        lineHeight: '$lg',
        fontFamily: 'SFProRegular'
      },
      microCopy: {
        fontSize: '$xsm',
        fontWeight: '$n',
        lineHeight: '$lg',
        fontFamily: 'SFProRegular'
      },
    }),
  }
})

export type ColorType = keyof typeof theme.colors
export const colorOptions = Object.keys(theme.colors) as ColorType[]
export const getColor = (color: ColorType) => theme.colors[color]

export type SizeType = keyof typeof theme.sizes
export const sizeOptions = Object.keys(theme.sizes) as SizeType[]
export const getSize = (size: SizeType) => theme.sizes[size]
