import { SymbolIcon } from '@radix-ui/react-icons'
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
  isLoading?: Stitches.VariantProps<typeof StyledButton>['isLoading']
  type?: 'submit' | 'button',
  disabled?: boolean,
  css?: Stitches.CSS
}

const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  iconComponent,
  variant,
  size,
  fullWidth,
  iconPosition = 'right',
  isLoading,
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
      isLoading={isLoading}
      size={size}
      fullWidth={fullWidth}
      css={{ ...css }}
      ref={ref}
      {...props}
    >
      {getIconAndText()}
      {isLoading && <SymbolIcon />}
    </StyledButton>
  )
})

export default Button
