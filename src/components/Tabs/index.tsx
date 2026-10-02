/* eslint-disable react/no-array-index-key */
import * as RadixTabs from '@radix-ui/react-tabs'
import React from 'react'

import type { CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'

import styles from './styles.module.scss'

export type TabsProps = {
  tabs: { label: string }[],
  children: React.ReactNode | React.ReactNode[],
  align?: 'left' | 'right' | 'null'
  className?: string
  style?: CSSProperties
}

const Tabs = ({
  tabs,
  children,
  align,
  className,
  style,
}: TabsProps) => (
  <RadixTabs.Root
    defaultValue='tab0'
    className={cx(styles.tabs, align && styles[`align${capitalize(align)}`], className)}
    style={style}
  >
    <RadixTabs.List className={styles.list} aria-label='Manage your account'>
      {tabs.map((tab, index) => (
        <RadixTabs.Trigger key={`tab${index}`} value={`tab${index}`} className={styles.trigger}>
          {tab.label}
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
    {(Array.isArray(children) ? children : [children]).map((child, index) => (
      <RadixTabs.Content key={`tab${index}`} value={`tab${index}`} className={styles.content}>
        {child}
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
)

export const tabsSelector = `.${styles.tabs}`

export default Tabs
