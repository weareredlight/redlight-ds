import { EllipsisIcon, PlusIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { ReactNode } from 'react'

import Button from 'src/components/Button'
import Checkbox from 'src/components/Checkbox'
import Input from 'src/components/Input'
import MultiSelect from 'src/components/MultiSelect'
import PopOver from 'src/components/PopOver'
import Radio from 'src/components/Radio'
import Tag from 'src/components/Tag'
import Text from 'src/components/Text'
import Toggle from 'src/components/Toggle'
import { darkThemeCss } from 'src/theme/dark'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

// Live examples of the v0.3.1 changes, built with the components of this version

const Preview = ({ children, note, className }: {
  children: ReactNode
  note?: ReactNode
  className?: string
}) => (
  <div className={cx('sb-unstyled', styles.preview, className)}>
    {children}
    {note && <p className={styles.note}>{note}</p>}
  </div>
)

/* --------------------------------- Dark mode -------------------------------- */

// The dark tokens of style.css, scoped to the preview box instead of <html>, so the demo doesn't
// switch the whole page (in an app, the attribute goes on <html>)
const scopedDarkCss = darkThemeCss
  .split('@media')[0]
  .replaceAll(':root[data-rl-color-mode="dark"]', `.${styles.dark}`)

const FRUITS = [
  { value: 'apple', label: 'Apple' },
  { value: 'pear', label: 'Pear' },
  { value: 'orange', label: 'Orange' },
]
const fruitLabel = (value: string) => FRUITS.find(f => f.value === value)?.label ?? value

export const DarkModeDemo = () => {
  const [dark, setDark] = useState(true)
  const [name, setName] = useState('Website redesign')
  const [notify, setNotify] = useState(true)
  const [shared, setShared] = useState(false)

  return (
    <>
      <style>{scopedDarkCss}</style>
      <Preview
        className={cx(dark && styles.dark)}
        note='The dark mode applies to this box only. In your app, the attribute (or useColorMode) applies it to the whole page.'
      >
        <Toggle
          id='release-031-dark'
          label='Dark mode'
          value={dark}
          onChange={e => setDark(Boolean(e.target.value))}
        />
        <div className={styles.card}>
          <div className={styles.row}>
            <Text variant='h5'>New project</Text>
            <Tag>Draft</Tag>
          </div>
          <Input
            name='release-031-name'
            label='Name'
            value={name}
            onChange={e => setName(e.target.value ?? '')}
          />
          <Input
            name='release-031-client'
            label='Client'
            placeholder='Required'
            state='error'
            errorMsg='Enter a client.'
            value=''
            onChange={() => undefined}
          />
          <Checkbox
            id='release-031-notify'
            label='Email me about updates'
            checked={notify}
            onChange={e => setNotify(e.target.checked)}
          />
          <Toggle
            id='release-031-shared'
            label='Share with the team'
            value={shared}
            onChange={e => setShared(Boolean(e.target.value))}
          />
          <div className={styles.row}>
            <Button iconComponent={PlusIcon} iconPosition='left'>Create</Button>
            <Button variant='secondary'>Cancel</Button>
          </div>
        </div>
      </Preview>
    </>
  )
}

/* ----------------------------- Checkbox and Radio ---------------------------- */

const PLANS = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team' },
]

export const KeyboardDemo = () => {
  const [terms, setTerms] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const [plan, setPlan] = useState('pro')

  return (
    <Preview
      note={(
        <>
          Click here, then press
          {' '}
          <kbd>Tab</kbd>
          {' '}
          to move to the checkboxes and
          {' '}
          <kbd>Space</kbd>
          {' '}
          to check them. In the radio group, the arrow keys change the plan.
        </>
      )}
    >
      <div className={styles.row}>
        <Checkbox
          id='release-031-terms'
          label='I accept the terms'
          checked={terms}
          onChange={e => setTerms(e.target.checked)}
        />
        <Checkbox
          id='release-031-newsletter'
          label='Newsletter'
          checked={newsletter}
          onChange={e => setNewsletter(e.target.checked)}
        />
      </div>
      <fieldset className={styles.radios}>
        <legend>Plan</legend>
        {PLANS.map(({ value, label }) => (
          <Radio
            key={value}
            id={`release-031-plan-${value}`}
            name='release-031-plan'
            value={value}
            label={label}
            checked={plan === value}
            onChange={() => setPlan(value)}
          />
        ))}
      </fieldset>
      <code className={styles.attr}>
        {`terms: ${terms} · newsletter: ${newsletter} · plan: ${plan}`}
      </code>
    </Preview>
  )
}

/* ------------------------------ MultiSelect error ---------------------------- */

// What a screen reader reads with the field: the text of every element its aria-describedby names
const describedBy = (input: HTMLInputElement | null | undefined) => (
  (input?.getAttribute('aria-describedby') ?? '')
    .split(' ')
    .filter(Boolean)
    .map(id => document.getElementById(id)?.textContent?.trim())
    .filter(Boolean)
    .join(' · ')
)

export const MultiSelectDemo = () => {
  const [fruits, setFruits] = useState<string[]>([])
  const [read, setRead] = useState('')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hasError = fruits.length === 0

  useEffect(() => {
    setRead(describedBy(wrapperRef.current?.querySelector('input')))
  }, [fruits])

  return (
    <Preview note='Pick a fruit and the error goes away, and so does the message the screen reader reads.'>
      <div ref={wrapperRef}>
        <MultiSelect
          name='release-031-fruits'
          label='Fruits'
          placeholder='Pick at least one'
          options={FRUITS}
          value={fruits}
          onChange={setFruits}
          getLabel={fruitLabel}
          state={hasError ? 'error' : 'null'}
          errorMsg={hasError ? 'Pick at least one fruit.' : undefined}
          fullWidth
        />
      </div>
      <p className={styles.readout}>
        <span className={styles.label}>Read with the field</span>
        <code className={cx(styles.chip, hasError && styles.chipError)}>{read || '—'}</code>
      </p>
    </Preview>
  )
}

/* ---------------------------------- PopOver --------------------------------- */

export const PopOverDemo = () => (
  <Preview note='Open it with Enter: a screen reader announces "Project options, dialog".'>
    <div className={styles.row}>
      <PopOver
        label='Project options'
        side='bottom'
        trigger={<Button variant='secondary' iconComponent={EllipsisIcon} aria-label='More' />}
      >
        <div className={styles.menu}>
          <Button variant='textOnly'>Rename</Button>
          <Button variant='textOnly'>Duplicate</Button>
          <Button variant='textOnly'>Archive</Button>
        </div>
      </PopOver>
    </div>
  </Preview>
)
