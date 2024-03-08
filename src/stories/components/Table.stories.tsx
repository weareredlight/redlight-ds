import { StoryObj, StoryFn, Meta } from '@storybook/react'
import React from 'react'

import Table from '../../components/Table'
import {
  tableCustomColumns,
  tableCustomSortees,
} from '../../components/Table/mockdata/customTableMock'
import { tableDefaultColumns } from '../../components/Table/mockdata/defaultTableMock'
import {
  tableInteractiveColumns,
  tableInteractiveSortees,
} from '../../components/Table/mockdata/interactiveTableMock'

export default {
  title: 'Components/Displays/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta

/* -------------------------Default Table Demo------------------------ */
const Template: StoryFn = args => (
  <Table
    data={[
      { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
      { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
      { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
      { id: 3, user: 'Miguel Antunes', role: 'CEO' },
    ]}
    columns={tableDefaultColumns}
    {...args}
  />
)

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  // myDefaultTable.tsx

  // Create a file for the content and rules for your table

  // Import the necessary elements of the @tanstack/react-table package
  import { createColumnHelper } from '@tanstack/react-table'
  import type { ColumnDef, ColumnSort } from '@tanstack/react-table'

  // Import the defaultColumnOptions from the utils file
  import { defaultColumnOptions } from '../utils'

  // Type your table fields
  export type TableMockType = {
    id: number
    user?: string
    role?: string
  }
  const columnHelper = createColumnHelper<TableMockType>()

  {/* Specify the content and parameters for each column */}
  export const tableDefaultColumns: ColumnDef<TableMockType, any>[] = [
    columnHelper.accessor('id', {
      ...defaultColumnOptions<TableMockType>(),
      header: 'ID',
      enableSorting: false,
      enableColumnFilter: false,
      meta: { width: '10%' },
    }),
    columnHelper.accessor('user', {
      ...defaultColumnOptions<TableMockType>(),
      header: 'User',
      enableSorting: false,
      enableColumnFilter: false,
      meta: { width: '45%' },
    }),
    columnHelper.accessor('role', {
      ...defaultColumnOptions<TableMockType>(),
      header: 'Role',
      enableSorting: false,
      enableColumnFilter: false,
      meta: { width: '45%' },
    }),
  ]

  {/* ------------------------------------------------------------------------------------- */}

  // Component.tsx

  // Import the Table component and the columns of yout custom table
  import { Table } from 'components/Table'
  import { tableDefaultColumns } from 'components/Table/mockdata/defaultTableMock'

  const Component = () => (
    ...
    <Table
      data={[
        { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
        { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
        { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
        { id: 3, user: 'Miguel Antunes', role: 'CEO' },
      ]}
      columns={tableCustomColumns}
      {...args}
    />
    ...
  )
  `,
      },
    },
  },
}

export const Interactive: StoryObj = {
  render: args => (
    <Table
      data={[
        { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
        { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
        { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
        { id: 3, user: 'Miguel Antunes', role: 'CEO' },
      ]}
      columns={tableInteractiveColumns}
      sortees={tableInteractiveSortees}
      {...args}
    />
  ),

  name: 'Interactive Headers',

  parameters: {
    docs: {
      storyDescription:
        'Table headers have two extra variations, one that allows you to search contents in a given column and another that allows you to sort the contents. These variations can also be combined.',
      source: {
        code: `
  // myInteractiveTable.tsx
  ...

  // Choose the default sort of your table
  export const tableInteractiveSortees: ColumnSort[] = [{ id: 'name', desc: true }]

  {/* Specify the content and parameters for each column */}
  export const tableInteractiveColumns: ColumnDef<TableMockType, any>[] = [
    ...

    columnHelper.accessor('user', {
      ...defaultColumnOptions<TableMockType>(),
      header: 'User',
      meta: { width: '45%' },
      {/* Makes the column header interactive and allows you to sort its content */}
      enableSorting: true,
      {/* Allows you to search for contents within the column */}
      enableColumnFilter: true,
    }),

    ...
  ]

  {/* ------------------------------------------------------------------------------------- */}

  // Component.tsx
  ...

  const Component = () => (
    ...
    <Table
      data={...}
      columns={tableInteractiveColumns}
      // Add your sortees parameter
      sortees={tableInteractiveSortees}
      {...args}
    />
    ...
  )
  `,
      },
    },
  },
}

export const Custom: StoryObj = {
  render: args => (
    <Table
      data={[
        { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
        { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
        { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
        { id: 3, user: 'Miguel Antunes', role: 'CEO' },
      ]}
      columns={tableCustomColumns}
      sortees={tableCustomSortees}
      {...args}
    />
  ),

  name: 'Custom Cell Content',

  parameters: {
    docs: {
      storyDescription:
        'Cells can receive any content the user wants, from text, links, checkboxes, tags, etc.',
      source: {
        code: `
  // myCustomTable.tsx
  ...

  {/* Specify the content and parameters for each column */}
  export const tableInteractiveColumns: ColumnDef<TableMockType, any>[] = [
    ...

    columnHelper.accessor('user', {
      ...defaultColumnOptions<TableMockType>(),
      header: 'User',
      meta: { width: '45%' },
      {/* You can return customised content for a specific cell  */}
      cell: info => {
        const user = info.getValue()
        return (
          <Flex justify='start' css={{ gap: '$sm' }}>
            <Avatar
              size='small'
              name={String(user)}
              displayLabel
            />
          </Flex>
        )
      }
    }),

    ...
  ]
  `,
      },
    },
  },
}
