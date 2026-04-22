import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{j as te}from"./react-icons.esm-BvxPXE_h.js";import{r as s}from"./index-DQDNmYQF.js";import{B}from"./index-5ozlnPp-.js";import{a as q,c as ne,h as oe,b as ae}from"./index-XWjew5gE.js";import{R as re,P as ie,b as M,c as V,O as se,W as le,C as ce,T as pe,D as ue,a as de}from"./index-k3uTdUvu.js";import{F as ge}from"./Flex-CcM5UGxd.js";import{s as C,e as W}from"./stitches-rxIYWSTB.js";import{C as me}from"./decorators-BRFFEw5u.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-B-uhs_4u.js";import"./index-DYRWhI-I.js";import"./index-DR7KDqQ8.js";import"./index-CRt0jReW.js";var z="AlertDialog",[fe]=ae(z,[V]),g=V(),L=n=>{const{__scopeAlertDialog:o,...t}=n,a=g(o);return e.jsx(re,{...a,...t,modal:!0})};L.displayName=z;var De="AlertDialogTrigger",ve=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,r=g(t);return e.jsx(de,{...r,...a,ref:o})});ve.displayName=De;var xe="AlertDialogPortal",G=n=>{const{__scopeAlertDialog:o,...t}=n,a=g(o);return e.jsx(ie,{...a,...t})};G.displayName=xe;var he="AlertDialogOverlay",Y=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,r=g(t);return e.jsx(se,{...r,...a,ref:o})});Y.displayName=he;var v="AlertDialogContent",[ye,Te]=fe(v),Ce=oe("AlertDialogContent"),H=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,children:a,...r}=n,c=g(t),p=s.useRef(null),x=q(o,p),D=s.useRef(null);return e.jsx(le,{contentName:v,titleName:J,docsSlug:"alert-dialog",children:e.jsx(ye,{scope:t,cancelRef:D,children:e.jsxs(ce,{role:"alertdialog",...c,...r,ref:x,onOpenAutoFocus:ne(r.onOpenAutoFocus,m=>{var y;m.preventDefault(),(y=D.current)==null||y.focus({preventScroll:!0})}),onPointerDownOutside:m=>m.preventDefault(),onInteractOutside:m=>m.preventDefault(),children:[e.jsx(Ce,{children:a}),e.jsx(Ae,{contentRef:p})]})})})});H.displayName=v;var J="AlertDialogTitle",K=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,r=g(t);return e.jsx(pe,{...r,...a,ref:o})});K.displayName=J;var Q="AlertDialogDescription",U=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,r=g(t);return e.jsx(ue,{...r,...a,ref:o})});U.displayName=Q;var Be="AlertDialogAction",X=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,r=g(t);return e.jsx(M,{...r,...a,ref:o})});X.displayName=Be;var Z="AlertDialogCancel",ee=s.forwardRef((n,o)=>{const{__scopeAlertDialog:t,...a}=n,{cancelRef:r}=Te(Z,t),c=g(t),p=q(o,r);return e.jsx(M,{...c,...a,ref:p})});ee.displayName=Z;var Ae=({contentRef:n})=>{const o=`\`${v}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${v}\` by passing a \`${Q}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${v}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return s.useEffect(()=>{var a;document.getElementById((a=n.current)==null?void 0:a.getAttribute("aria-describedby"))||console.warn(o)},[o,n]),null},Oe=L,Se=G,be=Y,_e=H,je=X,Ne=ee,Ee=K,$e=U;const Re=W({"0%":{opacity:0},"100%":{opacity:1}}),we=W({"0%":{opacity:0,transform:"translate(-50%, -48%) scale(.96)"},"100%":{opacity:1,transform:"translate(-50%, -50%) scale(1)"}}),Fe=C(be,{zIndex:100,backgroundColor:"rgba(0, 0, 0, 0.4)",position:"fixed",inset:0,animation:`${Re} 150ms cubic-bezier(0.16, 1, 0.3, 1)`}),Ie=C(_e,{display:"flex",flexDirection:"column",gap:"$xxxlg",zIndex:101,backgroundColor:"$white",borderRadius:"$sm",boxShadow:"$greyLarge",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90vw",minWidth:"300px",maxWidth:"500px",maxHeight:"85vh",padding:"$xxlg",animation:`${we} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,"&:focus":{outline:"none"}}),Pe=C(Ee,{margin:0,include:"heading3",color:"$neutral800"}),ke=C($e,{include:"paragraph",color:"$neutral600"}),T=({open:n=!1,variant:o="confirm",confirmButtonText:t,cancelButtonText:a,closeFn:r,title:c,description:p,children:x,onConfirm:D})=>{const m=()=>{D(),r()};return e.jsx(Oe,{open:n,children:e.jsxs(Se,{children:[e.jsx(Fe,{}),e.jsxs(Ie,{onOpenAutoFocus:y=>y.preventDefault(),children:[e.jsx(Pe,{children:c}),p&&e.jsx(ke,{children:p}),x,e.jsxs(ge,{justify:"end",gap:"xxsm",children:[e.jsx(Ne,{asChild:!0,children:e.jsx(B,{variant:"neutral",onClick:r,children:a||"Cancel"})}),e.jsx(je,{asChild:!0,children:e.jsx(B,{variant:o==="success"?"success":o==="danger"?"danger":"primary",onClick:m,children:t||"Confirm"})})]})]})]})})};try{T.displayName="Dialog",T.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"confirm"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"confirm"'}]}},confirmButtonText:{defaultValue:null,description:"",name:"confirmButtonText",required:!1,type:{name:"string"}},cancelButtonText:{defaultValue:null,description:"",name:"cancelButtonText",required:!1,type:{name:"string"}},closeFn:{defaultValue:null,description:"",name:"closeFn",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}}}}}catch{}const et={title:"Components/Overlays/Dialog",component:T,decorators:[me],parameters:{docs:{description:{component:"A Dialog is a dedicated area within a user interface that presents important information, alerts, or interactive prompts to the user. It provides a separate and focused space to convey contextually relevant content or gather user input."}}},argTypes:{open:{control:"boolean"},variant:{control:"radio",options:["confirm","success","danger"]},title:{control:"text"},description:{control:"text"},confirmButtonText:{control:"text"},cancelButtonText:{control:"text"}}},h=n=>{const[o,t]=s.useState(!1),{title:a,description:r,variant:c,children:p,confirmButtonText:x,cancelButtonText:D}=n;return e.jsxs(e.Fragment,{children:[e.jsx(B,{onClick:()=>t(!0),variant:c==="success"?"success":c==="danger"?"danger":"primary",children:"Open Dialog"}),e.jsx(T,{open:o,title:a,description:r,variant:c,confirmButtonText:x,cancelButtonText:D,onConfirm:()=>t(!1),closeFn:()=>t(!1),children:p})]})},i=h.bind({});i.args={open:!1,title:"Dialog Title",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",variant:"confirm"};i.parameters={docs:{description:{story:"A basic dialog with a title, description, and confirm button."},source:{code:`
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
        title='${i.args.title}'
        description='${i.args.description}'
        closeFn={() => setOpenDialog(false)}
        onConfirm={() => {}}
      />
    </>
  )
}
      `}}};const u=h.bind({});u.args={...i.args,title:"Success Dialog Title",variant:"success"};u.parameters={docs:{description:{story:"Displays a positive outcome or confirmation to the user. It is used to communicate successful operations, completion of tasks, or any other positive feedback in a concise and visually appealing manner."},source:{code:`
