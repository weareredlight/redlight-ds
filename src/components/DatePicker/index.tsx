import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import * as Calendar from 'react-date-picker'

import type { CSSProperties } from 'react'

import { colors } from '../../theme/colors'
import { cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

import 'react-date-picker/dist/DatePicker.css'

export type DatePickerProps = {
  name?: string
  label?: string
  error?: string | null
  value?: string
  onChange: (value: string) => void
  isWeekSelector?: boolean
  localeString?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

export const DatePicker = ({
  name,
  label,
  error,
  value,
  onChange,
  isWeekSelector = false,
  localeString = 'en-US',
  disabled = false,
  fullWidth = false,
  className,
  style,
}: DatePickerProps) => (
  <div
    className={cx(
      styles.datePicker,
      colors.accent && styles.accent,
      error && styles.hasError,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      className,
    )}
    style={style}
  >
    {label && <Label id={name} label={label} />}
    <Calendar.DatePicker
      name={name}
      onChange={date => {
        onChange(date ? dayjs(date as Date).format('YYYY-MM-DD') : '')
      }}
      value={value}
      disabled={disabled}
      inputRef={null}
      calendarIcon={<CalendarIcon />}
      clearIcon={null}
      locale={localeString}
      formatMonthYear={(_, date) => date.toLocaleDateString(localeString, {
        month: 'long',
        year: 'numeric',
      })}
      formatShortWeekday={(_, date) => date.toLocaleDateString(localeString, {
        weekday: 'short'
      })}
      formatMonth={(_, date) => date.toLocaleDateString(localeString, {
        month: 'long'
      })}
      calendarType={`${isWeekSelector ? 'hebrew' : 'iso8601'}`}
      tileClassName={({ date, view }) => {
        const isSameWeek = dayjs(date).isSame(value || new Date(), 'week')
        return view === 'month' && isWeekSelector && isSameWeek
          ? 'selected-week'
          : ''
      }}
    />

    {error && (
      <Text color='danger' variant='microCopy'>
        {String(error)}
      </Text>
    )}
  </div>
)

export const datePickerSelector = `.${styles.datePicker}`

export default DatePicker
