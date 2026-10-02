import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import type { TimePickerProps } from '../../components/TimePicker'

import TimePicker, { PickerTypes } from '../../components/TimePicker'

// Current local time, as HH:mm
const now = new Date().toTimeString().slice(0, 5)

// Keeps the selected time, so the picker can be used and the "value" control still works
const Template = (args: TimePickerProps) => {
  const [time, setTime] = useState(args.value)
  useEffect(() => setTime(args.value), [args.value])

  return (
    <TimePicker
      {...args}
      value={time}
      onChange={value => {
        setTime(String(value))
        args.onChange(value)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Time Picker',
  component: TimePicker,
  render: Template,
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
      description: {
        component: 'Time Picker is a component that allows users to select time or duration.'
      },
    },
  },
  args: {
    name: 'time-picker',
    label: 'Select a time',
    value: now,
    onChange: fn(),
  },
  argTypes: {
    type: {
      control: 'radio',
      options: Object.values(PickerTypes),
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  }
} satisfies Meta<typeof TimePicker>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time.',
      },
    },
  }
}

export const Duration: Story = {
  args: {
    label: 'Select a duration',
    type: PickerTypes.DURATION,
    value: '01:00',
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker component can be set to display a duration picker instead of a time picker.',
      },
    },
  }
}

export const WithDescription: Story = {
  args: {
    description: 'Opening time of the store',
  },
  parameters: {
    docs: {
      description: {
        story: 'A description can be shown under the label.',
      },
    },
  }
}

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker component can display an error message below the input field.',
      },
    },
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled Time Picker cannot be edited.',
      },
    },
  }
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker can occupy the full width of the parent container.',
      },
    },
  }
}
