import { Cross2Icon } from '@radix-ui/react-icons'

import type * as Stitches from '@stitches/react'
import type { ReactNode } from 'react'

import Button from '../Button'

import { StyledPill } from './styles'

export type PillProps = {
  children: ReactNode
  variant?: Stitches.VariantProps<typeof StyledPill>['variant']
  onClose?: () => void
  css?: Stitches.CSS
}

const CloseIcon = () => <Cross2Icon />

const Pill = ({
  children,
  variant = 'default',
  onClose,
  css,
  ...props
}: PillProps) => (
  <StyledPill
    variant={variant}
    css={{ ...css }}
    {...props}
  >
    {children}
    {onClose && (
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
