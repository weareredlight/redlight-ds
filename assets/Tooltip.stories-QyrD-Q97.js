import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{D as r,j as i}from"./react-icons.esm-BhZzypZb.js";import{n as a,t as o}from"./Flex-CBWmZSZG.js";import{n as s,t as c}from"./Button-Bn0mj5uc.js";import{n as l,t as u}from"./Tooltip-F2UuBsW1.js";import{r as d,t as f}from"./decorators-CAnZVfEJ.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),s(),l(),a(),d(),p=n(),m=t(),h=()=>(0,p.jsx)(r,{width:`18`,height:`18`}),g={title:`Components/Overlays/Tooltip`,component:u,decorators:[f],parameters:{docs:{description:{component:`Small, contextual element that appears when the user hovers over or focuses a particular piece of content. It consists of a small box of text with an arrow pointing to that content, and provides additional information or context to the user.`}}},args:{content:`Hello world`,side:`right`,delay:50,children:(0,p.jsx)(c,{variant:`textOnly`,iconComponent:h,iconPosition:`right`,children:`Hover me`})},argTypes:{side:{control:`radio`,options:[`left`,`top`,`right`,`bottom`]},delay:{control:`number`},children:{control:!1}}},_={parameters:{docs:{source:{code:`
<Tooltip content='Hello world' side='right' delay={50}>
  //Provide a trigger inside the Tooltip. It can be whatever you want.
  <Button />
</Tooltip>
  `}}}},v={render:e=>(0,p.jsx)(o,{gap:`sm`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,m.createElement)(u,{...e,key:t,side:t,content:`Tooltip on the ${t}`},(0,p.jsx)(c,{variant:`secondary`,children:t})))}),parameters:{docs:{description:{story:`Use "side" to choose where the tooltip shows. The arrow always points at the trigger.`},source:{code:`
<Tooltip content='Tooltip on the top' side='top'>
  <Button>top</Button>
</Tooltip>
  `}}}},y={args:{delay:700,content:`I took a while to show up`},parameters:{docs:{description:{story:`Use "delay" (in milliseconds) to wait before showing the tooltip, so it does not pop up while the cursor is just passing by.`}}}},b=[`Default`,`Sides`,`Delay`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<Tooltip content='Hello world' side='right' delay={50}>
  //Provide a trigger inside the Tooltip. It can be whatever you want.
  <Button />
</Tooltip>
  \`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Flex gap='sm'>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tooltip {...args} key={side} side={side} content={\`Tooltip on the \${side}\`}>
          <Button variant='secondary'>{side}</Button>
        </Tooltip>)}
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Use "side" to choose where the tooltip shows. The arrow always points at the trigger.'
      },
      source: {
        code: \`
<Tooltip content='Tooltip on the top' side='top'>
  <Button>top</Button>
</Tooltip>
  \`
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 700,
    content: 'I took a while to show up'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "delay" (in milliseconds) to wait before showing the tooltip, so it does not pop up while the cursor is just passing by.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Default,y as Delay,v as Sides,b as __namedExportsOrder,g as default};