import{T as y}from"./index-BpxLx8AV.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./colors-k5Y3hgfw.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Displays/Tag",component:y,parameters:{docs:{description:{component:"Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed."}}},args:{children:"Tag Example"},argTypes:{variant:{control:"radio",options:["default","error"]},disabled:{control:"boolean"}}},e={args:{onClose:void 0},parameters:{docs:{description:{story:"This is the default tag."}}}},s={args:{onClose:t()},parameters:{docs:{description:{story:"When you have a group of tags you can delete them by pressing the cross button."}}}},r={args:{variant:"error",onClose:t()},parameters:{docs:{description:{story:"Tags can also be used to indicate potential errors or dangerous actions. Error tags never show the close button, even when `onClose` is set."}}}},o={args:{disabled:!0,onClose:t()},parameters:{docs:{description:{story:"Disabled tags keep the close button but it cannot be clicked, so the user cannot delete them."}}}},k=["Default","Closable","Error","Disabled"];var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default tag.'
      }
    }
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of tags you can delete them by pressing the cross button.'
      }
    }
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can also be used to indicate potential errors or dangerous actions. Error tags never show the close button, even when \`onClose\` is set.'
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled tags keep the close button but it cannot be clicked, so the user cannot delete them.'
      }
    }
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};export{s as Closable,e as Default,o as Disabled,r as Error,k as __namedExportsOrder,S as default};
