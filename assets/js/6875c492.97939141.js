"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48610],{20013:(e,t,n)=>{n.d(t,{Z:()=>r});n(27378);var a=n(99213),s=n(14582),i=n(24246);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},2134:(e,t,n)=>{n.d(t,{Z:()=>r});n(27378);var a=n(70412),s=n(25532),i=n(24246);function r(e){var t=e.items,n=e.component,r=void 0===n?s.Z:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(a.n,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},41071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(27378);var a=n(40624),s=n(99213),i=n(40689),r=n(1123),l=n(75484),o=n(81884),c=n(95988),g=n(20013),d=n(60505),u=n(2134),h=n(33873),p=n(1999),m=n(24246);function x(e){var t,n=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=x(e.tag);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:t}),(0,m.jsx)(d.Z,{tag:"blog_tags_posts"})]})}function b(e){var t=e.tag,n=e.items,a=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(g.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(b,Object.assign({},e))]})}},33873:(e,t,n)=>{n.d(t,{Z:()=>h});n(27378);var a=n(40624),s=n(99213),i=n(7092),r=n(24246);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(75484),d=n(458);function u(e){var t=e.className;return(0,r.jsx)(d.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,g.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,Object.assign({},e))]})}}}]);