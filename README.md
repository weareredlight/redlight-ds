# Welcome to RedLight's Design System 🚀

<img src="https://drive.google.com/uc?export=view&id=1OQ3SB2QUmhRCWMIwqz46ZExeJ4A20FRQ" width="100%" alt="banner"/>

- Our Design System is a comprehensive collection of design and development resources that aims to streamline and enhance the creation of consistent, user-centric digital experiences.

- It provides a unified framework for designers and developers to work together seamlessly, fostering collaboration, efficiency, and creativity.

## Documentation

https://weareredlight.github.io/redlight-ds

## Requirements

- React and React DOM **18 or newer** (peer dependencies).
- A bundler that can import CSS files from `node_modules` (Vite, Next.js, webpack, Create React App, ...).

## Installation

```sh
$ yarn add @weareredlight/design-system
# or
$ npm install --save @weareredlight/design-system
```

## Setting up

### 1. Import the styles (once)

Import the stylesheet at your app's entry point. It contains every component's styles, the default
theme tokens and the global reset, and loads the Roboto font.

```jsx
import '@weareredlight/design-system/dist/style.css'
```

Where to put it:

| Project | File |
| --- | --- |
| Vite / Create React App | `src/main.tsx` or `src/index.tsx` |
| Next.js (App Router) | `app/layout.tsx` |
| Next.js (Pages Router) | `pages/_app.tsx` |

### 2. Use the components

```jsx
import { Button, Text } from '@weareredlight/design-system'

const Example = () => (
  <>
    <Text variant='h3'>Projects</Text>
    <Button variant='primary' size='large' onClick={createProject}>
      New project
    </Button>
  </>
)
```

Every component's props, variants and examples are in the [Storybook](https://weareredlight.github.io/redlight-ds).

> **Next.js App Router:** the components use React state and effects, so use them inside
> Client Components (files that start with `'use client'`).

### 3. Enable alerts (optional)

To use `alert`, render `ToastContainer` once, near the root of your app:

```jsx
import { alert, ToastContainer } from '@weareredlight/design-system'

const App = () => (
  <>
    <ToastContainer />
    <Button onClick={() => alert.success('Saved', 'Your changes were saved.')}>Save</Button>
  </>
)
```

### 4. Apply your theme (optional)

The theme is a set of CSS variables, so there are two ways to change it.

**With `setupTheme`**, at startup (in the browser):

```jsx
import { setupTheme } from '@weareredlight/design-system'

const { className } = setupTheme({
  userColors: { primary: '#F472B6', primary600: '#DB2777' },
  userSizes: { radii: { xsm: '6px' } },
  userShadows: { cardShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' },
  fontFamily: "'Inter', sans-serif",
})
```

The new values apply to the whole page. Each call also returns a `className` that applies that
theme to one element only (useful to switch between several themes: add the class to `<body>`).

**With plain CSS**, which also works with server-side rendering. Load it after `style.css`:

```css
:root {
  --colors-primary: #F472B6;
  --colors-primary600: #DB2777;
  --radii-xsm: 6px;
}
```

#### Available tokens

| Scale | Variable | Tokens |
| --- | --- | --- |
| Colors | `--colors-*` | `white`, `black`, and `primary`, `accent`, `neutral` (`100`–`900`), `success`, `danger` (`100`–`600`) |
| Spacing | `--space-*` | `xxxsm`, `xxsm`, `xsm`, `sm`, `lg`, `xlg`, `xxlg`, `xxxlg` |
| Sizes | `--sizes-*` | same names as spacing |
| Font sizes | `--fontSizes-*` | `xxsm`, `xsm`, `sm`, `md`, `lg`, `xlg`, `xxlg`, `xxxlg` |
| Font weights | `--fontWeights-*` | `n`, `md`, `lg` |
| Line heights | `--lineHeights-*` | `sm`, `md`, `lg`, `xlg` |
| Radii | `--radii-*` | `xxsm`, `xsm`, `sm`, `md`, `lg`, `xlg`, `full` |
| Shadows | `--shadows-*` | `mainShadow`, `cardShadow` |

