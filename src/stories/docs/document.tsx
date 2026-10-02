import React from 'react'

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
  size = 'regular',
  className,
  ...props
}: { size?: 'regular' | 'small' | 'extraSmall' } & React.HTMLAttributes<HTMLElement>) => (
  <code className={cx(styles.code, styles[size], className)} {...props} />
)

export const DocCard = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content -- content comes from children
  <a className={cx(styles.card, className)} {...props} />
)

export const DocSeparator = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.separator, className)} {...props} />
)
