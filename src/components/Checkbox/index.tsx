import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type CheckboxProps = {
  label?: string
  description?: string
  id: string
  value?: string
  checked?: boolean
  disabled?: boolean
  state?: 'error' | 'dirty' | 'null'
  errorMsg?: string
  labelPosition?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
}

const Checkbox = ({
  id,
  value,
  label,
  description,
  checked,
  disabled = false,
  state = 'null',
  errorMsg,
  labelPosition = 'right',
  onChange,
  className,
  style,
  ...props
}: CheckboxProps) => (
  <>
    <div className={cx(styles.checkbox, disabled && styles.disabled, className)} style={style}>
      {labelPosition === 'left' ? (
        <>
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
          <input
            className={cx(
              styles.trigger,
              state !== 'null' && styles[`state${capitalize(state)}`],
              disabled && styles.disabled,
            )}
            type='checkbox'
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <label className={styles.indicator} htmlFor={id}>
            <CheckIcon />
          </label>
        </>
      ) : (
        <>
          <input
            className={cx(
              styles.trigger,
              state !== 'null' && styles[`state${capitalize(state)}`],
              disabled && styles.disabled,
            )}
            type='checkbox'
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <label className={styles.indicator} htmlFor={id}>
            <CheckIcon />
          </label>
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
        </>
      )}
    </div>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
)

export const checkboxSelector = `.${styles.checkbox}`

export default Checkbox
