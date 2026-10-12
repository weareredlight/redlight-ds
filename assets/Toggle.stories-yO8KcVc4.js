import{j as U}from"./jsx-runtime-CHn-5JxF.js";import{r as c}from"./iframe-C6Z6JLDr.js";import{T as P}from"./index-DlNzOu-s.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-CkkWgxxV.js";import"./index--2CG76K7.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,k=e=>{const[C,i]=c.useState(e.value??!1);return c.useEffect(()=>i(e.value??!1),[e.value]),U.jsx(P,{...e,value:C,onChange:l=>{i(!!l.target.value),e.onChange(l)}})},F={title:"Components/Data Input/Toggle",component:P,render:k,parameters:{docs:{description:{component:"Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches."}}},args:{id:"toggle-example",onChange:j()},argTypes:{label:{control:"text"},description:{control:"text"},value:{control:"boolean"},labelPosition:{control:"radio",options:["left","right"]},state:{control:"radio",options:["null","error","dirty","disabled"]}}},t={args:{label:"This is the label",description:"This is the description"}},r={args:{id:"toggle-left",label:"This is the label",labelPosition:"left"},parameters:{docs:{description:{story:'Using the "labelPosition" prop, you can change the position of the label.'}}}},o={args:{id:"toggle-on",label:"This is the label",value:!0},parameters:{docs:{description:{story:'Use "value" and "onChange" to control the toggle.'}}}},s={args:{id:"toggle-dirty",label:"This is the label",value:!0,state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},a={args:{id:"toggle-disabled",label:"This is the label",value:!0,state:"disabled"},parameters:{docs:{description:{story:'With `state="disabled"` the toggle cannot be switched.'}}}},n={args:{id:"toggle-error-example",label:"This is the label",state:"error",errorMsg:"Don't forget to toggle this option"},parameters:{docs:{description:{story:"If there is an error, it will turn red and may also show a custom error message"}}}},G=["Default","LabelPosition","On","Dirty","Disabled","Error"];var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,m,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,v,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,D,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,_,O;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(_=n.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};export{t as Default,s as Dirty,a as Disabled,n as Error,r as LabelPosition,o as On,G as __namedExportsOrder,F as default};
