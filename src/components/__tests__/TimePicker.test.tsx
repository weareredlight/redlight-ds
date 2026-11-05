import {
  act, render, screen, within
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'

import type { TimePickerProps } from 'react-time-picker'

import TimePicker from 'src/components/TimePicker'

// react-time-picker ships only ES modules, which this Jest config doesn't transform. The mock
// records the props our wrapper passes, so we can test how the wrapper maps them
const mockClock = jest.fn((_props: TimePickerProps) => null)
jest.mock('react-time-picker', () => ({
  TimePicker: (props: TimePickerProps) => mockClock(props),
}))

const clockProps = () => mockClock.mock.lastCall![0]

describe('TimePicker', () => {
  beforeEach(() => {
    mockClock.mockClear()
  })

  it('shows its label and description and gives the value to the time input', () => {
    render(
      <TimePicker
        name='start'
        label='Start time'
        description='Local time'
        value='09:30'
        onChange={jest.fn()}
      />,
    )

    expect(screen.getByText('Start time')).toBeInTheDocument()
    expect(screen.getByText('Local time')).toBeInTheDocument()
    expect(clockProps()).toMatchObject({ name: 'start', value: '09:30' })
  })

  it('reports a picked time with seconds, and an empty string when cleared', () => {
    const onChange = jest.fn()
    render(<TimePicker name='start' onChange={onChange} />)

    act(() => clockProps().onChange!('09:30'))
    act(() => clockProps().onChange!(null))

    expect(onChange).toHaveBeenNthCalledWith(1, '09:30:00')
    expect(onChange).toHaveBeenNthCalledWith(2, '')
  })

  it('hides the clear button, which the library only does with null', () => {
    render(<TimePicker name='start' onChange={jest.fn()} />)

    expect(clockProps().clearIcon).toBeNull()
  })

  it('gives the hour and minute fields and the list button accessible names that include the label', () => {
    render(<TimePicker name='start' label='Start time' onChange={jest.fn()} />)

    expect(clockProps()).toMatchObject({
      hourAriaLabel: 'Start time, hours',
      minuteAriaLabel: 'Start time, minutes',
    })
    expect(screen.getByRole('button', { name: 'Start time, open time list' })).toBeInTheDocument()
  })

  it('shows the time input in English, in the locale\'s 12 or 24 hours', () => {
    // jsdom's browser locale is en-US
    const { rerender } = render(<TimePicker name='start' onChange={jest.fn()} />)
    expect(clockProps()).toMatchObject({ locale: 'en-US', format: 'h:mm a' })

    rerender(<TimePicker name='start' locale='pt-PT' onChange={jest.fn()} />)
    expect(clockProps()).toMatchObject({ locale: 'en-US', format: 'HH:mm' })

    rerender(<TimePicker name='start' locale='pt-PT' format='H:mm' onChange={jest.fn()} />)
    expect(clockProps()).toMatchObject({ locale: 'en-US', format: 'H:mm' })
  })

  it('gives the time input the locale when its names are localized', () => {
    render(<TimePicker name='start' locale='en-CA' localizeNames onChange={jest.fn()} />)

    expect(clockProps()).toMatchObject({ locale: 'en-CA', format: undefined })
  })

  it('shows the error message and disables the time input and the list button', () => {
    render(<TimePicker name='start' error='Pick a time' disabled onChange={jest.fn()} />)

    expect(screen.getByText('Pick a time')).toBeInTheDocument()
    expect(clockProps().disabled).toBe(true)
    expect(screen.getByRole('button', { name: 'Open time list' })).toBeDisabled()
  })

  describe('time list', () => {
    // pt-PT shows 24 hours. The 12-hour list has its own tests below
    const openList = async () => {
      const user = userEvent.setup()
      await user.click(screen.getByRole('button', { name: 'Open time list' }))
      return user
    }

    const option = (column: 'Hours' | 'Minutes' | 'AM or PM', name: string) => within(
      screen.getByRole('group', { name: column }),
    ).getByRole('button', { name })

    it('marks the selected hour and minute', async () => {
      render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={jest.fn()} />)
      await openList()

      expect(option('Hours', '09')).toHaveAttribute('aria-pressed', 'true')
      expect(option('Minutes', '30')).toHaveAttribute('aria-pressed', 'true')
      expect(option('Minutes', '31')).toHaveAttribute('aria-pressed', 'false')
    })

    it('keeps the minutes when an hour is picked, and stays open', async () => {
      const onChange = jest.fn()
      render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={onChange} />)
      const user = await openList()

      await user.click(option('Hours', '14'))

      expect(onChange).toHaveBeenCalledWith('14:30:00')
      expect(screen.getByRole('group', { name: 'Minutes' })).toBeInTheDocument()
    })

    it('keeps the hour when a minute is picked, and closes', async () => {
      const onChange = jest.fn()
      render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={onChange} />)
      const user = await openList()

      await user.click(option('Minutes', '45'))

      expect(onChange).toHaveBeenCalledWith('09:45:00')
      expect(screen.queryByRole('group', { name: 'Minutes' })).not.toBeInTheDocument()
    })

    it('starts at 00 for the part that has no value yet', async () => {
      const onChange = jest.fn()
      render(<TimePicker name='start' locale='pt-PT' onChange={onChange} />)
      const user = await openList()

      await user.click(option('Hours', '08'))

      expect(onChange).toHaveBeenCalledWith('08:00:00')
    })

    it('moves between options with the arrow keys', async () => {
      render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={jest.fn()} />)
      const user = await openList()

      expect(option('Hours', '09')).toHaveFocus()
      await user.keyboard('{ArrowDown}')
      expect(option('Hours', '10')).toHaveFocus()
      await user.keyboard('{Home}')
      expect(option('Hours', '00')).toHaveFocus()
    })

    it('picks the current time from the footer', async () => {
      const onChange = jest.fn()
      render(<TimePicker name='start' locale='pt-PT' onChange={onChange} />)
      const user = await openList()

      await user.click(screen.getByRole('button', { name: 'Now' }))

      expect(onChange).toHaveBeenCalledWith(`${dayjs().format('HH:mm')}:00`)
      expect(screen.queryByRole('button', { name: 'Now' })).not.toBeInTheDocument()
    })

    it('clears the time from the footer, and disables clearing when there is none', async () => {
      const onChange = jest.fn()
      const { rerender } = render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={onChange} />)
      const user = await openList()

      await user.click(screen.getByRole('button', { name: 'Clear' }))
      expect(onChange).toHaveBeenCalledWith('')

      rerender(<TimePicker name='start' locale='pt-PT' value='' onChange={onChange} />)
      await openList()
      expect(screen.getByRole('button', { name: 'Clear' })).toBeDisabled()
    })
    describe('current time', () => {
      beforeEach(() => {
        jest.useFakeTimers({ now: new Date(2024, 2, 15, 16, 7) })
      })

      afterEach(() => {
        jest.useRealTimers()
      })

      const openListAt = async () => {
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
        await user.click(screen.getByRole('button', { name: 'Open time list' }))
        return user
      }

      const isNow = (element: HTMLElement) => element.classList.contains('isNow')

      it('highlights the current hour and minute', async () => {
        render(<TimePicker name='start' locale='pt-PT' value='09:30:00' onChange={jest.fn()} />)
        await openListAt()

        expect(isNow(option('Hours', '16'))).toBe(true)
        expect(isNow(option('Minutes', '07'))).toBe(true)
        expect(isNow(option('Hours', '09'))).toBe(false)
      })

      it('highlights the current hour and period in 12 hours', async () => {
        render(<TimePicker name='start' locale='en-US' onChange={jest.fn()} />)
        await openListAt()

        expect(isNow(option('Hours', '4'))).toBe(true)
        expect(isNow(option('AM or PM', 'PM'))).toBe(true)
      })

      it('focuses the current hour when there is no time', async () => {
        render(<TimePicker name='start' locale='pt-PT' onChange={jest.fn()} />)
        await openListAt()

        expect(option('Hours', '16')).toHaveFocus()
      })
    })

    describe('in 12 hours', () => {
      it('follows the locale, and a format overrides it', async () => {
        const { rerender } = render(<TimePicker name='start' locale='en-US' onChange={jest.fn()} />)
        await openList()
        expect(screen.getByRole('group', { name: 'AM or PM' })).toBeInTheDocument()
        expect(option('Hours', '12')).toBeInTheDocument()

        rerender(<TimePicker name='start' locale='en-US' format='HH:mm' onChange={jest.fn()} />)
        expect(screen.queryByRole('group', { name: 'AM or PM' })).not.toBeInTheDocument()
        expect(option('Hours', '23')).toBeInTheDocument()
      })

      it('shows AM and PM in English, or in the locale\'s language when localized', async () => {
        const { rerender } = render(<TimePicker name='start' locale='en-CA' onChange={jest.fn()} />)
        await openList()
        expect(option('AM or PM', 'PM')).toBeInTheDocument()

        rerender(<TimePicker name='start' locale='en-CA' localizeNames onChange={jest.fn()} />)
        expect(option('AM or PM', 'p.m.')).toBeInTheDocument()
      })

      it('marks the hour on a 12-hour clock and the period', async () => {
        render(<TimePicker name='start' locale='en-US' value='16:30:00' onChange={jest.fn()} />)
        await openList()

        expect(option('Hours', '4')).toHaveAttribute('aria-pressed', 'true')
        expect(option('AM or PM', 'PM')).toHaveAttribute('aria-pressed', 'true')
      })

      it('keeps the period when an hour is picked', async () => {
        const onChange = jest.fn()
        render(<TimePicker name='start' locale='en-US' value='16:30:00' onChange={onChange} />)
        const user = await openList()

        await user.click(option('Hours', '12'))

        expect(onChange).toHaveBeenCalledWith('12:30:00')
      })

      it('keeps the hour and minutes when the period is picked, and stays open', async () => {
        const onChange = jest.fn()
        render(<TimePicker name='start' locale='en-US' value='16:30:00' onChange={onChange} />)
        const user = await openList()

        await user.click(option('AM or PM', 'AM'))

        expect(onChange).toHaveBeenCalledWith('04:30:00')
        expect(screen.getByRole('group', { name: 'Minutes' })).toBeInTheDocument()
      })
    })
  })

  describe('duration type', () => {
    it('shows the value as HH:MM', () => {
      render(<TimePicker type='duration' value='01:45:00' onChange={jest.fn()} />)

      expect(screen.getByRole('textbox')).toHaveValue('01:45')
    })

    it('reports the typed duration with seconds', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)

      await user.type(screen.getByRole('textbox'), '0245')

      expect(onChange).toHaveBeenLastCalledWith('02:45:00')
    })

    it('does not accept more than 23 hours', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)

      await user.type(screen.getByRole('textbox'), '25')

      expect(screen.getByRole('textbox')).toHaveValue('2-:--')
      expect(onChange).not.toHaveBeenCalledWith(expect.stringMatching(/^25/))
    })

    it('does not call onChange on mount or while the time is half typed', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)
      expect(onChange).not.toHaveBeenCalled()

      await user.type(screen.getByRole('textbox'), '024')

      expect(onChange).not.toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveValue('02:4-')
    })

    it('reports an empty string when the duration is cleared', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' value='01:45:00' onChange={onChange} />)

      await user.clear(screen.getByRole('textbox'))

      expect(onChange).toHaveBeenLastCalledWith('')
    })

    it('is linked to its label', () => {
      render(<TimePicker type='duration' name='duration' label='Duration' onChange={jest.fn()} />)

      expect(screen.getByLabelText('Duration')).toHaveRole('textbox')
    })

    it('is disabled when disabled', () => {
      render(<TimePicker type='duration' disabled onChange={jest.fn()} />)

      expect(screen.getByRole('textbox')).toBeDisabled()
    })
  })
})
