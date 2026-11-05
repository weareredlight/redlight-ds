import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDownIcon } from 'lucide-react'
import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react'

import type { ComponentProps, CSSProperties, ReactNode } from 'react'

import Flex from 'src/elements/Flex'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

// =============================================================================
// GROUP
// =============================================================================

type AccordionGroupContextValue = {
  openId: string | null | undefined
  setOpenId: (id: string | null) => void
}

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(null)

export type AccordionGroupProps = {
  children: ReactNode
  closeOthers?: boolean
  gap?: ComponentProps<typeof Flex>['gap']
  className?: string
  style?: CSSProperties
}

export const AccordionGroup = ({
  children,
  closeOthers = true,
  gap,
  className,
  style,
}: AccordionGroupProps) => {
  const [openId, setOpenId] = useState<string | null>()
  const value = useMemo(() => ({ openId, setOpenId }), [openId])

  return (
    <Flex direction='column' align='stretch' gap={gap} className={className} style={style}>
      {closeOthers
        ? <AccordionGroupContext.Provider value={value}>{children}</AccordionGroupContext.Provider>
        : children}
    </Flex>
  )
}

// =============================================================================
// ACCORDION
// =============================================================================

export type AccordionProps = {
  header: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  className?: string
  headerClassName?: string
  bodyClassName?: string
  style?: CSSProperties
}

const Accordion = ({
  header,
  children,
  defaultOpen,
  open,
  onOpenChange,
  disabled,
  className,
  headerClassName,
  bodyClassName,
  style,
}: AccordionProps) => {
  const id = useId()
  const group = useContext(AccordionGroupContext)
  const grouped = group && open === undefined

  let isOpen = open
  if (grouped) {
    isOpen = group.openId === undefined ? Boolean(defaultOpen) : group.openId === id
  }

  const handleOpenChange = (value: boolean) => {
    if (grouped) group.setOpenId(value ? id : null)
    onOpenChange?.(value)
  }

  return (
    <Collapsible.Root
      defaultOpen={defaultOpen}
      open={isOpen}
      onOpenChange={handleOpenChange}
      disabled={disabled}
      className={cx(styles.accordion, className)}
      style={style}
    >
      <Collapsible.Trigger className={cx(styles.header, headerClassName)}>
        <span className={styles.headerContent}>{header}</span>
        <ChevronDownIcon className={styles.icon} aria-hidden />
      </Collapsible.Trigger>
      <Collapsible.Content className={styles.content}>
        <div className={cx(styles.body, bodyClassName)}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export const accordionSelector = `.${styles.accordion}`

export default Accordion
