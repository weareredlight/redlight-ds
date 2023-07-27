import { styled } from '../../../stitches'

export const StyledLabel = styled('label', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    align: {
      left: {
        alignItems: 'flex-start',
        textAlign: 'left',
      },
      center: {
        alignItems: 'center',
        textAlign: 'center',
      },
      right: {
        alignItems: 'flex-end',
        textAlign: 'right',
      },
    },
  },

  p: {
    include: 'heading7',
    userSelect: 'none',
  },
  span: {
    include: 'microCopy',
    color: '$neutral',
    userSelect: 'none',
  }
})
