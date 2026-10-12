import{j as A}from"./jsx-runtime-CHn-5JxF.js";import{r as p}from"./iframe-C6Z6JLDr.js";import{P as E,T as _}from"./index-CovIq2Va.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-IJ9H6hX8.js";import"./clsx-B-dksMZM.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,j=new Date().toTimeString().slice(0,5),R=e=>{const[v,i]=p.useState(e.value);return p.useEffect(()=>i(e.value),[e.value]),A.jsx(_,{...e,value:v,onChange:c=>{i(String(c)),e.onChange(c)}})},H={title:"Components/Data Input/Time Picker",component:_,render:R,parameters:{docs:{source:{excludeDecorators:!0},description:{component:"Time Picker is a component that allows users to select time or duration."}}},args:{name:"time-picker",label:"Select a time",value:j,onChange:C()},argTypes:{type:{control:"radio",options:Object.values(E)},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},r={parameters:{docs:{description:{story:"By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time."}}}},t={args:{label:"Select a duration",type:E.DURATION,value:"01:00"},parameters:{docs:{description:{story:"The Time Picker component can be set to display a duration picker instead of a time picker."}}}},o={args:{description:"Opening time of the store"},parameters:{docs:{description:{story:"A description can be shown under the label."}}}},n={args:{error:"This field is required"},parameters:{docs:{description:{story:"The Time Picker component can display an error message below the input field."}}}},s={args:{disabled:!0},parameters:{docs:{description:{story:"A disabled Time Picker cannot be edited."}}}},a={args:{fullWidth:!0},parameters:{docs:{description:{story:"The Time Picker can occupy the full width of the parent container."}}}},J=["Default","Duration","WithDescription","WithError","Disabled","FullWidth"];var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'By default, the Time Picker component displays a text input field with a clock icon. Clicking on the clock icon opens a clock for selecting a time.'
      }
    }
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,h,T;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,k,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var g,b,P;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var D,S,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var O,x,W;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(x=a.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};export{r as Default,s as Disabled,t as Duration,a as FullWidth,o as WithDescription,n as WithError,J as __namedExportsOrder,H as default};
