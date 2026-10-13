import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{_ as r,j as i}from"./react-icons.esm-BhZzypZb.js";import{n as a,t as o}from"./Flex-CBWmZSZG.js";import{n as s,t as c}from"./Text-oyVb7erL.js";import{n as l,t as u}from"./Button-Bn0mj5uc.js";import{n as d,t as f}from"./Input-CNEzJHV8.js";import{n as p,t as m}from"./PopOver-DMRiFY-s.js";import{r as h,t as g}from"./decorators-CAnZVfEJ.js";var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),l(),d(),p(),s(),a(),h(),_=n(),v=t(),y=()=>(0,_.jsx)(r,{width:14,height:14}),b={title:`Components/Overlays/PopOver`,component:m,parameters:{docs:{description:{component:`Popover enhances usability by offering supplementary details and allowing user input, making it an effective tool for presenting information and gathering input in a compact and focused manner.`}},backgrounds:{default:`gray`,values:[{name:`gray`,value:`#F4F4F7`}]}},decorators:[g],args:{align:`center`,side:`bottom`,sideOffset:5,trigger:(0,_.jsx)(u,{variant:`textOnly`,iconComponent:y,iconPosition:`iconOnly`,style:{borderRadius:`100%`}}),children:(0,_.jsx)(o,{direction:`column`,style:{padding:`1rem`},children:(0,_.jsx)(c,{variant:`textBlock`,children:`Your content...`})})},argTypes:{side:{control:`radio`,options:[`left`,`top`,`right`,`bottom`]},align:{control:`radio`,options:[`start`,`center`,`end`]},trigger:{control:!1},children:{control:!1}}},x={parameters:{docs:{source:{code:`
//Provide a trigger for the Popover. It can be whatever you want.
<PopOver trigger={<Button />} side='bottom' sideOffset={5}>
  ... Your content goes here
</PopOver>
`}}}},S={render:e=>(0,_.jsx)(o,{gap:`sm`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,v.createElement)(m,{...e,key:t,side:t,trigger:(0,_.jsx)(u,{variant:`secondary`,children:t})}))}),parameters:{docs:{description:{story:`Use "side" to choose where the popover opens, and "align" to line it up with the start, center or end of the trigger.`},source:{code:`
<PopOver trigger={<Button>top</Button>} side='top'>
  ... Your content goes here
</PopOver>
`}}}},C={args:{children:(0,_.jsxs)(o,{direction:`column`,align:`start`,gap:`sm`,style:{padding:`1rem`},children:[(0,_.jsx)(c,{variant:`h6`,color:`neutral800`,children:`Rename project`}),(0,_.jsx)(f,{id:`popover-project-name`,placeholder:`Project name`,onChange:()=>{}}),(0,_.jsx)(u,{size:`normal`,children:`Save`})]})},parameters:{docs:{description:{story:`The content can be anything, including inputs to gather quick feedback without leaving the page.`},source:{code:`
<PopOver trigger={<Button />}>
  <Flex direction='column' align='start' gap='sm'>
    <Text variant='h6'>Rename project</Text>
    <Input id='project-name' placeholder='Project name' onChange={updateName} />
    <Button>Save</Button>
  </Flex>
</PopOver>
`}}}},w=[`Default`,`Sides`,`WithForm`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}T();export{x as Default,S as Sides,C as WithForm,w as __namedExportsOrder,b as default};