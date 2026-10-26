import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dialog from 'src/components/Dialog'

describe('Dialog', () => {
  it('renders nothing while closed', () => {
    render(
      <Dialog
        open={false}
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })

  it('shows its title, description and default buttons while open', () => {
    render(
      <Dialog
        open
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    const dialog = screen.getByRole('alertdialog', { name: 'Delete project?' })
    expect(dialog).toHaveAccessibleDescription('This cannot be undone')
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })

  it('uses custom button texts', () => {
    render(
      <Dialog
        open
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
        confirmButtonText='Delete'
        cancelButtonText='Keep it'
      />,
    )

    expect(screen.getByRole('button', { name: 'Keep it' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
  })

  it('calls onConfirm and then closeFn when confirmed', async () => {
    const user = userEvent.setup()
    const calls: string[] = []
    const onConfirm = jest.fn(() => calls.push('confirm'))
    const closeFn = jest.fn(() => calls.push('close'))
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(calls).toEqual(['confirm', 'close'])
  })

  it('calls only closeFn when cancelled', async () => {
    const user = userEvent.setup()
    const onConfirm = jest.fn()
    const closeFn = jest.fn()
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })

  it('calls only closeFn when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onConfirm = jest.fn()
    const closeFn = jest.fn()
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.keyboard('{Escape}')

    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })
})
