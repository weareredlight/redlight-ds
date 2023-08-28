import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'
import { StyledLabel } from '../shared/Label/styles'

export const StyledWrapper = styled('div', {
  minWidth: '256px',
  maxWidth: '100%',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',

  span: {
    marginTop: '$xxxsm',
  },

  variants: {
    variant: {
      simple: {
        width: '100%',
      },
      null: {}
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',

        input: {
          minWidth: '256px',
        }
      }
    }
  }
})

export const StyledIconWrapper = styled('div', {
  position: 'absolute',
  bottom: 0,

  [`& ${StyledButton}`]: {
    pointerEvents: 'all',
    '&:hover': {
      background: 'transparent',
    },
    '&:focus': {
      boxShadow: 'none',
    }
  },

  variants: {
    iconPosition: {
      left: {
        justifyContent: 'flex-start',
        left: 0,
      },
      right: {
        justifyContent: 'flex-end',
        right: 0,
      },
      null: {
        display: 'none',
      },
    },
  },
})

export const StyledInputField = styled('input', {
  position: 'relative',
  height: '32px',
  width: '100%',
  padding: '$xxsm',
  borderRadius: '$xsm',

  appearance: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  include: 'microCopy',
  border: '1px solid $neutral400',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&::placeholder': {
    color: '$neutral',
  },
  '&::value': {
    color: '$neutral800',
  },

  '&:hover': {
    backgroundColor: '$neutral100',
    borderColor: '$neutral600',
  },
  '&:focus': {
    borderColor: '$primary',
  },

  variants: {
    variant: {
      simple: {
        minWidth: '80px',
        border: 'none',
        borderBottom: '1px solid $neutral200',

        '&::placeholder': {
          color: '$neutral400',
          opacity: 1,
        },
        borderRadius: '0',
        borderColor: 'transparent',
        '&:hover': {
          background: '$primary200',
        },
        '&:focus': {
          borderColor: '$primary',
        },
      },
      null: {},
    },
    state: {
      error: {
        borderColor: '$danger',

        '&:focus': {
          borderColor: '$danger',
        },
      },
      dirty: {
        borderColor: '$accent',
      },
      disabled: {
        backgroundColor: '$neutral200',
        borderColor: '$neutral200',
        color: '$neutral',
        pointerEvents: 'none',
      },
      null: {},
    },
  },

  defaultVariants: {
    variant: 'null',
    state: 'null',
  },
})

export const StyledInput = styled('div', {
  width: '100%',
  display: 'inline-block',
  position: 'relative',

  [`& ${StyledLabel}`]: {
    paddingBottom: '$xxxsm',
    pointerEvents: 'none',
  },

  variants: {
    iconPosition: {
      left: {
        [`& ${StyledInputField}`]: {
          paddingLeft: '$xxxlg',
        },
      },
      right: {
        [`& ${StyledInputField}`]: {
          paddingRight: '$xxxlg',
        },
      },
      null: {
        [`& ${StyledInputField}`]: {},
      },
    },
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
