import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./TextArea-LCqpfbrG.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>{let[t,n]=(0,a.useState)(e.value??``);return(0,a.useEffect)(()=>n(e.value??``),[e.value]),(0,o.jsx)(i,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}})},l={title:`Components/Data Input/Text Area`,component:i,render:c,parameters:{docs:{description:{component:`The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.`}}},args:{id:`textarea-example`,placeholder:`Write something...`,label:`This is the label`,description:`This is the description`,onChange:s()},argTypes:{state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]},rows:{control:`number`},maxLength:{control:`number`},required:{control:`boolean`},fullWidth:{control:`boolean`}}},u={},d={args:{id:`textarea-error-example`,value:`Whispering winds caress gentle souls, awakening dreams.`,maxLength:20,state:`error`,errorMsg:`You have reached the character limit.`},parameters:{docs:{description:{story:`You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.`}}}},f={args:{id:`textarea-dirty-example`,value:`An edited comment.`,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},p={args:{id:`textarea-disabled-example`,value:`You cannot edit this.`,state:`disabled`},parameters:{docs:{description:{story:'With `state="disabled"` the textarea cannot be edited.'}}}},m={args:{id:`textarea-full-width-example`,fullWidth:!0},parameters:{docs:{description:{story:`The textarea can occupy the full width of the parent container.`}}}},h=[`Default`,`Error`,`Dirty`,`Disabled`,`FullWidth`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textarea-error-example',
    value: 'Whispering winds caress gentle souls, awakening dreams.',
    maxLength: 20,
    state: 'error',
    errorMsg: 'You have reached the character limit.'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can set a character limit using the "maxLength" property. In this case, or any other case you choose, the textarea will display its error status which can contain a custom message.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textarea-dirty-example',
    value: 'An edited comment.',
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textarea-disabled-example',
    value: 'You cannot edit this.',
    state: 'disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`state="disabled"\` the textarea cannot be edited.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textarea-full-width-example',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The textarea can occupy the full width of the parent container.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{u as Default,f as Dirty,p as Disabled,d as Error,m as FullWidth,h as __namedExportsOrder,l as default};