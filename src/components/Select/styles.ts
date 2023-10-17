import * as SelectInput from '@radix-ui/react-select'

import { styled } from '../../stitches'
import { StyledLabel } from '../shared/Label/styles'

export const StyledPortal = styled(SelectInput.Portal, {
  zIndex: 1001,
  maxWidth: '500px',
})

export const StyledViewport = styled(SelectInput.Viewport, {
  background: '$white',
  boxShadow: '$greySmall',
  width: '100%',
})

export const StyledTrigger = styled(SelectInput.SelectTrigger, {
  appearance: 'none',
  outline: 'none',
  all: 'unset',
  include: 'microCopy',
  border: '1px solid $neutral400',
  color: '$neutral800',

  height: '32px',
  minWidth: '256px',
  maxWidth: '100%',
  padding: '$xxsm',
  borderRadius: '$xsm',
  boxSizing: 'border-box',

  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.placeholder': {
    color: '$neutral',
  },

  '&:hover': {
    backgroundColor: '$neutral100',
    borderColor: '$neutral600',
    '& svg': {
      color: '$neutral600',
    },
  },
  '&:focus': {
    borderColor: '$primary',
    '& svg': {
      color: '$neutral600',
    },
  },

  variants: {
    variant: {
      simple: {
        minWidth: '128px',
        width: '100%',
      }
    },
    state: {
      error: {
        borderColor: '$danger',
        '& svg': {
          color: '$danger',
        },
      },
      dirty: {
        borderColor: '$secondary',
        '& svg': {
          color: '$secondary',
        },
      },
      disabled: {
        backgroundColor: '$neutral200',
        borderColor: '$neutral200',
        color: '$neutral',
        pointerEvents: 'none',
        '& svg': {
          color: '$neutral',
        },
      },
      null: {
        borderColor: '$neutral400',
        '& svg': {
          color: '$neutral400',
        },
      }
    }
  },
  defaultVariants: {
    variant: 'null',
    state: 'null',
  },
})

export const StyledSelect = styled('div', {
  [`& ${StyledLabel}`]: {
    paddingBottom: '$xxxsm',
    pointerEvents: 'none',
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
        [`& ${StyledTrigger}`]: {
          width: '100%',
        },
      },
      false: {
        width: 'fit-content',
      }
    }
  }
})

export const StyledContent = styled(SelectInput.Content, {
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: '$xsm',
  filter: 'drop-shadow(0px 4px 20px rgba(149, 157, 165, 0.15))',
  minWidth: '224px',
  maxWidth: '100%'
})

export const StyledChevron = styled(SelectInput.SelectIcon, {
  paddingTop: '$xxxsm',
  color: '$primary',

  '& svg': {
    width: '$xlg',
    height: '$xlg',
  }
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$white',
  color: '$primary',
  cursor: 'default',

  '& svg': {
    width: '$xlg',
    height: '$xlg',
  }
}

export const StyledScrollUpButton = styled(SelectInput.ScrollUpButton, scrollButtonStyles)

export const StyledScrollDownButton = styled(SelectInput.ScrollDownButton, scrollButtonStyles)

export const StyledInputCheck = styled(SelectInput.ItemIndicator, {
  paddingLeft: '$xxsm',

  '& svg': {
    width: '$xsm',
    height: '$xsm',
  }
})

export const StyledItem = styled(SelectInput.Item, {
  all: 'unset',
  include: 'microCopy',
  lineHeight: 1,
  color: '$neutral800',
  display: 'flex',
  alignItems: 'center',
  padding: '$xxxsm $xxsm',
  position: 'relative',
  userSelect: 'none',
  height: '$xxlg',

  '&[data-disabled]': {
    color: '$neutral400',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$primary100',
    color: '$primary',
  },
})
