import React from 'react'

import type { ChangeEvent } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type TextAreaProps = {
  id?: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  description?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  fullWidth?: boolean
  errorMsg?: string
  rows?: number
  required?: boolean
  maxLength?: number
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef(({
  id,
  name,
  value,
  label,
  placeholder,
  description,
  state = 'null',
  fullWidth = false,
  errorMsg,
  rows = 5,
  required = false,
  maxLength = 0,
  className,
  onChange,
  ...props
}: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => (
  <div className={cx(styles.wrapper, fullWidth && styles.fullWidth)}>
    <div className={styles.textArea}>
      {label || description ? (
        <Label
          id={id}
          label={label}
          description={description}
          className={styles.label}
        />
      ) : null}
      <textarea
        className={cx(styles.field, styles[`state${capitalize(state)}`], className)}
        id={id}
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        maxLength={maxLength}
        onChange={onChange}
        {...props}
      />
    </div>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </div>
))
export const textAreaSelector = `.${styles.textArea}`

export default TextArea
