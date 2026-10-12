import{j as e}from"./jsx-runtime-CHn-5JxF.js";import{r as P}from"./iframe-C6Z6JLDr.js";import{D as y}from"./react-icons.esm-EwFTjkwr.js";import{B as a}from"./index-Dh6MWD5I.js";import{I as j}from"./index-C9Uc_w2B.js";import{P as v}from"./index-Jk1gdAw_.js";import{T as f}from"./index-DtWCBfzg.js";import{F as i}from"./index-DYSIL8sV.js";import{C as O}from"./decorators-CjqwfZKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-C3iQHgvf.js";import"./index-0GUFg1F8.js";import"./index-Do5_-w80.js";import"./index-CVV3SJTi.js";import"./floating-ui.dom-CQVRXqPN.js";import"./index--2CG76K7.js";import"./index-RLUzMxbK.js";const B=()=>e.jsx(y,{width:14,height:14}),K={title:"Components/Overlays/PopOver",component:v,parameters:{docs:{description:{component:"Popover enhances usability by offering supplementary details and allowing user input, making it an effective tool for presenting information and gathering input in a compact and focused manner."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#F4F4F7"}]}},decorators:[O],args:{align:"center",side:"bottom",sideOffset:5,trigger:e.jsx(a,{variant:"textOnly",iconComponent:B,iconPosition:"iconOnly",style:{borderRadius:"100%"}}),children:e.jsx(i,{direction:"column",style:{padding:"1rem"},children:e.jsx(f,{variant:"textBlock",children:"Your content..."})})},argTypes:{side:{control:"radio",options:["left","top","right","bottom"]},align:{control:"radio",options:["start","center","end"]},trigger:{control:!1},children:{control:!1}}},t={parameters:{docs:{source:{code:`
//Provide a trigger for the Popover. It can be whatever you want.
<PopOver trigger={<Button />} side='bottom' sideOffset={5}>
  ... Your content goes here
</PopOver>
`}}}},o={render:x=>e.jsx(i,{gap:"sm",children:["top","right","bottom","left"].map(n=>P.createElement(v,{...x,key:n,side:n,trigger:e.jsx(a,{variant:"secondary",children:n})}))}),parameters:{docs:{description:{story:'Use "side" to choose where the popover opens, and "align" to line it up with the start, center or end of the trigger.'},source:{code:`
<PopOver trigger={<Button>top</Button>} side='top'>
  ... Your content goes here
</PopOver>
`}}}},r={args:{children:e.jsxs(i,{direction:"column",align:"start",gap:"sm",style:{padding:"1rem"},children:[e.jsx(f,{variant:"h6",color:"neutral800",children:"Rename project"}),e.jsx(j,{id:"popover-project-name",placeholder:"Project name",onChange:()=>{}}),e.jsx(a,{size:"normal",children:"Save"})]})},parameters:{docs:{description:{story:"The content can be anything, including inputs to gather quick feedback without leaving the page."},source:{code:`
<PopOver trigger={<Button />}>
  <Flex direction='column' align='start' gap='sm'>
    <Text variant='h6'>Rename project</Text>
    <Input id='project-name' placeholder='Project name' onChange={updateName} />
    <Button>Save</Button>
  </Flex>
</PopOver>
`}}}},L=["Default","Sides","WithForm"];var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{t as Default,o as Sides,r as WithForm,L as __namedExportsOrder,K as default};
