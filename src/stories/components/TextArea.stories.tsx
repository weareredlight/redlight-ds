import { Meta, Story } from '@storybook/react'
import React from 'react'

import TextArea, { Props } from 'components/TextArea'

const meta: Meta = {
  title: 'Components/Data Input/Text Area',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.'
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: 'radio',
        options: ['error', 'dirty', null],
        defaultValue: null
      }
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  }
}
export default meta

const Template: Story<Props> = args => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'texarea-example',
  placeholder: 'Write something...',
  label: 'This is the label',
  description: 'This is the description',
}

export const Error = Template.bind({})
Error.args = {
  id: 'texarea-error-example',
  value: 'Whispering winds caress gentle souls, awakening dreams.',
  placeholder: 'Write something...',
  label: 'This is the label',
  description: 'This is the description',
  maxLength: 20,
  state: 'error',
  errorMsg: 'You have reached the character limit.'
}
Error.parameters = {
  docs: {
    storyDescription: 'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.',
  }
}
