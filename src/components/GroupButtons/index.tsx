import Button from '../Button'

import { StyledGroupButtons } from './styles'

type ButtonGroupProps = {
  buttons: {
    label: string
    value: string
  }[]
  selectedButton: string
  onButtonSelect: (button: string) => void
}

const GroupButtons = ({
  buttons,
  selectedButton,
  onButtonSelect,
}: ButtonGroupProps) => (
  <StyledGroupButtons>
    {buttons.map(button => (
      <Button
        key={button.value}
        onClick={() => onButtonSelect(button.value)}
        variant={button.value === selectedButton ? 'primary' : 'secondary'}
      >
        {button.label}
      </Button>
    ))}
  </StyledGroupButtons>
)

export default GroupButtons
