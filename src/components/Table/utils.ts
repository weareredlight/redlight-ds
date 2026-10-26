/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'

import type { ColumnDef, Row } from '@tanstack/react-table'

export const defaultColumnOptions = <T extends object>(): Partial<ColumnDef<T>> => ({
  cell: info => info.getValue(),
  sortingFn: globalSort,
  filterFn: globalFilter,
})

export const globalFilter = <T extends object>(
  row: Row<T>,
  columnId: string,
  filterValue: string,
) => {
  const value = row.getValue(columnId)
  // Filter by array content
  if (Array.isArray(value)) {
    return value.some(v => {
      const stringValues: string = getObjectStringContents(v)
      return stringValues?.toLowerCase().includes(filterValue?.toLowerCase())
    })
  }
  // Filter by object content
  if (value && typeof value === 'object') {
    return getObjectStringContents(value)
      ?.toLowerCase()
      .includes(filterValue?.toLowerCase())
  }
  // Filter by boolean
  if (typeof value === 'boolean') {
    return value
      .toString()
      ?.toLowerCase()
      .includes(filterValue?.toLowerCase())
  }
  // Filter by date. An empty date never matches (dayjs reads it as today)
  const date = toDate(value)
  if (columnId?.toLowerCase().includes('date') && date?.isValid()) {
    return date
      .format('DD-MM-YYYY')
      .includes(filterValue)
  }
  return ((value ?? '') as string)
    .toString()
    ?.toLowerCase()
    .includes(filterValue?.toLowerCase())
}

export const globalSort = <T extends object>(
  a: Row<T>,
  b: Row<T>,
  columnId: string,
) => {
  const aVal = a.getValue(columnId)
  const bVal = b.getValue(columnId)
  // Sort arrays by length
  if (Array.isArray(aVal) && Array.isArray(bVal)) {
    if (aVal.length < bVal.length) return -1
    if (aVal.length > bVal.length) return 1
    return 0
  }
  // Sort objects by name
  if (typeof aVal === 'object' && typeof bVal === 'object') {
    const aName = getObjectName(aVal)
    const bName = getObjectName(bVal)
    if (!aName && !bName) return 0
    if (!aName) return -1
    if (!bName) return 1
    // numeric: 'Item 2' before 'Item 10', and id 3 before id 20
    return aName.localeCompare(bName, undefined, { numeric: true })
  }
  // Sort booleans by value
  if (typeof aVal === 'boolean' && typeof bVal === 'boolean') {
    if (aVal === bVal) return 0
    if (aVal) return -1
    return 1
  }
  // Sort dates by value
  const aDate = toDate(aVal)
  const bDate = toDate(bVal)
  if (
    columnId?.toLowerCase().includes('date')
    && (aDate?.isValid() || bDate?.isValid())
  ) {
    // Empty and invalid dates go first
    if (!aDate?.isValid()) return -1
    if (!bDate?.isValid()) return 1
    if (aDate.isBefore(bDate)) return -1
    if (aDate.isAfter(bDate)) return 1
    return 0
  }
  // Sort numbers by value
  if (typeof aVal === 'number' && typeof bVal === 'number') {
    if (aVal < bVal) return -1
    if (aVal > bVal) return 1
    return 0
  }
  // Sort strings by locale
  if (typeof aVal === 'string' && typeof bVal === 'string') {
    return aVal.localeCompare(bVal)
  }
  return 0
}

// Empty values become null instead of a date, because dayjs(undefined) is today
const toDate = (value: unknown) => (
  value === undefined || value === null || value === '' ? null : dayjs(value as string)
)

// The text an object is sorted by: name, then first + last name, title, label or id
const getObjectName = (value: unknown): string => {
  const obj = (value || {}) as any
  const fullName = obj.firstName || obj.lastName
    ? `${obj.firstName ?? ''}${obj.lastName ?? ''}`
    : ''
  // String() because an id can be a number
  return String(obj.name || fullName || obj.title || obj.label || obj.id || '').toLowerCase()
}

const getObjectStringContents = (value: unknown): string => {
  if (value && typeof value === 'object') {
    const stringValues: string = Object.values(value).reduce(
      (acc: string, val) => {
        if (typeof val === 'object') return acc + getObjectStringContents(val)
        // eslint-disable-next-line no-param-reassign
        if (typeof val === 'string') acc += val
        return acc
      },
      '',
    )
    return stringValues
  }
  return ''
}
