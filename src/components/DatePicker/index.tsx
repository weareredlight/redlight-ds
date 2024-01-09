import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import * as Calendar from 'react-date-picker'

import Label from '../shared/Label'
import Text from '../Text'

import { StyledDatePicker } from './styles'

import 'react-date-picker/dist/DatePicker.css'

type DatePickerProps = {
  name?: string
  label?: string
  error?: string | null
  value?: string
  onChange: (value: string) => void
  isWeekSelector?: boolean
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
        onChange(date ? new Date(date as Date).toISOString() : '')
      }}
      value={value}
      inputRef={null}
      calendarIcon={<CalendarIcon />}
      clearIcon={null}
      formatMonthYear={(_, date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      formatShortWeekday={(_, date) => date.toLocaleDateString('en-US', { weekday: 'short' })}
      formatMonth={(_, date) => date.toLocaleDateString('en-US', { month: 'long' })}
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
