import { Meta, StoryObj } from '@storybook/react'

import Avatar from '../../components/Avatar'

const meta = {
  title: 'Components/General/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'An avatar is a visual representation of a user or entity.',
      },
    },
  },
  args: {
    name: 'Diogo Ribeiro',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['normal', 'small'],
    },
    displayLabel: {
      control: 'boolean',
    },
    online: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    description: 'Designer',
    online: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    url: 'https://picsum.photos/300/300',
    displayLabel: false,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'Represents the user/organization in a smaller scale.',
      }
    },
  },
}

export const CustomWidth: Story = {
  args: {
    url: 'https://picsum.photos/300/300',
    width: '96px',
  },

  parameters: {
    docs: {
      description: {
        story: 'Use the "width" property for any other size. The height always matches it.',
      }
    },
  },
}

export const Initials: Story = {
  args: {
    size: 'normal',
    displayLabel: false,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: "If you don't specify any image url it will display name initials."
      }
    },
  },
}

export const Label: Story = {
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'The name can be displayed if "displayLabel" is set to true.'
      }
    },
  },
}

export const Description: Story = {
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    description: 'Designer',
    displayLabel: true,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'You can also add a description to it.'
      }
    },
  },
}

export const Status: Story = {
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    online: true,
  },

  parameters: {
    docs: {
      description: {
        story: 'The user status can be online, with or without an image.'
      }
    },
  },
}
