import type { CSSProperties } from 'react'

import { capitalize, cx } from '../../../utils'

import styles from './styles.module.scss'

export type LabelProps = {
  id?: string
  label?: string
  description?: string
  optional?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
  style?: CSSProperties
}

const Label = ({
  id,
  label,
  description,
  optional,
  align = 'left',
  className,
  style,
  ...props
}: LabelProps) => (
  <label
    htmlFor={id}
    className={cx(styles.label, styles[`align${capitalize(align)}`], className)}
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
)

export const labelSelector = `.${styles.label}`

export default Label
