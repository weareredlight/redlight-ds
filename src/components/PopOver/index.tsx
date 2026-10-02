import { Cross2Icon } from '@radix-ui/react-icons'
import * as Popover from '@radix-ui/react-popover'
import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type PopOverProps = {
  trigger?: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
  style?: CSSProperties
}

const PopOver = ({
  trigger,
  children,
  side = 'right',
  align = 'center',
  sideOffset = 5,
  className,
  style,
}: PopOverProps) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      {trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={cx(styles.content, className)}
        style={style}
        side={side}
        sideOffset={sideOffset}
        align={align}
        onOpenAutoFocus={event => event.preventDefault()}
      >
        {children}
        <Popover.Close className={styles.close} aria-label='Close'>
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className={styles.arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export const popOverSelector = `.${styles.content}`

export default PopOver
