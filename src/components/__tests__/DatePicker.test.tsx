import { act, render, screen } from '@testing-library/react'

import type { DatePickerProps } from 'react-date-picker'

import DatePicker from 'src/components/DatePicker'

// react-date-picker ships only ES modules, which this Jest config doesn't transform. The mock
// records the props our wrapper passes, so we can test how the wrapper maps them
const mockCalendar = jest.fn((_props: DatePickerProps) => null)
jest.mock('react-date-picker', () => ({
  DatePicker: (props: DatePickerProps) => mockCalendar(props),
}))

type CalendarTileClassName = (args: { date: Date; view: string }) => string

const calendarProps = () => mockCalendar.mock.lastCall![0]

describe('DatePicker', () => {
  beforeEach(() => {
    mockCalendar.mockClear()
  })

  it('shows its label and gives the value to the calendar', () => {
    render(<DatePicker name='startDate' label='Start date' value='2024-03-15' onChange={jest.fn()} />)

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(calendarProps().name).toBe('startDate')
  })

  it('gives the calendar the same day in any timezone', () => {
    render(<DatePicker name='startDate' value='2024-03-15' onChange={jest.fn()} />)

    // Read as UTC, a 'YYYY-MM-DD' string is the previous day west of UTC (TZ=America/New_York)
    const value = calendarProps().value as Date
    expect([value.getFullYear(), value.getMonth(), value.getDate()]).toEqual([2024, 2, 15])
  })

  it('gives each date field an accessible name that includes the label', () => {
    render(<DatePicker name='startDate' label='Start date' onChange={jest.fn()} />)

    expect(calendarProps()).toMatchObject({
      dayAriaLabel: 'Start date, day',
      monthAriaLabel: 'Start date, month',
      yearAriaLabel: 'Start date, year',
      calendarAriaLabel: 'Open calendar',
    })
  })

  it('reports a picked date as a YYYY-MM-DD string', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' onChange={onChange} />)

    // The calendar picks local midnight, so this is the same day in any timezone
    act(() => calendarProps().onChange!(new Date(2024, 2, 15)))

    expect(onChange).toHaveBeenCalledWith('2024-03-15')
  })

  it('reports an empty string when the date is cleared', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' value='2024-03-15' onChange={onChange} />)

    act(() => calendarProps().onChange!(null))

    expect(onChange).toHaveBeenCalledWith('')
  })

  it('shows the error message', () => {
    render(<DatePicker name='startDate' error='Pick a date' onChange={jest.fn()} />)

    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })

  it('disables the calendar when disabled', () => {
    render(<DatePicker name='startDate' disabled onChange={jest.fn()} />)

    expect(calendarProps().disabled).toBe(true)
  })

  it('as a week selector, highlights the days in the same week as the value', () => {
    render(<DatePicker name='week' value='2024-03-15' isWeekSelector onChange={jest.fn()} />)

    const tileClassName = calendarProps().calendarProps!.tileClassName as CalendarTileClassName
    const sameWeek = tileClassName({ date: new Date(2024, 2, 12), view: 'month' })
    const nextWeek = tileClassName({ date: new Date(2024, 2, 18), view: 'month' })

    expect(sameWeek).toBe('selected-week')
    expect(nextWeek).toBe('')
  })
})
