/* eslint-disable react/no-array-index-key */
import React from 'react'

import type * as Stitches from '@stitches/react'

import {
  TabsContent,
  TabsList,
  StyledTabs,
  TabsTrigger
} from './styles'

export type TabsProps = {
  tabs: { label: string }[],
  children: React.ReactNode | React.ReactNode[],
  align?: Stitches.VariantProps<typeof StyledTabs>['align']
}

const Tabs = ({ tabs, children, align }: TabsProps) => (
  <StyledTabs defaultValue='tab0' align={align}>
    <TabsList aria-label='Manage your account'>
      {tabs.map((tab, index) => (
        <TabsTrigger key={`tab${index}`} value={`tab${index}`}>
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
    {(Array.isArray(children) ? children : [children]).map((child, index) => (
      <TabsContent key={`tab${index}`} value={`tab${index}`}>
        {child}
      </TabsContent>
    ))}
  </StyledTabs>
)

export default Tabs
