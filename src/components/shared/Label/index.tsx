import type * as Stitches from '@stitches/react'

import { StyledLabel } from './styles'

export type LabelProps = {
  id?: string
  label?: string
  description?: string
  optional?: boolean
  align?: Stitches.VariantProps<typeof StyledLabel>['align']
}

const Label = ({
  id,
  label,
  description,
  optional,
  align = 'left',
  ...props
}: LabelProps) => (
  <StyledLabel
    htmlFor={id}
    align={align}
    {...props}
  >
    {label && (
      <p>
        {label}
        {optional && ' (optional)'}
      </p>
    )}
    {description && <span>{description}</span>}
  </StyledLabel>
)

export default Label
