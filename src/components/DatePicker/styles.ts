import { styled } from '../../stitches'
import { colors } from '../../theme/colors'

export const StyledDatePicker = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$xxxsm',

  '.react-date-picker': {
    '> div': {
      width: '100%',
      height: '$xxxlg',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '$xxsm 0 $xxsm $xxsm',
      borderRadius: '$xsm',
      border: '1px solid $neutral400',
      fontSize: '$xsm',

      '&:hover': {
        backgroundColor: '$neutral100',
        borderColor: '$neutral600',
      },

      '.react-date-picker__inputGroup__input:invalid': {
        backgroundColor: '$transparent',
      },
      '.react-date-picker__inputGroup__input:valid': {
        color: '$neutral800',
      },
    },

    '&.react-date-picker--open': {
      '> div': {
        borderColor: '$primary',
      },
    },

    button: {
      color: '$neutral',
    }
  },

  '.react-calendar': {
    padding: '$xxsm',
    border: 'none',
    borderRadius: '$sm',
    backgroundColor: '$white',
    boxShadow: '$cardShadow',

    button: {
      appearance: 'none',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      borderRadius: '$xsm',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '$xxsm',
      cursor: 'pointer',

      '&:focus': {
        $$shadowColor: '$colors$primary300',
        boxShadow: '0 0 0 2px $$shadowColor',
      },
    },

    // Calendar header
    '.react-calendar__navigation': {
      display: 'flex',

      button: {
        width: '32px',
        height: '32px',
        padding: '0',
        fontSize: '$lg',
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        color: '$neutral700',
        '&:hover': {
          backgroundColor: '$neutral200',
        },
        '&:active': {
          backgroundColor: '$neutral300',
        },
        '&:disabled': {
          color: '$neutral400',
        },

        '&.react-calendar__navigation__label': {
          color: '$primary',
          fontSize: '$sm',
        }
      }
    },

    // Calendar body
    '.react-calendar__viewContainer': {
      '.react-calendar__month-view__weekdays': {
        padding: '$xxsm 0',
        '&__weekday': {
          textAlign: 'center',
          fontSize: '$sm',

          abbr: {
            textDecoration: 'none',
            color: colors.accent ? '$accent' : '$neutral',
          }
        }
      },

      button: {
        '&.react-calendar__tile': {
          width: '32px',
          height: '32px',
          padding: '0',
          fontSize: '$xsm',
          backgroundColor: 'transparent',
          border: '1px solid transparent',
          color: '$neutral700',
          '&:hover': {
            backgroundColor: '$neutral200',
          },
          '&:active': {
            backgroundColor: '$neutral300',
          },
          '&:disabled': {
            color: '$neutral400',
          },

          '&--active': {
            backgroundColor: '$primary',
            color: '$white',
            '&:hover': {
              backgroundColor: '$primary600',
            },
            '&:active': {
              backgroundColor: '$primary700',
            },
          },

          '&--now': {
            backgroundColor: colors.accent ? '$accent !important' : '$neutral',
            color: '$white',
            '&:hover': {
              backgroundColor: colors.accent ? '$accent600' : '$neutral600',
            },
            '&:active': {
              backgroundColor: colors.accent ? '$accent700' : '$neutral700',
            },

            '&--now': {
              backgroundColor: colors.accent ? '$accent' : '$neutral',
              color: '$white',
              '&:hover': {
                backgroundColor: colors.accent ? '$accent600' : '$neutral600',
              },
              '&:active': {
                backgroundColor: colors.accent ? '$accent700' : '$neutral700',
              },
            },
          },

          '&.selected-week': {
            backgroundColor: '$primary',
            color: '$white',
            '&:hover': {
              backgroundColor: '$primary600',
            },
            '&:active': {
              backgroundColor: '$primary700',
            },
          }
        }
      }
    },
  },

  variants: {
    hasError: {
      true: {
        '.react-date-picker > div': {
          borderColor: '$danger',
        }
      },
    },
    fullWidth: {
      true: {
        '.react-date-picker': {
          width: '100%',
        }
      },
    },
    disabled: {
      true: {
        '.react-date-picker > div': {
          backgroundColor: '$neutral200',
          borderColor: '$neutral200',
          color: '$neutral400',
          pointerEvents: 'none',

          input: {
            color: '$neutral !important',
          }
        }
      },
    },
  },
})
