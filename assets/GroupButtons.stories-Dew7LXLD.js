import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./GroupButtons-DJMoD9uu.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>{let[t,n]=(0,a.useState)(e.selectedButton);return(0,a.useEffect)(()=>n(e.selectedButton),[e.selectedButton]),(0,o.jsx)(i,{...e,selectedButton:t,onButtonSelect:t=>{n(t),e.onButtonSelect(t)}})},l={title:`Components/General/Group Buttons`,component:i,render:c,parameters:{docs:{description:{component:`GroupButtons are a set of buttons that are grouped together. They are typically used to represent a set of actions that are related to each other.`}}},args:{buttons:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`}],selectedButton:`option1`,onButtonSelect:s()},argTypes:{selectedButton:{control:`text`}}},u={parameters:{docs:{description:{story:"The selected button uses the primary variant. Keep `selectedButton` in state and update it in `onButtonSelect`."},source:{code:`
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
`}}}},d={args:{buttons:[{label:`Day`,value:`day`},{label:`Week`,value:`week`},{label:`Month`,value:`month`},{label:`Year`,value:`year`}],selectedButton:`week`},parameters:{docs:{description:{story:`A group can hold any number of options, for example to switch between views.`}}}},f=[`Default`,`ManyOptions`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Default,d as ManyOptions,f as __namedExportsOrder,l as default};