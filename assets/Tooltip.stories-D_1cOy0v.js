import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-CqFL7BJl.js";import{n as a,t as o}from"./Button-D0yzj-cT.js";import{n as s,t as c}from"./Flex-CCIzD6fY.js";import{n as l,t as u}from"./Tooltip-BmLcVIJQ.js";import{r as d,t as f}from"./decorators-CAnZVfEJ.js";var p,m;function h(){return(h=e((()=>{r(),p={name:`circle-question-mark`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`help-circle`,`circle-help`]},p.node,m=i(p)})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{h(),a(),l(),s(),d(),g=n(),_=t(),v=()=>(0,g.jsx)(m,{width:`18`,height:`18`}),y={title:`Components/Overlays/Tooltip`,component:u,decorators:[f],parameters:{docs:{description:{component:`Small, contextual element that appears when the user hovers over or focuses a particular piece of content. It consists of a small box of text with an arrow pointing to that content, and provides additional information or context to the user.`}}},args:{content:`Hello world`,side:`right`,delay:50,children:(0,g.jsx)(o,{variant:`textOnly`,iconComponent:v,iconPosition:`right`,children:`Hover me`})},argTypes:{side:{control:`radio`,options:[`left`,`top`,`right`,`bottom`]},delay:{control:`number`},children:{control:!1}}},b={parameters:{docs:{source:{code:`
<Tooltip content='Hello world' side='right' delay={50}>
  //Provide a trigger inside the Tooltip. It can be whatever you want.
  <Button />
</Tooltip>
  `}}}},x={render:e=>(0,g.jsx)(c,{gap:`sm`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,_.createElement)(u,{...e,key:t,side:t,content:`Tooltip on the ${t}`},(0,g.jsx)(o,{variant:`secondary`,children:t})))}),parameters:{docs:{description:{story:`Use "side" to choose where the tooltip shows. The arrow always points at the trigger.`},source:{code:`
<Tooltip content='Tooltip on the top' side='top'>
  <Button>top</Button>
</Tooltip>
  `}}}},S={args:{delay:700,content:`I took a while to show up`},parameters:{docs:{description:{story:`Use "delay" (in milliseconds) to wait before showing the tooltip, so it does not pop up while the cursor is just passing by.`}}}},C=[`Default`,`Sides`,`Delay`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as Default,S as Delay,x as Sides,C as __namedExportsOrder,y as default};