import { PatternFormat } from 'react-number-format'

import { styled } from '../../stitches'

export const StyledTimePicker = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$xxxsm',

  '.timePickerMain': {
    '> div': {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '$xxxlg',
      padding: '$xxsm 0 $xxsm $xxsm',
      borderRadius: '$xsm',
      border: '1px solid $neutral400',
      fontSize: '$xsm',

      '&:hover': {
        backgroundColor: '$neutral100',
        borderColor: '$neutral600',
      },

      '.react-time-picker__inputGroup__input:invalid': {
        backgroundColor: '$transparent',
      },
      '.react-time-picker__inputGroup__input:valid': {
        color: '$neutral800',
      },
    },
    button: {
      color: '$neutral',
      pointerEvents: 'none',
    },

    '&.react-time-picker--open': {
      '> div': {
        borderColor: '$primary',
      },
    },
  },

  '.react-time-picker__clock': {
    display: 'none',
  },

  variants: {
    hasError: {
      true: {
        '.timePickerMain > div': {
          borderColor: '$danger',
        },
      },
    },
    disabled: {
      true: {
        '.timePickerMain > div': {
          backgroundColor: '$neutral200',
          borderColor: '$neutral200',
          color: '$neutral',
          pointerEvents: 'none',

          '.react-time-picker__inputGroup__input:valid': {
            color: '$neutral',
          },
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        '>div': {
          width: '100%',
        },
      },
    },
  },
})

export const StyledDurationPicker = styled(PatternFormat, {
  height: '$xxxlg',
  padding: '$xxsm $xsm $xxsm $xxsm',
  borderRadius: '$xsm',
  border: '1px solid $neutral400',
  fontSize: '$xsm',
  '-moz-appearance': 'textfield',

  '&:hover': {
    backgroundColor: '$neutral100',
    borderColor: '$neutral600',
  },

  variants: {
    hasError: {
      true: {
        borderColor: '$danger',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        '>div': {
          width: '100%',
        },
      },
    },
  },
})
