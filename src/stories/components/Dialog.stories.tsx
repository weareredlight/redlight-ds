import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Dialog from '../../components/Dialog'
import { CenterOnCanvas } from '../decorators'

const meta = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input.'
      }
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ['confirm', 'success', 'danger'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    confirmButtonText: {
      control: 'text',
    },
    cancelButtonText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Dialog>
export default meta

type Story = StoryObj<typeof meta>

const DialogWrapper = (args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false)
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText,
  } = args
  return (
    <>
      <Button
        onClick={() => setOpenDialog(true)}
        variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}
      >
        Open Dialog
      </Button>
      <Dialog
        open={openDialog}
        title={title}
        description={description}
        variant={variant}
        confirmButtonText={confirmButtonText}
        cancelButtonText={cancelButtonText}
        onConfirm={() => setOpenDialog(false)}
        closeFn={() => setOpenDialog(false)}
      >
        {children}
      </Dialog>
    </>
  )
}

/* ----------------------DEFAULT--------------------- */
export const Default: Story = DialogWrapper.bind({})
Default.args = {
  open: false,
  title: 'Dialog Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  variant: 'confirm',
}
Default.parameters = {
  docs: {
    description: {
      story: 'A basic dialog with a title, description, and confirm button.',
    },
    source: {
      code: `
() => {
  // Create a state to control the dialog
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      {/* Button to open the dialog */}
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>

      {/* Dialog component */}
      <Dialog
        open={openDialog}
        title='${Default.args.title}'
        description='${Default.args.description}'
        closeFn={() => setOpenDialog(false)}
      />
    </>
  )
}
      `
    }
  },
}

/* ----------------------SUCCESS--------------------- */
export const Success: Story = DialogWrapper.bind({})
Success.args = {
  ...Default.args,
  title: 'Success Dialog Title',
  variant: 'success',
}
Success.parameters = {
  docs: {
    description: {
      story: 'Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.',
    },
    source: {
      code: `
<Dialog
  variant='${Success.args.variant}'
  open={openDialog}
  title='${Success.args.title}'
  description='${Success.args.description}'
  closeFn={() => setOpenDialog(false)}
/>
      `
    }
  },
}

/* ----------------------DANGER--------------------- */
export const Danger: Story = DialogWrapper.bind({})
Danger.args = {
  ...Default.args,
  title: 'Danger Dialog Title',
  variant: 'danger',
}
Danger.parameters = {
  docs: {
    description: {
      story: 'Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.',
    },
    source: {
      code: `
<Dialog
  variant='${Danger.args.variant}'
  open={openDialog}
  title='${Danger.args.title}'
  description='${Danger.args.description}'
  closeFn={() => setOpenDialog(false)}
/>
      `
    }
  },
}

/* ----------------------CUSTOM CONTENT--------------------- */
export const CustomContent: Story = DialogWrapper.bind({})
CustomContent.args = {
  ...Default.args,
  title: 'Custom Dialog Title',
  description: '',
  children: (
    <ExclamationTriangleIcon
      style={{ margin: '0 auto', color: '#72778E' }}
      width={42}
      height={42}
    />
  ),
}
CustomContent.parameters = {
  docs: {
    description: {
      story: 'Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context.',
    },
    source: {
      code: `
<Dialog
  open={openDialog}
  title='${CustomContent.args.title}'
  description=''
  closeFn={() => setOpenDialog(false)}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `
    }
  },
}

/* ----------------------CUSTOM CONTROLS--------------------- */
export const CustomControls: Story = DialogWrapper.bind({})
CustomControls.args = {
  ...Default.args,
  title: 'Custom Controls Dialog Title',
  cancelButtonText: 'I want to go back',
  confirmButtonText: 'I agree',
}
CustomControls.parameters = {
  docs: {
    description: {
      story: 'You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog.',
    },
    source: {
      code: `
<Dialog
  open={openDialog}
  title='${CustomControls.args.title}'
  description='${CustomControls.args.description}'
  confirmButtonText='${CustomControls.args.confirmButtonText}'
  cancelButtonText='${CustomControls.args.cancelButtonText}'
  closeFn={() => setOpenDialog(false)}
/>
      `
    }
  },
}
