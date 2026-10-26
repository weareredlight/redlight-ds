import React from 'react'

import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

type FlexProps = {
  as?: React.ElementType
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly'
  wrap?: boolean
  gap?: 'xxxsm' | 'xxsm' | 'xsm' | 'sm' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg'
  debug?: boolean
} & React.HTMLAttributes<HTMLElement>

const Flex = React.forwardRef(({
  as: Component = 'div',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap,
  className,
  style,
  debug,
  ...props
}: FlexProps, ref: React.Ref<HTMLElement>) => (
  <Component
    ref={ref}
    className={cx(
      styles.flex,
      styles[`direction${capitalize(direction)}`],
      styles[`align${capitalize(align)}`],
      styles[`justify${capitalize(justify)}`],
      wrap && styles.wrap,
      gap && styles[`gap-${gap}`],
      className,
    )}
    style={debug ? {
      ...style,
      backgroundColor: debug
        ? '#000000'.replaceAll('0', () => Math.floor(Math.random() * 16).toString(16))
        : undefined,
    } : style}
    {...props}
  />
))

export const flexSelector = `.${styles.flex}`

export default Flex
