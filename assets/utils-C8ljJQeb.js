const t="$ yarn add @weareredlight/design-system",e="import { Button } from 'redlight-ds'",n=`() => {
  <Button
    variant='primary'
    size='large'
    onCick={yourFunction()}
  >
    Button Text
  </Button>
}
`,o=`import { Text } from '@weareredlight/design-system'
...

() => {
  <>
    <Text variant='h1'>We are RedLight</Text>
  </>
}
`,s=`import { styled } from '@weareredlight/design-system'

export const StyledButton = styled('button', {
  include: 'heading7',
  ...
})
`;export{e as B,t as I,o as T,n as a,s as b};
