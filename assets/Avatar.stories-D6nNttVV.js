import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Avatar-k37LOZgM.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={title:`Components/General/Avatar`,component:n,parameters:{docs:{description:{component:`An avatar is a visual representation of a user or entity.`}}},args:{name:`Diogo Ribeiro`},argTypes:{size:{control:`radio`,options:[`normal`,`small`]},displayLabel:{control:`boolean`},online:{control:`boolean`},width:{control:`text`}}},i={args:{url:`https://picsum.photos/300/300`,displayLabel:!0,description:`Designer`,online:!0}},a={args:{size:`small`,url:`https://picsum.photos/300/300`,displayLabel:!1,online:!1},parameters:{docs:{description:{story:`Represents the user/organization in a smaller scale.`}}}},o={args:{url:`https://picsum.photos/300/300`,width:`96px`},parameters:{docs:{description:{story:`Use the "width" property for any other size. The height always matches it.`}}}},s={args:{size:`normal`,displayLabel:!1,online:!1},parameters:{docs:{description:{story:`If you don't specify any image url it will display name initials.`}}}},c={args:{size:`normal`,url:`https://picsum.photos/300/300`,displayLabel:!0,online:!1},parameters:{docs:{description:{story:`The name can be displayed if "displayLabel" is set to true.`}}}},l={args:{size:`normal`,url:`https://picsum.photos/300/300`,description:`Designer`,displayLabel:!0,online:!1},parameters:{docs:{description:{story:`You can also add a description to it.`}}}},u={args:{size:`normal`,url:`https://picsum.photos/300/300`,online:!0},parameters:{docs:{description:{story:`The user status can be online, with or without an image.`}}}},d=[`Default`,`Small`,`CustomWidth`,`Initials`,`Label`,`Description`,`Status`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    description: 'Designer',
    online: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    url: 'https://picsum.photos/300/300',
    displayLabel: false,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Represents the user/organization in a smaller scale.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://picsum.photos/300/300',
    width: '96px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the "width" property for any other size. The height always matches it.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    displayLabel: false,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: "If you don't specify any image url it will display name initials."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The name can be displayed if "displayLabel" is set to true.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    description: 'Designer',
    displayLabel: true,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: 'You can also add a description to it.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    url: 'https://picsum.photos/300/300',
    online: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The user status can be online, with or without an image.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{o as CustomWidth,i as Default,l as Description,s as Initials,c as Label,a as Small,u as Status,d as __namedExportsOrder,r as default};