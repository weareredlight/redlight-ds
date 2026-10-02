import { Meta, StoryObj } from '@storybook/react'

import Label from '../../components/shared/Label'

const meta = {
  title: 'Components/General/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'The label and description shown above form fields. Every input in the Design System uses it, and you can use it for your own fields too: set "id" to the id of the field it describes.',
      },
    },
  },
  args: {
    id: 'label-example',
    label: 'This is the label',
    description: 'This is the description',
  },
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    optional: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Label>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Optional: Story = {
  args: {
    optional: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Set "optional" to add "(optional)" after the label.',
      },
    },
  },
}

export const Align: Story = {
  args: {
    align: 'center',
  },
  parameters: {
    docs: {
      description: {
        story: 'The text can be aligned to the left, center or right.',
      },
    },
  },
}
