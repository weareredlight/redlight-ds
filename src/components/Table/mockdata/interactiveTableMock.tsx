import { createColumnHelper } from '@tanstack/react-table'

import type { TableMockType } from './tableMockType'
import type { ColumnDef, ColumnSort } from '@tanstack/react-table'

import { defaultColumnOptions } from '../utils'

const columnHelper = createColumnHelper<TableMockType>()

export const tableInteractiveSortees: ColumnSort[] = [{ id: 'name', desc: true }]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tableInteractiveColumns: ColumnDef<TableMockType, any>[] = [
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
    meta: { width: '45%' },
    enableSorting: true,
    enableColumnFilter: true,
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'Role',
    meta: { width: '45%' },
    enableSorting: true,
    enableColumnFilter: true,
  }),
]
