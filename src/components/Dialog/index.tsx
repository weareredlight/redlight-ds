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

export type Props = {
  open: boolean
  variant?: 'confirm' | 'success' | 'danger'
  actionText?: string
  closeFn: () => void
  title: string
  description?: string
  children?: React.ReactNode
  onConfirm: () => void
}

const Dialog = ({
  open,
  variant = 'confirm',
  actionText,
  closeFn,
  title,
  description,
  children,
  onConfirm,
}: Props) => {
  const handleConfirm = () => {
    onConfirm()
    closeFn()
  }

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <DialogOverlay />
        <DialogContent>
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
              <Button variant='neutral' onClick={closeFn}>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}
                onClick={handleConfirm}
              >
                {actionText || 'Confirm'}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </DialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default Dialog
