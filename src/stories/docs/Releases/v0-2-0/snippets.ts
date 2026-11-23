// Code snippets shown on the v0.2.0 release page

export const StylesImport = `// Once, at your app's entry point (src/main.tsx, app/layout.tsx, pages/_app.tsx...)
import '@weareredlight/design-system/dist/style.css'`

export const StylingBefore = `// 0.1.x: Stitches
<Button css={{ marginTop: '$lg' }} extraClasses='checkout'>Pay</Button>

const Card = styled('div', { color: '$primary', padding: '$sm' })`

export const StylingAfter = `// 0.2.0: className, style and CSS variables
<Button className='checkout' style={{ marginTop: 'var(--space-lg)' }}>Pay</Button>

/* Card.module.scss */
.card {
  color: var(--colors-primary);
  padding: var(--space-sm);
}`

export const TokensCss = `/* Your own CSS can override the tokens, also with server-side rendering */
:root {
  --colors-primary: #F472B6;
  --radii-xsm: 6px;
}`

export const SelectorUse = `import { buttonSelector } from '@weareredlight/design-system'

buttonSelector // '.rl-Button-button', e.g. for document.querySelector

/* Or straight in your CSS Module */
.toolbar :global(.rl-Button-button) {
  margin-left: auto;
}`

export const SassHelpers = `@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.title {
  @include typography.heading3;

  @include media.query(sm) {
    @include typography.heading5;
  }
}`

export const SetupThemeAfter = `// 0.1.x: setupTheme(...), then read theme.className
// 0.2.0: setupTheme returns the class
const { className } = setupTheme({ userColors: { primary: '#F472B6' } })`
