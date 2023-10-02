import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React, { ReactElement } from 'react'

import type { CSS } from '@stitches/react'

import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from './styles'

export type Props = {
  open: boolean
  closeFn: () => void
  renderTrigger?: () => ReactElement
  title?: string
  description?: string
  children?: React.ReactNode
  css?: CSS
  extraClasses?: string
}

const Modal = ({
  open,
  closeFn,
  renderTrigger,
  title,
  description,
  children,
  css,
  extraClasses,
}: Props) => (
  <RadixDialog.Root open={open}>
    <RadixDialog.Trigger asChild>
      {renderTrigger && renderTrigger()}
    </RadixDialog.Trigger>
    <RadixDialog.Portal className={extraClasses}>
      <DialogOverlay />
      <DialogContent
        css={css}
        onEscapeKeyDown={closeFn}
        onInteractOutside={closeFn}
      >
        {title && (
          <DialogTitle>
            {title}
          </DialogTitle>
        )}
        {description && (
          <DialogDescription>
            {description}
          </DialogDescription>
        )}
        {children}
        <RadixDialog.Close asChild>
          <Cross2Icon onClick={closeFn} />
        </RadixDialog.Close>
      </DialogContent>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Modal
