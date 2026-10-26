import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { MultiSelectProps } from 'src/components/MultiSelect'

import MultiSelect from 'src/components/MultiSelect'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

const getLabel = (value: string) => fruits.find(fruit => fruit.value === value)?.label ?? value

const renderMultiSelect = (props: Partial<MultiSelectProps> = {}) => render(
  <MultiSelect
    name='fruits'
    label='Fruits'
    value={[]}
    onChange={jest.fn()}
    options={fruits}
    getLabel={getLabel}
    {...props}
  />,
)

describe('MultiSelect', () => {
  it('shows its label and lists the options when opened', async () => {
    const user = userEvent.setup()
    renderMultiSelect()

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(await screen.findByRole('option', { name: 'Apple' })).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(fruits.length)
  })

  it('calls onChange with every selected value when an option is picked', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    renderMultiSelect({ value: ['apple'], onChange })

    await user.click(screen.getByRole('combobox'))
    await user.click(await screen.findByRole('option', { name: 'Banana' }))

    expect(onChange).toHaveBeenCalledWith(['apple', 'banana'])
  })

  it('shows how many values are selected', () => {
    renderMultiSelect({ value: ['apple', 'cherry'] })

    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('with hasPills, shows a pill per value and removes a value when its pill is closed', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    renderMultiSelect({ value: ['apple', 'cherry'], onChange, hasPills: true })

    await user.click(within(screen.getByText('Apple')).getByRole('button', { name: 'Remove' }))

    expect(screen.getByText('Cherry')).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledWith(['cherry'])
  })

  it('shows the error message in the error state', () => {
    renderMultiSelect({ state: 'error', errorMsg: 'Pick at least one fruit' })

    expect(screen.getByText('Pick at least one fruit')).toBeInTheDocument()
  })

  it('cannot be used in the disabled state', () => {
    renderMultiSelect({ state: 'disabled' })

    // react-select hides its input (visibility: hidden) while disabled
    expect(screen.getByRole('combobox', { hidden: true })).toBeDisabled()
  })

  it('is linked to its label', () => {
    renderMultiSelect()

    expect(screen.getByRole('combobox', { name: 'Fruits' })).toBeInTheDocument()
  })
})
