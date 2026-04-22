import{A as v}from"./index-BP-hjAiu.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./index-CiCkSv5t.js";import"./stitches-rxIYWSTB.js";const x={title:"Components/General/Avatar",component:v,parameters:{docs:{description:{component:"An avatar is a visual representation of a user or entity."}}},argTypes:{size:{control:{type:"radio",options:["normal","small"]}},displayLabel:{control:"boolean"},online:{control:"boolean"}}},e={args:{name:"Diogo Ribeiro",url:"https://picsum.photos/300/300",displayLabel:!0,description:"Desginer",online:!0}},s={args:{size:"small",name:"Diogo Ribeiro",url:"https://picsum.photos/300/300",displayLabel:!1,online:!1},parameters:{docs:{description:{story:"Represents the user/organization in a smaller scale."}}}},r={args:{size:"normal",name:"Diogo Ribeiro",displayLabel:!1,online:!1},parameters:{docs:{description:{story:"If you dont specify any image url it will display name initials."}}}},a={args:{size:"normal",name:"Diogo Ribeiro",url:"https://picsum.photos/300/300",displayLabel:!0,online:!1},parameters:{docs:{description:{story:'First name can be displayed if "displayLabel" is set to true.'}}}},o={args:{size:"normal",name:"Diogo Ribeiro",url:"https://picsum.photos/300/300",description:"Designer",displayLabel:!0,online:!1},parameters:{docs:{description:{story:"You can also add a description to it."}}}},n={args:{size:"normal",name:"Diogo Ribeiro",url:"https://picsum.photos/300/300",online:!0},parameters:{docs:{description:{story:"The user status can be online."}}}};var i,t,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    description: 'Desginer',
    online: true
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'small',
    name: 'Diogo Ribeiro',
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
    displayLabel: false,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: 'If you dont specify any image url it will display name initials.'
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    displayLabel: true,
    online: false
  },
  parameters: {
    docs: {
      description: {
        story: 'First name can be displayed if "displayLabel" is set to true.'
      }
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,D,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
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
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,z,S;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    name: 'Diogo Ribeiro',
    url: 'https://picsum.photos/300/300',
    online: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The user status can be online.'
      }
    }
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const F=["Default","Small","Initials","Label","Description","Status"];export{e as Default,o as Description,r as Initials,a as Label,s as Small,n as Status,F as __namedExportsOrder,x as default};
