import { ReactNode } from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type LinkProps = {
  href: string,
  children: ReactNode,
  openInNewTab?: boolean
  size?: 'regular' | 'small',
  danger?: boolean,
  darkBackground?: boolean,
  className?: string
  style?: CSSProperties
}

const Link = ({
  href,
  children,
  openInNewTab = true,
  size = 'regular',
  danger = false,
  darkBackground = false,
  className,
  style,
  ...props
}: LinkProps) => (
  <a
    href={href}
    target={openInNewTab ? '_blank' : ''}
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
)

export const linkSelector = `.${styles.link}`

export default Link
