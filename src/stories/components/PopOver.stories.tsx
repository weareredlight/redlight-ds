import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { PopOverProps } from '../../components/PopOver'

import Button from '../../components/Button'
import PopOver from '../../components/PopOver'
import Text from '../../components/Text'
import Flex from '../../elements/Flex'
import { CenterOnCanvas } from '../decorators'

export default {
  title: 'Components/Overlays/PopOver',
  component: PopOver,
  parameters: {
    docs: {
      description: {
        component:
          'Popover enhances usability by offering supplementary details and allowing user input, making it an effective tool for presenting information and gathering input in a compact and focused manner.',
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#F4F4F7',
        },
      ],
    },
  },
  decorators: [CenterOnCanvas],
  argTypes: {
    side: {
      control: {
        type: 'radio',
        options: ['left', 'top', 'right', 'bottom'],
      },
    },
  },
} as Meta<typeof PopOver>

const DotsIcon = () => <DotsVerticalIcon width={14} height={14} />

const Template: StoryFn<PopOverProps> = args => (
  <PopOver
    {...args}
    trigger={
      (
        <Button
          variant='textOnly'
          iconComponent={DotsIcon}
          iconPosition='iconOnly'
          css={{ borderRadius: '100%' }}
        />
      )
    }
  >
    <Flex direction='column' css={{ padding: '1rem' }}>
      <Text variant='textBlock'>Your content...</Text>
    </Flex>
  </PopOver>
)

export const Default = {
  render: Template,
  args: {
    align: 'center',
    side: 'bottom',
    sideOffset: 5,
  },

  parameters: {
    docs: {
      source: {
        code: `
//Provide a trigger for the Popover. It can be whatever you want.
<PopOver trigger={<Button />} side='bottom' sideOffset={5}>
  ... Your content goes here
</PopOver>
`,
      },
    },
  },
}
