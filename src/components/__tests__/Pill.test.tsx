import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pill from '../Pill'

describe('Pill', () => {
  it('renders its content', () => {
    render(<Pill>Active</Pill>)

    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('has no close button without onClose', () => {
    render(<Pill>Active</Pill>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    render(<Pill onClose={onClose}>Active</Pill>)

    await user.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('uses the default variant by default', () => {
    render(<Pill>Active</Pill>)

    expect(screen.getByText('Active')).toHaveClass('pill', 'default')
  })

  it('applies the variant class it receives', () => {
    render(<Pill variant='success'>Active</Pill>)

    expect(screen.getByText('Active')).toHaveClass('pill', 'success')
  })
})
