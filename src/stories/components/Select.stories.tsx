import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import Select, { SelectProps } from '../../components/Select'

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

// Keeps the selected value, so the select can be used and the "value" control still works
const Template = (args: SelectProps<Option>) => {
  const [selectedVal, setSelectedVal] = useState(args.value)
  useEffect(() => setSelectedVal(args.value), [args.value])

  return (
    <Select
      {...args}
      value={selectedVal}
      onChange={e => {
        setSelectedVal(e.target.value)
        args.onChange(e)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Select',
  component: Select<Option>,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'Select inputs present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.',
      },
    },
  },
  args: {
    id: 'select',
    name: 'select',
    label: 'This is the label',
    description: 'This is the description',
    placeholder: 'Please select an option',
    value: null,
    state: 'null',
    options: mockOptions,
    getLabel: option => option.label,
    getValue: option => option.value,
    onChange: fn(),
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['null', 'error', 'dirty', 'disabled'],
    },
    variant: {
      control: 'radio',
      options: ['null', 'simple'],
    },
    type: {
      control: 'radio',
      options: ['string', 'number'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select<Option>>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedVal, setSelectedVal] = useState(null)

return(
  <Select
    id='select'
    name='select'
    label='This is the label'
    description='This is the description'
    placeholder='Please select an option'
    onChange={e => setSelectedVal(e.target.value)}
    value={selectedVal}
    getLabel={option => option.label}
    getValue={option => option.value}
    options={myOptions}
  />
)
  `,
      },
    },
  },
}

export const Simple: Story = {
  args: {
    id: 'select-simple',
    label: 'Sort by',
    description: undefined,
    variant: 'simple',
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple selects can be used to filter or sort inside settings or tables.',
      },
    },
  },
}

export const EmptyOption: Story = {
  args: {
    id: 'select-empty-option',
    value: 'option1',
    emptyOption: 'None',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "emptyOption" to add an option that clears the selection. Picking it sends `null` to `onChange`.',
      },
    },
  },
}

export const Error: Story = {
  args: {
    id: 'select-error',
    state: 'error',
    errorMsg: 'Please select an option',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="error"` the field turns red and shows the `errorMsg` below it.',
      },
    },
  },
}

export const Dirty: Story = {
  args: {
    id: 'select-dirty',
    value: 'option2',
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
    id: 'select-disabled',
    value: 'option2',
    state: 'disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `state="disabled"` the select cannot be opened.',
      },
    },
  },
}

export const FullWidth: Story = {
  args: {
    id: 'select-full-width',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The select can occupy the full width of the parent container.',
      },
    },
  },
}
