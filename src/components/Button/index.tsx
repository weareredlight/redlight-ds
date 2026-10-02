import { SymbolIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { ReactNode } from 'react'

import { colors } from '../../theme/colors'
import { cx } from '../../utils'

import styles from './styles.module.scss'

export type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'tertiary' | 'textOnly' | 'danger' | 'success'
export type ButtonSize = 'normal' | 'large'
export type ButtonIconPosition = 'left' | 'right' | 'iconOnly' | 'null'

export type ButtonProps = {
  children?: ReactNode
  iconComponent?: React.FC
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  iconPosition?: ButtonIconPosition
  isLoading?: boolean
  type?: 'submit' | 'button',
  disabled?: boolean,
  className?: string
  style?: React.CSSProperties
}

const iconPositionClasses: Record<ButtonIconPosition, string> = {
  left: styles.iconLeft,
  right: styles.iconRight,
  iconOnly: styles.iconOnly,
  null: styles.noIcon,
}

const Button = React.forwardRef(({
  children,
  iconComponent,
  variant = 'primary',
  size = 'normal',
  fullWidth = false,
  iconPosition = 'right',
  isLoading = false,
  type = 'button',
  disabled = false,
  className,
  style,
  ...props
}: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
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

  const resolvedIconPosition: ButtonIconPosition = (iconComponent && !children)
    ? 'iconOnly'
    : (iconComponent && iconPosition) || 'null'

  const classes = cx(
    styles.button,
    styles[size],
    fullWidth && styles.fullWidth,
    styles[variant],
    variant === 'tertiary' && colors.accent && styles.tertiaryAccent,
    iconPositionClasses[resolvedIconPosition],
    isLoading && styles.loading,
    className,
  )

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      disabled={disabled}
      className={classes}
      style={style}
      ref={ref}
      {...props}
    >
      {getIconAndText()}
      {isLoading && <SymbolIcon className='loading-icon' />}
    </button>
  )
})

export const buttonSelector = `.${styles.button}`

export default Button
