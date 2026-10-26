import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { ColumnDef } from 'src/components/Table'

import Table, { defaultColumnOptions } from 'src/components/Table'

type Person = { id: string; name: string; age: number }

const people: Person[] = [
  { id: '1', name: 'Bruno', age: 41 },
  { id: '2', name: 'Ana', age: 29 },
  { id: '3', name: 'Carla', age: 35 },
]

const columns: ColumnDef<Person>[] = [
  { ...defaultColumnOptions<Person>(), accessorKey: 'name', header: 'Name' },
  { ...defaultColumnOptions<Person>(), accessorKey: 'age', header: 'Age' },
]

// Text of the first cell of each body row, top to bottom
const namesInOrder = () => screen.getAllByRole('row')
  .slice(1)
  .map(row => within(row).getAllByRole('cell')[0].textContent)

describe('Table', () => {
  it('renders a header per column and a cell per value', () => {
    render(<Table data={people} columns={columns} />)

    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Age' })).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(people.length + 1)
    expect(screen.getByRole('cell', { name: 'Ana' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: '29' })).toBeInTheDocument()
  })

  it('sorts ascending when a sortable header is clicked', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.click(screen.getByText('Name'))

    expect(namesInOrder()).toEqual(['Ana', 'Bruno', 'Carla'])
  })

  it('sorts descending when the same header is clicked again', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.click(screen.getByText('Name'))
    await user.click(screen.getByText('Name'))

    expect(namesInOrder()).toEqual(['Carla', 'Bruno', 'Ana'])
  })

  it('applies the initial sorting from sortees', () => {
    render(<Table data={people} columns={columns} sortees={[{ id: 'age', desc: true }]} />)

    expect(namesInOrder()).toEqual(['Bruno', 'Carla', 'Ana'])
  })

  it('only shows the rows that match a column filter', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    const nameHeader = screen.getByRole('columnheader', { name: 'Name' })
    await user.type(within(nameHeader).getByRole('textbox'), 'CAR')

    expect(namesInOrder()).toEqual(['Carla'])
  })

  it('shows an empty state when there is no data', () => {
    render(<Table data={[]} columns={columns} />)

    expect(screen.getByText('Nothing was found...')).toBeInTheDocument()
  })

  it('renders renderOptions in the actions column with the row data', () => {
    const withActions: ColumnDef<Person>[] = [...columns, { id: 'actions', header: 'Actions' }]
    render(
      <Table
        data={people}
        columns={withActions}
        renderOptions={person => <button type='button'>{`Edit ${person.name}`}</button>}
      />,
    )

    expect(screen.getByRole('button', { name: 'Edit Ana' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Edit/ })).toHaveLength(people.length)
  })

  it('sorts with the keyboard: sortable headers are buttons reachable with Tab', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.tab()
    expect(screen.getByRole('button', { name: 'Name' })).toHaveFocus()
    await user.keyboard('{Enter}')

    expect(namesInOrder()).toEqual(['Ana', 'Bruno', 'Carla'])
  })

  it('tells screen readers how each column is sorted', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)
    const nameHeader = screen.getByRole('columnheader', { name: 'Name' })
    expect(nameHeader).toHaveAttribute('aria-sort', 'none')

    await user.click(screen.getByRole('button', { name: 'Name' }))

    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
  })

  it('names each column filter after its column', () => {
    render(<Table data={people} columns={columns} />)

    expect(screen.getByRole('textbox', { name: 'Filter by Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Filter by Age' })).toBeInTheDocument()
  })
})
