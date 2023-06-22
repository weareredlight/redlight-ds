import dayjs from 'dayjs'

import type { ColumnDef, Row } from '@tanstack/react-table'

export const defaultColumnOptions = <T extends object>(): Partial<ColumnDef<T>> => ({
  cell: info => info.getValue(),
  sortingFn: globalSort,
  filterFn: globalFilter,
})

// eslint-disable-next-line max-len
export const globalFilter = <T extends object>(row: Row<T>, columnId: string, filterValue: string) => {
  const value = row.getValue(columnId)
  // Filter by array content
  if (Array.isArray(value)) {
    return value.some(v => {
      const stringValues: string = getObjectStringContents(v)
      return stringValues.toLowerCase().includes(filterValue.toLowerCase())
    })
  }
  // Filter by object content
  if (value && typeof value === 'object') {
    return getObjectStringContents(value).toLowerCase().includes(filterValue.toLowerCase())
  }
  // Filter by boolean
  if (typeof value === 'boolean') {
    return value.toString().toLowerCase().includes(filterValue.toLowerCase())
  }
  // Filter by date
  if (columnId.toLowerCase().includes('date') && dayjs(value as string).isValid()) {
    return dayjs(value as string).format('DD-MM-YYYY').includes(filterValue)
  }
  return ((value ?? '') as string).toString().toLowerCase().includes(filterValue.toLowerCase())
}

export const globalSort = <T extends object>(a: Row<T>, b: Row<T>, columnId: string) => {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const aUnknown = aVal || {} as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bUnknown = bVal || {} as any
    const aUserName = `${aUnknown.firstName}${aUnknown.lastName}`.toLowerCase()
    const bUserName = `${bUnknown.firstName}${bUnknown.lastName}`.toLowerCase()
    const aName: string = aUnknown.name || aUserName || aUnknown.title || aUnknown.label || aUnknown.id || ''
    const bName: string = bUnknown.name || bUserName || bUnknown.title || bUnknown.label || bUnknown.id || ''
    if (!aName) return -1
    if (!bName) return 1
    return aName.localeCompare(bName)
  }
  // Sort booleans by value
  if (typeof aVal === 'boolean' && typeof bVal === 'boolean') {
    if (aVal === bVal) return 0
    if (aVal) return -1
    return 1
  }
  // Sort dates by value
  if (columnId.toLowerCase().includes('date') && (dayjs(aVal as string).isValid() || dayjs(bVal as string).isValid())) {
    const aDate = dayjs(aVal as string)
    const bDate = dayjs(bVal as string)
    if (!aDate.isValid()) return -1
    if (!bDate.isValid()) return 1
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

const getObjectStringContents = (value: unknown): string => {
  if (value && typeof value === 'object') {
    const stringValues: string = Object.values(value).reduce((acc: string, val) => {
      if (typeof val === 'object') return acc + getObjectStringContents(val)
      // eslint-disable-next-line no-param-reassign
      if (typeof val === 'string') acc += val
      return acc
    }, '')
    return stringValues
  }
  return ''
}
