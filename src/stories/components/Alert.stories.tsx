import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import { CenterOnCanvas } from '../decorators'

import { alert } from 'components/Alert'
import Button from 'components/Button'

const meta: Meta = {
  title: 'Components/Overlays/Alert',
  parameters: {
    inlineStories: false,
    iframeHeight: 350,
    docs: {
      description: {
        component: 'Feedback mechanism used to communicate important information to the user. It appears as a small, non-intrusive notification or "toaster" that appears on the screen, and provides information about an event or action that has occurred.'
      }
    },
  },
  decorators: [CenterOnCanvas],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['info', 'success', 'error']
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  }
}
export default meta

const Template: Story = () => {
  // Create a function to display the alert
  const showAlert = () => {
    // Use the function alert() then provide the type of the alert
    // alert.type(title: string, description?: string)
    alert.info(
      'Info Alert',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.',
    )
  }
  return (
    <>
      {/* The function can be trigged by a button ore any other custom condition */}
      <Button onClick={showAlert} variant='secondary'> Click me</Button>
      {/* This should be placed on the project root */}
      <ToastContainer />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  type: 'info',
  title: 'Info Alert',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.',
}

export const Error: Story = () => {
  const showAlert = () => {
    alert.error('Error Alert', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.')
  }
  return (
    <Button onClick={showAlert} variant='danger'>Delete</Button>
  )
}
Error.parameters = {
  docs: {
    storyDescription: 'Used to communicate that an error or problem has occurred.',
  }
}

export const Success: Story = () => {
  const showAlert = () => {
    alert.success('Success Alert', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.')
  }
  return (
    <Button onClick={showAlert} variant='success'>Save</Button>
  )
}
Success.parameters = {
  docs: {
    storyDescription: 'Used to communicate that an action was completed successfully.',
  }
}

export const ExtraOptions: Story = () => {
  const showAlert = () => {
    alert.info(
      'Info Alert',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.',
      {
        // You can add custom options
        // To consult all the options available: fkhadra.github.io/react-toastify
        position: 'bottom-left',
        hideProgressBar: true,
        draggable: false
      }
    )
  }
  return (
    <Button onClick={showAlert} variant='neutral'>Click me</Button>
  )
}
ExtraOptions.parameters = {
  docs: {
    storyDescription: 'You can provide custom options from the react-toastify package.'
  }
}
