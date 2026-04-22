import{j as a}from"./jsx-runtime-6qgwzs7k.js";import{r as h}from"./index-DQDNmYQF.js";import{a as k,C as A}from"./react-icons.esm-BvxPXE_h.js";import{S as R,B as P}from"./index-B70SOYCP.js";import{s as V}from"./stitches-rxIYWSTB.js";const w=V("div",{display:"flex",alignItems:"center",fontSize:"$sm",[`& ${R}`]:{width:"32px",height:"32px",padding:0,svg:{width:"16px",height:"16px"}},variants:{variant:{default:{gap:"4px"},minimal:{gap:"2px"}}}}),T=()=>a.jsx(k,{}),O=()=>a.jsx(A,{}),c=({currentPage:n=1,totalPages:t,onPageChange:o,variant:s="default"})=>{const[r,b]=h.useState(n),j=()=>{const e=[];let m=Math.max(r-Math.floor(2),1),g=m+4-1;g>t&&(g=t,m=Math.max(g-4+1,1));for(let p=m;p<=g;p++)e.push(p);return g<t&&(e.push("..."),e.push(t)),e},d=e=>{typeof e=="number"&&e!==r&&o&&(b(e),o(e))},_=()=>{const e=j();return a.jsx(a.Fragment,{children:e.map(i=>a.jsx(P,{css:i===r?{backgroundColor:"$primary200",color:"$primary"}:{backgroundColor:"initial"},variant:"textOnly",onClick:()=>d(i),children:i},i))})};return a.jsxs(w,{children:[a.jsx(P,{variant:"textOnly",onClick:()=>d(n-1),iconComponent:T,iconPosition:"iconOnly",disabled:n<=1}),s==="default"&&_(),a.jsx(P,{variant:"textOnly",onClick:()=>d(n+1),iconComponent:O,iconPosition:"iconOnly",disabled:n>=t})]})};try{c.displayName="Pagination",c.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:{value:"1"},description:"",name:"currentPage",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "minimal" | ({ "@sm"?: "default" | "minimal"; "@md"?: "default" | "minimal"; "@lg"?: "default" | "minimal" | undefined; "@xlg"?: "default" | "minimal" | undefined; "@initial"?: "default" | ... 1 more ... | undefined; } & { ...; }) | undefined'}}}}}catch{}const D={title:"Components/Navigation/Pagination",component:c,parameters:{docs:{description:{component:"Allows navigation through a large set of content or data that has been divided into multiple pages. It typically includes a series of numbered buttons that correspond to each page."}}},argTypes:{variant:{control:{type:"radio"},options:["default","minimal"]},currentPage:{control:{type:"number"}},totalPages:{control:{type:"number"}}}},I=()=>{const[n,t]=h.useState(1),o=10,s=r=>{t(r)};return a.jsx(c,{currentPage:n,totalPages:o,onPageChange:s})},l={render:I,args:{variant:"default",currentPage:1},parameters:{docs:{description:{story:"This is the default pagination component."},source:{code:`
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}
`}}}},u={render:()=>{const[n,t]=h.useState(1),o=10,s=r=>{t(r)};return a.jsx(c,{currentPage:n,totalPages:o,onPageChange:s,variant:"minimal"})},parameters:{docs:{description:{story:"This variation works for secondary pagination."},source:{code:`
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      variant='minimal'
    />
  )
}
`}}}};var f,C,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    currentPage: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default pagination component.'
      },
      source: {
        code: \`
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}
\`
      }
    }
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,v,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const handlePageChange = (page: React.SetStateAction<number>) => {
      setCurrentPage(page);
    };
    return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} variant='minimal' />;
  },
  parameters: {
    docs: {
      description: {
        story: 'This variation works for secondary pagination.'
      },
      source: {
        code: \`
() => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      variant='minimal'
    />
  )
}
\`
      }
    }
  }
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const L=["Default","Minimal"];export{l as Default,u as Minimal,L as __namedExportsOrder,D as default};
