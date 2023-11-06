import { Cross2Icon } from '@radix-ui/react-icons'
import * as Popover from '@radix-ui/react-popover'
import React from 'react'

import {
  StyledPopOver,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
} from './styles'

export type Props = {
  trigger?: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

const PopOver = ({
  trigger,
  children,
  side = 'right'
}: Props) => (
  <StyledPopOver>
    <Popover.Trigger>
      {trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <PopoverContent side={side} onOpenAutoFocus={event => event.preventDefault()}>
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
