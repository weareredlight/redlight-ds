import type { ColorType } from 'src/theme'

import Flex from 'src/elements/Flex'
import { DocCode } from 'src/stories/docs/document'
import { colors } from 'src/theme/colors'
import { capitalize } from 'src/utils'

import styles from './styles.module.scss'

type Props = {
  variant: string
  title?: string
  description?: string
  // explicit list of colors; defaults to every color starting with `variant`
  keys?: ColorType[]
}

const ColorStyles = ({
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
