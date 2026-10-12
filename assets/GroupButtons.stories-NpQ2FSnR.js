import{j as b}from"./jsx-runtime-CHn-5JxF.js";import{r as a}from"./iframe-C6Z6JLDr.js";import{G as d}from"./index-BIz7LD2V.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./react-icons.esm-EwFTjkwr.js";import"./colors-k5Y3hgfw.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,y=e=>{const[m,o]=a.useState(e.selectedButton);return a.useEffect(()=>o(e.selectedButton),[e.selectedButton]),b.jsx(d,{...e,selectedButton:m,onButtonSelect:s=>{o(s),e.onButtonSelect(s)}})},_={title:"Components/General/Group Buttons",component:d,render:y,parameters:{docs:{description:{component:"GroupButtons are a set of buttons that are grouped together. They are typically used to represent a set of actions that are related to each other."}}},args:{buttons:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}],selectedButton:"option1",onButtonSelect:B()},argTypes:{selectedButton:{control:"text"}}},t={parameters:{docs:{description:{story:"The selected button uses the primary variant. Keep `selectedButton` in state and update it in `onButtonSelect`."},source:{code:`
const [selected, setSelected] = useState('option1')

return (
  <GroupButtons
    buttons={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]}
    selectedButton={selected}
    onButtonSelect={setSelected}
  />
)
`}}}},n={args:{buttons:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],selectedButton:"week"},parameters:{docs:{description:{story:"A group can hold any number of options, for example to switch between views."}}}},G=["Default","ManyOptions"];var r,l,u;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The selected button uses the primary variant. Keep \`selectedButton\` in state and update it in \`onButtonSelect\`.'
      },
      source: {
        code: \`
const [selected, setSelected] = useState('option1')

return (
  <GroupButtons
    buttons={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]}
    selectedButton={selected}
    onButtonSelect={setSelected}
  />
)
\`
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    buttons: [{
      label: 'Day',
      value: 'day'
    }, {
      label: 'Week',
      value: 'week'
    }, {
      label: 'Month',
      value: 'month'
    }, {
      label: 'Year',
      value: 'year'
    }],
    selectedButton: 'week'
  },
  parameters: {
    docs: {
      description: {
        story: 'A group can hold any number of options, for example to switch between views.'
      }
    }
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{t as Default,n as ManyOptions,G as __namedExportsOrder,_ as default};
