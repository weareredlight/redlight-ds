import type { Preview } from "@storybook/react-vite";

// Stories import components directly, so load what src/index.tsx loads for the library:
// global styles and the default theme tokens.
import 'src/styles/global.scss'
import 'virtual:rl-tokens.css'

import { darkThemeCss } from 'src/stories/darkTheme'

import { getColorMode, subscribeToColorMode } from './colorMode'
import DocsContainer from './DocsContainer'

// In dark mode (toolbar toggle), stories and docs pages use the dark version of the default tokens
const darkStyle = document.createElement('style')
darkStyle.dataset.rlTheme = 'storybook-dark'
darkStyle.textContent = darkThemeCss
document.head.appendChild(darkStyle)

const applyColorMode = () => { document.documentElement.dataset.rlColorMode = getColorMode() }
applyColorMode()
subscribeToColorMode(applyColorMode)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: [
          'Get Started',
          'Custom Components',
          'Playground',
          'Style Guides', ['Typography', 'Colors', 'Spacing & Sizes', 'Icons'],
          'Components'
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: DocsContainer,
      // Code samples start expanded on docs pages
      canvas: { sourceState: 'shown' },
    },
    viewMode: 'docs'
  },
  tags: ['autodocs'],
}

export default preview

export const globalTypes = {
  containerSize: {
    name: 'Container size',
    description: 'Global container\'s size',
    defaultValue: '400px',
  },
};

