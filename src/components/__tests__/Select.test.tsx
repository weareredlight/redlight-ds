import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'

import Select from 'src/components/Select'

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

  it('forwards the ref to the field and is described by its error message in the error state', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <Select
        ref={ref}
        id='country'
        label='Country'
        placeholder='Choose a country'
        value={null}
        options={countries}
        getLabel={c => c.name}
        getValue={c => c.code}
        onChange={jest.fn()}
        state='error'
        errorMsg='Required'
      />,
    )

    const field = screen.getByRole('combobox', { name: 'Country' })
    expect(ref.current).toBe(field)
    expect(field).toBeInvalid()
    expect(field).toHaveAccessibleDescription('Required')
  })
})
