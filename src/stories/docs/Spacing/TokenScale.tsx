/// <reference types="vite/client" />
import Flex from '../../../elements/Flex'
import { shadows } from '../../../theme/shadows'
import { sizes } from '../../../theme/sizes'
import { DocCode } from '../document'

import styles from './styles.module.scss'

type Scale = 'space' | 'sizes' | 'radii' | 'shadows'

const scales: Record<Scale, Record<string, string>> = {
  space: sizes.space,
  sizes: sizes.sizes,
  radii: sizes.radii,
  shadows,
}

// Components' source, read at build time, so "Used in" always matches the code
const sources = import.meta.glob<string>('../../../components/*/*.{scss,tsx}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const usedIn = (scale: Scale, token: string) => {
  const usage = new RegExp(`var\\(--${scale}-${token}[),\\s]`)
  const components = Object.entries(sources)
    .filter(([, source]) => usage.test(source))
    .map(([path]) => path.split('/').at(-2) as string)
  return Array.from(new Set(components)).sort()
}

// '0.5rem' -> '8px · 0.5rem'; px values and shadows are shown as they are
const formatValue = (value: string) => (value.endsWith('rem')
  ? `${parseFloat(value) * 16}px · ${value}`
  : value.replace(/\$colors\$/g, ''))

// divs, not spans: the docs page resets borders on spans
const Sample = ({ scale, value }: { scale: Scale, value: string }) => {
  const cssValue = `var(--${scale}-${value})`
  switch (scale) {
    case 'space':
      return <div className={styles.spaceSample} style={{ width: cssValue }} />
    case 'sizes':
      return <div className={styles.sizeSample} style={{ width: cssValue, height: cssValue }} />
    case 'radii':
      return <div className={styles.radiusSample} style={{ borderRadius: cssValue }} />
    default:
      return <div className={styles.shadowSample} style={{ boxShadow: cssValue }} />
  }
}

export type Props = {
  scale: Scale
  title: string
  description: string
  // what each token is for, e.g. { xxsm: 'Gap between an icon and its label' }
  guidelines?: Record<string, string>
}

export const TokenScale = ({
  scale, title, description, guidelines = {},
}: Props) => (
  <div className={styles.group}>
    <h3>{title}</h3>
    <p>{description}</p>
    <Flex direction='column' gap='xxsm'>
      {Object.entries(scales[scale]).map(([token, value]) => {
        const components = usedIn(scale, token)
        return (
          <div className={styles.token} key={token}>
            <div className={styles.sample}>
              <Sample scale={scale} value={token} />
            </div>
            <Flex direction='column' align='start' gap='xxxsm'>
              <span className='h7'>{token}</span>
              <span className='micro-copy'>{formatValue(value)}</span>
              <DocCode size='extraSmall'>{`--${scale}-${token}`}</DocCode>
            </Flex>
            <Flex direction='column' align='start' gap='xxxsm'>
              {guidelines[token] && <p>{guidelines[token]}</p>}
              <span className='micro-copy'>
                {components.length
                  ? `Used in: ${components.join(', ')}`
                  : 'Not used by the components yet'}
              </span>
            </Flex>
          </div>
        )
      })}
    </Flex>
  </div>
)

export default TokenScale
