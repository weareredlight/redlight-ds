import { createStitches, globalCss } from '@stitches/react'
import merge from 'lodash.merge'

import { colors } from './theme/colors'
import { media } from './theme/media'
import { mixins } from './theme/mixins'
import { shadows } from './theme/shadows'
import { sizes } from './theme/sizes'

// eslint-disable-next-line import/no-mutable-exports
let { styled, theme } = createStitches({
  theme: {
    colors,
    ...sizes,
    shadows,
  },
  media,
  utils: { include: mixins }
})

export const setupTheme = ({
  userColors,
  userSizes,
  userShadows,
  userMedia,
  userUtils,
  fontFamily = 'Roboto',
}: {
  userColors?: Record<string, string>
  userSizes?: Record<string, Record<string, (string | number)>>
  userShadows?: Record<string, string>
  userMedia?: Record<string, string>
  userUtils?: Record<string, string>
  fontFamily?: string
}) => {
  const globalStyles = globalCss({
    '@import': [
      'url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\')',
    ],
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily
    }
  })
  globalStyles()
  const newSetup = createStitches({
    theme: {
      colors: merge(
        {},
        colors,
        userColors || {},
      ),
      ...(merge(
        {},
        sizes,
        userSizes,
      )),
      shadows: merge(
        {},
        shadows,
        userShadows,
      ),
    },
    media: merge(
      {},
      media,
      userMedia,
    ),
    utils: {
      include: mixins,
      ...userUtils,
    }
  })
  // @ts-expect-error: diff styles between first setup
  styled = newSetup.styled
  theme = newSetup.theme
}

export { styled, theme }

export type ColorType = keyof typeof theme.colors
export const colorOptions = Object.keys(theme.colors) as ColorType[]
export const getColor = (color: ColorType) => theme.colors[color]
