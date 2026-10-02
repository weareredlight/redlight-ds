import type { ColorType } from '../../theme'
import type { CSSProperties, ReactNode } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
  | 'subHeading' | 'subHeadingSmall' | 'paragraph' | 'textBlock' | 'microCopy'

export type TextProps = {
  variant?: TextVariant
  color?: ColorType
  className?: string
  style?: CSSProperties
  children?: string | ReactNode
}

export const Text = ({
  variant = 'paragraph',
  color = 'primary',
  className,
  style,
  children,
  ...props
}: TextProps) => (
  <span
    className={cx(styles.text, styles[variant], className)}
    style={{ '--text-color': `var(--colors-${color})`, ...style } as CSSProperties}
    {...props}
  >
    {children}
  </span>
)

export const textSelector = `.${styles.text}`

export default Text
