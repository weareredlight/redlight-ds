import { ChevronRightIcon, ChevronLeftIcon, PlusIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Button from '../../components/Button'
import Flex from '../../elements/Flex'

export default {
  title: 'Components/General/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.'
      },
    },
  },
  args: {
    children: 'Button',
    fullWidth: false,
    disabled: false,
    isLoading: false,
    iconComponent: undefined,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'textOnly', 'danger', 'success'],
    },
    type: {
      control: 'radio',
      options: ['submit', 'button'],
    },
    size: {
      control: 'radio',
      options: ['normal', 'large']
    },
    onClick: {
      control: false,
    },
    css: {
      table: {
        disable: true,
      }
    },
    // booleans
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    // icon
    iconComponent: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      if: { arg: 'iconComponent', exists: true },
      control: 'radio',
      options: ['left', 'right', 'iconOnly']
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {}
export const WithIcon: Story = {
  args: {
    iconComponent: () => <ChevronRightIcon />,
    iconPosition: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon can be loaded as a custom component.'
      },
      source: {
        code: `
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  `
      }
    }
  }
}

export const WithIconLeft: Story = {
  args: {
    iconComponent: () => <ChevronLeftIcon />,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can change the position of the icon.'
      },
      source: {
        code: `
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  `
      }
    }
  }
}

export const WithIconOnly: Story = {
  args: {
    iconComponent: () => <PlusIcon />,
    iconPosition: 'iconOnly'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can have just the icon.'
      },
      source: {
        code: `
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='iconOnly'
/>
  `
      }
    }
  }
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The button can occupy the full width of the parent container.'
      },
      source: {
        code: `
<Button
  fullWidth
>
  Button
</Button>
  `
      }
    }
  }
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'These are all the available variants.'
      },
      source: {
        code: null
      }
    },
  },
  render: () => (
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
}
