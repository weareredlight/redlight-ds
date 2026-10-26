import * as RadixDialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import React, { ReactElement } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type ModalProps = {
  open: boolean
  openFn?: () => void
  closeFn: () => void
  renderTrigger?: () => ReactElement
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Modal = ({
  open = false,
  openFn,
  closeFn,
  renderTrigger,
  title,
  description,
  children,
  className,
  style,
}: ModalProps) => (
  // Radix reports every open and close here: the trigger, the close button, Escape and a click
  // outside. Without it, clicking the trigger did nothing, because `open` is controlled
  <RadixDialog.Root open={open} onOpenChange={isOpen => (isOpen ? openFn?.() : closeFn())}>
    <RadixDialog.Trigger asChild>
      {renderTrigger && renderTrigger()}
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content
        style={style}
        className={cx(styles.content, className)}
        onOpenAutoFocus={event => event.preventDefault()}
      >
        {title && (
          <RadixDialog.Title className={styles.title}>
            {title}
          </RadixDialog.Title>
        )}
        {description && (
          <RadixDialog.Description className={styles.description}>
            {description}
          </RadixDialog.Description>
        )}
        {children}
        <RadixDialog.Close className={styles.close} aria-label='Close'>
          <XIcon />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Modal
