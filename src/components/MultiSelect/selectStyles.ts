import { theme } from 'src/theme'
import { sizes } from 'src/theme/sizes'

// `var(--colors-*)` references, so the menu follows the active theme.
const { colors } = theme

export const selectStyles = {
  valueContainer: (styles: object) => ({
    ...styles,
    fontSize: sizes.fontSizes.xsm,
    padding: 0,
  }),
  control: (styles: object) => ({
    ...styles,
    minWidth: '256px',
    width: '100%',
    minHeight: sizes.sizes.xxxlg,
    height: sizes.sizes.xxxlg,
    padding: `0 0 0 ${sizes.sizes.xxsm}`,
    borderColor: colors.neutral400,
    backgroundColor: colors.white,
    boxShadow: 'none',
    '&:hover': {
      borderColor: colors.neutral600,
      backgroundColor: colors.neutral100,
    },
  }),
  input: (styles: object) => ({
    ...styles,
    margin: 0,
    padding: 0,
    color: colors.neutral800,
    cursor: 'pointer',
  }),
  menu: (styles: object) => ({
    ...styles,
    background: colors.white,
    boxShadow: `0px 2px 8px ${colors.neutral200}`,
    zIndex: 3,
  }),
  menuList: (styles: object) => ({
    ...styles,
    padding: 0,
    borderRadius: sizes.radii.xsm,
    backgroundColor: colors.white,
  }),
  option: (styles: object, { isDisabled }: { isDisabled: boolean }) => ({
    ...styles,
    height: sizes.sizes.xxxlg,
    display: 'flex',
    alignItems: 'center',
    gap: sizes.space.xxsm,
    padding: `${sizes.sizes.xxxsm} ${sizes.sizes.xxsm}`,
    backgroundColor: colors.white,
    color: isDisabled ? colors.neutral400 : colors.neutral800,
    fontSize: sizes.fontSizes.xsm,
    lineHeight: 1,
    cursor: isDisabled ? 'default' : 'pointer',

    '&:hover': {
      backgroundColor: colors.primary100,
      color: colors.primary,
    },

    '&:focus': {
      backgroundColor: colors.primary100,
      color: colors.primary,
    },
  }),
  noOptionsMessage: (styles: object) => ({
    ...styles,
    color: colors.neutral,
    fontSize: sizes.fontSizes.xsm,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorContainer: (styles: object) => ({
    ...styles,
    color: colors.primary,

    '& svg': {
      width: sizes.sizes.xlg,
      height: sizes.sizes.xlg,
    },
  }),
}
