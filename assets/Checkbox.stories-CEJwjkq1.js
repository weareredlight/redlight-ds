import{j}from"./jsx-runtime-CHn-5JxF.js";import{r as d}from"./iframe-C6Z6JLDr.js";import{C as O}from"./index-0_PDkTob.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,A=e=>{const[U,c]=d.useState(e.checked??!1);return d.useEffect(()=>c(e.checked??!1),[e.checked]),j.jsx(O,{...e,checked:U,onChange:i=>{var l;c(i.target.checked),(l=e.onChange)==null||l.call(e,i)}})},z={title:"Components/Data Input/Checkbox",component:O,render:A,parameters:{docs:{description:{component:"A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist."}}},args:{id:"checkbox-default",onChange:v()},argTypes:{labelPosition:{control:"radio",options:["left","right"]},state:{control:"radio",options:["null","error","dirty"]},disabled:{control:"boolean"},checked:{control:"boolean"}}},o={args:{label:"This is the label",description:"This is the description"}},t={args:{id:"checkbox-left",label:"This is the label",labelPosition:"left"},parameters:{docs:{description:{story:'Using the "labelPosition" prop, you can change the position of the label.'}}}},r={args:{id:"checkbox-checked",label:"This is the label",checked:!0},parameters:{docs:{description:{story:'Use "checked" and "onChange" to control the checkbox.'}}}},s={args:{id:"checkbox-disabled",label:"This is the label",checked:!0,disabled:!0},parameters:{docs:{description:{story:"Disabled checkboxes cannot be changed."}}}},a={args:{id:"checkbox-dirty",label:"This is the label",checked:!0,state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},n={args:{id:"checkbox-error-example",label:"This is the label",state:"error",errorMsg:"Don't forget to check this option"},parameters:{docs:{description:{story:"If there is an error, it will turn red and may also show a custom error message"}}}},F=["Default","LabelPosition","Checked","Disabled","Dirty","Error"];var h,p,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,u,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,T,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,w,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var E,_,P;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(_=n.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};export{r as Checked,o as Default,a as Dirty,s as Disabled,n as Error,t as LabelPosition,F as __namedExportsOrder,z as default};
