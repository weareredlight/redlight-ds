/* eslint-disable quotes */
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps, JSXElementConstructor } from 'react'

export function storyFactory<
  // eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = never,
>(Component: C, metaPrams: Omit<Meta<C>, 'component'>) {
  return {
    meta: {
      ...(metaPrams ?? {}),
      component: Component,
    },
    story: (args: StoryObj<ComponentProps<typeof Component>>) => args,
  }
}

/* ---------------SNIPPETS-------------- */
export const Installation = `$ yarn add @weareredlight/design-system`
export const BtnImport = `import { Button } from 'redlight-ds'`
export const BtnUse = `() => {
  <Button
    variant='primary'
    size='large'
    onCick={yourFunction()}
  >
    Button Text
  </Button>
}
`
export const TextComponent = `import { Text } from '@weareredlight/design-system'
...

() => {
  <>
    <Text variant='h1'>We are RedLight</Text>
  </>
}
`
export const TextStitches = `import { styled } from '@weareredlight/design-system'

export const StyledButton = styled('button', {
  include: 'heading7',
  ...
})
`
