import Button from '../Button'

import { StyledGroupButtons } from './styles'

type OptionType = { label: string; value: string }
type ButtonGroupProps = {
  buttons: OptionType[]
  selectedButton: string
  onButtonSelect: (button: string) => void
}

const GroupButtons = ({
  buttons,
  selectedButton,
  onButtonSelect,
}: ButtonGroupProps) => (
  <StyledGroupButtons>
    {buttons.map((button, index) => (
      <Button
        key={button.value + Number(index)}
        onClick={() => onButtonSelect(button.value)}
        variant={button.value === selectedButton ? 'primary' : 'secondary'}
      >
        {button.label}
      </Button>
    ))}
  </StyledGroupButtons>
)

export default GroupButtons
