import React from 'react'

import type { CSSProperties, ReactNode } from 'react'

import { cx } from 'src/utils'

import styles from './styles.module.scss'

type LinkOwnProps = {
  href: string,
  children: ReactNode,
  openInNewTab?: boolean
  size?: 'regular' | 'small',
  danger?: boolean,
  darkBackground?: boolean,
  className?: string
  style?: CSSProperties
}

export type LinkProps = LinkOwnProps
  & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkOwnProps>

const Link = React.forwardRef(({
  href,
  children,
  openInNewTab = true,
  size = 'regular',
  danger = false,
  darkBackground = false,
  className,
  style,
  ...props
}: LinkProps, ref: React.Ref<HTMLAnchorElement>) => (
  <a
    ref={ref}
    href={href}
    target={openInNewTab ? '_blank' : undefined}
    rel='noreferrer'
    className={cx(
      styles.link,
      styles[size],
      danger && styles.danger,
      darkBackground && styles.darkBackground,
      className,
    )}
    style={style}
    {...props}
  >
    {children}
  </a>
))

export const linkSelector = `.${styles.link}`

export default Link
