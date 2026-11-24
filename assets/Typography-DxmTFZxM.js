import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,o as n,s as r}from"./blocks-Dg4IttFa.js";import{t as i}from"./jsx-runtime-ATHzeHXA.js";import{i as a,r as o}from"./react-Dyi61YEg.js";import{a as s,c,d as l,i as u,l as d,r as f,s as p,t as m,u as h}from"./CodeBlock-DwIlC6M4.js";import{n as g,t as _}from"./Flex-E_iIe-3y.js";import{n as v,t as y}from"./Text-Caz4c05c.js";import{n as b,t as x}from"./sizes-CHr0IoFs.js";var S;function C(){return(C=e((()=>{S=`// Typography presets: \`@include typography.heading7;\` etc.

@mixin text($size, $weight, $line-height) {
  font-size: var(--fontSizes-#{$size});
  font-weight: var(--fontWeights-#{$weight});
  line-height: var(--lineHeights-#{$line-height});
}

@mixin heading1 { @include text(xxxlg, lg, md); }
@mixin heading2 { @include text(xxlg, lg, md); }
@mixin heading3 { @include text(xlg, lg, md); }
@mixin heading4 { @include text(lg, lg, md); }
@mixin heading5 { @include text(md, lg, md); }
@mixin heading6 { @include text(sm, md, md); }
@mixin heading7 { @include text(xsm, md, md); }

@mixin subHeading {
  @include text(xsm, lg, md);
  text-transform: uppercase;
}

@mixin subHeadingSmall {
  @include text(xxsm, md, sm);
  text-transform: uppercase;
}

@mixin paragraph { @include text(md, n, xlg); }
@mixin textBlock { @include text(sm, n, lg); }
@mixin microCopy { @include text(xsm, n, lg); }
`})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{w=`rl-Typography-group`,T=`rl-Typography-textType`,E=`rl-Typography-details`,D=`rl-Typography-values`,O=`rl-Typography-usage`,k={group:w,textType:T,details:E,values:D,usage:O}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{t(),v(),g(),l(),C(),x(),A(),j=i(),M={},S.replace(/@mixin (\w+)\s*\{\s*@include text\((\w+),\s*(\w+),\s*(\w+)\);([^}]*)\}/g,(e,t,n,r,i,a)=>(M[t]={size:n,weight:r,lineHeight:i,uppercase:a.includes(`uppercase`)},``)),N=e=>`${parseFloat(e)*16}px`,{fontSizes:P,fontWeights:F,lineHeights:I}=b,L=[{title:`Headline`,description:`Headlines are important for establishing a visual hierarchy and guiding users through content. Use them sparingly and be consistent with font size and style. Stick to a few levels that make sense for your content and design, and support them with other design elements.`,styles:[[`h1`,`heading1`],[`h2`,`heading2`],[`h3`,`heading3`],[`h4`,`heading4`],[`h5`,`heading5`],[`h6`,`heading6`],[`h7`,`heading7`]]},{title:`Sub Heading`,description:`Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page. The regular sub heading can be used for secondary headings or to separate different sections of content; the small sub heading for tertiary headings or to add additional context to the content.`,styles:[[`subHeading`,`subHeading`],[`subHeadingSmall`,`subHeadingSmall`]]},{title:`Paragraph`,description:`Regular paragraphs are the default style for body text. Text blocks are used for longer content and secondary text. Micro copy is for small bits of text that guide users, such as labels or form instructions; keep it short and concise.`,styles:[[`paragraph`,`paragraph`],[`textBlock`,`textBlock`],[`microCopy`,`microCopy`]]}],R=({label:e,value:t,token:n})=>(0,j.jsxs)(`span`,{className:`micro-copy`,children:[`${e}: `,(0,j.jsx)(`span`,{className:`micro-copy value`,children:t}),(0,j.jsx)(`span`,{className:`micro-copy`,children:` (${n})`})]}),z=()=>(0,j.jsx)(j.Fragment,{children:L.map(e=>(0,j.jsxs)(`div`,{className:k.group,children:[(0,j.jsx)(`h3`,{children:e.title}),(0,j.jsx)(`p`,{children:e.description}),(0,j.jsx)(_,{direction:`column`,gap:`xxsm`,children:e.styles.map(([e,t])=>{let n=M[t];return(0,j.jsxs)(`div`,{className:k.textType,children:[(0,j.jsxs)(_,{direction:`column`,align:`start`,children:[(0,j.jsx)(r,{children:(0,j.jsx)(y,{variant:e,color:`neutral900`,children:`We are RedLight`})}),(0,j.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),(0,j.jsxs)(`div`,{className:k.details,children:[(0,j.jsxs)(_,{gap:`lg`,justify:`start`,wrap:!0,className:k.values,children:[(0,j.jsx)(R,{label:`Font size`,value:N(P[n.size]),token:`--fontSizes-${n.size}`}),(0,j.jsx)(R,{label:`Weight`,value:String(F[n.weight]),token:`--fontWeights-${n.weight}`}),(0,j.jsx)(R,{label:`Line height`,value:I[n.lineHeight],token:`--lineHeights-${n.lineHeight}`}),n.uppercase&&(0,j.jsx)(`span`,{className:`micro-copy`,children:`Uppercase`})]}),(0,j.jsxs)(_,{gap:`lg`,justify:`start`,wrap:!0,className:k.usage,children:[(0,j.jsxs)(_,{gap:`xxxsm`,children:[(0,j.jsx)(`p`,{children:`Text component:`}),(0,j.jsx)(p,{size:`small`,children:`variant='${e}'`})]}),(0,j.jsxs)(_,{gap:`xxxsm`,children:[(0,j.jsx)(`p`,{children:`SCSS:`}),(0,j.jsx)(p,{size:`small`,children:`@include typography.${t};`})]})]})]})]},e)})})]},e.title))})})))()}var V,H,U;function W(){return(W=e((()=>{V=`import { Text } from '@weareredlight/design-system'

<Text variant='h1'>We are RedLight</Text>
<Text variant='textBlock' color='neutral700'>Body text</Text>`,H=`@use '@weareredlight/design-system/src/styles/typography';

.title {
  @include typography.heading3;
}`,U=`/* theme.css, imported after style.css. The design system sets Roboto on
   every element (*), and html * takes over from it */
html * {
  font-family: 'Inter', sans-serif;
}`})))()}function G(e){let t={p:`p`,...a(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(n,{title:`Style Guides/Typography`}),`
`,(0,q.jsxs)(u,{children:[(0,q.jsxs)(c,{style:{background:`#493DB2`},children:[(0,q.jsx)(`h2`,{children:`Typography`}),(0,q.jsx)(h,{})]}),(0,q.jsxs)(s,{children:[(0,q.jsx)(`p`,{children:`Typography is the art and technique of organising "type" to make written language legible and appealing when displayed. The choice of typography is fundamental not only to the appearance of a product or service, but also to the impact of what it is intended to communicate. By carefully considering this process, we ensure consistency and clarity in communicating information to users.`}),(0,q.jsx)(`br`,{}),(0,q.jsx)(d,{}),(0,q.jsx)(`br`,{}),(0,q.jsx)(z,{}),(0,q.jsx)(`br`,{}),(0,q.jsx)(d,{}),(0,q.jsx)(`br`,{}),(0,q.jsx)(`span`,{className:`sub-heading`,children:`How to Use`}),(0,q.jsxs)(`p`,{children:[`Use the text hierarchy through the `,(0,q.jsx)(`code`,{children:`Text`}),` component:`]}),(0,q.jsx)(m,{code:V,language:`tsx`}),(0,q.jsx)(`p`,{children:`Or, in your own SCSS files, through the typography mixins:`}),(0,q.jsx)(m,{code:H,language:`scss`}),(0,q.jsx)(`p`,{children:(0,q.jsxs)(t.p,{children:[`Each style is built from theme tokens (`,(0,q.jsx)(`code`,{children:`--fontSizes-*`}),`, `,(0,q.jsx)(`code`,{children:`--fontWeights-*`}),`, `,(0,q.jsx)(`code`,{children:`--lineHeights-*`}),`),
so changing a token in your theme file updates every style that uses it.`]})}),(0,q.jsx)(`br`,{}),(0,q.jsx)(`span`,{className:`sub-heading`,children:`Font`}),(0,q.jsxs)(`p`,{children:[`The default font is `,(0,q.jsx)(`b`,{children:`Roboto`}),` (loaded by `,(0,q.jsx)(`code`,{children:`style.css`}),`). To use another font, load it, then set it in your theme file:`]}),(0,q.jsx)(m,{code:U,language:`css`})]})]})]})}function K(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;function J(){return(J=e((()=>{q=i(),o(),t(),l(),f(),B(),W()})))()}J();export{K as default};