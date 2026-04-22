import{j as s}from"./jsx-runtime-6qgwzs7k.js";import{e as _}from"./react-icons.esm-BvxPXE_h.js";import{S as l,B as S}from"./index-5ozlnPp-.js";import{s as k}from"./stitches-rxIYWSTB.js";import"./index-DQDNmYQF.js";const w=k("span",{include:"microCopy",display:"flex",alignItems:"center",width:"fit-content",padding:"$xxxsm $xxsm",gap:"$xxsm",borderRadius:"$xsm","&.closable":{"&:hover":{background:"$neutral400"},[`& ${l}`]:{padding:0,width:"14px",height:"14px",cursor:"pointer","&:hover":{background:"transparent"},"&:focus":{boxShadow:"none"}}},variants:{variant:{default:{background:"$neutral300",color:"$neutral800"},error:{background:"$danger100",color:"$danger500"}},disabled:{true:{pointerEvents:"none",background:"$neutral200",color:"$neutral400",[`& ${l}`]:{color:"$neutral400"}}}},defaultVariants:{variant:"default"}}),E=()=>s.jsx(_,{}),i=({children:d,variant:n,onClose:t,disabled:C=!1,...T})=>s.jsxs(w,{variant:n,disabled:C,className:t&&n!=="error"?"closable":"",...T,children:[d,t&&n!=="error"&&s.jsx(S,{onClick:t,iconComponent:E,iconPosition:"iconOnly",variant:"textOnly"})]});try{i.displayName="Tag",i.__docgenInfo={description:"",displayName:"Tag",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "error" | ({ "@sm"?: "default" | "error"; "@md"?: "default" | "error"; "@lg"?: "default" | "error" | undefined; "@xlg"?: "default" | "error" | undefined; "@initial"?: "default" | ... 1 more ... | undefined; } & { ...; }) | undefined'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "true" | ({ "@sm"?: boolean | "true"; "@md"?: boolean | "true"; "@lg"?: boolean | "true" | undefined; "@xlg"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const D={title:"Components/Displays/Tag",component:i,parameters:{docs:{description:{component:"Tags are similar to the pills, but they are typically used to represent more complex, multi-word labels or categories. Each tag is typically displayed as a small, rectangular element with a text label. Like the pills, tags can be removed."}}},args:{children:"Tag Example"},argTypes:{variant:{control:"radio",options:["default","error"]},disabled:{control:"boolean"}}},e={args:{onClose:void 0},parameters:{docs:{description:{story:"This is the default tag."}}}},r={args:{onClose:()=>alert("Are you sure you want to remove this tag?")},parameters:{docs:{description:{story:"When you have a group of tags you can delete them by pressing the cross button."}}}},a={args:{variant:"error"},parameters:{docs:{description:{story:"Tags can also be used to indicate potential errors or dangerous actions."}}}},o={args:{disabled:!0},parameters:{docs:{description:{story:"You can prevent the user from deleting tags."}}}};var c,u,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onClose: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default tag.'
      }
    }
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // eslint-disable-next-line no-alert
    onClose: () => alert('Are you sure you want to remove this tag?')
  },
  parameters: {
    docs: {
      description: {
        story: 'When you have a group of tags you can delete them by pressing the cross button.'
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can also be used to indicate potential errors or dangerous actions.'
      }
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,v,$;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'You can prevent the user from deleting tags.'
      }
    }
  }
}`,...($=(v=o.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const N=["Primary","Closable","Error","Disabled"];export{r as Closable,o as Disabled,a as Error,e as Primary,N as __namedExportsOrder,D as default};
