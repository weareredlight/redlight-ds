import * as Popover from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { ClockIcon } from 'lucide-react'
import { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { TimePicker as ReactTimePicker } from 'react-time-picker'

import type { ChangeEvent, CSSProperties, KeyboardEvent } from 'react'

import Button from 'src/components/Button'
import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { cx, resolveLocale, uses12Hours } from 'src/utils'

import styles from './styles.module.scss'

import 'react-time-picker/dist/TimePicker.css'

export enum PickerTypes {
  DURATION = 'duration',
  TIME = 'time',
}

export type TimePickerProps = {
  name?: string
  label?: string
  description?: string
  value?: string
  onChange: (time: ChangeEvent<HTMLInputElement> | string) => void
  error?: string | null
  type?: PickerTypes | 'time' | 'duration'
  /** The locale for 12 hours (4:00 PM) or 24 hours (16:00). Defaults to the browser's */
  locale?: string
  /** Shows AM and PM in the locale's language instead of English */
  localizeNames?: boolean
  /** Overrides the locale's format, e.g. 'HH:mm' or 'h:mm a' (Unicode tokens: H, HH, h, mm, a) */
  format?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

type Option = { value: string, label: string }

const pad = (n: number) => String(n).padStart(2, '0')
const toOption = (n: number): Option => ({ value: pad(n), label: pad(n) })
const HOURS = Array.from({ length: 24 }, (_, i) => toOption(i))
// 12 hours: 12, 1, 2 ... 11. The value is the hour on a 12-hour clock, from 0 to 11
const HOURS_12 = Array.from({ length: 12 }, (_, i) => ({ value: pad(i), label: String(i || 12) }))
const MINUTES = Array.from({ length: 60 }, (_, i) => toOption(i))

// The locale's AM and PM, e.g. "a.m." and "p.m." in en-CA
const getPeriods = (locale: string): Option[] => [9, 21].map(hour => {
  const parts = new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: true })
    .formatToParts(new Date(2000, 0, 1, hour))
  const fallback = hour < 12 ? 'AM' : 'PM'
  return {
    value: hour < 12 ? 'am' : 'pm',
    label: parts.find(part => part.type === 'dayPeriod')?.value ?? fallback,
  }
})

// Arrow keys, Home and End move between a column's options
const focusKeys: Record<string, (index: number, last: number) => number> = {
  ArrowDown: index => index + 1,
  ArrowUp: index => index - 1,
  Home: () => 0,
  End: (_, last) => last,
}

const moveFocus = (event: KeyboardEvent<HTMLButtonElement>) => {
  const move = focusKeys[event.key]
  if (!move) return
  const options = [...event.currentTarget.parentElement!.querySelectorAll('button')]
  const next = options[move(options.indexOf(event.currentTarget), options.length - 1)]
  if (!next) return
  event.preventDefault()
  next.focus()
}

type TimeColumnProps = {
  label: string
  options: Option[]
  selected?: string
  /** The option for the current time, which is highlighted */
  current: string
  onSelect: (value: string) => void
  className?: string
}

const TimeColumn = ({
  label,
  options,
  selected,
  current,
  onSelect,
  className,
}: TimeColumnProps) => (
  <div role='group' aria-label={label} className={cx(styles.column, className)}>
    {options.map(option => (
      <button
        key={option.value}
        type='button'
        className={cx(styles.option, option.value === current && styles.isNow)}
        aria-pressed={option.value === selected}
        onClick={() => onSelect(option.value)}
        onKeyDown={moveFocus}
      >
        {option.label}
      </button>
    ))}
  </div>
)

