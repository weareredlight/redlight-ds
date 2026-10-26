import { render, screen } from '@testing-library/react'

import Avatar from 'src/components/Avatar'

describe('Avatar', () => {
  it('shows the initials, named with the full name for screen readers, when there is no image', () => {
    render(<Avatar name='Ada Lovelace' />)

    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveTextContent('AL')
  })

  it('hides the initials from screen readers when the name is shown next to them', () => {
    render(<Avatar name='Ada Lovelace' displayLabel />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByText('AL')).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows the image with the name as its alt text when a url is given', () => {
    render(<Avatar name='Ada Lovelace' url='https://example.com/ada.png' />)

    expect(screen.getByRole('img', { name: 'Ada Lovelace' }))
      .toHaveAttribute('src', 'https://example.com/ada.png')
    expect(screen.queryByText('AL')).not.toBeInTheDocument()
  })

  it('does not show the name and description by default', () => {
    render(<Avatar name='Ada Lovelace' description='Engineer' />)

    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument()
    expect(screen.queryByText('Engineer')).not.toBeInTheDocument()
  })

  it('shows the name and description when displayLabel is set', () => {
    render(<Avatar name='Ada Lovelace' description='Engineer' displayLabel />)

    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('is normal size by default', () => {
    render(<Avatar name='Ada Lovelace' />)

    expect(screen.getByText('AL').parentElement).toHaveClass('normal')
  })

  it('applies the size class it receives', () => {
    render(<Avatar name='Ada Lovelace' size='small' />)

    expect(screen.getByText('AL').parentElement).toHaveClass('small')
  })
})
