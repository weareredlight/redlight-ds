import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{i as n,n as r,r as i,t as a}from"./chevron-right-CJ6IDuLX.js";import{n as o,t as s}from"./plus-Bru1OoPw.js";import{n as c,t as l}from"./Button-DdMFAUmw.js";import{n as u,t as d}from"./Flex-CBWmZSZG.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),r(),o(),c(),u(),f=t(),p={title:`Components/General/Button`,component:l,parameters:{docs:{description:{component:`Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.`}}},args:{children:`Button`,fullWidth:!1,disabled:!1,isLoading:!1,iconComponent:void 0},argTypes:{children:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`neutral`,`textOnly`,`danger`,`success`]},type:{control:`radio`,options:[`submit`,`button`]},size:{control:`radio`,options:[`normal`,`large`]},onClick:{control:!1},disabled:{control:`boolean`},isLoading:{control:`boolean`},fullWidth:{control:`boolean`},iconComponent:{table:{disable:!0}},iconPosition:{if:{arg:`iconComponent`,exists:!0},control:`radio`,options:[`left`,`right`,`iconOnly`]}}},m={},h={args:{iconComponent:()=>(0,f.jsx)(a,{}),iconPosition:`right`},parameters:{docs:{description:{story:`The icon can be loaded as a custom component.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
>
  Button
</Button>
  `}}}},g={args:{iconComponent:()=>(0,f.jsx)(i,{}),iconPosition:`left`},parameters:{docs:{description:{story:`You can change the position of the icon.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='left'
>
  Button
</Button>
  `}}}},_={args:{iconComponent:()=>(0,f.jsx)(s,{}),iconPosition:`iconOnly`},parameters:{docs:{description:{story:`You can have just the icon.`},source:{code:`
<Button
  iconComponent={() => <IconFromPackage />}
  iconPosition='iconOnly'
/>
  `}}}},v={args:{fullWidth:!0},parameters:{docs:{description:{story:`The button can occupy the full width of the parent container.`},source:{code:`
<Button
  fullWidth
>
  Button
</Button>
  `}}}},y={args:{isLoading:!0},parameters:{docs:{description:{story:`Shows a spinning icon next to the content while an action is in progress.`},source:{code:`
<Button
  isLoading={isSubmitting}
>
  Button
</Button>
  `}}}},b={args:{disabled:!0},parameters:{docs:{description:{story:`Disabled buttons cannot be clicked.`},source:{code:`
<Button
  disabled
>
  Button
</Button>
  `}}}},x={parameters:{docs:{description:{story:`These are all the available variants.`},source:{code:null}}},render:()=>(0,f.jsxs)(d,{direction:`column`,align:`start`,gap:`lg`,wrap:!0,children:[(0,f.jsxs)(d,{gap:`xxsm`,justify:`start`,children:[(0,f.jsx)(l,{variant:`primary`,children:`Button`}),(0,f.jsx)(l,{variant:`secondary`,children:`Button`}),(0,f.jsx)(l,{variant:`tertiary`,children:`Button`}),(0,f.jsx)(l,{variant:`neutral`,children:`Button`}),(0,f.jsx)(l,{variant:`danger`,children:`Button`}),(0,f.jsx)(l,{variant:`success`,children:`Button`}),(0,f.jsx)(l,{variant:`textOnly`,children:`Button`})]}),(0,f.jsxs)(d,{gap:`xxsm`,children:[(0,f.jsx)(l,{variant:`primary`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`secondary`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`tertiary`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`neutral`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`danger`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`success`,size:`large`,children:`Button`}),(0,f.jsx)(l,{variant:`textOnly`,size:`large`,children:`Button`})]})]})},S=[`Default`,`WithIcon`,`WithIconLeft`,`WithIconOnly`,`FullWidth`,`Loading`,`Disabled`,`AllVariants`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as AllVariants,m as Default,b as Disabled,v as FullWidth,y as Loading,h as WithIcon,g as WithIconLeft,_ as WithIconOnly,S as __namedExportsOrder,p as default};