import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import MultiSelect, { MultiSelectProps } from '../../components/MultiSelect'

type Option = {
  value: string
  label: string
}

const mockOptions: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
]

// Keeps the selected options, so the select can be used and the "value" control still works
const Template = (args: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState(args.value)
  useEffect(() => setSelectedOptions(args.value), [args.value])

  return (
    <MultiSelect
      {...args}
      value={selectedOptions}
      onChange={options => {
        setSelectedOptions(options)
        args.onChange(options)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Multi Select',
  component: MultiSelect,
  render: Template,
  decorators: [
    Story => (
      <div style={{ minHeight: '200px' }}>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        excludeDecorators: true,
      },
      description: {
        component: 'MultiSelect is a dropdown that allows users to select or search for multiple options.'
      },
    },
  },
  args: {
    name: 'multi-select',
    label: 'Select multiple options',
    options: mockOptions,
    value: ['option2'],
    getLabel: value => mockOptions.find(option => option.value === value)?.label || '',
    onChange: fn(),
    hasPills: false,
    state: 'null',
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['null', 'error', 'dirty', 'disabled'],
    },
    hasPills: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof MultiSelect>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default MultiSelect that has an indicator on the right side of the input field to indicate the number of selected options.'
      },
      source: {
        code: `
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2'])

return (
  <MultiSelect
    name='multi-select'
    options={myOptions}
    label='Select multiple options'
    value={selectedOptions}
    onChange={options => setSelectedOptions(options)}
    getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
  />
)
`
      }
    },
  },
}

export const WithPills: Story = {
  args: {
    hasPills: true,
    value: ['option2', 'option4'],
  },
  parameters: {
    docs: {
      description: {
        story: 'It can also be displayed with pills to show the selected options by using the `hasPills` prop.'
      },
      source: {
        code: `
<MultiSelect
  hasPills
  name='multi-select'
  options={myOptions}
  label='Select multiple options'
  value={selectedOptions}
  onChange={options => setSelectedOptions(options)}
  getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
/>
`
      }
    },
  },
}

export const Placeholder: Story = {
  args: {
    value: [],
    placeholder: 'Pick some options...',
  },
  parameters: {
    docs: {
      description: {
        story: 'The placeholder shows while nothing is selected.'
      },
    },
  },
}

export const Error: Story = {
  args: {
    state: 'error',
    errorMsg: 'Select at least two options',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="error"` the field turns red and shows the `errorMsg` below it.'
      },
    },
  },
}

export const Dirty: Story = {
  args: {
    state: 'dirty',
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="disabled"` the options cannot be changed.'
      },
    },
  },
}
