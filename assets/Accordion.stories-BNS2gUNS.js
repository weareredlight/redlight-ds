import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{c as i,d as a,f as o,g as s,h as c,l,m as u,p as d,r as f,s as p,t as m,u as h}from"./dist-BDCWnz8w.js";import{i as g,n as _,r as v,t as y}from"./dist-DXRJTycc.js";import{n as b,t as ee}from"./createLucideIcon-CqFL7BJl.js";import{n as te,t as ne}from"./chevron-down-BwN9GiTh.js";import{n as re,t as ie}from"./Button-Bgv6CRZa.js";import{i as ae,n as x}from"./utils-BhygqQhJ.js";import{n as oe,t as S}from"./Flex-E_iIe-3y.js";import{n as se,t as C}from"./Text-Caz4c05c.js";import{n as ce,t as le}from"./Pill-DJL3H_BH.js";function w(e){return e?`open`:`closed`}var T,E,ue,D,O,de,fe,pe,k,me,he,ge,A,_e,j;function M(){return(M=t((()=>{T=e(n(),1),s(),u(),l(),a(),p(),f(),g(),y(),E=r(),ue=Object.defineProperty,D=(e,t)=>ue(e,`name`,{value:t,configurable:!0}),O=`Collapsible`,[de,fe]=d(O),[pe,k]=de(O),me=T.forwardRef(D(function(e,t){let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:o,...s}=e,[c,l]=h({prop:r,defaultProp:i??!1,onChange:o,caller:O});return(0,E.jsx)(pe,{scope:n,disabled:a,contentId:_(),open:c,onOpenToggle:T.useCallback(()=>l(e=>!e),[l]),children:(0,E.jsx)(m.div,{"data-state":w(c),"data-disabled":a?``:void 0,...s,ref:t})})},`Collapsible`)),he=`CollapsibleTrigger`,ge=T.forwardRef(D(function(e,t){let{__scopeCollapsible:n,...r}=e,i=k(he,n);return(0,E.jsx)(m.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":w(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:c(e.onClick,i.onOpenToggle)})},`CollapsibleTrigger`)),A=`CollapsibleContent`,_e=T.forwardRef(D(function(e,t){let{forceMount:n,...r}=e,i=k(A,e.__scopeCollapsible);return(0,E.jsx)(v,{present:n||i.open,children:({present:e})=>(0,E.jsx)(j,{...r,ref:t,present:e})})},`CollapsibleContent`)),j=T.forwardRef(D(function(e,t){let{__scopeCollapsible:n,present:r,children:a,...s}=e,c=k(A,n),[l,u]=T.useState(r),d=T.useRef(null),f=i(t,d),p=T.useRef(0),h=p.current,g=T.useRef(0),_=g.current,v=c.open||l,y=T.useRef(v),b=T.useRef(void 0);return T.useEffect(()=>{let e=requestAnimationFrame(()=>y.current=!1);return()=>cancelAnimationFrame(e)},[]),o(()=>{let e=d.current;if(e){b.current=b.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();p.current=t.height,g.current=t.width,y.current||(e.style.transitionDuration=b.current.transitionDuration,e.style.animationName=b.current.animationName),u(r)}},[c.open,r]),(0,E.jsx)(m.div,{"data-state":w(c.open),"data-disabled":c.disabled?``:void 0,id:c.contentId,hidden:!v,...s,ref:f,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...e.style},children:v&&a})},`CollapsibleContentImpl`)),D(w,`getState`)})))()}var N,P;function F(){return(F=t((()=>{b(),N={name:`package`,size:24,node:[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]},N.node,P=ee(N)})))()}var I,L,ve,ye,be,xe,Se,Ce,R;function we(){return(we=t((()=>{I=`rl-Accordion-accordion`,L=`rl-Accordion-header`,ve=`rl-Accordion-headerContent`,ye=`rl-Accordion-icon`,be=`rl-Accordion-content`,xe=`rl-Accordion-slideDown`,Se=`rl-Accordion-slideUp`,Ce=`rl-Accordion-body`,R={accordion:I,header:L,headerContent:ve,icon:ye,content:be,slideDown:xe,slideUp:Se,body:Ce}})))()}var z,B,V,H,U;function Te(){return(Te=t((()=>{M(),te(),z=n(),oe(),ae(),we(),B=r(),V=(0,z.createContext)(null),H=({children:e,closeOthers:t=!0,gap:n,className:r,style:i})=>{let[a,o]=(0,z.useState)(),s=(0,z.useMemo)(()=>({openId:a,setOpenId:o}),[a]);return(0,B.jsx)(S,{direction:`column`,align:`stretch`,gap:n,className:r,style:i,children:t?(0,B.jsx)(V.Provider,{value:s,children:e}):e})},U=({header:e,children:t,defaultOpen:n,open:r,onOpenChange:i,disabled:a,className:o,headerClassName:s,bodyClassName:c,style:l})=>{let u=(0,z.useId)(),d=(0,z.useContext)(V),f=d&&r===void 0,p=r;return f&&(p=d.openId===void 0?!!n:d.openId===u),(0,B.jsxs)(me,{defaultOpen:n,open:p,onOpenChange:e=>{f&&d.setOpenId(e?u:null),i?.(e)},disabled:a,className:x(R.accordion,o),style:l,children:[(0,B.jsxs)(ge,{className:x(R.header,s),children:[(0,B.jsx)(`span`,{className:R.headerContent,children:e}),(0,B.jsx)(ne,{className:R.icon,"aria-hidden":!0})]}),(0,B.jsx)(_e,{className:R.content,children:(0,B.jsx)(`div`,{className:x(R.body,c),children:t})})]})};try{H.displayName=`AccordionGroup`,H.__docgenInfo={description:``,displayName:`AccordionGroup`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Accordion/index.tsx`,methods:[],props:{closeOthers:{defaultValue:{value:`true`},declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`closeOthers`,required:!1,tags:{},type:{name:`boolean | undefined`}},gap:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`gap`,required:!1,tags:{},type:{name:`"xxxsm" | "xxsm" | "xsm" | "sm" | "lg" | "xlg" | "xxlg" | "xxxlg" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}try{U.displayName=`Accordion`,U.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Accordion/index.tsx`,methods:[],props:{header:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean | undefined`}},open:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},headerClassName:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`headerClassName`,required:!1,tags:{},type:{name:`string | undefined`}},bodyClassName:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`bodyClassName`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Accordion/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var W,Ee,G,De,K,q,J,Y,Oe,X,ke,Ae,Z,je,Q,Me,$,Ne;function Pe(){return(Pe=t((()=>{F(),Te(),re(),ce(),se(),oe(),W=r(),{fn:Ee}=__STORYBOOK_MODULE_TEST__,G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,maxWidth:720},children:(0,W.jsx)(e,{})}),De={title:`Components/Displays/Accordion`,component:U,parameters:{docs:{description:{component:`An accordion shows a header that is always visible and reveals its body when the header is clicked (or activated with Enter or Space). Both the header and the body accept any content, so it works for a simple question and answer or for a detailed row with its own layout. Keep buttons and links out of the header, since the header is itself a button; put them in the body instead.`}}},args:{header:`What is an accordion?`,children:`An accordion reveals supporting content when expanded.`,onOpenChange:Ee()},argTypes:{header:{control:`text`},children:{control:`text`}}},K={decorators:[G],parameters:{docs:{source:{code:`
<Accordion header='What is an accordion?'>
  An accordion reveals supporting content when expanded.
</Accordion>
`}}}},q={decorators:[G],args:{defaultOpen:!0},parameters:{docs:{description:{story:`Use "defaultOpen" to start expanded. To control it yourself, pass "open" and "onOpenChange" instead.`}}}},J={decorators:[G],args:{disabled:!0}},Y={decorators:[G],render:e=>(0,W.jsxs)(H,{closeOthers:!1,children:[(0,W.jsx)(U,{...e}),(0,W.jsx)(U,{...e})]}),parameters:{docs:{description:{story:`Stack accordions in an "AccordionGroup". With closeOthers={false} each one opens and closes on its own.`},source:{code:`
<AccordionGroup closeOthers={false}>
  <Accordion header='What is an accordion?'>...</Accordion>
  <Accordion header='What is an accordion?'>...</Accordion>
</AccordionGroup>
`}}}},Oe=[{question:`What is an accordion?`,answer:`An accordion reveals supporting content when expanded.`},{question:`When should I use one?`,answer:`When the content is useful but not needed all the time, such as answers, details or settings.`},{question:`Can more than one be open?`,answer:`Yes, unless they are inside an "AccordionGroup". Pass closeOthers={false} to the group to allow it there too.`}],X={decorators:[G],render:e=>(0,W.jsx)(H,{children:Oe.map((t,n)=>(0,W.jsx)(U,{...e,header:t.question,defaultOpen:n===0,children:t.answer},t.question))}),parameters:{docs:{description:{story:`Inside an "AccordionGroup", opening an accordion closes the one that was open. Set "closeOthers" to false to turn this off. An accordion controlled with "open" is left out of the group.`},source:{code:`
<AccordionGroup>
  <Accordion header='What is an accordion?' defaultOpen>...</Accordion>
  <Accordion header='When should I use one?'>...</Accordion>
  <Accordion header='Can more than one be open?'>...</Accordion>
</AccordionGroup>
`}}}},ke=[{id:`#1048`,customer:`Ana Costa`,date:`3 Nov 2026`,status:`Processing`,items:[{name:`Wireless keyboard`,quantity:1,price:79},{name:`USB-C hub`,quantity:2,price:35},{name:`Laptop stand`,quantity:1,price:49}]},{id:`#1047`,customer:`João Pereira`,date:`1 Nov 2026`,status:`Delivered`,items:[{name:`Noise-cancelling headphones`,quantity:1,price:249}]},{id:`#1046`,customer:`Marta Silva`,date:`28 Oct 2026`,status:`Cancelled`,items:[{name:`27" monitor`,quantity:1,price:329},{name:`HDMI cable`,quantity:2,price:12}]}],Ae={Processing:`default`,Delivered:`success`,Cancelled:`error`},Z=e=>new Intl.NumberFormat(`en-IE`,{style:`currency`,currency:`EUR`}).format(e),je=e=>e.items.reduce((e,t)=>e+t.quantity*t.price,0),Q=({order:e})=>(0,W.jsxs)(S,{align:`center`,gap:`xxlg`,children:[(0,W.jsxs)(S,{direction:`column`,gap:`xxxsm`,style:{flex:2},children:[(0,W.jsx)(C,{variant:`h5`,children:`Order ${e.id}`}),(0,W.jsx)(C,{variant:`microCopy`,color:`neutral700`,children:e.customer})]}),(0,W.jsx)(C,{variant:`textBlock`,color:`neutral700`,style:{flex:1},children:e.date}),(0,W.jsx)(C,{variant:`textBlock`,color:`neutral700`,style:{flex:1},children:Z(je(e))}),(0,W.jsx)(le,{variant:Ae[e.status],children:e.status})]}),Me=({order:e})=>(0,W.jsxs)(S,{direction:`column`,align:`stretch`,gap:`xsm`,children:[e.items.map(e=>(0,W.jsxs)(S,{align:`center`,gap:`lg`,style:{padding:`var(--space-xsm) var(--space-lg)`,border:`1px solid var(--colors-neutral200)`,borderRadius:`var(--radii-xsm)`,background:`var(--colors-white)`},children:[(0,W.jsx)(P,{size:24,color:`var(--colors-primary)`,"aria-hidden":!0}),(0,W.jsxs)(S,{direction:`column`,gap:`xxxsm`,style:{flex:1},children:[(0,W.jsx)(C,{variant:`h6`,children:e.name}),(0,W.jsx)(C,{variant:`microCopy`,color:`neutral700`,children:`Quantity: ${e.quantity}`})]}),(0,W.jsx)(C,{variant:`textBlock`,children:Z(e.quantity*e.price)})]},e.name)),(0,W.jsxs)(S,{gap:`xsm`,children:[(0,W.jsx)(ie,{variant:`secondary`,children:`View order`}),(0,W.jsx)(ie,{variant:`neutral`,disabled:e.status===`Cancelled`,children:`Print invoice`})]})]}),$={args:{header:void 0,children:void 0},render:e=>(0,W.jsx)(H,{gap:`xxxsm`,style:{width:`100%`},children:ke.map((t,n)=>(0,W.jsx)(U,{...e,defaultOpen:n===0,header:(0,W.jsx)(Q,{order:t}),headerClassName:`custom-header`,style:{borderRadius:`var(--radii-lg)`,overflow:`hidden`,border:`1px solid var(--colors-neutral200)`},children:(0,W.jsx)(Me,{order:t})},t.id))}),parameters:{docs:{description:{story:`The header and body take any content. Here the header lays out its own columns and the body lists the items and actions of each order, with one order open at a time. Use "className", "headerClassName" and "bodyClassName" to change the colors and spacing.`},source:{code:`
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
`}}}},Ne=[`Default`,`DefaultOpen`,`Disabled`,`Stacked`,`OneOpenAtATime`,`CustomContent`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: [MaxWidth],
  args: {
    disabled: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}Pe();export{$ as CustomContent,K as Default,q as DefaultOpen,J as Disabled,X as OneOpenAtATime,Y as Stacked,Ne as __namedExportsOrder,De as default};