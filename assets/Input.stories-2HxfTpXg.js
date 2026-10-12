import{j as r}from"./jsx-runtime-CHn-5JxF.js";import{M as G,d as K,e as L}from"./react-icons.esm-EwFTjkwr.js";import{r as h}from"./iframe-C6Z6JLDr.js";import{I as q}from"./index-C9Uc_w2B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYSIL8sV.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./colors-k5Y3hgfw.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";const{fn:V}=__STORYBOOK_MODULE_TEST__,B=e=>{const[n,a]=h.useState(e.value??"");return h.useEffect(()=>a(e.value??""),[e.value]),r.jsx(q,{...e,value:n,onChange:m=>{a(m.target.value==null?"":String(m.target.value)),e.onChange(m)}})},ce={title:"Components/Data Input/Input",component:q,render:B,parameters:{docs:{description:{component:"An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered."}}},args:{id:"input-example",onChange:V(),onClickIcon:void 0},argTypes:{placeholder:{control:"text"},label:{control:"text"},description:{control:"text"},id:{control:"text"},state:{control:"radio",options:["null","error","dirty","disabled"]},variant:{control:"radio",options:["null","simple"]},type:{control:"select",options:["text","password","email","search","number"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},errorMsg:{table:{disable:!0}},containerProps:{table:{disable:!0}},iconComponent:{table:{disable:!0}},iconPosition:{control:"radio",options:["left","right"],if:{arg:"iconComponent",exists:!0}},onClickIcon:{table:{disable:!0}}}},o={args:{placeholder:"Write something...",label:"This is the label",description:"This is the description"}},z=()=>r.jsx(G,{}),t={args:{placeholder:"Search...",iconPosition:"left",type:"search",iconComponent:z},parameters:{docs:{description:{story:"You can add an icon. For example a magnify icon for a search bar."},source:{code:`
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconPosition='left'
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  `}}}},H=()=>r.jsx(L,{}),J=()=>r.jsx(K,{}),X=e=>{const[n,a]=h.useState(!1);return r.jsx(B,{...e,type:n?"text":"password",iconComponent:n?J:H,onClickIcon:()=>a(!n)})},s={render:X,args:{id:"password-input-example",placeholder:"Choose your password",label:"Password",value:"password123456"},parameters:{docs:{description:{story:"The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password."},source:{code:`
const [showPassword, setShowPassword] = useState(false)

return (
  <Input
    id='password-input-example'
    label='Password'
    type={showPassword ? 'text' : 'password'}
    iconComponent={showPassword ? EyeOpen : EyeClosed}
    onClickIcon={() => setShowPassword(!showPassword)}
    value={yourPassword}
    onChange={e => updateFunction(e.target.value)}
  />
)
`}}}},i={args:{id:"input-number-example",label:"Quantity",type:"number",value:"1"},parameters:{docs:{description:{story:'With `type="number"`, `e.target.value` in `onChange` is a number. When the field is cleared it is `null`.'}}}},l={args:{id:"input-error-example",placeholder:"Insert your e-mail",label:"E-mail",type:"email",value:"user.com",state:"error",errorMsg:"wrong e-mail format"},parameters:{docs:{description:{story:"If there is an error when filling in the field, it will turn red and may also show a custom error message"},source:{code:`
  <Input
    id='input-error-example'
    type='email'
    label='E-mail'
    placeholder='Insert your e-mail'
    value={yourEmail}
    state='error'
    errorMsg='wrong e-mail format'
    onChange={e => updateFunction(e.target.value)}
  />
  `}}}},c={args:{id:"input-dirty-example",label:"Name",value:"Edited value",state:"dirty"},parameters:{docs:{description:{story:'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'}}}},p={args:{id:"input-disabled-example",label:"Name",value:"You cannot edit this",disabled:!0},parameters:{docs:{description:{story:'Use the `disabled` prop (or `state="disabled"`) to prevent editing.'}}}},d={args:{id:"input-simple-example",label:"Filters",placeholder:"Type in some filters",variant:"simple"},parameters:{docs:{description:{story:"Simple inputs can be used to search inside settings or tables."},source:{code:`
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  `}}}},u={args:{id:"input-full-width-example",label:"Address",placeholder:"Street, number, city",fullWidth:!0},parameters:{docs:{description:{story:"The input can occupy the full width of the parent container."}}}},pe=["Default","WithIcon","WithInteractiveIcon","NumberInput","Error","Dirty","Disabled","Simple","FullWidth"];var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,f,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    iconPosition: 'left',
    type: 'search',
    iconComponent: SearchIcon
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add an icon. For example a magnify icon for a search bar.'
      },
      source: {
        code: \`
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconPosition='left'
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  \`
      }
    }
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,I,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: PasswordTemplate,
  args: {
    id: 'password-input-example',
    placeholder: 'Choose your password',
    label: 'Password',
    value: 'password123456'
  },
  parameters: {
    docs: {
      description: {
        story: 'The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password.'
      },
      source: {
        code: \`
const [showPassword, setShowPassword] = useState(false)

return (
  <Input
    id='password-input-example'
    label='Password'
    type={showPassword ? 'text' : 'password'}
    iconComponent={showPassword ? EyeOpen : EyeClosed}
    onClickIcon={() => setShowPassword(!showPassword)}
    value={yourPassword}
    onChange={e => updateFunction(e.target.value)}
  />
)
\`
      }
    }
  }
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,P,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'input-number-example',
    label: 'Quantity',
    type: 'number',
    value: '1'
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`type="number"\`, \`e.target.value\` in \`onChange\` is a number. When the field is cleared it is \`null\`.'
      }
    }
  }
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,F,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'input-error-example',
    placeholder: 'Insert your e-mail',
    label: 'E-mail',
    type: 'email',
    value: 'user.com',
    state: 'error',
    errorMsg: 'wrong e-mail format'
  },
  parameters: {
    docs: {
      description: {
        story: 'If there is an error when filling in the field, it will turn red and may also show a custom error message'
      },
      source: {
        code: \`
  <Input
    id='input-error-example'
    type='email'
    label='E-mail'
    placeholder='Insert your e-mail'
    value={yourEmail}
    state='error'
    errorMsg='wrong e-mail format'
    onChange={e => updateFunction(e.target.value)}
  />
  \`
      }
    }
  }
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,O,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'input-dirty-example',
    label: 'Name',
    value: 'Edited value',
    state: 'dirty'
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.'
      }
    }
  }
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var _,j,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'input-disabled-example',
    label: 'Name',
    value: 'You cannot edit this',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the \`disabled\` prop (or \`state="disabled"\`) to prevent editing.'
      }
    }
  }
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,Y,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'input-simple-example',
    label: 'Filters',
    placeholder: 'Type in some filters',
    variant: 'simple'
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple inputs can be used to search inside settings or tables.'
      },
      source: {
        code: \`
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  \`
      }
    }
  }
}`,...(A=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var U,Q,R;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: 'input-full-width-example',
    label: 'Address',
    placeholder: 'Street, number, city',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The input can occupy the full width of the parent container.'
      }
    }
  }
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};export{o as Default,c as Dirty,p as Disabled,l as Error,u as FullWidth,i as NumberInput,d as Simple,t as WithIcon,s as WithInteractiveIcon,pe as __namedExportsOrder,ce as default};
