import{j as n}from"./jsx-runtime-6qgwzs7k.js";import{C as W,a as z,P as O}from"./react-icons.esm-BvxPXE_h.js";import{B as t}from"./index-5ozlnPp-.js";import{F as c}from"./Flex-CcM5UGxd.js";import"./index-DQDNmYQF.js";import"./stitches-rxIYWSTB.js";const R={title:"Components/General/Button",component:t,parameters:{docs:{description:{component:"Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it."}}},args:{children:"Button",fullWidth:!1,disabled:!1,isLoading:!1,iconComponent:void 0},argTypes:{children:{control:"text"},variant:{control:"select",options:["primary","secondary","neutral","textOnly","danger","success"]},type:{control:"radio",options:["submit","button"]},size:{control:"radio",options:["normal","large"]},onClick:{control:!1},css:{table:{disable:!0}},disabled:{control:"boolean"},isLoading:{control:"boolean"},fullWidth:{control:"boolean"},iconComponent:{table:{disable:!0}},iconPosition:{if:{arg:"iconComponent",exists:!0},control:"radio",options:["left","right","iconOnly"]}}},o={},e={args:{iconComponent:()=>n.jsx(W,{}),iconPosition:"right"},parameters:{docs:{description:{story:"The icon can be loaded as a custom component."},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  `}}}},r={args:{iconComponent:()=>n.jsx(z,{}),iconPosition:"left"},parameters:{docs:{description:{story:"You can change the position of the icon."},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  `}}}},a={args:{iconComponent:()=>n.jsx(O,{}),iconPosition:"iconOnly"},parameters:{docs:{description:{story:"You can have just the icon."},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='iconOnly'
/>
  `}}}},s={args:{fullWidth:!0},parameters:{docs:{description:{story:"The button can occupy the full width of the parent container."},source:{code:`
<Button
  fullWidth
>
  Button
</Button>
  `}}}},i={parameters:{docs:{description:{story:"These are all the available variants."},source:{code:null}}},render:()=>n.jsxs(c,{direction:"column",align:"start",gap:"lg",wrap:!0,children:[n.jsxs(c,{gap:"xxsm",justify:"start",children:[n.jsx(t,{variant:"primary",children:"Button"}),n.jsx(t,{variant:"secondary",children:"Button"}),n.jsx(t,{variant:"neutral",children:"Button"}),n.jsx(t,{variant:"danger",children:"Button"}),n.jsx(t,{variant:"success",children:"Button"}),n.jsx(t,{variant:"textOnly",children:"Button"})]}),n.jsxs(c,{gap:"xxsm",children:[n.jsx(t,{variant:"primary",size:"large",children:"Button"}),n.jsx(t,{variant:"secondary",size:"large",children:"Button"}),n.jsx(t,{variant:"neutral",size:"large",children:"Button"}),n.jsx(t,{variant:"danger",size:"large",children:"Button"}),n.jsx(t,{variant:"success",size:"large",children:"Button"}),n.jsx(t,{variant:"textOnly",size:"large",children:"Button"})]})]})};var u,l,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,B;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    iconComponent: () => <ChevronRightIcon />,
    iconPosition: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon can be loaded as a custom component.'
      },
      source: {
        code: \`
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  \`
      }
    }
  }
}`,...(B=(m=e.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var h,g,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    iconComponent: () => <ChevronLeftIcon />,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can change the position of the icon.'
      },
      source: {
        code: \`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  \`
      }
    }
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,v,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconComponent: () => <PlusIcon />,
    iconPosition: 'iconOnly'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can have just the icon.'
      },
      source: {
        code: \`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='iconOnly'
/>
  \`
      }
    }
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,C,P;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The button can occupy the full width of the parent container.'
      },
      source: {
        code: \`
<Button
  fullWidth
>
  Button
</Button>
  \`
      }
    }
  }
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var b,I,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'These are all the available variants.'
      },
      source: {
        code: null
      }
    }
  },
  render: () => <Flex direction='column' align='start' gap='lg' wrap>
      <Flex gap='xxsm' justify='start'>
        <Button variant='primary'>Button</Button>
        <Button variant='secondary'>Button</Button>
        <Button variant='neutral'>Button</Button>
        <Button variant='danger'>Button</Button>
        <Button variant='success'>Button</Button>
        <Button variant='textOnly'>Button</Button>
      </Flex>
      <Flex gap='xxsm'>
        <Button variant='primary' size='large'>Button</Button>
        <Button variant='secondary' size='large'>Button</Button>
        <Button variant='neutral' size='large'>Button</Button>
        <Button variant='danger' size='large'>Button</Button>
        <Button variant='success' size='large'>Button</Button>
        <Button variant='textOnly' size='large'>Button</Button>
      </Flex>
    </Flex>
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const _=["Default","WithIcon","WithIconLeft","WithIconOnly","FullWidth","AllVariants"];export{i as AllVariants,o as Default,s as FullWidth,e as WithIcon,r as WithIconLeft,a as WithIconOnly,_ as __namedExportsOrder,R as default};
