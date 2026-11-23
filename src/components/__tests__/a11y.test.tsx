import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { configureAxe } from 'jest-axe'
import { PlusIcon } from 'lucide-react'

import type { ColumnDef } from 'src/components/Table'

import Accordion, { AccordionGroup } from 'src/components/Accordion'
import alert, { ToastContainer } from 'src/components/Alert'
import Avatar from 'src/components/Avatar'
import Button from 'src/components/Button'
import Checkbox from 'src/components/Checkbox'
import DatePicker from 'src/components/DatePicker'
import Dialog from 'src/components/Dialog'
import GroupButtons from 'src/components/GroupButtons'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Modal from 'src/components/Modal'
import MultiSelect from 'src/components/MultiSelect'
import Pagination from 'src/components/Pagination'
import Pill from 'src/components/Pill'
import PopOver from 'src/components/PopOver'
import Radio from 'src/components/Radio'
import Select from 'src/components/Select'
import Label from 'src/components/shared/Label'
import Table, { defaultColumnOptions } from 'src/components/Table'
import Tabs from 'src/components/Tabs'
import Tag from 'src/components/Tag'
import Text from 'src/components/Text'
import TextArea from 'src/components/TextArea'
import TimePicker from 'src/components/TimePicker'
import Toggle from 'src/components/Toggle'
import Tooltip from 'src/components/Tooltip'
import Upload from 'src/components/Upload'
import Flex from 'src/elements/Flex'

// Automated accessibility checks (axe) on each component, in its common states. They catch
// missing names and labels, invalid ARIA and roles, and duplicate ids. Not color contrast: jsdom
// doesn't lay out or paint, so axe can't measure it here.

// The date and time libraries ship only ES modules, which this Jest config doesn't transform (see
// DatePicker.test.tsx). They render nothing here: the checks cover the wrapper (label, button,
// error)
jest.mock('react-date-picker', () => ({ DatePicker: () => null }))
jest.mock('react-calendar', () => ({ __esModule: true, default: () => null }))
jest.mock('react-calendar/dist/shared/const.js', () => ({ CALENDAR_TYPE_LOCALES: {} }))
jest.mock('react-time-picker', () => ({ TimePicker: () => null }))

const axe = configureAxe({
  rules: {
    // A component on its own isn't a page: it has no landmarks around it
    region: { enabled: false },
  },
})

const expectNoViolations = async (element: Element = document.body) => {
  expect(await axe(element)).toHaveNoViolations()
}

const options = [
  { code: 'pt', name: 'Portugal' },
  { code: 'es', name: 'Spain' },
]
const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'pear', label: 'Pear' },
]

type Person = { id: string, name: string, age: number }
const people: Person[] = [{ id: '1', name: 'Ana', age: 29 }, { id: '2', name: 'Bruno', age: 41 }]
const columns: ColumnDef<Person>[] = [
  { ...defaultColumnOptions<Person>(), accessorKey: 'name', header: 'Name' },
  { ...defaultColumnOptions<Person>(), accessorKey: 'age', header: 'Age' },
]

