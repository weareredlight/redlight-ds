import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{i as r,n as i,r as a,t as o}from"./eye-BVqLaXbu.js";import{n as s,t as c}from"./search-CjZeEZmx.js";import{n as l,t as u}from"./Input-3jTgVJqW.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),i(),s(),d=t(),l(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=e=>{let[t,n]=(0,d.useState)(e.value??``);return(0,d.useEffect)(()=>n(e.value??``),[e.value]),(0,f.jsx)(u,{...e,value:t,onChange:t=>{n(t.target.value==null?``:String(t.target.value)),e.onChange(t)}})},h={title:`Components/Data Input/Input`,component:u,render:m,parameters:{docs:{description:{component:`An input enables users to type in text information. It is displayed as a rectangular box with a label and, in some cases, a description. It also has a placeholder that indicates what type of information should be entered.`}}},args:{id:`input-example`,onChange:p(),onClickIcon:void 0},argTypes:{placeholder:{control:`text`},label:{control:`text`},description:{control:`text`},id:{control:`text`},state:{control:`radio`,options:[`null`,`error`,`dirty`,`disabled`]},variant:{control:`radio`,options:[`null`,`simple`]},type:{control:`select`,options:[`text`,`password`,`email`,`search`,`number`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`},errorMsg:{table:{disable:!0}},containerProps:{table:{disable:!0}},iconComponent:{table:{disable:!0}},iconPosition:{control:`radio`,options:[`left`,`right`],if:{arg:`iconComponent`,exists:!0}},onClickIcon:{table:{disable:!0}}}},g={args:{placeholder:`Write something...`,label:`This is the label`,description:`This is the description`}},_=()=>(0,f.jsx)(c,{}),v={args:{placeholder:`Search...`,iconPosition:`left`,type:`search`,iconComponent:_},parameters:{docs:{description:{story:`You can add an icon. For example a magnify icon for a search bar.`},source:{code:`
  <Input
    id='search-input-example'
    type='search'
    placeholder='Search...'
    iconPosition='left'
    iconComponent={() => <SearchIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  `}}}},y=()=>(0,f.jsx)(a,{}),b=()=>(0,f.jsx)(o,{}),x=e=>{let[t,n]=(0,d.useState)(!1);return(0,f.jsx)(m,{...e,type:t?`text`:`password`,iconComponent:t?b:y,onClickIcon:()=>n(!t),iconLabel:t?`Hide password`:`Show password`})},S={render:x,args:{id:`password-input-example`,placeholder:`Choose your password`,label:`Password`,value:`password123456`},parameters:{docs:{description:{story:`The icons can be interactive. In the case of passwords the icons can be loadable to show or hide the password.`},source:{code:`
const [showPassword, setShowPassword] = useState(false)

return (
  <Input
    id='password-input-example'
    label='Password'
    type={showPassword ? 'text' : 'password'}
    iconComponent={showPassword ? ShowPasswordIcon : HidePasswordIcon}
    onClickIcon={() => setShowPassword(!showPassword)}
    iconLabel={showPassword ? 'Hide password' : 'Show password'}
    value={yourPassword}
    onChange={e => updateFunction(e.target.value)}
  />
)
`}}}},C={args:{id:`input-number-example`,label:`Quantity`,type:`number`,value:`1`},parameters:{docs:{description:{story:'With `type="number"`, `e.target.value` in `onChange` is a number. When the field is cleared it is `null`.'}}}},w={args:{id:`input-error-example`,placeholder:`Insert your e-mail`,label:`E-mail`,type:`email`,value:`user.com`,state:`error`,errorMsg:`wrong e-mail format`},parameters:{docs:{description:{story:`If there is an error when filling in the field, it will turn red and may also show a custom error message`},source:{code:`
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
  `}}}},T={args:{id:`input-dirty-example`,label:`Name`,value:`Edited value`,state:`dirty`},parameters:{docs:{description:{story:`The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.`}}}},E={args:{id:`input-disabled-example`,label:`Name`,value:`You cannot edit this`,disabled:!0},parameters:{docs:{description:{story:'Use the `disabled` prop (or `state="disabled"`) to prevent editing.'}}}},D={args:{id:`input-simple-example`,label:`Filters`,placeholder:`Type in some filters`,variant:`simple`},parameters:{docs:{description:{story:`Simple inputs can be used to search inside settings or tables.`},source:{code:`
  <Input
    id='input-simple-example'
    variant='simple'
    label='Filters'
    placeholder='Type in some filters'
    onChange={e => updateFunction(e.target.value)}
  />
  `}}}},O={args:{id:`input-full-width-example`,label:`Address`,placeholder:`Street, number, city`,fullWidth:!0},parameters:{docs:{description:{story:`The input can occupy the full width of the parent container.`}}}},k=[`Default`,`WithIcon`,`WithInteractiveIcon`,`NumberInput`,`Error`,`Dirty`,`Disabled`,`Simple`,`FullWidth`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write something...',
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    iconPosition: 'left',
    type: 'search',
    iconComponent: SearchFieldIcon
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
    iconComponent={() => <SearchIcon />}
    onChange={e => searchFunction(e.target.value)}
  />
  \`
      }
    }
  }
}`,...v.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    iconComponent={showPassword ? ShowPasswordIcon : HidePasswordIcon}
    onClickIcon={() => setShowPassword(!showPassword)}
    iconLabel={showPassword ? 'Hide password' : 'Show password'}
    value={yourPassword}
    onChange={e => updateFunction(e.target.value)}
  />
)
\`
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}}})))()}A();export{g as Default,T as Dirty,E as Disabled,w as Error,O as FullWidth,C as NumberInput,D as Simple,v as WithIcon,S as WithInteractiveIcon,k as __namedExportsOrder,h as default};