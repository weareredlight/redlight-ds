import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,o as n}from"./blocks-Dg4IttFa.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./createLucideIcon-CqFL7BJl.js";import{n as c,t as ee}from"./calendar-days-C1Bf3Q7g.js";import{a as l,d as u,l as te,n as ne,o as re,r as ie,t as ae,u as oe}from"./document-Buj6nzUp.js";import{n as se,t as ce}from"./pencil-D50Vxehr.js";import{n as le,t as d}from"./Button-DbaMQRsx.js";import{n as ue,t as de}from"./users-BbalUWLq.js";import{i as fe,n as f}from"./utils-BhygqQhJ.js";import{n as pe,t as p}from"./Flex-LApopfUf.js";import{n as me,t as m}from"./Text-BthGhJWZ.js";import{n as he,t as ge}from"./Avatar-BiCsgYgW.js";import{n as _e,t as ve}from"./Pill-DzNvv5wG.js";import{n as ye,t as be}from"./PopOver-Ld3kGYwq.js";import{n as xe,t as Se}from"./Tag-Du4H3vaj.js";import{n as Ce,t as we}from"./Tooltip-DM2JdGd9.js";var h,g;function _(){return(_=e((()=>{o(),h={name:`archive`,size:24,node:[[`rect`,{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`,key:`1wp1u1`}],[`path`,{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`,key:`1s80jp`}],[`path`,{d:`M10 12h4`,key:`a56b0p`}]]},h.node,g=s(h)})))()}var v,y;function b(){return(b=e((()=>{o(),v={name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},v.node,y=s(v)})))()}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{x=`import { Button, Flex, Tag, Text } from '@weareredlight/design-system'

// A page header made only of existing components
const ProjectHeader = ({ name, status, onEdit }: ProjectHeaderProps) => (
  <Flex justify='spaceBetween' align='center' gap='sm'>
    <Flex align='center' gap='xxsm'>
      <Text variant='h4' color='neutral800'>{name}</Text>
      <Tag>{status}</Tag>
    </Flex>
    <Button variant='secondary' onClick={onEdit}>Edit</Button>
  </Flex>
)`,S=`import { EllipsisIcon } from 'lucide-react'
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

export default ProjectCard`,C=`@use '@weareredlight/design-system/src/styles/typography';
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

// ....members, .more and .dueDate`,w=`<ProjectCard
  name='Website redesign'
  description='New landing page, pricing and blog, all built with the design system.'
  status='onTrack'
  progress={68}
  members={[{ name: 'Ana Costa' }, { name: 'Rui Silva' }, /* ... */]}
  dueDate='30 Nov 2026'
  onEdit={openEditor}
  onArchive={archiveProject}
/>`,T=`import type { CSSProperties, ReactNode } from 'react'
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

export default StatCard`,E=`@use '@weareredlight/design-system/src/styles/typography';
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
}`,D=`import { UsersIcon } from 'lucide-react'

<StatCard label='Active users' value='1,284' icon={<UsersIcon size={16} />} />
<StatCard label='Revenue' value='€12.4k' variant='highlight' />`})))()}var k,A,j,M,N,P,Te,F,I,L,R,z,B,V,H,U,W,G;function Ee(){return(Ee=e((()=>{k=`rl-CustomComponents-preview`,A=`rl-CustomComponents-card`,j=`rl-CustomComponents-label`,M=`rl-CustomComponents-value`,N=`rl-CustomComponents-highlight`,P=`rl-CustomComponents-projectGrid`,Te=`rl-CustomComponents-projectCard`,F=`rl-CustomComponents-menuButton`,I=`rl-CustomComponents-progressLabel`,L=`rl-CustomComponents-track`,R=`rl-CustomComponents-bar`,z=`rl-CustomComponents-atRisk`,B=`rl-CustomComponents-done`,V=`rl-CustomComponents-members`,H=`rl-CustomComponents-member`,U=`rl-CustomComponents-more`,W=`rl-CustomComponents-dueDate`,G={preview:k,card:A,label:j,value:M,highlight:N,projectGrid:P,projectCard:Te,menuButton:F,progressLabel:I,track:L,bar:R,atRisk:z,done:B,members:V,member:H,more:U,dueDate:W}})))()}var K,q,De,J,Y,Oe,ke,X,Ae,Z,je;function Q(){return(Q=e((()=>{_(),c(),b(),se(),ue(),he(),le(),_e(),ye(),xe(),me(),Ce(),pe(),fe(),Ee(),K=r(),q=({children:e})=>(0,K.jsx)(`div`,{className:f(`sb-unstyled`,G.preview),children:e}),De=()=>(0,K.jsx)(q,{children:(0,K.jsxs)(p,{justify:`spaceBetween`,align:`center`,gap:`sm`,children:[(0,K.jsxs)(p,{align:`center`,gap:`xxsm`,children:[(0,K.jsx)(m,{variant:`h4`,color:`neutral800`,children:`Website redesign`}),(0,K.jsx)(Se,{children:`In progress`})]}),(0,K.jsx)(d,{variant:`secondary`,onClick:()=>{},children:`Edit`})]})}),J={onTrack:{label:`On track`,variant:`default`},atRisk:{label:`At risk`,variant:`error`},done:{label:`Done`,variant:`success`}},Y=3,Oe=()=>(0,K.jsx)(ce,{}),ke=()=>(0,K.jsx)(g,{}),X=({name:e,description:t,status:n,progress:r,members:i,dueDate:a,onEdit:o,onArchive:s,className:c,style:l})=>{let u=i.length-Y;return(0,K.jsxs)(`div`,{className:f(G.projectCard,G[n],c),style:l,children:[(0,K.jsxs)(p,{justify:`spaceBetween`,align:`center`,gap:`xsm`,children:[(0,K.jsxs)(p,{align:`center`,gap:`xxsm`,wrap:!0,children:[(0,K.jsx)(m,{variant:`h5`,color:`neutral900`,children:e}),(0,K.jsx)(ve,{variant:J[n].variant,children:J[n].label})]}),(0,K.jsx)(be,{side:`bottom`,align:`end`,trigger:(0,K.jsx)(`button`,{type:`button`,className:G.menuButton,"aria-label":`Project options`,children:(0,K.jsx)(y,{size:16})}),children:(0,K.jsxs)(p,{direction:`column`,gap:`xsm`,children:[(0,K.jsx)(m,{variant:`h6`,color:`neutral800`,children:`Project options`}),(0,K.jsxs)(p,{gap:`xxsm`,style:{width:`100%`},children:[(0,K.jsx)(d,{variant:`secondary`,iconComponent:Oe,iconPosition:`left`,onClick:o,fullWidth:!0,children:`Edit`}),(0,K.jsx)(d,{variant:`danger`,iconComponent:ke,iconPosition:`left`,onClick:s,fullWidth:!0,children:`Archive`})]})]})})]}),(0,K.jsx)(m,{variant:`textBlock`,color:`neutral700`,children:t}),(0,K.jsxs)(p,{direction:`column`,align:`stretch`,gap:`xxxsm`,children:[(0,K.jsxs)(p,{justify:`spaceBetween`,className:G.progressLabel,children:[(0,K.jsx)(`span`,{children:`Progress`}),(0,K.jsx)(`span`,{children:`${r}%`})]}),(0,K.jsx)(`div`,{className:G.track,children:(0,K.jsx)(`div`,{className:G.bar,style:{width:`${r}%`}})})]}),(0,K.jsxs)(p,{justify:`spaceBetween`,align:`center`,gap:`xsm`,wrap:!0,children:[(0,K.jsxs)(p,{align:`center`,className:G.members,children:[i.slice(0,Y).map(e=>(0,K.jsx)(we,{content:e.name,side:`top`,children:(0,K.jsx)(ge,{size:`small`,name:e.name,url:e.url,className:G.member})},e.name)),u>0&&(0,K.jsx)(`span`,{className:G.more,children:`+${u}`})]}),(0,K.jsxs)(p,{align:`center`,gap:`xxxsm`,className:G.dueDate,children:[(0,K.jsx)(ee,{size:14}),a]})]})]})},Ae=()=>(0,K.jsx)(q,{children:(0,K.jsxs)(`div`,{className:G.projectGrid,children:[(0,K.jsx)(X,{name:`Website redesign`,description:`New landing page, pricing and blog, all built with the design system.`,status:`onTrack`,progress:68,members:[{name:`Ana Costa`},{name:`Rui Silva`},{name:`Marta Lopes`},{name:`João Dias`},{name:`Inês Faria`}],dueDate:`30 Nov 2026`,onEdit:()=>{},onArchive:()=>{}}),(0,K.jsx)(X,{name:`Mobile app`,description:`Native app for bookings, with offline mode and push notifications.`,status:`atRisk`,progress:35,members:[{name:`Pedro Alves`},{name:`Sofia Reis`}],dueDate:`12 Nov 2026`,onEdit:()=>{},onArchive:()=>{}}),(0,K.jsx)(X,{name:`Brand guidelines`,description:`Logo, colors and tone of voice, documented for the whole team.`,status:`done`,progress:100,members:[{name:`Marta Lopes`},{name:`Ana Costa`},{name:`Tiago Melo`}],dueDate:`2 Oct 2026`,onEdit:()=>{},onArchive:()=>{}})]})}),Z=({label:e,value:t,icon:n,variant:r=`default`,className:i,style:a})=>(0,K.jsxs)(`div`,{className:f(G.card,G[r],i),style:a,children:[(0,K.jsxs)(p,{align:`center`,gap:`xxsm`,className:G.label,children:[n,e]}),(0,K.jsx)(`span`,{className:G.value,children:t})]}),je=()=>(0,K.jsx)(q,{children:(0,K.jsxs)(p,{gap:`lg`,wrap:!0,children:[(0,K.jsx)(Z,{label:`Active users`,value:`1,284`,icon:(0,K.jsx)(de,{size:16})}),(0,K.jsx)(Z,{label:`Revenue`,value:`€12.4k`,variant:`highlight`})]})})})))()}function Me(e){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(n,{title:`Custom Components`}),`
`,(0,$.jsxs)(l,{children:[(0,$.jsxs)(te,{style:{background:`#2F6FDE`},children:[(0,$.jsx)(`h2`,{children:`Custom Components`}),(0,$.jsx)(u,{})]}),(0,$.jsxs)(re,{children:[(0,$.jsx)(`h3`,{children:`Can't find the component you need?`}),(0,$.jsx)(`p`,{children:`No problem. The design system doesn't try to cover every case, and it gives you everything you need to build your own: tokens, typography, layout and icons. Follow these steps, and your component will look like it was always part of it.`}),(0,$.jsx)(`br`,{}),(0,$.jsx)(oe,{}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`1. Make sure it doesn't exist yet`}),(0,$.jsxs)(`p`,{children:[`Look through the `,(0,$.jsx)(`b`,{children:`Components`}),` section in the sidebar. A component may go by a different name than you expect: a badge is a `,(0,$.jsx)(`code`,{children:`Pill`}),` or a `,(0,$.jsx)(`code`,{children:`Tag`}),`, a confirmation popup is a `,(0,$.jsx)(`code`,{children:`Dialog`}),`, a dropdown is a `,(0,$.jsx)(`code`,{children:`PopOver`}),` or a `,(0,$.jsx)(`code`,{children:`Select`}),`, a switch is a `,(0,$.jsx)(`code`,{children:`Toggle`}),`. The `,(0,$.jsx)(`a`,{href:`https://www.figma.com/design/7NvnDUApwUXtyRPNiLWQ9l/Documentation?node-id=238-4773`,target:`_blank`,children:`Documentation`}),` file in Figma has them all too.`]}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`2. Try to build it from existing components`}),(0,$.jsxs)(`p`,{children:[`Most "new" components are existing ones put together. Check each component's props and variants first, then combine them with `,(0,$.jsx)(`code`,{children:`Flex`}),` for the layout. Every component also accepts `,(0,$.jsx)(`code`,{children:`className`}),` and `,(0,$.jsx)(`code`,{children:`style`}),` for small adjustments:`]}),(0,$.jsx)(De,{}),(0,$.jsx)(ne,{code:x,language:`tsx`}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`3. Build it with the design system's styles`}),(0,$.jsx)(`p`,{children:`If nothing fits, create it in your project. Write the styles with the same building blocks the components use, and never with hard-coded values:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Colors, spacing, sizes, radii and shadows:`}),` CSS variables like `,(0,$.jsx)(`code`,{children:`var(--colors-primary)`}),` and `,(0,$.jsx)(`code`,{children:`var(--space-xxsm)`}),`. See `,(0,$.jsx)(`a`,{href:`./?path=/docs/style-guides-colors--how-to-use`,target:`_top`,children:`Colors`}),` and `,(0,$.jsx)(`a`,{href:`./?path=/docs/style-guides-spacing-sizes--how-to-use`,target:`_top`,children:`Spacing & Sizes`}),`.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Text:`}),` the `,(0,$.jsx)(`code`,{children:`Text`}),` component, or the typography mixins in your SCSS. See `,(0,$.jsx)(`a`,{href:`./?path=/docs/style-guides-typography--how-to-use`,target:`_top`,children:`Typography`}),`.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Layout:`}),` `,(0,$.jsx)(`code`,{children:`Flex`}),`, and the `,(0,$.jsx)(`code`,{children:`media.query`}),` mixin for breakpoints.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Icons:`}),` Lucide, the same library as the components. See `,(0,$.jsx)(`a`,{href:`./?path=/docs/style-guides-icons--how-to-use`,target:`_top`,children:`Icons`}),`.`]})})]}),(0,$.jsxs)(`p`,{children:[`For example, a project card. It combines `,(0,$.jsx)(`code`,{children:`Avatar`}),`, `,(0,$.jsx)(`code`,{children:`Tooltip`}),`, `,(0,$.jsx)(`code`,{children:`Pill`}),`, `,(0,$.jsx)(`code`,{children:`PopOver`}),`, `,(0,$.jsx)(`code`,{children:`Button`}),` and `,(0,$.jsx)(`code`,{children:`Text`}),` with its own progress bar and menu button, and every color, space and text style comes from the design system. Hover the avatars and open the menu:`]}),(0,$.jsx)(Ae,{}),(0,$.jsx)(ie,{tabs:[{label:`ProjectCard.tsx`,code:S,language:`tsx`},{label:`styles.module.scss`,code:C,language:`scss`},{label:`Usage`,code:w,language:`tsx`}]}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`p`,{children:`Or something simpler, like a stat card for a dashboard:`}),(0,$.jsx)(je,{}),(0,$.jsx)(ie,{tabs:[{label:`StatCard.tsx`,code:T,language:`tsx`},{label:`styles.module.scss`,code:E,language:`scss`},{label:`Usage`,code:D,language:`tsx`}]}),(0,$.jsxs)(`p`,{children:[`Building something interactive, like a dropdown menu or an accordion? Don't write the behavior from scratch: use a `,(0,$.jsx)(`a`,{href:`https://www.radix-ui.com/primitives`,target:`_blank`,children:`Radix primitive`}),` (the design system uses them for `,(0,$.jsx)(`code`,{children:`Dialog`}),`, `,(0,$.jsx)(`code`,{children:`PopOver`}),`, `,(0,$.jsx)(`code`,{children:`Select`}),`, `,(0,$.jsx)(`code`,{children:`Tabs`}),`, `,(0,$.jsx)(`code`,{children:`Toggle`}),` and `,(0,$.jsx)(`code`,{children:`Tooltip`}),`) and style it with the tokens. You get keyboard navigation and accessibility for free.`]}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`4. Follow the same conventions`}),(0,$.jsx)(`p`,{children:`Give it an API like the other components, so it feels familiar and is easy to move into the design system later:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[`Accept `,(0,$.jsx)(`code`,{children:`className`}),` and `,(0,$.jsx)(`code`,{children:`style`}),`.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[`Use `,(0,$.jsx)(`code`,{children:`variant`}),` and `,(0,$.jsx)(`code`,{children:`size`}),` props with a few named options (`,(0,$.jsx)(`code`,{children:`'default' | 'highlight'`}),`), not booleans for each look.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsx)(`p`,{children:`Give every optional prop a sensible default.`})})]}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`5. Check it before you ship it`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Theme:`}),` change the theme with `,(0,$.jsx)(`code`,{children:`setupTheme`}),` (e.g. another `,(0,$.jsx)(`code`,{children:`primary`}),`). Your component should follow it, like the others.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Small screens:`}),` resize the window down to mobile width.`]})}),(0,$.jsx)(`li`,{children:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:`Keyboard:`}),` if it's interactive, you can reach and use it with `,(0,$.jsx)(`code`,{children:`Tab`}),`, `,(0,$.jsx)(`code`,{children:`Enter`}),` and `,(0,$.jsx)(`code`,{children:`Esc`}),`.`]})})]}),(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`sub-heading`,children:`6. Share it`}),(0,$.jsxs)(`p`,{children:[`Think other projects could use it too? `,(0,$.jsx)(`a`,{href:`https://github.com/weareredlight/redlight-ds/issues`,target:`_blank`,children:`Open an issue`}),` with what it does, a screenshot and where you're using it. If it's useful beyond your project, it can become part of the design system.`]})]})]})]})}function Ne(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Me,{...e})}):Me(e)}var $;function Pe(){return(Pe=e((()=>{$=r(),a(),t(),ae(),O(),Q()})))()}Pe();export{Ne as default};