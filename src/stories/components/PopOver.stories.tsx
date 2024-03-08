import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import Button from '../../components/Button'
import PopOver, { Props } from '../../components/PopOver'
import Text from '../../components/Text'
import Flex from '../../elements/Flex'
import { CenterOnCanvas } from '../decorators'

const meta: Meta = {
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
}
export default meta

const DotsIcon = () => <DotsVerticalIcon width={14} height={14} />

const Template: StoryFn<Props> = args => (
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
    defaultOpen: true,
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
