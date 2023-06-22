import * as RadixDialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

import { styled } from 'stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(RadixDialog.Overlay, {
  zIndex: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(RadixDialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxxlg',
  zIndex: 101,
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '$greySmall',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '300px',
  maxWidth: '600px',
  maxHeight: '85vh',
  padding: '$xxlg',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '> svg': {
    cursor: 'pointer',
    position: 'absolute',
    top: '$xxlg',
    right: '$xlg',
    width: '24px',
    height: '24px',
    color: '$neutral900'
  },
  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(RadixDialog.Title, {
  margin: 0,
  include: 'heading3',
  color: '$neutral800',
})

export const DialogDescription = styled(RadixDialog.Description, {
  include: 'paragraph',
  color: '$neutral600'
})
