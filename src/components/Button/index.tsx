import React, { forwardRef } from 'react'

import type * as Stitches from '@stitches/react'
import type { ReactNode } from 'react'

import { StyledButton } from './styles'

export type Props = {
  children?: ReactNode
  iconComponent?: React.FC
  onClick?: () => void
  variant?: Stitches.VariantProps<typeof StyledButton>['variant']
  size?: Stitches.VariantProps<typeof StyledButton>['size']
  fullWidth?: Stitches.VariantProps<typeof StyledButton>['fullWidth']
  iconPosition?: Stitches.VariantProps<typeof StyledButton>['iconPosition']
  type?: 'submit' | 'button',
  disabled?: boolean,
  css?: Stitches.CSS
}

export const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  iconComponent,
  variant,
  size,
  fullWidth,
  iconPosition = 'right',
  type,
  disabled,
  css,
  ...props
}, ref) => {
  const getIconAndText = () => {
    if (!iconComponent || !iconPosition) return children
    switch (iconPosition) {
      case 'left': return (
        <>
          {iconComponent({})}
          {children}
        </>
      )
      case 'right': return (
        <>
          {children}
          {iconComponent({})}
        </>
      )
      case 'iconOnly': return iconComponent({})
      default: return children
    }
  }
  return (
    <StyledButton
      variant={variant}
      iconPosition={(iconComponent && !children) ? 'iconOnly' : (iconComponent && iconPosition) || 'null'}
      type={type || 'button'}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      css={{ ...css }}
      {...props}
      ref={ref}
    >
      {getIconAndText()}
    </StyledButton>
  )
})
export default Button