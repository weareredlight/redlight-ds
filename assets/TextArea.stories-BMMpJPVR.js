import{T as c}from"./index-D2I5jBmD.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./index-CiCkSv5t.js";import"./stitches-rxIYWSTB.js";import"./index-C52YCM-k.js";const g={title:"Components/Data Input/Text Area",component:c,parameters:{docs:{description:{component:"The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."}}},argTypes:{state:{control:"radio",options:[null,"error","dirty","disabled"]},rows:{control:"number"},required:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{id:"texarea-example",placeholder:"Write something...",label:"This is the label",description:"This is the description"}},r={args:{id:"texarea-error-example",value:"Whispering winds caress gentle souls, awakening dreams.",placeholder:"Write something...",label:"This is the label",description:"This is the description",maxLength:20,state:"error",errorMsg:"You have reached the character limit."},parameters:{docs:{storyDescription:'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.'}}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'texarea-example',
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'texarea-error-example',
    value: 'Whispering winds caress gentle souls, awakening dreams.',
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
    maxLength: 20,
    state: 'error',
    errorMsg: 'You have reached the character limit.'
  },
  parameters: {
    docs: {
      storyDescription: 'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.'
    }
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const x=["Default","Error"];export{e as Default,r as Error,x as __namedExportsOrder,g as default};
