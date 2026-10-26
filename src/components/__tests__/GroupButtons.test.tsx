import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GroupButtons from '../GroupButtons'

const buttons = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
]

describe('GroupButtons', () => {
  it('renders one button per option', () => {
    render(<GroupButtons buttons={buttons} selectedButton='day' onButtonSelect={jest.fn()} />)

    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Day' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Week' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Month' })).toBeInTheDocument()
  })

  it('calls onButtonSelect with the value of the clicked option', async () => {
    const user = userEvent.setup()
    const onButtonSelect = jest.fn()
    render(<GroupButtons buttons={buttons} selectedButton='day' onButtonSelect={onButtonSelect} />)

    await user.click(screen.getByRole('button', { name: 'Week' }))

    expect(onButtonSelect).toHaveBeenCalledTimes(1)
    expect(onButtonSelect).toHaveBeenCalledWith('week')
  })

  it('shows the selected option as primary and the others as secondary', () => {
    render(<GroupButtons buttons={buttons} selectedButton='week' onButtonSelect={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Week' })).toHaveClass('primary')
    expect(screen.getByRole('button', { name: 'Day' })).toHaveClass('secondary')
    expect(screen.getByRole('button', { name: 'Month' })).toHaveClass('secondary')
  })

  it('tells screen readers which option is selected', () => {
    render(<GroupButtons buttons={buttons} selectedButton='week' onButtonSelect={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute('aria-pressed', 'false')
  })
})
