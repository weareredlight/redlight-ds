import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'
import { StyledLabel } from '../shared/Label/styles'

export const StyledWrapper = styled('div', {
  minWidth: '256px',
  maxWidth: '100%',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    variant: {
      simple: {
        width: '100%',
      },
      null: {}
    }
  }
})

export const StyledIconWrapper = styled('div', {
  position: 'absolute',
  bottom: '$xxxsm',

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
  marginBottom: '$xxxsm',
  borderRadius: '$xsm',

  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  include: 'microCopy',
  outline: '1px solid $neutral400',

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
    outlineColor: '$neutral600',
  },
  '&:focus': {
    outlineColor: '$primary',
  },

  variants: {
    variant: {
      simple: {
        outline: 'none',
        minWidth: '80px',
        // width: '100%',
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
