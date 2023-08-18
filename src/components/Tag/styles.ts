import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'

export const StyledTag = styled('span', {
  include: 'microCopy',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: '$xxxsm $xxsm',
  gap: '$xxsm',
  borderRadius: '$xsm',

  '&.closable': {
    '&:hover': {
      background: '$neutral400',
    },
    [`& ${StyledButton}`]: {
      padding: 0,
      width: '14px',
      height: '14px',
      cursor: 'pointer',
      '&:hover': {
        background: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },

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
