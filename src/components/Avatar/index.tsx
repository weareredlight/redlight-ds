import React from 'react'

import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

type AvatarOwnProps = {
  size?: 'normal' | 'small',
  name: string,
  displayLabel?: boolean,
  description?: string,
  online?: boolean,
  url?: string
  width?: string
  className?: string
  style?: CSSProperties
}

export type AvatarProps = AvatarOwnProps
  & Omit<React.HTMLAttributes<HTMLDivElement>, keyof AvatarOwnProps>

const Avatar = React.forwardRef(({
  size = 'normal',
  name,
  displayLabel = false,
  description,
  online = false,
  url,
  width,
  className,
  style,
  ...props
}: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
  const initials = name.split(' ').map(text => text.charAt(0)).join('')

  return (
    <div ref={ref} className={cx(styles.avatar, className)} style={style} {...props}>
      <div className={cx(styles.placeholder, styles[size])} style={{ width, height: width }}>
        {url ? <img src={url} alt={displayLabel ? '' : name} /> : (
          <span
            role={displayLabel ? undefined : 'img'}
            aria-label={displayLabel ? undefined : name}
            aria-hidden={displayLabel || undefined}
          >
            {initials}
          </span>
        )}
        {online && <div className={styles.status} />}
      </div>
      {displayLabel
        && (
          <Label
            label={name}
            description={description}
            className={styles.label}
            size={size}
          />
        )}
    </div>
  )
})

export const avatarSelector = `.${styles.avatar}`

export default Avatar
