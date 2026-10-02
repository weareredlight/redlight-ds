/* eslint-disable no-plusplus */
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type PaginationProps = {
  currentPage?: number
  totalPages: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'minimal'
  className?: string
  style?: CSSProperties
}

const LeftArrow = () => <ChevronLeftIcon />
const RightArrow = () => <ChevronRightIcon />

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages,
  onPageChange,
  variant = 'default',
  className,
  style,
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
    for (let i = start; i <= end; i++) {
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
            className={cx(styles.button, pageNumber === page ? styles.currentPage : styles.page)}
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
    <div className={cx(styles.pagination, className)} style={style}>
      <Button
        variant='textOnly'
        // href='#'
        onClick={() => handlePageChange(currentPage - 1)}
        iconComponent={LeftArrow}
        iconPosition='iconOnly'
        className={styles.button}
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
        className={styles.button}
        disabled={currentPage >= totalPages}
      />
    </div>
  )
}

export const paginationSelector = `.${styles.pagination}`

export default Pagination
