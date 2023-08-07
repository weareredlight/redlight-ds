import React from 'react'

import Text from '../../../components/Text'
import Flex from '../../../elements/Flex'
import { colors } from '../../../theme/colors'
import { capitalize } from '../../../utils'
import { StyledCode } from '../../Document.styles'

import { StyledColorsGroup, StyledColor, StyledIndicator } from './styles'

export type Props = {
  variant: string
  description?: string
}

const ColorStyles = ({
  variant = 'primary',
  description,
  ...props
}: Props) => (
  <StyledColorsGroup {...props}>
    <Text variant='h3' color='neutral800'>{`${capitalize(variant)} Color`}</Text>
    <Text variant='textBlock' color='neutral700'>{description}</Text>
    <Flex gap='xxsm' wrap>
      {Object.keys(colors)
        .filter(key => key.startsWith(variant))
        .map(key => (
          <StyledColor>
            <StyledIndicator key={key} style={{ backgroundColor: colors[key] }} />
            <Flex direction='column' gap='xxxsm'>
              <Text variant='h7' color='neutral700'>{colors[key]}</Text>
              <StyledCode size='small'>
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
