import { render, screen } from '@testing-library/react'

import Link from 'src/components/Link'

describe('Link', () => {
  it('renders a link with its text and href', () => {
    render(<Link href='https://example.com'>Docs</Link>)

    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://example.com')
  })

  it('opens in a new tab by default, without leaking the referrer', () => {
    render(<Link href='https://example.com'>Docs</Link>)

    const link = screen.getByRole('link', { name: 'Docs' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('opens in the same tab when openInNewTab is false', () => {
    render(<Link href='https://example.com' openInNewTab={false}>Docs</Link>)

    expect(screen.getByRole('link', { name: 'Docs' })).not.toHaveAttribute('target')
  })

  it('applies the size, danger and darkBackground classes', () => {
    render(<Link href='/' size='small' danger darkBackground>Delete</Link>)

    expect(screen.getByRole('link', { name: 'Delete' }))
      .toHaveClass('link', 'small', 'danger', 'darkBackground')
  })
})
