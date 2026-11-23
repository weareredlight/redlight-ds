# Welcome to RedLight's Design System 🚀

<img src="https://drive.google.com/uc?export=view&id=1OQ3SB2QUmhRCWMIwqz46ZExeJ4A20FRQ" width="100%" alt="banner"/>

- Our Design System is a comprehensive collection of design and development resources that aims to streamline and enhance the creation of consistent, user-centric digital experiences.

- It provides a unified framework for designers and developers to work together seamlessly, fostering collaboration, efficiency, and creativity.

## Documentation

https://weareredlight.github.io/redlight-ds

What changed in each version: the [GitHub releases](https://github.com/weareredlight/redlight-ds/releases),
and the *Major Releases* section in Storybook.

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

> **Next.js App Router:** the components are Client Components, so Server Components can render
> them. Props that are functions (`onClick`, `onChange`...) can't come from a Server Component: put
> the interactive parts in a file that starts with `'use client'`.

### 3. Apply your theme (optional)

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
server-side rendering, because the values exist before the page shows.

> **Dark mode:** `style.css` includes a dark version of the default theme. Turn it on with
> `data-rl-color-mode="dark"` (or `"system"`) on `<html>`, or with the `useColorMode` hook for a
> toggle. See [Dark Mode](https://weareredlight.github.io/redlight-ds/?path=/docs/style-guides-dark-mode--how-to-use)
> in Storybook, which also covers dark values for your own colors.

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

### 4. Customize components (optional)

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

### 5. Use the typography and breakpoints in your SCSS (optional)

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
fixed tokens, prefer the theme file of [step 3](#3-apply-your-theme-optional), which also works
with server-side rendering.

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
          class="contributor-img"
          alt="Samuel Nunes"
        />
        <style>
          .contributor-img { object-fit: cover; }
        </style>
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