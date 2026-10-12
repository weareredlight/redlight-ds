import{j as o}from"./jsx-runtime-CHn-5JxF.js";import{p as _,T as P}from"./react-icons.esm-EwFTjkwr.js";import{B as b}from"./index-Dh6MWD5I.js";import{d as e,c as t,T as L}from"./index-W0kw5Hff.js";import{F as A}from"./index-DYSIL8sV.js";import{A as M}from"./index-ggCSQxVR.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";import"./index-C9Uc_w2B.js";import"./index-BF8QffBA.js";import"./index-DtWCBfzg.js";import"./dayjs.min-jA1Vi1ns.js";const r=t(),W=[r.accessor("id",{...e(),header:"ID",enableSorting:!1,enableColumnFilter:!1,meta:{width:"10%"}}),r.accessor("user",{...e(),header:"User",enableSorting:!1,enableColumnFilter:!1,meta:{width:"40%"}}),r.accessor("role",{...e(),header:"Role",enableSorting:!1,enableColumnFilter:!1,meta:{width:"35%"}}),r.display({id:"actions",header:"Actions",meta:{width:"15%"}})],u=t(),Y=[u.accessor("id",{...e(),header:"ID",meta:{width:"10%"}}),u.accessor("user",{...e(),header:"User",meta:{width:"45%"},cell:n=>{const E=n.getValue();return o.jsx(A,{justify:"start",style:{gap:"var(--space-sm)"},children:o.jsx(M,{size:"small",name:String(E),displayLabel:!0})})}}),u.accessor("role",{...e(),header:"Role",meta:{width:"45%"}})],d=t(),$=[d.accessor("id",{...e(),header:"ID",enableSorting:!1,enableColumnFilter:!1,meta:{width:"10%"}}),d.accessor("user",{...e(),header:"User",enableSorting:!1,enableColumnFilter:!1,meta:{width:"45%"}}),d.accessor("role",{...e(),header:"Role",enableSorting:!1,enableColumnFilter:!1,meta:{width:"45%"}})],p=t(),z=[p.accessor("id",{...e(),header:"ID",enableSorting:!0,enableColumnFilter:!1,meta:{width:"10%"}}),p.accessor("user",{...e(),header:"User",enableSorting:!0,enableColumnFilter:!0,meta:{width:"45%"}}),p.accessor("role",{...e(),header:"Role",enableSorting:!0,enableColumnFilter:!0,meta:{width:"45%"}})],N=[{id:"user",desc:!1}],h=t(),G=[h.accessor("id",{...e(),header:"ID",enableSorting:!0,enableColumnFilter:!1,meta:{width:"10%"}}),h.accessor("user",{...e(),header:"User",enableSorting:!0,enableColumnFilter:!1,meta:{width:"45%"}}),h.accessor("role",{...e(),header:"Role",enableSorting:!0,enableColumnFilter:!1,meta:{width:"45%"}})],K=`
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
  `,V=`
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
`,q=`
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
`,J=`
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
`,Q=`
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
`,X=`
<Table
  data={[]}
  columns={myTableColumns}
/>
`,{fn:B}=__STORYBOOK_MODULE_TEST__,Z=[{id:0,user:"Diogo Ribeiro",role:"Front-end Developer"},{id:1,user:"Samuel Nunes",role:"Front-end Lead"},{id:2,user:"Margarida Souto",role:"Designer"},{id:3,user:"Tony Gonçalves",role:"CTO"}],ye={title:"Components/Displays/Table",component:L,parameters:{docs:{description:{component:"The Table displays data in rows and columns. It is built on TanStack Table: you describe the columns with `createColumnHelper`, and each column can be sorted, filtered or render custom content."}}},args:{data:Z,columns:$},argTypes:{columns:{control:!1},renderOptions:{control:!1}}},a={parameters:{docs:{description:{story:"The table component is used to display data in a tabular format."},source:{code:K}}}},s={args:{columns:z},parameters:{docs:{description:{story:"Through the options `enableSorting` and `enableColumnFilter` you can enable or disable the sorting and filtering functionalities of the table."},source:{code:V}}}},l={args:{columns:G,sortees:N},parameters:{docs:{description:{story:"By creating a custom sortees array using the `ColumnSort[]` type you can define the default sorting of the table."},source:{code:q}}}},c={args:{columns:Y},parameters:{docs:{description:{story:"You can customize the content of the cells by rendering custom components inside the `cell` property of the column definition."},source:{code:J}}}},ee=B(),oe=B(),i={args:{columns:W,renderOptions:n=>o.jsxs(A,{gap:"xxsm",children:[o.jsx(b,{variant:"textOnly",iconComponent:()=>o.jsx(_,{}),iconPosition:"iconOnly",onClick:()=>ee(n)}),o.jsx(b,{variant:"textOnly",iconComponent:()=>o.jsx(P,{}),iconPosition:"iconOnly",onClick:()=>oe(n)})]})},parameters:{docs:{description:{story:"Add a column with the id `actions` and use `renderOptions` to fill it. It receives the data of each row, so you can add buttons such as edit or delete."},source:{code:Q}}}},m={args:{data:[]},parameters:{docs:{description:{story:"When there is no data, or the filters match no rows, the table shows an empty message."},source:{code:X}}}},fe=["Default","InteractiveHeaders","DefaultSort","CustomCellContent","WithActions","Empty"];var y,f,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var C,g,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var w,x,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var O,F,v;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(v=(F=c.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var H,I,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var U,j,k;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};export{c as CustomCellContent,a as Default,l as DefaultSort,m as Empty,s as InteractiveHeaders,i as WithActions,fe as __namedExportsOrder,ye as default};
