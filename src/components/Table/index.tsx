/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  CaretSortIcon,
  CaretDownIcon,
  CaretUpIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState, ReactElement } from 'react'

import type { ColumnDef, SortingState, ColumnSort } from '@tanstack/react-table'

import Flex from '../../elements/Flex'
import Input from '../Input'
import Text from '../Text'

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledEmptyRow,
} from './styles'
import { globalFilter, globalSort } from './utils'

type Props<T> = {
  data: T[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[]
  sortees?: ColumnSort[]
  renderOptions?: (data: T) => ReactElement
}

const Table = <T extends object>({
  data,
  columns,
  sortees = [],
  renderOptions,
}: Props<T>) => {
  const [sorting, setSorting] = useState<SortingState>(sortees)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Filtering
    enableFilters: true,
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: { globalFilter: globalFilter<T> },
    // Sorting
    enableSorting: true,
    state: { sorting },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    sortDescFirst: false,
    sortingFns: { globalSort: globalSort<T> },
  })

  console.log(table.getRowModel().rows)

  return (
    <StyledTable>
      <StyledTableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const { column } = header
              const columnFilterValue = column.getFilterValue()
              const isSortable = column.getCanSort()

              let className = 'column-header '
              if (isSortable) className += 'cursor-pointer '
              const columnWidth = (column.columnDef.meta as { width?: string })?.width ?? 'auto'

              return (
                <th key={header.id} style={{ width: columnWidth }} className={!isSortable ? 'disabled ' : ''}>
                  <div
                    className={className}
                    // eslint-disable-next-line no-mixed-operators
                    onClick={isSortable && column.getToggleSortingHandler() || undefined}
                  >
                    <Text variant='subHeading' color='neutral800'>
                      {flexRender(column.columnDef.header, header.getContext())}
                    </Text>
                    {(isSortable && {
                      asc: <CaretDownIcon />,
                      desc: <CaretUpIcon />,
                    }[column.getIsSorted() as string])
                      ?? <CaretSortIcon />}
                  </div>
                  {header.column.getCanFilter() ? (
                    <Input
                      type='text'
                      id={`${column.id}list`}
                      variant='simple'
                      value={(columnFilterValue ?? '') as string}
                      placeholder='Filter by'
                      iconPosition='left'
                      iconComponent={() => <MagnifyingGlassIcon />}
                      onChange={({ target: { value } }) => column.setFilterValue(value)}
                    />
                  ) : null}
                </th>
              )
            })}
          </tr>
        ))}
      </StyledTableHead>
      <StyledTableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                const data = cell.row.original
                let toRender
                if (renderOptions && cell.column.id === 'actions') {
                  toRender = <Flex>{renderOptions(data)}</Flex>
                } else {
                  toRender = flexRender(cell.column.columnDef.cell, cell.getContext())
                }
                return <td key={cell.id}>{toRender}</td>
              })}
            </tr>
          ))
        ) : (
          <StyledEmptyRow colSpan={1000}>
            <Text variant='textBlock' color='neutral'>
              Nothing was found...
            </Text>
          </StyledEmptyRow>
        )}
      </StyledTableBody>
    </StyledTable>
  )
}

export default Table
