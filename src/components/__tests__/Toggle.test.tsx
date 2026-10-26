import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Toggle from 'src/components/Toggle'

describe('Toggle', () => {
  it('sends the new value and the field name in onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Toggle id='notifications' name='notifications' label='Notifications' value={false} onChange={onChange} />)

    await user.click(screen.getByRole('switch', { name: 'Notifications' }))

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: true, name: 'notifications' } }),
    )
  })

  it('cannot be switched when disabled', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Toggle id='notifications' label='Notifications' state='disabled' onChange={onChange} />)

    await user.click(screen.getByRole('switch', { name: 'Notifications' }))

    expect(screen.getByRole('switch', { name: 'Notifications' })).toBeDisabled()
    expect(onChange).not.toHaveBeenCalled()
  })
})
