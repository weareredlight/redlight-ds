import { Meta, StoryObj } from '@storybook/react'

import Radio from '../../components/Radio'

export default {
  title: 'Components/Data Input/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group.',
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
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    id: 'radio-default',
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const labelPosition: Story = {
  args: {
    id: 'radio-left',
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
