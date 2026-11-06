import { create } from 'storybook/theming';

const brand = {
  colorSecondary: '#D8082A',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#E6E6E6',
  barSelectedColor: '#D8082A',
  barBg: '#1D1E24',

  inputBorderRadius: 4,

  brandTitle: 'RedLight Design System',
  brandUrl: './',
  brandTarget: '_self',
};

const light = create({
  ...brand,
  base: 'light',

  // UI
  appBg: '#F4F4F7',
  appContentBg: '#FFFFFF',
  appBorderColor: '#BCBFD1',

  // Text colors
  textColor: '#393C47',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',

  brandImage: 'logo.png',
});

// Same surfaces as the dark tokens in src/stories/darkTheme.ts
const dark = create({
  ...brand,
  base: 'dark',

  // UI
  appBg: '#0E0E13',
  appContentBg: '#18181F',
  appBorderColor: '#363641',

  // Text colors
  textColor: '#DCDCE3',

  // Form colors
  inputBg: '#18181F',
  inputBorder: '#4A4A57',
  inputTextColor: '#F4F4F6',

  brandImage: 'logo-dark.png',
});

// Picked with the light / dark toggle in the toolbar (see colorMode.js)
export const themes = { light, dark };
