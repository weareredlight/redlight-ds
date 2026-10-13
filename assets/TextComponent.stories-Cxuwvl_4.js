import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Flex-CBWmZSZG.js";import{n as i,t as a}from"./Text-oyVb7erL.js";import{r as o,t as s}from"./theme-CmPdwwUN.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),o(),c=t(),l=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`h7`,`subHeading`,`subHeadingSmall`,`paragraph`,`textBlock`,`microCopy`],u={title:`Components/General/Text Component`,component:a,parameters:{docs:{description:{component:`The "Text" component can be used anywhere to create any type of text, from headings to long paragraphs. By changing its variant you can change the hierarchy of the text you want to display and you can also change its colour using the "color" property.`}}},argTypes:{variant:{control:`select`,options:l},children:{control:`text`},color:{control:`select`,options:s}}},d={args:{color:`primary`,variant:`h1`,children:`We are RedLight`}},f={args:{color:`neutral800`},render:e=>(0,c.jsx)(r,{direction:`column`,align:`start`,gap:`xsm`,children:l.map(t=>(0,c.jsx)(a,{...e,variant:t,children:t},t))}),parameters:{docs:{description:{story:`These are all the available variants. See Style Guides / Typography for their sizes.`},source:{code:null}}}},p=[`Default`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'h1',
    children: 'We are RedLight'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as AllVariants,d as Default,p as __namedExportsOrder,u as default};