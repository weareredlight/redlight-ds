import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import type { ModalProps } from '../../components/Modal'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import TextArea from '../../components/TextArea'
import { CenterOnCanvas } from '../decorators'

// Keeps the open state, so the button opens the modal and the "open" control still works
const Template = (args: ModalProps) => {
  const [openModal, setOpenModal] = useState(args.open)
  useEffect(() => setOpenModal(args.open), [args.open])

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal
        {...args}
        open={openModal}
        closeFn={() => {
          setOpenModal(false)
          args.closeFn()
        }}
      />
    </>
  )
}

const meta = {
  title: 'Components/Overlays/Modal',
  component: Modal,
  render: Template,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link.'
      }
    },
  },
  args: {
    open: false,
    title: 'Modal Title',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    closeFn: fn(),
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    renderTrigger: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Modal>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It closes with the close icon, the Escape key or a click outside.'
      },
      source: {
        code: `
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        closeFn={() => setOpenModal(false)}
      />
    </>
  )
}`
      }
    }
  }
}

export const CustomContent: Story = {
  args: {
    title: 'Custom Modal Title',
    description: '',
    children: (
      <form>
        <Input id='modal-name' type='text' label='Name' placeholder='Enter your name' onChange={() => { }} style={{ marginBottom: 'var(--space-sm)' }} />
        <Input id='modal-email' type='email' label='Email' placeholder='Enter your email' onChange={() => { }} style={{ marginBottom: 'var(--space-sm)' }} />
        <TextArea id='modal-message' label='Message' placeholder='Enter your message' onChange={() => { }} style={{ marginBottom: 'var(--space-sm)' }} />
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom content inside the modal by placing it inside the Modal component.'
      },
      source: {
        code: `
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        closeFn={() => setOpenModal(false)}
      >
        {/* Add custom content inside the modal */}
        <Form />
      </Modal>
    </>
  )
}`
      }
    }
  }
}

// The trigger lives inside the Modal, so it gets the right aria attributes
const TriggerTemplate = (args: ModalProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      {...args}
      open={openModal}
      renderTrigger={() => <Button onClick={() => setOpenModal(true)}>Open Modal</Button>}
      closeFn={() => {
        setOpenModal(false)
        args.closeFn()
      }}
    />
  )
}

export const WithTrigger: Story = {
  render: TriggerTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Pass the trigger through `renderTrigger` instead of rendering it next to the modal. It is wired to the modal for screen readers, but you still open the modal from its `onClick`.'
      },
      source: {
        code: `
() => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      open={openModal}
      title='Modal Title'
      renderTrigger={() => <Button onClick={() => setOpenModal(true)}>Open Modal</Button>}
      closeFn={() => setOpenModal(false)}
    />
  )
}`
      }
    }
  }
}
