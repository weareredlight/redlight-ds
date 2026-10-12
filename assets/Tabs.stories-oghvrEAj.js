import{j as r}from"./jsx-runtime-CHn-5JxF.js";import{T as y}from"./index-Cp1Bx9Il.js";import{T as w}from"./index-DtWCBfzg.js";import{F as x}from"./index-DYSIL8sV.js";import{C}from"./decorators-CjqwfZKQ.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGSraF8E.js";import"./index-4YCOwCYJ.js";import"./index-Df7W-K4Q.js";import"./index-xpe0NxJi.js";import"./index-0GUFg1F8.js";import"./index-RLUzMxbK.js";import"./utils-zpUxZkj0.js";const o=e=>r.jsx(x,{direction:"column",style:{padding:"2rem"},children:r.jsx(w,{variant:"textBlock",children:`${e} Content...`})},e),I={title:"Components/Navigation/Tabs",component:y,parameters:{docs:{description:{component:"The tab component is a navigation element used to display different sections or pages of content within a single interface. It typically consists of a row of tabs that users can click on to switch between different views. Each tab is associated with a specific piece of content, such as a page or section, and clicking on the tab displays the corresponding content. This includes using clear and descriptive labels for each tab, as well as providing visual cues to indicate which tab is currently active."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#F4F4F7"}]}},decorators:[C],args:{tabs:[{label:"Tab 1"},{label:"Tab 2"}],children:[o("Tab 1"),o("Tab 2")]},argTypes:{align:{control:"radio",options:["null","left","right"]},children:{control:!1}}},a={parameters:{docs:{source:{code:`
  <Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    <div>
    ... Tab 1 content goes here
    </div>
    <div>
    ... Tab 2 content goes here
    </div>
  </Tabs>
  `}}}},i=["Overview","Members","Billing","Settings"],t={args:{tabs:i.map(e=>({label:e})),children:i.map(o)},parameters:{docs:{description:{story:'Each child is the content of the tab with the same position in "tabs".'}}}},n={args:{align:"left"},parameters:{docs:{description:{story:'By default the tabs fill the width of the content. Use "align" to keep them at the left or right instead.'},source:{code:`
  <Tabs align='left' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `}}}},s={args:{align:"right"},parameters:{docs:{source:{code:`
  <Tabs align='right' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `}}}},N=["Default","ManyTabs","AlignLeft","AlignRight"];var c,l,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
  <Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    <div>
    ... Tab 1 content goes here
    </div>
    <div>
    ... Tab 2 content goes here
    </div>
  </Tabs>
  \`
      }
    }
  }
}`,...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs.map(label => ({
      label
    })),
    children: manyTabs.map(tabContent)
  },
  parameters: {
    docs: {
      description: {
        story: 'Each child is the content of the tab with the same position in "tabs".'
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    align: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the tabs fill the width of the content. Use "align" to keep them at the left or right instead.'
      },
      source: {
        code: \`
  <Tabs align='left' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  \`
      }
    }
  }
}`,...(T=(g=n.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,u,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    align: 'right'
  },
  parameters: {
    docs: {
      source: {
        code: \`
  <Tabs align='right' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  \`
      }
    }
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};export{n as AlignLeft,s as AlignRight,a as Default,t as ManyTabs,N as __namedExportsOrder,I as default};
