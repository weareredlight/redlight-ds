import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

import Flex from '../../elements/Flex'
import Button from '../Button'

import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription
} from './styles'

export type DialogProps = {
  open: boolean
  variant?: 'confirm' | 'success' | 'danger'
  confirmButtonText?: string
  cancelButtonText?: string
  closeFn: () => void
  title: string
  description?: string
  children?: React.ReactNode
  onConfirm: () => void
}

const Dialog = ({
  open = false,
  variant = 'confirm',
  confirmButtonText,
  cancelButtonText,
  closeFn,
  title,
  description,
  children,
  onConfirm,
}: DialogProps) => {
  const handleConfirm = () => {
    onConfirm()
    closeFn()
  }

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <DialogOverlay />
        <DialogContent onOpenAutoFocus={event => event.preventDefault()}>
          <DialogTitle>
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription>
              {description}
            </DialogDescription>
          )}
          {children}
          <Flex justify='end' gap='xxsm'>
            <AlertDialog.Cancel asChild>
              <Button variant='neutral' onClick={closeFn}>
                {cancelButtonText || 'Cancel'}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}
                onClick={handleConfirm}
              >
                {confirmButtonText || 'Confirm'}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </DialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default Dialog
