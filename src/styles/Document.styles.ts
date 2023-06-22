import LinkTo from '@storybook/addon-links/react'

import { styled } from 'stitches.config'

export const StyledDocument = styled('div', {
  backgroundColor: '$white',
  boxShadow: '$mainShadow',
  borderRadius: '$xlg',
  minHeight: '100%',
  overflow: 'hidden'
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

export const StyledCode = styled('pre', {
  backgroundColor: '$neutral900',
  color: '$primary400',
  borderRadius: '$xsm',
  width: 'fit-content',
  height: 'fit-content',

  variants: {
    size: {
      regular: {
        padding: '$xxsm $xsm',
        lineHeight: '$lg',
      },
      small: {
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
