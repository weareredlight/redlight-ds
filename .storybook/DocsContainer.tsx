import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import type { PropsWithChildren } from 'react'

import { DocsContainer as BaseDocsContainer } from '@storybook/addon-docs/blocks'
import { useSyncExternalStore } from 'react'

import { getColorMode, subscribeToColorMode } from './colorMode'
import { themes } from './theme'

// Docs pages (their frame, prop tables and story blocks) follow the light / dark toggle
const DocsContainer = (props: PropsWithChildren<DocsContainerProps>) => {
  const mode = useSyncExternalStore(subscribeToColorMode, getColorMode)
  return <BaseDocsContainer {...props} theme={themes[mode]} />
}

export default DocsContainer
