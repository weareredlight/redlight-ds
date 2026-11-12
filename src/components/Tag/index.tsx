import { XIcon } from 'lucide-react'
import React from 'react'

import type { ReactNode, CSSProperties } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

type TagOwnProps = {
  children: ReactNode
  variant?: 'default' | 'error'
  disabled?: boolean
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

export type TagProps = TagOwnProps
  & Omit<React.HTMLAttributes<HTMLSpanElement>, keyof TagOwnProps>

const Tag = React.forwardRef(({
  children,
  variant = 'default',
  onClose,
  disabled = false,
  className,
  style,
  ...props
}: TagProps, ref: React.Ref<HTMLSpanElement>) => {
  const closable = onClose && variant !== 'error'

  return (
    <span
      ref={ref}
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
          iconComponent={XIcon}
          iconPosition='iconOnly'
          variant='textOnly'
          className={styles.closeButton}
          aria-label='Remove'
        />
      )}
    </span>
  )
})

export const tagSelector = `.${styles.tag}`

export default Tag
