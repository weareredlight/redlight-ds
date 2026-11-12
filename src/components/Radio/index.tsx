import React from 'react'

import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

type RadioOwnProps = {
  label?: string,
  description?: string,
  name?: string,
  id: string,
  value?: string
  checked?: boolean,
  disabled?: boolean
  labelPosition?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
  style?: CSSProperties
}

export type RadioProps = RadioOwnProps
  & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof RadioOwnProps | 'type'>

const Radio = React.forwardRef(({
  id,
  name,
  value,
  label,
  description,
  checked,
  disabled = false,
  labelPosition = 'right',
  onChange,
  className,
  style,
  ...props
}: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const labelElement = (
    <Label
      label={label}
      description={description}
      id={id}
      className={styles.label}
    />
  )

  return (
    <div
      className={cx(styles.radio, disabled && styles.disabled, className)}
      style={style}
    >
      {labelPosition === 'left' && labelElement}
      <input
        ref={ref}
        className={cx(styles.trigger, disabled && styles.disabled)}
        type='radio'
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- text is in <Label> */}
      <label className={styles.indicator} htmlFor={id} />
      {labelPosition !== 'left' && labelElement}
    </div>
  )
})

export const radioSelector = `.${styles.radio}`

export default Radio
