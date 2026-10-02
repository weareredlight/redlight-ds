import React from 'react'

import { capitalize, cx } from '../../utils'

import styles from './styles.module.scss'

export type FlexProps = {
  as?: React.ElementType
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly'
  wrap?: boolean
  gap?: 'xxxsm' | 'xxsm' | 'xsm' | 'sm' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg'
} & React.HTMLAttributes<HTMLElement>

export const Flex = React.forwardRef(({
  as: Component = 'div',
  direction = 'row',
  align = 'center',
  justify = 'center',
  wrap = false,
  gap,
  className,
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
    {...props}
  />
))

export const flexSelector = `.${styles.flex}`

export default Flex
