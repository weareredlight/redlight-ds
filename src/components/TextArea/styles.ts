import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledTextAreaField = styled('textarea', {
  width: '100%',
  position: 'relative',
  padding: '$xxsm',
  borderRadius: '$xsm',

  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  include: 'microCopy',
  outline: '1px solid $neutral400',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  resize: 'vertical',

  '&::placeholder': {
    color: '$neutral',
  },
  '&::value': {
    color: '$neutral800',
  },

  variants: {
    state: {
      error: {
        outlineColor: '$danger',
      },
      dirty: {
        outlineColor: '$accent',
      },
      disabled: {
        backgroundColor: '$neutral200',
        outlineColor: '$neutral200',
        color: '$neutral',
        pointerEvents: 'none',
      },
      null: {
        '&:hover': {
          backgroundColor: '$neutral100',
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
  minWidth: '256px',
  maxWidth: '100%',
  width: 'fit-content',
  display: 'inline-block',
  position: 'relative',

  [`& ${StyledLabel}`]: {
    paddingBottom: '$xxxsm',
    pointerEvents: 'none',
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

export const StyledWrapper = styled('div', {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
        [`& ${StyledTextArea}`]: {
          width: '100%',
          [`& ${StyledTextAreaField}`]: {
            width: '100%',
          },
        },
      },
    },
  },
})
