import React, { useEffect, useState } from 'react'
// Fine-grained imports, so the build only includes these languages and theme (not all of Shiki's)
import { createHighlighterCore } from 'shiki/dist/core.mjs'
import { createJavaScriptRegexEngine } from 'shiki/dist/engine-javascript.mjs'

import styles from './styles.module.scss'

export type CodeLanguage = 'tsx' | 'css' | 'scss' | 'bash'

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

type HighlightedCodeProps = {
  code: string
  language: CodeLanguage
} & React.HTMLAttributes<HTMLDivElement>

// The code, colored by Shiki. Shows the plain code until the highlighter loads.
const HighlightedCode = ({ code, language, ...props }: HighlightedCodeProps) => {
  const [html, setHtml] = useState<string>()

  useEffect(() => {
    let cancelled = false
    getHighlighter()
      .then(h => h.codeToHtml(code, { lang: language, theme: 'github-dark-default' }))
      .then(result => { if (!cancelled) setHtml(result) })
      .catch(console.warn)
    return () => { cancelled = true }
  }, [code, language])

  return html
    // eslint-disable-next-line react/no-danger -- Shiki output of our own snippets
    ? <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} {...props} />
    : <div className={styles.code} {...props}><pre><code>{code}</code></pre></div>
}

export default HighlightedCode
