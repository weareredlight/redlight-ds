import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import TextArea from '../../components/TextArea'
import { CenterOnCanvas } from '../decorators'

const meta = {
  title: 'Components/Overlays/Modal',
  component: Modal,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link.'
      }
    },
  },
  argTypes: {
    renderTrigger: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Modal>
export default meta

type Story = StoryObj<typeof meta>

const ModalWrapper = (args: Story['args']) => {
  const [openModal, setOpenModal] = useState(false)
  const {
    title,
    description,
    children,
  } = args
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal
        open={openModal}
        title={title}
        description={description}
        closeFn={() => { setOpenModal(false) }}
      >
        {children}
      </Modal>
    </>
  )
}

export const Default: Story = ModalWrapper.bind({})
Default.args = {
  open: false,
  title: 'Modal Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
}
Default.parameters = {
  docs: {
    description: {
      story: 'The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link.'
    },
    source: {
      code: `
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)} variant='secondary'> Click me</Button>

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

export const CustomContent: Story = ModalWrapper.bind({})
CustomContent.args = {
  open: false,
  title: 'Custom Modal Title',
  description: '',
  children: (
    <form>
      <Input type='text' label='Name' placeholder='Enter your name' onChange={() => { }} css={{ marginBottom: '$sm' }} />
      <Input type='email' label='Email' placeholder='Enter your email' onChange={() => { }} css={{ marginBottom: '$sm' }} />
      <TextArea label='Message' placeholder='Enter your message' onChange={() => { }} css={{ marginBottom: '$sm' }} />
    </form>
  )
}
CustomContent.parameters = {
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
      <Button onClick={() => setOpenModal(true)} variant='secondary'> Click me</Button>

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