<Dialog
  variant='${u.args.variant}'
  open={openDialog}
  title='${u.args.title}'
  description='${u.args.description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}};const d=h.bind({});d.args={...i.args,title:"Danger Dialog Title",variant:"danger"};d.parameters={docs:{description:{story:"Alerts the user to a critical or potentially harmful situation. It effectively communicates errors, warnings, or any other conditions that require immediate attention, helping users make informed decisions or take necessary actions."},source:{code:`
<Dialog
  variant='${d.args.variant}'
  open={openDialog}
  title='${d.args.title}'
  description='${d.args.description}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}};const f=h.bind({});f.args={...i.args,title:"Custom Dialog Title",description:"",children:e.jsx(te,{style:{margin:"0 auto",color:"#72778E"},width:42,height:42})};f.parameters={docs:{description:{story:"Inside the dialog, you can add any custom content, such as icons, images, or other components, to enhance the user experience and provide additional context."},source:{code:`
<Dialog
  open={openDialog}
  title='${f.args.title}'
  description=''
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
>
  {/* Add custom content inside the dialog */}
  <Icon />
</Dialog>
      `}}};const l=h.bind({});l.args={...i.args,title:"Custom Controls Dialog Title",cancelButtonText:"I want to go back",confirmButtonText:"I agree"};l.parameters={docs:{description:{story:"You can customize the dialog controls, such as the confirm and cancel buttons, to better suit the context and purpose of the dialog."},source:{code:`
