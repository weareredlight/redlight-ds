import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./MultiSelect-8dj7-DvR.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`},{value:`option5`,label:`Option 5`}],l=e=>{let[t,n]=(0,a.useState)(e.value);return(0,a.useEffect)(()=>n(e.value),[e.value]),(0,o.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange(t)}})},u={title:`Components/Data Input/Multi Select`,component:i,render:l,decorators:[e=>(0,o.jsx)(`div`,{style:{minHeight:`200px`},children:e()})],parameters:{layout:`centered`,docs:{source:{excludeDecorators:!0},description:{component:`MultiSelect is a dropdown that allows users to select or search for multiple options.`}}},args:{name:`multi-select`,label:`Select multiple options`,options:c,value:[`option2`],getLabel:e=>c.find(t=>t.value===e)?.label||``,onChange:s(),hasPills:!1,state:`null`},argTypes:{state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]},hasPills:{control:`boolean`},fullWidth:{control:`boolean`}}},d={parameters:{docs:{description:{story:`This is the default MultiSelect that has an indicator on the right side of the input field to indicate the number of selected options.`},source:{code:`
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
`}}}},f={args:{hasPills:!0,value:[`option2`,`option4`]},parameters:{docs:{description:{story:"It can also be displayed with pills to show the selected options by using the `hasPills` prop."},source:{code:`
<MultiSelect
  hasPills
  name='multi-select'
  options={myOptions}
  label='Select multiple options'
  value={selectedOptions}
  onChange={options => setSelectedOptions(options)}
  getLabel={value => myOptions.find(option => option.value === value)?.label || ''}
/>
`}}}},p={args:{value:[],placeholder:`Pick some options...`},parameters:{docs:{description:{story:`The placeholder shows while nothing is selected.`}}}},m={args:{state:`error`,errorMsg:`Select at least two options`},parameters:{docs:{description:{story:'With `state="error"` the field turns red and shows the `errorMsg` below it.'}}}},h={args:{state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},g={args:{state:`disabled`},parameters:{docs:{description:{story:'With `state="disabled"` the options cannot be changed.'}}}},_=[`Default`,`WithPills`,`Placeholder`,`Error`,`Dirty`,`Disabled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as Default,h as Dirty,g as Disabled,m as Error,p as Placeholder,f as WithPills,_ as __namedExportsOrder,u as default};