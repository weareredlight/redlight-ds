import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Checkbox-CHRIpyne.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>{let[t,n]=(0,a.useState)(e.checked??!1);return(0,a.useEffect)(()=>n(e.checked??!1),[e.checked]),(0,o.jsx)(i,{...e,checked:t,onChange:t=>{n(t.target.checked),e.onChange?.(t)}})},l={title:`Components/Data Input/Checkbox`,component:i,render:c,parameters:{docs:{description:{component:`A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist.`}}},args:{id:`checkbox-default`,onChange:s()},argTypes:{labelPosition:{control:`radio`,options:[`left`,`right`]},state:{control:`radio`,options:[`null`,`error`,`dirty`]},disabled:{control:`boolean`},checked:{control:`boolean`}}},u={args:{label:`This is the label`,description:`This is the description`}},d={args:{id:`checkbox-left`,label:`This is the label`,labelPosition:`left`},parameters:{docs:{description:{story:`Using the "labelPosition" prop, you can change the position of the label.`}}}},f={args:{id:`checkbox-checked`,label:`This is the label`,checked:!0},parameters:{docs:{description:{story:`Use "checked" and "onChange" to control the checkbox.`}}}},p={args:{id:`checkbox-disabled`,label:`This is the label`,checked:!0,disabled:!0},parameters:{docs:{description:{story:`Disabled checkboxes cannot be changed.`}}}},m={args:{id:`checkbox-dirty`,label:`This is the label`,checked:!0,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},h={args:{id:`checkbox-error-example`,label:`This is the label`,state:`error`,errorMsg:`Don't forget to check this option`},parameters:{docs:{description:{story:`If there is an error, it will turn red and may also show a custom error message`}}}},g=[`Default`,`LabelPosition`,`Checked`,`Disabled`,`Dirty`,`Error`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-left',
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
    id: 'checkbox-checked',
    label: 'This is the label',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "checked" and "onChange" to control the checkbox.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-disabled',
    label: 'This is the label',
    checked: true,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkboxes cannot be changed.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-dirty',
    label: 'This is the label',
    checked: true,
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to check this option"
  },
  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Checked,u as Default,m as Dirty,p as Disabled,h as Error,d as LabelPosition,g as __namedExportsOrder,l as default};