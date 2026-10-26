import { render, screen } from '@testing-library/react'

import Text from 'src/components/Text'

describe('Text', () => {
  it('uses the theme text color by default', () => {
    render(<Text>Projects</Text>)

    expect(screen.getByText('Projects')).toHaveStyle('--text-color: var(--colors-black)')
  })

  it('uses the color prop when given', () => {
    render(<Text color='primary'>Projects</Text>)

    expect(screen.getByText('Projects')).toHaveStyle('--text-color: var(--colors-primary)')
  })
})
