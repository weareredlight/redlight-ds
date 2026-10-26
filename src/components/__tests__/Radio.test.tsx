import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Radio from '../Radio'

describe('Radio', () => {
  it('is linked to its label, so clicking the label selects it', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' name='plan' value='monthly' label='Monthly' onChange={onChange} />)

    await user.click(screen.getByText('Monthly'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeChecked()
  })

  it('passes the selected value to onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' name='plan' value='monthly' label='Monthly' onChange={onChange} />)

    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    expect(onChange.mock.lastCall[0].target).toHaveAttribute('value', 'monthly')
  })

  it('unselects the other radios with the same name', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Radio id='monthly' name='plan' value='monthly' label='Monthly' />
        <Radio id='yearly' name='plan' value='yearly' label='Yearly' />
      </>,
    )
    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    await user.click(screen.getByRole('radio', { name: 'Yearly' }))

    expect(screen.getByRole('radio', { name: 'Yearly' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Monthly' })).not.toBeChecked()
  })

  it('shows the checked state it is given', () => {
    render(<Radio id='monthly' label='Monthly' checked onChange={jest.fn()} />)

    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeChecked()
  })

  it('cannot be selected when disabled', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' label='Monthly' disabled onChange={onChange} />)

    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeDisabled()
    expect(screen.getByRole('radio', { name: 'Monthly' })).not.toBeChecked()
    expect(onChange).not.toHaveBeenCalled()
  })
})
