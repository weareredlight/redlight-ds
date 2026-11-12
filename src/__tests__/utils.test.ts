import { capitalize, cx, setPickerInputsAria } from 'src/utils'

describe('capitalize', () => {
  it('uppercases the first letter', () => {
    expect(capitalize('error')).toBe('Error')
  })

  it('returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('')
  })
})

describe('cx', () => {
  it('joins class names with spaces', () => {
    expect(cx('button', 'primary')).toBe('button primary')
  })

  it('skips falsy values', () => {
    expect(cx('button', false, undefined, null, '', 'large')).toBe('button large')
  })
})

describe('setPickerInputsAria', () => {
  const makeField = () => {
    const field = document.createElement('div')
    field.innerHTML = '<input data-input="true"><input data-input="true"><input type="hidden">'
    return field
  }

  it('sets the attributes on the inputs the library rendered, and removes them', () => {
    const field = makeField()

    setPickerInputsAria(field, { 'aria-invalid': true, 'aria-describedby': 'date-error' })
    field.querySelectorAll('[data-input]').forEach(input => {
      expect(input).toHaveAttribute('aria-invalid', 'true')
      expect(input).toHaveAttribute('aria-describedby', 'date-error')
    })
    expect(field.querySelector('[type="hidden"]')).not.toHaveAttribute('aria-invalid')

    setPickerInputsAria(field, { 'aria-invalid': undefined, 'aria-describedby': undefined })
    field.querySelectorAll('[data-input]').forEach(input => {
      expect(input).not.toHaveAttribute('aria-invalid')
      expect(input).not.toHaveAttribute('aria-describedby')
    })
  })

  // It runs after every render: a mutation each time would make a MutationObserver that renders
  // again loop forever
  it('does not touch the DOM when nothing changed', () => {
    const field = makeField()
    const aria = { 'aria-invalid': true, 'aria-describedby': 'date-error' }
    setPickerInputsAria(field, aria)
    const observer = new MutationObserver(() => {})
    observer.observe(field, { subtree: true, attributes: true })

    setPickerInputsAria(field, aria)
    setPickerInputsAria(field, { ...aria })

    expect(observer.takeRecords()).toHaveLength(0)
    observer.disconnect()
  })
})
