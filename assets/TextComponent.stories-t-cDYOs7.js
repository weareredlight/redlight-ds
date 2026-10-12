import{j as o}from"./jsx-runtime-CHn-5JxF.js";import{T as p}from"./index-DtWCBfzg.js";import{F as d}from"./index-DYSIL8sV.js";import{c as g}from"./index-DFgsMpxN.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";import"./colors-k5Y3hgfw.js";import"./shadows-cge7too_.js";import"./sizes-Djxfc6qe.js";const m=["h1","h2","h3","h4","h5","h6","h7","subHeading","subHeadingSmall","paragraph","textBlock","microCopy"],C={title:"Components/General/Text Component",component:p,parameters:{docs:{description:{component:'The "Text" component can be used anywhere to create any type of text, from headings to long paragraphs. By changing its variant you can change the hierarchy of the text you want to display and you can also change its colour using the "color" property.'}}},argTypes:{variant:{control:"select",options:m},children:{control:"text"},color:{control:"select",options:g}}},r={args:{color:"primary",variant:"h1",children:"We are RedLight"}},e={args:{color:"neutral800"},render:h=>o.jsx(d,{direction:"column",align:"start",gap:"xsm",children:m.map(a=>o.jsx(p,{...h,variant:a,children:a},a))}),parameters:{docs:{description:{story:"These are all the available variants. See Style Guides / Typography for their sizes."},source:{code:null}}}},G=["Default","AllVariants"];var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'h1',
    children: 'We are RedLight'
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'neutral800'
  },
  render: args => <Flex direction='column' align='start' gap='xsm'>
      {variants.map(variant => <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>)}
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'These are all the available variants. See Style Guides / Typography for their sizes.'
      },
      source: {
        code: null
      }
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{e as AllVariants,r as Default,G as __namedExportsOrder,C as default};
