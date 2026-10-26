import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tooltip from 'src/components/Tooltip'

describe('Tooltip', () => {
  it('shows its content on hover', async () => {
    const user = userEvent.setup()
    render(<Tooltip content='Copy link'><button type='button'>Share</button></Tooltip>)

    await user.hover(screen.getByRole('button', { name: 'Share' }))

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Copy link')
  })
})
