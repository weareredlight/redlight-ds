import React from 'react'

import Flex from '../../../elements/Flex'
import { colors } from '../../../theme/colors'
import { capitalize } from '../../../utils'
import { DocCode } from '../document'

import styles from './styles.module.scss'

export type Props = {
  variant: string
  description?: string
}

export const ColorStyles = ({
  variant = 'primary',
  description,
  ...props
}: Props) => (
  <div className={styles.group} {...props}>
    <h3>{`${capitalize(variant)} Color`}</h3>
    <p>{description}</p>
    <Flex gap='xxsm' wrap>
      {Object.keys(colors)
        .filter(key => key.startsWith(variant))
        .map(key => (
          <div className={styles.color}>
            <span className={styles.swatch} key={key} style={{ backgroundColor: colors[key] }} />
            <Flex direction='column' gap='xxxsm'>
              <span className='h7'>{colors[key]}</span>
              <DocCode size='extraSmall'>
                {`--colors-${key}`}
              </DocCode>
            </Flex>
          </div>
        ))}
    </Flex>
  </div>
)

export default ColorStyles
