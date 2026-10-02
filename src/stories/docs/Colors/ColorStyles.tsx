import React from 'react'

import type { ColorType } from '../../../theme'

import Flex from '../../../elements/Flex'
import { colors } from '../../../theme/colors'
import { capitalize } from '../../../utils'
import { DocCode } from '../document'

import styles from './styles.module.scss'

export type Props = {
  variant: string
  title?: string
  description?: string
  // explicit list of colors; defaults to every color starting with `variant`
  keys?: ColorType[]
}

export const ColorStyles = ({
  variant = 'primary',
  title,
  description,
  keys,
  ...props
}: Props) => {
  const colorKeys = keys
    || (Object.keys(colors) as ColorType[]).filter(key => key.startsWith(variant))

  return (
    <div className={styles.group} {...props}>
      <h3>{title || `${capitalize(variant)} Color`}</h3>
      <p>{description}</p>
      <Flex gap='xxsm' wrap>
        {colorKeys.map(key => (
          <div className={styles.color} key={key}>
            <span className={styles.swatch} style={{ backgroundColor: colors[key] }} />
            <Flex direction='column' gap='xxxsm'>
              <span className='h7'>{colors[key]}</span>
              <DocCode size='extraSmall'>{`--colors-${key}`}</DocCode>
            </Flex>
          </div>
        ))}
      </Flex>
    </div>
  )
}

export default ColorStyles
