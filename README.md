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

The theme is a set of CSS variables (tokens). Put your project's tokens in one CSS file, with only
what changes from the design system, and import it right after `style.css`:

```css
/* theme.css */
:root {
  --colors-primary: #F472B6;
  --colors-primary600: #DB2777;
  --radii-xsm: 6px;
}

/* The design system sets its font on every element (`*`); `html *` takes over from it */
html * {
  font-family: 'Inter', sans-serif;
}
```

```jsx
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import '@weareredlight/design-system/dist/style.css'
import './theme.css'
```

That's it: components, and your own CSS when it uses the tokens, follow these values. It works with
server-side rendering, because the values exist before the page shows. Using the dark mode too? Add
its values to the same file (see [step 5](#5-dark-mode-optional)).

To theme only part of a page, use a class instead of `:root`:

```css
.promo {
  --colors-primary: #52BD94;
}
```

Is the theme only known at runtime (e.g. each customer's colors come from an API)? See
[Runtime themes](#runtime-themes).

#### Available tokens

| Scale | Variable | Tokens |
| --- | --- | --- |
| Colors | `--colors-*` | `white`, `black`, `primary`, `accent`, `neutral` (`100`–`900`), `success`, `danger` (`100`–`600`), and the text colors over each fill: `onPrimary`, `onAccent`, `onNeutral`, `onSuccess`, `onDanger` |
| Spacing | `--space-*` | `xxxsm`, `xxsm`, `xsm`, `sm`, `lg`, `xlg`, `xxlg`, `xxxlg` |
| Sizes | `--sizes-*` | same names as spacing |
| Font sizes | `--fontSizes-*` | `xxsm`, `xsm`, `sm`, `md`, `lg`, `xlg`, `xxlg`, `xxxlg` |
| Font weights | `--fontWeights-*` | `n`, `md`, `lg` |
| Line heights | `--lineHeights-*` | `sm`, `md`, `lg`, `xlg` |
| Radii | `--radii-*` | `xxsm`, `xsm`, `sm`, `md`, `lg`, `xlg`, `full` |
| Shadows | `--shadows-*` | `mainShadow`, `cardShadow` |

The exact values are in [`src/theme`](src/theme) and on the Storybook's *Colors* and *Typography* pages.
From JavaScript, `theme` holds the same references: `theme.colors.primary === 'var(--colors-primary)'`.

### 5. Dark mode (optional)

`style.css` includes a dark version of the default theme. Choose the mode with an attribute on
`<html>`:

| `data-rl-color-mode` | Mode |
| --- | --- |
| none, or `light` | Light (as before) |
| `dark` | Dark |
| `system` | Follows the operating system's setting |

The simplest setup follows the system, with CSS only: no JavaScript, and it works with server-side
rendering.

```html
<html data-rl-color-mode="system">
```

Every component follows the mode, because they all read their colors from the `--colors-*` tokens.
Your own CSS follows it too when it uses the tokens (`color: var(--colors-neutral800)`).

**A toggle that remembers the choice.** `useColorMode` gives the mode the page shows and a
function to switch it. The choice is saved in the browser and applied again on the next visit:

```jsx
import { Toggle, useColorMode } from '@weareredlight/design-system'

export const DarkModeToggle = () => {
  const { mode, toggle } = useColorMode()
  return <Toggle id='dark-mode' label='Dark mode' value={mode === 'dark'} onChange={toggle} />
}
```

- **`mode`** is `'light'` or `'dark'` (`system` resolved). **`setMode`** takes `'light'`, `'dark'` or
  `'system'`, e.g. for a Light / Dark / System select.
- **Every component that calls `useColorMode` shows the same mode**, with no provider.
- **The saved choice is applied when the hook mounts.** If the toggle is only on some pages (e.g.
  settings), also call `useColorMode()` in `App`, or add the script below. On a first visit, the
  page shows what `<html>` has: `data-rl-color-mode="system"` follows the operating system.
- **Styles the tokens can't express:** in a CSS Module, `:global([data-rl-color-mode="dark"]) .card
  { box-shadow: none; }`. The attribute selector stays as it is, and `.card` is still scoped to the
  module.
- **No flash of the light mode on load:** the hook runs after React renders. To apply the saved
  choice before the page shows, add this to the `<head>` of your `index.html`:

  ```html
  <script>
    try {
      var mode = localStorage.getItem('rl-color-mode')
      if (mode) document.documentElement.dataset.rlColorMode = mode
    } catch (e) {}
  </script>
  ```

- **Server-side rendering (Next.js):** call it from a Client Component (`'use client'`). `mode` is
  `'light'` on the server and the real one right after hydration.

**Your own colors in dark mode.** The built-in dark mode is the dark version of the *default*
colors, and it overrides the colors you set on `:root`. With your own palette, add its dark values
to your theme file. Tokens you don't set there keep the built-in dark values:

```css
/* theme.css */
:root[data-rl-color-mode="dark"] {
  --colors-primary: #F472B6;
  --colors-primary600: #F9A8D4; /* in dark mode, hover shades get lighter */
}

/* Only if you use "system": the same values, for when the system is dark */
@media (prefers-color-scheme: dark) {
  :root[data-rl-color-mode="system"] {
    --colors-primary: #F472B6;
    --colors-primary600: #F9A8D4;
  }
}
```

The *Dark Mode* and *Colors* pages in Storybook explain how to invert a scale and choose the `on`
colors.

### 6. Customize components (optional)

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

### 7. Use the typography and breakpoints in your SCSS (optional)

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

## Runtime themes

When the theme is only known at runtime, and so can't be written in a CSS file, use `setupTheme`.
For example: each customer's colors come from an API (white-label apps), users pick their own accent
color, or a theme editor previews changes.

```jsx
import { setupTheme } from '@weareredlight/design-system'

const { className } = setupTheme({
  userColors: { primary: customer.primaryColor, primary600: customer.primaryHoverColor },
  userSizes: { radii: { xsm: '6px' } },
  userShadows: { cardShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' },
  fontFamily: "'Inter', sans-serif",
})
```

The new values apply to the whole page. Each call also returns a `className` that applies that
theme to one element only (useful to switch between several themes: add the class to `<body>`).

`setupTheme` runs in the browser: it adds a `<style>` once the JavaScript loads. For a project's
fixed tokens, prefer the theme file of [step 4](#4-apply-your-theme-optional), which also works
with server-side rendering.

## What's new (unreleased)

Dark mode. Nothing was removed or changed: these are additions. See
[step 5](#5-dark-mode-optional).

- **Dark mode in `style.css`**: `data-rl-color-mode="dark"` on `<html>` turns on the dark version
  of the default theme (the one Storybook already used), and `data-rl-color-mode="system"` follows
  the operating system's setting, with CSS only. Without the attribute, nothing changes.
- **`useColorMode()`**, a hook for a dark mode toggle: the mode the page shows, `toggle()` and
  `setMode()`. It saves the choice in the browser. Also the `ColorMode` type.
- **Docs**: [step 4](#4-apply-your-theme-optional) now puts a project's tokens in a CSS file.
  `setupTheme` didn't change; it's documented for [themes known at runtime](#runtime-themes).

## What changed in 0.3.0

Form components now work with form libraries and screen readers. Try the changes on the [0.3.0 page in Storybook](https://weareredlight.github.io/redlight-ds/?path=/docs/releases-v0-3-0--how-to-use), and see the full list in the [release notes](https://github.com/weareredlight/redlight-ds/releases/tag/0.3.0).

- **Every form field takes a `ref`**, pointing to the element that takes the focus (the `<input>`,
  the select's button, the first part of a date, ...). Form libraries use it to focus a field, e.g.
  react-hook-form's `shouldFocusError`:

  ```jsx
  <Controller
    name='country'
    control={control}
    render={({ field, fieldState }) => (
      <Select
        ref={field.ref}
        value={field.value}
        onChange={e => field.onChange(e.target.value)}
        state={fieldState.error ? 'error' : 'null'}
        errorMsg={fieldState.error?.message}
        ...
      />
    )}
  />
  ```

- **Error messages are announced.** In the error state, fields get `aria-invalid` and point to their
  message (`aria-describedby`), so screen readers read it with the field.
- **Native attributes pass through** on `Checkbox`, `Radio` and `Toggle` (`name`, `required`,
  `onBlur`, `aria-*`, ...), and on `Text`, `Link`, `Label`, `Avatar`, `Tag` and `Pill`, which also take
  a `ref`.
- **Icons can be passed directly:** `iconComponent={PlusIcon}` works in `Button` and `Input`, without
  a wrapper function.

### Upgrading from 0.2.x

| 0.2.x | 0.3.0 |
| --- | --- |
| `Button isLoading` still clicks with Enter or Space | ignores clicks while loading, from the mouse and the keyboard |
| `MultiSelect state='error'` (or `dirty`, `disabled`) shows no color | the border and arrow follow the state |
| `useRef<HTMLInputElement>` for `Toggle` | `useRef<HTMLButtonElement>` (the switch is a button) |
| `const AddIcon = () => <PlusIcon />` for `iconComponent` | `iconComponent={PlusIcon}` (the wrapper still works) |
| `Text` is always a `<span>` | the element follows the variant (`h1` → `<h1>`, `paragraph` → `<p>`, ...) |

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
| `include: 'heading7'` | `@include typography.heading7;` ([step 7](#7-use-the-typography-and-breakpoints-in-your-scss-optional)) |
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
        <img 
          src="https://redlight.dev/wp-content/uploads/2024/11/working.png" 
          width="100px;" height="100px;" 
          style="object-fit: cover;"
          alt="Samuel Nunes"
        />
        <br />
        <sub><b>Samuel Nunes</b></sub>
      </a>
      <br />
      <sub>Developer & maintainer</sub>
    </td>
    <td style="text-align: center">
      <a href="https://www.linkedin.com/in/margarida-souto/">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEcaE1XsSKlwQ/profile-displayphoto-crop_800_800/B4DZg86bqMHYAM-/0/1753368608251?e=1796256000&v=beta&t=uUhu-OXo-AAgVbYqJ-7GDltoL2ZLHA0wHQADvO_yoio" width="100px;" alt="Margarida Souto"/>
        <br />
        <sub><b>Margarida Souto</b></sub>
      </a>
      <br />
      <sub>Designer</sub>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->