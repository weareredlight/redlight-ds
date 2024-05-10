import type { Meta, StoryObj } from '@storybook/react'

import Tag from '../../components/Tag'

const meta = {
  title: 'Components/Displays/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed.'
      },
    },
  },
  args: {
    children: 'Tag Example',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'error']
    },
    disabled: {
      control: 'boolean'
    },
  }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default tag.'
      }
    }
  }
}

export const Closable: Story = {
  args: {
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove this tag?')
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of tags you can delete them by pressing the cross button.'
      }
    }
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can also be used to indicate potential errors or dangerous actions.'
      }
    }
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can prevent the user from deleting tags.'
      }
    }
  }
}
