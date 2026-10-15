import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Toggle-CrkWxMT5.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>{let[t,n]=(0,a.useState)(e.value??!1);return(0,a.useEffect)(()=>n(e.value??!1),[e.value]),(0,o.jsx)(i,{...e,value:t,onChange:t=>{n(!!t.target.value),e.onChange(t)}})},l={title:`Components/Data Input/Toggle`,component:i,render:c,parameters:{docs:{description:{component:`Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.`}}},args:{id:`toggle-example`,onChange:s()},argTypes:{label:{control:`text`},description:{control:`text`},value:{control:`boolean`},labelPosition:{control:`radio`,options:[`left`,`right`]},state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]}}},u={args:{label:`This is the label`,description:`This is the description`}},d={args:{id:`toggle-left`,label:`This is the label`,labelPosition:`left`},parameters:{docs:{description:{story:`Using the "labelPosition" prop, you can change the position of the label.`}}}},f={args:{id:`toggle-on`,label:`This is the label`,value:!0},parameters:{docs:{description:{story:`Use "value" and "onChange" to control the toggle.`}}}},p={args:{id:`toggle-dirty`,label:`This is the label`,value:!0,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},m={args:{id:`toggle-disabled`,label:`This is the label`,value:!0,state:`disabled`},parameters:{docs:{description:{story:'With `state="disabled"` the toggle cannot be switched.'}}}},h={args:{id:`toggle-error-example`,label:`This is the label`,state:`error`,errorMsg:`Don't forget to toggle this option`},parameters:{docs:{description:{story:`If there is an error, it will turn red and may also show a custom error message`}}}},g=[`Default`,`LabelPosition`,`On`,`Dirty`,`Disabled`,`Error`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-left',
    label: 'This is the label',
    labelPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-on',
    label: 'This is the label',
    value: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "value" and "onChange" to control the toggle.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-dirty',
    label: 'This is the label',
    value: true,
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-disabled',
    label: 'This is the label',
    value: true,
    state: 'disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="disabled"\` the toggle cannot be switched.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to toggle this option"
  },
  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{u as Default,p as Dirty,m as Disabled,h as Error,d as LabelPosition,f as On,g as __namedExportsOrder,l as default};