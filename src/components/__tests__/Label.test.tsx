import { render, screen } from '@testing-library/react'

import Label from 'src/components/shared/Label'

describe('Label', () => {
  it('renders the label and the description', () => {
    render(<Label label='Email' description='We never share it' />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('We never share it')).toBeInTheDocument()
  })

  it('names the input whose id it receives', () => {
    render(
      <>
        <Label id='email' label='Email' />
        <input id='email' />
      </>,
    )

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
  })

  it('adds "(optional)" after the label when optional', () => {
    render(<Label label='Phone' optional />)

    expect(screen.getByText('Phone (optional)')).toBeInTheDocument()
  })

  it('does not mark the label as optional by default', () => {
    render(<Label label='Phone' />)

    expect(screen.queryByText(/optional/)).not.toBeInTheDocument()
  })

  it('is aligned left by default', () => {
    render(<Label label='Name' />)

    expect(screen.getByText('Name').closest('label')).toHaveClass('alignLeft')
  })

  it('applies the alignment class it receives', () => {
    render(<Label label='Name' align='center' />)

    expect(screen.getByText('Name').closest('label')).toHaveClass('alignCenter')
  })
})
