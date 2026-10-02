import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

import type { CSSProperties } from 'react'

import Flex from '../../elements/Flex'
import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

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
  className?: string
  style?: CSSProperties
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
  className,
  style,
}: DialogProps) => {
  const handleConfirm = () => {
    onConfirm()
    closeFn()
  }

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content
          className={cx(styles.content, className)}
          style={style}
          onOpenAutoFocus={event => event.preventDefault()}
        >
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          {description && (
            <AlertDialog.Description className={styles.description}>
              {description}
            </AlertDialog.Description>
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
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default Dialog
