import React, { useId, useRef, useState } from 'react'

import type { CodeLanguage } from './HighlightedCode'

import { cx } from '../../../../utils'

import Collapsible from './Collapsible'
import CopyButton from './CopyButton'
import HighlightedCode from './HighlightedCode'
import styles from './styles.module.scss'

// Code snippets for the docs pages:
// - DocCodeBlock: one snippet, with its title (or language) in the header
// - DocCodeTabs: several snippets, one tab each (e.g. a component's TSX, SCSS and usage)
// Both are a Frame: a header with a Copy button, then the code, collapsed when it's long.

type FrameProps = {
  header: React.ReactNode
  code: string // what Copy copies, and what decides if it collapses
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Frame = ({
  header,
  code,
  children,
  className,
  style,
}: FrameProps) => (
  // sb-unstyled opts out of Storybook's docs typography, which resets <pre> padding
  <div className={cx('sb-unstyled', styles.frame, className)} style={style}>
    <div className={styles.header}>
      {header}
      <CopyButton code={code} />
    </div>
    <Collapsible lines={code.split('\n').length}>
      {children}
    </Collapsible>
  </div>
)

/* ------------------------------- DocCodeBlock ------------------------------- */

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  tsx: 'TSX',
  css: 'CSS',
  scss: 'SCSS',
  bash: 'Terminal',
}

type DocCodeBlockProps = {
  code: string
  language?: CodeLanguage
  title?: string
  className?: string
  style?: React.CSSProperties
}

export const DocCodeBlock = ({
  code,
  language = 'tsx',
  title,
  className,
  style,
}: DocCodeBlockProps) => (
  <Frame
    header={<span className={styles.title}>{title ?? LANGUAGE_LABELS[language]}</span>}
    code={code}
    className={className}
    style={style}
  >
    <HighlightedCode code={code} language={language} />
  </Frame>
)

/* ------------------------------- DocCodeTabs -------------------------------- */

export type DocCodeTab = { label: string, code: string, language?: CodeLanguage }

type DocCodeTabsProps = {
  tabs: DocCodeTab[]
  className?: string
  style?: React.CSSProperties
}

// Every tab's code stays mounted (hidden when not selected),
// so switching tabs never shows it unhighlighted
export const DocCodeTabs = ({ tabs, className, style }: DocCodeTabsProps) => {
  const id = useId()
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow keys move between tabs, like any tab list
  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!step) return
    const next = (active + step + tabs.length) % tabs.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const tabList = (
    <div role='tablist' className={styles.tabs}>
      {tabs.map((tab, index) => (
        <button
          key={tab.label}
          ref={button => { tabRefs.current[index] = button }}
          type='button'
          role='tab'
          id={`${id}-tab-${index}`}
          aria-selected={index === active}
          aria-controls={`${id}-panel-${index}`}
          tabIndex={index === active ? 0 : -1}
          className={cx(styles.tab, index === active && styles.active)}
          onClick={() => setActive(index)}
          onKeyDown={onKeyDown}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )

  return (
    <Frame header={tabList} code={tabs[active]?.code ?? ''} className={className} style={style}>
      {tabs.map((tab, index) => (
        <HighlightedCode
          key={tab.label}
          code={tab.code}
          language={tab.language ?? 'tsx'}
          role='tabpanel'
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== active}
        />
      ))}
    </Frame>
  )
}
