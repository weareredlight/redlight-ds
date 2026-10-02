import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import type { ToggleProps } from '../../components/Toggle'
import type { Meta, StoryObj } from '@storybook/react'

import Toggle from '../../components/Toggle'

// Keeps the on/off state, so the toggle can be clicked and the "value" control still works.
// Toggle sends the new boolean in `e.target.value`.
const Template = (args: ToggleProps) => {
  const [value, setValue] = useState(args.value ?? false)
  useEffect(() => setValue(args.value ?? false), [args.value])

  return (
    <Toggle
      {...args}
      value={value}
      onChange={e => {
        setValue(Boolean(e.target.value))
        args.onChange(e)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Toggle',
  component: Toggle,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.',
      },
    },
  },
  args: {
    id: 'toggle-example',
    onChange: fn(),
  },
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    value: {
      control: 'boolean',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    state: {
      control: 'radio',
      options: ['null', 'error', 'dirty', 'disabled'],
    }
  },
} satisfies Meta<typeof Toggle>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const LabelPosition: Story = {
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

export const On: Story = {
  args: {
    id: 'toggle-on',
    label: 'This is the label',
    value: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "value" and "onChange" to control the toggle.',
      },
    },
  },
}

export const Dirty: Story = {
  args: {
    id: 'toggle-dirty',
    label: 'This is the label',
    value: true,
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
    id: 'toggle-disabled',
    label: 'This is the label',
    value: true,
    state: 'disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="disabled"` the toggle cannot be switched.',
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
