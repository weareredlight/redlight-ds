// import necessary table components
import type { TableMockType } from './tableMockType'

import { createColumnHelper, defaultColumnOptions } from '../../../../components/Table'

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableMockType>()
export const defaultTableColumns = [
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
