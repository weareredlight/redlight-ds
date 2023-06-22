import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorSecondary: '#D8082A',

  // UI
  appBg: '#F4F4F7',
  appContentBg: '#FFFFFF',
  appBorderColor: '#BCBFD1',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#393C47',

  // Toolbar default and active colors
  barTextColor: '#E6E6E6',
  barSelectedColor: '#D8082A',
  barBg: '#1D1E24',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'RedLight Design System',
  brandTitle: '<img src="/assets/logo_system.svg" style="max-width: 184px; width: 100%"/>'
});