import type { Row } from '@tanstack/react-table'

import { globalFilter, globalSort } from '../utils'

type Item = Record<string, unknown>

// Only getValue is used by the filter and sort functions
const rowWith = (value: unknown) => ({ getValue: () => value }) as unknown as Row<Item>

const sortValues = (values: unknown[], columnId = 'value') => [...values].sort(
  (a, b) => globalSort(rowWith(a), rowWith(b), columnId),
)

describe('globalFilter', () => {
  it('matches text ignoring case', () => {
    expect(globalFilter(rowWith('Lisbon'), 'city', 'lis')).toBe(true)
    expect(globalFilter(rowWith('Lisbon'), 'city', 'porto')).toBe(false)
  })

  it('matches the text inside objects and arrays of objects', () => {
    const owner = { name: 'Ana', team: { title: 'Design' } }

    expect(globalFilter(rowWith(owner), 'owner', 'design')).toBe(true)
    expect(globalFilter(rowWith([{ name: 'Rui' }, owner]), 'owners', 'ana')).toBe(true)
    expect(globalFilter(rowWith([{ name: 'Rui' }]), 'owners', 'ana')).toBe(false)
  })

  it('matches booleans by their text', () => {
    expect(globalFilter(rowWith(true), 'active', 'tru')).toBe(true)
    expect(globalFilter(rowWith(false), 'active', 'true')).toBe(false)
  })

  it('matches dates in date columns as DD-MM-YYYY', () => {
    // A date-only string is read as local midnight, so this holds in any timezone
    expect(globalFilter(rowWith('2024-03-15'), 'startDate', '15-03')).toBe(true)
    expect(globalFilter(rowWith('2024-03-15'), 'startDate', '2024-03')).toBe(false)
  })
})

describe('globalSort', () => {
  it('sorts numbers by value and strings alphabetically', () => {
    expect(sortValues([10, 2, 33])).toEqual([2, 10, 33])
    expect(sortValues(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])
  })

  it('puts true before false', () => {
    expect(sortValues([false, true, false])).toEqual([true, false, false])
  })

  it('sorts arrays by length', () => {
    expect(sortValues([[1, 2, 3], [], [1]])).toEqual([[], [1], [1, 2, 3]])
  })

  it('sorts objects by name, or by first and last name', () => {
    expect(sortValues([{ name: 'Rui' }, { name: 'Ana' }])).toEqual([{ name: 'Ana' }, { name: 'Rui' }])
    expect(sortValues([
      { firstName: 'Rui', lastName: 'Silva' },
      { firstName: 'Ana', lastName: 'Costa' },
    ])).toEqual([
      { firstName: 'Ana', lastName: 'Costa' },
      { firstName: 'Rui', lastName: 'Silva' },
    ])
  })

  it('sorts dates in date columns chronologically, with invalid dates first', () => {
    const sorted = sortValues(['2024-12-01', 'not a date', '2023-05-20'], 'dueDate')

    expect(sorted).toEqual(['not a date', '2023-05-20', '2024-12-01'])
  })
})

describe('globalSort and globalFilter edge cases', () => {
  it('sorts objects by title, label or id when they have no name', () => {
    expect(sortValues([{ title: 'Zeta' }, { title: 'Alpha' }]))
      .toEqual([{ title: 'Alpha' }, { title: 'Zeta' }])
    expect(sortValues([{ label: 'b' }, { label: 'a' }])).toEqual([{ label: 'a' }, { label: 'b' }])
    expect(sortValues([{ id: 20 }, { id: 3 }])).toEqual([{ id: 3 }, { id: 20 }])
  })

  it('still sorts people by first and last name', () => {
    const ana = { firstName: 'Ana', lastName: 'Silva' }
    const rui = { firstName: 'Rui', lastName: 'Costa' }

    expect(sortValues([rui, ana])).toEqual([ana, rui])
  })

  it('never matches an empty date, even when the filter is today', () => {
    const today = new Date().toLocaleDateString('en-GB').replace(/\//g, '-')

    expect(globalFilter(rowWith(undefined), 'dueDate', today)).toBe(false)
    expect(globalFilter(rowWith(''), 'dueDate', today)).toBe(false)
  })

  it('puts empty dates first when sorting', () => {
    // null and '' rather than undefined: Array.sort moves undefined to the end without comparing
    expect(sortValues(['2024-03-15', null, '2024-01-01'], 'dueDate'))
      .toEqual([null, '2024-01-01', '2024-03-15'])
    expect(sortValues(['2024-03-15', ''], 'dueDate')).toEqual(['', '2024-03-15'])
  })
})
