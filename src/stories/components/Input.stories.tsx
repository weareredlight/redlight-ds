import { EyeClosedIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import type { InputProps } from '../../components/Input'
import type { Meta, StoryObj } from '@storybook/react'

import Input from '../../components/Input'

// Keeps the typed value, so the input can be edited and the "value" control still works.
// Input sends `null` when the field is cleared (and a number for type='number').
const Template = (args: InputProps) => {
  const [value, setValue] = useState(args.value ?? '')
  useEffect(() => setValue(args.value ?? ''), [args.value])

  return (
    <Input
      {...args}
      value={value}
      onChange={e => {
        setValue(e.target.value == null ? '' : String(e.target.value))
        args.onChange(e)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Input',
  component: Input,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered.',
      },
    },
  },
  args: {
    id: 'input-example',
    onChange: fn(),
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
      options: ['null', 'error', 'dirty', 'disabled'],
    },
    variant: {
      control: 'radio',
      options: ['null', 'simple'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'number'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
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
      control: 'radio',
      options: ['left', 'right'],
      if: { arg: 'iconComponent', exists: true },
    },
    onClickIcon: {
      table: {
        disable: true,
      }
    },
  },
} satisfies Meta<typeof Input>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
  },
}

/* -------------------------Search input demo------------------------ */
const SearchIcon = () => <MagnifyingGlassIcon />

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
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
    iconPosition='left'
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

const PasswordTemplate = (args: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Template
      {...args}
      type={showPassword ? 'text' : 'password'}
      iconComponent={showPassword ? EyeOpen : EyeClosed}
      onClickIcon={() => setShowPassword(!showPassword)}
    />
  )
}

export const WithInteractiveIcon: Story = {
  render: PasswordTemplate,
  args: {
    id: 'password-input-example',
    placeholder: 'Choose your password',
    label: 'Password',
    value: 'password123456',
  },
  parameters: {
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
  },
}

export const NumberInput: Story = {
  args: {
    id: 'input-number-example',
    label: 'Quantity',
    type: 'number',
    value: '1',
  },
  parameters: {
    docs: {
      description: {
        story: 'With `type="number"`, `e.target.value` in `onChange` is a number. When the field is cleared it is `null`.',
      },
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

export const Dirty: Story = {
  args: {
    id: 'input-dirty-example',
    label: 'Name',
    value: 'Edited value',
    state: 'dirty',
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    id: 'input-disabled-example',
    label: 'Name',
    value: 'You cannot edit this',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `disabled` prop (or `state="disabled"`) to prevent editing.',
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

export const FullWidth: Story = {
  args: {
    id: 'input-full-width-example',
    label: 'Address',
    placeholder: 'Street, number, city',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The input can occupy the full width of the parent container.',
      },
    },
  },
}
