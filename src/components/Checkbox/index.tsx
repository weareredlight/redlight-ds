import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

import {
  StyledCheckbox, StyledTrigger, StyledIndicator
} from './styles'

import Label from 'components/shared/Label'

export type Props = {
  label?: string,
  description?: string,
  id: string,
  value?: string,
  checked?: boolean,
  labelPosition?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Checkbox = ({
  id,
  value,
  label,
  description,
  checked,
  labelPosition,
  onChange,
  ...props
}: Props) => (
  <StyledCheckbox>
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
