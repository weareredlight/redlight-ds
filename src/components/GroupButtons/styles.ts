import { styled } from '../../stitches'
import { StyledButton } from '../Button/styles'

export const StyledGroupButtons = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '$xsm',
  border: '1px solid $primary',

  [`& ${StyledButton}`]: {
    position: 'relative',
    minWidth: '72px',
    flex: '1 1 0px',
    borderRadius: 0,
    border: 0,

    '&:focus': {
      boxShadow: 'none',
    },

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '1px',
      backgroundColor: '$primary',
    },

    '&:first-child': {
      '&:before': {
        display: 'none',
      },
    }
  },
})
