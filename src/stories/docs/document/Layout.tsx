import React from 'react'

import { LAST_UPDATED, VERSION } from '../../../constants'
import { cx } from '../../../utils'

import styles from './Layout.module.scss'

// The page's frame: <Doc> holds a colored <DocHeader> and a <DocBody> with the content

type DivProps = React.HTMLAttributes<HTMLDivElement>

export const Doc = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.document, className)} {...props} />
)

export const DocHeader = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.header, className)} {...props} />
)

export const DocVersion = () => (
  <p>{`ver ${VERSION} | Last updated: ${LAST_UPDATED}`}</p>
)

export const DocBody = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.body, className)} {...props} />
)

// Content pieces

// A token name or short value in a dark chip, e.g. a CSS variable
export const DocCode = ({
  size = 'small',
  className,
  ...props
}: { size?: 'small' | 'extraSmall' } & React.HTMLAttributes<HTMLElement>) => (
  <code className={cx(styles.code, styles[size], className)} {...props} />
)

// A link to another docs page
export const DocCard = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content -- content comes from children
  <a className={cx(styles.card, className)} style={{ textDecoration: 'none' }} target='_top' {...props} />
)

export const DocSeparator = ({ className, ...props }: DivProps) => (
  <div className={cx(styles.separator, className)} {...props} />
)
