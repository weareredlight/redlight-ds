import React, { forwardRef } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import Flex from '../../elements/Flex'
import Button from '../Button'
import Label from '../shared/Label'
import Text from '../Text'

import {
  StyledInput,
  StyledInputField,
  StyledIconWrapper,
  StyledWrapper,
} from './styles'

export type Props = {
  id?: string
  type?: string
  name?: string
  label?: string
  value?: string
  placeholder?: string
  description?: string
  iconComponent?: React.FC
  errorMsg?: string
  variant?: Stitches.VariantProps<typeof StyledInputField>['variant']
  state?: Stitches.VariantProps<typeof StyledInputField>['state']
  iconPosition?: Stitches.VariantProps<typeof StyledInput>['iconPosition']
  required?: boolean
  css?: Stitches.CSS
  onClickIcon?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  inputRef?: React.RefObject<HTMLInputElement>
  containerProps?: React.HTMLAttributes<HTMLDivElement>
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({
  id,
  type = 'text',
  name,
  label,
  value,
  placeholder,
  description,
  iconComponent,
  errorMsg,
  state,
  iconPosition = 'right',
  onClickIcon,
  onChange,
  css,
  variant,
  required = false,
  containerProps,
  ...props
}, ref) => {
  const renderIcon = () => {
    if (!iconComponent) return null
    if (onClickIcon) {
      return (
        <Button
          onClick={onClickIcon}
          iconComponent={iconComponent}
          iconPosition='iconOnly'
          variant='textOnly'
        />
      )
    }
    return (
      <Flex css={{ padding: '$xxsm' }}>
        {iconComponent({})}
      </Flex>
    )
  }
  const iconPos = iconComponent ? iconPosition : 'null'

  return (
    <StyledWrapper variant={variant} {...containerProps}>
      <StyledInput iconPosition={iconPos}>
        {label || description ? (
          <Label
            id={id || name}
            label={label}
            description={description}
          />
        ) : null}
        <StyledInputField
          id={id || name}
          ref={ref}
          css={css}
          name={name}
          value={value}
          type={type}
          state={state}
          variant={variant}
          placeholder={placeholder}
          required={required}
          onChange={e => {
            let finalValue: string | null = e.target.value
            if (type === 'number') finalValue = Number(finalValue) as unknown as string
            const target = {
              value: finalValue, name: name || id
            } as (EventTarget & HTMLInputElement)
            const event = { target } as ChangeEvent<HTMLInputElement>
            onChange(event)
          }}
          {...props}
        />
        <StyledIconWrapper iconPosition={iconPos}>
          {iconComponent && iconPos === 'left' && renderIcon()}
          {iconComponent && iconPos === 'right' && renderIcon()}
        </StyledIconWrapper>
      </StyledInput>
      {state === 'error' && errorMsg && (
        <Text color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </StyledWrapper>
  )
})

export default Input
