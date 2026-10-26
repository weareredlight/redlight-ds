import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from '../Select'

const countries = [
  { code: 'pt', name: 'Portugal' },
  { code: 'es', name: 'Spain' },
]

describe('Select', () => {
  it('sends the chosen option value in onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(
      <Select
        id='country'
        label='Country'
        placeholder='Choose a country'
        value={null}
        options={countries}
        getLabel={c => c.name}
        getValue={c => c.code}
        onChange={onChange}
      />,
    )

    await user.click(screen.getByRole('combobox', { name: 'Country' }))
    await user.click(await screen.findByRole('option', { name: 'Spain' }))

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'es', name: 'country' } }),
    )
  })
})
