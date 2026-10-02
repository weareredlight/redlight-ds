import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import Select, { components } from 'react-select'

import type { CSSProperties } from 'react'
import type {
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
} from 'react-select'

import Flex from '../../elements/Flex'
import { colors } from '../../theme/colors'
import { capitalize, cx } from '../../utils'
import Pill from '../Pill'
import Label from '../shared/Label'
import Text from '../Text'

import { selectStyles } from './selectStyles'
import styles from './styles.module.scss'

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
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  errorMsg?: string
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
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
  className,
  style,
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
      className={className}
      style={{ width: fullWidth ? '100%' : 'fit-content', ...style }}
    >
      {label && <Label id={name} label={label} />}
      <div className={cx(styles.wrapper, colors.accent && styles.accent, styles[`state${capitalize(state)}`])}>
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
          <Flex className={styles.optionsCount}>
            <Text variant='subHeadingSmall' color='white'>
              {value?.length}
            </Text>
          </Flex>
        )}
      </div>
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
          style={{ flexWrap: 'wrap', maxWidth: '256px' }}
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
