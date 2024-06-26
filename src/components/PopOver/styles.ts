import * as Popover from '@radix-ui/react-popover'
import { keyframes } from '@stitches/react'

import { styled } from '../../stitches'

export const StyledPopOver = styled(Popover.Root, {
  '>button': {
    all: 'unset',
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
})

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
  cursor: 'pointer',

  '&:hover': { backgroundColor: '$neutral200' },
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: '$white',
})

export const PopoverContent = styled(Popover.Content, {
  borderRadius: '$xsm',
  padding: '$xxsm',
  marginRight: '$xxxsm',
  marginLeft: '$xxxsm',
  minWidth: 260,
  backgroundColor: '$white',
  boxShadow: '$cardShadow',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})
