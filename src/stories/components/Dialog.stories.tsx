/* eslint-disable no-alert */
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Meta, Story } from '@storybook/react'

import Dialog, { Props } from 'components/Dialog'

const meta: Meta = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 350,
      description: {
        component: 'A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input.'
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
    variant: {
      control: {
        select: 'radio',
        options: ['confirm', 'success', 'danger']
      }
    },
  }
}
export default meta

const Template: Story<Props> = args => <Dialog {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Dialog Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  closeFn: () => alert('Dialog closed'),
  onConfirm: () => alert('Action confirmed'),
}

export const aSuccess = Template.bind({})
aSuccess.args = {
  open: true,
  title: 'Success Dialog Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  closeFn: () => alert('Dialog closed'),
  onConfirm: () => alert('Action confirmed'),
  variant: 'success',
  actionText: 'Save'
}
aSuccess.parameters = {
  docs: {
    storyDescription: 'Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.'
  }
}
aSuccess.story = {
  name: 'Success',
}

export const bDanger = Template.bind({})
bDanger.args = {
  open: true,
  title: 'Danger Dialog Title',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  closeFn: () => alert('Dialog closed'),
  onConfirm: () => alert('Action confirmed'),
  variant: 'danger',
  actionText: 'Delete'
}
bDanger.parameters = {
  docs: {
    storyDescription: 'Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.',
  }
}
bDanger.story = {
  name: 'Danger',
}

export const cCustom = Template.bind({})
cCustom.args = {
  open: true,
  title: 'Custom Dialog Title',
  closeFn: () => alert('Dialog closed'),
  onConfirm: () => alert('Action confirmed'),
  children: (
    <ExclamationTriangleIcon
      style={{ margin: '0 auto', color: '#72778E' }}
      width={42}
      height={42}
    />
  )
}
cCustom.parameters = {
  docs: {
    storyDescription: 'Flexible component that allows users to create unique and personalized dialogs tailored to specific use cases, providing a versatile solution for displaying context-specific information or gathering user input.',
    source: {
      code: `
<Dialog
  closeFn={() => {}}
  onConfirm={function noRefCheck() {}}
  open
  title="Custom Dialog Title"
>
  <Icon /> // or any other custom content
</Dialog>    
`
    }
  }
}
cCustom.story = {
  name: 'Custom Content',
}
