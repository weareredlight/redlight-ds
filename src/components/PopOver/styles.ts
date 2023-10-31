import * as Popover from '@radix-ui/react-popover'

import { styled } from '../../stitches'

export const PopoverClose = styled(Popover.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$neutral',
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: '$neutral200' },
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: '$white',
})

export const PopoverContent = styled(Popover.Content, {
  borderRadius: '$xsm',
  padding: '$xxsm',
  marginRight: '$xlg',
  marginLeft: '$xlg',
  minWidth: 260,
  backgroundColor: '$white',
  filter: 'drop-shadow(0px 4px 20px rgba(149, 157, 165, 0.15))',
})
