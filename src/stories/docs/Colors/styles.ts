import { styled } from '../../../stitches'

export const StyledColorsGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxsm',
  marginBottom: '$xxxlg',

  '> div': {
    background: '$neutral100',
    padding: '$xxlg',
    marginTop: '$xsm',
    borderRadius: '$md'
  }
})

export const StyledColor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xxsm',
})

export const StyledIndicator = styled('span', {
  width: '48px',
  height: '48px',
  display: 'block',
  borderRadius: '$xsm'
})
