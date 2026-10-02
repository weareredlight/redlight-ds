import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import GroupButtons, { GroupButtonsProps } from '../../components/GroupButtons'

// Keeps the selected button, so the group can be clicked and its control still works
const Template = (args: GroupButtonsProps) => {
  const [selectedOption, setSelectedOption] = useState(args.selectedButton)
  useEffect(() => setSelectedOption(args.selectedButton), [args.selectedButton])

  return (
    <GroupButtons
      {...args}
      selectedButton={selectedOption}
      onButtonSelect={option => {
        setSelectedOption(option)
        args.onButtonSelect(option)
      }}
    />
  )
}

const meta = {
  title: 'Components/General/Group Buttons',
  component: GroupButtons,
  render: Template,
  parameters: {
    docs: {
      description: {
        component: 'GroupButtons are a set of buttons that are grouped together. They are typically used to represent a set of actions that are related to each other.'
      },
    },
  },
  args: {
    buttons: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    selectedButton: 'option1',
    onButtonSelect: fn(),
  },
  argTypes: {
    selectedButton: {
      control: 'text',
    },
  },
} satisfies Meta<typeof GroupButtons>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The selected button uses the primary variant. Keep `selectedButton` in state and update it in `onButtonSelect`.'
      },
      source: {
        code: `
const [selected, setSelected] = useState('option1')

return (
  <GroupButtons
    buttons={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]}
    selectedButton={selected}
    onButtonSelect={setSelected}
  />
)
`
      },
    },
  },
}

export const ManyOptions: Story = {
  args: {
    buttons: [
      { label: 'Day', value: 'day' },
      { label: 'Week', value: 'week' },
      { label: 'Month', value: 'month' },
      { label: 'Year', value: 'year' },
    ],
    selectedButton: 'week',
  },
  parameters: {
    docs: {
      description: {
        story: 'A group can hold any number of options, for example to switch between views.'
      },
    },
  },
}
