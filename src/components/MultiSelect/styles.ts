import { css } from '../../stitches'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

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
    cursor: isDisabled ? 'defaul' : 'pointer',

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

export const selectWrapper = css({
  position: 'relative',
  width: '100%',
  '.options-count': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 'calc($sm * 2)',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 18,
    height: 18,
    backgroundColor: '$accent',
    borderRadius: '$full',
  },
})
