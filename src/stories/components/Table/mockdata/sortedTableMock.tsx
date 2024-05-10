// import necessay table types
import type { TableMockType } from './tableMockType'

import { createColumnHelper, defaultColumnOptions, ColumnSort } from '../../../../components/Table'

// Custom default sorting
export const mockSortees: ColumnSort[] = [
  { id: 'user', desc: false },
]

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableMockType>()
export const sortedTableColumns = [
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
    enableColumnFilter: false,
    meta: { width: '45%' },
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'Role',
    enableSorting: true,
    enableColumnFilter: false,
    meta: { width: '45%' },
  }),
]
