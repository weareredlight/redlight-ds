import { createColumnHelper } from '@tanstack/react-table'

import type { TableMockType } from './tableMockType'
import type { ColumnDef } from '@tanstack/react-table'

import { defaultColumnOptions } from '../utils'

const columnHelper = createColumnHelper<TableMockType>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
