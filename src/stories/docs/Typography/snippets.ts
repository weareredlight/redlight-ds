/* eslint-disable quotes */
// Code snippets shown on the Typography docs page

export const TextComponent = `import { Text } from '@weareredlight/design-system'

<Text variant='h1'>We are RedLight</Text>
<Text variant='textBlock' color='neutral700'>Body text</Text>`

export const TextScss = `@use '@weareredlight/design-system/src/styles/typography';

.title {
  @include typography.heading3;
}`

export const TextFont = `setupTheme({ fontFamily: "'Inter', sans-serif" })`
