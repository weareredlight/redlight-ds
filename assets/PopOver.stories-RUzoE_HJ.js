import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-CqFL7BJl.js";import{n as a,t as o}from"./Button-sMjXHnkI.js";import{n as s,t as c}from"./Flex-CBWmZSZG.js";import{n as l,t as u}from"./Text-oyVb7erL.js";import{n as d,t as f}from"./Input-BCxmkdib.js";import{n as p,t as m}from"./PopOver-DKfHzOkH.js";import{r as h,t as g}from"./decorators-CAnZVfEJ.js";var _,v;function y(){return(y=e((()=>{r(),_={name:`ellipsis-vertical`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}]],aliases:[`more-vertical`]},_.node,v=i(_)})))()}var b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{y(),a(),d(),p(),l(),s(),h(),b=n(),x=t(),S=()=>(0,b.jsx)(v,{width:14,height:14}),C={title:`Components/Overlays/PopOver`,component:m,parameters:{docs:{description:{component:`Popover enhances usability by offering supplementary details and allowing user input, making it an effective tool for presenting information and gathering input in a compact and focused manner.`}},backgrounds:{default:`gray`,values:[{name:`gray`,value:`#F4F4F7`}]}},decorators:[g],args:{align:`center`,side:`bottom`,sideOffset:5,trigger:(0,b.jsx)(o,{variant:`textOnly`,iconComponent:S,iconPosition:`iconOnly`,style:{borderRadius:`100%`}}),children:(0,b.jsx)(c,{direction:`column`,style:{padding:`1rem`},children:(0,b.jsx)(u,{variant:`textBlock`,children:`Your content...`})})},argTypes:{side:{control:`radio`,options:[`left`,`top`,`right`,`bottom`]},align:{control:`radio`,options:[`start`,`center`,`end`]},trigger:{control:!1},children:{control:!1}}},w={parameters:{docs:{source:{code:`
//Provide a trigger for the Popover. It can be whatever you want.
<PopOver trigger={<Button />} side='bottom' sideOffset={5}>
  ... Your content goes here
</PopOver>
`}}}},T={render:e=>(0,b.jsx)(c,{gap:`sm`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,x.createElement)(m,{...e,key:t,side:t,trigger:(0,b.jsx)(o,{variant:`secondary`,children:t})}))}),parameters:{docs:{description:{story:`Use "side" to choose where the popover opens, and "align" to line it up with the start, center or end of the trigger.`},source:{code:`
<PopOver trigger={<Button>top</Button>} side='top'>
  ... Your content goes here
</PopOver>
`}}}},E={args:{children:(0,b.jsxs)(c,{direction:`column`,align:`start`,gap:`sm`,style:{padding:`1rem`},children:[(0,b.jsx)(u,{variant:`h6`,color:`neutral800`,children:`Rename project`}),(0,b.jsx)(f,{id:`popover-project-name`,placeholder:`Project name`,onChange:()=>{}}),(0,b.jsx)(o,{size:`normal`,children:`Save`})]})},parameters:{docs:{description:{story:`The content can be anything, including inputs to gather quick feedback without leaving the page.`},source:{code:`
<PopOver trigger={<Button />}>
  <Flex direction='column' align='start' gap='sm'>
    <Text variant='h6'>Rename project</Text>
    <Input id='project-name' placeholder='Project name' onChange={updateName} />
    <Button>Save</Button>
  </Flex>
</PopOver>
`}}}},D=[`Default`,`Sides`,`WithForm`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
//Provide a trigger for the Popover. It can be whatever you want.
<PopOver trigger={<Button />} side='bottom' sideOffset={5}>
  ... Your content goes here
</PopOver>
\`
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Flex gap='sm'>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <PopOver {...args} key={side} side={side} trigger={<Button variant='secondary'>{side}</Button>} />)}
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Use "side" to choose where the popover opens, and "align" to line it up with the start, center or end of the trigger.'
      },
      source: {
        code: \`
<PopOver trigger={<Button>top</Button>} side='top'>
  ... Your content goes here
</PopOver>
\`
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Flex direction='column' align='start' gap='sm' style={{
      padding: '1rem'
    }}>
        <Text variant='h6' color='neutral800'>Rename project</Text>
        <Input id='popover-project-name' placeholder='Project name' onChange={() => {}} />
        <Button size='normal'>Save</Button>
      </Flex>
  },
  parameters: {
    docs: {
      description: {
        story: 'The content can be anything, including inputs to gather quick feedback without leaving the page.'
      },
      source: {
        code: \`
<PopOver trigger={<Button />}>
  <Flex direction='column' align='start' gap='sm'>
    <Text variant='h6'>Rename project</Text>
    <Input id='project-name' placeholder='Project name' onChange={updateName} />
    <Button>Save</Button>
  </Flex>
</PopOver>
\`
      }
    }
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{w as Default,T as Sides,E as WithForm,D as __namedExportsOrder,C as default};