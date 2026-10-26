import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Pill-jG-SXOgl.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Displays/Pill`,component:n,parameters:{docs:{description:{component:`Small, fully rounded rectangle that can be used to visually display and select different options or categories. It is typically used to represent discrete values, such as different statuses or types of content. Each pill is typically labeled with a text label, can be removed by clicking on the cross icon to the right.`}}},args:{children:`Pill Example`},argTypes:{variant:{control:`radio`,options:[`default`,`error`,`success`]}}},a={args:{onClose:void 0},parameters:{docs:{description:{story:`This is the default pill.`}}}},o={args:{variant:`success`,onClose:void 0},parameters:{docs:{description:{story:`This variation can label successful outcomes.`}}}},s={args:{variant:`error`,onClose:void 0},parameters:{docs:{description:{story:`This variation can label errors.`}}}},c={args:{onClose:r()},parameters:{docs:{description:{story:`When you have a group of pills you can delete them by pressing the cross button.`}}}},l={args:{style:{backgroundColor:`yellow`,color:`green`},onClose:void 0},parameters:{docs:{description:{story:"You can pass `style` or `className` to your pill in order to create your own variations."}}}},u=[`Default`,`Success`,`Error`,`Closable`,`CustomCSS`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default pill.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label successful outcomes.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation can label errors.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of pills you can delete them by pressing the cross button.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: 'yellow',
      color: 'green'
    },
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'You can pass \`style\` or \`className\` to your pill in order to create your own variations.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Closable,l as CustomCSS,a as Default,s as Error,o as Success,u as __namedExportsOrder,i as default};