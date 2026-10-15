import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n as ee,t as te}from"./createLucideIcon-CqFL7BJl.js";import{c as n,n as r,r as i,t as a}from"./Table-B663oeA8.js";import{n as o,t as s}from"./pencil-D50Vxehr.js";import{n as c,t as l}from"./Button-sMjXHnkI.js";import{n as u,t as d}from"./Flex-CBWmZSZG.js";import{n as ne,t as f}from"./Avatar-DkkXC-X3.js";var p,m;function h(){return(h=e((()=>{ee(),p={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]},p.node,m=te(p)})))()}var g,_;function v(){return(v=e((()=>{r(),g=n(),_=[g.accessor(`id`,{...i(),header:`ID`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`10%`}}),g.accessor(`user`,{...i(),header:`User`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`40%`}}),g.accessor(`role`,{...i(),header:`Role`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`35%`}}),g.display({id:`actions`,header:`Actions`,meta:{width:`15%`}})]})))()}var y,b,x;function S(){return(S=e((()=>{ne(),r(),u(),y=t(),b=n(),x=[b.accessor(`id`,{...i(),header:`ID`,meta:{width:`10%`}}),b.accessor(`user`,{...i(),header:`User`,meta:{width:`45%`},cell:e=>{let t=e.getValue();return(0,y.jsx)(d,{justify:`start`,style:{gap:`var(--space-sm)`},children:(0,y.jsx)(f,{size:`small`,name:String(t),displayLabel:!0})})}}),b.accessor(`role`,{...i(),header:`Role`,meta:{width:`45%`}})]})))()}var C,w;function T(){return(T=e((()=>{r(),C=n(),w=[C.accessor(`id`,{...i(),header:`ID`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`10%`}}),C.accessor(`user`,{...i(),header:`User`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`45%`}}),C.accessor(`role`,{...i(),header:`Role`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`45%`}})]})))()}var E,D;function O(){return(O=e((()=>{r(),E=n(),D=[E.accessor(`id`,{...i(),header:`ID`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`10%`}}),E.accessor(`user`,{...i(),header:`User`,enableSorting:!0,enableColumnFilter:!0,meta:{width:`45%`}}),E.accessor(`role`,{...i(),header:`Role`,enableSorting:!0,enableColumnFilter:!0,meta:{width:`45%`}})]})))()}var k,A,j;function M(){return(M=e((()=>{r(),k=[{id:`user`,desc:!1}],A=n(),j=[A.accessor(`id`,{...i(),header:`ID`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`10%`}}),A.accessor(`user`,{...i(),header:`User`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`45%`}}),A.accessor(`role`,{...i(),header:`Role`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`45%`}})]})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{N=`
// create a separated file to store the table columns - e.g. myTableColumns.tsx
      
// import table options from the Design System        
import { createColumnHelper, defaultColumnOptions } from '@weareredlight/design-system'

// type your table data
type TableDataType = {
  id: number
  user: string
  role: string
}

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableDataType>()
export const myTableColumns = [
  columnHelper.accessor('id', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'ID',
    meta: { width: '10%' },
  }),
  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
  }),
  columnHelper.accessor('role', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'Role',
    meta: { width: '45%' },
  }),
]

{/* ------------------------------------------------------------------------------------- */}

// Component.tsx

// Import the Table component and the columns of your custom table
import { Table } from '@weareredlight/design-system'
import { myTableColumns } from 'myTableColumns.tsx'

const Component = () => (
  ...
  <Table
    data={[
      { id: 0, user: 'Diogo Ribeiro', role: 'Front-end Developer' },
      { id: 1, user: 'Samuel Nunes', role: 'Front-end Lead' },
      { id: 2, user: 'Margarida Souto', role: 'Designer' },
      { id: 3, user: 'Tony Gonçalves', role: 'CTO' },
    ]}
    columns={myTableColumns}
  />
  ...
)  
  `,P=`
// ... 

export const myTableColumns = [
  // ...

  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
    {/* Makes the column header interactive and allows you to sort its content */}
    enableSorting: true,
    {/* Allows you to search for contents within the column */}
    enableColumnFilter: true,
  }),
]
`,F=`
// myTableColumns.tsx

// import table options from the Design System        
import { 
  createColumnHelper, 
  defaultColumnOptions,
  // import the ColumnSort type
  ColumnSort,
} from '@weareredlight/design-system'

// ...

// Create a custom sorting for the table
export const myTableSortees: ColumnSort[] = [
  { id: 'user', desc: false },
]

// Specify the content and parameters for each column
const columnHelper = createColumnHelper<TableDataType>()
export const myTableColumns = [
  ...
]

{/* ------------------------------------------------------------------------------------- */}

// Component.tsx

// Import the Table component and the columns of your custom table
import { Table } from '@weareredlight/design-system'

// import the custom columns and sortees
import { myTableColumns, myTableSortees } from 'myTableColumns.tsx'

const Component = () => (
  ...
  <Table
    data={myData}
    columns={myTableColumns}
    sortees={myTableSortees}
  />
  ...
)  
`,I=`
// ... 

export const myTableColumns = [
  // ...

  columnHelper.accessor('user', {
    ...defaultColumnOptions<TableDataType>(),
    header: 'User',
    meta: { width: '45%' },
    {/* You can return customised content for a specific cell  */}
    cell: data => {
      const { id, name } = data.row.original
      return (
        <UserCard id={id} userName={name}/>
      )
    },
  }),
]
`,L=`
// myTableColumns.tsx
export const myTableColumns = [
  // ...

  {/* Add a column with the id 'actions' */}
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    meta: { width: '15%' },
  }),
]

{/* ------------------------------------------------------------------------------------- */}

// Component.tsx
<Table
  data={myData}
  columns={myTableColumns}
  {/* Receives the row data and renders the content of the 'actions' cell */}
  renderOptions={row => (
    <Button variant='textOnly' onClick={() => editUser(row.id)}>Edit</Button>
  )}
/>
`,R=`
<Table
  data={[]}
  columns={myTableColumns}
/>
`})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{o(),h(),c(),r(),u(),v(),S(),T(),O(),M(),z(),B=t(),{fn:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/Displays/Table`,component:a,parameters:{docs:{description:{component:"The Table displays data in rows and columns. It is built on TanStack Table: you describe the columns with `createColumnHelper`, and each column can be sorted, filtered or render custom content."}}},args:{data:[{id:0,user:`Diogo Ribeiro`,role:`Front-end Developer`},{id:1,user:`Samuel Nunes`,role:`Front-end Lead`},{id:2,user:`Margarida Souto`,role:`Designer`},{id:3,user:`Tony Gonçalves`,role:`CTO`}],columns:w},argTypes:{columns:{control:!1},renderOptions:{control:!1}}},U={parameters:{docs:{description:{story:`The table component is used to display data in a tabular format.`},source:{code:N}}}},W={args:{columns:D},parameters:{docs:{description:{story:"Through the options `enableSorting` and `enableColumnFilter` you can enable or disable the sorting and filtering functionalities of the table."},source:{code:P}}}},G={args:{columns:j,sortees:k},parameters:{docs:{description:{story:"By creating a custom sortees array using the `ColumnSort[]` type you can define the default sorting of the table."},source:{code:F}}}},K={args:{columns:x},parameters:{docs:{description:{story:"You can customize the content of the cells by rendering custom components inside the `cell` property of the column definition."},source:{code:I}}}},q=V(),J=V(),Y={args:{columns:_,renderOptions:e=>(0,B.jsxs)(d,{gap:`xxsm`,children:[(0,B.jsx)(l,{variant:`textOnly`,iconComponent:()=>(0,B.jsx)(s,{}),iconPosition:`iconOnly`,onClick:()=>q(e)}),(0,B.jsx)(l,{variant:`textOnly`,iconComponent:()=>(0,B.jsx)(m,{}),iconPosition:`iconOnly`,onClick:()=>J(e)})]})},parameters:{docs:{description:{story:"Add a column with the id `actions` and use `renderOptions` to fill it. It receives the data of each row, so you can add buttons such as edit or delete."},source:{code:L}}}},X={args:{data:[]},parameters:{docs:{description:{story:`When there is no data, or the filters match no rows, the table shows an empty message.`},source:{code:R}}}},Z={args:{scrollable:!0,style:{minWidth:`700px`}},decorators:[e=>(0,B.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,B.jsx)(e,{})})],parameters:{docs:{description:{story:"Set `scrollable` to let the table scroll horizontally when it is wider than its container. A shadow appears on each edge that has hidden content."},source:{code:`<Table data={data} columns={columns} scrollable />`}}}},Q=[`Default`,`InteractiveHeaders`,`DefaultSort`,`CustomCellContent`,`WithActions`,`Empty`,`Scrollable`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The table component is used to display data in a tabular format.'
      },
      source: {
        code: defaultTableSource
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    columns: interactiveTableColumns
  },
  parameters: {
    docs: {
      description: {
        story: 'Through the options \`enableSorting\` and \`enableColumnFilter\` you can enable or disable the sorting and filtering functionalities of the table.'
      },
      source: {
        code: interactiveTableSource
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sortedTableColumns,
    sortees: mockSortees
  },
  parameters: {
    docs: {
      description: {
        story: 'By creating a custom sortees array using the \`ColumnSort[]\` type you can define the default sorting of the table.'
      },
      source: {
        code: sortedTableSource
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    columns: customTableColumns
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize the content of the cells by rendering custom components inside the \`cell\` property of the column definition.'
      },
      source: {
        code: customTableSource
      }
    }
  }
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: actionsTableColumns,
    renderOptions: row => <Flex gap='xxsm'>
        <Button variant='textOnly' iconComponent={() => <PencilIcon />} iconPosition='iconOnly' onClick={() => onEdit(row)} />
        <Button variant='textOnly' iconComponent={() => <TrashIcon />} iconPosition='iconOnly' onClick={() => onDelete(row)} />
      </Flex>
  },
  parameters: {
    docs: {
      description: {
        story: 'Add a column with the id \`actions\` and use \`renderOptions\` to fill it. It receives the data of each row, so you can add buttons such as edit or delete.'
      },
      source: {
        code: actionsTableSource
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  parameters: {
    docs: {
      description: {
        story: 'When there is no data, or the filters match no rows, the table shows an empty message.'
      },
      source: {
        code: emptyTableSource
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    scrollable: true,
    style: {
      minWidth: '700px'
    }
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        story: 'Set \`scrollable\` to let the table scroll horizontally when it is wider than its container. A shadow appears on each edge that has hidden content.'
      },
      source: {
        code: '<Table data={data} columns={columns} scrollable />'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as CustomCellContent,U as Default,G as DefaultSort,X as Empty,W as InteractiveHeaders,Z as Scrollable,Y as WithActions,Q as __namedExportsOrder,H as default};