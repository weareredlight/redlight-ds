/* eslint-disable quotes */
// Code snippets shown on the Get Started docs page

export const Installation = `yarn add @weareredlight/design-system
# or
npm install --save @weareredlight/design-system`

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

export const ThemeCss = `/* theme.css: only what changes from the design system */
:root {
  --colors-primary: #F472B6;
  --colors-primary600: #DB2777;
  --radii-xsm: 6px;
}

/* The design system sets its font on every element (*); html * takes over from it */
html * {
  font-family: 'Inter', sans-serif;
}`

export const ThemeImport = `// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import '@weareredlight/design-system/dist/style.css'
import './theme.css'`

export const CustomizeUse = `import { buttonSelector } from '@weareredlight/design-system'

<Button className='checkout-button' style={{ marginTop: 'var(--space-lg)' }}>
  Pay
</Button>

// buttonSelector === '.rl-Button-button'`
