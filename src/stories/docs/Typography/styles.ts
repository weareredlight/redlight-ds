import { styled } from '../../../stitches'

export const StyledTextsGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxsm',
  marginBottom: '$xxxlg',

  '> div': {
    background: '$neutral100',
    padding: '$xxlg',
    marginTop: '$xsm',
    borderRadius: '$md'
  },

  '> ul': {
    marginLeft: '$lg'
  }
})

export const StyledTextType = styled('div', {
  width: '100%',
  borderRadius: '$sm',
  padding: '$xxlg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$white',
})
