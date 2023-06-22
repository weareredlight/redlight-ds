import { StyledButton } from 'components/Button/styles'
import { styled } from 'stitches.config'

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$sm',
  [`& ${StyledButton}`]: {
    width: '32px',
    height: '32px',
    padding: 0,

    svg: {
      width: '16px',
      height: '16px',
    }
  },
  variants: {
    variant: {
      default: {
        gap: '4px',
      },
      minimal: {
        gap: '2px',
      }
    }
  }
})