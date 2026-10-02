import type { Meta, StoryObj } from '@storybook/react'
import type { ToastOptions } from 'react-toastify'

import alert, { ToastContainer } from '../../components/Alert'
import Button from '../../components/Button'
import { CenterOnCanvas } from '../decorators'

type AlertWrapperProps = {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
  options?: ToastOptions
}

const buttonVariants = {
  success: 'success',
  error: 'danger',
  info: 'primary',
} as const

const AlertWrapper = ({
  id,
  type,
  title,
  description,
  options,
}: AlertWrapperProps) => (
  <>
    <Button
      variant={buttonVariants[type]}
      onClick={() => alert[type](title, description, { ...options, containerId: id })}
    >
      Click me
    </Button>
    {/* One container per story, so a toast only shows up once on the docs page */}
    <ToastContainer containerId={id} />
  </>
)

const alertSource = (args: AlertWrapperProps, optionsCode = '') => `
const MyComponent = () => {
  // Create a function to display the alert
  const showAlert = () => {
    // Use the function alert() then provide the type of the alert
    alert.${args.type}(
      '${args.title}',
      '${args.description}',${optionsCode ? `\n      ${optionsCode}` : ''}
    )
  }
  return (
    {/* The function can be triggered by a button or any other custom condition */}
    <Button onClick={showAlert}>Click me</Button>
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

const meta = {
  title: 'Components/Overlays/Alert',
  component: AlertWrapper,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'Feedback mechanism used to communicate important information to the user. It appears as a small, non-intrusive notification or "toaster" that appears on the screen, and provides information about an event or action that has occurred.'
      }
    },
  },
  args: {
    id: 'info-alert',
    type: 'info',
    title: 'Info Alert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.',
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
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: 'The title of the alert',
    },
    description: {
      control: 'text',
      description: 'The description of the alert',
    },
    options: {
      control: 'object',
      description: 'Any react-toastify option (fkhadra.github.io/react-toastify), merged over the defaults',
    },
  },
} satisfies Meta<typeof AlertWrapper>
export default meta

type Story = StoryObj<typeof meta>

/* ----------------------DEFAULT--------------------- */
export const Default: Story = {
  parameters: {
    docs: {
      source: { code: alertSource(meta.args) },
    },
  },
}

/* ----------------------SUCCESS--------------------- */
const successArgs: AlertWrapperProps = {
  id: 'success-alert',
  type: 'success',
  title: 'Saved',
  description: 'Your changes were saved.',
}

export const Success: Story = {
  args: successArgs,
  parameters: {
    docs: {
      description: {
        story: 'Use `alert.success` to confirm that an action completed.',
      },
      source: { code: alertSource(successArgs) },
    },
  },
}

/* ----------------------ERROR--------------------- */
const errorArgs: AlertWrapperProps = {
  id: 'error-alert',
  type: 'error',
  title: 'Something went wrong',
  description: 'We could not save your changes. Please try again.',
}

export const Error: Story = {
  args: errorArgs,
  parameters: {
    docs: {
      description: {
        story: 'Use `alert.error` when an action failed.',
      },
      source: { code: alertSource(errorArgs) },
    },
  },
}

/* ----------------------CUSTOM OPTIONS--------------------- */
const customOptionsArgs: AlertWrapperProps = {
  id: 'custom-options-alert',
  type: 'info',
  title: 'Custom options',
  description: 'This alert shows at the bottom and stays for 8 seconds.',
  options: { position: 'bottom-right', autoClose: 8000 },
}

export const CustomOptions: Story = {
  args: customOptionsArgs,
  parameters: {
    docs: {
      description: {
        story: 'The third argument takes any react-toastify option, such as `position` or `autoClose`.',
      },
      source: {
        code: alertSource(customOptionsArgs, "{ position: 'bottom-right', autoClose: 8000 }"),
      },
    },
  },
}
