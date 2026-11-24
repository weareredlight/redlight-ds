import { useEffect, useRef, useState } from 'react'

import type { CSSProperties, ReactNode } from 'react'

import Button from 'src/components/Button'
import Checkbox from 'src/components/Checkbox'
import Pill from 'src/components/Pill'
import Toggle from 'src/components/Toggle'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

// Live examples of the v0.2.0 changes, built with the components of this version

const Preview = ({ children, note }: { children: ReactNode, note?: ReactNode }) => (
  <div className={cx('sb-unstyled', styles.preview)}>
    {children}
    {note && <p className={styles.note}>{note}</p>}
  </div>
)

/* ------------------------------ Tokens as CSS ------------------------------- */

export const TokensDemo = () => {
  const [primary, setPrimary] = useState('#F472B6')
  const [radius, setRadius] = useState(6)
  const [checked, setChecked] = useState(true)
  const [on, setOn] = useState(true)

  // The hover shade and the light tint follow the picked color
  const tokens = {
    '--colors-primary': primary,
    '--colors-primary600': `color-mix(in srgb, ${primary} 80%, black)`,
    '--colors-primary100': `color-mix(in srgb, ${primary} 12%, white)`,
    '--radii-xsm': `${radius}px`,
  } as CSSProperties

  return (
    <Preview note='The components below only read CSS variables, so changing them on a wrapper restyles everything inside it.'>
      <div className={styles.controls}>
        <label className={styles.control} htmlFor='release-020-primary'>
          --colors-primary
          <input
            id='release-020-primary'
            type='color'
            value={primary}
            onChange={e => setPrimary(e.target.value)}
          />
        </label>
        <label className={styles.control} htmlFor='release-020-radius'>
          {`--radii-xsm: ${radius}px`}
          <input
            id='release-020-radius'
            type='range'
            min={0}
            max={16}
            value={radius}
            onChange={e => setRadius(Number(e.target.value))}
          />
        </label>
      </div>
      <div className={styles.themed} style={tokens}>
        <Button>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Checkbox
          id='release-020-check'
          label='Checkbox'
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        <Toggle
          id='release-020-toggle'
          label='Toggle'
          value={on}
          onChange={e => setOn(Boolean(e.target.value))}
        />
        <Pill>Pill</Pill>
      </div>
      <pre className={styles.markup}>
        {`.promo {\n  --colors-primary: ${primary};\n  --radii-xsm: ${radius}px;\n}`}
      </pre>
    </Preview>
  )
}

/* ---------------------------- Stable class names ---------------------------- */

export const ClassNamesDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [classes, setClasses] = useState('')

  useEffect(() => setClasses(buttonRef.current?.className ?? ''), [])

  return (
    <Preview note='Read from the button above: the same class names in every build.'>
      <div className={styles.row}>
        <Button ref={buttonRef} variant='secondary' className='checkout'>Pay</Button>
      </div>
      <pre className={styles.markup}>{`class="${classes}"`}</pre>
    </Preview>
  )
}

/* ------------------------------ Migration table ----------------------------- */

// [0.1.x, 0.2.0]. null: nothing in that version
const MIGRATION: [string | null, string][] = [
  [null, "import '@weareredlight/design-system/dist/style.css'"],
  ["css={{ marginTop: '$lg' }}", "style={{ marginTop: 'var(--space-lg)' }} or className"],
  ["extraClasses='my-class' (Button, Modal)", "className='my-class'"],
  ["styled('div', { color: '$primary' })", 'your own CSS: color: var(--colors-primary)'],
  ["include: 'heading7'", '@include typography.heading7;'],
  // eslint-disable-next-line no-template-curly-in-string -- the Stitches syntax, shown as text
  ['[`& ${StyledButton}`]: { ... }', '${buttonSelector} (or .rl-Button-button) in your CSS'],
  ['theme.colors.primary (a token object)', "theme.colors.primary → 'var(--colors-primary)'"],
  ["getColor('primary') (a token object)", "getColor('primary') → 'var(--colors-primary)'"],
  ['setupTheme(...), then read theme.className', 'const { className } = setupTheme(...)'],
  ['setupTheme({ userMedia, userUtils })', 'removed (breakpoints are in src/styles/_media.scss)'],
  ["fullWidth='true' / isLoading='true'", 'fullWidth / isLoading'],
]

export const MigrationTable = () => (
  <div className={cx('sb-unstyled', styles.tableWrap)}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope='col'>0.1.x (Stitches)</th>
          <th scope='col'>0.2.0</th>
        </tr>
      </thead>
      <tbody>
        {MIGRATION.map(([before, after]) => (
          <tr key={after}>
            <td>{before === null ? <i>nothing to import</i> : <code>{before}</code>}</td>
            <td><code>{after}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
