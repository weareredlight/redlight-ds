import { Cross2Icon } from '@radix-ui/react-icons'

import type { ReactNode, CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type TagProps = {
  children: ReactNode
  variant?: 'default' | 'error'
  disabled?: boolean
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <Cross2Icon />

const Tag = ({
  children,
  variant = 'default',
  onClose,
  disabled = false,
  className,
  style,
  ...props
}: TagProps) => {
  const closable = onClose && variant !== 'error'

  return (
    <span
      className={cx(
        styles.tag,
        styles[variant],
        disabled && styles.disabled,
        closable && styles.closable,
        className,
      )}
      style={style}
      {...props}
    >
      {children}
      {closable && (
        <Button
          onClick={onClose}
          iconComponent={CloseIcon}
          iconPosition='iconOnly'
          variant='textOnly'
          className={styles.closeButton}
        />
      )}
    </span>
  )
}

export const tagSelector = `.${styles.tag}`

export default Tag
