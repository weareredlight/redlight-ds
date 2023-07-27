import { Meta, Story } from '@storybook/react'

import { CenterOnCanvas } from '../decorators'

import Tabs, { Props } from 'components/Tabs'
import Text from 'components/Text'
import Flex from 'elements/Flex'

const meta: Meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'The tab component is a navigation element used to display different sections or pages of content within a single interface. It typically consists of a row of tabs that users can click on to switch between different views. Each tab is associated with a specific piece of content, such as a page or section, and clicking on the tab displays the corresponding content. This includes using clear and descriptive labels for each tab, as well as providing visual cues to indicate which tab is currently active.'
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
    }
  },
  decorators: [CenterOnCanvas],
  argTypes: {
  }
}
export default meta

const Template: Story<Props> = () => (
  <Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    <Flex direction='column' css={{ padding: '2rem' }}>
      <Text variant='textBlock'>Tab 1 Content...</Text>
    </Flex>
    <Flex direction='column' css={{ padding: '2rem' }}>
      <Text variant='textBlock'>Tab 2 Content...</Text>
    </Flex>
  </Tabs>
)

export const Default = Template.bind({})
Default.parameters = {
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
`
    }
  }
}
