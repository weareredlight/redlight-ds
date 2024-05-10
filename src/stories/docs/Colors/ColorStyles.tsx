import React from 'react'

import Flex from '../../../elements/Flex'
import { colors } from '../../../theme/colors'
import { capitalize } from '../../../utils'
import { StyledCode } from '../document.styles'

import { StyledColorsGroup, StyledColor, StyledIndicator } from './styles'

export type Props = {
  variant: string
  description?: string
}

export const ColorStyles = ({
  variant = 'primary',
  description,
  ...props
}: Props) => (
  <StyledColorsGroup {...props}>
    <h3>{`${capitalize(variant)} Color`}</h3>
    <p>{description}</p>
    <Flex gap='xxsm' wrap>
      {Object.keys(colors)
        .filter(key => key.startsWith(variant))
        .map(key => (
          <StyledColor>
            <StyledIndicator key={key} style={{ backgroundColor: colors[key] }} />
            <Flex direction='column' gap='xxxsm'>
              <span className='h7'>{colors[key]}</span>
              <StyledCode size='extraSmall'>
                $
                {key}
              </StyledCode>
            </Flex>
          </StyledColor>
        ))}
    </Flex>
  </StyledColorsGroup>
)

export default ColorStyles
