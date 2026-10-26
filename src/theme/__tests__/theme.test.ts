import { getColor, setupTheme, theme } from 'src/theme'

describe('theme', () => {
  afterEach(() => {
    document.head.innerHTML = ''
  })

  it('getColor returns a CSS variable, not a hex value', () => {
    expect(getColor('primary')).toBe('var(--colors-primary)')
  })

  it('setupTheme adds a <style> with the overridden tokens', () => {
    const { className } = setupTheme({ userColors: { primary: '#FF0000' } })

    const style = document.head.querySelector(`style[data-rl-theme="${className}"]`)
    expect(style).toBeInTheDocument()
    expect(style?.textContent).toContain('--colors-primary:#FF0000')
  })

  it('setupTheme keeps the default tokens it does not override', () => {
    const { className } = setupTheme({ userColors: { primary: '#FF0000' } })

    const style = document.head.querySelector(`style[data-rl-theme="${className}"]`)
    expect(style?.textContent).toContain('--colors-white:#FFFFFF')
  })

  it('setupTheme makes the new theme the current one', () => {
    const { className } = setupTheme({})

    expect(theme.className).toBe(className)
  })
})
