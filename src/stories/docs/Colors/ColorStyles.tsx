import React from 'react'

import { StyledColorsGroup, StyledColor, StyledIndicator } from './styles'

import Text from 'components/Text'
import Flex from 'elements/Flex'
import { StyledCode } from 'styles/Document.styles'
import { themeColors } from 'theme'
import { capitalize } from 'utils'

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
      {Object.keys(themeColors)
        .filter(key => key.startsWith(variant))
        .map(key => (
          <StyledColor>
            <StyledIndicator key={key} style={{ backgroundColor: themeColors[key] }} />
            <Flex direction='column' gap='xxxsm'>
              <Text variant='h7' color='neutral700'>{themeColors[key]}</Text>
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
