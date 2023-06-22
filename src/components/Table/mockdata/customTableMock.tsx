import { createColumnHelper } from '@tanstack/react-table'
import React from 'react'

import type { TableMockType } from './tableMockType'
import type { ColumnDef, ColumnSort } from '@tanstack/react-table'

import { defaultColumnOptions } from '../utils'

import Avatar from 'components/Avatar'
import Flex from 'elements/Flex'

const columnHelper = createColumnHelper<TableMockType>()

export const tableCustomSortees: ColumnSort[] = [{ id: 'name', desc: false }]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tableCustomColumns: ColumnDef<TableMockType, any>[] = [
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
    cell: info => {
      const user = info.getValue()
      return (
        <Flex justify='start' css={{ gap: '$sm' }}>
          <Avatar
            size='small'
            name={String(user)}
            displayLabel
          />
        </Flex>
      )
    }
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'Role',
    meta: { width: '45%' },
  }),
]
