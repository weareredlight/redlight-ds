import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { createRef } from 'react'

import type { MouseEvent } from 'react'
import type { CalendarProps } from 'react-calendar'
import type { DatePickerProps } from 'react-date-picker'

import DatePicker from 'src/components/DatePicker'

// react-date-picker and react-calendar ship only ES modules, which this Jest config doesn't
// transform. The mocks record the props our wrapper passes, so we can test how it maps them
const mockDateInput = jest.fn((_props: DatePickerProps) => null)
jest.mock('react-date-picker', () => ({
  DatePicker: (props: DatePickerProps) => mockDateInput(props),
}))

const mockCalendar = jest.fn((_props: CalendarProps) => null)
jest.mock('react-calendar', () => ({
  __esModule: true,
  default: (props: CalendarProps) => mockCalendar(props),
}))
// The locales whose week doesn't start on Monday, which DatePicker reads from react-calendar
jest.mock('react-calendar/dist/shared/const.js', () => ({
  CALENDAR_TYPE_LOCALES: { gregory: ['en-US'] },
}))

type CalendarTileClassName = (args: { date: Date; view: string }) => string

const dateInputProps = () => mockDateInput.mock.lastCall![0]
const calendarProps = () => mockCalendar.mock.lastCall![0]
const clickEvent = {} as MouseEvent<HTMLButtonElement>

const openCalendar = async (name = 'Open calendar') => {
  const user = userEvent.setup()
  await user.click(screen.getByRole('button', { name }))
  return user
}

