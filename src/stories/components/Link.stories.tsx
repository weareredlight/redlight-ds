import { Meta, StoryObj } from '@storybook/react'

import Link from '../../components/Link'
import { DarkBackgroundCanvas } from '../decorators'

const meta = {
  title: 'Components/General/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.',
      },
    },
  },
  args: {
    href: 'https://redlight.dev',
    children: 'Text Link',
    danger: false,
    darkBackground: false,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    danger: {
      control: 'boolean',
    },
    darkBackground: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['regular', 'small'],
    },
    openInNewTab: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Link>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use smaller links for more subtle actions.'
      },
      source: {
        code: "<Link href='https://redlight.dev' size='small'>Text Link</Link>"
      },
    },
  },
}

export const Danger: Story = {
  args: {
    href: '/',
    danger: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger links can be used for actions that can result in potentially dangerous actions.'
      },
      source: {
        code: "<Link href='/' danger>Text Link</Link>"
      },
    },
  },
}

export const SameTab: Story = {
  args: {
    // A hash, so clicking it here doesn't navigate the Storybook frame away
    href: '#same-tab',
    openInNewTab: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Links open in a new tab by default. Set "openInNewTab" to false to open them in the same tab, for example for links inside your own app.'
      },
      source: {
        code: "<Link href='/settings' openInNewTab={false}>Text Link</Link>"
      },
    },
  },
}

export const DarkBackground: Story = {
  args: {
    darkBackground: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'
      },
      source: {
        code: "<Link href='https://redlight.dev' darkBackground>Text Link</Link>",
      },
    },
  },
  decorators: [DarkBackgroundCanvas],
}
