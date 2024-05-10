import LinkTo from '@storybook/addon-links/react'

import { styled } from '../../stitches'

export const StyledDocument = styled('div', {
  backgroundColor: '$white',
  boxShadow: '$mainShadow',
  borderRadius: '$xlg',
  minHeight: '100%',
  overflow: 'hidden',

  'h1, h2, h3, h4, h5, h6, .h7, p, span': {
    fontFamily: 'Roboto, sans-serif',
    margin: 0,
    padding: 0,
    border: 0,
  },
  h1: {
    include: 'heading1',
    color: '$neutral900',
  },
  h2: {
    include: 'heading2',
  },
  h3: {
    include: 'heading3',
    color: '$neutral800',
  },
  h4: {
    include: 'heading4',
    color: '$neutral800',
  },
  h5: {
    include: 'heading5',
    color: '$neutral700',
  },
  h6: {
    include: 'heading6',
    color: '$neutral700',
  },
  '.h7': {
    include: 'heading7',
    color: '$neutral700',
  },
  '.sub-heading': {
    include: 'subHeading',
    color: '$primary',
  },
  '.sub-heading-small': {
    include: 'subHeadingSmall',
    color: '$primary',
  },
  p: {
    include: 'textBlock',
    color: '$neutral700',
  },
  '.paragraph': {
    include: 'paragraph',
    color: '$neutral700',
  },
  '.micro-copy': {
    include: 'microCopy',
    color: '$neutral700',

    '&.value': {
      color: '$primary'
    }
  },
})

export const StyledHeader = styled('div', {
  padding: '$xxxlg',
  backgroundColor: '#D8082A',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h2: {
    include: 'heading2',
    color: '$white',
    border: 'none',
    margin: 0,
    padding: 0,
  },
  p: {
    include: 'subHeading',
    color: '$neutral100',
    textTransform: 'uppercase'
  }
})

export const StyledBody = styled('div', {
  padding: '$xxxlg',
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxsm'
})

export const StyledCode = styled('code', {
  backgroundColor: '$neutral900',
  include: 'textBlock',
  fontFamily: 'monospace',
  color: '$primary400',
  borderRadius: '$xsm',
  width: 'fit-content',
  height: 'fit-content',
  whiteSpace: 'pre-wrap',

  variants: {
    size: {
      regular: {
        padding: '$xxsm $xsm',
        lineHeight: '$lg',
      },
      small: {
        padding: '$xxxsm $xxsm',
        fontSize: '$xsm',
        lineHeight: '$sm',
      },
      extraSmall: {
        padding: '$xxxsm $xxsm',
        fontSize: '$xxsm',
        lineHeight: '$sm',
      }
    }
  },

  defaultVariants: {
    size: 'regular'
  },
})

export const StyledCard = styled(LinkTo, {
  all: 'unset',
  backgroundColor: '$white',
  border: '1px solid transparent',
  boxShadow: '$cardShadow',
  width: '100%',
  padding: '$xxxlg',
  borderRadius: '$sm',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xlg',

  textAlign: 'center',
  cursor: 'pointer',
  transition: '0.3s',

  '&:hover': {
    borderColor: '$primary400',
    boxShadow: '$mainShadow',
    transform: 'scale(1.02, 1.02)'
  },

  svg: {
    color: '$primary700'
  }
})

export const StyledSeparator = styled('div', {
  backgroundColor: '$neutral300',
  width: '100%',
  height: '1px'
})
