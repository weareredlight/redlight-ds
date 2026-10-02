import { Meta, StoryObj } from '@storybook/react'

import type { TextVariant } from '../../components/Text'

import Text from '../../components/Text'
import Flex from '../../elements/Flex'
import { colorOptions } from '../../theme'

const variants: TextVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'h7',
  'subHeading',
  'subHeadingSmall',
  'paragraph',
  'textBlock',
  'microCopy',
]

const meta = {
  title: 'Components/General/Text Component',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'The "Text" component can be used anywhere to create any type of text, from headings to long paragraphs. By changing its variant you can change the hierarchy of the text you want to display and you can also change its colour using the "color" property.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: colorOptions,
    }
  },
} satisfies Meta<typeof Text>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'h1',
    children: 'We are RedLight',
  },
}

export const AllVariants: Story = {
  args: {
    color: 'neutral800',
  },
  render: args => (
    <Flex direction='column' align='start' gap='xsm'>
      {variants.map(variant => (
        <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>
      ))}
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'These are all the available variants. See Style Guides / Typography for their sizes.'
      },
      source: {
        code: null
      }
    },
  },
}
