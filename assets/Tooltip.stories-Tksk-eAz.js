import{j as n}from"./jsx-runtime-CHn-5JxF.js";import{r as y}from"./iframe-C6Z6JLDr.js";import{Q as T}from"./react-icons.esm-EwFTjkwr.js";import{B as u}from"./index-Dh6MWD5I.js";import{T as g}from"./index-DYEwffR4.js";import{F as f}from"./index-DYSIL8sV.js";import{C as x}from"./decorators-CjqwfZKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-C3iQHgvf.js";import"./index-0GUFg1F8.js";import"./index-CVV3SJTi.js";import"./floating-ui.dom-CQVRXqPN.js";import"./index--2CG76K7.js";import"./index-RLUzMxbK.js";import"./index-T9Exmj5P.js";import"./index-DtWCBfzg.js";const v=()=>n.jsx(T,{width:"18",height:"18"}),A={title:"Components/Overlays/Tooltip",component:g,decorators:[x],parameters:{docs:{description:{component:"Small, contextual element that appears when the user hovers over or focuses a particular piece of content. It consists of a small box of text with an arrow pointing to that content, and provides additional information or context to the user."}}},args:{content:"Hello world",side:"right",delay:50,children:n.jsx(u,{variant:"textOnly",iconComponent:v,iconPosition:"right",children:"Hover me"})},argTypes:{side:{control:"radio",options:["left","top","right","bottom"]},delay:{control:"number"},children:{control:!1}}},t={parameters:{docs:{source:{code:`
<Tooltip content='Hello world' side='right' delay={50}>
  //Provide a trigger inside the Tooltip. It can be whatever you want.
  <Button />
</Tooltip>
  `}}}},e={render:w=>n.jsx(f,{gap:"sm",children:["top","right","bottom","left"].map(o=>y.createElement(g,{...w,key:o,side:o,content:`Tooltip on the ${o}`},n.jsx(u,{variant:"secondary",children:o})))}),parameters:{docs:{description:{story:'Use "side" to choose where the tooltip shows. The arrow always points at the trigger.'},source:{code:`
<Tooltip content='Tooltip on the top' side='top'>
  <Button>top</Button>
</Tooltip>
  `}}}},r={args:{delay:700,content:"I took a while to show up"},parameters:{docs:{description:{story:'Use "delay" (in milliseconds) to wait before showing the tooltip, so it does not pop up while the cursor is just passing by.'}}}},G=["Default","Sides","Delay"];var s,i,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{t as Default,r as Delay,e as Sides,G as __namedExportsOrder,A as default};
