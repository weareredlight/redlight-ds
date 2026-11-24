import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,o as n}from"./blocks-Dg4IttFa.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{a as o,c as s,d as c,i as l,l as u,r as d,t as f,u as p}from"./CodeBlock-DwIlC6M4.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{m=`<!-- Always dark -->
<html data-rl-color-mode="dark">

<!-- Follows the operating system's setting (CSS only) -->
<html data-rl-color-mode="system">

<!-- Light: no attribute, or "light" -->
<html>`,h=`import { Toggle, useColorMode } from '@weareredlight/design-system'

export const DarkModeToggle = () => {
  const { mode, toggle } = useColorMode()
  return <Toggle id='dark-mode' label='Dark mode' value={mode === 'dark'} onChange={toggle} />
}`,g=`/* Card.module.css */
:global([data-rl-color-mode="dark"]) .card {
  box-shadow: none;
}`,_=`<script>
  try {
    var mode = localStorage.getItem('rl-color-mode')
    if (mode) document.documentElement.dataset.rlColorMode = mode
  } catch (e) {}
<\/script>`,v=`.card {
  /* Follows the mode: the token changes, not your CSS */
  background: var(--colors-white);
  border: 1px solid var(--colors-neutral200);
}`,y=`/* theme.css, imported after style.css */
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
}`})))()}function x(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n,{title:`Style Guides/Dark Mode`}),`
`,(0,C.jsxs)(l,{children:[(0,C.jsxs)(s,{style:{background:`#18181F`},children:[(0,C.jsx)(`h2`,{children:`Dark Mode`}),(0,C.jsx)(p,{})]}),(0,C.jsxs)(o,{children:[(0,C.jsxs)(`p`,{children:[`The library includes a dark version of the default theme. It's in `,(0,C.jsx)(`code`,{children:`style.css`}),`, so there's nothing else to import: an attribute on `,(0,C.jsx)(`code`,{children:`<html>`}),` chooses the mode.`]}),(0,C.jsx)(f,{code:m,language:`html`}),(0,C.jsxs)(`p`,{children:[`The simplest setup is `,(0,C.jsx)(`code`,{children:`system`}),`: it follows the operating system's setting with CSS only, so there's no JavaScript, and it works with server-side rendering.`]}),(0,C.jsxs)(`p`,{children:[`Every component follows the mode, because they all read their colors from the `,(0,C.jsx)(`code`,{children:`--colors-*`}),` tokens. Your own CSS follows it too when it uses the tokens. To see it on these pages, use the light / dark toggle in the Storybook toolbar: it sets the same attribute.`]}),(0,C.jsx)(f,{code:v,language:`css`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(u,{}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{className:`sub-heading`,children:`A toggle that remembers the choice`}),(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`code`,{children:`useColorMode`}),` gives the mode the page shows and a function to switch it. The choice is saved in the browser and applied again on the next visit:`]}),(0,C.jsx)(f,{code:h,language:`tsx`,title:`A dark mode toggle`}),(0,C.jsxs)(`ul`,{children:[(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{children:(0,C.jsx)(`code`,{children:`mode`})}),` is `,(0,C.jsx)(`code`,{children:`'light'`}),` or `,(0,C.jsx)(`code`,{children:`'dark'`}),` (`,(0,C.jsx)(`code`,{children:`system`}),` resolved). `,(0,C.jsx)(`b`,{children:(0,C.jsx)(`code`,{children:`setMode`})}),` takes `,(0,C.jsx)(`code`,{children:`'light'`}),`, `,(0,C.jsx)(`code`,{children:`'dark'`}),` or `,(0,C.jsx)(`code`,{children:`'system'`}),`, e.g. for a Light / Dark / System select.`]})}),(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsxs)(`b`,{children:[`Every component that calls `,(0,C.jsx)(`code`,{children:`useColorMode`}),` shows the same mode`]}),`, with no provider.`]})}),(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{children:`The saved choice is applied when the hook mounts.`}),` If the toggle is only on some pages (e.g. settings), also call `,(0,C.jsx)(`code`,{children:`useColorMode()`}),` in `,(0,C.jsx)(`code`,{children:`App`}),`, or add the script below. On a first visit, the page shows what `,(0,C.jsx)(`code`,{children:`<html>`}),` has: `,(0,C.jsx)(`code`,{children:`data-rl-color-mode="system"`}),` follows the operating system.`]})}),(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{children:`Styles the tokens can't express:`}),` in a CSS Module, put the attribute in `,(0,C.jsx)(`code`,{children:`:global(...)`}),`. It stays as it is, and the class is still scoped to the module.`]})})]}),(0,C.jsx)(f,{code:g,language:`css`}),(0,C.jsx)(`ul`,{children:(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{children:`No flash of the light mode on load:`}),` the hook runs after React renders. To apply the saved choice before the page shows, add this to the `,(0,C.jsx)(`code`,{children:`<head>`}),` of your `,(0,C.jsx)(`code`,{children:`index.html`}),`:`]})})}),(0,C.jsx)(f,{code:_,language:`html`}),(0,C.jsx)(`ul`,{children:(0,C.jsx)(`li`,{children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{children:`Server-side rendering (Next.js):`}),` call it from a Client Component (`,(0,C.jsx)(`code`,{children:`'use client'`}),`). `,(0,C.jsx)(`code`,{children:`mode`}),` is `,(0,C.jsx)(`code`,{children:`'light'`}),` on the server and the real one right after hydration.`]})})}),(0,C.jsx)(`br`,{}),(0,C.jsx)(u,{}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{className:`sub-heading`,children:`Dark mode with your own colors`}),(0,C.jsxs)(`p`,{children:[`The built-in dark mode is the dark version of the `,(0,C.jsx)(`b`,{children:`default`}),` colors, and it overrides the colors you set on `,(0,C.jsx)(`code`,{children:`:root`}),`. With your own palette, add its dark values to your theme file (see `,(0,C.jsx)(`a`,{href:`./?path=/docs/style-guides-colors--how-to-use`,target:`_top`,children:`Colors`}),` for how to invert a scale and choose the `,(0,C.jsx)(`code`,{children:`on`}),` colors):`]}),(0,C.jsx)(f,{code:y,language:`css`})]})]})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=r(),a(),t(),c(),d(),b()})))()}w();export{S as default};