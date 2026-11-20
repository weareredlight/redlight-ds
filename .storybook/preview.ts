import type { Preview } from "@storybook/react-vite";

// Stories import components directly, so load what src/index.tsx loads for the library:
// global styles and the theme tokens (default, plus the dark mode ones).
import 'src/styles/global.scss'
import 'virtual:rl-tokens.css'

import { getColorMode, subscribeToColorMode } from './colorMode'
import DocsContainer from './DocsContainer'

// In dark mode (toolbar toggle), stories and docs pages use the library's dark mode: the
// `data-rl-color-mode` attribute turns on the dark tokens from virtual:rl-tokens.css
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
          'Releases',
          'Custom Components',
          'Playground',
          'Style Guides', ['Typography', 'Colors', 'Dark Mode', 'Spacing & Sizes', 'Icons'],
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

