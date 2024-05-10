import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

import type * as Stitches from '@stitches/react'

import Label from '../shared/Label'
import Text from '../Text'

import {
  StyledCheckbox, StyledTrigger, StyledIndicator
} from './styles'

export type CheckboxProps = {
  label?: string
  description?: string
  id: string
  value?: string
  checked?: boolean
  disabled?: Stitches.VariantProps<typeof StyledCheckbox | typeof StyledTrigger>['disabled']
  state?: Stitches.VariantProps<typeof StyledTrigger>['state']
  errorMsg?: string
  labelPosition?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  id,
  value,
  label,
  description,
  checked,
  disabled = false,
  state = 'null',
  errorMsg,
  labelPosition = 'right',
  onChange,
  ...props
}: CheckboxProps) => (
  <>
    <StyledCheckbox disabled={disabled}>
      {labelPosition === 'left' ? (
        <>
          <Label
            id={id}
            label={label}
            description={description}
          />
          <StyledTrigger
            type='checkbox'
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <StyledIndicator htmlFor={id}>
            <CheckIcon />
          </StyledIndicator>
        </>
      ) : (
        <>
          <StyledTrigger
            type='checkbox'
            id={id}
            value={value}
            state={state}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <StyledIndicator htmlFor={id}>
            <CheckIcon />
          </StyledIndicator>
          <Label
            id={id}
            label={label}
            description={description}
          />
        </>
      )}
    </StyledCheckbox>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
)

export default Checkbox
