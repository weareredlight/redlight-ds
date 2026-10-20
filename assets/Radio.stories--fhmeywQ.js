import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Flex-CCIzD6fY.js";import{n as a,t as o}from"./Radio-D1nZH8Rg.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Data Input/Radio`,component:o,parameters:{docs:{description:{component:`A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group.`}}},args:{id:`radio-default`,onChange:l()},argTypes:{labelPosition:{control:`radio`,options:[`left`,`right`]},disabled:{control:`boolean`},checked:{control:`boolean`}}},d={args:{label:`This is the label`,description:`This is the description`}},f={args:{id:`radio-left`,label:`This is the label`,labelPosition:`left`},parameters:{docs:{description:{story:`Using the "labelPosition" prop, you can change the position of the label.`}}}},p={args:{id:`radio-disabled`,label:`This is the label`,checked:!0,disabled:!0},parameters:{docs:{description:{story:`Disabled radios cannot be selected.`}}}},m=[{value:`free`,label:`Free`,description:`Up to 3 projects`},{value:`pro`,label:`Pro`,description:`Unlimited projects`},{value:`team`,label:`Team`,description:`Unlimited projects and members`}],h=()=>{let[e,t]=(0,s.useState)(`pro`);return(0,c.jsx)(i,{direction:`column`,align:`start`,gap:`sm`,children:m.map(n=>(0,c.jsx)(o,{id:`radio-plan-${n.value}`,name:`plan`,value:n.value,label:n.label,description:n.description,checked:e===n.value,onChange:e=>t(e.target.value)},n.value))})},g={render:h,parameters:{controls:{disable:!0},docs:{description:{story:`Give every radio in a group the same "name", and keep the selected value in state.`},source:{code:`
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
`}}}},_=[`Default`,`LabelPosition`,`Disabled`,`Group`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is the label',
    description: 'This is the description'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as Default,p as Disabled,g as Group,f as LabelPosition,_ as __namedExportsOrder,u as default};