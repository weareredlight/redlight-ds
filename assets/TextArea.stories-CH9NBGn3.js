import{j as S}from"./jsx-runtime-CHn-5JxF.js";import{r as c}from"./iframe-C6Z6JLDr.js";import{T as D}from"./index-BaaCSrg3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,Y=e=>{const[E,n]=c.useState(e.value??"");return c.useEffect(()=>n(e.value??""),[e.value]),S.jsx(D,{...e,value:E,onChange:i=>{n(i.target.value),e.onChange(i)}})},M={title:"Components/Data Input/Text Area",component:D,render:Y,parameters:{docs:{description:{component:"The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."}}},args:{id:"textarea-example",placeholder:"Write something...",label:"This is the label",description:"This is the description",onChange:_()},argTypes:{state:{control:"radio",options:["null","error","dirty","disabled"]},rows:{control:"number"},maxLength:{control:"number"},required:{control:"boolean"},fullWidth:{control:"boolean"}}},t={},a={args:{id:"textarea-error-example",value:"Whispering winds caress gentle souls, awakening dreams.",maxLength:20,state:"error",errorMsg:"You have reached the character limit."},parameters:{docs:{description:{story:'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.'}}}},r={args:{id:"textarea-dirty-example",value:"An edited comment.",state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},s={args:{id:"textarea-disabled-example",value:"You cannot edit this.",state:"disabled"},parameters:{docs:{description:{story:'With `state="disabled"` the textarea cannot be edited.'}}}},o={args:{id:"textarea-full-width-example",fullWidth:!0},parameters:{docs:{description:{story:"The textarea can occupy the full width of the parent container."}}}},F=["Default","Error","Dirty","Disabled","FullWidth"];var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'textarea-error-example',
    value: 'Whispering winds caress gentle souls, awakening dreams.',
    maxLength: 20,
    state: 'error',
    errorMsg: 'You have reached the character limit.'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.'
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'textarea-dirty-example',
    value: 'An edited comment.',
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'textarea-disabled-example',
    value: 'You cannot edit this.',
    state: 'disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="disabled"\` the textarea cannot be edited.'
      }
    }
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,T,W;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'textarea-full-width-example',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The textarea can occupy the full width of the parent container.'
      }
    }
  }
}`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};export{t as Default,r as Dirty,s as Disabled,a as Error,o as FullWidth,F as __namedExportsOrder,M as default};
