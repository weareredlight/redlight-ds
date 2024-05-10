import { Cross2Icon } from '@radix-ui/react-icons'
import * as Popover from '@radix-ui/react-popover'
import React from 'react'

import {
  StyledPopOver,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
} from './styles'

export type PopOverProps = {
  trigger?: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

const PopOver = ({
  trigger,
  children,
  side = 'right',
  align = 'center',
  sideOffset = 5,
}: PopOverProps) => (
  <StyledPopOver>
    <Popover.Trigger asChild>
      {trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <PopoverContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        onOpenAutoFocus={event => event.preventDefault()}
      >
        {children}
        <PopoverClose aria-label='Close'>
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  </StyledPopOver>
)

export default PopOver
