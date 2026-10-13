import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Select-B6BfCOb6.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`},{value:`option5`,label:`Option 5`}],l=e=>{let[t,n]=(0,a.useState)(e.value);return(0,a.useEffect)(()=>n(e.value),[e.value]),(0,o.jsx)(i,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}})},u={title:`Components/Data Input/Select`,component:i,render:l,parameters:{docs:{description:{component:`Select inputs present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.`}}},args:{id:`select`,name:`select`,label:`This is the label`,description:`This is the description`,placeholder:`Please select an option`,value:null,state:`null`,options:c,getLabel:e=>e.label,getValue:e=>e.value,onChange:s()},argTypes:{state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]},variant:{control:`radio`,options:[`null`,`simple`]},type:{control:`radio`,options:[`string`,`number`]},fullWidth:{control:`boolean`}}},d={parameters:{docs:{source:{code:`
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
  `}}}},f={args:{id:`select-simple`,label:`Sort by`,description:void 0,variant:`simple`},parameters:{docs:{description:{story:`Simple selects can be used to filter or sort inside settings or tables.`}}}},p={args:{id:`select-empty-option`,value:`option1`,emptyOption:`None`},parameters:{docs:{description:{story:'Use "emptyOption" to add an option that clears the selection. Picking it sends `null` to `onChange`.'}}}},m={args:{id:`select-error`,state:`error`,errorMsg:`Please select an option`},parameters:{docs:{description:{story:'With `state="error"` the field turns red and shows the `errorMsg` below it.'}}}},h={args:{id:`select-dirty`,value:`option2`,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},g={args:{id:`select-disabled`,value:`option2`,state:`disabled`},parameters:{docs:{description:{story:'With `state="disabled"` the select cannot be opened.'}}}},_={args:{id:`select-full-width`,fullWidth:!0},parameters:{docs:{description:{story:`The select can occupy the full width of the parent container.`}}}},v=[`Default`,`Simple`,`EmptyOption`,`Error`,`Dirty`,`Disabled`,`FullWidth`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{d as Default,h as Dirty,g as Disabled,p as EmptyOption,m as Error,_ as FullWidth,f as Simple,v as __namedExportsOrder,u as default};