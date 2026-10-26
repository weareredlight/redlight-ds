import { ClockIcon } from 'lucide-react'
import { PatternFormat } from 'react-number-format'
import { TimePicker as ReactTimePicker } from 'react-time-picker'

import type { ChangeEvent, CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

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
  className?: string
  style?: CSSProperties
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
  className,
  style,
}: TimePickerProps) => (
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
      <ReactTimePicker
        name={name}
        value={value}
        onChange={time => onChange(time ? `${time}:00` : '')}
        disabled={disabled}
        // The library only hides the clear button with null. `false` rendered an empty button
        clearIcon={null}
        // The time is split into hour and minute fields. Each one carries the field's label
        hourAriaLabel={label ? `${label}, hours` : 'Hours'}
        minuteAriaLabel={label ? `${label}, minutes` : 'Minutes'}
        amPmAriaLabel={label ? `${label}, AM or PM` : 'AM or PM'}
        nativeInputAriaLabel={label}
        clockAriaLabel='Open clock'
        className={styles.main}
        clockIcon={<ClockIcon size={ICON_SIZE} />}
      />
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

export const timePickerSelector = `.${styles.timePicker}`

export default TimePicker
