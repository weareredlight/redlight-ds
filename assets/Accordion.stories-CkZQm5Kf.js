import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,r,t as i}from"./Accordion-D2QLSijW.js";import{n as a,t as o}from"./createLucideIcon-CqFL7BJl.js";import{n as s,t as c}from"./Button-DbaMQRsx.js";import{n as l,t as u}from"./Flex-LApopfUf.js";import{n as d,t as f}from"./Text-BthGhJWZ.js";import{n as p,t as m}from"./Pill-DzNvv5wG.js";var h,g;function _(){return(_=e((()=>{a(),h={name:`package`,size:24,node:[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]},h.node,g=o(h)})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{_(),r(),s(),p(),d(),l(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=e=>(0,v.jsx)(`div`,{style:{width:`100%`,maxWidth:720},children:(0,v.jsx)(e,{})}),x={title:`Components/Displays/Accordion`,component:i,parameters:{docs:{description:{component:`An accordion shows a header that is always visible and reveals its body when the header is clicked (or activated with Enter or Space). Both the header and the body accept any content, so it works for a simple question and answer or for a detailed row with its own layout. Keep buttons and links out of the header, since the header is itself a button; put them in the body instead.`}}},args:{header:`What is an accordion?`,children:`An accordion reveals supporting content when expanded.`,onOpenChange:y()},argTypes:{header:{control:`text`},children:{control:`text`}}},S={decorators:[b],parameters:{docs:{source:{code:`
<Accordion header='What is an accordion?'>
  An accordion reveals supporting content when expanded.
</Accordion>
`}}}},C={decorators:[b],args:{defaultOpen:!0},parameters:{docs:{description:{story:`Use "defaultOpen" to start expanded. To control it yourself, pass "open" and "onOpenChange" instead.`}}}},w={decorators:[b],args:{disabled:!0}},T={decorators:[b],render:e=>(0,v.jsxs)(n,{closeOthers:!1,children:[(0,v.jsx)(i,{...e}),(0,v.jsx)(i,{...e})]}),parameters:{docs:{description:{story:`Stack accordions in an "AccordionGroup". With closeOthers={false} each one opens and closes on its own.`},source:{code:`
<AccordionGroup closeOthers={false}>
  <Accordion header='What is an accordion?'>...</Accordion>
  <Accordion header='What is an accordion?'>...</Accordion>
</AccordionGroup>
`}}}},E=[{question:`What is an accordion?`,answer:`An accordion reveals supporting content when expanded.`},{question:`When should I use one?`,answer:`When the content is useful but not needed all the time, such as answers, details or settings.`},{question:`Can more than one be open?`,answer:`Yes, unless they are inside an "AccordionGroup". Pass closeOthers={false} to the group to allow it there too.`}],D={decorators:[b],render:e=>(0,v.jsx)(n,{children:E.map((t,n)=>(0,v.jsx)(i,{...e,header:t.question,defaultOpen:n===0,children:t.answer},t.question))}),parameters:{docs:{description:{story:`Inside an "AccordionGroup", opening an accordion closes the one that was open. Set "closeOthers" to false to turn this off. An accordion controlled with "open" is left out of the group.`},source:{code:`
<AccordionGroup>
  <Accordion header='What is an accordion?' defaultOpen>...</Accordion>
  <Accordion header='When should I use one?'>...</Accordion>
  <Accordion header='Can more than one be open?'>...</Accordion>
</AccordionGroup>
`}}}},O=[{id:`#1048`,customer:`Ana Costa`,date:`3 Nov 2026`,status:`Processing`,items:[{name:`Wireless keyboard`,quantity:1,price:79},{name:`USB-C hub`,quantity:2,price:35},{name:`Laptop stand`,quantity:1,price:49}]},{id:`#1047`,customer:`João Pereira`,date:`1 Nov 2026`,status:`Delivered`,items:[{name:`Noise-cancelling headphones`,quantity:1,price:249}]},{id:`#1046`,customer:`Marta Silva`,date:`28 Oct 2026`,status:`Cancelled`,items:[{name:`27" monitor`,quantity:1,price:329},{name:`HDMI cable`,quantity:2,price:12}]}],k={Processing:`default`,Delivered:`success`,Cancelled:`error`},A=e=>new Intl.NumberFormat(`en-IE`,{style:`currency`,currency:`EUR`}).format(e),j=e=>e.items.reduce((e,t)=>e+t.quantity*t.price,0),M=({order:e})=>(0,v.jsxs)(u,{align:`center`,gap:`xxlg`,children:[(0,v.jsxs)(u,{direction:`column`,gap:`xxxsm`,style:{flex:2},children:[(0,v.jsx)(f,{variant:`h5`,children:`Order ${e.id}`}),(0,v.jsx)(f,{variant:`microCopy`,color:`neutral700`,children:e.customer})]}),(0,v.jsx)(f,{variant:`textBlock`,color:`neutral700`,style:{flex:1},children:e.date}),(0,v.jsx)(f,{variant:`textBlock`,color:`neutral700`,style:{flex:1},children:A(j(e))}),(0,v.jsx)(m,{variant:k[e.status],children:e.status})]}),N=({order:e})=>(0,v.jsxs)(u,{direction:`column`,align:`stretch`,gap:`xsm`,children:[e.items.map(e=>(0,v.jsxs)(u,{align:`center`,gap:`lg`,style:{padding:`var(--space-xsm) var(--space-lg)`,border:`1px solid var(--colors-neutral200)`,borderRadius:`var(--radii-xsm)`,background:`var(--colors-white)`},children:[(0,v.jsx)(g,{size:24,color:`var(--colors-primary)`,"aria-hidden":!0}),(0,v.jsxs)(u,{direction:`column`,gap:`xxxsm`,style:{flex:1},children:[(0,v.jsx)(f,{variant:`h6`,children:e.name}),(0,v.jsx)(f,{variant:`microCopy`,color:`neutral700`,children:`Quantity: ${e.quantity}`})]}),(0,v.jsx)(f,{variant:`textBlock`,children:A(e.quantity*e.price)})]},e.name)),(0,v.jsxs)(u,{gap:`xsm`,children:[(0,v.jsx)(c,{variant:`secondary`,children:`View order`}),(0,v.jsx)(c,{variant:`neutral`,disabled:e.status===`Cancelled`,children:`Print invoice`})]})]}),P={args:{header:void 0,children:void 0},render:e=>(0,v.jsx)(n,{gap:`xxxsm`,style:{width:`100%`},children:O.map((t,n)=>(0,v.jsx)(i,{...e,defaultOpen:n===0,header:(0,v.jsx)(M,{order:t}),headerClassName:`custom-header`,style:{borderRadius:`var(--radii-lg)`,overflow:`hidden`,border:`1px solid var(--colors-neutral200)`},children:(0,v.jsx)(N,{order:t})},t.id))}),parameters:{docs:{description:{story:`The header and body take any content. Here the header lays out its own columns and the body lists the items and actions of each order, with one order open at a time. Use "className", "headerClassName" and "bodyClassName" to change the colors and spacing.`},source:{code:`
<AccordionGroup gap='xxxsm'>
  <Accordion
    header={
      <Flex align='center' gap='xxlg'>
        <Text variant='h5'>Order #1048</Text>
        <Text variant='textBlock'>€198.00</Text>
        <Pill>Processing</Pill>
      </Flex>
    }
  >
    <Flex direction='column' align='stretch' gap='xsm'>
      ...items
      <Button variant='secondary'>View order</Button>
    </Flex>
  </Accordion>
  ...more orders
</AccordionGroup>
`}}}},F=[`Default`,`DefaultOpen`,`Disabled`,`Stacked`,`OneOpenAtATime`,`CustomContent`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  parameters: {
    docs: {
      source: {
        code: \`
<Accordion header='What is an accordion?'>
  An accordion reveals supporting content when expanded.
</Accordion>
\`
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  args: {
    defaultOpen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "defaultOpen" to start expanded. To control it yourself, pass "open" and "onOpenChange" instead.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  render: args => <AccordionGroup closeOthers={false}>
      <Accordion {...args} />
      <Accordion {...args} />
    </AccordionGroup>,
  parameters: {
    docs: {
      description: {
        story: 'Stack accordions in an "AccordionGroup". With closeOthers={false} each one opens and closes on its own.'
      },
      source: {
        code: \`
<AccordionGroup closeOthers={false}>
  <Accordion header='What is an accordion?'>...</Accordion>
  <Accordion header='What is an accordion?'>...</Accordion>
</AccordionGroup>
\`
      }
    }
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  render: args => <AccordionGroup>
      {faqs.map((faq, index) => <Accordion key={faq.question} {...args} header={faq.question} defaultOpen={index === 0}>
          {faq.answer}
        </Accordion>)}
    </AccordionGroup>,
  parameters: {
    docs: {
      description: {
        story: 'Inside an "AccordionGroup", opening an accordion closes the one that was open. Set "closeOthers" to false to turn this off. An accordion controlled with "open" is left out of the group.'
      },
      source: {
        code: \`
<AccordionGroup>
  <Accordion header='What is an accordion?' defaultOpen>...</Accordion>
  <Accordion header='When should I use one?'>...</Accordion>
  <Accordion header='Can more than one be open?'>...</Accordion>
</AccordionGroup>
\`
      }
    }
  }
}`,...D.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    header: undefined,
    children: undefined
  },
  render: args => <AccordionGroup gap='xxxsm' style={{
    width: '100%'
  }}>
      {orders.map((order, index) => <Accordion key={order.id} {...args} defaultOpen={index === 0} header={<OrderHeader order={order} />} headerClassName='custom-header' style={{
      borderRadius: 'var(--radii-lg)',
      overflow: 'hidden',
      border: '1px solid var(--colors-neutral200)'
    }}>
          <OrderBody order={order} />
        </Accordion>)}
    </AccordionGroup>,
  parameters: {
    docs: {
      description: {
        story: 'The header and body take any content. Here the header lays out its own columns and the body lists the items and actions of each order, with one order open at a time. Use "className", "headerClassName" and "bodyClassName" to change the colors and spacing.'
      },
      source: {
        code: \`
<AccordionGroup gap='xxxsm'>
  <Accordion
    header={
      <Flex align='center' gap='xxlg'>
        <Text variant='h5'>Order #1048</Text>
        <Text variant='textBlock'>€198.00</Text>
        <Pill>Processing</Pill>
      </Flex>
    }
  >
    <Flex direction='column' align='stretch' gap='xsm'>
      ...items
      <Button variant='secondary'>View order</Button>
    </Flex>
  </Accordion>
  ...more orders
</AccordionGroup>
\`
      }
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{P as CustomContent,S as Default,C as DefaultOpen,w as Disabled,D as OneOpenAtATime,T as Stacked,F as __namedExportsOrder,x as default};