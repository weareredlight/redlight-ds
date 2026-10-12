import{j as S}from"./jsx-runtime-CHn-5JxF.js";import{r as i}from"./iframe-C6Z6JLDr.js";import{P as w}from"./index-vFxgKZau.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./colors-k5Y3hgfw.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,b=e=>{const[C,o]=i.useState(e.currentPage);return i.useEffect(()=>o(e.currentPage),[e.currentPage]),S.jsx(w,{...e,currentPage:C,onPageChange:s=>{o(s),e.onPageChange(s)}})},T=(e="")=>`
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
`,F={title:"Components/Navigation/Pagination",component:w,render:b,parameters:{docs:{description:{component:"Allows navigation through a large set of content or data that has been divided into multiple pages. It typically includes a series of numbered buttons that correspond to each page."}}},args:{currentPage:1,totalPages:10,variant:"default",onPageChange:_()},argTypes:{variant:{control:"radio",options:["default","minimal"]},currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}}}},r={parameters:{docs:{description:{story:"This is the default pagination component."},source:{code:T()}}}},a={args:{variant:"minimal"},parameters:{docs:{description:{story:"This variation works for secondary pagination."},source:{code:T(`
      variant='minimal'`)}}}},t={args:{totalPages:3},parameters:{docs:{description:{story:"With 4 pages or fewer, every page is shown."}}}},n={args:{totalPages:50,currentPage:20},parameters:{docs:{description:{story:"With more pages, it shows the pages around the current one, followed by the last page."}}}},R=["Default","Minimal","FewPages","ManyPages"];var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,P,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};export{r as Default,t as FewPages,n as ManyPages,a as Minimal,R as __namedExportsOrder,F as default};
