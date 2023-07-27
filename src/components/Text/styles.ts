import { styled } from '../../stitches'

export const StyledText = styled('span', {
  cursor: 'default',

  variants: {
    variant: {
      h1: {
        include: 'heading1',
      },
      h2: {
        include: 'heading2',
      },
      h3: {
        include: 'heading3',
      },
      h4: {
        include: 'heading4',
      },
      h5: {
        include: 'heading5',
      },
      h6: {
        include: 'heading6',
      },
      h7: {
        include: 'heading7',
      },
      subHeading: {
        include: 'subHeading',
      },
      subHeadingSmall: {
        include: 'subHeadingSmall',
      },
      paragraph: {
        include: 'paragraph',
      },
      textBlock: {
        include: 'textBlock',
      },
      microCopy: {
        include: 'microCopy',
      },
    },
  },

  defaultVariants: {
    variant: 'paragraph',
  },
})
