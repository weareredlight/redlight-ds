import { Meta, StoryObj } from '@storybook/react'

import Tabs from '../../components/Tabs'
import Text from '../../components/Text'
import Flex from '../../elements/Flex'
import { CenterOnCanvas } from '../decorators'

const tabContent = (label: string) => (
  <Flex key={label} direction='column' style={{ padding: '2rem' }}>
    <Text variant='textBlock'>{`${label} Content...`}</Text>
  </Flex>
)

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'The tab component is a navigation element used to display different sections or pages of content within a single interface. It typically consists of a row of tabs that users can click on to switch between different views. Each tab is associated with a specific piece of content, such as a page or section, and clicking on the tab displays the corresponding content. This includes using clear and descriptive labels for each tab, as well as providing visual cues to indicate which tab is currently active.',
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
    tabs: [{ label: 'Tab 1' }, { label: 'Tab 2' }],
    children: [tabContent('Tab 1'), tabContent('Tab 2')],
  },
  argTypes: {
    align: {
      control: 'radio',
      options: ['null', 'left', 'right'],
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Tabs>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
  <Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    <div>
    ... Tab 1 content goes here
    </div>
    <div>
    ... Tab 2 content goes here
    </div>
  </Tabs>
  `,
      },
    },
  },
}

const manyTabs = ['Overview', 'Members', 'Billing', 'Settings']

export const ManyTabs: Story = {
  args: {
    tabs: manyTabs.map(label => ({ label })),
    children: manyTabs.map(tabContent),
  },
  parameters: {
    docs: {
      description: {
        story: 'Each child is the content of the tab with the same position in "tabs".',
      },
    },
  },
}

export const AlignLeft: Story = {
  args: {
    align: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the tabs fill the width of the content. Use "align" to keep them at the left or right instead.',
      },
      source: {
        code: `
  <Tabs align='left' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `,
      },
    },
  },
}

export const AlignRight: Story = {
  args: {
    align: 'right',
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Tabs align='right' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `,
      },
    },
  },
}
