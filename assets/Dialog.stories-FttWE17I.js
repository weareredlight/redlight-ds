import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{j as r,v as i}from"./react-icons.esm-BhZzypZb.js";import{n as a,t as o}from"./Button-Bn0mj5uc.js";import{n as s,t as c}from"./Dialog-DgYjiW9T.js";import{r as l,t as u}from"./decorators-CAnZVfEJ.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),d=t(),a(),s(),l(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={confirm:`primary`,success:`success`,danger:`danger`},h=e=>{let[t,n]=(0,d.useState)(e.open);return(0,d.useEffect)(()=>n(e.open),[e.open]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{onClick:()=>n(!0),variant:m[e.variant??`confirm`],children:`Open Dialog`}),(0,f.jsx)(c,{...e,open:t,closeFn:()=>{n(!1),e.closeFn()}})]})},g=`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,_={title:`Components/Overlays/Dialog`,component:c,render:h,decorators:[u],parameters:{docs:{description:{component:`A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input.`}}},args:{open:!1,title:`Dialog Title`,description:g,variant:`confirm`,closeFn:p(),onConfirm:p()},argTypes:{open:{control:`boolean`},variant:{control:`radio`,options:[`confirm`,`success`,`danger`]},title:{control:`text`},description:{control:`text`},confirmButtonText:{control:`text`},cancelButtonText:{control:`text`},children:{control:!1}}},v={parameters:{docs:{description:{story:`A basic dialog with a title, description, and confirm button. It closes with the cancel button or the Escape key.`},source:{code:`
() => {
  // Create a state to control the dialog
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      {/* Button to open the dialog */}
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>

      {/* Dialog component */}
      <Dialog
        open={openDialog}
        title='Dialog Title'
        description='${g}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      `}}}},y={args:{title:`Success Dialog Title`,variant:`success`},parameters:{docs:{description:{story:`Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.`},source:{code:`
<Dialog
  variant='success'
  open={openDialog}
  title='Success Dialog Title'
  description='${g}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},b={args:{title:`Danger Dialog Title`,variant:`danger`},parameters:{docs:{description:{story:`Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.`},source:{code:`
<Dialog
  variant='danger'
  open={openDialog}
  title='Danger Dialog Title'
  description='${g}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},x={args:{title:`Custom Dialog Title`,description:``,children:(0,f.jsx)(i,{style:{margin:`0 auto`,color:`var(--colors-neutral)`},width:42,height:42})},parameters:{docs:{description:{story:`Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context.`},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Dialog Title'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `}}}},S={args:{title:`Custom Controls Dialog Title`,cancelButtonText:`I want to go back`,confirmButtonText:`I agree`},parameters:{docs:{description:{story:`You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog.`},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Controls Dialog Title'
  description='${g}'
  confirmButtonText='I agree'
  cancelButtonText='I want to go back'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},C=[`Default`,`Success`,`Danger`,`CustomContent`,`CustomControls`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic dialog with a title, description, and confirm button. It closes with the cancel button or the Escape key.'
      },
      source: {
        code: \`
() => {
  // Create a state to control the dialog
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      {/* Button to open the dialog */}
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>

      {/* Dialog component */}
      <Dialog
        open={openDialog}
        title='Dialog Title'
        description='\${description}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      \`
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success Dialog Title',
    variant: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.'
      },
      source: {
        code: \`
<Dialog
  variant='success'
  open={openDialog}
  title='Success Dialog Title'
  description='\${description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      \`
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Danger Dialog Title',
    variant: 'danger'
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.'
      },
      source: {
        code: \`
<Dialog
  variant='danger'
  open={openDialog}
  title='Danger Dialog Title'
  description='\${description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      \`
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Dialog Title',
    description: '',
    children: <ExclamationTriangleIcon style={{
      margin: '0 auto',
      color: 'var(--colors-neutral)'
    }} width={42} height={42} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context.'
      },
      source: {
        code: \`
<Dialog
  open={openDialog}
  title='Custom Dialog Title'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      \`
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Controls Dialog Title',
    cancelButtonText: 'I want to go back',
    confirmButtonText: 'I agree'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog.'
      },
      source: {
        code: \`
<Dialog
  open={openDialog}
  title='Custom Controls Dialog Title'
  description='\${description}'
  confirmButtonText='I agree'
  cancelButtonText='I want to go back'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      \`
      }
    }
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{x as CustomContent,S as CustomControls,b as Danger,v as Default,y as Success,C as __namedExportsOrder,_ as default};