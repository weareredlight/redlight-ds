// Root-element selectors, to style components from the outside (`${buttonSelector} { ... }`).
// They live here and not in the component files: those are Client Components ('use client', see
// vite.lib.config.ts), so in React Server Components their exports aren't plain values. From here,
// the selectors are strings everywhere.

import accordionStyles from 'src/components/Accordion/styles.module.scss'
import avatarStyles from 'src/components/Avatar/styles.module.scss'
import buttonStyles from 'src/components/Button/styles.module.scss'
import checkboxStyles from 'src/components/Checkbox/styles.module.scss'
import datePickerStyles from 'src/components/DatePicker/styles.module.scss'
import groupButtonsStyles from 'src/components/GroupButtons/styles.module.scss'
import inputStyles from 'src/components/Input/styles.module.scss'
import linkStyles from 'src/components/Link/styles.module.scss'
import paginationStyles from 'src/components/Pagination/styles.module.scss'
import pillStyles from 'src/components/Pill/styles.module.scss'
import popOverStyles from 'src/components/PopOver/styles.module.scss'
import radioStyles from 'src/components/Radio/styles.module.scss'
import selectStyles from 'src/components/Select/styles.module.scss'
import labelStyles from 'src/components/shared/Label/styles.module.scss'
import tableStyles from 'src/components/Table/styles.module.scss'
import tabsStyles from 'src/components/Tabs/styles.module.scss'
import tagStyles from 'src/components/Tag/styles.module.scss'
import textStyles from 'src/components/Text/styles.module.scss'
import textAreaStyles from 'src/components/TextArea/styles.module.scss'
import timePickerStyles from 'src/components/TimePicker/styles.module.scss'
import toggleStyles from 'src/components/Toggle/styles.module.scss'
import uploadStyles from 'src/components/Upload/styles.module.scss'
import flexStyles from 'src/elements/Flex/styles.module.scss'

export const accordionSelector = `.${accordionStyles.accordion}`
export const avatarSelector = `.${avatarStyles.avatar}`
export const buttonSelector = `.${buttonStyles.button}`
export const checkboxSelector = `.${checkboxStyles.checkbox}`
export const datePickerSelector = `.${datePickerStyles.datePicker}`
export const flexSelector = `.${flexStyles.flex}`
export const groupButtonsSelector = `.${groupButtonsStyles.groupButtons}`
export const inputSelector = `.${inputStyles.input}`
export const labelSelector = `.${labelStyles.label}`
export const linkSelector = `.${linkStyles.link}`
export const paginationSelector = `.${paginationStyles.pagination}`
export const pillSelector = `.${pillStyles.pill}`
export const popOverSelector = `.${popOverStyles.content}`
export const radioSelector = `.${radioStyles.radio}`
export const selectSelector = `.${selectStyles.select}`
export const tableSelector = `.${tableStyles.table}`
export const tabsSelector = `.${tabsStyles.tabs}`
export const tagSelector = `.${tagStyles.tag}`
export const textAreaSelector = `.${textAreaStyles.textArea}`
export const textSelector = `.${textStyles.text}`
export const timePickerSelector = `.${timePickerStyles.timePicker}`
export const toggleSelector = `.${toggleStyles.toggle}`
export const uploadSelector = `.${uploadStyles.upload}`
