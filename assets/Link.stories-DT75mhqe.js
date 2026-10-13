import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Link-CqWn2DHT.js";import{n as r,r as i}from"./decorators-CAnZVfEJ.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),a={title:`Components/General/Link`,component:n,parameters:{docs:{description:{component:`The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.`}}},args:{href:`https://redlight.dev`,children:`Text Link`,danger:!1,darkBackground:!1},argTypes:{children:{control:`text`},danger:{control:`boolean`},darkBackground:{control:`boolean`},size:{control:`radio`,options:[`regular`,`small`]},openInNewTab:{control:`boolean`}}},o={},s={args:{size:`small`},parameters:{docs:{description:{story:`You can use smaller links for more subtle actions.`},source:{code:`<Link href='https://redlight.dev' size='small'>Text Link</Link>`}}}},c={args:{href:`/`,danger:!0},parameters:{docs:{description:{story:`Danger links can be used for actions that can result in potentially dangerous actions.`},source:{code:`<Link href='/' danger>Text Link</Link>`}}}},l={args:{href:`#same-tab`,openInNewTab:!1},parameters:{docs:{description:{story:`Links open in a new tab by default. Set "openInNewTab" to false to open them in the same tab, for example for links inside your own app.`},source:{code:`<Link href='/settings' openInNewTab={false}>Text Link</Link>`}}}},u={args:{darkBackground:!0},parameters:{docs:{description:{story:`If the background of the parent container is dark you can use the "darkBackground" property for better readability.`},source:{code:`<Link href='https://redlight.dev' darkBackground>Text Link</Link>`}}},decorators:[r]},d=[`Default`,`Small`,`Danger`,`SameTab`,`DarkBackground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use smaller links for more subtle actions.'
      },
      source: {
        code: "<Link href='https://redlight.dev' size='small'>Text Link</Link>"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/',
    danger: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger links can be used for actions that can result in potentially dangerous actions.'
      },
      source: {
        code: "<Link href='/' danger>Text Link</Link>"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    // A hash, so clicking it here doesn't navigate the Storybook frame away
    href: '#same-tab',
    openInNewTab: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Links open in a new tab by default. Set "openInNewTab" to false to open them in the same tab, for example for links inside your own app.'
      },
      source: {
        code: "<Link href='/settings' openInNewTab={false}>Text Link</Link>"
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    darkBackground: true
  },
  parameters: {
    docs: {
      description: {
        story: 'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'
      },
      source: {
        code: "<Link href='https://redlight.dev' darkBackground>Text Link</Link>"
      }
    }
  },
  decorators: [DarkBackgroundCanvas]
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Danger,u as DarkBackground,o as Default,l as SameTab,s as Small,d as __namedExportsOrder,a as default};