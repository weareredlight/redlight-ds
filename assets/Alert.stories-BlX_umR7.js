import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,r,t as i}from"./Alert-CTbxMJqu.js";import{n as a,t as o}from"./Button-Bn0mj5uc.js";import{r as s,t as c}from"./decorators-CAnZVfEJ.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),a(),s(),l=t(),u={success:`success`,error:`danger`,info:`primary`},d=({id:e,type:t,title:n,description:a,options:s})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{variant:u[t],onClick:()=>i[t](n,a,{...s,containerId:e}),children:`Click me`}),(0,l.jsx)(r,{containerId:e})]}),f=(e,t=``)=>`
const MyComponent = () => {
  // Create a function to display the alert
  const showAlert = () => {
    // Use the function alert() then provide the type of the alert
    alert.${e.type}(
      '${e.title}',
      '${e.description}',${t?`\n      ${t}`:``}
    )
  }
  return (
    {/* The function can be triggered by a button or any other custom condition */}
    <Button onClick={showAlert}>Click me</Button>
  )
}

__________________________________________________________________________________

import { ToastContainer } from '@weareredlight/design-system'

const App = () => {
  return (
    ...
    {/* This should be placed on the project root */}
    <ToastContainer />
    ...
  )
}
`,p={title:`Components/Overlays/Alert`,component:d,decorators:[c],parameters:{docs:{description:{component:`Feedback mechanism used to communicate important information to the user. It appears as a small, non-intrusive notification or "toaster" that appears on the screen, and provides information about an event or action that has occurred.`}}},args:{id:`info-alert`,type:`info`,title:`Info Alert`,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha.`},argTypes:{id:{table:{disable:!0}},type:{control:`radio`,options:[`success`,`error`,`info`],description:`Select the function for the appropriate alert type`,table:{defaultValue:{summary:`info`}}},title:{control:`text`,description:`The title of the alert`},description:{control:`text`,description:`The description of the alert`},options:{control:`object`,description:`Any react-toastify option (fkhadra.github.io/react-toastify), merged over the defaults`}}},m={parameters:{docs:{source:{code:f(p.args)}}}},h={id:`success-alert`,type:`success`,title:`Saved`,description:`Your changes were saved.`},g={args:h,parameters:{docs:{description:{story:"Use `alert.success` to confirm that an action completed."},source:{code:f(h)}}}},_={id:`error-alert`,type:`error`,title:`Something went wrong`,description:`We could not save your changes. Please try again.`},v={args:_,parameters:{docs:{description:{story:"Use `alert.error` when an action failed."},source:{code:f(_)}}}},y={id:`custom-options-alert`,type:`info`,title:`Custom options`,description:`This alert shows at the bottom and stays for 8 seconds.`,options:{position:`bottom-right`,autoClose:8e3}},b={args:y,parameters:{docs:{description:{story:"The third argument takes any react-toastify option, such as `position` or `autoClose`."},source:{code:f(y,`{ position: 'bottom-right', autoClose: 8000 }`)}}}},x=[`Default`,`Success`,`Error`,`CustomOptions`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: alertSource(meta.args)
      }
    }
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: successArgs,
  parameters: {
    docs: {
      description: {
        story: 'Use \`alert.success\` to confirm that an action completed.'
      },
      source: {
        code: alertSource(successArgs)
      }
    }
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: errorArgs,
  parameters: {
    docs: {
      description: {
        story: 'Use \`alert.error\` when an action failed.'
      },
      source: {
        code: alertSource(errorArgs)
      }
    }
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: customOptionsArgs,
  parameters: {
    docs: {
      description: {
        story: 'The third argument takes any react-toastify option, such as \`position\` or \`autoClose\`.'
      },
      source: {
        code: alertSource(customOptionsArgs, "{ position: 'bottom-right', autoClose: 8000 }")
      }
    }
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as CustomOptions,m as Default,v as Error,g as Success,x as __namedExportsOrder,p as default};