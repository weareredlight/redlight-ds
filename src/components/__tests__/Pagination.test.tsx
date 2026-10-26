import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from '../Pagination'

const getArrowButtons = () => ({
  previous: screen.getByRole('button', { name: 'Previous page' }),
  next: screen.getByRole('button', { name: 'Next page' }),
})

describe('Pagination', () => {
  it('calls onPageChange with the clicked page number', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination totalPages={5} onPageChange={onPageChange} />)

    await user.click(screen.getByRole('button', { name: 'Page 3' }))

    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it('does not call onPageChange when the current page is clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />)

    await user.click(screen.getByRole('button', { name: 'Page 2' }))

    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('goes to the previous and next page with the arrow buttons', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />)

    await user.click(getArrowButtons().next)
    await user.click(getArrowButtons().previous)

    expect(onPageChange).toHaveBeenNthCalledWith(1, 4)
    expect(onPageChange).toHaveBeenNthCalledWith(2, 3)
  })

  it('disables the previous button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />)

    const { previous, next } = getArrowButtons()
    expect(previous).toBeDisabled()
    expect(next).toBeEnabled()
  })

  it('disables the next button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />)

    const { previous, next } = getArrowButtons()
    expect(previous).toBeEnabled()
    expect(next).toBeDisabled()
  })

  it('shows the last page after an ellipsis when there are many pages', () => {
    render(<Pagination totalPages={10} onPageChange={jest.fn()} />)

    const pages = screen.getAllByRole('button', { name: /^Page/ }).map(button => button.textContent)
    expect(pages).toEqual(['1', '2', '3', '4', '10'])
    expect(screen.getByText('...')).toBeInTheDocument()
  })

  it('does not make the ellipsis a button, because there is nothing to click', () => {
    render(<Pagination totalPages={10} onPageChange={jest.fn()} />)

    expect(screen.queryByRole('button', { name: '...' })).not.toBeInTheDocument()
  })

  it('marks the current page for screen readers', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Page 3' })).not.toHaveAttribute('aria-current')
  })

  it('follows currentPage when the parent changes it', () => {
    const { rerender } = render(
      <Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />,
    )

    rerender(<Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />)

    expect(getArrowButtons().previous).toBeDisabled()
  })
})
