import { capitalize, cx } from '../utils'

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
