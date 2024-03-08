import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import Pill, { Props } from '../../components/Pill'

const meta: Meta = {
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
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'error', 'success'],
      },
    },
  },
}
export default meta

const Template: StoryFn<Props> = args => <Pill {...args}>Pill Example</Pill>

export const aDefault = {
  render: Template,
  name: 'Default',
}

export const bSuccess = {
  render: Template,

  args: {
    variant: 'success',
  },

  parameters: {
    docs: {
      storyDescription: 'This variation can label successful outcomes.',
      source: {
        code: `
  <Pill
    variant='success'
  >
    Pill Example
  </Pill>
  `,
      },
    },
  },

  name: 'Success',
}

export const cError = {
  render: Template,

  args: {
    variant: 'error',
  },

  parameters: {
    docs: {
      storyDescription: 'This variation can label error outcomes.',
      source: {
        code: `
  <Pill
    variant='error'
  >
    Pill Example
  </Pill>
  `,
      },
    },
  },

  name: 'Error',
}

export const dClosable = {
  render: Template,

  args: {
    variant: 'default',
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove?'),
  },

  parameters: {
    docs: {
      storyDescription:
        'When you have a group of pills you can delete them by pressing the cross button.',
      source: {
        code: `
  <Pill
    onClose={updatePills()}
  >
    Pill Example
  </Pill>
  `,
      },
    },
  },

  name: 'Closable',
}

export const eCustomColors = {
  render: Template,

  args: {
    css: {
      backgroundColor: 'yellow',
      color: 'green',
    },
  },

  parameters: {
    docs: {
      storyDescription:
        'You can add custom CSS to your pill in order to create your own variations.',
      source: {
        code: `
  <Pill
    css={
      {
        backgroundColor:'yellow',
        color:'green'
      }
    }
  >
    Pill Example
  </Pill>
  `,
      },
    },
  },

  name: 'Custom Colors',
}
