import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PopOver from '../PopOver'

const renderPopOver = () => render(
  <PopOver trigger={<button type='button'>Details</button>}>
    <p>More information</p>
  </PopOver>,
)

describe('PopOver', () => {
  it('hides its content until the trigger is clicked', () => {
    renderPopOver()

    expect(screen.getByRole('button', { name: 'Details' })).toBeInTheDocument()
    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('shows its content when the trigger is clicked', async () => {
    const user = userEvent.setup()
    renderPopOver()

    await user.click(screen.getByRole('button', { name: 'Details' }))

    expect(await screen.findByText('More information')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Details' })).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))

    await user.click(await screen.findByRole('button', { name: 'Close' }))

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByText('More information')

    await user.keyboard('{Escape}')

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('closes when the trigger is clicked again', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByText('More information')

    await user.click(screen.getByRole('button', { name: 'Details' }))

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })
})
