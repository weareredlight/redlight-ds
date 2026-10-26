import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from 'src/components/Input'

const SearchIcon = () => <svg />

describe('Input', () => {
  it('is linked to its label', () => {
    render(<Input name='email' label='Email' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('id', 'email')
  })

  it('calls onChange with the typed value and the field name', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input name='email' label='Email' onChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: 'Email' }), 'ab')

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith({ target: { value: 'ab', name: 'email' } })
  })

  it('sends null instead of an empty string when the field is cleared', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input name='email' label='Email' onChange={onChange} />)
    const field = screen.getByRole('textbox', { name: 'Email' })
    await user.type(field, 'a')

    await user.clear(field)

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: null, name: 'email' } })
  })

  it('sends a number when the type is number', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input type='number' name='age' label='Age' onChange={onChange} />)

    await user.type(screen.getByRole('spinbutton', { name: 'Age' }), '42')

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: 42, name: 'age' } })
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(
      <Input name='email' label='Email' errorMsg='Invalid email' onChange={jest.fn()} />,
    )
    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument()

    rerender(
      <Input name='email' label='Email' errorMsg='Invalid email' state='error' onChange={jest.fn()} />,
    )

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('is disabled in the disabled state', () => {
    render(<Input name='email' label='Email' state='disabled' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDisabled()
  })

  it('calls onClickIcon when the icon is clicked', async () => {
    const user = userEvent.setup()
    const onClickIcon = jest.fn()
    render(
      <Input
        name='search'
        label='Search'
        iconComponent={SearchIcon}
        onClickIcon={onClickIcon}
        onChange={jest.fn()}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickIcon).toHaveBeenCalledTimes(1)
  })

  it('sends null, not 0, when a number field is cleared', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input id='age' type='number' label='Age' value='42' onChange={onChange} />)

    await user.clear(screen.getByLabelText('Age'))

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: null, name: 'age' } })
  })

  it('names the icon button with iconLabel', () => {
    const Icon = () => <svg />
    render(
      <Input
        id='password'
        label='Password'
        iconComponent={Icon}
        onClickIcon={jest.fn()}
        iconLabel='Show password'
        onChange={jest.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Show password' })).toBeInTheDocument()
  })
})
