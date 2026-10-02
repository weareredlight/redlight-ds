import { CheckIcon, CopyIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
// Fine-grained imports, so the build only includes these languages and theme (not all of Shiki's)
import { createHighlighterCore } from 'shiki/dist/core.mjs'
import { createJavaScriptRegexEngine } from 'shiki/dist/engine-javascript.mjs'

import { cx } from '../../utils'

import styles from './document.module.scss'

// Layout pieces for the MDX docs pages.

type DivProps = React.HTMLAttributes<HTMLDivElement>

export const Doc = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.document, className)} {...props} />
)

export const DocHeader = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.header, className)} {...props} />
)

export const DocBody = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.body, className)} {...props} />
)

export const DocCode = ({
  size = 'small',
  className,
  ...props
}: { size?: 'small' | 'extraSmall' } & React.HTMLAttributes<HTMLElement>) => (
  <code className={cx(styles.code, styles[size], className)} {...props} />
)

type CodeLanguage = 'tsx' | 'css' | 'scss' | 'bash'

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  tsx: 'TSX',
  css: 'CSS',
  scss: 'SCSS',
  bash: 'Terminal',
}

// One highlighter for every snippet on the page, created on first use
let highlighter: ReturnType<typeof createHighlighterCore> | undefined
const getHighlighter = () => {
  highlighter ??= createHighlighterCore({
    themes: [import('shiki/dist/themes/github-dark-default.mjs')],
    langs: [
      import('shiki/dist/langs/tsx.mjs'),
      import('shiki/dist/langs/css.mjs'),
      import('shiki/dist/langs/scss.mjs'),
      import('shiki/dist/langs/bash.mjs'),
    ],
    engine: createJavaScriptRegexEngine(),
  })
  return highlighter
}

// Highlighted code block with a header (title or language) and a copy button.
// Shows the plain code until the highlighter loads.
export const DocCodeBlock = ({
  code,
  language = 'tsx',
  title,
  className,
  style,
}: {
  code: string
  language?: CodeLanguage
  title?: string
  className?: string
  style?: React.CSSProperties
}) => {
  const [html, setHtml] = useState<string>()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    getHighlighter()
      .then(h => h.codeToHtml(code, { lang: language, theme: 'github-dark-default' }))
      .then(result => { if (!cancelled) setHtml(result) })
      .catch(console.warn)
    return () => { cancelled = true }
  }, [code, language])

  useEffect(() => {
    if (!copied) return undefined
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => setCopied(true)).catch(console.warn)
  }

  return (
    // sb-unstyled opts out of Storybook's docs typography, which resets <pre> padding
    <div className={cx('sb-unstyled', styles.codeBlock, className)} style={style}>
      <div className={styles.codeBlockHeader}>
        <span>{title ?? LANGUAGE_LABELS[language]}</span>
        <button type='button' onClick={copy} aria-label='Copy code'>
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {html
        // eslint-disable-next-line react/no-danger -- Shiki output of our own snippets
        ? <div className={styles.codeBlockBody} dangerouslySetInnerHTML={{ __html: html }} />
        : <div className={styles.codeBlockBody}><pre><code>{code}</code></pre></div>}
    </div>
  )
}

export const DocCard = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content -- content comes from children
  <a className={cx(styles.card, className)} {...props} />
)

export const DocSeparator = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.separator, className)} {...props} />
)
