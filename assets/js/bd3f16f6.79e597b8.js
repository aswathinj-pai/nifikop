"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81997],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],l={id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"1_concepts/1_introduction",id:"version-v0.14.0/1_concepts/1_introduction",title:"Introduction",description:"The Konpy\u016bt\u0101ika NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of Apache NiFi clusters deployed to K8s.",source:"@site/versioned_docs/version-v0.14.0/1_concepts/1_introduction.md",sourceDirName:"1_concepts",slug:"/1_concepts/1_introduction",permalink:"/nifikop/docs/1_concepts/1_introduction",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.0/1_concepts/1_introduction.md",tags:[],version:"v0.14.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1661532850,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"version-v0.14.0/docs",next:{title:"Design Principes",permalink:"/nifikop/docs/1_concepts/2_design_principes"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Motivation",id:"motivation",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Konpy\u016bt\u0101ika NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/"},"Apache NiFi")," clusters deployed to K8s."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Apache NiFi is an open-source solution that support powerful and scalable directed graphs of data routing, transformation, and system mediation logic.\nSome of the high-level capabilities and objectives of Apache NiFi include, and some of the main features of the ",(0,i.kt)("strong",{parentName:"p"},"NiFiKop")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fine grained")," node configuration support"),(0,i.kt)("li",{parentName:"ul"},"Graceful rolling upgrade"),(0,i.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,i.kt)("strong",{parentName:"li"},"scaling")),(0,i.kt)("li",{parentName:"ul"},"Encrypted communication using SSL"),(0,i.kt)("li",{parentName:"ul"},"the provisioning of secure NiFi clusters"),(0,i.kt)("li",{parentName:"ul"},"Advanced Dataflow and user management via CRD")),(0,i.kt)("p",null,"Some of the roadmap features :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitoring via ",(0,i.kt)("strong",{parentName:"li"},"Prometheus")),(0,i.kt)("li",{parentName:"ul"},"Automatic reaction and self healing based on alerts (plugin system, with meaningful default alert plugins)"),(0,i.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,i.kt)("strong",{parentName:"li"},"scaling and rebalancing"))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"There are already some approaches to operating NiFi on Kubernetes, however, we did not find them appropriate for use in a highly dynamic environment, nor capable of meeting our needs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cetic/helm-nifi"},"Helm chart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.cloudera.com/cloudera-flow-management-goes-cloud-native-with-apache-nifi-on-red-hat-openshift-kubernetes-platform/"},"Cloudera Nifi Operator"))),(0,i.kt)("p",null,"Finally, our motivation is to build an open source solution and a community which drives the innovation and features of this operator."))}m.isMDXComponent=!0}}]);