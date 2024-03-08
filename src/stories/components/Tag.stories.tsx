import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Tag, { Props } from '../../components/Tag'

export default {
  title: 'Components/Displays/Tag',
  component: Tag,
  render: (args: Props) => <Tag {...args}>Tag Example</Tag>,
  parameters: {
    docs: {
      description: {
        component: 'Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed.'
      },
    },
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

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    variant: 'default',
    onClose: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Tag>Tag Example</Tag>
  `
      }
    }
  },
  storyName: 'Default',
}

export const Closable: Story = {
  args: {
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove?')
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Tag closable onClose={updateTags()}>Tag Example</Tag>
  `
      }
    }
  },
  storyName: 'Closable',
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Tag variant='error'>Tag Example</Tag>
  `
      }
    }
  },
  storyName: 'Error',
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Tag disabled>Tag Example</Tag>
  `
      }
    }
  },
  storyName: 'Disabled',
}
