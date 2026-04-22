import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{r as j}from"./index-DQDNmYQF.js";import{B as v}from"./index-B70SOYCP.js";import{I as p}from"./index-JXmARK5B.js";import{O as k,C as S,T as B,D as $,R as T,a as q,P as D,b as E}from"./index-k3uTdUvu.js";import{e as _}from"./react-icons.esm-BvxPXE_h.js";import{s as d,e as M}from"./stitches-rxIYWSTB.js";import{T as I}from"./index-D2I5jBmD.js";import{C as V}from"./decorators-BRFFEw5u.js";import"./Flex-CTno0jis.js";import"./index-CiCkSv5t.js";import"./index-C52YCM-k.js";import"./index-XWjew5gE.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-B-uhs_4u.js";import"./index-DYRWhI-I.js";import"./index-DR7KDqQ8.js";import"./index-CRt0jReW.js";const w=M({"0%":{opacity:0},"100%":{opacity:1}}),F=M({"0%":{opacity:0,transform:"translate(-50%, -48%) scale(.96)"},"100%":{opacity:1,transform:"translate(-50%, -50%) scale(1)"}}),A=d(k,{zIndex:100,backgroundColor:"rgba(0, 0, 0, 0.4)",position:"fixed",inset:0,animation:`${w} 150ms cubic-bezier(0.16, 1, 0.3, 1)`}),R=d(S,{display:"flex",flexDirection:"column",gap:"$xxxlg",zIndex:101,backgroundColor:"$white",borderRadius:"$sm",boxShadow:"$greySmall",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"300px",maxWidth:"600px",maxHeight:"85vh",padding:"$xxlg",animation:`${F} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,"> svg":{cursor:"pointer",position:"absolute",top:"$xxlg",right:"$xlg",width:"24px",height:"24px",color:"$neutral900"},"&:focus":{outline:"none"}}),z=d(B,{margin:0,include:"heading3",color:"$neutral800"}),N=d($,{include:"paragraph",color:"$neutral600"}),l=({open:r=!1,closeFn:n,renderTrigger:a,title:s,description:i,children:c,css:C,extraClasses:b})=>e.jsxs(T,{open:r,children:[e.jsx(q,{asChild:!0,children:a&&a()}),e.jsxs(D,{children:[e.jsx(A,{}),e.jsxs(R,{css:C,onEscapeKeyDown:n,onInteractOutside:n,className:b,onOpenAutoFocus:O=>O.preventDefault(),children:[s&&e.jsx(z,{children:s}),i&&e.jsx(N,{children:i}),c,e.jsx(E,{asChild:!0,children:e.jsx(_,{onClick:n})})]})]})]});try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},closeFn:{defaultValue:null,description:"",name:"closeFn",required:!0,type:{name:"() => void"}},renderTrigger:{defaultValue:null,description:"",name:"renderTrigger",required:!1,type:{name:"(() => ReactElement<any, string | JSXElementConstructor<any>>)"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSS"}},extraClasses:{defaultValue:null,description:"",name:"extraClasses",required:!1,type:{name:"any"}}}}}catch{}const ie={title:"Components/Overlays/Modal",component:l,decorators:[V],parameters:{docs:{description:{component:"Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link."}}},argTypes:{renderTrigger:{table:{disable:!0}}}},y=r=>{const[n,a]=j.useState(!1),{title:s,description:i,children:c}=r;return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{open:n,title:s,description:i,closeFn:()=>{a(!1)},children:c})]})},t=y.bind({});t.args={open:!1,title:"Modal Title",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."};t.parameters={docs:{description:{story:"The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link."},source:{code:`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)} variant='secondary'> Click me</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        closeFn={() => setOpenModal(false)}
      />
    </>
  )
}`}}};const o=y.bind({});o.args={open:!1,title:"Custom Modal Title",description:"",children:e.jsxs("form",{children:[e.jsx(p,{type:"text",label:"Name",placeholder:"Enter your name",onChange:()=>{},css:{marginBottom:"$sm"}}),e.jsx(p,{type:"email",label:"Email",placeholder:"Enter your email",onChange:()=>{},css:{marginBottom:"$sm"}}),e.jsx(I,{label:"Message",placeholder:"Enter your message",onChange:()=>{},css:{marginBottom:"$sm"}})]})};o.parameters={docs:{description:{story:"You can add custom content inside the modal by placing it inside the Modal component."},source:{code:`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)} variant='secondary'> Click me</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        closeFn={() => setOpenModal(false)}
      >
        {/* Add custom content inside the modal */}
        <Form />
      </Modal>
    </>
  )
}`}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args: Story['args']) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    title,
    description,
    children
  } = args;
  return <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal open={openModal} title={title} description={description} closeFn={() => {
      setOpenModal(false);
    }}>
        {children}
      </Modal>
    </>;
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: Story['args']) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    title,
    description,
    children
  } = args;
  return <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal open={openModal} title={title} description={description} closeFn={() => {
      setOpenModal(false);
    }}>
        {children}
      </Modal>
    </>;
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const le=["Default","CustomContent"];export{o as CustomContent,t as Default,le as __namedExportsOrder,ie as default};
