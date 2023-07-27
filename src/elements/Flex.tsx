import { styled } from '../stitches'

const Flex = styled('div', {
  display: 'flex',
  flexWrap: 'nowrap',
  padding: 0,

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    gap: {
      xxxsm: {
        gap: '$xxxsm'
      },
      xxsm: {
        gap: '$xxsm'
      },
      xsm: {
        gap: '$xsm'
      },
      sm: {
        gap: '$sm'
      },
      lg: {
        gap: '$lg'
      },
      xlg: {
        gap: '$xlg'
      },
      xxlg: {
        gap: '$xxlg'
      },
      xxxlg: {
        gap: '$xxxlg'
      },
    }
  },

  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'center',
  },
})

export default Flex
