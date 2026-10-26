import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from 'src/components/Button'

describe('Button', () => {
  it('renders its text', () => {
    render(<Button>Save </Button>)

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}> Save </Button>)

    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick} disabled> Save </Button>)

    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('is a normal button by default, so it does not submit forms', () => {
    render(<Button>Save </Button>)

    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'button')
  })

  it('applies the variant and size classes', () => {
    render(<Button variant='danger' size='large'> Delete </Button>)

    const button = screen.getByRole('button', { name: 'Delete' })
    expect(button).toHaveClass('button', 'danger', 'large')
  })
})
