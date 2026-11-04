import { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { fn } from 'storybook/test'

import DatePicker, { DatePickerProps } from 'src/components/DatePicker'

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
        story: 'By default, the Date Picker component displays a text input field with a calendar icon. Clicking on the calendar icon opens a calendar for selecting a date. Its footer clears the date or picks today.',
      },
    },
  }
}

export const CustomLocale: Story = {
  args: {
    locale: 'pt-PT',
  },
  parameters: {
    docs: {
      description: {
        story: 'The field order and separators and the first day of the week follow the browser\'s locale. Set the `locale` prop to use another one. The month and weekday names stay in English, and the value is always `YYYY-MM-DD`.',
      },
    },
  },
}

export const LocalizedNames: Story = {
  args: {
    locale: 'pt-PT',
    localizeNames: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'With `localizeNames`, the month and weekday names are in the locale\'s language. Weekdays are cut to 3 letters, e.g. `seg`.',
      },
    },
  },
}

export const CustomFormat: Story = {
  args: {
    format: 'y-MM-dd',
  },
  parameters: {
    docs: {
      description: {
        story: 'The `format` prop overrides the locale\'s field order, with the Unicode tokens `d`, `dd`, `M`, `MM` and `y`.',
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
