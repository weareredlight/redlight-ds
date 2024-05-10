import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Table, { Props } from '../../../components/Table'

import { customTableColumns } from './mockdata/customTableMock'
import { defaultTableColumns } from './mockdata/defaultTableMock'
import { interactiveTableColumns } from './mockdata/interactiveTableMock'
import { sortedTableColumns, mockSortees } from './mockdata/sortedTableMock'
import {
  defaultTableSource,
  interactiveTableSource,
  sortedTableSource,
  customTableSource
} from './source'

const mockData = [
  { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
  { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
  { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
  { id: 3, user: 'Miguel Antunes', role: 'CEO' },
]

const meta = {
  title: 'Components/Displays/Table',
  component: Table,
  parameters: {
  },
} as Meta<typeof Table>
export default meta

type Story = StoryObj<typeof meta>

/* ------------------------------DEFAULT TABLE------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DefaultTemplate = (args: Props<any>) => (
  <Table
    {...args}
    data={mockData}
    columns={defaultTableColumns}
  />
)
export const Default: Story = {
  render: DefaultTemplate,
  parameters: {
    docs: {
      description: {
        story: 'The table component is used to display data in a tabular format.',
      },
      source: { code: defaultTableSource }
    }
  }
}

/* ------------------------------INTERACTIVE TABLE------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractiveTemplate = (args: Props<any>) => (
  <Table
    {...args}
    data={mockData}
    columns={interactiveTableColumns}
  />
)
export const InteractiveHeaders: Story = {
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Trough the options `enableSorting` and `enableColumnFilter` you can enable or disable the sorting and filtering functionalities of the table.',
      },
      source: { code: interactiveTableSource }
    }
  }
}

/* ------------------------------DEFAULT SORT------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SortTemplate = (args: Props<any>) => (
  <Table
    {...args}
    data={mockData}
    columns={sortedTableColumns}
    sortees={mockSortees}
  />
)
export const DefaultSort: Story = {
  render: SortTemplate,
  parameters: {
    docs: {
      description: {
        story: 'By creating a custom sortees array using the `ColumnSort[]` type you can define the default sorting of the table.',
      },
      source: { code: sortedTableSource }
    }
  }
}

/* ------------------------------CUSTOM TABLE------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTemplate = (args: Props<any>) => (
  <Table
    {...args}
    data={mockData}
    columns={customTableColumns}
  />
)
export const CustomCellContent: Story = {
  render: CustomTemplate,
  parameters: {
    docs: {
      description: {
        story: 'You can customize the content of the cells by rendering custom components inside the `cell` property of the column definition.',
      },
      source: { code: customTableSource }
    }
  }
}
