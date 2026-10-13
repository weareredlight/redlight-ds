import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{A as n,T as r,j as i}from"./react-icons.esm-BhZzypZb.js";import{n as a,t as o}from"./Flex-CBWmZSZG.js";import{n as s,t as c}from"./Avatar-BvfIQ_sM.js";import{n as l,t as u}from"./Button-Bn0mj5uc.js";import{c as d,n as f,r as p,t as m}from"./Table-BmsLLR5F.js";var h,g;function _(){return(_=e((()=>{f(),h=d(),g=[h.accessor(`id`,{...p(),header:`ID`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`10%`}}),h.accessor(`user`,{...p(),header:`User`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`40%`}}),h.accessor(`role`,{...p(),header:`Role`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`35%`}}),h.display({id:`actions`,header:`Actions`,meta:{width:`15%`}})]})))()}var v,y,b;function x(){return(x=e((()=>{s(),f(),a(),v=t(),y=d(),b=[y.accessor(`id`,{...p(),header:`ID`,meta:{width:`10%`}}),y.accessor(`user`,{...p(),header:`User`,meta:{width:`45%`},cell:e=>{let t=e.getValue();return(0,v.jsx)(o,{justify:`start`,style:{gap:`var(--space-sm)`},children:(0,v.jsx)(c,{size:`small`,name:String(t),displayLabel:!0})})}}),y.accessor(`role`,{...p(),header:`Role`,meta:{width:`45%`}})]})))()}var S,C;function w(){return(w=e((()=>{f(),S=d(),C=[S.accessor(`id`,{...p(),header:`ID`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`10%`}}),S.accessor(`user`,{...p(),header:`User`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`45%`}}),S.accessor(`role`,{...p(),header:`Role`,enableSorting:!1,enableColumnFilter:!1,meta:{width:`45%`}})]})))()}var T,E;function D(){return(D=e((()=>{f(),T=d(),E=[T.accessor(`id`,{...p(),header:`ID`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`10%`}}),T.accessor(`user`,{...p(),header:`User`,enableSorting:!0,enableColumnFilter:!0,meta:{width:`45%`}}),T.accessor(`role`,{...p(),header:`Role`,enableSorting:!0,enableColumnFilter:!0,meta:{width:`45%`}})]})))()}var O,k,A;function j(){return(j=e((()=>{f(),O=[{id:`user`,desc:!1}],k=d(),A=[k.accessor(`id`,{...p(),header:`ID`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`10%`}}),k.accessor(`user`,{...p(),header:`User`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`45%`}}),k.accessor(`role`,{...p(),header:`Role`,enableSorting:!0,enableColumnFilter:!1,meta:{width:`45%`}})]})))()}var M,N,P,F,I,L;function R(){return(R=e((()=>{M=`
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
  `,N=`
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
`,P=`
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
`,F=`
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
`,I=`
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
`,L=`
<Table
  data={[]}
  columns={myTableColumns}
/>
`})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{i(),l(),f(),a(),_(),x(),w(),D(),j(),R(),z=t(),{fn:B}=__STORYBOOK_MODULE_TEST__,V={title:`Components/Displays/Table`,component:m,parameters:{docs:{description:{component:"The Table displays data in rows and columns. It is built on TanStack Table: you describe the columns with `createColumnHelper`, and each column can be sorted, filtered or render custom content."}}},args:{data:[{id:0,user:`Diogo Ribeiro`,role:`Front-end Developer`},{id:1,user:`Samuel Nunes`,role:`Front-end Lead`},{id:2,user:`Margarida Souto`,role:`Designer`},{id:3,user:`Tony Gonçalves`,role:`CTO`}],columns:C},argTypes:{columns:{control:!1},renderOptions:{control:!1}}},H={parameters:{docs:{description:{story:`The table component is used to display data in a tabular format.`},source:{code:M}}}},U={args:{columns:E},parameters:{docs:{description:{story:"Through the options `enableSorting` and `enableColumnFilter` you can enable or disable the sorting and filtering functionalities of the table."},source:{code:N}}}},W={args:{columns:A,sortees:O},parameters:{docs:{description:{story:"By creating a custom sortees array using the `ColumnSort[]` type you can define the default sorting of the table."},source:{code:P}}}},G={args:{columns:b},parameters:{docs:{description:{story:"You can customize the content of the cells by rendering custom components inside the `cell` property of the column definition."},source:{code:F}}}},K=B(),q=B(),J={args:{columns:g,renderOptions:e=>(0,z.jsxs)(o,{gap:`xxsm`,children:[(0,z.jsx)(u,{variant:`textOnly`,iconComponent:()=>(0,z.jsx)(r,{}),iconPosition:`iconOnly`,onClick:()=>K(e)}),(0,z.jsx)(u,{variant:`textOnly`,iconComponent:()=>(0,z.jsx)(n,{}),iconPosition:`iconOnly`,onClick:()=>q(e)})]})},parameters:{docs:{description:{story:"Add a column with the id `actions` and use `renderOptions` to fill it. It receives the data of each row, so you can add buttons such as edit or delete."},source:{code:I}}}},Y={args:{data:[]},parameters:{docs:{description:{story:`When there is no data, or the filters match no rows, the table shows an empty message.`},source:{code:L}}}},X={args:{scrollable:!0,style:{minWidth:`700px`}},decorators:[e=>(0,z.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,z.jsx)(e,{})})],parameters:{docs:{description:{story:"Set `scrollable` to let the table scroll horizontally when it is wider than its container. A shadow appears on each edge that has hidden content."},source:{code:`<Table data={data} columns={columns} scrollable />`}}}},Z=[`Default`,`InteractiveHeaders`,`DefaultSort`,`CustomCellContent`,`WithActions`,`Empty`,`Scrollable`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    columns: actionsTableColumns,
    renderOptions: row => <Flex gap='xxsm'>
        <Button variant='textOnly' iconComponent={() => <Pencil1Icon />} iconPosition='iconOnly' onClick={() => onEdit(row)} />
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}}})))()}Q();export{G as CustomCellContent,H as Default,W as DefaultSort,Y as Empty,U as InteractiveHeaders,X as Scrollable,J as WithActions,Z as __namedExportsOrder,V as default};