import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import Text from '../Text'

import { TooltipArrow, TooltipContent, TooltipTrigger } from './styles'

export type Props = {
  children: React.ReactNode
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
}

const Tooltip = ({
  children,
  content,
  side = 'right',
  delay = 50,
}: Props) => (
  <RadixTooltip.Provider delayDuration={delay}>
    <RadixTooltip.Root>
      <TooltipTrigger>
        {children}
      </TooltipTrigger>
      <RadixTooltip.Portal>
        <TooltipContent side={side} align='center' sideOffset={5}>
          <Text variant='microCopy' color='white'>
            {content}
          </Text>
          <TooltipArrow width={11} height={5} />
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
