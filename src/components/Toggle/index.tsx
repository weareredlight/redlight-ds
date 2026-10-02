import * as Switch from '@radix-ui/react-switch'
import React from 'react'

import type { ChangeEvent, Ref, CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type ToggleProps = {
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
}: ToggleProps, ref: React.Ref<HTMLInputElement>) => (
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
        ref={ref as Ref<HTMLButtonElement>}
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
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
))

export const toggleSelector = `.${styles.toggle}`

export default Toggle
