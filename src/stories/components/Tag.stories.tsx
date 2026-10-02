import { fn } from '@storybook/test'

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

export const Default: Story = {
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
    onClose: fn(),
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
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can also be used to indicate potential errors or dangerous actions. Error tags never show the close button, even when `onClose` is set.'
      }
    }
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled tags keep the close button but it cannot be clicked, so the user cannot delete them.'
      }
    }
  }
}
