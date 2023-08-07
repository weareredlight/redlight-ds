import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { Meta, Story } from '@storybook/react'

import Button, { Props } from '../../components/Button'
import Flex from '../../elements/Flex'

const meta: Meta = {
  title: 'Components/General/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.'
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'neutral', 'textOnly', 'danger', 'success']
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right', 'iconOnly']
    },
    type: {
      control: { type: 'select' },
      options: ['submit', 'button']
    },
    disabled: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'large']
      }
    },
    fullWidth: {
      control: 'boolean'
    },
  },
}
export default meta

const Icon = () => <PlusIcon />
const children = 'Button'

const Template: Story<Props> = args => <Button {...args}>{children}</Button>

export const aDefault = Template.bind({})
aDefault.args = {
  variant: 'primary',
  fullWidth: false,
  disabled: false
}
aDefault.story = {
  name: 'Default',
}

export const bWithIcon = Template.bind({})
bWithIcon.args = {
  variant: 'primary',
  iconComponent: Icon,
}
bWithIcon.parameters = {
  docs: {
    storyDescription: 'The icon can be loaded as a custom component.',
    source: {
      code: `
<Button
  variant='primary'
  iconComponent={() => <IconPackage />}
  onClick={() => {}}
>
  Button
</Button>
`
    }
  }
}
bWithIcon.story = {
  name: 'With Icon',
}

export const cWithIconLeft = Template.bind({})
cWithIconLeft.args = {
  variant: 'primary',
  iconComponent: Icon,
  iconPosition: 'left'
}
cWithIconLeft.parameters = {
  docs: {
    storyDescription: 'You can change the position of the icon.',
    source: {
      code: `
<Button
  variant='primary'
  iconComponent={() => <IconPackage />}
  iconPosition='left'
  onClick={() => {}}
>
  Button
</Button>
`
    }
  }
}
cWithIconLeft.story = {
  name: 'With Icon Left',
}

export const dWithIconOnly = Template.bind({})
dWithIconOnly.args = {
  variant: 'primary',
  iconComponent: Icon,
  iconPosition: 'iconOnly'
}
dWithIconOnly.parameters = {
  docs: {
    storyDescription: 'You can have just the icon.',
    source: {
      code: `
<Button
  variant='primary'
  iconComponent={() => <IconPackage />}
  iconPosition='left'
  onClick={() => {}}
>
  Button
</Button>
`
    }
  }
}
dWithIconOnly.story = {
  name: 'With Icon Only',
}

export const eFullWidth = Template.bind({})
eFullWidth.args = {
  variant: 'primary',
  fullWidth: true
}
eFullWidth.parameters = {
  docs: {
    storyDescription: 'The button can occupy the full width of the parent container.',
    source: {
      code: `
<Button
  variant='primary'
  fullWidth
  onClick={() => {}}
>
  Button
</Button>
`
    }
  }
}
eFullWidth.story = {
  name: 'Full Width',
}

export const zAllVariants = () => (
  <Flex direction='column' align='start' gap='lg' wrap>
    <Flex gap='xxsm' justify='start'>
      <Button variant='primary'>Button</Button>
      <Button variant='secondary'>Button</Button>
      <Button variant='neutral'>Button</Button>
      <Button variant='danger'>Button</Button>
      <Button variant='success'>Button</Button>
      <Button variant='textOnly'>Button</Button>
    </Flex>
    <Flex gap='xxsm'>
      <Button variant='primary' size='large'>Button</Button>
      <Button variant='secondary' size='large'>Button</Button>
      <Button variant='neutral' size='large'>Button</Button>
      <Button variant='danger' size='large'>Button</Button>
      <Button variant='success' size='large'>Button</Button>
      <Button variant='textOnly' size='large'>Button</Button>
    </Flex>
  </Flex>
)
zAllVariants.parameters = {
  docs: {
    storyDescription: 'These are all the available variants.',
    source: {
      code: null
    }
  }
}
zAllVariants.story = {
  name: 'All Variants',
}
