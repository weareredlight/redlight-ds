import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Flex from '../../elements/Flex'

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: 'var(--space-sm) var(--space-lg)',
      borderRadius: 'var(--radii-xsm)',
      background: 'var(--colors-primary100)',
      color: 'var(--colors-primary)',
    }}
  >
    {children}
  </div>
)

const meta = {
  title: 'Components/Layout/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Flex is a layout helper: a flexbox container whose direction, alignment and gap use the theme spacing. It centers its content by default.',
      },
    },
  },
  args: {
    gap: 'sm',
    style: {
      minHeight: '120px',
      border: '1px dashed var(--colors-neutral300)',
    },
    children: [
      <Box key='1'>One</Box>,
      <Box key='2'>Two</Box>,
      <Box key='3'>Three</Box>,
    ],
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'column'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'],
    },
    gap: {
      control: 'select',
      options: ['xxxsm', 'xxsm', 'xsm', 'sm', 'lg', 'xlg', 'xxlg', 'xxxlg'],
    },
    wrap: {
      control: 'boolean',
    },
    as: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Flex>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Column: Story = {
  args: {
    direction: 'column',
    align: 'start',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "direction" to stack the items.',
      },
    },
  },
}

export const SpaceBetween: Story = {
  args: {
    justify: 'spaceBetween',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "justify" to spread the items along the main axis.',
      },
    },
  },
}

export const AsList: Story = {
  args: {
    as: 'ul',
    style: { listStyle: 'none', padding: 0 },
    children: [
      <li key='1'><Box>One</Box></li>,
      <li key='2'><Box>Two</Box></li>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "as" to render another element instead of a div.',
      },
    },
  },
}
