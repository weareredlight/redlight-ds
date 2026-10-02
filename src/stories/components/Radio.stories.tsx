import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'

import Radio from '../../components/Radio'
import Flex from '../../elements/Flex'

const meta = {
  title: 'Components/Data Input/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group.',
      },
    },
  },
  args: {
    id: 'radio-default',
    onChange: fn(),
  },
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Radio>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const LabelPosition: Story = {
  args: {
    id: 'radio-left',
    label: 'This is the label',
    labelPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.',
      },
    }
  }
}

export const Disabled: Story = {
  args: {
    id: 'radio-disabled',
    label: 'This is the label',
    checked: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled radios cannot be selected.',
      },
    }
  }
}

const plans = [
  { value: 'free', label: 'Free', description: 'Up to 3 projects' },
  { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
  { value: 'team', label: 'Team', description: 'Unlimited projects and members' },
]

const GroupTemplate = () => {
  const [plan, setPlan] = useState('pro')

  return (
    <Flex direction='column' align='start' gap='sm'>
      {plans.map(option => (
        <Radio
          key={option.value}
          id={`radio-plan-${option.value}`}
          name='plan'
          value={option.value}
          label={option.label}
          description={option.description}
          checked={plan === option.value}
          onChange={e => setPlan(e.target.value)}
        />
      ))}
    </Flex>
  )
}

export const Group: Story = {
  render: GroupTemplate,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Give every radio in a group the same "name", and keep the selected value in state.',
      },
      source: {
        code: `
const [plan, setPlan] = useState('pro')

return (
  <>
    {plans.map(option => (
      <Radio
        key={option.value}
        id={\`radio-plan-\${option.value}\`}
        name='plan'
        value={option.value}
        label={option.label}
        checked={plan === option.value}
        onChange={e => setPlan(e.target.value)}
      />
    ))}
  </>
)
`,
      },
    }
  }
}
