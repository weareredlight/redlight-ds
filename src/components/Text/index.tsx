import React from 'react'

import type { CSSProperties, ReactNode } from 'react'
import type { ColorType } from 'src/theme'

import { cx } from 'src/utils'

import styles from './styles.module.scss'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
  | 'subHeading' | 'subHeadingSmall' | 'paragraph' | 'textBlock' | 'microCopy'

const variantElements: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'p',
  subHeading: 'p',
  subHeadingSmall: 'p',
  paragraph: 'p',
  textBlock: 'p',
  microCopy: 'span',
}

type TextOwnProps = {
  variant?: TextVariant
  color?: ColorType
  className?: string
  style?: CSSProperties
  children?: string | ReactNode
}

export type TextProps = TextOwnProps
  & Omit<React.HTMLAttributes<HTMLElement>, keyof TextOwnProps>

const Text = React.forwardRef(({
  variant = 'paragraph',
  color = 'black',
  className,
  style,
  children,
  ...props
}: TextProps, ref: React.Ref<HTMLElement>) => {
  const Component = variantElements[variant]

  return (
    <Component
      ref={ref}
      className={cx(styles.text, styles[variant], className)}
      style={{ '--text-color': `var(--colors-${color})`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  )
})

export const textSelector = `.${styles.text}`

export default Text
