import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import Pagination, { PaginationProps } from '../../components/Pagination'

// Keeps the current page, so the pagination can be clicked and its control still works
const Template = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)
  useEffect(() => setCurrentPage(args.currentPage), [args.currentPage])

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={page => {
        setCurrentPage(page)
        args.onPageChange(page)
      }}
    />
  )
}

const source = (props = '') => `
() => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}${props}
    />
  )
}
`

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'Allows navigation through a large set of content or data that has been divided into multiple pages. It typically includes a series of numbered buttons that correspond to each page.',
      },
    },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'default',
    onPageChange: fn(),
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'minimal'],
    },
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
  },
} satisfies Meta<typeof Pagination>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default pagination component.'
      },
      source: { code: source() },
    }
  }
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation works for secondary pagination.'
      },
      source: { code: source("\n      variant='minimal'") },
    },
  },
}

export const FewPages: Story = {
  args: {
    totalPages: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'With 4 pages or fewer, every page is shown.'
      },
    },
  },
}

export const ManyPages: Story = {
  args: {
    totalPages: 50,
    currentPage: 20,
  },
  parameters: {
    docs: {
      description: {
        story: 'With more pages, it shows the pages around the current one, followed by the last page.'
      },
    },
  },
}
