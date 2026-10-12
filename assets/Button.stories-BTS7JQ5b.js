import{j as n}from"./jsx-runtime-CHn-5JxF.js";import{b as D,c as Y,P as R}from"./react-icons.esm-EwFTjkwr.js";import{B as t}from"./index-Dh6MWD5I.js";import{F as l}from"./index-DYSIL8sV.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-k5Y3hgfw.js";import"./utils-zpUxZkj0.js";const K={title:"Components/General/Button",component:t,parameters:{docs:{description:{component:"Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it."}}},args:{children:"Button",fullWidth:!1,disabled:!1,isLoading:!1,iconComponent:void 0},argTypes:{children:{control:"text"},variant:{control:"select",options:["primary","secondary","tertiary","neutral","textOnly","danger","success"]},type:{control:"radio",options:["submit","button"]},size:{control:"radio",options:["normal","large"]},onClick:{control:!1},disabled:{control:"boolean"},isLoading:{control:"boolean"},fullWidth:{control:"boolean"},iconComponent:{table:{disable:!0}},iconPosition:{if:{arg:"iconComponent",exists:!0},control:"radio",options:["left","right","iconOnly"]}}},o={},e={args:{iconComponent:()=>n.jsx(D,{}),iconPosition:"right"},parameters:{docs:{description:{story:"The icon can be loaded as a custom component."},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  `}}}},r={args:{iconComponent:()=>n.jsx(Y,{}),iconPosition:"left"},parameters:{docs:{description:{story:"You can change the position of the icon."},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  `}}}},a={args:{iconComponent:()=>n.jsx(R,{}),iconPosition:"iconOnly"},parameters:{docs:{description:{story:"You can have just the icon."},source:{code:`
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
  `}}}},i={args:{isLoading:!0},parameters:{docs:{description:{story:"Shows a spinning icon next to the content while an action is in progress."},source:{code:`
<Button
  isLoading={isSubmitting}
>
  Button
</Button>
  `}}}},c={args:{disabled:!0},parameters:{docs:{description:{story:"Disabled buttons cannot be clicked."},source:{code:`
<Button
  disabled
>
  Button
</Button>
  `}}}},u={parameters:{docs:{description:{story:"These are all the available variants."},source:{code:null}}},render:()=>n.jsxs(l,{direction:"column",align:"start",gap:"lg",wrap:!0,children:[n.jsxs(l,{gap:"xxsm",justify:"start",children:[n.jsx(t,{variant:"primary",children:"Button"}),n.jsx(t,{variant:"secondary",children:"Button"}),n.jsx(t,{variant:"tertiary",children:"Button"}),n.jsx(t,{variant:"neutral",children:"Button"}),n.jsx(t,{variant:"danger",children:"Button"}),n.jsx(t,{variant:"success",children:"Button"}),n.jsx(t,{variant:"textOnly",children:"Button"})]}),n.jsxs(l,{gap:"xxsm",children:[n.jsx(t,{variant:"primary",size:"large",children:"Button"}),n.jsx(t,{variant:"secondary",size:"large",children:"Button"}),n.jsx(t,{variant:"tertiary",size:"large",children:"Button"}),n.jsx(t,{variant:"neutral",size:"large",children:"Button"}),n.jsx(t,{variant:"danger",size:"large",children:"Button"}),n.jsx(t,{variant:"success",size:"large",children:"Button"}),n.jsx(t,{variant:"textOnly",size:"large",children:"Button"})]})]})},M=["Default","WithIcon","WithIconLeft","WithIconOnly","FullWidth","Loading","Disabled","AllVariants"];var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var B,g,h;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,b,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var C,P,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(P=s.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var F,w,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a spinning icon next to the content while an action is in progress.'
      },
      source: {
        code: \`
<Button
  isLoading={isSubmitting}
>
  Button
</Button>
  \`
      }
    }
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var W,O,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons cannot be clicked.'
      },
      source: {
        code: \`
<Button
  disabled
>
  Button
</Button>
  \`
      }
    }
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var S,k,T;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <Button variant='tertiary'>Button</Button>
        <Button variant='neutral'>Button</Button>
        <Button variant='danger'>Button</Button>
        <Button variant='success'>Button</Button>
        <Button variant='textOnly'>Button</Button>
      </Flex>
      <Flex gap='xxsm'>
        <Button variant='primary' size='large'>Button</Button>
        <Button variant='secondary' size='large'>Button</Button>
        <Button variant='tertiary' size='large'>Button</Button>
        <Button variant='neutral' size='large'>Button</Button>
        <Button variant='danger' size='large'>Button</Button>
        <Button variant='success' size='large'>Button</Button>
        <Button variant='textOnly' size='large'>Button</Button>
      </Flex>
    </Flex>
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};export{u as AllVariants,o as Default,c as Disabled,s as FullWidth,i as Loading,e as WithIcon,r as WithIconLeft,a as WithIconOnly,M as __namedExportsOrder,K as default};
