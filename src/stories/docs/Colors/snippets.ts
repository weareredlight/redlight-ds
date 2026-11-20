// Code snippets shown on the Colors docs page

export const ColorCss = `.card {
  color: var(--colors-neutral800);
  background: var(--colors-primary100);
  border: 1px solid var(--colors-primary300);
}`

export const ColorJs = `import { Text, theme, getColor } from '@weareredlight/design-system'

<Text color='danger500'>Something went wrong</Text>

<div style={{ background: theme.colors.primary }} />
getColor('primary') // 'var(--colors-primary)'`

export const ColorOverride = `/* theme.css, imported after style.css */
:root {
  --colors-primary: #F472B6;
  --colors-primary600: #DB2777;
}`

export const ColorDarkTheme = `/* theme.css */
:root[data-rl-color-mode="dark"] {
  --colors-white: #18181F; /* surfaces */
  --colors-black: #F4F4F6; /* text */
  /* ...inverted primary, neutral, success and danger scales */
  --colors-onPrimary: #FFFFFF; /* #3366FF still reads best with white text */
  --colors-onSuccess: #18181F; /* a light green fill reads best with dark text */
}`
