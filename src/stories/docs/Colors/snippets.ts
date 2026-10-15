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

export const ColorOverride = `setupTheme({
  userColors: { primary: '#F472B6', primary600: '#DB2777' },
})`
