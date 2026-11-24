import { darkThemeCss } from 'src/theme/dark'

describe('dark mode CSS', () => {
  it('applies the dark tokens with data-rl-color-mode="dark"', () => {
    expect(darkThemeCss).toMatch(/^:root\[data-rl-color-mode="dark"\]\{--colors-black:#F4F4F6;--colors-white:#18181F/)
    expect(darkThemeCss).toContain(':root[data-rl-color-mode="dark"]{color-scheme:dark}')
  })

  it('applies them with data-rl-color-mode="system" only when the system is dark', () => {
    const media = '@media (prefers-color-scheme: dark){'
    const systemBlock = darkThemeCss.slice(darkThemeCss.indexOf(media))

    expect(systemBlock).toMatch(/^@media \(prefers-color-scheme: dark\)\{:root\[data-rl-color-mode="system"\]\{--colors-black:#F4F4F6/)
    expect(systemBlock.endsWith('}}')).toBe(true)
    // The "system" selector only appears inside the media query
    expect(darkThemeCss.indexOf('"system"')).toBeGreaterThan(darkThemeCss.indexOf(media))
  })

  it('leaves the light mode (no attribute, or "light") to the default tokens', () => {
    expect(darkThemeCss).not.toContain('"light"')
    expect(darkThemeCss).not.toMatch(/(^|\})\s*:root\{/)
  })
})
