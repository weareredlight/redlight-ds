import { styled } from '../../stitches.config'
import { StyledLabel } from '../shared/Label/styles'

export const StyledAvatar = styled('div', {
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  gap: '$xxsm',

  [`& ${StyledLabel}`]: {
    include: 'paragraph',
    span: {
      color: '$neutral400',
      include: 'microCopy',
    },
  },
})

export const StyledStatus = styled('div', {
  backgroundColor: '$success',
  borderRadius: '$full',
  position: 'absolute',
  border: '1px solid $white',
})

export const StyledPlaceHolder = styled('div', {
  textTransform: 'uppercase',
  backgroundColor: '$primary200',
  color: '$primary600',

  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$full',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '$full',
  },

  variants: {
    size: {
      normal: {
        include: 'subHeading',
        width: '52px',
        height: '52px',
        [`& ${StyledStatus}`]: {
          width: '14px',
          height: '14px',
          bottom: '2px',
          right: '2px',
        },
      },
      small: {
        include: 'subHeadingSmall',
        width: '32px',
        height: '32px',
        [`& ${StyledStatus}`]: {
          width: '8px',
          height: '8px',
          bottom: '1px',
          right: '1px',
        },
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
})