describe('accessibility (axe)', () => {
  it('Button: text, icon only with a label, and loading', async () => {
    render(
      <>
        <Button>Save</Button>
        <Button iconComponent={PlusIcon} iconPosition='left'>New project</Button>
        <Button iconComponent={PlusIcon} aria-label='Add' />
        <Button isLoading>Saving</Button>
        <Button disabled>Disabled</Button>
      </>,
    )
    await expectNoViolations()
  })

  it('Input and TextArea, with and without an error', async () => {
    render(
      <>
        <Input name='email' label='Email' onChange={jest.fn()} />
        <Input
          name='password'
          label='Password'
          type='password'
          iconComponent={PlusIcon}
          onClickIcon={jest.fn()}
          iconLabel='Show password'
          state='error'
          errorMsg='Too short'
          onChange={jest.fn()}
        />
        <TextArea name='bio' label='Bio' state='error' errorMsg='Too long' onChange={jest.fn()} />
      </>,
    )
    await expectNoViolations()
  })

  it('Checkbox, Radio and Toggle, with errors', async () => {
    render(
      <>
        <Checkbox id='terms' label='I accept the terms' state='error' errorMsg='Required' />
        <fieldset>
          <legend>Plan</legend>
          <Radio id='plan-free' name='plan' label='Free' />
          <Radio id='plan-pro' name='plan' label='Pro' checked onChange={jest.fn()} />
        </fieldset>
        <Toggle id='news' label='Newsletter' state='error' errorMsg='Required' onChange={jest.fn()} />
      </>,
    )
    await expectNoViolations()
  })

  it('Select, closed with an error and open', async () => {
    const user = userEvent.setup()
    render(
      <Select
        id='country'
        label='Country'
        placeholder='Choose a country'
        value={null}
        options={options}
        getLabel={o => o.name}
        getValue={o => o.code}
        state='error'
        errorMsg='Required'
        onChange={jest.fn()}
      />,
    )
    await expectNoViolations()

    await user.click(screen.getByRole('combobox', { name: 'Country' }))
    await screen.findByRole('listbox')
    await expectNoViolations()
  })

  it('MultiSelect, closed with an error and open', async () => {
    const user = userEvent.setup()
    render(
      <MultiSelect
        name='fruits'
        label='Fruits'
        value={['apple']}
        options={fruits}
        getLabel={v => fruits.find(f => f.value === v)?.label ?? v}
        state='error'
        errorMsg='Pick one more'
        onChange={jest.fn()}
      />,
    )
    await expectNoViolations()

    await user.click(screen.getByRole('combobox'))
    await screen.findAllByRole('option')
    await expectNoViolations()
  })

  it('DatePicker and TimePicker, with errors', async () => {
    render(
      <>
        <DatePicker name='start' label='Start date' error='Required' onChange={jest.fn()} />
        <TimePicker name='time' label='Start time' error='Required' onChange={jest.fn()} />
        <TimePicker type='duration' label='Duration' error='Too long' onChange={jest.fn()} />
      </>,
    )
    await expectNoViolations()
  })

  it('Upload', async () => {
    render(<Upload id='avatar' placeholder='Profile picture' description='PNG or JPG' buttonText='Browse' />)
    await expectNoViolations()
  })

  it('Text, Label, Link, Tag, Pill, Avatar and Flex', async () => {
    render(
      <Flex direction='column'>
        <Text variant='h1'>Projects</Text>
        <Text variant='h2'>Recent</Text>
        <Text>A paragraph</Text>
        <Text variant='microCopy'>Small print</Text>
        <Label id='field' label='A label' description='Its description' />
        <input id='field' />
        <Link href='/docs'>Docs</Link>
        <Tag onClose={jest.fn()}>Design</Tag>
        <Pill onClose={jest.fn()}>Active</Pill>
        <Avatar name='Ana Silva' />
        <Avatar name='Bruno Costa' displayLabel description='Developer' />
        <Avatar name='Carla Dias' url='data:image/gif;base64,R0lGODlhAQABAAAAACw=' />
      </Flex>,
    )
    await expectNoViolations()
  })

  it('Accordion and AccordionGroup', async () => {
    render(
      <AccordionGroup>
        <Accordion header='What is it?' defaultOpen>An answer</Accordion>
        <Accordion header='How much does it cost?'>Another answer</Accordion>
      </AccordionGroup>,
    )
    await expectNoViolations()
  })

  it('Tabs, GroupButtons and Pagination', async () => {
    render(
      <>
        <Tabs tabs={[{ label: 'Profile' }, { label: 'Billing' }]}>
          <p>Profile settings</p>
          <p>Billing settings</p>
        </Tabs>
        <GroupButtons
          buttons={[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }]}
          selectedButton='day'
          onButtonSelect={jest.fn()}
        />
        <Pagination currentPage={2} totalPages={10} onPageChange={jest.fn()} />
      </>,
    )
    await expectNoViolations()
  })

  it('Table', async () => {
    render(<Table data={people} columns={columns} />)
    await expectNoViolations()
  })

  it('Dialog and Modal, open', async () => {
    const { unmount } = render(
      <Dialog
        open
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )
    await screen.findByRole('alertdialog')
    await expectNoViolations()
    unmount()

    render(
      <Modal open closeFn={jest.fn()} title='Edit profile' description='Change your details'>
        <p>Form goes here</p>
      </Modal>,
    )
    await screen.findByRole('dialog')
    await expectNoViolations()
  })

  it('Tooltip and PopOver, open', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Tooltip content='Copy link'><button type='button'>Share</button></Tooltip>
        <PopOver trigger={<button type='button'>Details</button>}><p>More information</p></PopOver>
      </>,
    )

    await user.hover(screen.getByRole('button', { name: 'Share' }))
    await screen.findByRole('tooltip')
    await expectNoViolations()

    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByText('More information')
    await expectNoViolations()
  })

  it('Alert toasts', async () => {
    render(<ToastContainer />)
    alert.success('Saved', 'Your changes were saved')
    alert.error('Failed', 'Try again later')
    await screen.findByText('Failed')
    await expectNoViolations()
  })
})
