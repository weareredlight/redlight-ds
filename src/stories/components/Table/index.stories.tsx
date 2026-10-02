import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import type { TableMockType } from './mockdata/tableMockType'

import Button from '../../../components/Button'
import Table from '../../../components/Table'
import Flex from '../../../elements/Flex'

import { actionsTableColumns } from './mockdata/actionsTableMock'
import { customTableColumns } from './mockdata/customTableMock'
import { defaultTableColumns } from './mockdata/defaultTableMock'
import { interactiveTableColumns } from './mockdata/interactiveTableMock'
import { sortedTableColumns, mockSortees } from './mockdata/sortedTableMock'
import {
  actionsTableSource,
  defaultTableSource,
  emptyTableSource,
  interactiveTableSource,
  sortedTableSource,
  customTableSource
} from './source'

const mockData: TableMockType[] = [
  { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
  { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
  { id: 2, user: 'Margarida Souto', role: 'Designer' },
  { id: 3, user: 'Tony Gonçalves', role: 'CTO' },
]

const meta = {
  title: 'Components/Displays/Table',
  component: Table<TableMockType>,
  parameters: {
    docs: {
      description: {
        component: 'The Table displays data in rows and columns. It is built on TanStack Table: you describe the columns with `createColumnHelper`, and each column can be sorted, filtered or render custom content.',
      },
    },
  },
  args: {
    data: mockData,
    columns: defaultTableColumns,
  },
  argTypes: {
    columns: {
      control: false,
    },
    renderOptions: {
      control: false,
    },
  },
} satisfies Meta<typeof Table<TableMockType>>
export default meta

type Story = StoryObj<typeof meta>

/* ------------------------------DEFAULT TABLE------------------------------------ */

export const Default: Story = {
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

export const InteractiveHeaders: Story = {
  args: {
    columns: interactiveTableColumns,
  },
  parameters: {
    docs: {
      description: {
        story: 'Through the options `enableSorting` and `enableColumnFilter` you can enable or disable the sorting and filtering functionalities of the table.',
      },
      source: { code: interactiveTableSource }
    }
  }
}

/* ------------------------------DEFAULT SORT------------------------------------ */

export const DefaultSort: Story = {
  args: {
    columns: sortedTableColumns,
    sortees: mockSortees,
  },
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

export const CustomCellContent: Story = {
  args: {
    columns: customTableColumns,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize the content of the cells by rendering custom components inside the `cell` property of the column definition.',
      },
      source: { code: customTableSource }
    }
  }
}

/* ------------------------------ACTIONS------------------------------------ */

const onEdit = fn()
const onDelete = fn()

export const WithActions: Story = {
  args: {
    columns: actionsTableColumns,
    renderOptions: row => (
      <Flex gap='xxsm'>
        <Button
          variant='textOnly'
          iconComponent={() => <Pencil1Icon />}
          iconPosition='iconOnly'
          onClick={() => onEdit(row)}
        />
        <Button
          variant='textOnly'
          iconComponent={() => <TrashIcon />}
          iconPosition='iconOnly'
          onClick={() => onDelete(row)}
        />
      </Flex>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Add a column with the id `actions` and use `renderOptions` to fill it. It receives the data of each row, so you can add buttons such as edit or delete.',
      },
      source: { code: actionsTableSource }
    }
  }
}

/* ------------------------------EMPTY------------------------------------ */

export const Empty: Story = {
  args: {
    data: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'When there is no data, or the filters match no rows, the table shows an empty message.',
      },
      source: { code: emptyTableSource }
    }
  }
}
