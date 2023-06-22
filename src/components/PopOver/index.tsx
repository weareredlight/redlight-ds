import { Cross2Icon } from '@radix-ui/react-icons'
import * as PopoverRadix from '@radix-ui/react-popover'
import React from 'react'

import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
} from './styles'

export type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

const Popover = ({
  trigger,
  children,
  defaultOpen,
  side = 'bottom',
  sideOffset = 5,
}: Props) => (
  <PopoverRadix.Root defaultOpen={defaultOpen}>
    <PopoverRadix.Trigger asChild>
      {trigger}
    </PopoverRadix.Trigger>
    <PopoverRadix.Portal>
      <PopoverContent sideOffset={sideOffset} side={side}>
        {children}
        <PopoverClose aria-label='Close'>
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </PopoverRadix.Portal>
  </PopoverRadix.Root>
)

export default Popover
