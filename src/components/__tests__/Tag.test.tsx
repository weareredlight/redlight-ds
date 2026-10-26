import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tag from '../Tag'

describe('Tag', () => {
  it('renders its content', () => {
    render(<Tag>React</Tag>)

    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('has no close button without onClose', () => {
    render(<Tag>React</Tag>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    render(<Tag onClose={onClose}>React</Tag>)

    await user.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('cannot be closed when it is an error tag', () => {
    render(<Tag variant='error' onClose={jest.fn()}>React</Tag>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('applies the variant and disabled classes', () => {
    render(<Tag variant='error' disabled>React</Tag>)

    expect(screen.getByText('React')).toHaveClass('tag', 'error', 'disabled')
  })
})
