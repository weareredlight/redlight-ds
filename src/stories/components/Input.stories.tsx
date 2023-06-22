import { EyeClosedIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
// import { EyeOpenIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { Meta, Story } from '@storybook/react'

import Input, { Props } from 'components/Input'

const meta: Meta = {
  title: 'Components/Data Input/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered.'
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    id: {
      control: { type: 'text' }
    },
    errorMsg: {
      control: { type: 'text' }
    },
    state: {
      control: { type: 'radio' },
      options: [null, 'error', 'dirty']
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right']
    },
  }
}
export default meta

const Template: Story<Props> = args => <Input {...args} />

/* -------------------------Default input demo------------------------ */
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Write something...',
  label: 'This is the label',
  description: 'This is the description',
  id: 'input-example',
}

/* -------------------------Search input demo------------------------ */
const SearchIcon = () => <MagnifyingGlassIcon />

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Search...',
  id: 'input-example',
  iconPosition: 'left',
  type: 'search',
  iconComponent: SearchIcon,
}
WithIcon.parameters = {
  docs: {
    storyDescription: 'You can add an icon. For example a magnify icon for a search bar.',
    source: {
      code: `
<Input
  id='search-input-example'
  type='search'
  placeholder='Search...'
  iconComponent={() => <MagnifyIcon />}
  onChange={e => searchFunction(e.target.value)}
/>
`
    }
  }
}

/* -------------------------Password input demo------------------------ */
const EyeClosed = () => <EyeClosedIcon />

export const WithInteractiveIcon = Template.bind({})
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
    storyDescription: 'The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password.',
    source: {
      code: `
<Input
  id='password-input-example'
  type='password'
  label='Password'
  placeholder='Chose your password'
  iconComponent={() => <EyeIcon />}
  onClickIcon={showPassword(true)}
  value={yourPassword}
  onChange={e => updateFunction(e.target.value)}
/>
`
    }
  }
}

/* -------------------------Error input demo------------------------ */
export const Error = Template.bind({})
Error.args = {
  id: 'input-error-example',
  placeholder: 'Insert your e-mail',
  label: 'E-mail',
  type: 'email',
  value: 'user.com',
  state: 'error',
  errorMsg: 'wrong e-mail format'
}
Error.parameters = {
  docs: {
    storyDescription: 'If there is an error when filling in the field, it will turn red and may also show a custom error message',
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
`
    }
  }
}

/* -------------------------Simple input demo------------------------ */
export const Simple = Template.bind({})
Simple.args = {
  id: 'input-simple-example',
  label: 'Filters',
  placeholder: 'Type in some filters',
  variant: 'simple'
}
Simple.parameters = {
  docs: {
    storyDescription: 'Simple inputs can be used to search inside settings or tables.',
    source: {
      code: `
<Input
  id='input-simple-example'
  variant='simple'
  label='Filters'
  placeholder='Type in some filters'
  onChange={e => updateFunction(e.target.value)}
/>
`
    }
  }
}
