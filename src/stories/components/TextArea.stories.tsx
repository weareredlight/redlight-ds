import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import TextArea, { TextAreaProps } from '../../components/TextArea'

// Keeps the typed value, so the textarea can be edited and the "value" control still works
const Template = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value ?? '')
  useEffect(() => setValue(args.value ?? ''), [args.value])

  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => {
        setValue(e.target.value)
        args.onChange(e)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Text Area',
  component: TextArea,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
      },
    },
  },
  args: {
    id: 'textarea-example',
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
    onChange: fn(),
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['null', 'error', 'dirty', 'disabled'],
    },
    rows: {
      control: 'number',
    },
    maxLength: {
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
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    id: 'textarea-error-example',
    value: 'Whispering winds caress gentle souls, awakening dreams.',
    maxLength: 20,
    state: 'error',
    errorMsg: 'You have reached the character limit.',
  },

  parameters: {
    docs: {
      description: {
        story: 'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.',
      },
    },
  },
}

export const Dirty: Story = {
  args: {
    id: 'textarea-dirty-example',
    value: 'An edited comment.',
    state: 'dirty',
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    id: 'textarea-disabled-example',
    value: 'You cannot edit this.',
    state: 'disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="disabled"` the textarea cannot be edited.',
      },
    },
  },
}

export const FullWidth: Story = {
  args: {
    id: 'textarea-full-width-example',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The textarea can occupy the full width of the parent container.',
      },
    },
  },
}
