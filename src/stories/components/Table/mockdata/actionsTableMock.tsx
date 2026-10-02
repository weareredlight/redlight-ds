// import necessary table types
import type { TableMockType } from './tableMockType'

// import necessary table components
import { createColumnHelper, defaultColumnOptions } from '../../../../components/Table'

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableMockType>()
export const actionsTableColumns = [
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
    meta: { width: '40%' },
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'Role',
    enableSorting: false,
    enableColumnFilter: false,
    meta: { width: '35%' },
  }),
  // The column must have the id 'actions' for `renderOptions` to fill it
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    meta: { width: '15%' },
  }),
]
