import { Cross2Icon } from '@radix-ui/react-icons'

import type { CSSProperties, ReactNode } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type PillProps = {
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <Cross2Icon />

const Pill = ({
  children,
  variant = 'default',
  onClose,
  className,
  style,
  ...props
}: PillProps) => (
  <span className={cx(styles.pill, styles[variant], className)} style={style} {...props}>
    {children}
    {onClose && (
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

export const pillSelector = `.${styles.pill}`

export default Pill
