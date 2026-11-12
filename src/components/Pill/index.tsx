import { XIcon } from 'lucide-react'
import React from 'react'

import type { CSSProperties, ReactNode } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

type PillOwnProps = {
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

export type PillProps = PillOwnProps
  & Omit<React.HTMLAttributes<HTMLSpanElement>, keyof PillOwnProps>

const Pill = React.forwardRef(({
  children,
  variant = 'default',
  onClose,
  className,
  style,
  ...props
}: PillProps, ref: React.Ref<HTMLSpanElement>) => (
  <span ref={ref} className={cx(styles.pill, styles[variant], className)} style={style} {...props}>
    {children}
    {onClose && (
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
))

export const pillSelector = `.${styles.pill}`

export default Pill
