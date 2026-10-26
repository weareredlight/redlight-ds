import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-CqFL7BJl.js";import{n as a,t as o}from"./Button-D0yzj-cT.js";import{n as s,t as c}from"./Dialog-CYK2n6SF.js";import{r as l,t as u}from"./decorators-CAnZVfEJ.js";var d,f;function p(){return(p=e((()=>{r(),d={name:`triangle-alert`,size:24,node:[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`alert-triangle`]},d.node,f=i(d)})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p(),m=t(),a(),s(),l(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={confirm:`primary`,success:`success`,danger:`danger`},v=e=>{let[t,n]=(0,m.useState)(e.open);return(0,m.useEffect)(()=>n(e.open),[e.open]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{onClick:()=>n(!0),variant:_[e.variant??`confirm`],children:`Open Dialog`}),(0,h.jsx)(c,{...e,open:t,closeFn:()=>{n(!1),e.closeFn()}})]})},y=`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,b={title:`Components/Overlays/Dialog`,component:c,render:v,decorators:[u],parameters:{docs:{description:{component:`A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input.`}}},args:{open:!1,title:`Dialog Title`,description:y,variant:`confirm`,closeFn:g(),onConfirm:g()},argTypes:{open:{control:`boolean`},variant:{control:`radio`,options:[`confirm`,`success`,`danger`]},title:{control:`text`},description:{control:`text`},confirmButtonText:{control:`text`},cancelButtonText:{control:`text`},children:{control:!1}}},x={parameters:{docs:{description:{story:`A basic dialog with a title, description, and confirm button. It closes with the cancel button or the Escape key.`},source:{code:`
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
        description='${y}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      `}}}},S={args:{title:`Success Dialog Title`,variant:`success`},parameters:{docs:{description:{story:`Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner.`},source:{code:`
<Dialog
  variant='success'
  open={openDialog}
  title='Success Dialog Title'
  description='${y}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},C={args:{title:`Danger Dialog Title`,variant:`danger`},parameters:{docs:{description:{story:`Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions.`},source:{code:`
<Dialog
  variant='danger'
  open={openDialog}
  title='Danger Dialog Title'
  description='${y}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},w={args:{title:`Custom Dialog Title`,description:``,children:(0,h.jsx)(f,{style:{margin:`0 auto`,color:`var(--colors-neutral)`},width:42,height:42})},parameters:{docs:{description:{story:`Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context.`},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Dialog Title'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `}}}},T={args:{title:`Custom Controls Dialog Title`,cancelButtonText:`I want to go back`,confirmButtonText:`I agree`},parameters:{docs:{description:{story:`You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog.`},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Controls Dialog Title'
  description='${y}'
  confirmButtonText='I agree'
  cancelButtonText='I want to go back'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},E=[`Default`,`Success`,`Danger`,`CustomContent`,`CustomControls`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Dialog Title',
    description: '',
    children: <TriangleAlertIcon style={{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}})))()}D();export{w as CustomContent,T as CustomControls,C as Danger,x as Default,S as Success,E as __namedExportsOrder,b as default};