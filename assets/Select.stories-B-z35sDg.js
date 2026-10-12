import{j as L}from"./jsx-runtime-CHn-5JxF.js";import{r as p}from"./iframe-C6Z6JLDr.js";import{S as k}from"./index-fm6-AEoB.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-BGSraF8E.js";import"./index-xpe0NxJi.js";import"./index-C3iQHgvf.js";import"./index-0GUFg1F8.js";import"./index-Do5_-w80.js";import"./index-CVV3SJTi.js";import"./floating-ui.dom-CQVRXqPN.js";import"./index--2CG76K7.js";import"./index-CkkWgxxV.js";import"./index-T9Exmj5P.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,U=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],F=e=>{const[M,l]=p.useState(e.value);return p.useEffect(()=>l(e.value),[e.value]),L.jsx(k,{...e,value:M,onChange:c=>{l(c.target.value),e.onChange(c)}})},se={title:"Components/Data Input/Select",component:k,render:F,parameters:{docs:{description:{component:"Select inputs present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content."}}},args:{id:"select",name:"select",label:"This is the label",description:"This is the description",placeholder:"Please select an option",value:null,state:"null",options:U,getLabel:e=>e.label,getValue:e=>e.value,onChange:j()},argTypes:{state:{control:"radio",options:["null","error","dirty","disabled"]},variant:{control:"radio",options:["null","simple"]},type:{control:"radio",options:["string","number"]},fullWidth:{control:"boolean"}}},t={parameters:{docs:{source:{code:`
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedVal, setSelectedVal] = useState(null)

return(
  <Select
    id='select'
    name='select'
    label='This is the label'
    description='This is the description'
    placeholder='Please select an option'
    onChange={e => setSelectedVal(e.target.value)}
    value={selectedVal}
    getLabel={option => option.label}
    getValue={option => option.value}
    options={myOptions}
  />
)
  `}}}},o={args:{id:"select-simple",label:"Sort by",description:void 0,variant:"simple"},parameters:{docs:{description:{story:"Simple selects can be used to filter or sort inside settings or tables."}}}},n={args:{id:"select-empty-option",value:"option1",emptyOption:"None"},parameters:{docs:{description:{story:'Use "emptyOption" to add an option that clears the selection. Picking it sends `null` to `onChange`.'}}}},s={args:{id:"select-error",state:"error",errorMsg:"Please select an option"},parameters:{docs:{description:{story:'With `state="error"` the field turns red and shows the `errorMsg` below it.'}}}},r={args:{id:"select-dirty",value:"option2",state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},a={args:{id:"select-disabled",value:"option2",state:"disabled"},parameters:{docs:{description:{story:'With `state="disabled"` the select cannot be opened.'}}}},i={args:{id:"select-full-width",fullWidth:!0},parameters:{docs:{description:{story:"The select can occupy the full width of the parent container."}}}},re=["Default","Simple","EmptyOption","Error","Dirty","Disabled","FullWidth"];var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
const myOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  ...
]

const [selectedVal, setSelectedVal] = useState(null)

return(
  <Select
    id='select'
    name='select'
    label='This is the label'
    description='This is the description'
    placeholder='Please select an option'
    onChange={e => setSelectedVal(e.target.value)}
    value={selectedVal}
    getLabel={option => option.label}
    getValue={option => option.value}
    options={myOptions}
  />
)
  \`
      }
    }
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'select-simple',
    label: 'Sort by',
    description: undefined,
    variant: 'simple'
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple selects can be used to filter or sort inside settings or tables.'
      }
    }
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'select-empty-option',
    value: 'option1',
    emptyOption: 'None'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "emptyOption" to add an option that clears the selection. Picking it sends \`null\` to \`onChange\`.'
      }
    }
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,O,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'select-error',
    state: 'error',
    errorMsg: 'Please select an option'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="error"\` the field turns red and shows the \`errorMsg\` below it.'
      }
    }
  }
}`,...(T=(O=s.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var V,E,w;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'select-dirty',
    value: 'option2',
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var x,W,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'select-disabled',
    value: 'option2',
    state: 'disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="disabled"\` the select cannot be opened.'
      }
    }
  }
}`,...(C=(W=a.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,_,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'select-full-width',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The select can occupy the full width of the parent container.'
      }
    }
  }
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};export{t as Default,r as Dirty,a as Disabled,n as EmptyOption,s as Error,i as FullWidth,o as Simple,re as __namedExportsOrder,se as default};
