import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'
import { StyledLabel } from '../shared/Label/styles'

export const StyledWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '256px',
  maxWidth: '100%',
})

export const StyledIconWrapper = styled('div', {
  position: 'absolute',
  bottom: '$xxxsm',
  right: 0,

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
    variant: {
      simple: {
        minWidth: '80px',
        width: '100%',
      },
      null: {},
    },
    iconPosition: {
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
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
  color: '$neutral800',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&::placeholder': {
    color: '$neutral',
  },

  variants: {
    variant: {
      simple: {
        outline: 'none',
        minWidth: '80px',
        width: '100%',
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
