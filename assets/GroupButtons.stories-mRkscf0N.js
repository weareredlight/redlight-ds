import{j as i}from"./jsx-runtime-6qgwzs7k.js";import{r as d}from"./index-DQDNmYQF.js";import{S as c,B as m}from"./index-B70SOYCP.js";import{s as b}from"./stitches-rxIYWSTB.js";import"./react-icons.esm-BvxPXE_h.js";const y=b("div",{display:"flex",overflow:"hidden",borderRadius:"$xsm",border:"1px solid $primary",[`& ${c}`]:{position:"relative",minWidth:"72px",flex:"1 1 0px",borderRadius:0,border:0,"&:focus":{boxShadow:"none"},"&:before":{content:'""',display:"block",position:"absolute",top:0,left:0,height:"100%",width:"1px",backgroundColor:"$primary"},"&:first-child":{"&:before":{display:"none"}}}}),n=({buttons:o,selectedButton:r,onButtonSelect:s})=>i.jsx(y,{children:o.map((t,a)=>i.jsx(m,{onClick:()=>s(t.value),variant:t.value===r?"primary":"secondary",children:t.label},t.value+Number(a)))});try{n.displayName="GroupButtons",n.__docgenInfo={description:"",displayName:"GroupButtons",props:{buttons:{defaultValue:null,description:"",name:"buttons",required:!0,type:{name:"OptionType[]"}},selectedButton:{defaultValue:null,description:"",name:"selectedButton",required:!0,type:{name:"string"}},onButtonSelect:{defaultValue:null,description:"",name:"onButtonSelect",required:!0,type:{name:"(button: string) => void"}}}}}catch{}const v={title:"Components/General/Group Buttons",component:n,parameters:{docs:{description:{component:"GroupButtons are a set of buttons that are grouped together. They are typically used to represent a set of actions that are related to each other."}}}},f=o=>{const[r,s]=d.useState("option1"),{buttons:t}=o;return i.jsx(n,{buttons:t,selectedButton:r||"",onButtonSelect:a=>s(a)})},e=f.bind({});e.args={buttons:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]};var p,u,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args: Story['args']) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('option1');
  const {
    buttons
  } = args as {
    buttons: {
      label: string;
      value: string;
    }[];
  };
  return <GroupButtons buttons={buttons} selectedButton={selectedOption || ''} onButtonSelect={option => setSelectedOption(option)} />;
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,v as default};
