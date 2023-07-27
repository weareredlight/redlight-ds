import type * as Stitches from '@stitches/react'

import Label from '../shared/Label'

import {
  StyledAvatar, StyledPlaceHolder, StyledStatus
} from './styles'

export type Props = {
  size?: Stitches.VariantProps<typeof StyledPlaceHolder>['size'],
  name: string,
  displayLabel?: boolean,
  description?: string,
  online?: boolean,
  url?: string
}

const Avatar = ({
  size, name, displayLabel, description, online, url,
  ...props
}: Props) => {
  const initials = name.split(' ').map(text => text.charAt(0)).join('')

  return (
    <StyledAvatar {...props}>
      <StyledPlaceHolder size={size}>
        {url ? <img src={url} alt={name} /> : initials}
        {online && <StyledStatus />}
      </StyledPlaceHolder>
      {displayLabel
        && (
          <Label
            label={name}
            description={description}
          />
        )}
    </StyledAvatar>
  )
}

export default Avatar
