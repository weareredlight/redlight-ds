import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Pagination-SSfiNszi.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>{let[t,n]=(0,a.useState)(e.currentPage);return(0,a.useEffect)(()=>n(e.currentPage),[e.currentPage]),(0,o.jsx)(i,{...e,currentPage:t,onPageChange:t=>{n(t),e.onPageChange(t)}})},l=(e=``)=>`
() => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}${e}
    />
  )
}
`,u={title:`Components/Navigation/Pagination`,component:i,render:c,parameters:{docs:{description:{component:`Allows navigation through a large set of content or data that has been divided into multiple pages. It typically includes a series of numbered buttons that correspond to each page.`}}},args:{currentPage:1,totalPages:10,variant:`default`,onPageChange:s()},argTypes:{variant:{control:`radio`,options:[`default`,`minimal`]},currentPage:{control:{type:`number`,min:1}},totalPages:{control:{type:`number`,min:1}}}},d={parameters:{docs:{description:{story:`This is the default pagination component.`},source:{code:l()}}}},f={args:{variant:`minimal`},parameters:{docs:{description:{story:`This variation works for secondary pagination.`},source:{code:l(`
      variant='minimal'`)}}}},p={args:{totalPages:3},parameters:{docs:{description:{story:`With 4 pages or fewer, every page is shown.`}}}},m={args:{totalPages:50,currentPage:20},parameters:{docs:{description:{story:`With more pages, it shows the pages around the current one, followed by the last page.`}}}},h=[`Default`,`Minimal`,`FewPages`,`ManyPages`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This is the default pagination component.'
      },
      source: {
        code: source()
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'minimal'
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation works for secondary pagination.'
      },
      source: {
        code: source("\\n      variant='minimal'")
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'With 4 pages or fewer, every page is shown.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 50,
    currentPage: 20
  },
  parameters: {
    docs: {
      description: {
        story: 'With more pages, it shows the pages around the current one, followed by the last page.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Default,p as FewPages,m as ManyPages,f as Minimal,h as __namedExportsOrder,u as default};