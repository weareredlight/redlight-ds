import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'

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

  it('forwards the ref to the switch and is described by its error message in the error state', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <Toggle ref={ref} id='terms' label='Terms' state='error' errorMsg='Required' onChange={jest.fn()} />,
    )

    const toggle = screen.getByRole('switch', { name: 'Terms' })
    expect(ref.current).toBe(toggle)
    expect(toggle).toHaveAttribute('aria-invalid', 'true')
    expect(toggle).toHaveAccessibleDescription('Required')
  })
})
