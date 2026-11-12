import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import React, { useImperativeHandle, useRef } from 'react'
import Select, { components } from 'react-select'

import type { CSSProperties } from 'react'
import type {
  ClassNamesConfig,
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
  SelectInstance,
} from 'react-select'

import Pill from 'src/components/Pill'
import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import Flex from 'src/elements/Flex'
import { useField } from 'src/hooks'
import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

type OptionType = { label: string; value: string }
export type MultiSelectProps = {
  name: string
  label?: string
  value: string[]
  onChange: (event: string[]) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
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

// The counter is accent when the theme has one, primary otherwise (an empty accent is unset).
const countTextStyle = { '--text-color': 'var(--colors-onAccent, var(--colors-onPrimary))' } as CSSProperties

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, true>) => {
  const { menuIsOpen } = props.selectProps

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUpIcon size={ICON_SIZE} /> : <ChevronDownIcon size={ICON_SIZE} />}
    </components.DropdownIndicator>
  )
}

// react-select renders unstyled and each part takes a class from styles.module.scss
const classNames: ClassNamesConfig<OptionType, true> = {
  control: ({ isFocused }) => cx(styles.control, isFocused && styles.isFocused),
  valueContainer: () => styles.valueContainer,
  placeholder: () => styles.placeholder,
  input: () => styles.input,
  dropdownIndicator: () => styles.indicator,
  menu: () => styles.menu,
  menuList: () => styles.menuList,
  option: ({ isFocused, isDisabled }) => cx(
    styles.option,
    isFocused && styles.isFocused,
    isDisabled && styles.isDisabled,
  ),
  noOptionsMessage: () => styles.noOptions,
}

const CustomOption = (
  props: OptionProps<OptionType, true>,
) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && <CheckIcon size={ICON_SIZE} />}
  </components.Option>
)

const MultiSelect = React.forwardRef(({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  hasPills = false,
  getLabel,
  state = 'null',
  errorMsg,
  fullWidth = false,
  className,
  style,
}: MultiSelectProps, ref: React.Ref<HTMLInputElement>) => {
  const { errorId, ariaProps } = useField(name, state === 'error', Boolean(errorMsg))
  const selectRef = useRef<SelectInstance<OptionType, true>>(null)
  useImperativeHandle(ref, () => selectRef.current?.inputRef as HTMLInputElement)

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
      <div className={cx(styles.wrapper, styles[`state${capitalize(state)}`])}>
        <Select
          ref={selectRef}
          inputId={name}
          onBlur={onBlur}
          aria-invalid={ariaProps['aria-invalid']}
          aria-errormessage={ariaProps['aria-describedby']}
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
          unstyled
          classNames={classNames}
          isDisabled={state === 'disabled'}
          components={{
            DropdownIndicator,
            // Unstyled, the separator is still a 1px-wide empty column
            IndicatorSeparator: null,
            Option: props => CustomOption(props),
          }}
        />
        {!hasPills && value?.length > 0 && (
          <Flex className={styles.optionsCount}>
            <Text variant='subHeadingSmall' style={countTextStyle}>
              {value?.length}
            </Text>
          </Flex>
        )}
      </div>
      {(state === 'error' && errorMsg) && (
        <Text id={errorId} color='danger' variant='microCopy'>
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
})

export default MultiSelect
