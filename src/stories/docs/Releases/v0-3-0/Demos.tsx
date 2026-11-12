import { PlusIcon, SearchIcon, Trash2Icon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { ReactNode, RefObject } from 'react'
import type { TextVariant } from 'src/components/Text'

import Avatar from 'src/components/Avatar'
import Button from 'src/components/Button'
import Checkbox from 'src/components/Checkbox'
import DatePicker from 'src/components/DatePicker'
import Input from 'src/components/Input'
import MultiSelect from 'src/components/MultiSelect'
import Pill from 'src/components/Pill'
import PopOver from 'src/components/PopOver'
import Radio from 'src/components/Radio'
import Select from 'src/components/Select'
import Tag from 'src/components/Tag'
import Text from 'src/components/Text'
import TextArea from 'src/components/TextArea'
import TimePicker from 'src/components/TimePicker'
import Toggle from 'src/components/Toggle'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

// Live examples of the v0.3.0 changes, built with the components of this version

const Preview = ({ children, note }: { children: ReactNode, note?: ReactNode }) => (
  <div className={cx('sb-unstyled', styles.preview)}>
    {children}
    {note && <p className={styles.note}>{note}</p>}
  </div>
)

/* ----------------------------------- Icons ---------------------------------- */

const TAGS = ['Design', 'Frontend', 'QA']

export const IconsDemo = () => {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState(TAGS)

  return (
    <Preview note='Every icon here is a lucide-react component, passed without a wrapper.'>
      <div className={styles.row}>
        <Button iconComponent={PlusIcon} iconPosition='left'>New project</Button>
        <Button variant='secondary' iconComponent={PlusIcon}>Add</Button>
        <Button variant='danger' iconComponent={Trash2Icon} aria-label='Delete project' />
      </div>
      <Input
        name='release-search'
        placeholder='Search projects'
        iconComponent={SearchIcon}
        iconPosition='left'
        value={search}
        onChange={e => setSearch(e.target.value ?? '')}
      />
      <div className={styles.row}>
        {tags.map(tag => (
          <Tag key={tag} onClose={() => setTags(tags.filter(t => t !== tag))}>{tag}</Tag>
        ))}
        {tags.length === 0 && (
          <Button variant='textOnly' onClick={() => setTags(TAGS)}>Bring the tags back</Button>
        )}
      </div>
    </Preview>
  )
}

/* ------------------------------ Loading button ------------------------------ */

export const LoadingDemo = () => {
  const [loading, setLoading] = useState(true)
  const [clicks, setClicks] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [busy, setBusy] = useState<string | null>(null)

  useEffect(() => {
    setBusy(buttonRef.current?.getAttribute('aria-busy') ?? null)
  }, [loading])

  return (
    <Preview
      note={(
        <>
          Press
          {' '}
          <kbd>Tab</kbd>
          {' '}
          until the Save button has the focus, then press
          {' '}
          <kbd>Enter</kbd>
          {' '}
          a
          few times. While it&apos;s loading, the counter doesn&apos;t go up.
        </>
      )}
    >
      <Toggle
        id='release-loading'
        label='isLoading'
        value={loading}
        onChange={e => setLoading(Boolean(e.target.value))}
      />
      <div className={styles.row}>
        <Button ref={buttonRef} isLoading={loading} onClick={() => setClicks(c => c + 1)}>
          Save
        </Button>
        <span className={styles.counter}>
          onClick called
          {' '}
          <strong>{clicks}</strong>
          {' '}
          {clicks === 1 ? 'time' : 'times'}
        </span>
        <Button variant='textOnly' onClick={() => setClicks(0)}>Reset</Button>
      </div>
      <code className={styles.attr}>{`aria-busy: ${busy ?? '—'}`}</code>
    </Preview>
  )
}

/* ----------------------------------- Form ----------------------------------- */

const COUNTRIES = [
  { code: 'pt', name: 'Portugal' },
  { code: 'es', name: 'Spain' },
  { code: 'fr', name: 'France' },
]
const FRUITS = [
  { value: 'apple', label: 'Apple' },
  { value: 'pear', label: 'Pear' },
  { value: 'orange', label: 'Orange' },
]
const fruitLabel = (value: string) => FRUITS.find(f => f.value === value)?.label ?? value

type Values = {
  email: string
  bio: string
  country: string | null
  fruits: string[]
  date: string
  time: string
  duration: string
  newsletter: boolean
  terms: boolean
}
type FieldKey = keyof Values

const EMPTY: Values = {
  email: '',
  bio: '',
  country: null,
  fruits: [],
  date: '',
  time: '',
  duration: '',
  newsletter: false,
  terms: false,
}

const MESSAGES: Record<FieldKey, string> = {
  email: 'Enter an email.',
  bio: 'Tell us a bit about yourself.',
  country: 'Choose a country.',
  fruits: 'Pick at least one fruit.',
  date: 'Choose a start date.',
  time: 'Choose a start time.',
  duration: 'Enter a duration (hh:mm).',
  newsletter: 'Turn on the newsletter to continue.',
  terms: 'Accept the terms.',
}

// In the order of the form, with the component each field is
const FIELDS: { key: FieldKey, name: string }[] = [
  { key: 'email', name: 'Input' },
  { key: 'bio', name: 'TextArea' },
  { key: 'country', name: 'Select' },
  { key: 'fruits', name: 'MultiSelect' },
  { key: 'date', name: 'DatePicker' },
  { key: 'time', name: 'TimePicker' },
  { key: 'duration', name: 'TimePicker (duration)' },
  { key: 'newsletter', name: 'Toggle' },
  { key: 'terms', name: 'Checkbox' },
]

const isEmpty = (value: Values[FieldKey]) => (Array.isArray(value) ? value.length === 0 : !value)

type Inspected = {
  element: string
  invalid: string | null
  attribute: string | null
  message: string | null
}

// What a screen reader gets from a field: its element, whether it's invalid, and its message
const inspect = (el: Element | null): Inspected | null => {
  if (!el) return null
  // MultiSelect links its error with aria-errormessage: react-select keeps aria-describedby for
  // its placeholder
  const attribute = ['aria-errormessage', 'aria-describedby'].find(name => el.hasAttribute(name))
  const pointer = attribute ? el.getAttribute(attribute) : null
  const role = el.getAttribute('role')
  const type = el.getAttribute('type')
  return {
    element: `<${el.tagName.toLowerCase()}${role ? ` role="${role}"` : ''}${type ? ` type="${type}"` : ''}>`,
    invalid: el.getAttribute('aria-invalid'),
    attribute: attribute ?? null,
    message: pointer ? document.getElementById(pointer)?.textContent ?? null : null,
  }
}

export const FormDemo = () => {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [done, setDone] = useState(false)

  const refs: Record<FieldKey, RefObject<HTMLElement | null>> = {
    email: useRef<HTMLInputElement>(null),
    bio: useRef<HTMLTextAreaElement>(null),
    country: useRef<HTMLButtonElement>(null),
    fruits: useRef<HTMLInputElement>(null),
    date: useRef<HTMLInputElement>(null),
    time: useRef<HTMLInputElement>(null),
    duration: useRef<HTMLInputElement>(null),
    newsletter: useRef<HTMLButtonElement>(null),
    terms: useRef<HTMLInputElement>(null),
  }

  const set = <K extends FieldKey>(key: K, value: Values[K]) => {
    setValues(v => ({ ...v, [key]: value }))
    setErrors(e => ({ ...e, [key]: undefined }))
  }

  // Like react-hook-form: show the errors and focus the first invalid field through its ref
  const validate = () => {
    const next: Partial<Record<FieldKey, string>> = {}
    FIELDS.forEach(({ key }) => { if (isEmpty(values[key])) next[key] = MESSAGES[key] })
    setErrors(next)
    const first = FIELDS.find(({ key }) => next[key])
    setDone(!first)
    if (first) refs[first.key].current?.focus()
  }

  const showAllErrors = () => {
    setErrors(Object.fromEntries(FIELDS.map(({ key }) => [key, MESSAGES[key]])))
    setDone(false)
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setDone(false)
  }

  // The table reads each field through its ref, whenever its attributes change
  const formRef = useRef<HTMLDivElement>(null)
  const [inspected, setInspected] = useState<Partial<Record<FieldKey, Inspected | null>>>({})
  useEffect(() => {
    let last = ''
    const read = () => {
      const next = Object.fromEntries(FIELDS.map(({ key }) => [key, inspect(refs[key].current)]))
      // Only render again when something changed, so the observer can't feed itself
      const serialized = JSON.stringify(next)
      if (serialized === last) return
      last = serialized
      setInspected(next)
    }
    read()
    const observer = new MutationObserver(read)
    if (formRef.current) {
      observer.observe(formRef.current, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['aria-invalid', 'aria-describedby', 'aria-errormessage'],
      })
    }
    return () => observer.disconnect()
    // The refs are stable, so this only runs once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const state = (key: FieldKey) => (errors[key] ? 'error' as const : 'null' as const)

  return (
    <div className={cx('sb-unstyled', styles.formLayout)}>
      <div className={cx(styles.preview, styles.form)} ref={formRef}>
        <Input
          ref={refs.email as RefObject<HTMLInputElement>}
          name='release-email'
          label='Email'
          placeholder='name@company.com'
          value={values.email}
          state={state('email')}
          errorMsg={errors.email}
          onChange={e => set('email', e.target.value ?? '')}
          fullWidth
        />
        <TextArea
          ref={refs.bio as RefObject<HTMLTextAreaElement>}
          name='release-bio'
          label='Bio'
          rows={2}
          value={values.bio}
          state={state('bio')}
          errorMsg={errors.bio}
          onChange={e => set('bio', e.target.value)}
          fullWidth
        />
        <Select
          ref={refs.country as RefObject<HTMLButtonElement>}
          id='release-country'
          label='Country'
          placeholder='Choose a country'
          value={values.country}
          options={COUNTRIES}
          getLabel={c => c.name}
          getValue={c => c.code}
          state={state('country')}
          errorMsg={errors.country}
          onChange={e => set('country', e.target.value)}
          fullWidth
        />
        <MultiSelect
          ref={refs.fruits as RefObject<HTMLInputElement>}
          name='release-fruits'
          label='Fruits'
          placeholder='Pick fruits'
          value={values.fruits}
          options={FRUITS}
          getLabel={fruitLabel}
          state={state('fruits')}
          errorMsg={errors.fruits}
          onChange={v => set('fruits', v)}
          fullWidth
        />
        <DatePicker
          ref={refs.date as RefObject<HTMLInputElement>}
          name='release-date'
          label='Start date'
          locale='en-GB'
          value={values.date}
          error={errors.date}
          onChange={v => set('date', v)}
          fullWidth
        />
        <TimePicker
          ref={refs.time as RefObject<HTMLInputElement>}
          name='release-time'
          label='Start time'
          locale='en-GB'
          value={values.time}
          error={errors.time}
          onChange={v => set('time', String(v))}
          fullWidth
        />
        <TimePicker
          ref={refs.duration as RefObject<HTMLInputElement>}
          type='duration'
          label='Duration'
          value={values.duration}
          error={errors.duration}
          onChange={v => set('duration', String(v))}
        />
        <Toggle
          ref={refs.newsletter as RefObject<HTMLButtonElement>}
          id='release-newsletter'
          label='Get the newsletter'
          value={values.newsletter}
          state={state('newsletter')}
          errorMsg={errors.newsletter}
          onChange={e => set('newsletter', Boolean(e.target.value))}
        />
        <Checkbox
          ref={refs.terms as RefObject<HTMLInputElement>}
          id='release-terms'
          name='terms'
          label='I accept the terms'
          checked={values.terms}
          state={state('terms')}
          errorMsg={errors.terms}
          onChange={e => set('terms', e.target.checked)}
        />
        <div className={cx(styles.row, styles.fullRow)}>
          <Button onClick={validate}>Validate</Button>
          <Button variant='secondary' onClick={showAllErrors}>Show every error</Button>
          <Button variant='textOnly' onClick={reset}>Clear</Button>
        </div>
        {done && (
          <p className={cx(styles.success, styles.fullRow)} role='status'>
            Everything is filled in. A real form would send it now.
          </p>
        )}
      </div>

      <div className={styles.inspector}>
        <span className={styles.label}>What a screen reader gets</span>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope='col'>Component</th>
                <th scope='col'>ref</th>
                <th scope='col'>aria-invalid</th>
                <th scope='col'>Linked message</th>
                <th scope='col' aria-label='Action' />
              </tr>
            </thead>
            <tbody>
              {FIELDS.map(({ key, name }) => {
                const info = inspected[key]
                const invalid = info?.invalid === 'true'
                return (
                  <tr key={key} className={cx(invalid && styles.invalidRow)}>
                    <th scope='row'>{name}</th>
                    <td><code>{info?.element ?? 'no ref'}</code></td>
                    <td>
                      <span className={cx(styles.chip, invalid && styles.chipError)}>
                        {info?.invalid ?? '—'}
                      </span>
                    </td>
                    <td>
                      {info?.message ? (
                        <>
                          <code className={styles.attrName}>{info.attribute}</code>
                          {` “${info.message}”`}
                        </>
                      ) : '—'}
                    </td>
                    <td>
                      <button
                        type='button'
                        className={styles.focusButton}
                        onClick={() => refs[key].current?.focus()}
                      >
                        Focus
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className={styles.note}>
          <b>Focus</b>
          {' calls '}
          <code>ref.current.focus()</code>
          {'. MultiSelect links its error with '}
          <code>aria-errormessage</code>
          {', the attribute react-select supports. The pickers put the attributes on each part '}
          of the field (day, month and year; hours and minutes).
        </p>
      </div>
    </div>
  )
}

/* ------------------------------- State colors ------------------------------- */

const STATES = ['null', 'error', 'dirty', 'disabled'] as const

export const StatesDemo = () => (
  <Preview note='MultiSelect used to look the same in every state.'>
    <div className={styles.states}>
      {STATES.map(state => (
        <MultiSelect
          key={state}
          name={`release-states-${state}`}
          label={`state='${state}'`}
          placeholder='Pick fruits'
          value={state === 'dirty' ? ['apple'] : []}
          options={FRUITS}
          getLabel={fruitLabel}
          state={state}
          errorMsg={state === 'error' ? 'Pick at least one fruit.' : undefined}
          onChange={() => { }}
          fullWidth
        />
      ))}
      <Select
        id='release-states-select'
        label="Select, state='dirty'"
        placeholder='Choose a country'
        value='pt'
        options={COUNTRIES}
        getLabel={c => c.name}
        getValue={c => c.code}
        state='dirty'
        onChange={() => { }}
        fullWidth
      />
      <TimePicker
        type='duration'
        label='TimePicker duration, with an error'
        value=''
        error='Enter a duration (hh:mm).'
        onChange={() => { }}
      />
    </div>
  </Preview>
)

/* ----------------------------------- Text ----------------------------------- */

const VARIANTS: TextVariant[] = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7',
  'subHeading', 'subHeadingSmall', 'paragraph', 'textBlock', 'microCopy',
]

export const TextDemo = () => {
  const rowsRef = useRef<HTMLDivElement>(null)
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const rendered = rowsRef.current?.querySelectorAll('[data-variant]') ?? []
    setTags([...rendered].map(el => el.tagName.toLowerCase()))
  }, [])

  return (
    <Preview note='The left column is read from the page: the element each Text rendered.'>
      <div className={styles.textRows} ref={rowsRef}>
        {VARIANTS.map((variant, i) => (
          <div key={variant} className={styles.textRow}>
            <code className={styles.tag}>{`<${tags[i] ?? '…'}>`}</code>
            <Text variant={variant} data-variant={variant}>{variant}</Text>
          </div>
        ))}
      </div>
    </Preview>
  )
}

/* ---------------------- Native attributes and triggers ---------------------- */

const PLANS = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team' },
]

// The markup without classes and inline styles, which aren't the point here
const markupOf = (el: Element | null) => (el?.outerHTML ?? '')
  .replace(/ class="[^"]*"/g, '')
  .replace(/ style="[^"]*"/g, '')

export const NativeDemo = () => {
  const [plan, setPlan] = useState('pro')
  const radioRef = useRef<HTMLInputElement>(null)
  const [markup, setMarkup] = useState('')

  useEffect(() => setMarkup(markupOf(radioRef.current)), [plan])

  return (
    <Preview note='The Pro radio, as rendered: required and data-plan reach the input.'>
      <fieldset className={styles.radios}>
        <legend>Plan</legend>
        {PLANS.map(({ value, label }) => (
          <Radio
            key={value}
            ref={value === 'pro' ? radioRef : undefined}
            id={`release-plan-${value}`}
            name='release-plan'
            value={value}
            label={label}
            checked={plan === value}
            onChange={() => setPlan(value)}
            required
            data-plan={value}
          />
        ))}
      </fieldset>
      <pre className={styles.markup}>{markup}</pre>
    </Preview>
  )
}

export const TriggersDemo = () => (
  <Preview note='Click the avatar, the tag or the pill: the popover opens next to it.'>
    <div className={styles.row}>
      <PopOver
        side='bottom'
        trigger={<Avatar name='Ana Silva' displayLabel description='Product design' tabIndex={0} />}
      >
        <Text variant='microCopy'>A profile from the team.</Text>
      </PopOver>
      <PopOver side='bottom' trigger={<Tag tabIndex={0}>v0.3.0</Tag>}>
        <Text variant='microCopy'>This release.</Text>
      </PopOver>
      <PopOver side='bottom' trigger={<Pill variant='success' tabIndex={0}>262 tests</Pill>}>
        <Text variant='microCopy'>There were 223 before this release.</Text>
      </PopOver>
    </div>
  </Preview>
)
