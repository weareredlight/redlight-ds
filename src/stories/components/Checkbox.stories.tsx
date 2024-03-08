import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '../../components/Checkbox'

export default {
  title: 'Components/Data Input/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist.',
      },
    },
  },
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const labelPosition: Story = {
  args: {
    id: 'checkbox-left',
    label: 'This is the label',
    labelPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.',
      },
    }
  }
}

export const Error: Story = {
  args: {
    id: 'toggle-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to check this option",
  },

  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    },
  },
}
