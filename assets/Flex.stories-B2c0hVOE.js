import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Flex-CCIzD6fY.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),a=n(),o=({children:e})=>(0,a.jsx)(`div`,{style:{padding:`var(--space-sm) var(--space-lg)`,borderRadius:`var(--radii-xsm)`,background:`var(--colors-primary100)`,color:`var(--colors-primary)`},children:e}),s={title:`Components/Layout/Flex`,component:i,parameters:{docs:{description:{component:`Flex is a layout helper: a flexbox container whose direction, alignment and gap use the theme spacing. It centers its content by default.`}}},args:{gap:`sm`,style:{minHeight:`120px`,border:`1px dashed var(--colors-neutral300)`},children:[(0,a.jsx)(o,{children:`One`},`1`),(0,a.jsx)(o,{children:`Two`},`2`),(0,a.jsx)(o,{children:`Three`},`3`)]},argTypes:{direction:{control:`radio`,options:[`row`,`column`]},align:{control:`radio`,options:[`start`,`center`,`end`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`spaceBetween`,`spaceAround`,`spaceEvenly`]},gap:{control:`select`,options:[`xxxsm`,`xxsm`,`xsm`,`sm`,`lg`,`xlg`,`xxlg`,`xxxlg`]},wrap:{control:`boolean`},as:{control:`text`},children:{control:!1}}},c={},l={args:{direction:`column`,align:`start`},parameters:{docs:{description:{story:`Use "direction" to stack the items.`}}}},u={args:{justify:`spaceBetween`},parameters:{docs:{description:{story:`Use "justify" to spread the items along the main axis.`}}}},d={args:{as:`ul`,style:{listStyle:`none`,padding:0},children:[(0,a.jsx)(`li`,{children:(0,a.jsx)(o,{children:`One`})},`1`),(0,a.jsx)(`li`,{children:(0,a.jsx)(o,{children:`Two`})},`2`)]},parameters:{docs:{description:{story:`Use "as" to render another element instead of a div.`}}}},f=[`Default`,`Column`,`SpaceBetween`,`AsList`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    align: 'start'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "direction" to stack the items.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'spaceBetween'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "justify" to spread the items along the main axis.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    style: {
      listStyle: 'none',
      padding: 0
    },
    children: [<li key='1'><Box>One</Box></li>, <li key='2'><Box>Two</Box></li>]
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "as" to render another element instead of a div.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as AsList,l as Column,c as Default,u as SpaceBetween,f as __namedExportsOrder,s as default};