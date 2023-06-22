/* eslint-disable react/no-array-index-key */
import React from 'react'

import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger
} from './styles'

export type Props = {
  tabs: { label: string }[],
  children: React.ReactNode | React.ReactNode[]
}

const Tabs = ({ tabs, children }: Props) => (
  <TabsRoot defaultValue='tab0'>
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
  </TabsRoot>
)

export default Tabs
