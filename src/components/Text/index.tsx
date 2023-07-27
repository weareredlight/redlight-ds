import type { ColorType } from '../../stitches'
import type * as Stitches from '@stitches/react'
import type { ReactNode } from 'react'

import { StyledText } from './styles'

export type Props = {
  variant?: Stitches.VariantProps<typeof StyledText>['variant']
  color?: ColorType
  css?: Stitches.CSS
  children?: string | ReactNode
}

const Text = ({
  color = 'primary',
  children,
  css,
  ...props
}: Props) => (
  <StyledText css={{ color: `$${color}`, ...css }} {...props}>
    {children}
  </StyledText>
)

export default Text
