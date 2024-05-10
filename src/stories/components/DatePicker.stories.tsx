import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import DatePicker, { DatePickerProps } from '../../components/DatePicker'

const meta = {
  title: 'Components/Data Input/Date Picker',
  component: DatePicker,
  decorators: [
    Story => (
      <div id='date-picker-wrapper' style={{ minHeight: '275px' }}>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
      description: {
        component: 'Date Picker is a component that allows users to select a date from a calendar.'
      },
    },
  },
} as Meta<typeof DatePicker>
export default meta

type Story = StoryObj<typeof meta>

const Template = (args: DatePickerProps) => {
  const [date, setDate] = useState<string | undefined>(new Date().toISOString().split('T')[0])
  return (
    <DatePicker
      {...args}
      value={date}
      onChange={value => setDate(value)}
    />
  )
}

export const Default: Story = {
  render: Template,
  args: {
    name: 'date-picker',
    label: 'Select a date',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, the Date Picker component displays a text input field with a calendar icon. Clicking on the calendar icon opens a calendar for selecting a date.',
      },
    },
  }
}

export const CustomTimezone: Story = {
  render: Template,
  args: {
    name: 'date-picker',
    label: 'Select a date',
    localeString: 'pt-PT',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can set a custom locale by providing a locale string to the `localeString` prop.',
      },
    },
  },
}

export const WeekSelector: Story = {
  render: Template,
  args: {
    name: 'date-picker',
    label: 'Select a week',
    isWeekSelector: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can highlight the selected week by setting the `isWeekSelector` prop to `true`.',
      },
    },
  },
}

export const WithError: Story = {
  args: {
    name: 'date-picker',
    label: 'Select a date',
    error: 'Invalid date format',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can display an error message by setting the `error` prop to a string.',
      },
    },
  }
}
