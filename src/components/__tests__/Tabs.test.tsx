import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tabs from 'src/components/Tabs'

const renderTabs = () => render(
  <Tabs tabs={[{ label: 'Profile' }, { label: 'Billing' }, { label: 'Security' }]}>
    <p>Profile settings</p>
    <p>Billing settings</p>
    <p>Security settings</p>
  </Tabs>,
)

describe('Tabs', () => {
  it('renders one tab per label', () => {
    renderTabs()

    const tabs = screen.getAllByRole('tab')
    expect(tabs.map(tab => tab.textContent)).toEqual(['Profile', 'Billing', 'Security'])
  })

  it('selects the first tab and shows its panel by default', () => {
    renderTabs()

    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Profile' })).toHaveTextContent('Profile settings')
    expect(screen.queryByText('Billing settings')).not.toBeInTheDocument()
  })

  it('shows the matching panel when a tab is clicked', async () => {
    const user = userEvent.setup()
    renderTabs()

    await user.click(screen.getByRole('tab', { name: 'Billing' }))

    expect(screen.getByRole('tab', { name: 'Billing' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Billing' })).toHaveTextContent('Billing settings')
    expect(screen.queryByText('Profile settings')).not.toBeInTheDocument()
  })

  it('moves between tabs with the arrow keys', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByRole('tab', { name: 'Profile' }))

    await user.keyboard('{ArrowRight}')

    const billing = screen.getByRole('tab', { name: 'Billing' })
    expect(billing).toHaveFocus()
    expect(billing).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Billing' })).toHaveTextContent('Billing settings')
  })

  it('wraps around from the first tab to the last with ArrowLeft', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByRole('tab', { name: 'Profile' }))

    await user.keyboard('{ArrowLeft}')

    expect(screen.getByRole('tab', { name: 'Security' })).toHaveFocus()
    expect(screen.getByRole('tabpanel', { name: 'Security' })).toHaveTextContent('Security settings')
  })

  it('accepts a single child as the only panel', () => {
    render(<Tabs tabs={[{ label: 'Only' }]}><p>Only content</p></Tabs>)

    expect(screen.getByRole('tabpanel', { name: 'Only' })).toHaveTextContent('Only content')
  })
})
