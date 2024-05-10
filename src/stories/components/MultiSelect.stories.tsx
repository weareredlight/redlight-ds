import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

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

const meta = {
  title: 'Components/Data Input/Multi Select',
  component: MultiSelect,
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
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['null', 'error', 'dirty', 'disabled'],
    },
  },
} as Meta<typeof MultiSelect>
export default meta

type Story = StoryObj<typeof meta>

const MultiSelectWrapper = (args: Story['args']) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2'])
  const { hasPills } = args as MultiSelectProps
  return (
    <MultiSelect
      name='multi-select'
      options={mockOptions}
      label='Select multiple options'
      value={selectedOptions}
      onChange={options => setSelectedOptions(options)}
      hasPills={hasPills}
      getLabel={value => mockOptions.find(option => option.value === value)?.label || ''}
    />
  )
}

export const Default = MultiSelectWrapper.bind({})
Default.args = {
  hasPills: false,
  state: 'null',
}
Default.parameters = {
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
}

export const WithPills = MultiSelectWrapper.bind({})
WithPills.args = {
  hasPills: true,
  state: 'null',
}
WithPills.parameters = {
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
}
