import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import * as Calendar from 'react-date-picker'

import Label from '../shared/Label'
import Text from '../Text'

import { StyledDatePicker } from './styles'

import 'react-date-picker/dist/DatePicker.css'

type ValuePiece = Date | null

type DatePickerProps = {
  name?: string
  label?: string
  error?: string | null
  value?: string
  onChange: (value: ValuePiece | [ValuePiece, ValuePiece]) => void
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
      value={value ? dayjs(value).format('YYYY-MM-DDTHH:mm:ss') : null}
      onChange={onChange}
      inputRef={null}
      calendarIcon={<CalendarIcon />}
      clearIcon={null}
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
