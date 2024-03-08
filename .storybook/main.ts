import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
    },
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    '@storybook/blocks'
  ],
  docs: {
    autodocs: true,
    defaultName: 'How to use',
  },
  features: {
    storyStoreV7: false
  }
};
export default config;
