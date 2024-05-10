// import necessay table types
import type { TableMockType } from './tableMockType'

// import necessary table components
import { createColumnHelper, defaultColumnOptions } from '../../../../components/Table/index'

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableMockType>()
export const interactiveTableColumns = [
  columnHelper.accessor('id', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'ID',
    enableSorting: true,
    enableColumnFilter: false,
    meta: { width: '10%' },
  }),
  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'User',
    enableSorting: true,
    enableColumnFilter: true,
    meta: { width: '45%' },
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'Role',
    enableSorting: true,
    enableColumnFilter: true,
    meta: { width: '45%' },
  }),
]
