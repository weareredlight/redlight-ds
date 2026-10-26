import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Button-D0yzj-cT.js";import{n as a,t as o}from"./Input-3jTgVJqW.js";import{n as s,t as c}from"./Modal-ByVnALQj.js";import{n as l,t as u}from"./TextArea-BpaQuU1H.js";import{r as d,t as f}from"./decorators-CAnZVfEJ.js";var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p=t(),r(),a(),s(),l(),d(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g=e=>{let[t,n]=(0,p.useState)(e.open);return(0,p.useEffect)(()=>n(e.open),[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{onClick:()=>n(!0),children:`Open Modal`}),(0,m.jsx)(c,{...e,open:t,closeFn:()=>{n(!1),e.closeFn()}})]})},_={title:`Components/Overlays/Modal`,component:c,render:g,decorators:[f],parameters:{docs:{description:{component:`Overlay window that appears in front of the main content of a page or application. Commonly used to display additional information or to prompt the user to perform an action or make a decision. It can be triggered by clicking a button or link.`}}},args:{open:!1,title:`Modal Title`,description:`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,closeFn:h()},argTypes:{open:{control:`boolean`},renderTrigger:{control:!1},children:{control:!1}}},v={parameters:{docs:{description:{story:`The Modal component is used to display additional information or to prompt the user to perform an action or make a decision. It closes with the close icon, the Escape key or a click outside.`},source:{code:`
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
}`}}}},y={args:{title:`Custom Modal Title`,description:``,children:(0,m.jsxs)(`form`,{children:[(0,m.jsx)(o,{id:`modal-name`,type:`text`,label:`Name`,placeholder:`Enter your name`,onChange:()=>{},style:{marginBottom:`var(--space-sm)`}}),(0,m.jsx)(o,{id:`modal-email`,type:`email`,label:`Email`,placeholder:`Enter your email`,onChange:()=>{},style:{marginBottom:`var(--space-sm)`}}),(0,m.jsx)(u,{id:`modal-message`,label:`Message`,placeholder:`Enter your message`,onChange:()=>{},style:{marginBottom:`var(--space-sm)`}})]})},parameters:{docs:{description:{story:`You can add custom content inside the modal by placing it inside the Modal component.`},source:{code:`
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
}`}}}},b=e=>{let[t,n]=(0,p.useState)(!1);return(0,m.jsx)(c,{...e,open:t,renderTrigger:()=>(0,m.jsx)(i,{onClick:()=>n(!0),children:`Open Modal`}),closeFn:()=>{n(!1),e.closeFn()}})},x={render:b,parameters:{docs:{description:{story:"Pass the trigger through `renderTrigger` instead of rendering it next to the modal. It is wired to the modal for screen readers, but you still open the modal from its `onClick`."},source:{code:`
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
}`}}}},S=[`Default`,`CustomContent`,`WithTrigger`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as CustomContent,v as Default,x as WithTrigger,S as __namedExportsOrder,_ as default};