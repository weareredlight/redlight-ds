import { useId } from 'react'

/**
 * The ids and aria attributes of a form field: the given id, or a generated one so the label and
 * the error message can always point to the field, and the attributes that make screen readers
 * announce the field as invalid and read its error message.
 */
export const useField = (id: string | undefined, invalid: boolean, hasErrorMsg: boolean) => {
  const generatedId = useId()
  const fieldId = id || generatedId
  const errorId = `${fieldId}-error`

  return {
    fieldId,
    errorId,
    ariaProps: {
      'aria-invalid': invalid || undefined,
      'aria-describedby': invalid && hasErrorMsg ? errorId : undefined,
    },
  }
}
