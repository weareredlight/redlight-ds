// Code snippets shown on the Dark Mode docs page

export const DarkModeAttribute = `<!-- Always dark -->
<html data-rl-color-mode="dark">

<!-- Follows the operating system's setting (CSS only) -->
<html data-rl-color-mode="system">

<!-- Light: no attribute, or "light" -->
<html>`

export const DarkModeToggle = `import { Toggle, useColorMode } from '@weareredlight/design-system'

export const DarkModeToggle = () => {
  const { mode, toggle } = useColorMode()
  return <Toggle id='dark-mode' label='Dark mode' value={mode === 'dark'} onChange={toggle} />
}`

export const DarkModeModuleCss = `/* Card.module.css */
:global([data-rl-color-mode="dark"]) .card {
  box-shadow: none;
}`

export const DarkModeScript = `<script>
  try {
    var mode = localStorage.getItem('rl-color-mode')
    if (mode) document.documentElement.dataset.rlColorMode = mode
  } catch (e) {}
</script>`

export const DarkModeOwnCss = `.card {
  /* Follows the mode: the token changes, not your CSS */
  background: var(--colors-white);
  border: 1px solid var(--colors-neutral200);
}`

export const DarkModeBrand = `/* theme.css, imported after style.css */
:root {
  --colors-primary: #F472B6;
  --colors-primary600: #DB2777;
}

/* Its dark values. Tokens you don't set here keep the built-in dark ones */
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
}`
