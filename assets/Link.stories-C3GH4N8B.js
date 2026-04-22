import{j as $}from"./jsx-runtime-6qgwzs7k.js";import{s as D}from"./stitches-rxIYWSTB.js";import{D as T}from"./decorators-BRFFEw5u.js";import"./index-DQDNmYQF.js";const _=D("a",{color:"$primary",textDecoration:"underline",cursor:"pointer",padding:"$xxxsm","&:hover":{color:"$primary600",textDecoration:"none"},"&:active":{color:"$primary700",textDecoration:"underline"},"&:focus":{color:"$primary600",textDecoration:"none",borderRadius:"$xsm",outline:"1px solid $primary200"},variants:{size:{regular:{include:"paragraph"},small:{include:"textBlock"}},danger:{true:{color:"$danger","&:hover":{color:"$danger500"},"&:active":{color:"$danger600"},"&:focus":{color:"$danger600",outline:"1px solid $danger100"}}},darkBackground:{true:{color:"$white","&:hover":{color:"$primary200"},"&:active":{color:"$primary200"},"&:focus":{color:"$primary200",outline:"1px solid $primary600"}}}},defaultVariants:{size:"regular",danger:!1,darkBackground:!1}}),n=({href:t,children:y,openInNewTab:b=!0,size:x="regular",danger:L=!1,darkBackground:v=!1,...B})=>$.jsx(_,{href:t,target:b?"_blank":"",rel:"noreferrer",size:x,danger:L,darkBackground:v,...B,children:y});try{n.displayName="Link",n.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},openInNewTab:{defaultValue:{value:"true"},description:"",name:"openInNewTab",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:'"small" | "regular" | ({ "@sm"?: "small" | "regular"; "@md"?: "small" | "regular"; "@lg"?: "small" | "regular" | undefined; "@xlg"?: "small" | "regular" | undefined; "@initial"?: "small" | ... 1 more ... | undefined; } & { ...; }) | undefined'}},danger:{defaultValue:{value:"false"},description:"",name:"danger",required:!1,type:{name:'boolean | "true" | ({ "@sm"?: boolean | "true"; "@md"?: boolean | "true"; "@lg"?: boolean | "true" | undefined; "@xlg"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},darkBackground:{defaultValue:{value:"false"},description:"",name:"darkBackground",required:!1,type:{name:'boolean | "true" | ({ "@sm"?: boolean | "true"; "@md"?: boolean | "true"; "@lg"?: boolean | "true" | undefined; "@xlg"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}}}}}catch{}const I={title:"Components/General/Link",component:n,parameters:{docs:{description:{component:'The "Link" component is a clickable element used to navigate the user to another page or section of the website. Links are styled differently from regular text, and should be easy to identify and consistent in style throughout the website. Links are an important part of website navigation and accessibility.'}}},args:{children:"Text Link",danger:!1,darkBackground:!1},argTypes:{children:{control:"text"},danger:{control:"boolean",defaultValue:!1},darkBackground:{control:"boolean",defaultValue:!0},size:{control:"radio",options:["regular","small"]},openInNewTab:{control:"boolean",defaultValue:!0}}},e={args:{href:"redlight.dev"}},r={args:{href:"redlight.dev",size:"small"},parameters:{docs:{description:{story:"You can use smaller links for more subtle actions."},source:{code:"<Link href='redlight.dev' size='small'>Text Link</Link>"}}}},a={args:{href:"/",danger:!0,darkBackground:!1},parameters:{docs:{description:{story:"Danger links can be used for actions that can result in potentially dangerous actions."},source:{code:"<Link href='/' danger>Text Link</Link>"}}}},o={args:{href:"redlight.dev",darkBackground:!0},parameters:{docs:{description:{story:'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'},source:{code:"<Link href='redlight.dev' darkBackground>Text Link</Link>"}}},decorators:[T]};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    href: 'redlight.dev'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: 'redlight.dev',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use smaller links for more subtle actions.'
      },
      source: {
        code: "<Link href='redlight.dev' size='small'>Text Link</Link>"
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,p,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '/',
    danger: true,
    darkBackground: false
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,k,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: 'redlight.dev',
    darkBackground: true
  },
  parameters: {
    docs: {
      description: {
        story: 'If the background of the parent container is dark you can use the "darkBackground" property for better readability.'
      },
      source: {
        code: "<Link href='redlight.dev' darkBackground>Text Link</Link>"
      }
    }
  },
  decorators: [DarkBackgroundCanvas]
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const q=["Default","Small","Danger","DarkBackground"];export{a as Danger,o as DarkBackground,e as Default,r as Small,q as __namedExportsOrder,I as default};
