import { Meta, StoryObj } from '@storybook/react'

import Avatar from '../../components/Avatar'

export default {
  title: 'Components/General/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'An avatar is a visual representation of a user or entity.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'small'],
      },
    },
    displayLabel: {
      control: 'boolean',
    },
    online: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    description: 'Desginer',
    online: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    name: 'Diogo Ribeiro',
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

export const Initials: Story = {
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
    displayLabel: false,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'If you dont specify any image url it will display name initials.'
      }
    },
  },
}

export const Label: Story = {
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    online: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'First name can be displayed if "displayLabel" is set to true.'
      }
    },
  },
}

export const Description: Story = {
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
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
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    online: true,
  },

  parameters: {
    docs: {
      description: {
        story: 'The user status can be online.'
      }
    },
  },
}
