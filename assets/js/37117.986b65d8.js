"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37117],{95988:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(1244),n=a(27378),i=a(40624),s=a(40684),l=a(58357),o=a(36641),c=a(99213),m=a(3620),d=a(8862);function u(e){var t=(0,m.TH)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}const h={sidebar:"sidebar_CLW8",sidebarItemTitle:"sidebarItemTitle_DQfJ",sidebarItemList:"sidebarItemList_rvuc",sidebarItem:"sidebarItem__RMN",sidebarItemLink:"sidebarItemLink_Ony9",sidebarItemLinkActive:"sidebarItemLinkActive_MJ75"};var g=a(24246);function v(e){var t=e.sidebar,a=u(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(h.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var p=a(63471);function x(e){var t=u(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function j(e){return(0,g.jsx)(p.Zo,{component:x,props:e})}function b(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(v,{sidebar:t}):null}var f=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,n=e.children,l=(0,r.Z)(e,f),o=t&&t.items.length>0;return(0,g.jsx)(s.Z,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})}))}},25532:(e,t,a)=>{a.d(t,{Z:()=>M});a(27378);var r=a(40624),n=a(70412),i=a(98948),s=a(24246);function l(e){var t,a,r=e.children,l=e.className,o=(0,n.C)(),c=o.frontMatter,m=o.assets,d=o.metadata.description,u=(0,i.C)().withBaseUrl,h=null!=(t=m.image)?t:c.image,g=null!=(a=c.keywords)?a:[];return(0,s.jsxs)("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[d&&(0,s.jsx)("meta",{itemProp:"description",content:d}),h&&(0,s.jsx)("link",{itemProp:"image",href:u(h,{absolute:!0})}),g.length>0&&(0,s.jsx)("meta",{itemProp:"keywords",content:g.join(",")}),r]})}var o=a(36641);const c={title:"title_Kdtz"};function m(e){var t=e.className,a=(0,n.C)(),i=a.metadata,l=a.isBlogPostPage,m=i.permalink,d=i.title,u=l?"h1":"h2";return(0,s.jsx)(u,{className:(0,r.Z)(c.title,t),itemProp:"headline",children:l?d:(0,s.jsx)(o.Z,{itemProp:"url",to:m,children:d})})}var d=a(99213),u=a(40689);const h={container:"container_iZB2"};function g(e){var t,a=e.readingTime,r=(t=(0,u.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,s.jsx)(s.Fragment,{children:r(a)})}function v(e){var t=e.date,a=e.formattedDate;return(0,s.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function x(e){var t=e.className,a=(0,n.C)().metadata,i=a.date,l=a.formattedDate,o=a.readingTime;return(0,s.jsxs)("div",{className:(0,r.Z)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(v,{date:i,formattedDate:l}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(g,{readingTime:o})]})]})}function j(e){return e.href?(0,s.jsx)(o.Z,Object.assign({},e)):(0,s.jsx)(s.Fragment,{children:e.children})}function b(e){var t=e.author,a=e.className,n=t.name,i=t.title,l=t.url,o=t.imageURL,c=t.email,m=l||c&&"mailto:"+c||void 0;return(0,s.jsxs)("div",{className:(0,r.Z)("avatar margin-bottom--sm",a),children:[o&&(0,s.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,s.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,s.jsx)("div",{className:"avatar__name",children:(0,s.jsx)(j,{href:m,itemProp:"url",children:(0,s.jsx)("span",{itemProp:"name",children:n})})}),i&&(0,s.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:i})]})]})}const f={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};function N(e){var t=e.className,a=(0,n.C)(),i=a.metadata.authors,l=a.assets;if(0===i.length)return null;var o=i.every((function(e){return!e.name}));return(0,s.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?f.imageOnlyAuthorRow:"row",t),children:i.map((function(e,t){var a;return(0,s.jsx)("div",{className:(0,r.Z)(!o&&"col col--6",o?f.imageOnlyAuthorCol:f.authorCol),children:(0,s.jsx)(b,{author:Object.assign({},e,{imageURL:null!=(a=l.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function _(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(m,{}),(0,s.jsx)(x,{}),(0,s.jsx)(N,{})]})}var P=a(51721),Z=a(44972);function k(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage;return(0,s.jsx)("div",{id:i?P.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody",children:(0,s.jsx)(Z.Z,{children:t})})}var C=a(34565),T=a(28349),w=a(1244),I=["blogPostTitle"];function L(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function F(e){var t=e.blogPostTitle,a=(0,w.Z)(e,I);return(0,s.jsx)(o.Z,Object.assign({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,s.jsx)(L,{})}))}const y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_JgJa"};function B(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,m=!a&&c,d=i.length>0;return d||m||o?(0,s.jsxs)("footer",{className:(0,r.Z)("row docusaurus-mt-lg",a&&y.blogPostFooterDetailsFull),children:[d&&(0,s.jsx)("div",{className:(0,r.Z)("col",{"col--9":m}),children:(0,s.jsx)(T.Z,{tags:i})}),a&&o&&(0,s.jsx)("div",{className:"col margin-top--sm",children:(0,s.jsx)(C.Z,{editUrl:o})}),m&&(0,s.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":d}),children:(0,s.jsx)(F,{blogPostTitle:l,to:t.permalink})})]}):null}function M(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,s.jsxs)(l,{className:(0,r.Z)(i,a),children:[(0,s.jsx)(_,{}),(0,s.jsx)(k,{children:t}),(0,s.jsx)(B,{})]})}},34565:(e,t,a)=>{a.d(t,{Z:()=>u});a(27378);var r=a(99213),n=a(75484),i=a(36641),s=a(1244),l=a(40624);const o={iconEdit:"iconEdit_bHB7"};var c=a(24246),m=["className"];function d(e){var t=e.className,a=(0,s.Z)(e,m);return(0,c.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true"},a,{children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function u(e){var t=e.editUrl;return(0,c.jsxs)(i.Z,{to:t,className:n.k.common.editThisPage,children:[(0,c.jsx)(d,{}),(0,c.jsx)(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},14582:(e,t,a)=>{a.d(t,{Z:()=>s});a(27378);var r=a(40624),n=a(36641),i=a(24246);function s(e){var t=e.permalink,a=e.title,s=e.subLabel,l=e.isNext;return(0,i.jsxs)(n.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},51478:(e,t,a)=>{a.d(t,{Z:()=>l});a(27378);var r=a(40624),n=a(36641);const i={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var s=a(24246);function l(e){var t=e.permalink,a=e.label,l=e.count;return(0,s.jsxs)(n.Z,{href:t,className:(0,r.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,s.jsx)("span",{children:l})]})}},28349:(e,t,a)=>{a.d(t,{Z:()=>o});a(27378);var r=a(40624),n=a(99213),i=a(51478);const s={tags:"tags_Ow0B",tag:"tag_DFxh"};var l=a(24246);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,r.Z)(s.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,a=e.permalink;return(0,l.jsx)("li",{className:s.tag,children:(0,l.jsx)(i.Z,{label:t,permalink:a})},a)}))})]})}},70412:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var r=a(27378),n=a(38219),i=a(24246),s=r.createContext(null);function l(e){var t=e.children,a=e.content,n=e.isBlogPostPage,l=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return(0,i.jsx)(s.Provider,{value:l,children:t})}function o(){var e=(0,r.useContext)(s);if(null===e)throw new n.i6("BlogPostProvider");return e}},40689:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(27378),n=a(50353),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),l}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),i=a.pluralForms.indexOf(n);return r[Math.min(i,r.length-1)]}(a,t,e)}}}}}]);