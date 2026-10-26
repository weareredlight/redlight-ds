import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('gives the hour and minute fields accessible names that include the label', () => {
    render(<TimePicker name='start' label='Start time' onChange={jest.fn()} />)

    expect(clockProps()).toMatchObject({
      hourAriaLabel: 'Start time, hours',
      minuteAriaLabel: 'Start time, minutes',
      clockAriaLabel: 'Open clock',
    })
  })

  it('shows the error message and disables the time input', () => {
    render(<TimePicker name='start' error='Pick a time' disabled onChange={jest.fn()} />)

    expect(screen.getByText('Pick a time')).toBeInTheDocument()
    expect(clockProps().disabled).toBe(true)
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
