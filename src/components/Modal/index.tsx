import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React, { ReactElement } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type ModalProps = {
  open: boolean
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
  closeFn,
  renderTrigger,
  title,
  description,
  children,
  className,
  style,
}: ModalProps) => (
  <RadixDialog.Root open={open}>
    <RadixDialog.Trigger asChild>
      {renderTrigger && renderTrigger()}
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content
        style={style}
        onEscapeKeyDown={closeFn}
        onInteractOutside={closeFn}
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
        <RadixDialog.Close className={styles.close} aria-label='Close' onClick={closeFn}>
          <Cross2Icon />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Modal
