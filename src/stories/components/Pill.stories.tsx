import { Meta, Story } from '@storybook/react'
import React from 'react'

import Pill, { Props } from 'components/Pill'

const meta: Meta = {
  title: 'Components/Displays/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: 'Small, fully rounded rectangle that can be used to visually display and select different options or categories. It is typically used to represent discrete values, such as different statuses or types of content. Each pill is typically labeled with a text label, can be removed by clicking on the cross icon to the right.'
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'error', 'success']
      }
    },
    closable: {
      control: 'boolean',
      defaultValue: false
    },
  }
}
export default meta

const Template: Story<Props> = args => <Pill {...args}>Pill Example</Pill>

export const aDefault = Template.bind({})
aDefault.story = {
  name: 'Default',
}
aDefault.story = {
  name: 'Default',
}

export const bSuccess = Template.bind({})
bSuccess.args = {
  variant: 'success',
}
bSuccess.parameters = {
  docs: {
    storyDescription: 'This variation can label successful outcomes.',
    source: {
      code: `
<Pill
  variant='success'
>
  Pill Example
</Pill>
`
    }
  }
}
bSuccess.story = {
  name: 'Success',
}

export const cError = Template.bind({})
cError.args = {
  variant: 'error',
}
cError.parameters = {
  docs: {
    storyDescription: 'This variation can label error outcomes.',
    source: {
      code: `
<Pill
  variant='error'
>
  Pill Example
</Pill>
`
    }
  }
}
cError.story = {
  name: 'Error',
}

export const dClosable = Template.bind({})
dClosable.args = {
  variant: 'default',
  closable: true,
  // eslint-disable-next-line no-alert
  onClose: () => alert('Are you sure you want to remove?')
}
dClosable.parameters = {
  docs: {
    storyDescription: 'When you have a group of pills you can delete them by pressing the cross button.',
    source: {
      code: `
<Pill
  closable
  onClose={updatePills()}
>
  Pill Example
</Pill>
`
    }
  }
}
dClosable.story = {
  name: 'Closable',
}

export const eCustomColors = Template.bind({})
eCustomColors.args = {
  css: {
    backgroundColor: 'yellow',
    color: 'green'
  }
}
eCustomColors.parameters = {
  docs: {
    storyDescription: 'You can add custom CSS to your pill in order to create your own variations.',
    source: {
      code: `
<Pill
  css={
    {
      backgroundColor:'yellow',
      color:'green'
    }
  }
>
  Pill Example
</Pill>
`
    }
  }
}
eCustomColors.story = {
  name: 'Custom Colors',
}
