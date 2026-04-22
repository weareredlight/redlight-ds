import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
docs: {
    autodocs: true,
    defaultName: 'How to use',
  },
}
export default config
