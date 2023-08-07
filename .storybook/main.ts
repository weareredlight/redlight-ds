// import { StorybookConfig } from "@storybook/react-vite"

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
}
// const config: StorybookConfig = {
//   framework: '@storybook/react-vite',
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
// };

// export default config;