import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Flex-CBWmZSZG.js";import{n as i,t as a}from"./Text-oyVb7erL.js";import{n as o,t as s}from"./Tabs-Bm1tcTbD.js";import{r as c,t as l}from"./decorators-CAnZVfEJ.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),i(),n(),c(),u=t(),d=e=>(0,u.jsx)(r,{direction:`column`,style:{padding:`2rem`},children:(0,u.jsx)(a,{variant:`textBlock`,children:`${e} Content...`})},e),f={title:`Components/Navigation/Tabs`,component:s,parameters:{docs:{description:{component:`The tab component is a navigation element used to display different sections or pages of content within a single interface. It typically consists of a row of tabs that users can click on to switch between different views. Each tab is associated with a specific piece of content, such as a page or section, and clicking on the tab displays the corresponding content. This includes using clear and descriptive labels for each tab, as well as providing visual cues to indicate which tab is currently active.`}},backgrounds:{default:`gray`,values:[{name:`gray`,value:`#F4F4F7`}]}},decorators:[l],args:{tabs:[{label:`Tab 1`},{label:`Tab 2`}],children:[d(`Tab 1`),d(`Tab 2`)]},argTypes:{align:{control:`radio`,options:[`null`,`left`,`right`]},children:{control:!1}}},p={parameters:{docs:{source:{code:`
  <Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    <div>
    ... Tab 1 content goes here
    </div>
    <div>
    ... Tab 2 content goes here
    </div>
  </Tabs>
  `}}}},m=[`Overview`,`Members`,`Billing`,`Settings`],h={args:{tabs:m.map(e=>({label:e})),children:m.map(d)},parameters:{docs:{description:{story:`Each child is the content of the tab with the same position in "tabs".`}}}},g={args:{align:`left`},parameters:{docs:{description:{story:`By default the tabs fill the width of the content. Use "align" to keep them at the left or right instead.`},source:{code:`
  <Tabs align='left' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `}}}},_={args:{align:`right`},parameters:{docs:{source:{code:`
  <Tabs align='right' tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]}>
    ...
  </Tabs>
  `}}}},v=[`Default`,`ManyTabs`,`AlignLeft`,`AlignRight`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as AlignLeft,_ as AlignRight,p as Default,h as ManyTabs,v as __namedExportsOrder,f as default};