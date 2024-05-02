import React from 'react'

import type { Meta } from '@storybook/react'

import alert, { ToastContainer } from '../../components/Alert'
import Button from '../../components/Button'
import { CenterOnCanvas } from '../decorators'

type AlertWrapperProps = {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
}

const meta = {
  title: 'Components/Overlays/Alert',
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'Feedback mechanism used to communicate important information to the user. It appears as a small, non-intrusive notification or "toaster" that appears on the screen, and provides information about an event or action that has occurred.'
      }
    },
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      }
    },
    type: {
      control: 'radio',
      options: ['success', 'error', 'info'],
      description: 'Select the function for the appropriate alert type',
      defaultValue: { summary: 'info' }
    },
    title: {
      control: 'text',
      description: 'The title of the alert',
    },
    description: {
      control: 'text',
      description: 'The description of the alert',
    },
  },
} satisfies Meta<AlertWrapperProps>
export default meta

const AlertWrapper = (args: AlertWrapperProps) => {
  const {
    id,
    type,
    title,
    description
  } = args
  const showAlert = () => {
    alert[type](
      title,
      String(description) || '',
      { containerId: id }
    )
  }
  return (
    <>
      <Button onClick={showAlert} variant={type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'}>
        {' '}
        Click me
      </Button>
      <ToastContainer containerId='info-alert' />
    </>
  )
}

/* ----------------------DEFAULT--------------------- */
export const Default = (args: AlertWrapperProps) => <AlertWrapper {...args} />
Default.args = {
  id: 'info-alert',
  type: 'info',
  title: 'Info Alert',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.'
}
Default.parameters = {
  docs: {
    source: {
      code: `
const MyComponent = () => {
  // Create a function to display the alert
  const showAlert = () => {
    // Use the function alert() then provide the type of the alert
    alert.${Default.args.type}(
      '${Default.args.title}',
      '${Default.args.description}',
      {
        // You can add custom options
        // To consult all the options available: fkhadra.github.io/react-toastify
      }
    )
  }
  return (
    {/* The function can be trigged by a button ore any other custom condition */}
    <Button onClick={showAlert} variant='secondary'> Click me</Button>
  )
}

__________________________________________________________________________________

import { ToastContainer } from '@weareredlight/design-system'

const App = () => {
  return (
    ...
    {/* This should be placed on the project root */}
    <ToastContainer />
    ...
  )
}
`
    }
  }
}
