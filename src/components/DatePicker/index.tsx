import * as Popover from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { CALENDAR_TYPE_LOCALES } from 'react-calendar/dist/shared/const.js'
import * as DateInput from 'react-date-picker'

import type { CSSProperties } from 'react'
import type { CalendarType } from 'react-calendar'

import Button from 'src/components/Button'
import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { cx, resolveLocale } from 'src/utils'

import styles from './styles.module.scss'

import 'react-date-picker/dist/DatePicker.css'

export type DatePickerProps = {
  name?: string
  label?: string
  error?: string | null
  value?: string
  onChange: (value: string) => void
  isWeekSelector?: boolean
  locale?: string
  /** Shows the month and weekday names in the locale's language instead of English */
  localizeNames?: boolean
  /** Overrides the locale's field order, e.g. 'dd/MM/y' (Unicode tokens: d, dd, M, MM, y) */
  format?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

// The first day of the week (0 = Sunday) of each react-calendar calendar type
const FIRST_DAYS: Record<CalendarType, number> = {
  gregory: 0,
  hebrew: 0,
  islamic: 6,
  iso8601: 1,
}

// The same calendar type react-calendar picks for a locale. We pick it ourselves so the week
// selector highlights the same week the calendar shows
const getCalendarType = (locale: string) => (Object.entries(CALENDAR_TYPE_LOCALES)
  .find(([, locales]) => locales?.includes(locale))?.[0] ?? 'iso8601') as CalendarType

// Weekdays in three letters, e.g. "seg" instead of pt-PT's "segunda" and "seg." of pt-BR.
// Only Latin-script names are cut; others, like Arabic, would lose their meaning
const formatShortWeekday = (locale: string, day: Date) => {
  const name = day.toLocaleDateString(locale, { weekday: 'short' }).replace(/\.$/, '')
  return /^\p{Script=Latin}+$/u.test(name) ? name.slice(0, 3) : name
}

const DatePicker = ({
  name,
  label,
  error,
  value,
  onChange,
  isWeekSelector = false,
  locale: localeProp,
  localizeNames = false,
  format,
  disabled = false,
  fullWidth = false,
  className,
  style,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const locale = resolveLocale(localeProp)
  // The fields are numbers, so they follow the locale. The names are in English unless asked
  const namesLocale = localizeNames ? locale : 'en-US'
  const calendarType = getCalendarType(locale)
  const startOfWeek = (day: Date | string) => {
    const offset = (dayjs(day).day() - FIRST_DAYS[calendarType] + 7) % 7
    return dayjs(day).subtract(offset, 'day').startOf('day')
  }

  // A 'YYYY-MM-DD' string given to the libraries is read as UTC midnight, which is the previous
  // day anywhere west of UTC. dayjs reads it as local midnight
  const date = value ? dayjs(value).toDate() : null

  const change = (next: Date | null) => {
    onChange(next ? dayjs(next).format('YYYY-MM-DD') : '')
  }

  const select = (next: Date | null) => {
    change(next)
    setIsOpen(false)
  }

  return (
    <div
      className={cx(
        styles.datePicker,
        error && styles.hasError,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className,
      )}
      style={style}
    >
      {label && <Label id={name} label={label} />}
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        {/* The calendar lines up with the whole field, not only with its button */}
        <Popover.Anchor asChild>
          <div className={cx(styles.field, isOpen && styles.isOpen)}>
            <DateInput.DatePicker
              name={name}
              onChange={next => change(next as Date | null)}
              value={date}
              disabled={disabled}
              // The date is split into day, month and year fields. Each one has the field's label
              dayAriaLabel={label ? `${label}, day` : 'Day'}
              monthAriaLabel={label ? `${label}, month` : 'Month'}
              yearAriaLabel={label ? `${label}, year` : 'Year'}
              nativeInputAriaLabel={label}
              // The calendar is ours (below), so it can have a footer and render in a portal
              disableCalendar
              openCalendarOnFocus={false}
              clearIcon={null}
              locale={locale}
              format={format}
            />
            <Popover.Trigger
              className={styles.fieldButton}
              aria-label={label ? `${label}, open calendar` : 'Open calendar'}
              disabled={disabled}
            >
              <CalendarDaysIcon size={ICON_SIZE} />
            </Popover.Trigger>
          </div>
        </Popover.Anchor>

        <Popover.Portal>
          <Popover.Content
            className={styles.calendar}
            align='start'
            sideOffset={4}
            collisionPadding={8}
            onOpenAutoFocus={event => {
              // Focus the selected day, or today when there's none, instead of the first button
              event.preventDefault()
              const content = event.currentTarget as HTMLElement
              const tile = content.querySelector<HTMLElement>('.react-calendar__tile--active')
                ?? content.querySelector<HTMLElement>('.react-calendar__tile--now')
              tile?.focus()
            }}
          >
            <Calendar
              value={date}
              onChange={next => select(next as Date | null)}
              locale={namesLocale}
              // From the locale, not namesLocale: English names keep the locale's first weekday
              calendarType={calendarType}
              prevLabel={<ChevronLeftIcon size={ICON_SIZE} />}
              nextLabel={<ChevronRightIcon size={ICON_SIZE} />}
              prevAriaLabel='Previous'
              nextAriaLabel='Next'
              // Years are reached by clicking the month label, so the double arrows aren't needed
              prev2Label={null}
              next2Label={null}
              formatMonthYear={(_, day) => day.toLocaleDateString(namesLocale, {
                month: 'long',
                year: 'numeric',
              })}
              formatShortWeekday={(_, day) => formatShortWeekday(namesLocale, day)}
              formatMonth={(_, day) => day.toLocaleDateString(namesLocale, {
                month: 'long',
              })}
              tileClassName={({ date: day, view }) => {
                const isSameWeek = startOfWeek(day).isSame(startOfWeek(date ?? new Date()))
                return view === 'month' && isWeekSelector && isSameWeek
                  ? 'selected-week'
                  : ''
              }}
            />
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
                onClick={() => select(new Date())}
              >
                Today
              </Button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {error && (
        <Text color='danger' variant='microCopy'>
          {String(error)}
        </Text>
      )}
    </div>
  )
}

export const datePickerSelector = `.${styles.datePicker}`

export default DatePicker
