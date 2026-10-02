import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

type OptionType = { label: string; value: string }

export type GroupButtonsProps = {
  buttons: OptionType[]
  selectedButton: string
  onButtonSelect: (button: string) => void
  className?: string
  style?: CSSProperties
}

const GroupButtons = ({
  buttons,
  selectedButton,
  onButtonSelect,
  className,
  style,
}: GroupButtonsProps) => (
  <div className={cx(styles.groupButtons, className)} style={style}>
    {buttons.map((button, index) => (
      <Button
        key={button.value + Number(index)}
        onClick={() => onButtonSelect(button.value)}
        variant={button.value === selectedButton ? 'primary' : 'secondary'}
        className={styles.button}
      >
        {button.label}
      </Button>
    ))}
  </div>
)

export const groupButtonsSelector = `.${styles.groupButtons}`

export default GroupButtons
