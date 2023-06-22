import { Meta, Story } from '@storybook/react'
import React from 'react'

import Avatar, { Props } from 'components/Avatar'

const meta: Meta = {
  title: 'Components/General/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'An avatar is a visual representation of a user or entity.'
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'small']
      }
    },
    displayLabel: {
      control: 'boolean'
    },
    online: {
      control: 'boolean'
    },
  },
}
export default meta

const Template: Story<Props> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'normal',
  name: 'Diogo Ribeiro',
  url: 'https://picsum.photos/300/300',
  displayLabel: true,
  description: 'Desginer',
  online: true,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  name: 'Diogo Ribeiro',
  url: 'https://picsum.photos/300/300',
  displayLabel: false,
  online: false,
}
Small.parameters = {
  docs: {
    storyDescription: 'Represents the user/organization in a smaller scale.',
  },
}

export const Initials = Template.bind({})
Initials.args = {
  size: 'normal',
  name: 'Diogo Ribeiro',
  displayLabel: false,
  online: false,
}
Initials.parameters = {
  docs: {
    storyDescription: 'If you dont specify any image url it will display name initials.',
  },
}

export const Label = Template.bind({})
Label.args = {
  size: 'normal',
  name: 'Diogo Ribeiro',
  url: 'https://picsum.photos/300/300',
  displayLabel: true,
  online: false,
}
Label.parameters = {
  docs: {
    storyDescription: 'First name can be displayed if "displayLabel" is set to true.',
  },
}

export const Description = Template.bind({})
Description.args = {
  size: 'normal',
  name: 'Diogo Ribeiro',
  url: 'https://picsum.photos/300/300',
  description: 'Designer',
  displayLabel: true,
  online: false,
}
Description.parameters = {
  docs: {
    storyDescription: 'You can also add a description to it.',
  },
}

export const Status = Template.bind({})
Status.args = {
  size: 'normal',
  name: 'Diogo Ribeiro',
  url: 'https://picsum.photos/300/300',
  online: true,
}
Status.parameters = {
  docs: {
    storyDescription: 'The user status can be online.',
  },
}
