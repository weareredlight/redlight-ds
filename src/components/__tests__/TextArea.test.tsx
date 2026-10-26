import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextArea from 'src/components/TextArea'

describe('TextArea', () => {
  it('is linked to its label', () => {
    render(<TextArea id='comments' label='Comments' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toBeInTheDocument()
  })

  it('calls onChange with the change event for each typed character', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<TextArea id='comments' label='Comments' onChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: 'Comments' }), 'hi')

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange.mock.lastCall[0].target).toHaveValue('hi')
  })

  it('does not accept more characters than maxLength', async () => {
    const user = userEvent.setup()
    render(<TextArea id='comments' label='Comments' maxLength={3} onChange={jest.fn()} />)
    const field = screen.getByRole('textbox', { name: 'Comments' })

    await user.type(field, 'hello')

    expect(field).toHaveValue('hel')
  })

  it('shows 5 rows by default', () => {
    render(<TextArea id='comments' label='Comments' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toHaveAttribute('rows', '5')
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(
      <TextArea id='comments' label='Comments' errorMsg='Too short' onChange={jest.fn()} />,
    )
    expect(screen.queryByText('Too short')).not.toBeInTheDocument()

    rerender(
      <TextArea id='comments' label='Comments' errorMsg='Too short' state='error' onChange={jest.fn()} />,
    )

    expect(screen.getByText('Too short')).toBeInTheDocument()
  })

  it('is disabled in the disabled state', () => {
    render(<TextArea id='comments' label='Comments' state='disabled' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toBeDisabled()
  })

  it('is linked to its label when it only has a name', () => {
    render(<TextArea name='bio' label='Bio' onChange={jest.fn()} />)

    expect(screen.getByLabelText('Bio')).toHaveRole('textbox')
  })
})
