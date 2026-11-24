import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,n as a}from"./utils-BhygqQhJ.js";import{n as o,r as s}from"./decorators-CAnZVfEJ.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=`rl-Link-link`,l=`rl-Link-regular`,u=`rl-Link-small`,d=`rl-Link-danger`,f=`rl-Link-darkBackground`,p={link:c,regular:l,small:u,danger:d,darkBackground:f}})))()}var h,g,_;function v(){return(v=t((()=>{h=e(n()),i(),m(),g=r(),_=h.forwardRef(({href:e,children:t,openInNewTab:n=!0,size:r=`regular`,danger:i=!1,darkBackground:o=!1,className:s,style:c,...l},u)=>(0,g.jsx)(`a`,{ref:u,href:e,target:n?`_blank`:void 0,rel:`noreferrer`,className:a(p.link,p[r],i&&p.danger,o&&p.darkBackground,s),style:c,...l,children:t}));try{_.displayName=`Link`,_.__docgenInfo={description:``,displayName:`Link`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Link/index.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`href`,required:!0,tags:{},type:{name:`string`}},openInNewTab:{defaultValue:{value:`true`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`openInNewTab`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"small" | "regular" | undefined`}},danger:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`danger`,required:!1,tags:{},type:{name:`boolean | undefined`}},darkBackground:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`darkBackground`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var y,b,x,S,C,w,T;function E(){return(E=t((()=>{v(),s(),y={title:`Components/General/Link`,component:_,parameters:{docs:{description:{component:`The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.`}}},args:{href:`https://redlight.dev`,children:`Text Link`,danger:!1,darkBackground:!1},argTypes:{children:{control:`text`},danger:{control:`boolean`},darkBackground:{control:`boolean`},size:{control:`radio`,options:[`regular`,`small`]},openInNewTab:{control:`boolean`}}},b={},x={args:{size:`small`},parameters:{docs:{description:{story:`You can use smaller links for more subtle actions.`},source:{code:`<Link href='https://redlight.dev' size='small'>Text Link</Link>`}}}},S={args:{href:`/`,danger:!0},parameters:{docs:{description:{story:`Danger links can be used for actions that can result in potentially dangerous actions.`},source:{code:`<Link href='/' danger>Text Link</Link>`}}}},C={args:{href:`#same-tab`,openInNewTab:!1},parameters:{docs:{description:{story:`Links open in a new tab by default. Set "openInNewTab" to false to open them in the same tab, for example for links inside your own app.`},source:{code:`<Link href='/settings' openInNewTab={false}>Text Link</Link>`}}}},w={args:{darkBackground:!0},parameters:{docs:{description:{story:`If the background of the parent container is dark you can use the "darkBackground" property for better readability.`},source:{code:`<Link href='https://redlight.dev' darkBackground>Text Link</Link>`}}},decorators:[o]},T=[`Default`,`Small`,`Danger`,`SameTab`,`DarkBackground`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as Danger,w as DarkBackground,b as Default,C as SameTab,x as Small,T as __namedExportsOrder,y as default};