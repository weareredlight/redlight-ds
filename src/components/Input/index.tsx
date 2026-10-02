import React from 'react'

import type { ChangeEvent } from 'react'

import Flex from '../../elements/Flex'
import { capitalize, cx } from '../../utils'
import Button from '../Button'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

type IconPosition = 'left' | 'right' | 'null'

const iconPositionClasses: Record<IconPosition, string> = {
  left: styles.iconLeft,
  right: styles.iconRight,
  null: styles.noIcon,
}

export type InputProps = {
  id?: string
  type?: string
  name?: string
  label?: string
  value?: string
  placeholder?: string
  description?: string
  iconComponent?: React.FC
  errorMsg?: string
  variant?: 'simple' | 'null'
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  iconPosition?: IconPosition
  required?: boolean
  onClickIcon?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  fullWidth?: boolean
  disabled?: boolean,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef(({
  id,
  type = 'text',
  name,
  label,
  value,
  placeholder,
  description,
  iconComponent,
  errorMsg,
  state = 'null',
  iconPosition = 'right',
  onClickIcon,
  onChange,
  className,
  variant = 'null',
  required = false,
  containerProps,
  fullWidth = false,
  disabled = false,
  ...props
}: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const renderIcon = () => {
    if (!iconComponent) return null
    if (onClickIcon) {
      return (
        <Button
          onClick={onClickIcon}
          iconComponent={iconComponent}
          iconPosition='iconOnly'
          variant='textOnly'
          className={styles.iconButton}
        />
      )
    }
    return (
      <Flex style={{ padding: 'var(--space-xxsm)' }}>
        {iconComponent({})}
      </Flex>
    )
  }
  const iconPos = iconComponent ? iconPosition : 'null'

  return (
    <div
      className={cx(
        styles.wrapper,
        variant === 'simple' && styles.simple,
        fullWidth ? styles.fullWidth : styles.notFullWidth,
      )}
      {...containerProps}
    >
      <div className={cx(styles.input, iconPositionClasses[iconPos])}>
        {label || description ? (
          <Label
            id={id || name}
            label={label}
            description={description}
            className={styles.label}
          />
        ) : null}
        <input
          className={cx(
            styles.field,
            variant === 'simple' && styles.simple,
            state !== 'null' && styles[`state${capitalize(state)}`],
            className,
          )}
          id={id || name}
          ref={ref}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={e => {
            let finalValue: string | null = e.target.value
            if (type === 'number') finalValue = Number(finalValue) as unknown as string
            const target = {
              value: finalValue === '' ? null : finalValue, name: name || id
            } as (EventTarget & HTMLInputElement)
            const event = { target } as ChangeEvent<HTMLInputElement>
            onChange(event)
          }}
          {...props}
        />
        <div className={cx(styles.iconWrapper, iconPositionClasses[iconPos])}>
          {iconComponent && iconPos === 'left' && renderIcon()}
          {iconComponent && iconPos === 'right' && renderIcon()}
        </div>
      </div>
      {state === 'error' && errorMsg && (
        <Text color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </div>
  )
})

export const inputSelector = `.${styles.input}`

export default Input
