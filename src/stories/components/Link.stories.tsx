import { Meta, StoryObj } from '@storybook/react'

import Link from '../../components/Link'
import { darkBackgroundCanvas } from '../decorators'

export default {
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
      defaultValue: false,
    },
    darkBackground: {
      control: 'boolean',
      defaultValue: true,
    },
    size: {
      control: 'radio',
      options: ['regular', 'small'],
    },
    openInNewTab: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: 'redlight.dev',
  },
}

export const Small: Story = {
  args: {
    href: 'redlight.dev',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use smaller links for more subtle actions.'
      },
      source: {
        code: "<Link href='redlight.dev' size='small'>Text Link</Link>"
      },
    },
  },
}

export const Danger: Story = {
  args: {
    href: '/',
    danger: true,
    darkBackground: false,
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

export const DarkBackground: Story = {
  args: {
    href: 'redlight.dev',
    darkBackground: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'
      },
      source: {
        code: "<Link href='redlight.dev' darkBackground>Text Link</Link>",
      },
    },
  },
  decorators: [darkBackgroundCanvas],
}
