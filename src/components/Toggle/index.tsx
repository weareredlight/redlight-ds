import * as Switch from '@radix-ui/react-switch'
import React from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { useField } from 'src/hooks'
import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

type ToggleOwnProps = {
  id: string
  name?: string
  label?: string
  value?: boolean
  description?: string
  errorMsg?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  labelPosition?: 'left' | 'right'
  className?: string
  style?: CSSProperties
}

export type ToggleProps = ToggleOwnProps
  & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ToggleOwnProps>

const Toggle = React.forwardRef(({
  id,
  name,
  label,
  value,
  description,
  errorMsg,
  state,
  onChange,
  labelPosition = 'right',
  className,
  style,
  ...props
}: ToggleProps, ref: React.Ref<HTMLButtonElement>) => {
  const { errorId, ariaProps } = useField(id, state === 'error', Boolean(errorMsg))

  return (
    <>
      <div
        className={cx(styles.toggle, state === 'disabled' && styles.disabled, className)}
        style={style}
      >
        {labelPosition === 'left' && (label || description) ? (
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
        ) : null}
        <Switch.Root
          className={cx(styles.trigger, state && state !== 'null' && styles[`state${capitalize(state)}`])}
          id={id}
          ref={ref}
          name={name}
          value={undefined}
          checked={value}
          disabled={Boolean(state === 'disabled')}
          onCheckedChange={checked => {
            const target = {
              value: checked, name: name || id
            } as unknown as (EventTarget & HTMLInputElement)
            const event = { target } as unknown as ChangeEvent<HTMLInputElement>
            if (onChange) onChange(event)
          }}
          {...ariaProps}
          {...props}
        >
          <Switch.Thumb className={styles.thumb} />
        </Switch.Root>
        {labelPosition === 'right' && (label || description) ? (
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
        ) : null}
      </div>
      {state === 'error' && errorMsg && (
        <Text id={errorId} color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </>
  )
})

export const toggleSelector = `.${styles.toggle}`

export default Toggle
