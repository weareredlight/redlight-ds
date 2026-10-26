import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('is linked to its label, so clicking the label toggles it', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Checkbox id='terms' label='I accept the terms' onChange={onChange} />)

    await user.click(screen.getByText('I accept the terms'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('checkbox', { name: 'I accept the terms' })).toBeChecked()
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(<Checkbox id='terms' label='Terms' errorMsg='Required' />)
    expect(screen.queryByText('Required')).not.toBeInTheDocument()

    rerender(<Checkbox id='terms' label='Terms' errorMsg='Required' state='error' />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
