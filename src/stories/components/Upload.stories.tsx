import type { Meta, Story } from '@storybook/react'

import Upload, { Props } from 'components/Upload'

const meta: Meta = {
  title: 'Components/Data Input/Upload',
  component: Upload,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'large']
      }
    },
    disabled: {
      control: 'boolean'
    },
  }
}
export default meta

const Template: Story<Props> = args => <Upload {...args} />

export const Normal = Template.bind({})
Normal.args = {
  size: 'normal',
  placeholder: 'Upload file',
  buttonText: 'Browse',
  disabled: false
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  placeholder: 'Upload file',
  buttonText: 'Browse',
  disabled: false,
  description: 'Max. 50mb'
}
