import{j as t}from"./jsx-runtime-CHn-5JxF.js";import{r as k}from"./iframe-C6Z6JLDr.js";import{R as f}from"./index-B7W1zeP5.js";import{F as S}from"./index-DYSIL8sV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Data Input/Radio",component:f,parameters:{docs:{description:{component:"A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group."}}},args:{id:"radio-default",onChange:x()},argTypes:{labelPosition:{control:"radio",options:["left","right"]},disabled:{control:"boolean"},checked:{control:"boolean"}}},a={args:{label:"This is the label",description:"This is the description"}},o={args:{id:"radio-left",label:"This is the label",labelPosition:"left"},parameters:{docs:{description:{story:'Using the "labelPosition" prop, you can change the position of the label.'}}}},n={args:{id:"radio-disabled",label:"This is the label",checked:!0,disabled:!0},parameters:{docs:{description:{story:"Disabled radios cannot be selected."}}}},D=[{value:"free",label:"Free",description:"Up to 3 projects"},{value:"pro",label:"Pro",description:"Unlimited projects"},{value:"team",label:"Team",description:"Unlimited projects and members"}],R=()=>{const[y,T]=k.useState("pro");return t.jsx(S,{direction:"column",align:"start",gap:"sm",children:D.map(e=>t.jsx(f,{id:`radio-plan-${e.value}`,name:"plan",value:e.value,label:e.label,description:e.description,checked:y===e.value,onChange:P=>T(P.target.value)},e.value))})},r={render:R,parameters:{controls:{disable:!0},docs:{description:{story:'Give every radio in a group the same "name", and keep the selected value in state.'},source:{code:`
const [plan, setPlan] = useState('pro')

return (
  <>
    {plans.map(option => (
      <Radio
        key={option.value}
        id={\`radio-plan-\${option.value}\`}
        name='plan'
        value={option.value}
        label={option.label}
        checked={plan === option.value}
        onChange={e => setPlan(e.target.value)}
      />
    ))}
  </>
)
`}}}},L=["Default","LabelPosition","Disabled","Group"];var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,d,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'radio-left',
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'radio-disabled',
    label: 'This is the label',
    checked: true,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled radios cannot be selected.'
      }
    }
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: GroupTemplate,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Give every radio in a group the same "name", and keep the selected value in state.'
      },
      source: {
        code: \`
const [plan, setPlan] = useState('pro')

return (
  <>
    {plans.map(option => (
      <Radio
        key={option.value}
        id={\\\`radio-plan-\\\${option.value}\\\`}
        name='plan'
        value={option.value}
        label={option.label}
        checked={plan === option.value}
        onChange={e => setPlan(e.target.value)}
      />
    ))}
  </>
)
\`
      }
    }
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};export{a as Default,n as Disabled,r as Group,o as LabelPosition,L as __namedExportsOrder,F as default};
