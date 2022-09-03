"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37568],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],l={id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"1_concepts/1_introduction",id:"version-v0.6.0/1_concepts/1_introduction",title:"Introduction",description:"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of Apache NiFi clusters deployed to K8s.",source:"@site/versioned_docs/version-v0.6.0/1_concepts/1_introduction.md",sourceDirName:"1_concepts",slug:"/1_concepts/1_introduction",permalink:"/nifikop/docs/v0.6.0/1_concepts/1_introduction",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.0/1_concepts/1_introduction.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1617027075,formattedLastUpdatedAt:"Mar 29, 2021",frontMatter:{id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"version-v0.6.0/docs",next:{title:"Design Principes",permalink:"/nifikop/docs/v0.6.0/1_concepts/2_design_principes"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Motivation",id:"motivation",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of ",(0,a.kt)("a",{parentName:"p",href:"https://nifi.apache.org/"},"Apache NiFi")," clusters deployed to K8s."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Apache NiFi is an open-source solution that support powerful and scalable directed graphs of data routing, transformation, and system mediation logic.\nSome of the high-level capabilities and objectives of Apache NiFi include, and some of the main features of the ",(0,a.kt)("strong",{parentName:"p"},"NiFiKop")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fine grained")," node configuration support"),(0,a.kt)("li",{parentName:"ul"},"Graceful rolling upgrade"),(0,a.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,a.kt)("strong",{parentName:"li"},"scaling")),(0,a.kt)("li",{parentName:"ul"},"Encrypted communication using SSL"),(0,a.kt)("li",{parentName:"ul"},"the provisioning of secure NiFi clusters"),(0,a.kt)("li",{parentName:"ul"},"Advanced Dataflow and user management via CRD")),(0,a.kt)("p",null,"Some of the roadmap features :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitoring via ",(0,a.kt)("strong",{parentName:"li"},"Prometheus")),(0,a.kt)("li",{parentName:"ul"},"Automatic reaction and self healing based on alerts (plugin system, with meaningful default alert plugins)"),(0,a.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,a.kt)("strong",{parentName:"li"},"scaling and rebalancing"))),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"At ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.orange.com/fr/accueil/"},"Orange")," we are building some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Orange-OpenSource?utf8=%E2%9C%93&q=operator&type=&language="},"Kubernetes operator"),", that operate NiFi and Cassandra clusters (among other types) for our business cases."),(0,a.kt)("p",null,"There are already some approaches to operating NiFi on Kubernetes, however, we did not find them appropriate for use in a highly dynamic environment, nor capable of meeting our needs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cetic/helm-nifi"},"Helm chart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.cloudera.com/cloudera-flow-management-goes-cloud-native-with-apache-nifi-on-red-hat-openshift-kubernetes-platform/"},"Cloudera Nifi Operator"))),(0,a.kt)("p",null,"Finally, our motivation is to build an open source solution and a community which drives the innovation and features of this operator."))}m.isMDXComponent=!0}}]);