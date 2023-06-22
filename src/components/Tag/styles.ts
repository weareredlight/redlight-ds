import { StyledButton } from '../Button/styles'

import { styled } from 'stitches.config'

export const StyledTag = styled('span', {
  include: 'microCopy',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: '$xxxsm $xxsm',
  gap: '$xxsm',
  borderRadius: '$xsm',

  variants: {
    variant: {
      default: {
        background: '$neutral300',
        color: '$neutral800',
      },
      error: {
        background: '$danger100',
        color: '$danger500'
      }
    },

    closable: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          background: '$neutral400',
        },
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

    disabled: {
      true: {
        pointerEvents: 'none',
        background: '$neutral200',
        color: '$neutral400',
        [`& ${StyledButton}`]: {
          color: '$neutral400'
        },
      }
    }
  },

  defaultVariants: {
    variant: 'default',
  },
})
