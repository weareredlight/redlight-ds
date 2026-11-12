import { RefreshCwIcon } from 'lucide-react'
import React from 'react'

import type { ReactNode } from 'react'

import { cx } from 'src/utils'

import styles from './styles.module.scss'

type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'tertiary' | 'textOnly' | 'danger' | 'success'
type ButtonSize = 'normal' | 'large'
type ButtonIconPosition = 'left' | 'right' | 'iconOnly' | 'null'

type ButtonOwnProps = {
  children?: ReactNode
  iconComponent?: React.ElementType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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

export type ButtonProps = ButtonOwnProps
  & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>

const iconPositionClasses: Record<ButtonIconPosition, string> = {
  left: styles.iconLeft,
  right: styles.iconRight,
  iconOnly: styles.iconOnly,
  null: styles.noIcon,
}

const Button = React.forwardRef(({
  children,
  iconComponent: Icon,
  onClick,
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
    if (!Icon || !iconPosition) return children
    switch (iconPosition) {
      case 'left': return (
        <>
          <Icon />
          {children}
        </>
      )
      case 'right': return (
        <>
          {children}
          <Icon />
        </>
      )
      case 'iconOnly': return <Icon />
      default: return children
    }
  }

  const resolvedIconPosition: ButtonIconPosition = (Icon && !children)
    ? 'iconOnly'
    : (Icon && iconPosition) || 'null'

  const classes = cx(
    styles.button,
    styles[size],
    fullWidth && styles.fullWidth,
    styles[variant],
    iconPositionClasses[resolvedIconPosition],
    isLoading && styles.loading,
    className,
  )

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      disabled={disabled}
      aria-busy={isLoading || undefined}
      aria-disabled={isLoading || undefined}
      onClick={isLoading ? undefined : onClick}
      className={classes}
      style={style}
      ref={ref}
      {...props}
    >
      {getIconAndText()}
      {isLoading && <RefreshCwIcon className='loading-icon' />}
    </button>
  )
})

export const buttonSelector = `.${styles.button}`

export default Button
