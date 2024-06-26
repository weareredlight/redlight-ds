import { StoryObj, Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import Pagination from '../../components/Pagination'

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'Allows navigation through a large set of content or data that has been divided into multiple pages. It typically includes a series of numbered buttons that correspond to each page.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'minimal'],
    },
    currentPage: {
      control: { type: 'number' },
    },
    totalPages: {
      control: { type: 'number' },
    },
  },
} as Meta

const Template: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }
  return (
    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
  )
}

export const Default = {
  render: Template,
  args: {
    variant: 'default',
    currentPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default pagination component.'
      },
      source: {
        code: `
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}
`
      }
    }
  }
}

export const Minimal: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    const handlePageChange = (page: React.SetStateAction<number>) => {
      setCurrentPage(page)
    }
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant='minimal'
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation works for secondary pagination.'
      },
      source: {
        code: `
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      variant='minimal'
    />
  )
}
`
      }
    },
  },
}
