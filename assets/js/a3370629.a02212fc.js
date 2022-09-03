"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[99756],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(25773),a=n(30808),r=(n(27378),n(35318)),o=["components"],l={id:"2_design_principes",title:"Design Principes",sidebar_label:"Design Principes"},s=void 0,c={unversionedId:"1_concepts/2_design_principes",id:"version-v0.9.0/1_concepts/2_design_principes",title:"Design Principes",description:"Pod level management",source:"@site/versioned_docs/version-v0.9.0/1_concepts/2_design_principes.md",sourceDirName:"1_concepts",slug:"/1_concepts/2_design_principes",permalink:"/nifikop/docs/v0.9.0/1_concepts/2_design_principes",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.9.0/1_concepts/2_design_principes.md",tags:[],version:"v0.9.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1648022160,formattedLastUpdatedAt:"Mar 23, 2022",frontMatter:{id:"2_design_principes",title:"Design Principes",sidebar_label:"Design Principes"},sidebar:"version-v0.9.0/docs",previous:{title:"Introduction",permalink:"/nifikop/docs/v0.9.0/1_concepts/1_introduction"},next:{title:"Features",permalink:"/nifikop/docs/v0.9.0/1_concepts/3_features"}},p={},u=[{value:"Pod level management",id:"pod-level-management",level:2},{value:"Dataflow Lifecycle management",id:"dataflow-lifecycle-management",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pod-level-management"},"Pod level management"),(0,r.kt)("p",null,"NiFi is a stateful application. The first piece of the puzzle is the Node, which is a simple server capable of createing/forming a cluster with other Nodes. Every Node has his own ",(0,r.kt)("strong",{parentName:"p"},"unique")," configuration which differs slightly from all others."),(0,r.kt)("p",null,"All NiFi on Kubernetes setup use ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet")," to create a NiFi Cluster. Just to quickly recap from the K8s docs:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"StatefulSet manages the deployment and scaling of a set of Pods, and provide guarantees about their ordering and uniqueness. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains sticky identities for each of its Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that is maintained across any rescheduling.")),(0,r.kt)("p",null,"How does this looks from the perspective of Apache NiFi ?"),(0,r.kt)("p",null,"With StatefulSet we get :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unique Node IDs generated during Pod startup"),(0,r.kt)("li",{parentName:"ul"},"networking between Nodes with headless services"),(0,r.kt)("li",{parentName:"ul"},"unique Persistent Volumes for Nodes")),(0,r.kt)("p",null,"Using StatefulSet we ",(0,r.kt)("strong",{parentName:"p"},"lose"),"  the ability to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"modify the configuration of unique Nodes"),(0,r.kt)("li",{parentName:"ul"},"remove a specific Node from a cluster (StatefulSet always removes the most recently created Node)"),(0,r.kt)("li",{parentName:"ul"},"use multiple, different Persistent Volumes for each Node")),(0,r.kt)("p",null,"The NiFi Operator uses ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," Pods, ConfigMaps, and PersistentVolumeClaims, instead of StatefulSet (based on the design used by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/kafka-operator"},"Banzai Cloud Kafka Operator"),").\nUsing these resources allows us to build an Operator which is better suited to NiFi."),(0,r.kt)("p",null,"With the NiFi operator we can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"modify the configuration of unique Nodes"),(0,r.kt)("li",{parentName:"ul"},"remove specific Nodes from clusters"),(0,r.kt)("li",{parentName:"ul"},"use multiple Persistent Volumes for each Node")),(0,r.kt)("h2",{id:"dataflow-lifecycle-management"},"Dataflow Lifecycle management"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.9.0/1_concepts/3_features#dataflow-lifecycle-management-via-crd"},"Dataflow Lifecycle management feature")," introduces 3 new CRDs :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiRegistryClient :")," Allowing you to declare a ",(0,r.kt)("a",{parentName:"li",href:"https://nifi.apache.org/docs/nifi-registry-docs/html/getting-started.html#connect-nifi-to-the-registry"},"NiFi registry client"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiParameterContext :")," Allowing you to create parameter context, with two kinds of parameters, a simple ",(0,r.kt)("inlineCode",{parentName:"li"},"map[string]string")," for non-sensitive parameters and a ",(0,r.kt)("inlineCode",{parentName:"li"},"list of secrets")," which contains sensitive parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiDataflow :")," Allowing you to declare a Dataflow based on a ",(0,r.kt)("inlineCode",{parentName:"li"},"NiFiRegistryClient")," and optionally a ",(0,r.kt)("inlineCode",{parentName:"li"},"ParameterContext"),", which will be deployed and managed by the operator on the ",(0,r.kt)("inlineCode",{parentName:"li"},"targeted NiFi cluster"),".")),(0,r.kt)("p",null,"The following diagram shows the interactions between all the components : "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataflow lifecycle management schema",src:n(58643).Z,width:"1123",height:"1101"})),(0,r.kt)("p",null,"With each CRD comes a new controller, with a reconcile loop : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiRegistryClient's controller :")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NiFi registry client&#39;s reconcile loop",src:n(74219).Z,width:"682",height:"642"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiParameterContext's controller :")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NiFi parameter context&#39;s reconcile loop",src:n(34753).Z,width:"922",height:"829"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NiFiDataflow's controller :")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NiFi dataflow&#39;s reconcile loop",src:n(52614).Z,width:"3146",height:"4117"})))}m.isMDXComponent=!0},58643:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dataflow_lifecycle_management_schema-e39196d2242598106229e66f18e8826d.jpg"},52614:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dataflow_reconcile_loop-7b564f9232c78a2c651094a8005ba6a8.jpeg"},34753:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/parameter_context_reconcile_loop-0b9f053e9cb447162535e03e5f5e9fbd.jpeg"},74219:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/registry_client_reconcile_loop-0b8e528b249cd93e61f4186050c59c02.jpeg"}}]);