export const defaultTableSource = `
// create a separated file to store the table columns - e.g. myTableColumns.tsx
      
// import table options from the Design System        
import { createColumnHelper, defaultColumnOptions } from '@weareredlight/design-system'

// type your table data
type TableDataType = {
  id: number
  user: string
  role: string
}

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableDataType>()
export const myTableColumns = [
  columnHelper.accessor('id', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'ID',
    meta: { width: '10%' },
  }),
  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'Role',
    meta: { width: '45%' },
  }),
]

{/* ------------------------------------------------------------------------------------- */}

// Component.tsx

// Import the Table component and the columns of your custom table
import { Table } from '@weareredlight/design-system'
import { myTableColumns } from 'myTableColumns.tsx'

const Component = () => (
  ...
  <Table
    data={[
      { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
      { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
      { id: 2, user: 'Miguel Vasconcelos', role: 'Designer' },
      { id: 3, user: 'Miguel Antunes', role: 'CEO' },
    ]}
    columns={myTableColumns}
  />
  ...
)  
  `

export const interactiveTableSource = `
// ... 

export const myTableColumns = [
  // ...

  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
    {/* Makes the column header interactive and allows you to sort its content */}
    enableSorting: true,
    {/* Allows you to search for contents within the column */}
    enableColumnFilter: true,
  }),
]
`
export const sortedTableSource = `
// myTableColumns.tsx

// import table options from the Design System        
import { 
  createColumnHelper, 
  defaultColumnOptions,
  // import the ColumnSort type
  ColumnSort,
} from '@weareredlight/design-system'

// ...

// Create a custom sorting for the table
export const myTableSortees: ColumnSort[] = [
  { id: 'user', desc: false },
]

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableDataType>()
export const myTableColumns = [
  ...
]

{/* ------------------------------------------------------------------------------------- */}

// Component.tsx

// Import the Table component and the columns of your custom table
import { Table } from '@weareredlight/design-system'

// import the custom columns and sortees
import { myTableColumns, myTableSortees } from 'myTableColumns.tsx'

const Component = () => (
  ...
  <Table
    data={myData}
    columns={myTableColumns}
    sortees={myTableSortees}
  />
  ...
)  
`

export const customTableSource = `
// ... 

export const myTableColumns = [
  // ...

  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
    {/* You can return customised content for a specific cell  */}
    cell: data => {
      const { id, name } = data.row.original
      return (
        <UserCard id={id} userName={name}/>
      )
    },
  }),
]
`
