import { StyledInput } from '../Input/styles'

import { styled } from 'stitches.config'

export const StyledTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '$sm',
  borderRadius: '$sm',
  overflow: 'hidden'
})

export const StyledTableHead = styled('thead', {
  '& tr': {
    '& th': {
      background: '$neutral100',
      padding: '$xxsm',
      textAlign: 'left',
      verticalAlign: 'top',
      include: 'subHeading',
      color: '$neutral800',
      cursor: 'default',

      '&:first-child': { borderTopLeftRadius: '$sm' },
      '&:last-child': { borderTopRightRadius: '$sm' },

      '&:hover': {
        background: '$primary100',
      },
      '&:active, &:focus': {
        background: '$primary100',
        outline: '1px solid $primary300',
        outlineOffset: '-1px'
      },

      '&.disabled': {
        pointerEvents: 'none',
      },

      '& > div.column-header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '$xxsm',
        gap: '$xxsm',

        '&.cursor-pointer': {
          cursor: 'pointer',
        },
      },

      [`& ${StyledInput}`]: {
        width: '100%',
      },
    },
  },
})

export const StyledTableBody = styled('tbody', {
  '& tr': {
    borderBottom: '1px solid $neutral200',

    '& td': {
      padding: '$xsm',
      textAlign: 'left',
      verticalAlign: 'top',
      include: 'textBlock',
      color: '$neutral700'
    },

    '&:hover': {
      backgroundColor: '$primary100',
    },
  },
})
