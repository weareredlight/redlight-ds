import { Meta, Story } from '@storybook/react'

import Text, { Props } from 'components/Text'

const meta: Meta = {
  title: 'Components/General/Text Component',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'The "Text" component can be used anywhere to create any type of text, from headings to long paragraphs. By changing its variant you can change the hierarchy of the text you want to display and you can also change its colour using the "color" property.'
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7',
          'subHeading', 'subHeadingSmall',
          'paragraph', 'textBlock', 'microCopy'
        ]
      },
    },
    children: {
      control: { type: 'text' },
    },
  }
}
export default meta

const Template: Story<Props> = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  variant: 'h1',
  children: 'We are RedLight'
}
