import React, { useRef, useState } from 'react'

import { cx } from '../../../../utils'

import styles from './styles.module.scss'

// Snippets longer than this start collapsed, showing their first lines
const COLLAPSE_AFTER_LINES = 20

// Collapses long code behind an "Expand code" button. The wrapper is always rendered, so the
// code inside isn't remounted (and highlighted again) when it stops being collapsible.
const Collapsible = ({ lines, children }: { lines: number, children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const collapsible = lines > COLLAPSE_AFTER_LINES

  const toggle = () => {
    setExpanded(!expanded)
    // Collapsing shortens the page, which can leave the block above the screen
    if (expanded) requestAnimationFrame(() => ref.current?.scrollIntoView({ block: 'nearest' }))
  }

  return (
    <div ref={ref} className={cx(styles.collapsible, collapsible && !expanded && styles.collapsed)}>
      {children}
      {collapsible && (
        <button type='button' className={styles.expandButton} onClick={toggle} aria-expanded={expanded}>
          {expanded ? 'Collapse code' : 'Expand code'}
        </button>
      )}
    </div>
  )
}

export default Collapsible
