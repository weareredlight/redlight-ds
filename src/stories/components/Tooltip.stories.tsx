import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import Button from '../../components/Button'
import Tooltip, { Props } from '../../components/Tooltip'
import { CenterOnCanvas } from '../decorators'

const meta: Meta = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  decorators: [CenterOnCanvas],
  parameters: {
    docs: {
      description: {
        component: `Small, contextual element that appears when the user hovers over or interacts with a particular piece of content. It typically consists of a small box of text, and provides additional information or context to the user.
        It has various variations, including those with or without an arrow, and with the arrow positioned in different locations relative to the content that activates the tooltip.`,
      },
    },
  },
  argTypes: {
    side: {
      control: {
        type: 'radio',
        options: ['left', 'top', 'right', 'bottom'],
      },
    },
  },
}
export default meta

const questionIcon = () => <QuestionMarkCircledIcon width='18' height='18' />

const Template: StoryFn<Props> = args => (
  <TooltipProvider>
    <Tooltip {...args}>
      <Button variant='textOnly' iconComponent={questionIcon} iconPosition='right'>
        Hover me
      </Button>
    </Tooltip>
  </TooltipProvider>
)

export const Default = {
  render: Template,

  args: {
    content: 'Hello world',
    side: 'right',
    delay: 50,
  },

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
