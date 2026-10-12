import{A as I}from"./index-ggCSQxVR.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-zpUxZkj0.js";import"./index-BF8QffBA.js";const E={title:"Components/General/Avatar",component:I,parameters:{docs:{description:{component:"An avatar is a visual representation of a user or entity."}}},args:{name:"Diogo Ribeiro"},argTypes:{size:{control:"radio",options:["normal","small"]},displayLabel:{control:"boolean"},online:{control:"boolean"},width:{control:"text"}}},s={args:{url:"https://picsum.photos/300/300",displayLabel:!0,description:"Designer",online:!0}},e={args:{size:"small",url:"https://picsum.photos/300/300",displayLabel:!1,online:!1},parameters:{docs:{description:{story:"Represents the user/organization in a smaller scale."}}}},r={args:{url:"https://picsum.photos/300/300",width:"96px"},parameters:{docs:{description:{story:'Use the "width" property for any other size. The height always matches it.'}}}},a={args:{size:"normal",displayLabel:!1,online:!1},parameters:{docs:{description:{story:"If you don't specify any image url it will display name initials."}}}},t={args:{size:"normal",url:"https://picsum.photos/300/300",displayLabel:!0,online:!1},parameters:{docs:{description:{story:'The name can be displayed if "displayLabel" is set to true.'}}}},n={args:{size:"normal",url:"https://picsum.photos/300/300",description:"Designer",displayLabel:!0,online:!1},parameters:{docs:{description:{story:"You can also add a description to it."}}}},o={args:{size:"normal",url:"https://picsum.photos/300/300",online:!0},parameters:{docs:{description:{story:"The user status can be online, with or without an image."}}}},G=["Default","Small","CustomWidth","Initials","Label","Description","Status"];var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    description: 'Designer',
    online: true
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,L,w;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(L=t.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var S,D,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var x,v,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};export{r as CustomWidth,s as Default,n as Description,a as Initials,t as Label,e as Small,o as Status,G as __namedExportsOrder,E as default};
