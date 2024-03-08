import { ReactNode } from 'react'

import type * as Stitches from '@stitches/react'

import { StyledLink } from './styles'

export type Props = {
  href: string,
  children: ReactNode,
  openInNewTab?: boolean
  size?: Stitches.VariantProps<typeof StyledLink>['size'],
  danger?: Stitches.VariantProps<typeof StyledLink>['danger'],
  darkBackground?: Stitches.VariantProps<typeof StyledLink>['darkBackground'],
}

const Link = ({
  href,
  children,
  openInNewTab = true,
  size = 'regular',
  danger = false,
  darkBackground = false,
  ...props
}: Props) => (
  <StyledLink
    href={href}
    target={openInNewTab ? '_blank' : ''}
    rel='noreferrer'
    size={size}
    danger={danger}
    darkBackground={darkBackground}
    {...props}
  >
    {children}
  </StyledLink>
)

export default Link
