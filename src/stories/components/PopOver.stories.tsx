import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import PopOver from '../../components/PopOver'
import Text from '../../components/Text'
import Flex from '../../elements/Flex'
import { CenterOnCanvas } from '../decorators'

const DotsIcon = () => <DotsVerticalIcon width={14} height={14} />

const meta = {
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
  args: {
    align: 'center',
    side: 'bottom',
    sideOffset: 5,
    trigger: (
      <Button
        variant='textOnly'
        iconComponent={DotsIcon}
        iconPosition='iconOnly'
        style={{ borderRadius: '100%' }}
      />
    ),
    children: (
      <Flex direction='column' style={{ padding: '1rem' }}>
        <Text variant='textBlock'>Your content...</Text>
      </Flex>
    ),
  },
  argTypes: {
    side: {
      control: 'radio',
      options: ['left', 'top', 'right', 'bottom'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    trigger: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof PopOver>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const Sides: Story = {
  render: args => (
    <Flex gap='sm'>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <PopOver
          {...args}
          key={side}
          side={side}
          trigger={<Button variant='secondary'>{side}</Button>}
        />
      ))}
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use "side" to choose where the popover opens, and "align" to line it up with the start, center or end of the trigger.',
      },
      source: {
        code: `
<PopOver trigger={<Button>top</Button>} side='top'>
  ... Your content goes here
</PopOver>
`,
      },
    },
  },
}

export const WithForm: Story = {
  args: {
    children: (
      <Flex direction='column' align='start' gap='sm' style={{ padding: '1rem' }}>
        <Text variant='h6' color='neutral800'>Rename project</Text>
        <Input id='popover-project-name' placeholder='Project name' onChange={() => { }} />
        <Button size='normal'>Save</Button>
      </Flex>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The content can be anything, including inputs to gather quick feedback without leaving the page.',
      },
      source: {
        code: `
<PopOver trigger={<Button />}>
  <Flex direction='column' align='start' gap='sm'>
    <Text variant='h6'>Rename project</Text>
    <Input id='project-name' placeholder='Project name' onChange={updateName} />
    <Button>Save</Button>
  </Flex>
</PopOver>
`,
      },
    },
  },
}
