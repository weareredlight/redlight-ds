import type { Meta, StoryObj } from '@storybook/react'

import Toggle from '../../components/Toggle'

export default {
  title: 'Components/Data Input/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    id: 'toggle-example',
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const labelPosition: Story = {
  args: {
    id: 'toggle-left',
    label: 'This is the label',
    labelPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.',
      },
    },
  },
}

export const Error: Story = {
  args: {
    id: 'toggle-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to toggle this option",
  },

  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    },
  },
}
