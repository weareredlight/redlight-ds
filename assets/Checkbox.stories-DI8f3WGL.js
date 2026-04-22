import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{f as g}from"./react-icons.esm-BvxPXE_h.js";import{S as P,L as f}from"./index-CiCkSv5t.js";import{T as I}from"./index-DxHfsaSz.js";import{s as n}from"./stitches-rxIYWSTB.js";import"./index-DQDNmYQF.js";const S=n("div",{width:"fit-content",display:"flex",gap:"$xxsm","*":{cursor:"pointer"},[`& ${P}`]:{padding:0,marginTop:1.5},variants:{disabled:{true:{pointerEvents:"none","*":{cursor:"default"}}}}}),y=n("input",{display:"none","&:hover":{"+ label":{backgroundColor:"$neutral100",borderColor:"$neutral600"},"+ label svg":{color:"$neutral100"}},"&:focus":{"+ label":{backgroundColor:"$neutral200",borderColor:"$neutral700"}},"&:checked":{"+ label":{backgroundColor:"$primary",borderColor:"$primary","&:hover":{backgroundColor:"$primary600"},"&:focus":{backgroundColor:"$primary700"}}},variants:{state:{error:{"+ label":{borderColor:"$danger"}},dirty:{"+ label":{borderColor:"$accent"}},null:{}},disabled:{true:{"+ label":{backgroundColor:"$neutral300",borderColor:"$neutral300"},"+ label svg":{color:"transparent"},"&:checked":{"+ label":{backgroundColor:"$neutral300",borderColor:"$neutral300"},"+ label svg":{color:"$white"}}}}}}),x=n("label",{width:"16px",height:"16px",borderRadius:"$xxsm",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",border:"1px solid $neutral500",backgroundColor:"transparent",color:"$white"}),s=({id:r,value:i,label:d,description:c,checked:u,disabled:l=!1,state:p="null",errorMsg:m,labelPosition:V="right",onChange:b,...h})=>e.jsxs(e.Fragment,{children:[e.jsx(S,{disabled:l,children:V==="left"?e.jsxs(e.Fragment,{children:[e.jsx(f,{id:r,label:d,description:c}),e.jsx(y,{type:"checkbox",id:r,value:i,checked:u,disabled:l,onChange:b,...h}),e.jsx(x,{htmlFor:r,children:e.jsx(g,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{type:"checkbox",id:r,value:i,state:p,checked:u,disabled:l,onChange:b,...h}),e.jsx(x,{htmlFor:r,children:e.jsx(g,{})}),e.jsx(f,{id:r,label:d,description:c})]})}),p==="error"&&m&&e.jsx(I,{color:"danger",variant:"microCopy",children:m})]});try{s.displayName="Checkbox",s.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "true" | ({ "@sm"?: boolean | "true"; "@md"?: boolean | "true"; "@lg"?: boolean | "true" | undefined; "@xlg"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | ({ ...; } & { ...; }) | undefined'}},state:{defaultValue:{value:"null"},description:"",name:"state",required:!1,type:{name:'"null" | "error" | "dirty" | ({ "@sm"?: "null" | "error" | "dirty"; "@md"?: "null" | "error" | "dirty"; "@lg"?: "null" | "error" | "dirty" | undefined; "@xlg"?: "null" | "error" | "dirty" | undefined; "@initial"?: "null" | ... 2 more ... | undefined; } & { ...; }) | undefined'}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"right"},description:"",name:"labelPosition",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const N={title:"Components/Data Input/Checkbox",component:s,parameters:{docs:{description:{component:"A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist."}}},argTypes:{labelPosition:{control:"radio",options:["left","right"]},disabled:{control:"boolean"},checked:{control:"boolean"}}},o={args:{id:"checkbox-default",label:"This is the label",description:"This is the description"}},t={args:{id:"checkbox-left",label:"This is the label",labelPosition:"left"},parameters:{docs:{description:{story:'Using the "labelPosition" prop, you can change the position of the label.'}}}},a={args:{id:"toggle-error-example",label:"This is the label",state:"error",errorMsg:"Don't forget to check this option"},parameters:{docs:{description:{story:"If there is an error, it will turn red and may also show a custom error message"}}}};var k,C,$;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-default',
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...($=(C=o.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var v,j,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-left',
    label: 'This is the label',
    labelPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.'
      }
    }
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,_,q;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'toggle-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to check this option"
  },
  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    }
  }
}`,...(q=(_=a.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const R=["Default","labelPosition","Error"];export{o as Default,a as Error,R as __namedExportsOrder,N as default,t as labelPosition};
