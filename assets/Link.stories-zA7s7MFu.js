import{L as y}from"./index-CHcmedmy.js";import{D as T}from"./decorators-CjqwfZKQ.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";const I={title:"Components/General/Link",component:y,parameters:{docs:{description:{component:'The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.'}}},args:{href:"https://redlight.dev",children:"Text Link",danger:!1,darkBackground:!1},argTypes:{children:{control:"text"},danger:{control:"boolean"},darkBackground:{control:"boolean"},size:{control:"radio",options:["regular","small"]},openInNewTab:{control:"boolean"}}},e={},r={args:{size:"small"},parameters:{docs:{description:{story:"You can use smaller links for more subtle actions."},source:{code:"<Link href='https://redlight.dev' size='small'>Text Link</Link>"}}}},n={args:{href:"/",danger:!0},parameters:{docs:{description:{story:"Danger links can be used for actions that can result in potentially dangerous actions."},source:{code:"<Link href='/' danger>Text Link</Link>"}}}},a={args:{href:"#same-tab",openInNewTab:!1},parameters:{docs:{description:{story:'Links open in a new tab by default. Set "openInNewTab" to false to open them in the same tab, for example for links inside your own app.'},source:{code:"<Link href='/settings' openInNewTab={false}>Text Link</Link>"}}}},o={args:{darkBackground:!0},parameters:{docs:{description:{story:'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'},source:{code:"<Link href='https://redlight.dev' darkBackground>Text Link</Link>"}}},decorators:[T]},N=["Default","Small","Danger","SameTab","DarkBackground"];var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,k;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,L;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};export{n as Danger,o as DarkBackground,e as Default,a as SameTab,r as Small,N as __namedExportsOrder,I as default};
