import { Unstyled } from '@storybook/blocks'
import React from 'react'

import type { TextVariant } from '../../../components/Text'

import Text from '../../../components/Text'
import Flex from '../../../elements/Flex'
// eslint-disable-next-line import/no-unresolved -- Vite raw import
import typographyScss from '../../../styles/_typography.scss?raw'
import { sizes } from '../../../theme/sizes'
import { DocCode } from '../document'

import styles from './styles.module.scss'

// Presets are read from src/styles/_typography.scss, so this page always matches the mixins.
// e.g. `@mixin heading1 { @include text(xxxlg, lg, md); }`
type Preset = { size: string, weight: string, lineHeight: string, uppercase: boolean }

const presets: Record<string, Preset> = {}
typographyScss.replace(
  /@mixin (\w+)\s*\{\s*@include text\((\w+),\s*(\w+),\s*(\w+)\);([^}]*)\}/g,
  (_: string, name: string, size: string, weight: string, lineHeight: string, rest: string) => {
    presets[name] = {
      size, weight, lineHeight, uppercase: rest.includes('uppercase')
    }
    return ''
  },
)

const toPx = (rem: string) => `${parseFloat(rem) * 16}px`
const { fontSizes, fontWeights, lineHeights } = sizes

// Text component variant -> SCSS mixin
const groups: { title: string, description: string, styles: [TextVariant, string][] }[] = [
  {
    title: 'Headline',
    description: 'Headlines are important for establishing a visual hierarchy and guiding users through content. Use them sparingly and be consistent with font size and style. Stick to a few levels that make sense for your content and design, and support them with other design elements.',
    styles: [
      ['h1', 'heading1'], ['h2', 'heading2'], ['h3', 'heading3'], ['h4', 'heading4'],
      ['h5', 'heading5'], ['h6', 'heading6'], ['h7', 'heading7'],
    ],
  },
  {
    title: 'Sub Heading',
    description: 'Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page. The regular sub heading can be used for secondary headings or to separate different sections of content; the small sub heading for tertiary headings or to add additional context to the content.',
    styles: [['subHeading', 'subHeading'], ['subHeadingSmall', 'subHeadingSmall']],
  },
  {
    title: 'Paragraph',
    description: 'Regular paragraphs are the default style for body text. Text blocks are used for longer content and secondary text. Micro copy is for small bits of text that guide users, such as labels or form instructions; keep it short and concise.',
    styles: [['paragraph', 'paragraph'], ['textBlock', 'textBlock'], ['microCopy', 'microCopy']],
  },
]

const Value = ({ label, value, token }: { label: string, value: string, token: string }) => (
  <span className='micro-copy'>
    {`${label}: `}
    <span className='micro-copy value'>{value}</span>
    <span className='micro-copy'>{` (${token})`}</span>
  </span>
)

export const TextStyles = () => (
  <>
    {groups.map(group => (
      <div className={styles.group} key={group.title}>
        <h3>{group.title}</h3>
        <p>{group.description}</p>
        <Flex direction='column' gap='xxsm'>
          {group.styles.map(([variant, mixin]) => {
            const preset = presets[mixin]
            return (
              <div className={styles.textType} key={variant}>
                <Flex direction='column' align='start'>
                  {/* Unstyled: stops Storybook's docs typography overriding Text */}
                  <Unstyled>
                    <Text variant={variant} color='neutral900'>We are RedLight</Text>
                  </Unstyled>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Flex>
                <div className={styles.details}>
                  <Flex gap='lg' justify='start' wrap className={styles.values}>
                    <Value
                      label='Font size'
                      value={toPx(fontSizes[preset.size as keyof typeof fontSizes])}
                      token={`--fontSizes-${preset.size}`}
                    />
                    <Value
                      label='Weight'
                      value={String(fontWeights[preset.weight as keyof typeof fontWeights])}
                      token={`--fontWeights-${preset.weight}`}
                    />
                    <Value
                      label='Line height'
                      value={lineHeights[preset.lineHeight as keyof typeof lineHeights]}
                      token={`--lineHeights-${preset.lineHeight}`}
                    />
                    {preset.uppercase && <span className='micro-copy'>Uppercase</span>}
                  </Flex>
                  <Flex gap='lg' justify='start' wrap className={styles.usage}>
                    <Flex gap='xxxsm'>
                      <p>Text component:</p>
                      <DocCode size='small'>{`variant='${variant}'`}</DocCode>
                    </Flex>
                    <Flex gap='xxxsm'>
                      <p>SCSS:</p>
                      <DocCode size='small'>{`@include typography.${mixin};`}</DocCode>
                    </Flex>
                  </Flex>
                </div>
              </div>
            )
          })}
        </Flex>
      </div>
    ))}
  </>
)

export default TextStyles
