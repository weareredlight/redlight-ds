import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Label from '../shared/Label'

import styles from './styles.module.scss'

export type RadioProps = {
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

const Radio = ({
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
}: RadioProps) => (
  <div
    className={cx(styles.radio, disabled && styles.disabled, className)}
    style={style}
    {...props}
  >
    {labelPosition === 'left' ? (
      <>
        <Label
          label={label}
          description={description}
          id={id}
          className={styles.label}
        />
        <input
          className={cx(styles.trigger, disabled && styles.disabled)}
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- text is in <Label> */}
        <label className={styles.indicator} htmlFor={id} />
      </>
    ) : (
      <>
        <input
          className={cx(styles.trigger, disabled && styles.disabled)}
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- text is in <Label> */}
        <label className={styles.indicator} htmlFor={id} />
        <Label
          label={label}
          description={description}
          id={id}
          className={styles.label}
        />
      </>
    )}
  </div>
)

export const radioSelector = `.${styles.radio}`

export default Radio
