import{j as o}from"./jsx-runtime-CHn-5JxF.js";import{a as x,Q as k}from"./index-J9Jgjp4c.js";import{B as O}from"./index-Dh6MWD5I.js";import{C as j}from"./decorators-CjqwfZKQ.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./clsx-B-dksMZM.js";import"./index-DYSIL8sV.js";import"./utils-zpUxZkj0.js";import"./index-DtWCBfzg.js";import"./colors-k5Y3hgfw.js";const U={success:"success",error:"danger",info:"primary"},$=({id:t,type:e,title:v,description:T,options:w})=>o.jsxs(o.Fragment,{children:[o.jsx(O,{variant:U[e],onClick:()=>x[e](v,T,{...w,containerId:t}),children:"Click me"}),o.jsx(k,{containerId:t})]}),c=(t,e="")=>`
const MyComponent = () => {
  // Create a function to display the alert
  const showAlert = () => {
    // Use the function alert() then provide the type of the alert
    alert.${t.type}(
      '${t.title}',
      '${t.description}',${e?`
      ${e}`:""}
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
`,B={title:"Components/Overlays/Alert",component:$,decorators:[j],parameters:{docs:{description:{component:'Feedback mechanism used to communicate important information to the user. It appears as a small, non-intrusive notification or "toaster" that appears on the screen, and provides information about an event or action that has occurred.'}}},args:{id:"info-alert",type:"info",title:"Info Alert",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere urna ha."},argTypes:{id:{table:{disable:!0}},type:{control:"radio",options:["success","error","info"],description:"Select the function for the appropriate alert type",table:{defaultValue:{summary:"info"}}},title:{control:"text",description:"The title of the alert"},description:{control:"text",description:"The description of the alert"},options:{control:"object",description:"Any react-toastify option (fkhadra.github.io/react-toastify), merged over the defaults"}}},r={parameters:{docs:{source:{code:c(B.args)}}}},i={id:"success-alert",type:"success",title:"Saved",description:"Your changes were saved."},s={args:i,parameters:{docs:{description:{story:"Use `alert.success` to confirm that an action completed."},source:{code:c(i)}}}},p={id:"error-alert",type:"error",title:"Something went wrong",description:"We could not save your changes. Please try again."},n={args:p,parameters:{docs:{description:{story:"Use `alert.error` when an action failed."},source:{code:c(p)}}}},d={id:"custom-options-alert",type:"info",title:"Custom options",description:"This alert shows at the bottom and stays for 8 seconds.",options:{position:"bottom-right",autoClose:8e3}},a={args:d,parameters:{docs:{description:{story:"The third argument takes any react-toastify option, such as `position` or `autoClose`."},source:{code:c(d,"{ position: 'bottom-right', autoClose: 8000 }")}}}},q=["Default","Success","Error","CustomOptions"];var m,u,_;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: alertSource(meta.args)
      }
    }
  }
}`,...(_=(u=r.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var l,h,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,A,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};export{a as CustomOptions,r as Default,n as Error,s as Success,q as __namedExportsOrder,B as default};
