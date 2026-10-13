import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{E as n,c as r,j as i,l as a}from"./react-icons.esm-BhZzypZb.js";import{n as o,t as s}from"./Flex-CBWmZSZG.js";import{n as c,t as l}from"./Button-Bn0mj5uc.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),c(),o(),u=t(),d={title:`Components/General/Button`,component:l,parameters:{docs:{description:{component:`Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.`}}},args:{children:`Button`,fullWidth:!1,disabled:!1,isLoading:!1,iconComponent:void 0},argTypes:{children:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`neutral`,`textOnly`,`danger`,`success`]},type:{control:`radio`,options:[`submit`,`button`]},size:{control:`radio`,options:[`normal`,`large`]},onClick:{control:!1},disabled:{control:`boolean`},isLoading:{control:`boolean`},fullWidth:{control:`boolean`},iconComponent:{table:{disable:!0}},iconPosition:{if:{arg:`iconComponent`,exists:!0},control:`radio`,options:[`left`,`right`,`iconOnly`]}}},f={},p={args:{iconComponent:()=>(0,u.jsx)(a,{}),iconPosition:`right`},parameters:{docs:{description:{story:`The icon can be loaded as a custom component.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  `}}}},m={args:{iconComponent:()=>(0,u.jsx)(r,{}),iconPosition:`left`},parameters:{docs:{description:{story:`You can change the position of the icon.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  `}}}},h={args:{iconComponent:()=>(0,u.jsx)(n,{}),iconPosition:`iconOnly`},parameters:{docs:{description:{story:`You can have just the icon.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='iconOnly'
/>
  `}}}},g={args:{fullWidth:!0},parameters:{docs:{description:{story:`The button can occupy the full width of the parent container.`},source:{code:`
<Button
  fullWidth
>
  Button
</Button>
  `}}}},_={args:{isLoading:!0},parameters:{docs:{description:{story:`Shows a spinning icon next to the content while an action is in progress.`},source:{code:`
<Button
  isLoading={isSubmitting}
>
  Button
</Button>
  `}}}},v={args:{disabled:!0},parameters:{docs:{description:{story:`Disabled buttons cannot be clicked.`},source:{code:`
<Button
  disabled
>
  Button
</Button>
  `}}}},y={parameters:{docs:{description:{story:`These are all the available variants.`},source:{code:null}}},render:()=>(0,u.jsxs)(s,{direction:`column`,align:`start`,gap:`lg`,wrap:!0,children:[(0,u.jsxs)(s,{gap:`xxsm`,justify:`start`,children:[(0,u.jsx)(l,{variant:`primary`,children:`Button`}),(0,u.jsx)(l,{variant:`secondary`,children:`Button`}),(0,u.jsx)(l,{variant:`tertiary`,children:`Button`}),(0,u.jsx)(l,{variant:`neutral`,children:`Button`}),(0,u.jsx)(l,{variant:`danger`,children:`Button`}),(0,u.jsx)(l,{variant:`success`,children:`Button`}),(0,u.jsx)(l,{variant:`textOnly`,children:`Button`})]}),(0,u.jsxs)(s,{gap:`xxsm`,children:[(0,u.jsx)(l,{variant:`primary`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`secondary`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`tertiary`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`neutral`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`danger`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`success`,size:`large`,children:`Button`}),(0,u.jsx)(l,{variant:`textOnly`,size:`large`,children:`Button`})]})]})},b=[`Default`,`WithIcon`,`WithIconLeft`,`WithIconOnly`,`FullWidth`,`Loading`,`Disabled`,`AllVariants`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as AllVariants,f as Default,v as Disabled,g as FullWidth,_ as Loading,p as WithIcon,m as WithIconLeft,h as WithIconOnly,b as __namedExportsOrder,d as default};