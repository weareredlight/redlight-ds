import * as Switch from '@radix-ui/react-switch'

import { StyledLabel } from 'components/shared/Label/styles'
import { styled } from 'stitches.config'

export const StyledToggle = styled('div', {
  width: 'fit-content',
  display: 'flex',
  gap: '$xxsm',

  [`& ${StyledLabel}`]: {
    padding: 0,
  },
})

export const StyledTrigger = styled(Switch.Root, {
  all: 'unset',
  width: '28px',
  height: '16px',
  backgroundColor: '$neutral400',
  borderRadius: '$full',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  outline: '1px solid transparent',

  '&:hover': {
    backgroundColor: '$neutral600',
  },
  '&:focus': {
    backgroundColor: '$neutral700',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primary',
    '&:hover': {
      backgroundColor: '$primary600',
    },
    '&:focus': {
      backgroundColor: '$primary700',
    },
  },

  variants: {
    state: {
      error: {
        outlineColor: '$danger',
      },
      dirty: {
        outlineColor: '$accent',
      },
      null: {}
    }
  }
})

export const StyledThumb = styled(Switch.Thumb, {
  display: 'block',
  width: '12px',
  height: '12px',
  backgroundColor: '$white',
  borderRadius: '$full',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(14px)'
  },
})
