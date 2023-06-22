import React, { forwardRef } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import Text from '../Text'

import {
  StyledTextArea,
  StyledTextAreaField,
  StyledWrapper,
} from './styles'

import Label from 'components/shared/Label'

export type Props = {
  id: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  description?: string
  state?: Stitches.VariantProps<typeof StyledTextAreaField>['state']
  errorMsg?: string
  rows?: number
  required?: boolean
  maxLength?: number
  css?: Stitches.CSS
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({
  id,
  name,
  value,
  label,
  placeholder,
  description,
  state,
  errorMsg,
  rows = 5,
  required = false,
  maxLength,
  css,
  onChange,
  ...props
}: Props, ref) => (
  <StyledWrapper>
    <StyledTextArea state={state}>
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
