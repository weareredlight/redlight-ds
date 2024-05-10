import * as Switch from '@radix-ui/react-switch'

import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledToggle = styled('div', {
  width: 'fit-content',
  display: 'flex',
  gap: '$xxsm',

  '*': {
    cursor: 'pointer',
  },

  [`& ${StyledLabel}`]: {
    padding: 0,
    marginTop: 1.5,
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        '*': {
          cursor: 'default',
        },
      },
    }
  },
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

export const StyledTrigger = styled(Switch.Root, {
  all: 'unset',
  width: '28px',
  height: '16px',
  backgroundColor: '$neutral400',
  borderRadius: '$full',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  outline: '1px solid transparent',
  cursor: 'pointer',

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
      disabled: {
        backgroundColor: '$neutral300',
        [`& ${StyledThumb}`]: {
          backgroundColor: '$neutral400',
        },
        '&[data-state="checked"]': {
          backgroundColor: '$neutral300',
        },
      },
      null: {},
    }
  },
})
