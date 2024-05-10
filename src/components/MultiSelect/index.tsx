import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import Select, { components } from 'react-select'

import type * as Stitches from '@stitches/react'
import type {
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
} from 'react-select'

import Flex from '../../elements/Flex'
import Pill from '../Pill'
import Label from '../shared/Label'
import Text from '../Text'

import { selectStyles, SelectWrapper } from './styles'

type OptionType = { label: string; value: string }
export type MultiSelectProps = {
  name: string
  label?: string
  value: string[]
  onChange: (event: string[]) => void
  options: OptionType[]
  placeholder?: string
  hasPills?: boolean
  getLabel: (value: string) => string
  state?: Stitches.VariantProps<typeof SelectWrapper>['state']
  errorMsg?: string
  fullWidth?: boolean
}

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, true>) => {
  const { menuIsOpen } = props.selectProps

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </components.DropdownIndicator>
  )
}

const CustomOption = (
  props: OptionProps<OptionType, true>,
) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && <CheckIcon />}
  </components.Option>
)

const MultiSelect = ({
  name,
  label,
  value,
  onChange,
  options,
  placeholder,
  hasPills = false,
  getLabel,
  state = 'null',
  errorMsg,
  fullWidth = false,
}: MultiSelectProps) => {
  const handleRemoveOption = (
    removedValue: string,
    value: string[],
    onChange: (event: string[]) => void,
  ) => {
    const newArray = value.filter((item: string) => item !== removedValue)
    onChange(newArray)
  }

  return (
    <Flex
      direction='column'
      align='start'
      gap='xxxsm'
      css={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {label && <Label id={name} label={label} />}
      <SelectWrapper state={state}>
        <Select
          id={name}
          value={
            value?.length
              ? value.map((item: string) => ({
                value: item,
                label: getLabel(item),
              }))
              : []
          }
          onChange={(newValue: MultiValue<OptionType>) => {
            onChange(newValue.map((item: OptionType) => item.value))
          }}
          isMulti
          options={options}
          placeholder={placeholder}
          closeMenuOnSelect={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          styles={selectStyles}
          isDisabled={state === 'disabled'}
          components={{
            DropdownIndicator,
            Option: props => CustomOption(props),
          }}
        />
        {!hasPills && value?.length > 0 && (
          <Flex className='options-count'>
            <Text variant='subHeadingSmall' color='white'>
              {value?.length}
            </Text>
          </Flex>
        )}
      </SelectWrapper>
      {(state === 'error' && errorMsg) && (
        <Text color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
      {value?.length > 0 && hasPills && (
        <Flex
          align='start'
          justify='start'
          gap='xxxsm'
          css={{ flexWrap: 'wrap', maxWidth: '256px' }}
        >
          {value?.map((item: string) => (
            <Pill
              key={item}
              onClose={() => handleRemoveOption(item, value, onChange)}
            >
              {getLabel(item)}
            </Pill>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default MultiSelect
