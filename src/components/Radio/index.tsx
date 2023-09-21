import React from 'react'

import type * as Stitches from '@stitches/react'

import Label from '../shared/Label'

import {
  StyledRadio, StyledTrigger, StyledIndicator
} from './styles'

export type Props = {
  label?: string,
  description?: string,
  name?: string,
  id: string,
  value?: string
  checked?: boolean,
  disabled?: Stitches.VariantProps<typeof StyledRadio | typeof StyledTrigger>['disabled']
  labelPosition?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Radio = ({
  id,
  name,
  value,
  label,
  description,
  checked,
  disabled,
  labelPosition = 'right',
  onChange,
  ...props
}: Props) => (
  <StyledRadio disabled={disabled} {...props}>
    {labelPosition === 'left' ? (
      <>
        <Label
          label={label}
          description={description}
          id={id}
        />
        <StyledTrigger
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <StyledIndicator htmlFor={id} />
      </>
    ) : (
      <>
        <StyledTrigger
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <StyledIndicator htmlFor={id} />
        <Label
          label={label}
          description={description}
          id={id}
        />
      </>
    )}
  </StyledRadio>
)

export default Radio
