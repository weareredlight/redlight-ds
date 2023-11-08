import * as Tabs from '@radix-ui/react-tabs'

import { styled } from '../../stitches'

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  zIndex: 1,
})

export const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  include: 'heading7',
  backgroundColor: '$white',
  padding: '0 $xxlg',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$neutral700',
  userSelect: 'none',
  cursor: 'pointer',
  borderBottom: '1px solid transparent',
  textWrap: 'nowrap',

  '&:first-child': { borderTopLeftRadius: '$sm' },
  '&:last-child': { borderTopRightRadius: '$sm' },

  '&:hover': { backgroundColor: '$primary100' },

  '&[data-state="active"]': {
    color: '$primary',
    backgroundColor: '$primary100',
    borderColor: '$primary'
  },

  '&:focus': { backgroundColor: '$primary300' },
})

export const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: '$xxsm',
  backgroundColor: 'white',
  borderBottomLeftRadius: '$sm',
  borderBottomRightRadius: '$sm',
  outline: 'none',
})

export const StyledTabs = styled(Tabs.Root, {
  width: '100%',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',

  variants: {
    align: {
      left: {
        [`& ${TabsList}`]: {
          width: 'fit-content',
          alignSelf: 'flex-start',
        },
        [`& ${TabsContent}`]: {
          boxShadow: '$cardShadow',
          borderTopRightRadius: '$sm',
        }
      },
      right: {
        [`& ${TabsList}`]: {
          width: 'fit-content',
          alignSelf: 'flex-end',
        },
        [`& ${TabsContent}`]: {
          boxShadow: '$cardShadow',
          borderTopLeftRadius: '$sm',
        }
      },
      null: {
        [`& ${TabsList}`]: {
          width: '100%',
          alignSelf: 'unset',
          borderTopRightRadius: 'none',
          borderTopLeftRadius: 'none',
        },
        [`& ${TabsContent}`]: {
          boxShadow: 'none'
        }
      }
    }
  }
})
