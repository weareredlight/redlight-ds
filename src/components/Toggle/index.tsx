import React from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent, Ref } from 'react'

import Label from '../shared/Label'
import Text from '../Text'

import { StyledToggle, StyledTrigger, StyledThumb } from './styles'

export type Props = {
  id: string
  name?: string
  label?: string
  value?: boolean
  description?: string
  errorMsg?: string
  state?: Stitches.VariantProps<typeof StyledTrigger>['state']
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  labelPosition?: 'left' | 'right'
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
  ...props
}: Props, ref: React.Ref<HTMLInputElement>) => (
  <>
    <StyledToggle disabled={Boolean(state === 'disabled')}>
      {labelPosition === 'left' && (label || description) ? (
        <Label
          id={id}
          label={label}
          description={description}
        />
      ) : null}
      <StyledTrigger
        id={id}
        ref={ref as Ref<HTMLButtonElement>}
        name={name}
        value={undefined}
        checked={value}
        disabled={Boolean(state === 'disabled')}
        state={state}
        onCheckedChange={checked => {
          const target = {
            value: checked, name: name || id
          } as unknown as (EventTarget & HTMLInputElement)
          const event = { target } as unknown as ChangeEvent<HTMLInputElement>
          if (onChange) onChange(event)
        }}
        {...props}
      >
        <StyledThumb />
      </StyledTrigger>
      {labelPosition === 'right' && (label || description) ? (
        <Label
          id={id}
          label={label}
          description={description}
        />
      ) : null}
    </StyledToggle>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
))

export default Toggle
