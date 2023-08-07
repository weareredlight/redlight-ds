import { Meta, Story } from '@storybook/react'
import React from 'react'

import Checkbox, { Props } from '../../components/Checkbox'

const meta: Meta = {
  title: 'Components/Data Input/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist.'
      },
    },
  },
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right']
      }
    },
    checked: {
      control: 'boolean'
    },
  }
}
export default meta

const Template: Story<Props> = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
  label: 'This is the label',
  description: 'This is the description',
  labelPosition: 'right'
}
