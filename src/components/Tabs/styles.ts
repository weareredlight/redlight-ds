import * as Tabs from '@radix-ui/react-tabs'

import { styled } from 'stitches.config'

export const TabsRoot = styled(Tabs.Root, {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
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
