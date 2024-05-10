import type { Meta, StoryObj } from '@storybook/react'

import Pill from '../../components/Pill'

const meta = {
  title: 'Components/Displays/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component:
          'Small, fully rounded rectangle that can be used to visually display and select different options or categories. It is typically used to represent discrete values, such as different statuses or types of content. Each pill is typically labeled with a text label, can be removed by clicking on the cross icon to the right.',
      },
    },
  },
  args: {
    children: 'Pill Example',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'error', 'success'],
    },
  },
} satisfies Meta<typeof Pill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default pill.'
      }
    }
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label successful outcomes.'
      }
    }
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label errors.'
      }
    }
  }
}

export const Closable: Story = {
  args: {
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove?'),
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of pills you can delete them by pressing the cross button.'
      }
    }
  }
}

export const customCSS: Story = {
  args: {
    css: {
      backgroundColor: 'yellow',
      color: 'green'
    },
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom CSS to your pill in order to create your own variations.'
      }
    }
  }
}
