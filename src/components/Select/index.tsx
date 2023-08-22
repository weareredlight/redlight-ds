import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectInput from '@radix-ui/react-select'
import { useState } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import Label from '../shared/Label'
import Text from '../Text'

import {
  StyledSelect,
  StyledTrigger,
  StyledContent,
  StyledItem,
  StyledPortal,
  StyledChevron,
  StyledInputCheck,
  StyledScrollUpButton,
  StyledScrollDownButton,
  StyledViewport,
} from './styles'

export type Props<T> = {
  id: string
  name?: string
  label?: string
  value: string | null
  type?: 'number' | 'string'
  placeholder: string
  description?: string
  emptyOption?: string
  errorMsg?: string
  state?: Stitches.VariantProps<typeof StyledTrigger>['state']
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: T[]
  getLabel: (option: T) => string
  getValue: (option: T) => string
  css?: Stitches.CSS
  variant?: Stitches.VariantProps<typeof StyledTrigger>['variant']
  fullWidth?: Stitches.VariantProps<typeof StyledSelect>['fullWidth']
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
  state,
  onChange,
  options,
  getLabel,
  getValue,
  emptyOption,
  variant,
  css,
  fullWidth = false,
  ...props
}: Props<T>) => {
  const [viewContent, setViewContent] = useState(false)
  const selectedOption = options.find(o => getValue(o) === value)
  const ChevronToShow = viewContent ? ChevronUpIcon : ChevronDownIcon

  return (
    <StyledSelect css={css} fullWidth={fullWidth}>
      {label || description ? (
        <Label id={id} label={label} description={description} />
      ) : null}

      <SelectInput.Root
        {...props}
        name={name}
        value={value || (emptyOption ? '-1' : '')}
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
        <StyledTrigger id={id} state={state} variant={variant}>
          <SelectInput.Value
            key={selectedOption ? getValue(selectedOption) : emptyOption ? '-1' : ''}
          >
            {selectedOption ? getLabel(selectedOption) : emptyOption || <span className='placeholder'>{placeholder}</span>}
          </SelectInput.Value>
          <StyledChevron>
            <ChevronToShow />
          </StyledChevron>
        </StyledTrigger>

        <StyledPortal>
          <StyledContent>
            <StyledScrollUpButton>
              <ChevronUpIcon />
            </StyledScrollUpButton>
            <StyledViewport>
              {emptyOption && (
                <StyledItem value='-1'>
                  <SelectInput.ItemText>
                    {emptyOption}
                  </SelectInput.ItemText>
                  <StyledInputCheck>
                    <CheckIcon />
                  </StyledInputCheck>
                </StyledItem>
              )}
              {options.map(option => (
                <StyledItem
                  key={getValue(option)}
                  value={getValue(option)}
                >
                  <SelectInput.ItemText>
                    {getLabel(option)}
                  </SelectInput.ItemText>
                  <StyledInputCheck>
                    <CheckIcon />
                  </StyledInputCheck>
                </StyledItem>
              ))}
            </StyledViewport>
            <StyledScrollDownButton>
              <ChevronDownIcon />
            </StyledScrollDownButton>
          </StyledContent>
        </StyledPortal>
      </SelectInput.Root>
      {state === 'error' && errorMsg && (
        <>
          <br />
          <Text color='danger' variant='microCopy'>
            {errorMsg}
          </Text>
        </>
      )}
    </StyledSelect>
  )
}

export default Select
