import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import type * as Stitches from '@stitches/react'

import Button from '../Button'

import { PaginationContainer } from './styles'

type PaginationProps = {
  currentPage?: number
  totalPages: number
  onPageChange: (page: number) => void
  variant?: Stitches.VariantProps<typeof PaginationContainer>['variant']
}

const LeftArrow = () => <ChevronLeftIcon />
const RightArrow = () => <ChevronRightIcon />

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages,
  onPageChange,
  variant = 'default'
}) => {
  const [page, setPage] = useState(currentPage)

  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 4

    // Calculate the range of visible page numbers
    let start = Math.max(page - Math.floor(maxVisiblePages / 2), 1)
    let end = start + maxVisiblePages - 1

    // Adjust the range if it exceeds the total number of pages
    if (end > totalPages) {
      end = totalPages
      start = Math.max(end - maxVisiblePages + 1, 1)
    }

    // Generate the page numbers
    // eslint-disable-next-line no-plusplus, semi-spacing
    for (let i = start;i <= end;i++) {
      pageNumbers.push(i)
    }

    // Add three dots if there are more pages
    if (end < totalPages) {
      pageNumbers.push('...')
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const handlePageChange = (pageNumber: number | string) => {
    if (typeof pageNumber === 'number' && pageNumber !== page && onPageChange) {
      setPage(pageNumber)
      onPageChange(pageNumber)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = getPageNumbers()

    return (
      <>
        {pageNumbers.map(pageNumber => (
          <Button
            key={pageNumber}
            css={pageNumber === page ? {
              backgroundColor: '$primary200',
              color: '$primary'
            } : {
              backgroundColor: 'initial'
            }}
            variant='textOnly'
            // href='#'
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </>
    )
  }

  return (
    <PaginationContainer>
      <Button
        variant='textOnly'
        // href='#'
        onClick={() => handlePageChange(currentPage - 1)}
        iconComponent={LeftArrow}
        iconPosition='iconOnly'
        disabled={currentPage <= 1}
      />
      {variant === 'default' && (
        renderPageNumbers()
      )}
      <Button
        variant='textOnly'
        // href='#'
        onClick={() => handlePageChange(currentPage + 1)}
        iconComponent={RightArrow}
        iconPosition='iconOnly'
        disabled={currentPage >= totalPages}
      />
    </PaginationContainer>
  )
}

export default Pagination
