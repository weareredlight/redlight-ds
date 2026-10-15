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
