import React from 'react'

import type { Meta, Story } from '@storybook/react'
import type { Props } from 'components/Toggle'

import Toggle from 'components/Toggle'

const meta: Meta = {
  title: 'Components/Data Input/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.'
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right']
    },
  }
}
export default meta

const Template: Story<Props> = args => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'toggle-example',
  label: 'This is the label',
  description: 'This is the description',
  labelPosition: 'right'
}

export const Error = Template.bind({})
Error.args = {
  id: 'toggle-example',
  label: 'This is the label',
  state: 'error',
  errorMsg: 'don\'t forget to toggle this option'
}
Error.parameters = {
  docs: {
    storyDescription: 'If there is an error, it will turn red and may also show a custom error message',
  }
}
