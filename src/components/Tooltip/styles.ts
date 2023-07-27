import { styled } from '../../stitches'
import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes } from '@stitches/react'

import { StyledText } from '../Text/styles'

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

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  width: 'inherit',
  height: 'inherit',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
  flexDirection: 'inherit',
})

export const TooltipContent = styled(Tooltip.Content, {
  maxWidth: '296px',
  borderRadius: '$xsm',
  padding: '$xxsm $sm',
  backgroundColor: '$neutral700',
  include: 'heading7',
  color: '$white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  [`& ${StyledText}`]: {
    whiteSpace: 'pre-line',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$neutral700',
})
