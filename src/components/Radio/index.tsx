import React from 'react'

import Label from '../shared/Label'

import {
  StyledRadio, StyledTrigger, StyledIndicator
} from './styles'

export type Props = {
  label?: string,
  description?: string,
  id: string,
  value?: string
  checked?: boolean,
  labelPosition?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Radio = ({
  id,
  value,
  label,
  description,
  checked,
  labelPosition = 'right',
  onChange,
  ...props
}: Props) => (
  <StyledRadio {...props}>
    {labelPosition === 'left' ? (
      <>
        <Label
          label={label}
          description={description}
          id={id}
        />
        <StyledTrigger
          type='radio'
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <StyledIndicator htmlFor={id} />
      </>
    ) : (
      <>
        <StyledTrigger
          type='radio'
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
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
