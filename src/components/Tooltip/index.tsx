import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Text from '../Text'

import styles from './styles.module.scss'

export type TooltipProps = {
  children: React.ReactNode
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  className?: string
  style?: CSSProperties
}

const Tooltip = ({
  children,
  content,
  side = 'right',
  delay = 50,
  className,
  style,
}: TooltipProps) => (
  <RadixTooltip.Provider delayDuration={delay}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>
        <span className={styles.trigger}>
          {children}
        </span>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={cx(styles.content, className)}
          style={style}
          side={side}
          align='center'
          sideOffset={5}
        >
          <Text variant='microCopy' color='white' className={styles.text}>
            {content}
          </Text>
          <RadixTooltip.Arrow className={styles.arrow} width={11} height={5} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
