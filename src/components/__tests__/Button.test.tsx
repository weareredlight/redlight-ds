import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlusIcon } from 'lucide-react'

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

  it('renders a forwardRef icon component, like the Lucide icons', () => {
    render(<Button iconComponent={PlusIcon} aria-label='Add' />)

    expect(screen.getByRole('button', { name: 'Add' }).querySelector('svg')).toBeInTheDocument()
  })

  it('is busy and ignores clicks, also from the keyboard, while loading', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick} isLoading> Save </Button>)

    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toHaveAttribute('aria-busy', 'true')
    await user.click(button)
    button.focus()
    await user.keyboard('{Enter}')

    expect(onClick).not.toHaveBeenCalled()
  })
})
