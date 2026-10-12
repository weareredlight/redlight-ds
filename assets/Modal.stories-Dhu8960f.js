import{j as e}from"./jsx-runtime-CHn-5JxF.js";import{r as l}from"./iframe-C6Z6JLDr.js";import{B as O}from"./index-Dh6MWD5I.js";import{I as d}from"./index-C9Uc_w2B.js";import{M as i}from"./index-8hiH9Mje.js";import{T as C}from"./index-BaaCSrg3.js";import{C as T}from"./decorators-CjqwfZKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";import"./index-DYSIL8sV.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";import"./index-Ckn3bmZV.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-0GUFg1F8.js";import"./index-C3iQHgvf.js";import"./index-Do5_-w80.js";import"./index-RLUzMxbK.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,x=o=>{const[s,t]=l.useState(o.open);return l.useEffect(()=>t(o.open),[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(O,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(i,{...o,open:s,closeFn:()=>{t(!1),o.closeFn()}})]})},G={title:"Components/Overlays/Modal",component:i,render:x,decorators:[T],parameters:{docs:{description:{component:"Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link."}}},args:{open:!1,title:"Modal Title",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",closeFn:B()},argTypes:{open:{control:"boolean"},renderTrigger:{control:!1},children:{control:!1}}},n={parameters:{docs:{description:{story:"The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It closes with the close icon, the Escape key or a click outside."},source:{code:`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        closeFn={() => setOpenModal(false)}
      />
    </>
  )
}`}}}},a={args:{title:"Custom Modal Title",description:"",children:e.jsxs("form",{children:[e.jsx(d,{id:"modal-name",type:"text",label:"Name",placeholder:"Enter your name",onChange:()=>{},style:{marginBottom:"var(--space-sm)"}}),e.jsx(d,{id:"modal-email",type:"email",label:"Email",placeholder:"Enter your email",onChange:()=>{},style:{marginBottom:"var(--space-sm)"}}),e.jsx(C,{id:"modal-message",label:"Message",placeholder:"Enter your message",onChange:()=>{},style:{marginBottom:"var(--space-sm)"}})]})},parameters:{docs:{description:{story:"You can add custom content inside the modal by placing it inside the Modal component."},source:{code:`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

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
}`}}}},k=o=>{const[s,t]=l.useState(!1);return e.jsx(i,{...o,open:s,renderTrigger:()=>e.jsx(O,{onClick:()=>t(!0),children:"Open Modal"}),closeFn:()=>{t(!1),o.closeFn()}})},r={render:k,parameters:{docs:{description:{story:"Pass the trigger through `renderTrigger` instead of rendering it next to the modal. It is wired to the modal for screen readers, but you still open the modal from its `onClick`."},source:{code:`
() => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      open={openModal}
      title='Modal Title'
      renderTrigger={() => <Button onClick={() => setOpenModal(true)}>Open Modal</Button>}
      closeFn={() => setOpenModal(false)}
    />
  )
}`}}}},H=["Default","CustomContent","WithTrigger"];var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It closes with the close icon, the Escape key or a click outside.'
      },
      source: {
        code: \`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

      {/* Modal component */}
      <Modal
        open={openModal}
        title='Modal Title'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        closeFn={() => setOpenModal(false)}
      />
    </>
  )
}\`
      }
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,M,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Custom Modal Title',
    description: '',
    children: <form>
        <Input id='modal-name' type='text' label='Name' placeholder='Enter your name' onChange={() => {}} style={{
        marginBottom: 'var(--space-sm)'
      }} />
        <Input id='modal-email' type='email' label='Email' placeholder='Enter your email' onChange={() => {}} style={{
        marginBottom: 'var(--space-sm)'
      }} />
        <TextArea id='modal-message' label='Message' placeholder='Enter your message' onChange={() => {}} style={{
        marginBottom: 'var(--space-sm)'
      }} />
      </form>
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom content inside the modal by placing it inside the Modal component.'
      },
      source: {
        code: \`
() => {
  // Create a state to control the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

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
}\`
      }
    }
  }
}`,...(h=(M=a.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: TriggerTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Pass the trigger through \`renderTrigger\` instead of rendering it next to the modal. It is wired to the modal for screen readers, but you still open the modal from its \`onClick\`.'
      },
      source: {
        code: \`
() => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      open={openModal}
      title='Modal Title'
      renderTrigger={() => <Button onClick={() => setOpenModal(true)}>Open Modal</Button>}
      closeFn={() => setOpenModal(false)}
    />
  )
}\`
      }
    }
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};export{a as CustomContent,n as Default,r as WithTrigger,H as __namedExportsOrder,G as default};
