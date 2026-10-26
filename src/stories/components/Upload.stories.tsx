import { fn } from 'storybook/test'

import type { Meta, StoryObj } from '@storybook/react-vite'

import Upload from 'src/components/Upload'

const meta = {
  title: 'Components/Data Input/Upload',
  component: Upload,
  parameters: {
    docs: {
      description: {
        component: 'The Upload component allows users to upload files. It consists of a file input and a button to trigger the file input.'
      },
    }
  },
  args: {
    id: 'upload-example',
    placeholder: 'Upload file',
    buttonText: 'Browse',
    disabled: false,
    onUpload: fn(),
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['normal', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    defaultFile: {
      control: false,
    },
  },
} satisfies Meta<typeof Upload>
export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Large: Story = {
  args: {
    size: 'large',
    id: 'large-upload-example',
    description: 'Max. 50mb',
  },
  parameters: {
    docs: {
      description: {
        story: 'The large size has no button: the whole area opens the file picker.',
      },
    },
  },
}

export const WithDefaultFile: Story = {
  args: {
    id: 'default-file-upload-example',
    defaultFile: new File(['Hello'], 'report.pdf', { type: 'application/pdf' }),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "defaultFile" to show a file that was uploaded before.',
      },
      source: {
        code: "<Upload id='report' placeholder='Upload file' buttonText='Browse' defaultFile={savedFile} onUpload={uploadFile} />",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled-upload-example',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled Upload cannot open the file picker.',
      },
    },
  },
}

export const FullWidth: Story = {
  args: {
    id: 'full-width-upload-example',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The Upload can occupy the full width of the parent container.',
      },
    },
  },
}
