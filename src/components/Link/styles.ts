import { styled } from 'stitches.config'

export const StyledLink = styled('a', {
  color: '$primary',
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: '$xxxsm',

  '&:hover': {
    color: '$primary600',
    textDecoration: 'none'
  },
  '&:active': {
    color: '$primary700',
    textDecoration: 'underline'
  },
  '&:focus': {
    color: '$primary600',
    textDecoration: 'none',
    borderRadius: '$xsm',
    outline: '1px solid $primary200'
  },

  variants: {
    size: {
      regular: {
        include: 'paragraph',
      },
      small: {
        include: 'textBlock',
      }
    },
    danger: {
      true: {
        color: '$danger',
        '&:hover': {
          color: '$danger500',
        },
        '&:active': {
          color: '$danger600',
        },
        '&:focus': {
          color: '$danger600',
          outline: '1px solid $danger100'
        },
      }
    },
    darkBackground: {
      true: {
        color: '$white',
        '&:hover': {
          color: '$primary200',
        },
        '&:active': {
          color: '$primary200',
        },
        '&:focus': {
          color: '$primary200',
          outline: '1px solid $primary600'
        },
      }
    }
  },
  defaultVariants: {
    size: 'regular',
    danger: false,
    darkBackground: false
  },
})
