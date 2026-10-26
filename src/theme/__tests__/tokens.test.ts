import { defaultScales, scalesToCss, scalesToVarRefs } from '../tokens'

describe('tokens', () => {
  it('scalesToCss writes one CSS variable per token inside the selector', () => {
    const css = scalesToCss('.theme', { colors: { primary: '#FF0000' }, space: { sm: '1rem' } })

    expect(css).toBe('.theme{--colors-primary:#FF0000;--space-sm:1rem}')
  })

  it('scalesToCss turns numbers into strings', () => {
    const css = scalesToCss('.theme', { zIndices: { modal: 100 } })

    expect(css).toBe('.theme{--zIndices-modal:100}')
  })

  it('scalesToCss resolves $scale$token references to that scale\'s variable', () => {
    const css = scalesToCss('.theme', { shadows: { card: '0 2px 8px $colors$neutral200' } })

    expect(css).toBe('.theme{--shadows-card:0 2px 8px var(--colors-neutral200)}')
  })

  it('scalesToCss resolves $token references to a token of the same scale', () => {
    const css = scalesToCss('.theme', { colors: { primary: '#FF0000', link: '$primary' } })

    expect(css).toBe('.theme{--colors-primary:#FF0000;--colors-link:var(--colors-primary)}')
  })

  it('scalesToVarRefs maps every token to its CSS variable', () => {
    const refs = scalesToVarRefs({ colors: { primary: '#FF0000' }, space: { sm: '1rem' } })

    expect(refs).toEqual({
      colors: { primary: 'var(--colors-primary)' },
      space: { sm: 'var(--space-sm)' },
    })
  })

  it('defaultScales has the colors, sizes and shadows, with shadows pointing at colors', () => {
    const css = scalesToCss(':root', defaultScales)

    expect(Object.keys(defaultScales)).toEqual(
      expect.arrayContaining(['colors', 'sizes', 'space', 'fontSizes', 'shadows']),
    )
    expect(css).toContain('--colors-white:#FFFFFF')
    expect(css).toContain('--space-sm:0.875rem')
    expect(css).toContain('--shadows-mainShadow:0px 4px 20px var(--colors-neutral200)')
  })
})
