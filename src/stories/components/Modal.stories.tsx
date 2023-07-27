import { Meta, Story } from '@storybook/react'

import Modal, { Props } from 'components/Modal'

const meta: Meta = {
  title: 'Components/Overlays/Modal',
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 350,
      description: {
        component: 'Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link.'
      }
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    open: {
      control: 'boolean'
    },
  }
}
export default meta

const Template: Story<Props> = args => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Modal Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  // eslint-disable-next-line no-alert
  closeFn: () => alert('Modal closed')
}
