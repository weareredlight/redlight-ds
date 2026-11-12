import React from 'react'

import type { ChangeEvent } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { useField } from 'src/hooks'
import { capitalize, cx } from 'src/utils'

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
  maxLength,
  disabled,
  className,
  onChange,
  ...props
}: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const { fieldId, errorId, ariaProps } = useField(id || name, state === 'error', Boolean(errorMsg))

  return (
    <div className={cx(styles.wrapper, fullWidth && styles.fullWidth)}>
      <div className={styles.textArea}>
        {label || description ? (
          <Label
            id={fieldId}
            label={label}
            description={description}
            className={styles.label}
          />
        ) : null}
        <textarea
          className={cx(styles.field, state && state !== 'null' && styles[`state${capitalize(state)}`], className)}
          id={fieldId}
          ref={ref}
          name={name}
          value={value}
          placeholder={placeholder}
          rows={rows}
          required={required}
          maxLength={maxLength}
          disabled={disabled || state === 'disabled'}
          onChange={onChange}
          {...ariaProps}
          {...props}
        />
      </div>
      {state === 'error' && errorMsg && (
        <Text id={errorId} color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </div>
  )
})

export const textAreaSelector = `.${styles.textArea}`

export default TextArea