The exact values are in [`src/theme`](src/theme) and on the Storybook's *Colors* and *Typography* pages.
From JavaScript, `theme` holds the same references: `theme.colors.primary === 'var(--colors-primary)'`.

### 5. Customize components (optional)

Every component accepts `className` and `style`:

```jsx
<Button className='checkout-button' style={{ marginTop: 'var(--space-lg)' }}>Pay</Button>
```

To style a component from your own CSS, use its root selector (exported as `avatarSelector`,
`buttonSelector`, `inputSelector`, ...). Class names are stable (`rl-<Component>-<class>`):

```jsx
import { buttonSelector } from '@weareredlight/design-system'
// buttonSelector === '.rl-Button-button'
```

### 6. Use the typography and breakpoints in your SCSS (optional)

The package ships its Sass helpers, so your own styles can match the design system:

```scss
@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.title {
  @include typography.heading3;   // heading1–7, subHeading, subHeadingSmall, paragraph, textBlock, microCopy
  color: var(--colors-neutral800);

  @include media.query(sm) {      // sm, md, lg, xlg
    @include typography.heading5;
  }
}
```

## What changed in 0.2.0

The design system no longer uses **Stitches** (deprecated). Styles are now written in
**SCSS Modules** and the theme is a set of **CSS variables**. Components look and behave the same;
what changes is how you set up and customize them.

- **A stylesheet to import.** Styles used to be injected by JavaScript; now they're a regular CSS
  file (`dist/style.css`), so add the import from [step 1](#1-import-the-styles-once).
- **No more Stitches APIs.** `styled`, `css`, the `css` prop and the `Styled*` components are gone.
  Style your own elements with your own CSS/SCSS and the CSS variables above.
- **`className` and `style` on every component**, replacing `css` and `extraClasses`.
- **Theme tokens are CSS variables**, with the same names Stitches generated (`--colors-primary`, ...),
  so existing CSS overrides keep working.
- **Smaller runtime:** no CSS-in-JS work while rendering.

### Migrating from 0.1.x

| 0.1.x (Stitches) | 0.2.0 |
| --- | --- |
| *(nothing to import)* | `import '@weareredlight/design-system/dist/style.css'` |
| `css={{ marginTop: '$lg' }}` | `style={{ marginTop: 'var(--space-lg)' }}` or `className` |
| `extraClasses='my-class'` (Button, Modal) | `className='my-class'` |
| `styled('div', { color: '$primary' })` | your own CSS: `color: var(--colors-primary)` |
| `include: 'heading7'` | `@include typography.heading7;` ([step 6](#6-use-the-typography-and-breakpoints-in-your-scss-optional)) |
| `` [`& ${StyledButton}`]: { ... } `` | `` `${buttonSelector}` `` (or `.rl-Button-button`) in your CSS |
| `theme.colors.primary` (Stitches token object) | `theme.colors.primary` → `'var(--colors-primary)'` |
| `getColor('primary')` → token object | `getColor('primary')` → `'var(--colors-primary)'` |
| `setupTheme(...)`, then read `theme.className` | `const { className } = setupTheme(...)` |
| `setupTheme({ userMedia, userUtils })` | removed (breakpoints live in `src/styles/_media.scss`) |
| `fullWidth='true'` / `isLoading='true'` | booleans only: `fullWidth` / `isLoading` |

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td style="text-align: center">
      <a href="https://github.com/dbgfribeiro">
        <img src="https://avatars.githubusercontent.com/u/44748017?v=4" width="100px;" alt="Diogo Ribeiro"/>
        <br />
        <sub><b>Diogo Ribeiro</b></sub>
      </a>
      <br />
      <sub>Principal designer & developer</sub>
    </td>
    <td style="text-align: center">
      <a href="https://github.com/samuthekid">
        <img src="https://avatars.githubusercontent.com/u/6068533?v=4" width="100px;" alt="Samuel Nunes"/>
        <br />
        <sub><b>Samuel Nunes</b></sub>
      </a>
      <br />
      <sub>Developer & maintainer</sub>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->