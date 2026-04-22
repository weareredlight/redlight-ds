import{j as s}from"./jsx-runtime-6qgwzs7k.js";import{M as S,E,b as F}from"./react-icons.esm-BvxPXE_h.js";import{r as T}from"./index-DQDNmYQF.js";import{I as C}from"./index-DDTIKU7D.js";import"./Flex-CcM5UGxd.js";import"./stitches-rxIYWSTB.js";import"./index-5ozlnPp-.js";import"./index-CiCkSv5t.js";import"./index-DxHfsaSz.js";const q={title:"Components/Data Input/Input",component:C,parameters:{docs:{description:{component:"An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered."}}},args:{onClickIcon:void 0},argTypes:{placeholder:{control:"text"},label:{control:"text"},description:{control:"text"},id:{control:"text"},state:{control:"radio",options:[null,"error","dirty","disabled"]},variant:{control:"radio",options:[null,"simple"]},type:{control:"select",options:["text","password","email","search"]},fullWidth:{control:"boolean"},errorMsg:{table:{disable:!0}},containerProps:{table:{disable:!0}},iconComponent:{table:{disable:!0}},iconPosition:{table:{disable:!0}},onClickIcon:{table:{disable:!0}}}},o={args:{placeholder:"Write something...",label:"This is the label",description:"This is the description",id:"input-example"}},M=()=>s.jsx(S,{}),r={args:{placeholder:"Search...",id:"input-example",iconPosition:"left",type:"search",iconComponent:M},parameters:{docs:{description:{story:"You can add an icon. For example a magnify icon for a search bar."},source:{code:`
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  `}}}},v=()=>s.jsx(F,{}),W=()=>s.jsx(E,{}),e=()=>{const[t,P]=T.useState(!1);return s.jsx(C,{id:"input-example",label:"Password",type:t?"text":"password",iconComponent:t?W:v,onClickIcon:()=>P(!t),value:"password123456",onChange:()=>{}})};e.args={placeholder:"Chose your password",label:"Password",id:"input-example",iconPosition:"right",type:"password",value:"password123456",iconComponent:v};e.parameters={docs:{description:{story:"The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password."},source:{code:`
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
`}}};const n={args:{id:"input-error-example",placeholder:"Insert your e-mail",label:"E-mail",type:"email",value:"user.com",state:"error",errorMsg:"wrong e-mail format"},parameters:{docs:{description:{story:"If there is an error when filling in the field, it will turn red and may also show a custom error message"},source:{code:`
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
  `}}}},a={args:{id:"input-simple-example",label:"Filters",placeholder:"Type in some filters",variant:"simple"},parameters:{docs:{description:{story:"Simple inputs can be used to search inside settings or tables."},source:{code:`
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  `}}}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description',
    id: 'input-example'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    id: 'input-example',
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
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  \`
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,w;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [showPassword, setShowPassword] = useState(false);
  return <Input id='input-example' label='Password' type={showPassword ? 'text' : 'password'} iconComponent={showPassword ? EyeOpen : EyeClosed} onClickIcon={() => setShowPassword(!showPassword)} value='password123456' onChange={() => {}} />;
}`,...(w=(h=e.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,x,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const z=["Default","WithIcon","WithInteractiveIcon","Error","Simple"];export{o as Default,n as Error,a as Simple,r as WithIcon,e as WithInteractiveIcon,z as __namedExportsOrder,q as default};