<Dialog
  open={openDialog}
  title='${l.args.title}'
  description='${l.args.description}'
  confirmButtonText='${l.args.confirmButtonText}'
  cancelButtonText='${l.args.cancelButtonText}'
  closeFn={() => setOpenDialog(false)}
  onConfirm={() => {}}
/>
      `}}};var A,O,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`(args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText
  } = args;
  return <>
      <Button onClick={() => setOpenDialog(true)} variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} title={title} description={description} variant={variant} confirmButtonText={confirmButtonText} cancelButtonText={cancelButtonText} onConfirm={() => setOpenDialog(false)} closeFn={() => setOpenDialog(false)}>
        {children}
      </Dialog>
    </>;
}`,...(S=(O=i.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var b,_,j;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`(args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText
  } = args;
  return <>
      <Button onClick={() => setOpenDialog(true)} variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} title={title} description={description} variant={variant} confirmButtonText={confirmButtonText} cancelButtonText={cancelButtonText} onConfirm={() => setOpenDialog(false)} closeFn={() => setOpenDialog(false)}>
        {children}
      </Dialog>
    </>;
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var N,E,$;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText
  } = args;
  return <>
      <Button onClick={() => setOpenDialog(true)} variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} title={title} description={description} variant={variant} confirmButtonText={confirmButtonText} cancelButtonText={cancelButtonText} onConfirm={() => setOpenDialog(false)} closeFn={() => setOpenDialog(false)}>
        {children}
      </Dialog>
    </>;
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var R,w,F;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`(args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText
  } = args;
  return <>
      <Button onClick={() => setOpenDialog(true)} variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} title={title} description={description} variant={variant} confirmButtonText={confirmButtonText} cancelButtonText={cancelButtonText} onConfirm={() => setOpenDialog(false)} closeFn={() => setOpenDialog(false)}>
        {children}
      </Dialog>
    </>;
}`,...(F=(w=f.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var I,P,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`(args: Story['args']) => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    title,
    description,
    variant,
    children,
    confirmButtonText,
    cancelButtonText
  } = args;
  return <>
      <Button onClick={() => setOpenDialog(true)} variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} title={title} description={description} variant={variant} confirmButtonText={confirmButtonText} cancelButtonText={cancelButtonText} onConfirm={() => setOpenDialog(false)} closeFn={() => setOpenDialog(false)}>
        {children}
      </Dialog>
    </>;
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const tt=["Default","Success","Danger","CustomContent","CustomControls"];export{f as CustomContent,l as CustomControls,d as Danger,i as Default,u as Success,tt as __namedExportsOrder,et as default};
