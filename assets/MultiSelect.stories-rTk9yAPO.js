import{j as _}from"./jsx-runtime-CHn-5JxF.js";import{r as c}from"./iframe-C6Z6JLDr.js";import{M as W}from"./index-C_YqBuGB.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./floating-ui.dom-CQVRXqPN.js";import"./index-DYSIL8sV.js";import"./utils-zpUxZkj0.js";import"./colors-k5Y3hgfw.js";import"./index-DXj11iZz.js";import"./index-Dh6MWD5I.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";import"./sizes-Djxfc6qe.js";const{fn:L}=__STORYBOOK_MODULE_TEST__,d=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],k=e=>{const[t,o]=c.useState(e.value);return c.useEffect(()=>o(e.value),[e.value]),_.jsx(W,{...e,value:t,onChange:p=>{o(p),e.onChange(p)}})},V={title:"Components/Data Input/Multi Select",component:W,render:k,decorators:[e=>_.jsx("div",{style:{minHeight:"200px"},children:e()})],parameters:{layout:"centered",docs:{source:{excludeDecorators:!0},description:{component:"MultiSelect is a dropdown that allows users to select or search for multiple options."}}},args:{name:"multi-select",label:"Select multiple options",options:d,value:["option2"],getLabel:e=>{var t;return((t=d.find(o=>o.value===e))==null?void 0:t.label)||""},onChange:L(),hasPills:!1,state:"null"},argTypes:{state:{control:"radio",options:["null","error","dirty","disabled"]},hasPills:{control:"boolean"},fullWidth:{control:"boolean"}}},s={parameters:{docs:{description:{story:"This is the default MultiSelect that has an indicator on the right side of the input field to indicate the number of selected options."},source:{code:`
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2'])

return (
  <MultiSelect
    name='multi-select'
    options={myOptions}
    label='Select multiple options'
    value={selectedOptions}
    onChange={options => setSelectedOptions(options)}
    getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
  />
)
`}}}},n={args:{hasPills:!0,value:["option2","option4"]},parameters:{docs:{description:{story:"It can also be displayed with pills to show the selected options by using the `hasPills` prop."},source:{code:`
<MultiSelect
  hasPills
  name='multi-select'
  options={myOptions}
  label='Select multiple options'
  value={selectedOptions}
  onChange={options => setSelectedOptions(options)}
  getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
/>
`}}}},a={args:{value:[],placeholder:"Pick some options..."},parameters:{docs:{description:{story:"The placeholder shows while nothing is selected."}}}},r={args:{state:"error",errorMsg:"Select at least two options"},parameters:{docs:{description:{story:'With `state="error"` the field turns red and shows the `errorMsg` below it.'}}}},i={args:{state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},l={args:{state:"disabled"},parameters:{docs:{description:{story:'With `state="disabled"` the options cannot be changed.'}}}},X=["Default","WithPills","Placeholder","Error","Dirty","Disabled"];var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This is the default MultiSelect that has an indicator on the right side of the input field to indicate the number of selected options.'
      },
      source: {
        code: \`
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2'])

return (
  <MultiSelect
    name='multi-select'
    options={myOptions}
    label='Select multiple options'
    value={selectedOptions}
    onChange={options => setSelectedOptions(options)}
    getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
  />
)
\`
      }
    }
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,g,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    hasPills: true,
    value: ['option2', 'option4']
  },
  parameters: {
    docs: {
      description: {
        story: 'It can also be displayed with pills to show the selected options by using the \`hasPills\` prop.'
      },
      source: {
        code: \`
<MultiSelect
  hasPills
  name='multi-select'
  options={myOptions}
  label='Select multiple options'
  value={selectedOptions}
  onChange={options => setSelectedOptions(options)}
  getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
/>
\`
      }
    }
  }
}`,...(O=(g=n.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var v,y,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: [],
    placeholder: 'Pick some options...'
  },
  parameters: {
    docs: {
      description: {
        story: 'The placeholder shows while nothing is selected.'
      }
    }
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,w,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: 'error',
    errorMsg: 'Select at least two options'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="error"\` the field turns red and shows the \`errorMsg\` below it.'
      }
    }
  }
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,x,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var D,C,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="disabled"\` the options cannot be changed.'
      }
    }
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};export{s as Default,i as Dirty,l as Disabled,r as Error,a as Placeholder,n as WithPills,X as __namedExportsOrder,V as default};
