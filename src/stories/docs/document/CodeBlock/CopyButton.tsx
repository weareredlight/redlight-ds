import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ICON_SIZE } from 'src/constants'

import styles from './styles.module.scss'

// Copies the code and shows "Copied" for 2 seconds
const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => setCopied(true)).catch(console.warn)
  }

  return (
    <button type='button' className={styles.copyButton} onClick={copy} aria-label='Copy code'>
      {copied ? <CheckIcon size={ICON_SIZE} /> : <CopyIcon size={ICON_SIZE} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default CopyButton
