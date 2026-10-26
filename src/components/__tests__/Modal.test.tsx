import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Modal from '../Modal'

describe('Modal', () => {
  it('renders nothing but its trigger while closed', () => {
    render(
      <Modal
        open={false}
        closeFn={jest.fn()}
        title='Edit profile'
        description='Change your details'
        renderTrigger={() => <button type='button'>Open</button>}
      />,
    )

    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows its title, description and content while open', () => {
    render(
      <Modal open closeFn={jest.fn()} title='Edit profile' description='Change your details'>
        <p>Form goes here</p>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog', { name: 'Edit profile' })
    expect(dialog).toHaveAccessibleDescription('Change your details')
    expect(screen.getByText('Form goes here')).toBeInTheDocument()
  })

  it('calls closeFn when the close button is clicked', async () => {
    const user = userEvent.setup()
    const closeFn = jest.fn()
    render(<Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />)

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('calls closeFn when Escape is pressed', async () => {
    const user = userEvent.setup()
    const closeFn = jest.fn()
    render(<Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />)

    await user.keyboard('{Escape}')

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('calls closeFn when the user clicks outside it', async () => {
    // While a modal is open, Radix sets `pointer-events: none` on the rest of the page, which
    // user-event refuses to click through unless the check is turned off
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const closeFn = jest.fn()
    render(
      <>
        <button type='button'>Elsewhere</button>
        <Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />
      </>,
    )

    await user.click(screen.getByText('Elsewhere'))

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('stops rendering the dialog when the parent sets open to false', () => {
    const { rerender } = render(
      <Modal open closeFn={jest.fn()} title='Edit profile' description='Change your details' />,
    )

    rerender(
      <Modal open={false} closeFn={jest.fn()} title='Edit profile' description='Change your details' />,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls openFn when the trigger is clicked, so the trigger can open the modal', async () => {
    const user = userEvent.setup()
    const openFn = jest.fn()
    render(
      <Modal
        open={false}
        openFn={openFn}
        closeFn={jest.fn()}
        title='Edit profile'
        renderTrigger={() => <button type='button'>Open</button>}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(openFn).toHaveBeenCalledTimes(1)
  })
})
