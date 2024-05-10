import { ClockIcon } from '@radix-ui/react-icons'
import { TimePicker as ReactTimePicker } from 'react-time-picker'

import type { ChangeEvent } from 'react'

import Label from '../shared/Label'
import Text from '../Text'

import { StyledDurationPicker, StyledTimePicker } from './styles'

import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

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
  disabled?: boolean
  fullWidth?: boolean
}

const TimePicker = ({
  name,
  label,
  description,
  value,
  onChange,
  error,
  type = PickerTypes.TIME,
  disabled = false,
  fullWidth = false,
}: TimePickerProps) => (
  <StyledTimePicker hasError={Boolean(error)} fullWidth={fullWidth} disabled={disabled}>
    {label && <Label id={name} label={label} description={description} />}
    {type === PickerTypes.TIME ? (
      <ReactTimePicker
        name={name}
        value={value}
        onChange={time => onChange(time ? `${time}:00` : '')}
        clearIcon={false}
        className='timePickerMain'
        clockIcon={<ClockIcon />}
      />
    ) : (
      <StyledDurationPicker
        displayType='input'
        value={value?.slice(0, 5).replace(':', '')}
        valueIsNumericString
        onValueChange={values => onChange(`${values.formattedValue}:00`)}
        allowEmptyFormatting
        format='##:##'
        mask='-'
        isAllowed={values => {
          const time = values.formattedValue.split(':')
          const isHoursAllowed = Number(time[0]) ? Number(time[0]) < 24 : true
          const isMinAllowed = Number(time[1]) ? Number(time[1]) < 60 : true
          return isHoursAllowed && isMinAllowed
        }}
        fullWidth={fullWidth}
      />
    )}
    {error && (
      <Text color='danger' variant='microCopy'>
        {String(error)}
      </Text>
    )}
  </StyledTimePicker>
)

export default TimePicker
