import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Tag-D320TmQM.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Displays/Tag`,component:n,parameters:{docs:{description:{component:`Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed.`}}},args:{children:`Tag Example`},argTypes:{variant:{control:`radio`,options:[`default`,`error`]},disabled:{control:`boolean`}}},a={args:{onClose:void 0},parameters:{docs:{description:{story:`This is the default tag.`}}}},o={args:{onClose:r()},parameters:{docs:{description:{story:`When you have a group of tags you can delete them by pressing the cross button.`}}}},s={args:{variant:`error`,onClose:r()},parameters:{docs:{description:{story:"Tags can also be used to indicate potential errors or dangerous actions. Error tags never show the close button, even when `onClose` is set."}}}},c={args:{disabled:!0,onClose:r()},parameters:{docs:{description:{story:`Disabled tags keep the close button but it cannot be clicked, so the user cannot delete them.`}}}},l=[`Default`,`Closable`,`Error`,`Disabled`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default tag.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of tags you can delete them by pressing the cross button.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can also be used to indicate potential errors or dangerous actions. Error tags never show the close button, even when \`onClose\` is set.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled tags keep the close button but it cannot be clicked, so the user cannot delete them.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as Closable,a as Default,c as Disabled,s as Error,l as __namedExportsOrder,i as default};