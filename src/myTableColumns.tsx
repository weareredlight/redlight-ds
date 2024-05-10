import { createColumnHelper, defaultColumnOptions } from 'components/Table'

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
