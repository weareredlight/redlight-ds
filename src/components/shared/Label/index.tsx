import React from 'react'

import type { CSSProperties } from 'react'

import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

type LabelOwnProps = {
  id?: string
  label?: string
  description?: string
  optional?: boolean
  align?: 'left' | 'center' | 'right'
  size?: 'small' | 'normal'
  className?: string
  style?: CSSProperties
}

export type LabelProps = LabelOwnProps
  & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof LabelOwnProps>

const Label = React.forwardRef(({
  id,
  label,
  description,
  optional,
  align = 'left',
  size = 'small',
  className,
  style,
  ...props
}: LabelProps, ref: React.Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={id}
    className={cx(
      styles.label,
      styles[`align${capitalize(align)}`],
      styles[`size${capitalize(size)}`],
      className
    )}
    style={style}
    {...props}
  >
    {label && (
      <p>
        {label}
        {optional && ' (optional)'}
      </p>
    )}
    {description && <span>{description}</span>}
  </label>
))

export const labelSelector = `.${styles.label}`

export default Label
