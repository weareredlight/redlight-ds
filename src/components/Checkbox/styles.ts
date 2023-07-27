import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledCheckbox = styled('div', {
  width: 'fit-content',
  display: 'flex',
  gap: '$xxsm',
  cursor: 'pointer',

  [`& ${StyledLabel}`]: {
    padding: 0,
  },
})

export const StyledTrigger = styled('input', {
  display: 'none',

  '&:hover': {
    '+ label': {
      backgroundColor: '$neutral100',
      borderColor: '$neutral600',
    }
  },

  '&:focus': {
    '+ label': {
      backgroundColor: '$neutral200',
      borderColor: '$neutral700',
    }
  },

  '&:checked': {
    '+ label': {
      backgroundColor: '$primary',
      borderColor: '$primary',
      '&:hover': {
        backgroundColor: '$primary600',
      },
      '&:focus': {
        backgroundColor: '$primary700',
      },
    }
  }
})

export const StyledIndicator = styled('label', {
  width: '16px',
  height: '16px',
  borderRadius: '$xxsm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  border: '1px solid $neutral500',
  backgroundColor: 'transparent',
  color: '$white',
})
