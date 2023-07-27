import { mixins as stitchesMixins } from 'stitches-mixins'

export const mixins = stitchesMixins({
  // headings
  heading1: {
    fontSize: '$xxxlg',
    fontWeight: '$lg',
    lineHeight: '$md',
  },
  heading2: {
    fontSize: '$xxlg',
    fontWeight: '$lg',
    lineHeight: '$md',
  },
  heading3: {
    fontSize: '$xlg',
    fontWeight: '$lg',
    lineHeight: '$md',
  },
  heading4: {
    fontSize: '$lg',
    fontWeight: '$lg',
    lineHeight: '$md',
  },
  heading5: {
    fontSize: '$md',
    fontWeight: '$lg',
    lineHeight: '$md',
  },
  heading6: {
    fontSize: '$sm',
    fontWeight: '$md',
    lineHeight: '$md',
  },
  heading7: {
    fontSize: '$xsm',
    fontWeight: '$md',
    lineHeight: '$md',
  },
  // subHeadings
  subHeading: {
    fontSize: '$xsm',
    fontWeight: '$lg',
    lineHeight: '$md',
    textTransform: 'uppercase'
  },
  subHeadingSmall: {
    fontSize: '$xxsm',
    fontWeight: '$md',
    lineHeight: '$sm',
    textTransform: 'uppercase'
  },
  // paragraphs
  paragraph: {
    fontSize: '$md',
    fontWeight: '$n',
    lineHeight: '$xlg',
  },
  textBlock: {
    fontSize: '$sm',
    fontWeight: '$n',
    lineHeight: '$lg',
  },
  microCopy: {
    fontSize: '$xsm',
    fontWeight: '$n',
    lineHeight: '$lg',
  },
})