describe('DatePicker', () => {
  beforeEach(() => {
    mockDateInput.mockClear()
    mockCalendar.mockClear()
  })

  it('shows its label and gives the value to the date fields', () => {
    render(<DatePicker name='startDate' label='Start date' value='2024-03-15' onChange={jest.fn()} />)

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(dateInputProps().name).toBe('startDate')
  })

  it('gives the date fields the same day in any timezone', () => {
    render(<DatePicker name='startDate' value='2024-03-15' onChange={jest.fn()} />)

    // Read as UTC, a 'YYYY-MM-DD' string is the previous day west of UTC (TZ=America/New_York)
    const value = dateInputProps().value as Date
    expect([value.getFullYear(), value.getMonth(), value.getDate()]).toEqual([2024, 2, 15])
  })

  it('gives each date field and the calendar button an accessible name that includes the label', () => {
    render(<DatePicker name='startDate' label='Start date' onChange={jest.fn()} />)

    expect(dateInputProps()).toMatchObject({
      dayAriaLabel: 'Start date, day',
      monthAriaLabel: 'Start date, month',
      yearAriaLabel: 'Start date, year',
    })
    expect(screen.getByRole('button', { name: 'Start date, open calendar' })).toBeInTheDocument()
  })

  it('reports a typed date as a YYYY-MM-DD string', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' onChange={onChange} />)

    // The fields give local midnight, so this is the same day in any timezone
    act(() => dateInputProps().onChange!(new Date(2024, 2, 15)))

    expect(onChange).toHaveBeenCalledWith('2024-03-15')
  })

  it('reports an empty string when the typed date is cleared', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' value='2024-03-15' onChange={onChange} />)

    act(() => dateInputProps().onChange!(null))

    expect(onChange).toHaveBeenCalledWith('')
  })

  it('hides the calendar until its button is clicked', async () => {
    render(<DatePicker name='startDate' value='2024-03-15' onChange={jest.fn()} />)

    expect(mockCalendar).not.toHaveBeenCalled()

    await openCalendar()

    const value = calendarProps().value as Date
    expect([value.getFullYear(), value.getMonth(), value.getDate()]).toEqual([2024, 2, 15])
  })

  it('reports a picked date and closes the calendar', async () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' onChange={onChange} />)
    await openCalendar()

    act(() => calendarProps().onChange!(new Date(2024, 2, 15), clickEvent))

    expect(onChange).toHaveBeenCalledWith('2024-03-15')
    expect(screen.queryByRole('button', { name: 'Today' })).not.toBeInTheDocument()
  })

  it('picks today from the footer', async () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' onChange={onChange} />)
    const user = await openCalendar()

    await user.click(screen.getByRole('button', { name: 'Today' }))

    expect(onChange).toHaveBeenCalledWith(dayjs().format('YYYY-MM-DD'))
    expect(screen.queryByRole('button', { name: 'Today' })).not.toBeInTheDocument()
  })

  it('clears the date from the footer', async () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' value='2024-03-15' onChange={onChange} />)
    const user = await openCalendar()

    await user.click(screen.getByRole('button', { name: 'Clear' }))

    expect(onChange).toHaveBeenCalledWith('')
    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument()
  })

  it('disables the footer clear button when there is no date', async () => {
    render(<DatePicker name='startDate' onChange={jest.fn()} />)
    await openCalendar()

    expect(screen.getByRole('button', { name: 'Clear' })).toBeDisabled()
  })

  it('gives the fields the locale, the browser\'s by default', () => {
    const { rerender } = render(<DatePicker name='startDate' onChange={jest.fn()} />)
    expect(dateInputProps().locale).toBe(navigator.language)

    rerender(<DatePicker name='startDate' locale='pt-PT' onChange={jest.fn()} />)
    expect(dateInputProps().locale).toBe('pt-PT')
  })

  it('shows the month and weekday names in English, whatever the locale', async () => {
    render(<DatePicker name='startDate' locale='pt-PT' onChange={jest.fn()} />)
    await openCalendar()

    const { locale, formatMonthYear, formatShortWeekday } = calendarProps()
    expect(locale).toBe('en-US')
    expect(formatMonthYear!('en-US', new Date(2024, 2, 15))).toBe('March 2024')
    expect(formatShortWeekday!('en-US', new Date(2024, 2, 11))).toBe('Mon')
    // Still the locale's first day of the week
    expect(calendarProps().calendarType).toBe('iso8601')
  })

  it('shows the names in the locale\'s language when localized, with 3-letter weekdays', async () => {
    render(<DatePicker name='startDate' locale='pt-PT' localizeNames onChange={jest.fn()} />)
    await openCalendar()

    const { locale, formatMonthYear, formatShortWeekday } = calendarProps()
    expect(locale).toBe('pt-PT')
    expect(formatMonthYear!('pt-PT', new Date(2024, 2, 15))).toBe('março de 2024')
    // pt-PT's short weekday is the whole "segunda"
    expect(formatShortWeekday!('pt-PT', new Date(2024, 2, 11))).toBe('seg')
  })

  it('gives the fields the format', () => {
    render(<DatePicker name='startDate' format='dd/MM/y' onChange={jest.fn()} />)

    expect(dateInputProps().format).toBe('dd/MM/y')
  })

  it('starts the week on the locale\'s first day', async () => {
    const { unmount } = render(<DatePicker name='startDate' locale='en-US' onChange={jest.fn()} />)
    await openCalendar()
    expect(calendarProps().calendarType).toBe('gregory')
    unmount()

    render(<DatePicker name='startDate' locale='pt-PT' onChange={jest.fn()} />)
    await openCalendar()
    expect(calendarProps().calendarType).toBe('iso8601')
  })

  it('shows the error message', () => {
    render(<DatePicker name='startDate' error='Pick a date' onChange={jest.fn()} />)

    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })

  it('disables the date fields and the calendar button when disabled', () => {
    render(<DatePicker name='startDate' disabled onChange={jest.fn()} />)

    expect(dateInputProps().disabled).toBe(true)
    expect(screen.getByRole('button', { name: 'Open calendar' })).toBeDisabled()
  })

  it('as a week selector, highlights the days in the same week as the value', async () => {
    render(<DatePicker name='week' value='2024-03-15' isWeekSelector onChange={jest.fn()} />)
    await openCalendar()

    const tileClassName = calendarProps().tileClassName as CalendarTileClassName
    const sameWeek = tileClassName({ date: new Date(2024, 2, 12), view: 'month' })
    const nextWeek = tileClassName({ date: new Date(2024, 2, 18), view: 'month' })

    expect(sameWeek).toBe('selected-week')
    expect(nextWeek).toBe('')
  })

  it('as a week selector, highlights the week as the locale counts it', async () => {
    const tileClassName = async (locale: string, date: Date) => {
      const { unmount } = render(
        <DatePicker name='week' value='2024-03-15' locale={locale} isWeekSelector onChange={jest.fn()} />,
      )
      await openCalendar()
      const className = (calendarProps().tileClassName as CalendarTileClassName)({ date, view: 'month' })
      unmount()
      return className
    }

    // 2024-03-15 is a Friday. Its week is Sunday 10 to Saturday 16 in en-US,
    // and Monday 11 to Sunday 17 in pt-PT
    expect(await tileClassName('en-US', new Date(2024, 2, 10))).toBe('selected-week')
    expect(await tileClassName('en-US', new Date(2024, 2, 17))).toBe('')
    expect(await tileClassName('pt-PT', new Date(2024, 2, 10))).toBe('')
    expect(await tileClassName('pt-PT', new Date(2024, 2, 17))).toBe('selected-week')
  })

  describe('with the inputs the library renders', () => {
    beforeEach(() => {
      mockDateInput.mockImplementation((() => (
        <>
          <input data-input='true' aria-label='Day' />
          <input data-input='true' aria-label='Month' />
        </>
      )) as unknown as () => null)
    })

    afterEach(() => {
      mockDateInput.mockImplementation(() => null)
    })

    it('forwards the ref to the first input', () => {
      const ref = createRef<HTMLInputElement>()
      render(<DatePicker ref={ref} name='birthday' label='Birthday' onChange={jest.fn()} />)

      expect(ref.current).toBe(screen.getByRole('textbox', { name: 'Day' }))
    })

    it('marks every input invalid and described by the error, until the error is gone', () => {
      const { rerender } = render(
        <DatePicker name='birthday' label='Birthday' error='Invalid date' onChange={jest.fn()} />,
      )

      screen.getAllByRole('textbox').forEach(input => {
        expect(input).toBeInvalid()
        expect(input).toHaveAccessibleDescription('Invalid date')
      })

      rerender(<DatePicker name='birthday' label='Birthday' onChange={jest.fn()} />)

      screen.getAllByRole('textbox').forEach(input => {
        expect(input).not.toBeInvalid()
        expect(input).not.toHaveAttribute('aria-describedby')
      })
    })
  })
})
