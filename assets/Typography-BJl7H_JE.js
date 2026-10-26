import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,d as r,o as i,s as a,u as o}from"./blocks-Cq2mqRDc.js";import{a as s,c,d as l,l as u,n as d,o as f,t as p,u as m}from"./document-5VP4YS3j.js";import{n as h,t as g}from"./Text-BenUHwhx.js";import{n as _,t as v}from"./Flex-CCIzD6fY.js";import{n as y,t as b}from"./sizes-CHr0IoFs.js";var x;function S(){return(S=e((()=>{x=`// Typography presets: \`@include typography.heading7;\` etc.

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
`})))()}var C,w,T,E,D,O;function k(){return(k=e((()=>{C=`rl-Typography-group`,w=`rl-Typography-textType`,T=`rl-Typography-details`,E=`rl-Typography-values`,D=`rl-Typography-usage`,O={group:C,textType:w,details:T,values:E,usage:D}})))()}var A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{a(),h(),_(),p(),S(),b(),k(),A=t(),j={},x.replace(/@mixin (\w+)\s*\{\s*@include text\((\w+),\s*(\w+),\s*(\w+)\);([^}]*)\}/g,(e,t,n,r,i,a)=>(j[t]={size:n,weight:r,lineHeight:i,uppercase:a.includes(`uppercase`)},``)),M=e=>`${parseFloat(e)*16}px`,{fontSizes:N,fontWeights:P,lineHeights:F}=y,I=[{title:`Headline`,description:`Headlines are important for establishing a visual hierarchy and guiding users through content. Use them sparingly and be consistent with font size and style. Stick to a few levels that make sense for your content and design, and support them with other design elements.`,styles:[[`h1`,`heading1`],[`h2`,`heading2`],[`h3`,`heading3`],[`h4`,`heading4`],[`h5`,`heading5`],[`h6`,`heading6`],[`h7`,`heading7`]]},{title:`Sub Heading`,description:`Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page. The regular sub heading can be used for secondary headings or to separate different sections of content; the small sub heading for tertiary headings or to add additional context to the content.`,styles:[[`subHeading`,`subHeading`],[`subHeadingSmall`,`subHeadingSmall`]]},{title:`Paragraph`,description:`Regular paragraphs are the default style for body text. Text blocks are used for longer content and secondary text. Micro copy is for small bits of text that guide users, such as labels or form instructions; keep it short and concise.`,styles:[[`paragraph`,`paragraph`],[`textBlock`,`textBlock`],[`microCopy`,`microCopy`]]}],L=({label:e,value:t,token:n})=>(0,A.jsxs)(`span`,{className:`micro-copy`,children:[`${e}: `,(0,A.jsx)(`span`,{className:`micro-copy value`,children:t}),(0,A.jsx)(`span`,{className:`micro-copy`,children:` (${n})`})]}),R=()=>(0,A.jsx)(A.Fragment,{children:I.map(e=>(0,A.jsxs)(`div`,{className:O.group,children:[(0,A.jsx)(`h3`,{children:e.title}),(0,A.jsx)(`p`,{children:e.description}),(0,A.jsx)(v,{direction:`column`,gap:`xxsm`,children:e.styles.map(([e,t])=>{let n=j[t];return(0,A.jsxs)(`div`,{className:O.textType,children:[(0,A.jsxs)(v,{direction:`column`,align:`start`,children:[(0,A.jsx)(i,{children:(0,A.jsx)(g,{variant:e,color:`neutral900`,children:`We are RedLight`})}),(0,A.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),(0,A.jsxs)(`div`,{className:O.details,children:[(0,A.jsxs)(v,{gap:`lg`,justify:`start`,wrap:!0,className:O.values,children:[(0,A.jsx)(L,{label:`Font size`,value:M(N[n.size]),token:`--fontSizes-${n.size}`}),(0,A.jsx)(L,{label:`Weight`,value:String(P[n.weight]),token:`--fontWeights-${n.weight}`}),(0,A.jsx)(L,{label:`Line height`,value:F[n.lineHeight],token:`--lineHeights-${n.lineHeight}`}),n.uppercase&&(0,A.jsx)(`span`,{className:`micro-copy`,children:`Uppercase`})]}),(0,A.jsxs)(v,{gap:`lg`,justify:`start`,wrap:!0,className:O.usage,children:[(0,A.jsxs)(v,{gap:`xxxsm`,children:[(0,A.jsx)(`p`,{children:`Text component:`}),(0,A.jsx)(c,{size:`small`,children:`variant='${e}'`})]}),(0,A.jsxs)(v,{gap:`xxxsm`,children:[(0,A.jsx)(`p`,{children:`SCSS:`}),(0,A.jsx)(c,{size:`small`,children:`@include typography.${t};`})]})]})]})]},e)})})]},e.title))})})))()}var B,V,H;function U(){return(U=e((()=>{B=`import { Text } from '@weareredlight/design-system'

<Text variant='h1'>We are RedLight</Text>
<Text variant='textBlock' color='neutral700'>Body text</Text>`,V=`@use '@weareredlight/design-system/src/styles/typography';

.title {
  @include typography.heading3;
}`,H=`setupTheme({ fontFamily: "'Inter', sans-serif" })`})))()}function W(e){let t={p:`p`,...r(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(n,{title:`Style Guides/Typography`}),`
`,(0,K.jsxs)(s,{children:[(0,K.jsxs)(u,{style:{background:`#493DB2`},children:[(0,K.jsx)(`h2`,{children:`Typography`}),(0,K.jsx)(l,{})]}),(0,K.jsxs)(f,{children:[(0,K.jsx)(`p`,{children:`Typography is the art and technique of organising "type" to make written language legible and appealing when displayed. The choice of typography is fundamental not only to the appearance of a product or service, but also to the impact of what it is intended to communicate. By carefully considering this process, we ensure consistency and clarity in communicating information to users.`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(m,{}),(0,K.jsx)(`br`,{}),(0,K.jsx)(R,{}),(0,K.jsx)(`br`,{}),(0,K.jsx)(m,{}),(0,K.jsx)(`br`,{}),(0,K.jsx)(`span`,{className:`sub-heading`,children:`How to Use`}),(0,K.jsxs)(`p`,{children:[`Use the text hierarchy through the `,(0,K.jsx)(`code`,{children:`Text`}),` component:`]}),(0,K.jsx)(d,{code:B,language:`tsx`}),(0,K.jsx)(`p`,{children:`Or, in your own SCSS files, through the typography mixins:`}),(0,K.jsx)(d,{code:V,language:`scss`}),(0,K.jsx)(`p`,{children:(0,K.jsxs)(t.p,{children:[`Each style is built from theme tokens (`,(0,K.jsx)(`code`,{children:`--fontSizes-*`}),`, `,(0,K.jsx)(`code`,{children:`--fontWeights-*`}),`, `,(0,K.jsx)(`code`,{children:`--lineHeights-*`}),`),
so changing a token with `,(0,K.jsx)(`code`,{children:`setupTheme`}),` or CSS updates every style that uses it.`]})}),(0,K.jsx)(`br`,{}),(0,K.jsx)(`span`,{className:`sub-heading`,children:`Font`}),(0,K.jsxs)(`p`,{children:[`The default font is `,(0,K.jsx)(`b`,{children:`Roboto`}),` (loaded by `,(0,K.jsx)(`code`,{children:`style.css`}),`). To use another font:`]}),(0,K.jsx)(d,{code:H,language:`tsx`})]})]})]})}function G(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;function q(){return(q=e((()=>{K=t(),o(),a(),p(),z(),U()})))()}q();export{G as default};