const TimePicker = ({
  name,
  label,
  description,
  value,
  onChange,
  error,
  type = PickerTypes.TIME,
  locale: localeProp,
  localizeNames = false,
  format,
  disabled = false,
  fullWidth = false,
  className,
  style,
}: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const locale = resolveLocale(localeProp)
  // A format decides on its own: 'h' is the 12-hour hour, 'H' the 24-hour one
  const is12Hours = format ? format.includes('h') : uses12Hours(locale)
  // AM and PM are in English unless asked otherwise. The field takes its hours from the format
  // then, since an English locale would also make it show 12 hours
  const namesLocale = localizeNames ? locale : 'en-US'
  const fieldFormat = format ?? (localizeNames ? undefined : (is12Hours ? 'h:mm a' : 'HH:mm'))

  const now = new Date()
  const currentHour = pad(is12Hours ? now.getHours() % 12 : now.getHours())
  const currentMinute = pad(now.getMinutes())
  const currentPeriod = now.getHours() >= 12 ? 'pm' : 'am'

  // value is 'HH:mm' or 'HH:mm:ss'
  const hour = value ? Number(value.slice(0, 2)) : undefined
  const minute = value ? value.slice(3, 5) : undefined
  const isPm = hour !== undefined && hour >= 12

  const change = (time: string | null) => onChange(time ? `${time}:00` : '')
  const changeHour = (hour24: number) => change(`${pad(hour24)}:${minute ?? '00'}`)

  const select = (time: string | null) => {
    change(time)
    setIsOpen(false)
  }

  return (
    <div
      className={cx(
        styles.timePicker,
        error && styles.hasError,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className,
      )}
      style={style}
    >
      {label && <Label id={name} label={label} description={description} />}
      {type === PickerTypes.TIME ? (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          {/* The popover lines up with the whole field, not only with its button */}
          <Popover.Anchor asChild>
            <div className={cx(styles.field, isOpen && styles.isOpen)}>
              <ReactTimePicker
                name={name}
                value={value}
                onChange={time => change(time)}
                disabled={disabled}
                // The library only hides the clear button with null. `false` rendered an empty one
                clearIcon={null}
                // The time is split into hour and minute fields. Each one has the field's label
                hourAriaLabel={label ? `${label}, hours` : 'Hours'}
                minuteAriaLabel={label ? `${label}, minutes` : 'Minutes'}
                amPmAriaLabel={label ? `${label}, AM or PM` : 'AM or PM'}
                nativeInputAriaLabel={label}
                // The popover is ours (below), so it can have a footer and render in a portal
                disableClock
                openClockOnFocus={false}
                locale={namesLocale}
                format={fieldFormat}
              />
              <Popover.Trigger
                className={styles.fieldButton}
                aria-label={label ? `${label}, open time list` : 'Open time list'}
                disabled={disabled}
              >
                <ClockIcon size={ICON_SIZE} />
              </Popover.Trigger>
            </div>
          </Popover.Anchor>

          <Popover.Portal>
            <Popover.Content
              className={styles.clock}
              align='start'
              sideOffset={4}
              collisionPadding={8}
              onOpenAutoFocus={event => {
                // Scroll each column to its selected option, or to the current time when there's
                // none, and focus the hour, instead of the first button
                event.preventDefault()
                const content = event.currentTarget as HTMLElement
                const find = (parent: HTMLElement) => (
                  parent.querySelector<HTMLElement>('[aria-pressed="true"]')
                  ?? parent.querySelector<HTMLElement>(`.${styles.isNow}`)
                )
                content.querySelectorAll<HTMLElement>(`.${styles.column}`).forEach(column => {
                  const option = find(column)
                  if (!option) return
                  const { offsetTop, offsetHeight } = option
                  column.scrollTo({ top: offsetTop - (column.clientHeight - offsetHeight) / 2 })
                })
                find(content)?.focus({ preventScroll: true })
              }}
            >
              <div className={styles.columns}>
                {/* An hour or AM/PM keeps the list open to pick the minutes; a minute closes it */}
                <TimeColumn
                  label='Hours'
                  options={is12Hours ? HOURS_12 : HOURS}
                  selected={hour === undefined ? undefined : pad(is12Hours ? hour % 12 : hour)}
                  current={currentHour}
                  onSelect={h => changeHour(Number(h) + (is12Hours && isPm ? 12 : 0))}
                />
                <TimeColumn
                  label='Minutes'
                  options={MINUTES}
                  selected={minute}
                  current={currentMinute}
                  onSelect={m => select(`${pad(hour ?? 0)}:${m}`)}
                />
                {is12Hours && (
                  <TimeColumn
                    label='AM or PM'
                    className={styles.periodColumn}
                    options={getPeriods(namesLocale)}
                    selected={hour === undefined ? undefined : (isPm ? 'pm' : 'am')}
                    current={currentPeriod}
                    onSelect={period => changeHour(((hour ?? 0) % 12) + (period === 'pm' ? 12 : 0))}
                  />
                )}
              </div>
              <div className={styles.footer}>
                <Button
                  variant='textOnly'
                  className={styles.footerButton}
                  disabled={!value}
                  onClick={() => select(null)}
                >
                  Clear
                </Button>
                <Button
                  variant='secondary'
                  className={styles.footerButton}
                  onClick={() => select(dayjs().format('HH:mm'))}
                >
                  Now
                </Button>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        <PatternFormat
          id={name}
          className={cx(styles.durationPicker, fullWidth && styles.fullWidth)}
          displayType='input'
          disabled={disabled}
          value={value?.slice(0, 5).replace(':', '')}
          valueIsNumericString
          onValueChange={(values, { source }) => {
            // Only report what the user typed, and only a complete time or an empty field.
            // Otherwise this sent '--:--:00' on mount and half-typed values like '2-:--:00'
            if (source !== 'event') return
            if (values.value === '') onChange('')
            else if (values.value.length === 4) onChange(`${values.formattedValue}:00`)
          }}
          allowEmptyFormatting
          format='##:##'
          mask='-'
          isAllowed={values => {
            const time = values.formattedValue.split(':')
            const isHoursAllowed = Number(time[0]) ? Number(time[0]) < 24 : true
            const isMinAllowed = Number(time[1]) ? Number(time[1]) < 60 : true
            return isHoursAllowed && isMinAllowed
          }}
        />
      )}
      {error && (
        <Text color='danger' variant='microCopy'>
          {String(error)}
        </Text>
      )}
    </div>
  )
}

export const timePickerSelector = `.${styles.timePicker}`

export default TimePicker
