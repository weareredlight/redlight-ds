import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import type { DialogProps } from '../../components/Dialog'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Dialog from '../../components/Dialog'
import { CenterOnCanvas } from '../decorators'

const buttonVariants = {
  confirm: 'primary',
  success: 'success',
  danger: 'danger',
} as const

// Keeps the open state, so the button opens the dialog and the "open" control still works
const Template = (args: DialogProps) => {
  const [openDialog, setOpenDialog] = useState(args.open)
  useEffect(() => setOpenDialog(args.open), [args.open])

  return (
    <>
      <Button
        onClick={() => setOpenDialog(true)}
        variant={buttonVariants[args.variant ?? 'confirm']}
      >
        Open Dialog
      </Button>
      <Dialog
        {...args}
        open={openDialog}
        closeFn={() => {
          setOpenDialog(false)
          args.closeFn()
        }}
      />
    </>
  )
}

const description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

const meta = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  render: Template,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input.'
      }
    },
  },
  args: {
    open: false,
    title: 'Dialog Title',
    description,
    variant: 'confirm',
    closeFn: fn(),
    onConfirm: fn(),
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
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Dialog>
export default meta

type Story = StoryObj<typeof meta>

/* ----------------------DEFAULT--------------------- */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic dialog with a title, description, and confirm button. It closes with the cancel button or the Escape key.',
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
        title='Dialog Title'
        description='${description}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      `
      }
    },
  },
}

/* ----------------------SUCCESS--------------------- */
export const Success: Story = {
  args: {
    title: 'Success Dialog Title',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.',
      },
      source: {
        code: `
<Dialog
  variant='success'
  open={openDialog}
  title='Success Dialog Title'
  description='${description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `
      }
    },
  },
}

/* ----------------------DANGER--------------------- */
export const Danger: Story = {
  args: {
    title: 'Danger Dialog Title',
    variant: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.',
      },
      source: {
        code: `
<Dialog
  variant='danger'
  open={openDialog}
  title='Danger Dialog Title'
  description='${description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `
      }
    },
  },
}

/* ----------------------CUSTOM CONTENT--------------------- */
export const CustomContent: Story = {
  args: {
    title: 'Custom Dialog Title',
    description: '',
    children: (
      <ExclamationTriangleIcon
        style={{ margin: '0 auto', color: 'var(--colors-neutral)' }}
        width={42}
        height={42}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context.',
      },
      source: {
        code: `
<Dialog
  open={openDialog}
  title='Custom Dialog Title'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `
      }
    },
  },
}

/* ----------------------CUSTOM CONTROLS--------------------- */
export const CustomControls: Story = {
  args: {
    title: 'Custom Controls Dialog Title',
    cancelButtonText: 'I want to go back',
    confirmButtonText: 'I agree',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog.',
      },
      source: {
        code: `
<Dialog
  open={openDialog}
  title='Custom Controls Dialog Title'
  description='${description}'
  confirmButtonText='I agree'
  cancelButtonText='I want to go back'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `
      }
    },
  },
}
