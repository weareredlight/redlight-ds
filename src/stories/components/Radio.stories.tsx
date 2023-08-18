import { Meta, Story } from '@storybook/react'
import React from 'react'

import Radio, { Props } from '../../components/Radio'

const meta: Meta = {
  title: 'Components/Data Input/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: 'A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group.'
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
    disabled: {
      control: 'boolean'
    },
  }
}
export default meta

const Template: Story<Props> = args => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'radio',
  label: 'This is the label',
  description: 'This is the description',
  labelPosition: 'right'
}
