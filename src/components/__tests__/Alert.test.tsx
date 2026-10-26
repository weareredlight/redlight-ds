import { render, screen } from '@testing-library/react'

import alert, { ToastContainer } from '../Alert'

describe('alert', () => {
  it('success shows a toast with the title and the description', async () => {
    render(<ToastContainer />)

    alert.success('Saved', 'Your changes were saved')

    expect(await screen.findByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Your changes were saved')).toBeInTheDocument()
  })

  it('error shows a toast with the title and the description', async () => {
    render(<ToastContainer />)

    alert.error('Failed', 'Try again later')

    expect(await screen.findByText('Failed')).toBeInTheDocument()
    expect(screen.getByText('Try again later')).toBeInTheDocument()
  })

  it('info shows a toast with just a title', async () => {
    render(<ToastContainer />)

    alert.info('Heads up')

    expect(await screen.findByText('Heads up')).toBeInTheDocument()
  })

  it('announces the toast to screen readers', async () => {
    render(<ToastContainer />)

    alert.success('Saved')

    expect(await screen.findByRole('alert')).toHaveTextContent('Saved')
  })

  it('returns the toast id, so the caller can dismiss or update it later', async () => {
    render(<ToastContainer />)

    const id = alert.info('Heads up', undefined, { toastId: 'custom-id' })

    expect(id).toBe('custom-id')
    expect(await screen.findByText('Heads up')).toBeInTheDocument()
  })
})
