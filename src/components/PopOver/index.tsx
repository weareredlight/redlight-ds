import * as Popover from '@radix-ui/react-popover'
import { XIcon } from 'lucide-react'
import React, { useId } from 'react'

import type { CSSProperties } from 'react'

import { ICON_SIZE } from 'src/constants'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

export type PopOverProps = {
  trigger?: React.ReactNode
  children: React.ReactNode
  /**
   * The popover's name for screen readers, e.g. 'Project options'. Without it, the trigger names
   * it (if the trigger has its own `id`, pass a label)
   */
  label?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
  style?: CSSProperties
}

const PopOver = ({
  trigger,
  children,
  label,
  side = 'right',
  align = 'center',
  sideOffset = 5,
  className,
  style,
}: PopOverProps) => {
  const triggerId = useId()

  return (
    <Popover.Root>
      <Popover.Trigger asChild id={triggerId}>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          // The content is a dialog: it needs a name, its label or else its trigger's text
          aria-label={label}
          aria-labelledby={label ? undefined : triggerId}
          className={cx(styles.content, className)}
          style={style}
          side={side}
          sideOffset={sideOffset}
          align={align}
          onOpenAutoFocus={event => event.preventDefault()}
        >
          {children}
          <Popover.Close className={styles.close} aria-label='Close'>
            <XIcon size={ICON_SIZE} />
          </Popover.Close>
          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopOver
