import type { Meta } from '@storybook/react'

import Upload from '../../components/Upload'

const meta: Meta = {
  title: 'Components/Data Input/Upload',
  component: Upload,
  parameters: {
    docs: {
      description: {
        component: 'The Upload component allows users to upload files. It consists of a file input and a button to trigger the file input.'
      },
    }
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

export const Normal = {
  args: {
    size: 'normal',
    placeholder: 'Upload file',
    buttonText: 'Browse',
    disabled: false,
  },
}

export const Large = {
  args: {
    size: 'large',
    placeholder: 'Upload file',
    buttonText: 'Browse',
    disabled: false,
    description: 'Max. 50mb',
  },
}
