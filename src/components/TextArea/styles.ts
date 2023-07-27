import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const StyledTextAreaField = styled('textarea', {
  position: 'relative',
  minWidth: '256px',
  maxWidth: '100%',
  padding: '$xxsm',
  marginBottom: '$xxxsm',
  borderRadius: '$xsm',

  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  include: 'microCopy',
  outline: '1px solid $neutral400',
  color: '$neutral800',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  resize: 'vertical',

  '&::placeholder': {
    color: '$neutral',
  },

  variants: {
    state: {
      error: {
        outlineColor: '$danger',
      },
      dirty: {
        outlineColor: '$accent',
      },
      null: {
        '&:hover': {
          outlineColor: '$neutral600',
        },
        '&:focus': {
          outlineColor: '$primary',
        },
      },
    },
  },

  defaultVariants: {
    state: 'null',
  },
})

export const StyledTextArea = styled('div', {
  width: 'fit-content',
  display: 'inline-block',
  position: 'relative',

  [`& ${StyledLabel}`]: {
    paddingBottom: '$xxxsm',
  },

  variants: {
    state: {
      error: {
        '& svg': {
          color: '$danger',
        },
      },
      dirty: {
        '& svg': {
          color: '$accent',
        },
      },
      null: {},
    },
  },
})
