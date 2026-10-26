/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper
} from '@tanstack/react-table'
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  SearchIcon
} from 'lucide-react'
import {
  useCallback, useEffect, useRef, useState, ReactElement
} from 'react'

import type {
  ColumnDef,
  SortingState,
  ColumnSort,
} from '@tanstack/react-table'
import type { CSSProperties, KeyboardEvent } from 'react'

import Input from 'src/components/Input'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import Flex from 'src/elements/Flex'
import { cx } from 'src/utils'

import styles from './styles.module.scss'
import { defaultColumnOptions, globalFilter, globalSort } from './utils'

export type TableProps<T> = {
  data: T[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[]
  sortees?: ColumnSort[]
  renderOptions?: (data: T) => ReactElement
  scrollable?: boolean
  className?: string
  style?: CSSProperties
}

const Table = <T extends object>({
  data,
  columns,
  sortees = [],
  renderOptions,
  scrollable = false,
  className,
  style,
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>(sortees)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState({ left: false, right: false })

  const updateOverflow = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const left = scrollLeft > 0
    const right = Math.ceil(scrollLeft + clientWidth) < scrollWidth
    setOverflow(prev => (prev.left === left && prev.right === right ? prev : { left, right }))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!scrollable || !el) return undefined
    updateOverflow()
    const observer = new ResizeObserver(updateOverflow)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    return () => observer.disconnect()
  }, [scrollable, updateOverflow])

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

  const tableElement = (
    <table className={cx(styles.table, className)} style={style}>
      <thead className={styles.head}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const { column } = header
              const columnFilterValue = column.getFilterValue()
              const isSortable = column.getCanSort()

              const columnWidth = (column.columnDef.meta as { width?: string })?.width ?? 'auto'
              const sorted = column.getIsSorted()
              const headerText = typeof column.columnDef.header === 'string'
                ? column.columnDef.header
                : column.id

              return (
                <th
                  key={header.id}
                  style={{ width: columnWidth }}
                  className={cx(!isSortable && styles.disabled)}
                  // Tells screen readers how the table is sorted by this column
                  aria-sort={isSortable
                    ? ({ asc: 'ascending', desc: 'descending' } as const)[sorted as string] ?? 'none'
                    : undefined}
                >
                  <div
                    className={cx(styles.columnHeader, isSortable && styles.sortable)}
                    // eslint-disable-next-line no-mixed-operators
                    onClick={isSortable && column.getToggleSortingHandler() || undefined}
                    // Sortable headers are buttons: reachable with Tab, sorted with Enter or Space
                    {...(isSortable && {
                      role: 'button',
                      tabIndex: 0,
                      onKeyDown: (event: KeyboardEvent) => {
                        if (event.key !== 'Enter' && event.key !== ' ') return
                        event.preventDefault()
                        column.toggleSorting()
                      },
                    })}
                  >
                    <Text variant='subHeading' color='neutral800'>
                      {flexRender(column.columnDef.header, header.getContext())}
                    </Text>
                    {(isSortable && {
                      asc: <ChevronDownIcon size={ICON_SIZE} />,
                      desc: <ChevronUpIcon size={ICON_SIZE} />,
                    }[column.getIsSorted() as string])
                      ?? <ChevronsUpDownIcon size={ICON_SIZE} />}
                  </div>
                  {header.column.getCanFilter() ? (
                    <Input
                      type='text'
                      id={`${column.id}list`}
                      variant='simple'
                      value={(columnFilterValue ?? '') as string}
                      placeholder='Filter by'
                      aria-label={`Filter by ${headerText}`}
                      iconPosition='left'
                      iconComponent={() => <SearchIcon />}
                      onChange={({ target: { value } }) => (
                        column.setFilterValue(value || undefined)
                      )}
                      fullWidth
                    />
                  ) : null}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody className={styles.body}>
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
          <tr>
            <td className={styles.emptyRow} colSpan={1000}>
              <Text variant='textBlock' color='neutral'>
                Nothing was found...
              </Text>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )

  if (!scrollable) return tableElement

  return (
    <div
      className={cx(
        styles.scrollContainer,
        overflow.left && styles.shadowLeft,
        overflow.right && styles.shadowRight,
      )}
    >
      <div ref={scrollRef} className={styles.scrollArea} onScroll={updateOverflow}>
        {tableElement}
      </div>
    </div>
  )
}

export const tableSelector = `.${styles.table}`

export default Table
export {
  defaultColumnOptions,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper
}
export type {
  ColumnDef,
  SortingState,
  ColumnSort,
}
