import { styled } from '../../stitches.config'

export const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$xsm',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$xxsm',
  cursor: 'pointer',

  '&:focus': {
    $$shadowColor: '$colors$primary300',
    boxShadow: '0 0 0 2px $$shadowColor',
  },
  '&:disabled': {
    pointerEvents: 'none',
  },

  variants: {
    size: {
      normal: {
        include: 'heading7',
        padding: '$xxsm $lg',
        '& svg': {
          width: '16px',
          height: '16px'
        },
      },
      large: {
        include: 'heading5',
        padding: '$xxsm $xxlg',
        minHeight: '42px',
        '& svg': {
          width: '18px',
          height: '18px'
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      neutral: {
        border: '1px solid $neutral400',
        backgroundColor: 'transparent',
        color: '$neutral700',
        '&:hover': {
          backgroundColor: '$neutral100',
          borderColor: '$neutral700',
          color: '$neutral700',
        },
        '&:active': {
          borderColor: '$neutral800',
          color: '$neutral900',
        },
        '&:disabled': {
          color: '$neutral300',
          borderColor: '$neutral400',
        },
      },
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: '$primary600',
        },
        '&:active': {
          backgroundColor: '$primary700',
        },
        '&:disabled': {
          backgroundColor: '$primary200',
        },
      },
      secondary: {
        border: '1px solid $primary',
        backgroundColor: 'transparent',
        color: '$primary',
        '&:hover': {
          backgroundColor: '$primary100',
          borderColor: '$primary600',
          color: '$primary600',
        },
        '&:active': {
          borderColor: '$primary700',
          color: '$primary700',
        },
        '&:disabled': {
          color: '$primary200',
          borderColor: '$primary200',
        },
      },
      textOnly: {
        border: '1px solid transparent',
        backgroundColor: 'transparent',
        color: '$neutral700',
        '&:hover': {
          backgroundColor: '$neutral200',
        },
        '&:active': {
          backgroundColor: '$neutral300',
        },
        '&:disabled': {
          color: '$neutral400',
        },
      },
      danger: {
        backgroundColor: '$danger',
        color: '$white',
        '&:hover': {
          backgroundColor: '$danger500',
        },
        '&:active': {
          backgroundColor: '$danger600',
        },
        '&:focus': {
          $$shadowColor: '$colors$danger200',
        },
        '&:disabled': {
          backgroundColor: '$danger200',
        },
      },
      success: {
        backgroundColor: '$success',
        color: '$white',
        '&:hover': {
          backgroundColor: '$success500',
        },
        '&:active': {
          backgroundColor: '$success600',
        },
        '&:focus': {
          $$shadowColor: '$colors$success200',
        },
        '&:disabled': {
          backgroundColor: '$success200',
        },
      },
    },
    iconPosition: {
      left: {
        paddingLeft: '$xxsm',
      },
      right: {
        paddingRight: '$xxsm',
      },
      iconOnly: {
        padding: '$xxsm',
        width: '32px',
        height: '32px',
      },
      null: {
        padding: '$xxsm $lg',
      },
    },
  },

  compoundVariants: [
    {
      size: 'large',
      iconPosition: 'left',
      css: {
        paddingLeft: '$lg',
      },
    },
    {
      size: 'large',
      iconPosition: 'right',
      css: {
        paddingRight: '$lg',
      },
    },
    {
      size: 'large',
      iconPosition: 'iconOnly',
      css: {
        padding: '$xxsm $xsm',
        width: '42px',
        height: '42px',
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'normal',
    iconPosition: 'right',
  },
})
