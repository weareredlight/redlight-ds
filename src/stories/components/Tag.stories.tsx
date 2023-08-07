import { Meta, Story } from '@storybook/react'
import React from 'react'

import Tag, { Props } from '../../components/Tag'

const meta: Meta = {
  title: 'Components/Displays/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed.'
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'error']
      }
    },
    closable: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
  }
}
export default meta

const Template: Story<Props> = args => <Tag {...args}>Tag Example</Tag>

export const aDefault = Template.bind({})
aDefault.args = {
  variant: 'default',
  closable: false,
  disabled: false,
}
aDefault.parameters = {
  docs: {
    source: {
      code: `
<Tag>Tag Example</Tag>
`
    }
  }
}
aDefault.story = {
  name: 'Default',
}

export const bClosable = Template.bind({})
bClosable.args = {
  closable: true,
  // eslint-disable-next-line no-alert
  onClose: () => alert('Are you sure you want to remove?')
}
bClosable.parameters = {
  docs: {
    storyDescription: 'When you have a group of tags you can delete them by pressing the cross button.',
    source: {
      code: `
<Tag closable onClose={updateTags()}>Tag Example</Tag>
`
    }
  }
}
bClosable.story = {
  name: 'Closable',
}

export const cError = Template.bind({})
cError.args = {
  variant: 'error',
}
cError.parameters = {
  docs: {
    storyDescription: 'Tags can also be used to indicate potential errors or dangerous actions.',
    source: {
      code: `
<Tag variant='error'>Tag Example</Tag>
`
    }
  }
}
cError.story = {
  name: 'Error',
}

export const dDisabled = Template.bind({})
dDisabled.args = {
  disabled: true,
  closable: true
}
dDisabled.parameters = {
  docs: {
    storyDescription: 'You can prevent the user from deleting tags.',
    source: {
      code: `
<Tag closable disabled>Tag Example</Tag>
`
    }
  }
}
dDisabled.story = {
  name: 'Disabled',
}
