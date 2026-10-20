import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,r as i,t as a}from"./TimePicker-CyfbgG2e.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o=t(),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=new Date().toTimeString().slice(0,5),u=e=>{let[t,n]=(0,o.useState)(e.value);return(0,o.useEffect)(()=>n(e.value),[e.value]),(0,s.jsx)(r,{...e,value:t,onChange:t=>{n(String(t)),e.onChange(t)}})},d={title:`Components/Data Input/Time Picker`,component:r,render:u,parameters:{docs:{source:{excludeDecorators:!0},description:{component:`Time Picker is a component that allows users to select time or duration.`}}},args:{name:`time-picker`,label:`Select a time`,value:l,onChange:c()},argTypes:{type:{control:`radio`,options:Object.values(a)},fullWidth:{control:`boolean`},disabled:{control:`boolean`}}},f={parameters:{docs:{description:{story:`By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time.`}}}},p={args:{label:`Select a duration`,type:a.DURATION,value:`01:00`},parameters:{docs:{description:{story:`The Time Picker component can be set to display a duration picker instead of a time picker.`}}}},m={args:{description:`Opening time of the store`},parameters:{docs:{description:{story:`A description can be shown under the label.`}}}},h={args:{error:`This field is required`},parameters:{docs:{description:{story:`The Time Picker component can display an error message below the input field.`}}}},g={args:{disabled:!0},parameters:{docs:{description:{story:`A disabled Time Picker cannot be edited.`}}}},_={args:{fullWidth:!0},parameters:{docs:{description:{story:`The Time Picker can occupy the full width of the parent container.`}}}},v=[`Default`,`Duration`,`WithDescription`,`WithError`,`Disabled`,`FullWidth`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a duration',
    type: PickerTypes.DURATION,
    value: '01:00'
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker component can be set to display a duration picker instead of a time picker.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Opening time of the store'
  },
  parameters: {
    docs: {
      description: {
        story: 'A description can be shown under the label.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required'
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker component can display an error message below the input field.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled Time Picker cannot be edited.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The Time Picker can occupy the full width of the parent container.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{f as Default,g as Disabled,p as Duration,_ as FullWidth,m as WithDescription,h as WithError,v as __namedExportsOrder,d as default};