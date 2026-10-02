import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Tooltip from '../../components/Tooltip'
import Flex from '../../elements/Flex'
import { CenterOnCanvas } from '../decorators'

const questionIcon = () => <QuestionMarkCircledIcon width='18' height='18' />

const meta = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: 'Small, contextual element that appears when the user hovers over or focuses a particular piece of content. It consists of a small box of text with an arrow pointing to that content, and provides additional information or context to the user.',
      },
    },
  },
  args: {
    content: 'Hello world',
    side: 'right',
    delay: 50,
    children: (
      <Button variant='textOnly' iconComponent={questionIcon} iconPosition='right'>
        Hover me
      </Button>
    ),
  },
  argTypes: {
    side: {
      control: 'radio',
      options: ['left', 'top', 'right', 'bottom'],
    },
    delay: {
      control: 'number',
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Tooltip>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Tooltip content='Hello world' side='right' delay={50}>
  //Provide a trigger inside the Tooltip. It can be whatever you want.
  <Button />
</Tooltip>
  `,
      },
    },
  },
}

export const Sides: Story = {
  render: args => (
    <Flex gap='sm'>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <Tooltip {...args} key={side} side={side} content={`Tooltip on the ${side}`}>
          <Button variant='secondary'>{side}</Button>
        </Tooltip>
      ))}
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use "side" to choose where the tooltip shows. The arrow always points at the trigger.',
      },
      source: {
        code: `
<Tooltip content='Tooltip on the top' side='top'>
  <Button>top</Button>
</Tooltip>
  `,
      },
    },
  },
}

export const Delay: Story = {
  args: {
    delay: 700,
    content: 'I took a while to show up',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "delay" (in milliseconds) to wait before showing the tooltip, so it does not pop up while the cursor is just passing by.',
      },
    },
  },
}
