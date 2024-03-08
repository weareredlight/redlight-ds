import { Meta, StoryObj } from '@storybook/react'

import TextArea from '../../components/TextArea'

export default {
  title: 'Components/Data Input/Text Area',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component:
          'The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['error', 'dirty', null],
    },
    rows: {
      control: 'number',
    },
    required: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    id: 'texarea-example',
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const Error: Story = {
  args: {
    id: 'texarea-error-example',
    value: 'Whispering winds caress gentle souls, awakening dreams.',
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
    maxLength: 20,
    state: 'error',
    errorMsg: 'You have reached the character limit.',
  },

  parameters: {
    docs: {
      storyDescription:
        'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.',
    },
  },
}
