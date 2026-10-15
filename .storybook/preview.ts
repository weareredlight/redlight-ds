import type { Preview } from "@storybook/react-vite";

// Stories import components directly, so load what src/index.tsx loads for the library:
// global styles and the default theme tokens.
import '../src/styles/global.scss'
import 'virtual:rl-tokens.css'

import RedTheme from './theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: [
          'Get Started',
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
      theme: RedTheme,
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

