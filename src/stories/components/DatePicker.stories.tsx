import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import DatePicker, { DatePickerProps } from '../../components/DatePicker'

const today = new Date().toISOString().split('T')[0]

// Keeps the selected date, so the picker can be used and the "value" control still works
const Template = (args: DatePickerProps) => {
  const [date, setDate] = useState(args.value)
  useEffect(() => setDate(args.value), [args.value])

  return (
    <DatePicker
      {...args}
      value={date}
      onChange={value => {
        setDate(value)
        args.onChange(value)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Date Picker',
  component: DatePicker,
  render: Template,
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
  args: {
    name: 'date-picker',
    label: 'Select a date',
    value: today,
    onChange: fn(),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DatePicker>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'By default, the Date Picker component displays a text input field with a calendar icon. Clicking on the calendar icon opens a calendar for selecting a date.',
      },
    },
  }
}

export const CustomLocale: Story = {
  args: {
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
  args: {
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled Date Picker cannot be opened or edited.',
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
        story: 'The Date Picker can occupy the full width of the parent container.',
      },
    },
  }
}
