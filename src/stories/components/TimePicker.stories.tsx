import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import type { TimePickerProps } from '../../components/TimePicker'

import TimePicker, { PickerTypes } from '../../components/TimePicker'

const meta = {
  title: 'Components/Data Input/Time Picker',
  component: TimePicker,
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
  argTypes: {
    type: {
      control: 'radio',
      options: Object.keys(PickerTypes).map(key => PickerTypes[key].toLowerCase()),
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  }
} as Meta<typeof TimePicker>
export default meta

type Story = StoryObj<typeof meta>

const Template = (args: TimePickerProps) => {
  const [time, setTime] = useState<string | undefined>(new Date().toISOString().split('T')[1].slice(0, 5))
  return (
    <TimePicker
      {...args}
      value={time}
      onChange={value => setTime(String(value))}
    />
  )
}

const DurationTemplate = (args: TimePickerProps) => {
  const [time, setTime] = useState<string | undefined>('01:00')
  return (
    <TimePicker
      {...args}
      value={time}
      onChange={value => setTime(String(value))}
    />
  )
}

export const Default: Story = {
  render: Template,
  args: {
    name: 'time-picker',
    label: 'Select a time',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time.',
      },
    },
  }
}

export const Duration: Story = {
  render: DurationTemplate,
  args: {
    name: 'time-picker',
    label: 'Select a duration',
    type: PickerTypes.DURATION,
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker component can be set to display a duration picker instead of a time picker.',
      },
    },
  }
}

export const WithError: Story = {
  args: {
    name: 'time-picker',
    label: 'Select a time',
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
