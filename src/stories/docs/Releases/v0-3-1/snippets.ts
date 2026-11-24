// Code snippets shown on the v0.3.1 release page

export const ColorModeAttribute = `<html data-rl-color-mode="dark">    <!-- always dark -->
<html data-rl-color-mode="system">  <!-- follows the operating system, CSS only -->`

export const ColorModeToggle = `import { Toggle, useColorMode } from '@weareredlight/design-system'

export const DarkModeToggle = () => {
  const { mode, toggle } = useColorMode()
  return <Toggle id='dark-mode' label='Dark mode' value={mode === 'dark'} onChange={toggle} />
}`

export const IndicatorCss = `/* Before: the box was the label after the hidden input */
.rl-Checkbox-trigger:checked + label { ... }

/* Now: the box is a <span> after the input */
.rl-Checkbox-trigger:checked + .rl-Checkbox-indicator { ... }`

export const PopOverLabel = `<PopOver label='Project options' trigger={<Button>Options</Button>}>
  ...
</PopOver>`

export const ServerComponent = `// app/page.tsx: a Server Component, no 'use client' needed
import { Tag, Text } from '@weareredlight/design-system'

export default function Page() {
  return (
    <>
      <Text variant='h1'>Projects</Text>
      <Tag>Beta</Tag>
    </>
  )
}`
