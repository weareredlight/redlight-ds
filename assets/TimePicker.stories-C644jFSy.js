import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,r as i,t as a}from"./TimePicker-CRJfmvVe.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o=t(),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=new Date().toTimeString().slice(0,5),u=e=>{let[t,n]=(0,o.useState)(e.value);return(0,o.useEffect)(()=>n(e.value),[e.value]),(0,s.jsx)(r,{...e,value:t,onChange:t=>{n(String(t)),e.onChange(t)}})},d={title:`Components/Data Input/Time Picker`,component:r,render:u,parameters:{docs:{source:{excludeDecorators:!0},description:{component:`Time Picker is a component that allows users to select time or duration.`}}},args:{name:`time-picker`,label:`Select a time`,value:l,onChange:c()},argTypes:{type:{control:`radio`,options:Object.values(a)},fullWidth:{control:`boolean`},disabled:{control:`boolean`}}},f={parameters:{docs:{description:{story:`By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a list of hours and minutes for selecting a time. Its footer clears the time or picks the current one.`}}}},p={name:`12 Hours`,args:{locale:`en-US`},parameters:{docs:{description:{story:"The field and the list show 12 hours (4:00 PM) or 24 hours (16:00) as the browser's locale does. Set the `locale` prop to use another one. AM and PM stay in English unless `localizeNames` is set, and the value is always `HH:mm:ss` in 24 hours."}}}},m={args:{locale:`en-US`,format:`HH:mm`},parameters:{docs:{description:{story:"The `format` prop overrides the locale. Here `HH:mm` shows 24 hours in an `en-US` locale. Use `h` for 12 hours, with `a` for AM/PM."}}}},h={args:{label:`Select a duration`,type:a.DURATION,value:`01:00`},parameters:{docs:{description:{story:`The Time Picker component can be set to display a duration picker instead of a time picker.`}}}},g={args:{description:`Opening time of the store`},parameters:{docs:{description:{story:`A description can be shown under the label.`}}}},_={args:{error:`This field is required`},parameters:{docs:{description:{story:`The Time Picker component can display an error message below the input field.`}}}},v={args:{disabled:!0},parameters:{docs:{description:{story:`A disabled Time Picker cannot be edited.`}}}},y={args:{fullWidth:!0},parameters:{docs:{description:{story:`The Time Picker can occupy the full width of the parent container.`}}}},b=[`Default`,`TwelveHours`,`CustomFormat`,`Duration`,`WithDescription`,`WithError`,`Disabled`,`FullWidth`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a list of hours and minutes for selecting a time. Its footer clears the time or picks the current one.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '12 Hours',
  args: {
    locale: 'en-US'
  },
  parameters: {
    docs: {
      description: {
        story: 'The field and the list show 12 hours (4:00 PM) or 24 hours (16:00) as the browser\\'s locale does. Set the \`locale\` prop to use another one. AM and PM stay in English unless \`localizeNames\` is set, and the value is always \`HH:mm:ss\` in 24 hours.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    format: 'HH:mm'
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`format\` prop overrides the locale. Here \`HH:mm\` shows 24 hours in an \`en-US\` locale. Use \`h\` for 12 hours, with \`a\` for AM/PM.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{m as CustomFormat,f as Default,v as Disabled,h as Duration,y as FullWidth,p as TwelveHours,g as WithDescription,_ as WithError,b as __namedExportsOrder,d as default};