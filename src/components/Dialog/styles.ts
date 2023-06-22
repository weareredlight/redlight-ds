import * as AlertDialog from '@radix-ui/react-alert-dialog'
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

export const DialogOverlay = styled(AlertDialog.Overlay, {
  zIndex: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(AlertDialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxxlg',
  zIndex: 101,
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '$greyLarge',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  minWidth: '300px',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '$xxlg',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  include: 'heading3',
  color: '$neutral800',
})

export const DialogDescription = styled(AlertDialog.Description, {
  include: 'paragraph',
  color: '$neutral600'
})
