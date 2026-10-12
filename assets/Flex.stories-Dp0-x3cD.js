import{j as e}from"./jsx-runtime-CHn-5JxF.js";import{F as j}from"./index-DYSIL8sV.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";const s=({children:f})=>e.jsx("div",{style:{padding:"var(--space-sm) var(--space-lg)",borderRadius:"var(--radii-xsm)",background:"var(--colors-primary100)",color:"var(--colors-primary)"},children:f}),U={title:"Components/Layout/Flex",component:j,parameters:{docs:{description:{component:"Flex is a layout helper: a flexbox container whose direction, alignment and gap use the theme spacing. It centers its content by default."}}},args:{gap:"sm",style:{minHeight:"120px",border:"1px dashed var(--colors-neutral300)"},children:[e.jsx(s,{children:"One"},"1"),e.jsx(s,{children:"Two"},"2"),e.jsx(s,{children:"Three"},"3")]},argTypes:{direction:{control:"radio",options:["row","column"]},align:{control:"radio",options:["start","center","end","baseline"]},justify:{control:"select",options:["start","center","end","spaceBetween","spaceAround","spaceEvenly"]},gap:{control:"select",options:["xxxsm","xxsm","xsm","sm","lg","xlg","xxlg","xxxlg"]},wrap:{control:"boolean"},as:{control:"text"},children:{control:!1}}},r={},t={args:{direction:"column",align:"start"},parameters:{docs:{description:{story:'Use "direction" to stack the items.'}}}},o={args:{justify:"spaceBetween"},parameters:{docs:{description:{story:'Use "justify" to spread the items along the main axis.'}}}},n={args:{as:"ul",style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx(s,{children:"One"})},"1"),e.jsx("li",{children:e.jsx(s,{children:"Two"})},"2")]},parameters:{docs:{description:{story:'Use "as" to render another element instead of a div.'}}}},k=["Default","Column","SpaceBetween","AsList"];var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    align: 'start'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "direction" to stack the items.'
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,x,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    justify: 'spaceBetween'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "justify" to spread the items along the main axis.'
      }
    }
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    style: {
      listStyle: 'none',
      padding: 0
    },
    children: [<li key='1'><Box>One</Box></li>, <li key='2'><Box>Two</Box></li>]
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "as" to render another element instead of a div.'
      }
    }
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};export{n as AsList,t as Column,r as Default,o as SpaceBetween,k as __namedExportsOrder,U as default};
