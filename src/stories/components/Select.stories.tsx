import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import Select, { Props } from 'components/Select'

// Define a separate type for your options
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

const meta: Meta = {
  title: 'Components/Data Input/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select inputs present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.',
      },
    },
  },
  argTypes: {},
}
export default meta

const Template: Story<Props<Option>> = args => {
  const [selectedVal, setSelectedVal] = useState('')
  return (
    <Select
      {...args}
      options={mockOptions}
      value={selectedVal}
      onChange={e => setSelectedVal(e.target.value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'select',
  name: 'select',
  label: 'This is the label',
  description: 'This is the description',
  placeholder: 'Please select an option',
  getLabel: (option: Option) => option.label,
  getValue: (option: Option) => option.value,
}
Default.parameters = {
  docs: {
    source: {
      code: `
() => {
  const [selectedVal, setSelectedVal] = useState('')

  return(
    <Select
      id='select'
      name='select'
      label='This is the label'
      description='This is the description'
      placeholder='Please select an option'
      onChange={e => setSelectedVal(e.target.value)}
      value={selectedVal}
      getLabel={o => o.name}
      getValue={o => o.id}
      options={mockData}
    />
  )
}      
`
    }
  }
}
