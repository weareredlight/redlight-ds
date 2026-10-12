import{j as o}from"./jsx-runtime-CHn-5JxF.js";import{E as S}from"./react-icons.esm-EwFTjkwr.js";import{r as l}from"./iframe-C6Z6JLDr.js";import{B as F}from"./index-Dh6MWD5I.js";import{D as b}from"./index-nbz_7-aQ.js";import{C as w}from"./decorators-CjqwfZKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-Ckn3bmZV.js";import"./index-0GUFg1F8.js";import"./index-C3iQHgvf.js";import"./index-Do5_-w80.js";import"./index-RLUzMxbK.js";import"./index-DYSIL8sV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,E={confirm:"primary",success:"success",danger:"danger"},A=e=>{const[k,c]=l.useState(e.open);return l.useEffect(()=>c(e.open),[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(F,{onClick:()=>c(!0),variant:E[e.variant??"confirm"],children:"Open Dialog"}),o.jsx(b,{...e,open:k,closeFn:()=>{c(!1),e.closeFn()}})]})},t="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",W={title:"Components/Overlays/Dialog",component:b,render:A,decorators:[w],parameters:{docs:{description:{component:"A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input."}}},args:{open:!1,title:"Dialog Title",description:t,variant:"confirm",closeFn:p(),onConfirm:p()},argTypes:{open:{control:"boolean"},variant:{control:"radio",options:["confirm","success","danger"]},title:{control:"text"},description:{control:"text"},confirmButtonText:{control:"text"},cancelButtonText:{control:"text"},children:{control:!1}}},n={parameters:{docs:{description:{story:"A basic dialog with a title, description, and confirm button. It closes with the cancel button or the Escape key."},source:{code:`
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
        description='${t}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      `}}}},a={args:{title:"Success Dialog Title",variant:"success"},parameters:{docs:{description:{story:"Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner."},source:{code:`
<Dialog
  variant='success'
  open={openDialog}
  title='Success Dialog Title'
  description='${t}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},i={args:{title:"Danger Dialog Title",variant:"danger"},parameters:{docs:{description:{story:"Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions."},source:{code:`
<Dialog
  variant='danger'
  open={openDialog}
  title='Danger Dialog Title'
  description='${t}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},s={args:{title:"Custom Dialog Title",description:"",children:o.jsx(S,{style:{margin:"0 auto",color:"var(--colors-neutral)"},width:42,height:42})},parameters:{docs:{description:{story:"Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context."},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Dialog Title'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `}}}},r={args:{title:"Custom Controls Dialog Title",cancelButtonText:"I want to go back",confirmButtonText:"I agree"},parameters:{docs:{description:{story:"You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog."},source:{code:`
<Dialog
  open={openDialog}
  title='Custom Controls Dialog Title'
  description='${t}'
  confirmButtonText='I agree'
  cancelButtonText='I want to go back'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}}},X=["Default","Success","Danger","CustomContent","CustomControls"];var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,D,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(D=a.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,C,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var T,x,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var O,I,B;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(I=r.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};export{s as CustomContent,r as CustomControls,i as Danger,n as Default,a as Success,X as __namedExportsOrder,W as default};
