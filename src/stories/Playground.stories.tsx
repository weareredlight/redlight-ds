import { useEffect } from 'react'

import type { Decorator, Meta, StoryObj } from '@storybook/react'

import App from '../../playground/App'
import { setupThemes, teardownThemes } from '../../playground/themes'

// The playground themes are global, so they only live while this story is open.
const WithPlaygroundThemes: Decorator = Story => {
  // During render, so App's first render already sees the saved theme
  setupThemes()
  useEffect(() => teardownThemes, [])
  return <Story />
}

const meta: Meta = {
  title: 'Playground',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [WithPlaygroundThemes],
}

export default meta

export const Playground: StoryObj = {
  render: () => <App />,
}
