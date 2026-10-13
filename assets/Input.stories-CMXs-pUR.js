import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{b as r,j as i,w as a,y as o}from"./react-icons.esm-BhZzypZb.js";import{n as s,t as c}from"./Input-CNEzJHV8.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{i(),l=t(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=e=>{let[t,n]=(0,l.useState)(e.value??``);return(0,l.useEffect)(()=>n(e.value??``),[e.value]),(0,u.jsx)(c,{...e,value:t,onChange:t=>{n(t.target.value==null?``:String(t.target.value)),e.onChange(t)}})},p={title:`Components/Data Input/Input`,component:c,render:f,parameters:{docs:{description:{component:`An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered.`}}},args:{id:`input-example`,onChange:d(),onClickIcon:void 0},argTypes:{placeholder:{control:`text`},label:{control:`text`},description:{control:`text`},id:{control:`text`},state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]},variant:{control:`radio`,options:[`null`,`simple`]},type:{control:`select`,options:[`text`,`password`,`email`,`search`,`number`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`},errorMsg:{table:{disable:!0}},containerProps:{table:{disable:!0}},iconComponent:{table:{disable:!0}},iconPosition:{control:`radio`,options:[`left`,`right`],if:{arg:`iconComponent`,exists:!0}},onClickIcon:{table:{disable:!0}}}},m={args:{placeholder:`Write something...`,label:`This is the label`,description:`This is the description`}},h=()=>(0,u.jsx)(a,{}),g={args:{placeholder:`Search...`,iconPosition:`left`,type:`search`,iconComponent:h},parameters:{docs:{description:{story:`You can add an icon. For example a magnify icon for a search bar.`},source:{code:`
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconPosition='left'
    iconComponent={() => <MagnifyIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  `}}}},_=()=>(0,u.jsx)(o,{}),v=()=>(0,u.jsx)(r,{}),y=e=>{let[t,n]=(0,l.useState)(!1);return(0,u.jsx)(f,{...e,type:t?`text`:`password`,iconComponent:t?v:_,onClickIcon:()=>n(!t)})},b={render:y,args:{id:`password-input-example`,placeholder:`Choose your password`,label:`Password`,value:`password123456`},parameters:{docs:{description:{story:`The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password.`},source:{code:`
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
`}}}},x={args:{id:`input-number-example`,label:`Quantity`,type:`number`,value:`1`},parameters:{docs:{description:{story:'With `type="number"`, `e.target.value` in `onChange` is a number. When the field is cleared it is `null`.'}}}},S={args:{id:`input-error-example`,placeholder:`Insert your e-mail`,label:`E-mail`,type:`email`,value:`user.com`,state:`error`,errorMsg:`wrong e-mail format`},parameters:{docs:{description:{story:`If there is an error when filling in the field, it will turn red and may also show a custom error message`},source:{code:`
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
  `}}}},C={args:{id:`input-dirty-example`,label:`Name`,value:`Edited value`,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},w={args:{id:`input-disabled-example`,label:`Name`,value:`You cannot edit this`,disabled:!0},parameters:{docs:{description:{story:'Use the `disabled` prop (or `state="disabled"`) to prevent editing.'}}}},T={args:{id:`input-simple-example`,label:`Filters`,placeholder:`Type in some filters`,variant:`simple`},parameters:{docs:{description:{story:`Simple inputs can be used to search inside settings or tables.`},source:{code:`
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  `}}}},E={args:{id:`input-full-width-example`,label:`Address`,placeholder:`Street, number, city`,fullWidth:!0},parameters:{docs:{description:{story:`The input can occupy the full width of the parent container.`}}}},D=[`Default`,`WithIcon`,`WithInteractiveIcon`,`NumberInput`,`Error`,`Dirty`,`Disabled`,`Simple`,`FullWidth`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}O();export{m as Default,C as Dirty,w as Disabled,S as Error,E as FullWidth,x as NumberInput,T as Simple,g as WithIcon,b as WithInteractiveIcon,D as __namedExportsOrder,p as default};