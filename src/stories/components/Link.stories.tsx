import { Meta, Story } from '@storybook/react'
import React from 'react'

import Link, { Props } from '../../components/Link'
import { darkBackgroundCanvas } from '../decorators'

const meta: Meta = {
  title: 'Components/General/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: 'The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.'
      },
    },
  },
  argTypes: {
    danger: {
      control: 'boolean',
      defaultValue: false
    },
    darkBackground: {
      control: 'boolean',
      defaultValue: true
    },
    size: {
      control: {
        type: 'radio',
        options: ['regular', 'small']
      }
    },
  }
}
export default meta

const Template: Story<Props> = args => <Link {...args}>Text Link</Link>

export const aRegular = Template.bind({})
aRegular.args = {
  href: 'redlight.dev',
  danger: false,
  darkBackground: false,
}
aRegular.story = {
  name: 'Regular',
}

export const bSmall = Template.bind({})
bSmall.args = {
  href: 'redlight.dev',
  size: 'small',
}
bSmall.parameters = {
  docs: {
    storyDescription: 'You can use smaller links for more subtle actions.',
    source: {
      code: `
<Link href='redlight.dev' size='small'>Text Link</Link>
`
    }
  }
}
bSmall.story = {
  name: 'Small',
}

export const dDanger = Template.bind({})
dDanger.args = {
  href: '/',
  danger: true,
  darkBackground: false,
}
dDanger.parameters = {
  docs: {
    storyDescription: 'Danger links can be used for actions that can result in potentially dangerous actions.',
    source: {
      code: `
<Link href='/' danger>Text Link</Link>
`
    }
  }
}
dDanger.story = {
  name: 'Danger',
}

export const eDarkBackground = Template.bind({})
eDarkBackground.args = {
  href: 'redlight.dev',
  darkBackground: true,
}
eDarkBackground.parameters = {
  docs: {
    storyDescription: 'If the background of the parent container is dark you can use the "darkBackground" property for better readability.',
    source: {
      code: `
<Link href='redlight.dev' darkBackground>Text Link</Link>
`
    }
  }
}
eDarkBackground.story = {
  name: 'Dark Background',
  decorators: [darkBackgroundCanvas],
}
