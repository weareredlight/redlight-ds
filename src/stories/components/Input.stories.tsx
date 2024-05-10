import { EyeClosedIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Input from '../../components/Input'

export default {
  title: 'Components/Data Input/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered.',
      },
    },
  },
  args: {
    onClickIcon: undefined,
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    state: {
      control: 'radio',
      options: [null, 'error', 'dirty', 'disabled'],
    },
    variant: {
      control: 'radio',
      options: [null, 'simple'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search'],
    },
    fullWidth: {
      control: 'boolean',
    },
    errorMsg: {
      table: {
        disable: true,
      },
    },
    containerProps: {
      table: {
        disable: true,
      },
    },
    // icon
    iconComponent: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      table: {
        disable: true,
      }
    },
    onClickIcon: {
      table: {
        disable: true,
      }
    },
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
    id: 'input-example',
  },
}

/* -------------------------Search input demo------------------------ */
const SearchIcon = () => <MagnifyingGlassIcon />

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    id: 'input-example',
    iconPosition: 'left',
    type: 'search',
    iconComponent: SearchIcon,
  },

  parameters: {
    docs: {
      description: {
        story: 'You can add an icon. For example a magnify icon for a search bar.'
      },
      source: {
        code: `
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  `,
      },
    },
  },
}

/* -------------------------Password input demo------------------------ */
const EyeClosed = () => <EyeClosedIcon />
const EyeOpen = () => <EyeOpenIcon />

export const WithInteractiveIcon: Story = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      id='input-example'
      label='Password'
      type={showPassword ? 'text' : 'password'}
      iconComponent={showPassword ? EyeOpen : EyeClosed}
      onClickIcon={() => setShowPassword(!showPassword)}
      value='password123456'
      onChange={() => { }}
    />
  )
}
WithInteractiveIcon.args = {
  placeholder: 'Chose your password',
  label: 'Password',
  id: 'input-example',
  iconPosition: 'right',
  type: 'password',
  value: 'password123456',
  iconComponent: EyeClosed,
}
WithInteractiveIcon.parameters = {
  docs: {
    description: {
      story: 'The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password.',
    },
    source: {
      code: `
const [showPassword, setShowPassword] = useState(false)   

return (
  <Input
    id='password-input-example'
    label='Password'
    type={showPassword ? 'text' : 'password'}
    iconComponent={showPassword ? EyeOpen : EyeClosed}
    onClickIcon={() => setShowPassword(!showPassword)}
    value={yourPassword}
    onChange={e => updateFunction(e.target.value)}
  />
)
`,
    },
  },
}

export const Error: Story = {
  args: {
    id: 'input-error-example',
    placeholder: 'Insert your e-mail',
    label: 'E-mail',
    type: 'email',
    value: 'user.com',
    state: 'error',
    errorMsg: 'wrong e-mail format',
  },

  parameters: {
    docs: {
      description: {
        story: 'If there is an error when filling in the field, it will turn red and may also show a custom error message',
      },
      source: {
        code: `
  <Input
    id='input-error-example'
    type='email'
    label='E-mail'
    placeholder='Insert your e-mail'
    value={yourEmail}
    state='error'
    errorMsg='wrong e-mail format'
    onChange={e => updateFunction(e.target.value)}
  />
  `,
      },
    },
  },
}

export const Simple: Story = {
  args: {
    id: 'input-simple-example',
    label: 'Filters',
    placeholder: 'Type in some filters',
    variant: 'simple',
  },

  parameters: {
    docs: {
      description: {
        story: 'Simple inputs can be used to search inside settings or tables.',
      },
      source: {
        code: `
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  `,
      },
    },
  },
}
