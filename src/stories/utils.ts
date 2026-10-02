/* eslint-disable quotes */
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps, JSXElementConstructor } from 'react'

export function storyFactory<
  // eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = never,
>(Component: C, metaPrams: Omit<Meta<C>, 'component'>) {
  return {
    meta: {
      ...(metaPrams ?? {}),
      component: Component,
    },
    story: (args: StoryObj<ComponentProps<typeof Component>>) => args,
  }
}

/* ---------------SNIPPETS-------------- */
export const Installation = `$ yarn add @weareredlight/design-system
# or
$ npm install --save @weareredlight/design-system`

export const StylesImport = `// Once, at your app's entry point (main.tsx, app/layout.tsx, pages/_app.tsx...)
import '@weareredlight/design-system/dist/style.css'`

export const BtnImport = `import { Button } from '@weareredlight/design-system'`

export const BtnUse = `<Button
  variant='primary'
  size='large'
  onClick={yourFunction}
>
  Button Text
</Button>`

export const AlertUse = `import { alert, ToastContainer } from '@weareredlight/design-system'

// Render it once, near the root of your app
<ToastContainer />

alert.success('Saved', 'Your changes were saved.')`

export const ThemeSetup = `import { setupTheme } from '@weareredlight/design-system'

const { className } = setupTheme({
  userColors: { primary: '#F472B6', primary600: '#DB2777' },
  userSizes: { radii: { xsm: '6px' } },
  fontFamily: "'Inter', sans-serif",
})`

export const ThemeCss = `/* Load after style.css */
:root {
  --colors-primary: #F472B6;
  --radii-xsm: 6px;
}`

export const CustomizeUse = `import { buttonSelector } from '@weareredlight/design-system'

<Button className='checkout-button' style={{ marginTop: 'var(--space-lg)' }}>
  Pay
</Button>

// buttonSelector === '.rl-Button-button'`

export const TextComponent = `import { Text } from '@weareredlight/design-system'

<Text variant='h1'>We are RedLight</Text>
<Text variant='textBlock' color='neutral700'>Body text</Text>`

export const TextScss = `@use '@weareredlight/design-system/src/styles/typography';

.title {
  @include typography.heading3;
}`

export const TextFont = `setupTheme({ fontFamily: "'Inter', sans-serif" })`

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
