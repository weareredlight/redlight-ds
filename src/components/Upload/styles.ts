import { keyframes } from '@stitches/react'

import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledUploadInput = styled('input', {
  width: '100%',
  height: '32px',
  minWidth: '256px',
  maxWidth: '100%',
  opacity: 0,

  '&:disabled': {
    pointerEvents: 'none'
  },
})

export const StyledFile = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',

  img: {
    height: '26px',
    width: '26px',
    borderRadius: '$xsm',
    objectFit: 'cover'
  },

  [`& ${StyledLabel}`]: {
    alignItems: 'center',
    paddingLeft: '$xxxsm',
    p: {
      color: '$neutral800',
    },
  },

  span: {
    include: 'heading7',
    color: '$neutral',
    paddingLeft: '$xxxsm',
  },

  '& svg': {
    backgroundColor: '$neutral200',
    borderRadius: '$xsm',
    padding: '$xxxsm',
    color: '$primary',
    height: '26px',
    width: '26px',
  },
})

export const rotateIcon = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' },
})

export const StyledTrigger = styled('label', {
  position: 'absolute',
  right: '-1px',

  button: {
    backgroundColor: '$white',
    height: '34px',

    '& svg': {
      animation: `${rotateIcon} 2s infinite linear`,
    }
  }
})

export const StyledUpload = styled('div', {
  position: 'relative',
  width: '256px',
  borderRadius: '$xsm',
  padding: '$xxxsm',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$xxxsm',

  '.clear-btn': {
    position: 'absolute',
    borderRadius: '$full',
    width: 18,
    height: 18,
    minWidth: 18,
    minHeight: 18,
    padding: 0,
    zIndex: 1,

    svg: {
      width: '12px',
      height: '12px',
    }
  },

  variants: {
    size: {
      normal: {
        height: '34px',
        border: '0.075rem solid $neutral400',

        '.clear-btn': {
          right: 80,
          top: '50%',
          transform: 'translateY(-50%)',
        }
      },
      large: {
        height: '96px',
        border: '0.075rem dashed $neutral400',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        gap: '$xxsm',

        '.clear-btn': {
          top: 2,
          right: 2,
          transform: 'translateX(50%) translateY(-50%)',
        },

        '& span svg': {
          background: 'transparent',
          animation: `${rotateIcon} 2s infinite linear`,
        },

        [`& ${StyledUploadInput}`]: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          cursor: 'pointer',
        },
        [`& ${StyledFile}`]: {
          position: 'unset',
          flexDirection: 'column',
          gap: '$xxsm',

          [`& ${StyledLabel}`]: {
            paddingLeft: 0,
          },
          img: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: '$xxxsm',
            top: 0,
            left: 0,
            borderRadius: '$sm',
            pointerEvents: 'none',
          },
        },
        [`& ${StyledTrigger}`]: {
          position: 'unset',
          '& svg': {
            color: '$neutral',
            width: '16px',
            height: '16px'
          },
        },

        '&:hover': {
          [`& ${StyledFile}`]: {
            img: {
              opacity: '0.5',
            },
          }
        }
      }
    },
    fullWidth: {
      true: {
        width: '100%',
      }
    },
    disabled: {
      true: {
        backgroundColor: '$neutral200',
        [`& ${StyledFile}`]: {
          p: {
            color: '$neutral'
          },
          img: {
            opacity: '0.5',
          },
          '& svg': {
            backgroundColor: '$white',
            opacity: '0.5',
          }
        }
      }
    }
  },

  defaultVariants: {
    size: 'normal',
  },
})
