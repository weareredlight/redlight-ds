import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import GroupButtons from '../../components/GroupButtons'

const meta = {
  title: 'Components/General/Group Buttons',
  component: GroupButtons,
  parameters: {
    docs: {
      description: {
        component: 'GroupButtons are a set of buttons that are grouped together. They are typically used to represent a set of actions that are related to each other.'
      },
    },
  },
} as Meta<typeof GroupButtons>
export default meta

type Story = StoryObj<typeof meta>

const GroupButtonsWrapper = (args: Story['args']) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('option1')
  const { buttons } = args as { buttons: { label: string; value: string }[] }
  return (
    <GroupButtons
      buttons={buttons}
      selectedButton={selectedOption || ''}
      onButtonSelect={option => setSelectedOption(option)}
    />
  )
}

export const Default = GroupButtonsWrapper.bind({})
Default.args = {
  buttons: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
}
