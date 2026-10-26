import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import Flex from '../Flex'

describe('Flex', () => {
  it('renders a div with its children by default', () => {
    render(<Flex>Content</Flex>)

    expect(screen.getByText('Content').tagName).toBe('DIV')
  })

  it('renders the element given in the as prop', () => {
    render(<Flex as='nav' aria-label='Main'>Links</Flex>)

    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveTextContent('Links')
  })

  it('is a row aligned and justified to the start by default', () => {
    render(<Flex>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass(
      'flex',
      'directionRow',
      'alignStart',
      'justifyStart',
    )
  })

  it('applies the layout classes chosen by its props', () => {
    render(<Flex direction='column' align='center' justify='spaceBetween' gap='sm' wrap>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass(
      'directionColumn',
      'alignCenter',
      'justifySpaceBetween',
      'gap-sm',
      'wrap',
    )
  })

  it('forwards the ref to the rendered element', () => {
    const ref = createRef<HTMLElement>()

    render(<Flex as='section' ref={ref}>Content</Flex>)

    expect(ref.current).toBe(screen.getByText('Content'))
    expect(ref.current?.tagName).toBe('SECTION')
  })
})
