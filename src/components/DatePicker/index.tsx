import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import * as Calendar from 'react-date-picker'

import Label from '../shared/Label'
import Text from '../Text'

import { StyledDatePicker } from './styles'

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
}: DatePickerProps) => (
  <StyledDatePicker
    hasError={Boolean(error)}
    fullWidth={fullWidth}
    disabled={disabled}
  >
    {label && <Label id={name} label={label} />}
    <Calendar.DatePicker
      name={name}
      onChange={date => {
        onChange(date ? dayjs(date as Date).format('YYYY-MM-DD') : '')
      }}
      value={value}
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
  </StyledDatePicker>
)

export default DatePicker
