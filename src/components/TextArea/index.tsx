import React, { forwardRef } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import Label from '../shared/Label'
import Text from '../Text'

import {
  StyledTextArea,
  StyledTextAreaField,
  StyledWrapper,
} from './styles'

export type Props = {
  id: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  description?: string
  state?: Stitches.VariantProps<typeof StyledTextAreaField>['state']
  fullWidth?: Stitches.VariantProps<typeof StyledWrapper>['fullWidth']
  errorMsg?: string
  rows?: number
  required?: boolean
  maxLength?: number
  css?: Stitches.CSS
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  textAreaRef?: React.RefObject<HTMLTextAreaElement>
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({
  id,
  name,
  value,
  label,
  placeholder,
  description,
  state,
  fullWidth,
  errorMsg,
  rows = 5,
  required = false,
  maxLength,
  css,
  onChange,
  ...props
}, ref) => (
  <StyledWrapper fullWidth={fullWidth}>
    <StyledTextArea>
      {label || description ? (
        <Label
          id={id}
          label={label}
          description={description}
        />
      ) : null}
      <StyledTextAreaField
        id={id}
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        state={state}
        rows={rows}
        required={required}
        maxLength={maxLength}
        css={css}
        onChange={onChange}
        {...props}
      />
    </StyledTextArea>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </StyledWrapper>
))
export default TextArea
