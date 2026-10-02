// import necessary table components
import React from 'react'

import type { TableMockType } from './tableMockType'

import Avatar from '../../../../components/Avatar'
import { createColumnHelper, defaultColumnOptions } from '../../../../components/Table'
import Flex from '../../../../elements/Flex'

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableMockType>()
export const customTableColumns = [
  columnHelper.accessor('id', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'ID',
    meta: { width: '10%' },
  }),
  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableMockType>(),
    header: 'User',
    meta: { width: '45%' },
    cell: data => {
      const user = data.getValue()
      return (
        <Flex justify='start' style={{ gap: 'var(--space-sm)' }}>
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
