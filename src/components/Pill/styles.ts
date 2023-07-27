import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'

export const StyledPill = styled('span', {
  include: 'microCopy',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: '$xxxsm $xxsm',
  gap: '$xxsm',
  borderRadius: '$full',

  [`& ${StyledButton}`]: {
    padding: 0,
    width: '14px',
    height: '14px',
    '&:hover': {
      background: 'transparent',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },

  variants: {
    variant: {
      default: {
        background: '$primary200',
        color: '$primary',
        [`& ${StyledButton}`]: {
          color: '$primary'
        },
      },
      error: {
        background: '$danger100',
        color: '$danger500',
        [`& ${StyledButton}`]: {
          color: '$danger500'
        },
      },
      success: {
        background: '$success100',
        color: '$success500',
        [`& ${StyledButton}`]: {
          color: '$success500'
        },
      }
    },

    closable: {
      true: {
        [`& ${StyledButton}`]: {
          padding: 0,
          width: '14px',
          height: '14px',
          '&:hover': {
            background: 'transparent',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      }
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
