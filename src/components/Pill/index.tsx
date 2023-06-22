import { Cross2Icon } from '@radix-ui/react-icons'
import React from 'react'

import type * as Stitches from '@stitches/react'
import type { ReactNode } from 'react'

import { StyledPill } from './styles'

import Button from 'components/Button'

export type Props = {
  children: ReactNode
  variant?: Stitches.VariantProps<typeof StyledPill>['variant']
  closable?: Stitches.VariantProps<typeof StyledPill>['closable']
  onClose?: () => void
  css?: Stitches.CSS
}

const CloseIcon = () => <Cross2Icon />

const Pill = ({
  children,
  variant,
  closable,
  onClose,
  css,
  ...props
}: Props) => (
  <StyledPill
    variant={variant}
    css={{ ...css }}
    {...props}
  >
    {children}
    {closable && (
      <Button
        onClick={onClose}
        iconComponent={CloseIcon}
        iconPosition='iconOnly'
        variant='textOnly'
      />
    )}
  </StyledPill>
)

export default Pill
