import{P as b}from"./index-DXj11iZz.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./colors-k5Y3hgfw.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Displays/Pill",component:b,parameters:{docs:{description:{component:"Small, fully rounded rectangle that can be used to visually display and select different options or categories. It is typically used to represent discrete values, such as different statuses or types of content. Each pill is typically labeled with a text label, can be removed by clicking on the cross icon to the right."}}},args:{children:"Pill Example"},argTypes:{variant:{control:"radio",options:["default","error","success"]}}},e={args:{onClose:void 0},parameters:{docs:{description:{story:"This is the default pill."}}}},s={args:{variant:"success",onClose:void 0},parameters:{docs:{description:{story:"This variation can label successful outcomes."}}}},r={args:{variant:"error",onClose:void 0},parameters:{docs:{description:{story:"This variation can label errors."}}}},o={args:{onClose:S()},parameters:{docs:{description:{story:"When you have a group of pills you can delete them by pressing the cross button."}}}},n={args:{style:{backgroundColor:"yellow",color:"green"},onClose:void 0},parameters:{docs:{description:{story:"You can pass `style` or `className` to your pill in order to create your own variations."}}}},Y=["Default","Success","Error","Closable","CustomCSS"];var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default pill.'
      }
    }
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label successful outcomes.'
      }
    }
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label errors.'
      }
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of pills you can delete them by pressing the cross button.'
      }
    }
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: 'yellow',
      color: 'green'
    },
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'You can pass \`style\` or \`className\` to your pill in order to create your own variations.'
      }
    }
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};export{o as Closable,n as CustomCSS,e as Default,r as Error,s as Success,Y as __namedExportsOrder,k as default};
