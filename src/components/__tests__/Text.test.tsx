import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

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

  it.each([
    ['h1', 'H1'],
    ['h6', 'H6'],
    ['h7', 'P'],
    ['subHeading', 'P'],
    ['paragraph', 'P'],
    ['textBlock', 'P'],
    ['microCopy', 'SPAN'],
  ] as const)('renders the %s variant as a <%s>', (variant, tagName) => {
    render(<Text variant={variant}>Projects</Text>)

    expect(screen.getByText('Projects').tagName).toBe(tagName)
  })

  it('is a paragraph by default', () => {
    render(<Text>Projects</Text>)

    expect(screen.getByText('Projects').tagName).toBe('P')
  })

  it('is a real heading, with its level, for the heading variants', () => {
    render(<Text variant='h2'>Projects</Text>)

    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
  })

  it('forwards the ref and other attributes to the element', () => {
    const ref = createRef<HTMLElement>()
    render(<Text ref={ref} id='title' title='Full title'>Title</Text>)

    expect(ref.current).toBe(screen.getByText('Title'))
    expect(ref.current).toHaveAttribute('id', 'title')
    expect(ref.current).toHaveAttribute('title', 'Full title')
  })
})
