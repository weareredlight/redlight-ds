import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectInput from '@radix-ui/react-select'
import { useMemo, useState } from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type SelectProps<T> = {
  id: string
  name?: string
  label?: string
  value: string | null
  type?: 'number' | 'string'
  placeholder: string
  description?: string
  emptyOption?: string
  errorMsg?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: T[]
  getLabel: (option: T) => string
  getValue: (option: T) => string
  className?: string
  style?: CSSProperties
  variant?: 'simple' | 'null'
  fullWidth?: boolean
}

const Select = <T extends object>({
  id,
  name,
  label,
  value,
  type = 'string',
  placeholder,
  description,
  errorMsg,
  state = 'null',
  onChange,
  options,
  getLabel,
  getValue,
  emptyOption,
  variant,
  className,
  style,
  fullWidth = false,
  ...props
}: SelectProps<T>) => {
  const [viewContent, setViewContent] = useState(false)
  const selectedOption = options.find(o => getValue(o) === value)
  const ChevronToShow = viewContent ? ChevronUpIcon : ChevronDownIcon

  const valueToDisplay = useMemo(() => {
    if (selectedOption) {
      return getLabel(selectedOption)
    } if (emptyOption) {
      return emptyOption
    }
    return placeholder
  }, [selectedOption, emptyOption, getLabel, placeholder])

  return (
    <div
      className={cx(styles.select, fullWidth ? styles.fullWidth : styles.notFullWidth, className)}
      style={style}
    >
      {label || description ? (
        <Label id={id} label={label} description={description} className={styles.label} />
      ) : null}

      <SelectInput.Root
        {...props}
        name={name}
        value={value || valueToDisplay}
        onOpenChange={() => setViewContent(!viewContent)}
        onValueChange={value => {
          let finalValue: string | null = value
          if (emptyOption && value === '-1') {
            finalValue = null
          } else if (type === 'number') {
            finalValue = Number(value) as unknown as string
          }
          const target = {
            value: finalValue, name: name || id
          } as unknown as (EventTarget & HTMLSelectElement)
          const event = { target } as unknown as ChangeEvent<HTMLSelectElement>
          if (onChange) onChange(event)
        }}
      >
        <SelectInput.Trigger
          id={id}
          className={cx(
            styles.trigger,
            variant === 'simple' && styles.simple,
            styles[`state${capitalize(state)}`],
          )}
        >
          <SelectInput.Value>
            {valueToDisplay}
          </SelectInput.Value>
          <SelectInput.Icon className={styles.chevron}>
            <ChevronToShow />
          </SelectInput.Icon>
        </SelectInput.Trigger>

        <SelectInput.Portal>
          <SelectInput.Content className={styles.content}>
            <SelectInput.ScrollUpButton className={styles.scrollButton}>
              <ChevronUpIcon />
            </SelectInput.ScrollUpButton>
            <SelectInput.Viewport className={styles.viewport}>
              {emptyOption && (
                <SelectInput.Item className={styles.item} value='-1'>
                  <SelectInput.ItemText>
                    {emptyOption}
                  </SelectInput.ItemText>
                  <SelectInput.ItemIndicator className={styles.check}>
                    <CheckIcon />
                  </SelectInput.ItemIndicator>
                </SelectInput.Item>
              )}
              {options.map(option => (
                <SelectInput.Item
                  className={styles.item}
                  key={getValue(option)}
                  value={getValue(option)}
                >
                  <SelectInput.ItemText>
                    {getLabel(option)}
                  </SelectInput.ItemText>
                  <SelectInput.ItemIndicator className={styles.check}>
                    <CheckIcon />
                  </SelectInput.ItemIndicator>
                </SelectInput.Item>
              ))}
            </SelectInput.Viewport>
            <SelectInput.ScrollDownButton className={styles.scrollButton}>
              <ChevronDownIcon />
            </SelectInput.ScrollDownButton>
          </SelectInput.Content>
        </SelectInput.Portal>
      </SelectInput.Root>
      {state === 'error' && errorMsg && (
        <>
          <br />
          <Text color='danger' variant='microCopy'>
            {errorMsg}
          </Text>
        </>
      )}
    </div>
  )
}

export const selectSelector = `.${styles.select}`

export default Select
