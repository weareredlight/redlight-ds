import { CheckIcon } from 'lucide-react'
import React from 'react'

import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { useField } from 'src/hooks'
import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

type CheckboxOwnProps = {
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

export type CheckboxProps = CheckboxOwnProps
  & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof CheckboxOwnProps | 'type'>

const Checkbox = React.forwardRef(({
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
}: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const { errorId, ariaProps } = useField(id, state === 'error', Boolean(errorMsg))

  const labelElement = (
    <Label
      id={id}
      label={label}
      description={description}
      className={styles.label}
    />
  )

  return (
    <>
      <div className={cx(styles.checkbox, disabled && styles.disabled, className)} style={style}>
        {labelPosition === 'left' && labelElement}
        {/* The input is transparent, over the box: it takes the clicks, focus and keyboard */}
        <span className={styles.control}>
          <input
            ref={ref}
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
            {...ariaProps}
            {...props}
          />
          <span className={styles.indicator} aria-hidden='true'>
            <CheckIcon size={ICON_SIZE} />
          </span>
        </span>
        {labelPosition !== 'left' && labelElement}
      </div>
      {state === 'error' && errorMsg && (
        <Text id={errorId} color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </>
  )
})

export default Checkbox
