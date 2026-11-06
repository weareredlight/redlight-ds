import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

import Accordion, { AccordionGroup } from 'src/components/Accordion'

describe('Accordion', () => {
  it('starts closed, showing only the header', () => {
    render(<Accordion header='What is an accordion?'>Supporting content</Accordion>)

    const header = screen.getByRole('button', { name: 'What is an accordion?' })
    expect(header).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Supporting content')).not.toBeInTheDocument()
  })

  it('opens and closes when the header is clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion header='What is an accordion?'>Supporting content</Accordion>)
    const header = screen.getByRole('button', { name: 'What is an accordion?' })

    await user.click(header)
    expect(header).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Supporting content')).toBeVisible()

    await user.click(header)
    expect(header).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Supporting content')).not.toBeInTheDocument()
  })

  it('toggles with Enter and Space', async () => {
    const user = userEvent.setup()
    render(<Accordion header='Question'>Answer</Accordion>)
    const header = screen.getByRole('button', { name: 'Question' })
    header.focus()

    await user.keyboard('{Enter}')
    expect(header).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard(' ')
    expect(header).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts open with defaultOpen', () => {
    render(<Accordion header='Question' defaultOpen>Answer</Accordion>)

    expect(screen.getByRole('button', { name: 'Question' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Answer')).toBeVisible()
  })

  it('links the header to the body it controls', async () => {
    const user = userEvent.setup()
    render(<Accordion header='Question'>Answer</Accordion>)
    const header = screen.getByRole('button', { name: 'Question' })

    await user.click(header)

    const body = document.getElementById(header.getAttribute('aria-controls')!)
    expect(body).toHaveTextContent('Answer')
  })

  it('renders custom header and body content', async () => {
    const user = userEvent.setup()
    render(
      <Accordion
        header={(
          <>
            <strong>Weekly Digest #42</strong>
            <span>5 articles</span>
          </>
        )}
      >
        <ol><li>Why teams are moving back to monoliths</li></ol>
      </Accordion>,
    )

    await user.click(screen.getByRole('button', { name: /Weekly Digest #42/ }))

    expect(screen.getByRole('listitem')).toHaveTextContent('Why teams are moving back to monoliths')
  })

  it('can be controlled with open and onOpenChange', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()
    const Controlled = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button type='button' onClick={() => setOpen(true)}>Expand</button>
          <Accordion
            header='Question'
            open={open}
            onOpenChange={value => { onOpenChange(value); setOpen(value) }}
          >
            Answer
          </Accordion>
        </>
      )
    }
    render(<Controlled />)

    await user.click(screen.getByRole('button', { name: 'Expand' }))
    expect(screen.getByRole('button', { name: 'Question' })).toHaveAttribute('aria-expanded', 'true')
    expect(onOpenChange).not.toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: 'Question' }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(screen.queryByText('Answer')).not.toBeInTheDocument()
  })

  it('does not open when disabled', async () => {
    const user = userEvent.setup()
    render(<Accordion header='Question' disabled>Answer</Accordion>)
    const header = screen.getByRole('button', { name: 'Question' })

    await user.click(header)

    expect(header).toBeDisabled()
    expect(header).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Answer')).not.toBeInTheDocument()
  })

  it('applies the custom class names', () => {
    const { container } = render(
      <Accordion header='Question' defaultOpen className='root' headerClassName='head' bodyClassName='content'>
        Answer
      </Accordion>,
    )

    expect(container.firstChild).toHaveClass('root')
    expect(screen.getByRole('button', { name: 'Question' })).toHaveClass('head')
    expect(screen.getByText('Answer')).toHaveClass('content')
  })
})

describe('AccordionGroup', () => {
  const header = (name: string) => screen.getByRole('button', { name })

  const renderGroup = (props: { closeOthers?: boolean } = {}) => render(
    <AccordionGroup {...props}>
      <Accordion header='First' defaultOpen>First body</Accordion>
      <Accordion header='Second'>Second body</Accordion>
      <Accordion header='Third'>Third body</Accordion>
    </AccordionGroup>,
  )

  it('opens the accordion with defaultOpen', () => {
    renderGroup()

    expect(header('First')).toHaveAttribute('aria-expanded', 'true')
    expect(header('Second')).toHaveAttribute('aria-expanded', 'false')
    expect(header('Third')).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the open accordion when another one opens', async () => {
    const user = userEvent.setup()
    renderGroup()

    await user.click(header('Second'))
    expect(header('First')).toHaveAttribute('aria-expanded', 'false')
    expect(header('Second')).toHaveAttribute('aria-expanded', 'true')

    await user.click(header('Third'))
    expect(header('Second')).toHaveAttribute('aria-expanded', 'false')
    expect(header('Third')).toHaveAttribute('aria-expanded', 'true')
    expect(screen.queryByText('Second body')).not.toBeInTheDocument()
  })

  it('lets the open accordion close, leaving all closed', async () => {
    const user = userEvent.setup()
    renderGroup()

    await user.click(header('First'))

    expect(screen.getAllByRole('button').every(button => button.getAttribute('aria-expanded') === 'false'))
      .toBe(true)
  })

  it('calls onOpenChange of the accordion that was clicked', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()
    render(
      <AccordionGroup>
        <Accordion header='First'>First body</Accordion>
        <Accordion header='Second' onOpenChange={onOpenChange}>Second body</Accordion>
      </AccordionGroup>,
    )

    await user.click(header('Second'))

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('keeps every accordion independent with closeOthers={false}', async () => {
    const user = userEvent.setup()
    renderGroup({ closeOthers: false })

    await user.click(header('Second'))

    expect(header('First')).toHaveAttribute('aria-expanded', 'true')
    expect(header('Second')).toHaveAttribute('aria-expanded', 'true')
  })

  it('leaves a controlled accordion out of the group', async () => {
    const user = userEvent.setup()
    render(
      <AccordionGroup>
        <Accordion header='Pinned' open>Pinned body</Accordion>
        <Accordion header='Other'>Other body</Accordion>
      </AccordionGroup>,
    )

    await user.click(header('Other'))

    expect(header('Pinned')).toHaveAttribute('aria-expanded', 'true')
    expect(header('Other')).toHaveAttribute('aria-expanded', 'true')
  })
})
