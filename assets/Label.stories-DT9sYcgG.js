import{L as m}from"./index-BF8QffBA.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";const y={title:"Components/General/Label",component:m,parameters:{docs:{description:{component:'The label and description shown above form fields. Every input in the Design System uses it, and you can use it for your own fields too: set "id" to the id of the field it describes.'}}},args:{id:"label-example",label:"This is the label",description:"This is the description"},argTypes:{align:{control:"radio",options:["left","center","right"]},optional:{control:"boolean"}}},e={},t={args:{optional:!0},parameters:{docs:{description:{story:'Set "optional" to add "(optional)" after the label.'}}}},o={args:{align:"center"},parameters:{docs:{description:{story:"The text can be aligned to the left, center or right."}}}},S=["Default","Optional","Align"];var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    optional: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Set "optional" to add "(optional)" after the label.'
      }
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    align: 'center'
  },
  parameters: {
    docs: {
      description: {
        story: 'The text can be aligned to the left, center or right.'
      }
    }
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{o as Align,e as Default,t as Optional,S as __namedExportsOrder,y as default};
