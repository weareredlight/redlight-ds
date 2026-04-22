import{P as b}from"./index-BzjaKhVk.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./react-icons.esm-BvxPXE_h.js";import"./index-B70SOYCP.js";import"./stitches-rxIYWSTB.js";const k={title:"Components/Displays/Pill",component:b,parameters:{docs:{description:{component:"Small, fully rounded rectangle that can be used to visually display and select different options or categories. It is typically used to represent discrete values, such as different statuses or types of content. Each pill is typically labeled with a text label, can be removed by clicking on the cross icon to the right."}}},args:{children:"Pill Example"},argTypes:{variant:{control:"radio",options:["default","error","success"]}}},e={args:{onClose:void 0},parameters:{docs:{description:{story:"This is the default pill."}}}},r={args:{variant:"success",onClose:void 0},parameters:{docs:{description:{story:"This variation can label successful outcomes."}}}},o={args:{variant:"error",onClose:void 0},parameters:{docs:{description:{story:"This variation can label errors."}}}},s={args:{onClose:()=>alert("Are you sure you want to remove?")},parameters:{docs:{description:{story:"When you have a group of pills you can delete them by pressing the cross button."}}}},n={args:{css:{backgroundColor:"yellow",color:"green"},onClose:void 0},parameters:{docs:{description:{story:"You can add custom CSS to your pill in order to create your own variations."}}}};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove?')
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of pills you can delete them by pressing the cross button.'
      }
    }
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    css: {
      backgroundColor: 'yellow',
      color: 'green'
    },
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom CSS to your pill in order to create your own variations.'
      }
    }
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const D=["Default","Success","Error","Closable","customCSS"];export{s as Closable,e as Default,o as Error,r as Success,D as __namedExportsOrder,n as customCSS,k as default};
