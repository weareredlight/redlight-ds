import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeClosedIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-react'
import { useState } from 'react'

import type { ReactNode } from 'react'

import alert, { ToastContainer } from '../../../components/Alert'
import Button from '../../../components/Button'
import Checkbox from '../../../components/Checkbox'
import DatePicker from '../../../components/DatePicker'
import Input from '../../../components/Input'
import Pagination from '../../../components/Pagination'
import Select from '../../../components/Select'
import Flex from '../../../elements/Flex'
import { cx } from '../../../utils'

import styles from './styles.module.scss'

// Live demos of a few components and the icons they render, for the Icons docs page

/* ---------------------------------- Layout ---------------------------------- */

type CardProps = {
  title: string
  // The icons rendered by the component, as named in lucide-react
  icons: string[]
  hint?: string
  children: ReactNode
}

const Card = ({
  title, icons, hint, children
}: CardProps) => (
  <section className={styles.card}>
    <div className={styles.cardHeader}>
      <h6>{title}</h6>
      <div className={styles.iconNames}>
        {icons.map(icon => <code key={icon}>{icon}</code>)}
      </div>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
    {children}
  </section>
)

/* ---------------------------------- Demos ----------------------------------- */

const AddIcon = () => <PlusIcon />
const BackIcon = () => <ChevronLeftIcon />
const NextIcon = () => <ChevronRightIcon />
const SearchFieldIcon = () => <SearchIcon />
const ShowPasswordIcon = () => <EyeIcon />
const HidePasswordIcon = () => <EyeClosedIcon />

const ButtonDemo = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Flex direction='column' align='start' gap='sm'>
      <Flex wrap gap='xsm'>
        <Button iconComponent={BackIcon} iconPosition='left'>Back</Button>
        <Button iconComponent={NextIcon} iconPosition='right' variant='secondary'>Next</Button>
        <Button iconComponent={AddIcon} iconPosition='iconOnly' variant='tertiary'>Add</Button>
        <Button iconComponent={AddIcon} iconPosition='left' size='large'>Large</Button>
      </Flex>
      <Flex wrap gap='xsm'>
        <Button isLoading={isLoading} iconComponent={AddIcon} iconPosition='left'>Primary</Button>
        <Button isLoading={isLoading} variant='neutral'>Neutral</Button>
        <Button isLoading={isLoading} variant='secondary'>Secondary</Button>
      </Flex>
      <Checkbox
        id='icons-docs-button-loading'
        label='Loading'
        checked={isLoading}
        onChange={e => setIsLoading(e.target.checked)}
      />
    </Flex>
  )
}

const InputDemo = () => {
  const [search, setSearch] = useState('')
  const [password, setPassword] = useState('password123')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex direction='column' align='stretch' gap='sm'>
      <Input
        id='icons-docs-search'
        type='search'
        placeholder='Search...'
        iconPosition='left'
        iconComponent={SearchFieldIcon}
        value={search}
        onChange={e => setSearch(e.target.value)}
        fullWidth
      />
      <Input
        id='icons-docs-password'
        label='Password'
        type={showPassword ? 'text' : 'password'}
        iconComponent={showPassword ? ShowPasswordIcon : HidePasswordIcon}
        onClickIcon={() => setShowPassword(!showPassword)}
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
      />
    </Flex>
  )
}

const fruits = [
  'Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Lemon', 'Mango', 'Orange',
  'Peach', 'Pear', 'Pineapple', 'Plum', 'Raspberry', 'Strawberry', 'Watermelon',
].map(label => ({ label, value: label.toLowerCase() }))

const SelectDemo = () => {
  const [value, setValue] = useState<string | null>('mango')

  return (
    <Select
      id='icons-docs-select'
      label='Fruit'
      placeholder='Pick a fruit'
      value={value}
      onChange={e => setValue(e.target.value)}
      options={fruits}
      getLabel={o => o.label}
      getValue={o => o.value}
      fullWidth
    />
  )
}

const DatePickerDemo = () => {
  const [value, setValue] = useState('2026-10-15')

  return <DatePicker label='Date' value={value} onChange={setValue} fullWidth />
}

const PaginationDemo = () => {
  const [page, setPage] = useState(3)

  return (
    <Flex direction='column' align='start' gap='sm'>
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} variant='minimal' />
    </Flex>
  )
}

const ALERT_CONTAINER = 'icons-docs'

const AlertDemo = () => (
  <Flex wrap gap='xsm'>
    <Button
      variant='success'
      onClick={() => alert.success('Saved', 'Your changes were saved.', { containerId: ALERT_CONTAINER })}
    >
      Success
    </Button>
    <Button
      variant='danger'
      onClick={() => alert.error('Failed', 'Something went wrong.', { containerId: ALERT_CONTAINER })}
    >
      Error
    </Button>
    <Button
      onClick={() => alert.info('Heads up', 'Here is some information.', { containerId: ALERT_CONTAINER })}
    >
      Info
    </Button>
    <ToastContainer containerId={ALERT_CONTAINER} />
  </Flex>
)

/* ---------------------------------- Grid ------------------------------------ */

const ComponentIcons = () => (
  // sb-unstyled keeps Storybook's docs typography off the components
  <div className={cx('sb-unstyled', styles.grid)}>
    <Card
      title='Button'
      icons={['ChevronLeftIcon', 'ChevronRightIcon', 'PlusIcon', 'RefreshCwIcon (loading)']}
      hint='Tick "Loading" to see the spinner.'
    >
      <ButtonDemo />
    </Card>
    <Card title='Input' icons={['SearchIcon', 'EyeIcon', 'EyeClosedIcon']} hint='Click the eye to toggle.'>
      <InputDemo />
    </Card>
    <Card title='Select' icons={['ChevronDownIcon', 'ChevronUpIcon', 'CheckIcon']}>
      <SelectDemo />
    </Card>
    <Card title='DatePicker' icons={['CalendarDaysIcon']}>
      <DatePickerDemo />
    </Card>
    <Card title='Pagination' icons={['ChevronLeftIcon', 'ChevronRightIcon']}>
      <PaginationDemo />
    </Card>
    <Card title='Alert' icons={['CircleCheckIcon', 'CircleXIcon', 'InfoIcon']}>
      <AlertDemo />
    </Card>
  </div>
)

export default ComponentIcons
