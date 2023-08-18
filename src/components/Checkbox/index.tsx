import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

import type * as Stitches from '@stitches/react'

import Label from '../shared/Label'

import {
  StyledCheckbox, StyledTrigger, StyledIndicator
} from './styles'

export type Props = {
  label?: string
  description?: string
  id: string
  value?: string
  checked?: boolean
  disabled?: Stitches.VariantProps<typeof StyledCheckbox | typeof StyledTrigger>['disabled']
  labelPosition?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  id,
  value,
  label,
  description,
  checked,
  disabled,
  labelPosition,
  onChange,
  ...props
}: Props) => (
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
)

export default Checkbox
