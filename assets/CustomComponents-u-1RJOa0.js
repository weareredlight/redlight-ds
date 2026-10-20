import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,d as r,s as i,u as a}from"./blocks-iO01YHHB.js";import{n as o,t as s}from"./createLucideIcon-CqFL7BJl.js";import{n as c,t as ee}from"./calendar-days-C1Bf3Q7g.js";import{a as te,d as l,l as ne,n as re,o as ie,r as ae,t as oe,u as se}from"./document-Cp5uLybk.js";import{n as ce,t as le}from"./pencil-D50Vxehr.js";import{n as ue,t as u}from"./Button-6MKRrWKt.js";import{n as de,t as fe}from"./users-BbalUWLq.js";import{n as d,r as pe}from"./utils-jn8NBDHm.js";import{n as me,t as f}from"./Flex-CCIzD6fY.js";import{n as he,t as p}from"./Text-BenUHwhx.js";import{n as ge,t as _e}from"./Avatar-k37LOZgM.js";import{n as ve,t as ye}from"./Pill-Qn_L1TCt.js";import{n as be,t as xe}from"./PopOver-A9RA_K8y.js";import{n as Se,t as Ce}from"./Tag-0VfK8Pu9.js";import{n as we,t as Te}from"./Tooltip-XYdnBXIe.js";var m,h;function g(){return(g=e((()=>{o(),m={name:`archive`,size:24,node:[[`rect`,{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`,key:`1wp1u1`}],[`path`,{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`,key:`1s80jp`}],[`path`,{d:`M10 12h4`,key:`a56b0p`}]]},m.node,h=s(m)})))()}var _,v;function y(){return(y=e((()=>{o(),_={name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},_.node,v=s(_)})))()}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=`import { Button, Flex, Tag, Text } from '@weareredlight/design-system'

// A page header made only of existing components
const ProjectHeader = ({ name, status, onEdit }: ProjectHeaderProps) => (
  <Flex justify='spaceBetween' align='center' gap='sm'>
    <Flex align='center' gap='xxsm'>
      <Text variant='h4' color='neutral800'>{name}</Text>
      <Tag>{status}</Tag>
    </Flex>
    <Button variant='secondary' onClick={onEdit}>Edit</Button>
  </Flex>
)`,x=`import { EllipsisIcon } from 'lucide-react'
import { Avatar, Flex, Pill, PopOver, Text, Tooltip } from '@weareredlight/design-system'

import styles from './ProjectCard.module.scss'

const STATUS = {
  onTrack: { label: 'On track', variant: 'default' },
  atRisk: { label: 'At risk', variant: 'error' },
  done: { label: 'Done', variant: 'success' },
} as const

const MAX_MEMBERS = 3

export type ProjectCardProps = {
  name: string
  status: keyof typeof STATUS
  progress: number // 0 to 100
  members: { name: string, url?: string }[]
  // ...description, dueDate, onEdit, onArchive, className and style
}

const ProjectCard = ({ name, status, progress, members, className, style }: ProjectCardProps) => {
  const hiddenMembers = members.length - MAX_MEMBERS

  return (
    <div className={[styles.card, styles[status], className].filter(Boolean).join(' ')} style={style}>
      <Flex justify='spaceBetween' align='center' gap='xsm'>
        <Flex align='center' gap='xxsm' wrap>
          <Text variant='h5' color='neutral900'>{name}</Text>
          <Pill variant={STATUS[status].variant}>{STATUS[status].label}</Pill>
        </Flex>
        <PopOver
          side='bottom'
          align='end'
          trigger={(
            <button type='button' className={styles.menuButton} aria-label='Project options'>
              <EllipsisIcon size={16} />
            </button>
          )}
        >
          {/* ...title, and the Edit and Archive buttons */}
        </PopOver>
      </Flex>

      {/* ...description */}

      <Flex direction='column' align='stretch' gap='xxxsm'>
        <Flex justify='spaceBetween' className={styles.progressLabel}>
          <span>Progress</span>
          <span>{\`\${progress}%\`}</span>
        </Flex>
        <div className={styles.track}>
          <div className={styles.bar} style={{ width: \`\${progress}%\` }} />
        </div>
      </Flex>

      <Flex justify='spaceBetween' align='center' gap='xsm' wrap>
        <Flex align='center' className={styles.members}>
          {members.slice(0, MAX_MEMBERS).map(member => (
            <Tooltip key={member.name} content={member.name} side='top'>
              <Avatar size='small' name={member.name} url={member.url} className={styles.member} />
            </Tooltip>
          ))}
          {hiddenMembers > 0 && <span className={styles.more}>{\`+\${hiddenMembers}\`}</span>}
        </Flex>
        {/* ...due date */}
      </Flex>
    </div>
  )
}

export default ProjectCard`,S=`@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  background: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);

  @include media.query(sm) {
    padding: var(--space-lg);
  }
}

// Not a design system component: a plain button styled with the tokens
.menuButton {
  all: unset;
  display: flex;
  padding: var(--space-xxxsm);
  border-radius: var(--radii-xsm);
  color: var(--colors-neutral600);
  // ...hover and focus states
}

// Progress bar, colored by status
.progressLabel {
  @include typography.microCopy;
  color: var(--colors-neutral600);
}

.track {
  height: var(--sizes-xxsm);
  border-radius: var(--radii-full);
  background: var(--colors-neutral200);
  overflow: hidden;
}

.bar {
  height: 100%;
  background: var(--colors-primary);

  .atRisk & { background: var(--colors-danger); }
  .done & { background: var(--colors-success); }
}

// Overlapping avatars, with a white ring to separate them
.member,
.more {
  margin-left: calc(-1 * var(--space-xxsm));
  border-radius: var(--radii-full);
  box-shadow: 0 0 0 2px var(--colors-white);
}

// ....members, .more and .dueDate`,C=`<ProjectCard
  name='Website redesign'
  description='New landing page, pricing and blog, all built with the design system.'
  status='onTrack'
  progress={68}
  members={[{ name: 'Ana Costa' }, { name: 'Rui Silva' }, /* ... */]}
  dueDate='30 Nov 2026'
  onEdit={openEditor}
  onArchive={archiveProject}
/>`,w=`import type { CSSProperties, ReactNode } from 'react'
import { Flex } from '@weareredlight/design-system'

import styles from './StatCard.module.scss'

export type StatCardProps = {
  label: string
  value: ReactNode
  icon?: ReactNode
  variant?: 'default' | 'highlight'
  className?: string
  style?: CSSProperties
}

const StatCard = ({ label, value, icon, variant = 'default', className, style }: StatCardProps) => (
  <div className={[styles.card, styles[variant], className].filter(Boolean).join(' ')} style={style}>
    <Flex align='center' gap='xxsm' className={styles.label}>
      {icon}
      {label}
    </Flex>
    <span className={styles.value}>{value}</span>
  </div>
)

export default StatCard`,T=`@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxsm);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  background: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);

  @include media.query(sm) {
    padding: var(--space-lg);
  }
}

.label {
  @include typography.microCopy;
  color: var(--colors-neutral600);
}

.value {
  @include typography.heading3;
  color: var(--colors-neutral900);
}

.highlight {
  background: var(--colors-primary100);

  .value { color: var(--colors-primary600); }
}`,E=`import { UsersIcon } from 'lucide-react'

<StatCard label='Active users' value='1,284' icon={<UsersIcon size={16} />} />
<StatCard label='Revenue' value='€12.4k' variant='highlight' />`})))()}var O,k,A,j,M,N,Ee,P,F,I,L,R,z,B,V,H,U,W;function De(){return(De=e((()=>{O=`rl-CustomComponents-preview`,k=`rl-CustomComponents-card`,A=`rl-CustomComponents-label`,j=`rl-CustomComponents-value`,M=`rl-CustomComponents-highlight`,N=`rl-CustomComponents-projectGrid`,Ee=`rl-CustomComponents-projectCard`,P=`rl-CustomComponents-menuButton`,F=`rl-CustomComponents-progressLabel`,I=`rl-CustomComponents-track`,L=`rl-CustomComponents-bar`,R=`rl-CustomComponents-atRisk`,z=`rl-CustomComponents-done`,B=`rl-CustomComponents-members`,V=`rl-CustomComponents-member`,H=`rl-CustomComponents-more`,U=`rl-CustomComponents-dueDate`,W={preview:O,card:k,label:A,value:j,highlight:M,projectGrid:N,projectCard:Ee,menuButton:P,progressLabel:F,track:I,bar:L,atRisk:R,done:z,members:B,member:V,more:H,dueDate:U}})))()}var G,K,Oe,q,J,ke,Ae,Y,je,X,Me;function Z(){return(Z=e((()=>{g(),c(),y(),ce(),de(),ge(),ue(),ve(),be(),Se(),he(),we(),me(),pe(),De(),G=t(),K=({children:e})=>(0,G.jsx)(`div`,{className:d(`sb-unstyled`,W.preview),children:e}),Oe=()=>(0,G.jsx)(K,{children:(0,G.jsxs)(f,{justify:`spaceBetween`,align:`center`,gap:`sm`,children:[(0,G.jsxs)(f,{align:`center`,gap:`xxsm`,children:[(0,G.jsx)(p,{variant:`h4`,color:`neutral800`,children:`Website redesign`}),(0,G.jsx)(Ce,{children:`In progress`})]}),(0,G.jsx)(u,{variant:`secondary`,onClick:()=>{},children:`Edit`})]})}),q={onTrack:{label:`On track`,variant:`default`},atRisk:{label:`At risk`,variant:`error`},done:{label:`Done`,variant:`success`}},J=3,ke=()=>(0,G.jsx)(le,{}),Ae=()=>(0,G.jsx)(h,{}),Y=({name:e,description:t,status:n,progress:r,members:i,dueDate:a,onEdit:o,onArchive:s,className:c,style:te})=>{let l=i.length-J;return(0,G.jsxs)(`div`,{className:d(W.projectCard,W[n],c),style:te,children:[(0,G.jsxs)(f,{justify:`spaceBetween`,align:`center`,gap:`xsm`,children:[(0,G.jsxs)(f,{align:`center`,gap:`xxsm`,wrap:!0,children:[(0,G.jsx)(p,{variant:`h5`,color:`neutral900`,children:e}),(0,G.jsx)(ye,{variant:q[n].variant,children:q[n].label})]}),(0,G.jsx)(xe,{side:`bottom`,align:`end`,trigger:(0,G.jsx)(`button`,{type:`button`,className:W.menuButton,"aria-label":`Project options`,children:(0,G.jsx)(v,{size:16})}),children:(0,G.jsxs)(f,{direction:`column`,gap:`xsm`,children:[(0,G.jsx)(p,{variant:`h6`,color:`neutral800`,children:`Project options`}),(0,G.jsxs)(f,{gap:`xxsm`,style:{width:`100%`},children:[(0,G.jsx)(u,{variant:`secondary`,iconComponent:ke,iconPosition:`left`,onClick:o,fullWidth:!0,children:`Edit`}),(0,G.jsx)(u,{variant:`danger`,iconComponent:Ae,iconPosition:`left`,onClick:s,fullWidth:!0,children:`Archive`})]})]})})]}),(0,G.jsx)(p,{variant:`textBlock`,color:`neutral700`,children:t}),(0,G.jsxs)(f,{direction:`column`,align:`stretch`,gap:`xxxsm`,children:[(0,G.jsxs)(f,{justify:`spaceBetween`,className:W.progressLabel,children:[(0,G.jsx)(`span`,{children:`Progress`}),(0,G.jsx)(`span`,{children:`${r}%`})]}),(0,G.jsx)(`div`,{className:W.track,children:(0,G.jsx)(`div`,{className:W.bar,style:{width:`${r}%`}})})]}),(0,G.jsxs)(f,{justify:`spaceBetween`,align:`center`,gap:`xsm`,wrap:!0,children:[(0,G.jsxs)(f,{align:`center`,className:W.members,children:[i.slice(0,J).map(e=>(0,G.jsx)(Te,{content:e.name,side:`top`,children:(0,G.jsx)(_e,{size:`small`,name:e.name,url:e.url,className:W.member})},e.name)),l>0&&(0,G.jsx)(`span`,{className:W.more,children:`+${l}`})]}),(0,G.jsxs)(f,{align:`center`,gap:`xxxsm`,className:W.dueDate,children:[(0,G.jsx)(ee,{size:14}),a]})]})]})},je=()=>(0,G.jsx)(K,{children:(0,G.jsxs)(`div`,{className:W.projectGrid,children:[(0,G.jsx)(Y,{name:`Website redesign`,description:`New landing page, pricing and blog, all built with the design system.`,status:`onTrack`,progress:68,members:[{name:`Ana Costa`},{name:`Rui Silva`},{name:`Marta Lopes`},{name:`João Dias`},{name:`Inês Faria`}],dueDate:`30 Nov 2026`,onEdit:()=>{},onArchive:()=>{}}),(0,G.jsx)(Y,{name:`Mobile app`,description:`Native app for bookings, with offline mode and push notifications.`,status:`atRisk`,progress:35,members:[{name:`Pedro Alves`},{name:`Sofia Reis`}],dueDate:`12 Nov 2026`,onEdit:()=>{},onArchive:()=>{}}),(0,G.jsx)(Y,{name:`Brand guidelines`,description:`Logo, colors and tone of voice, documented for the whole team.`,status:`done`,progress:100,members:[{name:`Marta Lopes`},{name:`Ana Costa`},{name:`Tiago Melo`}],dueDate:`2 Oct 2026`,onEdit:()=>{},onArchive:()=>{}})]})}),X=({label:e,value:t,icon:n,variant:r=`default`,className:i,style:a})=>(0,G.jsxs)(`div`,{className:d(W.card,W[r],i),style:a,children:[(0,G.jsxs)(f,{align:`center`,gap:`xxsm`,className:W.label,children:[n,e]}),(0,G.jsx)(`span`,{className:W.value,children:t})]}),Me=()=>(0,G.jsx)(K,{children:(0,G.jsxs)(f,{gap:`lg`,wrap:!0,children:[(0,G.jsx)(X,{label:`Active users`,value:`1,284`,icon:(0,G.jsx)(fe,{size:16})}),(0,G.jsx)(X,{label:`Revenue`,value:`€12.4k`,variant:`highlight`})]})})})))()}function Ne(e){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(n,{title:`Custom Components`}),`
`,(0,Q.jsxs)(te,{children:[(0,Q.jsxs)(ne,{style:{background:`#2F6FDE`},children:[(0,Q.jsx)(`h2`,{children:`Custom Components`}),(0,Q.jsx)(l,{})]}),(0,Q.jsxs)(ie,{children:[(0,Q.jsx)(`h3`,{children:`Can't find the component you need?`}),(0,Q.jsx)(`p`,{children:`No problem. The design system doesn't try to cover every case, and it gives you everything you need to build your own: tokens, typography, layout and icons. Follow these steps, and your component will look like it was always part of it.`}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(se,{}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`1. Make sure it doesn't exist yet`}),(0,Q.jsxs)(`p`,{children:[`Look through the `,(0,Q.jsx)(`b`,{children:`Components`}),` section in the sidebar. A component may go by a different name than you expect: a badge is a `,(0,Q.jsx)(`code`,{children:`Pill`}),` or a `,(0,Q.jsx)(`code`,{children:`Tag`}),`, a confirmation popup is a `,(0,Q.jsx)(`code`,{children:`Dialog`}),`, a dropdown is a `,(0,Q.jsx)(`code`,{children:`PopOver`}),` or a `,(0,Q.jsx)(`code`,{children:`Select`}),`, a switch is a `,(0,Q.jsx)(`code`,{children:`Toggle`}),`. The `,(0,Q.jsx)(`a`,{href:`https://www.figma.com/design/rkRWOtSBgEd6wdfInQU2Oi/Design-System?node-id=0-1&t=hXvn4xpcG8NhqUEF-1`,target:`_blank`,children:`Figma file`}),` has them all too.`]}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`2. Try to build it from existing components`}),(0,Q.jsxs)(`p`,{children:[`Most "new" components are existing ones put together. Check each component's props and variants first, then combine them with `,(0,Q.jsx)(`code`,{children:`Flex`}),` for the layout. Every component also accepts `,(0,Q.jsx)(`code`,{children:`className`}),` and `,(0,Q.jsx)(`code`,{children:`style`}),` for small adjustments:`]}),(0,Q.jsx)(Oe,{}),(0,Q.jsx)(re,{code:b,language:`tsx`}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`3. Build it with the design system's styles`}),(0,Q.jsx)(`p`,{children:`If nothing fits, create it in your project. Write the styles with the same building blocks the components use, and never with hard-coded values:`}),(0,Q.jsxs)(`ul`,{children:[(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Colors, spacing, sizes, radii and shadows:`}),` CSS variables like `,(0,Q.jsx)(`code`,{children:`var(--colors-primary)`}),` and `,(0,Q.jsx)(`code`,{children:`var(--space-xxsm)`}),`. See `,(0,Q.jsx)(`a`,{href:`./?path=/docs/style-guides-colors--how-to-use`,target:`_top`,children:`Colors`}),` and `,(0,Q.jsx)(`a`,{href:`./?path=/docs/style-guides-spacing-sizes--how-to-use`,target:`_top`,children:`Spacing & Sizes`}),`.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Text:`}),` the `,(0,Q.jsx)(`code`,{children:`Text`}),` component, or the typography mixins in your SCSS. See `,(0,Q.jsx)(`a`,{href:`./?path=/docs/style-guides-typography--how-to-use`,target:`_top`,children:`Typography`}),`.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Layout:`}),` `,(0,Q.jsx)(`code`,{children:`Flex`}),`, and the `,(0,Q.jsx)(`code`,{children:`media.query`}),` mixin for breakpoints.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Icons:`}),` Lucide, the same library as the components. See `,(0,Q.jsx)(`a`,{href:`./?path=/docs/style-guides-icons--how-to-use`,target:`_top`,children:`Icons`}),`.`]})})]}),(0,Q.jsxs)(`p`,{children:[`For example, a project card. It combines `,(0,Q.jsx)(`code`,{children:`Avatar`}),`, `,(0,Q.jsx)(`code`,{children:`Tooltip`}),`, `,(0,Q.jsx)(`code`,{children:`Pill`}),`, `,(0,Q.jsx)(`code`,{children:`PopOver`}),`, `,(0,Q.jsx)(`code`,{children:`Button`}),` and `,(0,Q.jsx)(`code`,{children:`Text`}),` with its own progress bar and menu button, and every color, space and text style comes from the design system. Hover the avatars and open the menu:`]}),(0,Q.jsx)(je,{}),(0,Q.jsx)(ae,{tabs:[{label:`ProjectCard.tsx`,code:x,language:`tsx`},{label:`styles.module.scss`,code:S,language:`scss`},{label:`Usage`,code:C,language:`tsx`}]}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`p`,{children:`Or something simpler, like a stat card for a dashboard:`}),(0,Q.jsx)(Me,{}),(0,Q.jsx)(ae,{tabs:[{label:`StatCard.tsx`,code:w,language:`tsx`},{label:`styles.module.scss`,code:T,language:`scss`},{label:`Usage`,code:E,language:`tsx`}]}),(0,Q.jsxs)(`p`,{children:[`Building something interactive, like a dropdown menu or an accordion? Don't write the behavior from scratch: use a `,(0,Q.jsx)(`a`,{href:`https://www.radix-ui.com/primitives`,target:`_blank`,children:`Radix primitive`}),` (the design system uses them for `,(0,Q.jsx)(`code`,{children:`Dialog`}),`, `,(0,Q.jsx)(`code`,{children:`PopOver`}),`, `,(0,Q.jsx)(`code`,{children:`Select`}),`, `,(0,Q.jsx)(`code`,{children:`Tabs`}),`, `,(0,Q.jsx)(`code`,{children:`Toggle`}),` and `,(0,Q.jsx)(`code`,{children:`Tooltip`}),`) and style it with the tokens. You get keyboard navigation and accessibility for free.`]}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`4. Follow the same conventions`}),(0,Q.jsx)(`p`,{children:`Give it an API like the other components, so it feels familiar and is easy to move into the design system later:`}),(0,Q.jsxs)(`ul`,{children:[(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[`Accept `,(0,Q.jsx)(`code`,{children:`className`}),` and `,(0,Q.jsx)(`code`,{children:`style`}),`.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[`Use `,(0,Q.jsx)(`code`,{children:`variant`}),` and `,(0,Q.jsx)(`code`,{children:`size`}),` props with a few named options (`,(0,Q.jsx)(`code`,{children:`'default' | 'highlight'`}),`), not booleans for each look.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`p`,{children:`Give every optional prop a sensible default.`})})]}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`5. Check it before you ship it`}),(0,Q.jsxs)(`ul`,{children:[(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Theme:`}),` change the theme with `,(0,Q.jsx)(`code`,{children:`setupTheme`}),` (e.g. another `,(0,Q.jsx)(`code`,{children:`primary`}),`). Your component should follow it, like the others.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Small screens:`}),` resize the window down to mobile width.`]})}),(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`b`,{children:`Keyboard:`}),` if it's interactive, you can reach and use it with `,(0,Q.jsx)(`code`,{children:`Tab`}),`, `,(0,Q.jsx)(`code`,{children:`Enter`}),` and `,(0,Q.jsx)(`code`,{children:`Esc`}),`.`]})})]}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`6. Share it`}),(0,Q.jsxs)(`p`,{children:[`Think other projects could use it too? `,(0,Q.jsx)(`a`,{href:`https://github.com/weareredlight/redlight-ds/issues`,target:`_blank`,children:`Open an issue`}),` with what it does, a screenshot and where you're using it. If it's useful beyond your project, it can become part of the design system.`]})]})]})]})}function Pe(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Ne,{...e})}):Ne(e)}var Q;function $(){return($=e((()=>{Q=t(),a(),i(),oe(),D(),Z()})))()}$();export{Pe as default};