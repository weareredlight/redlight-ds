// Global styles first: the font @import must come before any other CSS rule.
import './styles/global.scss'
import 'virtual:rl-tokens.css'

import type { AvatarProps } from 'src/components/Avatar'
import type { ButtonProps } from 'src/components/Button'
import type { CheckboxProps } from 'src/components/Checkbox'
import type { DatePickerProps } from 'src/components/DatePicker'
import type { DialogProps } from 'src/components/Dialog'
import type { GroupButtonsProps } from 'src/components/GroupButtons'
import type { InputProps } from 'src/components/Input'
import type { LinkProps } from 'src/components/Link'
import type { ModalProps } from 'src/components/Modal'
import type { MultiSelectProps } from 'src/components/MultiSelect'
import type { PaginationProps } from 'src/components/Pagination'
import type { PillProps } from 'src/components/Pill'
import type { PopOverProps } from 'src/components/PopOver'
import type { RadioProps } from 'src/components/Radio'
import type { SelectProps } from 'src/components/Select'
import type { LabelProps } from 'src/components/shared/Label'
import type {
  TableProps,
  ColumnDef,
  SortingState,
  ColumnSort,
} from 'src/components/Table'
import type { TabsProps } from 'src/components/Tabs'
import type { TagProps } from 'src/components/Tag'
import type { TextProps } from 'src/components/Text'
import type { TextAreaProps } from 'src/components/TextArea'
import type { TimePickerProps } from 'src/components/TimePicker'
import type { ToggleProps } from 'src/components/Toggle'
import type { TooltipProps } from 'src/components/Tooltip'
import type { UploadProps } from 'src/components/Upload'
import type { ColorType } from 'src/theme'

import alert, { ToastContainer } from 'src/components/Alert'
import Avatar, { avatarSelector } from 'src/components/Avatar'
import Button, { buttonSelector } from 'src/components/Button'
import Checkbox, { checkboxSelector } from 'src/components/Checkbox'
import DatePicker, { datePickerSelector } from 'src/components/DatePicker'
import Dialog from 'src/components/Dialog'
import GroupButtons, { groupButtonsSelector } from 'src/components/GroupButtons'
import Input, { inputSelector } from 'src/components/Input'
import Link, { linkSelector } from 'src/components/Link'
import Modal from 'src/components/Modal'
import MultiSelect from 'src/components/MultiSelect'
import Pagination, { paginationSelector } from 'src/components/Pagination'
import Pill, { pillSelector } from 'src/components/Pill'
import PopOver, { popOverSelector } from 'src/components/PopOver'
import Radio, { radioSelector } from 'src/components/Radio'
import Select, { selectSelector } from 'src/components/Select'
import Label, { labelSelector } from 'src/components/shared/Label'
import Table, {
  defaultColumnOptions,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
  tableSelector,
} from 'src/components/Table'
import Tabs, { tabsSelector } from 'src/components/Tabs'
import Tag, { tagSelector } from 'src/components/Tag'
import Text, { textSelector } from 'src/components/Text'
import TextArea, { textAreaSelector } from 'src/components/TextArea'
import TimePicker, { timePickerSelector } from 'src/components/TimePicker'
import Toggle, { toggleSelector } from 'src/components/Toggle'
import Tooltip from 'src/components/Tooltip'
import Upload, { uploadSelector } from 'src/components/Upload'
import Flex, { flexSelector } from 'src/elements/Flex'
import {
  setupTheme,
  theme,
  colorOptions,
  getColor,
} from 'src/theme'

export type {
  AvatarProps,
  ButtonProps,
  CheckboxProps,
  DatePickerProps,
  DialogProps,
  GroupButtonsProps,
  InputProps,
  LinkProps,
  ModalProps,
  MultiSelectProps,
  PaginationProps,
  PillProps,
  PopOverProps,
  RadioProps,
  SelectProps,
  LabelProps,
  TableProps,
  TabsProps,
  TagProps,
  TextProps,
  TextAreaProps,
  TimePickerProps,
  ToggleProps,
  TooltipProps,
  UploadProps,
  ColorType,
}

export {
  setupTheme,
  theme,
  colorOptions,
  getColor,
}

export {
  // Alert imports
  alert,
  ToastContainer,
  // Components imports
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  Dialog,
  GroupButtons,
  Input,
  Link,
  Modal,
  MultiSelect,
  Pagination,
  Pill,
  PopOver,
  Radio,
  Select,
  // Table imports
  Table,
  defaultColumnOptions,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
  ColumnDef,
  SortingState,
  ColumnSort,
  //
  Tabs,
  Tag,
  TextArea,
  TimePicker,
  Toggle,
  Tooltip,
  Upload,
  Text,
  Label,
  Flex,
}

// Root-element selectors, to style components from the outside (`${buttonSelector} { ... }`).
export {
  avatarSelector,
  buttonSelector,
  checkboxSelector,
  datePickerSelector,
  flexSelector,
  groupButtonsSelector,
  inputSelector,
  labelSelector,
  linkSelector,
  paginationSelector,
  pillSelector,
  popOverSelector,
  radioSelector,
  selectSelector,
  tableSelector,
  tabsSelector,
  tagSelector,
  textAreaSelector,
  textSelector,
  timePickerSelector,
  toggleSelector,
  uploadSelector,
}
