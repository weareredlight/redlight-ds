import { Cross2Icon } from '@radix-ui/react-icons'

import type * as Stitches from '@stitches/react'
import type { ReactNode } from 'react'

import Button from '../Button'

import { StyledTag } from './styles'

export type Props = {
  children: ReactNode
  variant?: Stitches.VariantProps<typeof StyledTag>['variant']
  disabled?: Stitches.VariantProps<typeof StyledTag>['disabled']
  onClose?: () => void
}

const CloseIcon = () => <Cross2Icon />

const Tag = ({
  children,
  variant,
  onClose,
  disabled,
  ...props
}: Props) => (
  <StyledTag
    variant={variant}
    disabled={disabled}
    className={(onClose && variant !== 'error') ? 'closable' : ''}
    {...props}
  >
    {children}
    {(onClose && variant !== 'error') && (
      <Button
        onClick={onClose}
        iconComponent={CloseIcon}
        iconPosition='iconOnly'
        variant='textOnly'
      />
    )}
  </StyledTag>
)

export default Tag
