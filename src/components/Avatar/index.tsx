import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Label from '../shared/Label'

import styles from './styles.module.scss'

export type AvatarProps = {
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

const Avatar = ({
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
}: AvatarProps) => {
  const initials = name.split(' ').map(text => text.charAt(0)).join('')

  return (
    <div className={cx(styles.avatar, className)} style={style} {...props}>
      <div className={cx(styles.placeholder, styles[size])} style={{ width, height: width }}>
        {url ? <img src={url} alt={name} /> : initials}
        {online && <div className={styles.status} />}
      </div>
      {displayLabel
        && (
          <Label
            label={name}
            description={description}
            className={styles.label}
          />
        )}
    </div>
  )
}

export const avatarSelector = `.${styles.avatar}`

export default Avatar
