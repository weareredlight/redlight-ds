import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Prop tables only come from the library components. Story helpers, mocks and the playground
      // sit outside the root tsconfig.json, so docgen would skip them with a warning anyway
      exclude: ['**/*.stories.tsx', 'src/stories/**', 'playground/**'],
    },
    check: false,
  },
  addons: ['@storybook/addon-docs'],
  docs: {
    defaultName: 'How to use',
  },
  async viteFinal(config) {
    config.publicDir = false
    return config
  },
}
export default config
