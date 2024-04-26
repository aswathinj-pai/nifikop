"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3642],{47026:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(62540),t=n(43023);const a={id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},o=void 0,r={id:"3_manage_nifi/1_manage_clusters/0_design_principles",title:"Design Principles",description:"Pod level management",source:"@site/versioned_docs/version-v0.14.1/3_manage_nifi/1_manage_clusters/0_design_principles.md",sourceDirName:"3_manage_nifi/1_manage_clusters",slug:"/3_manage_nifi/1_manage_clusters/0_design_principles",permalink:"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/0_design_principles",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.1/3_manage_nifi/1_manage_clusters/0_design_principles.md",tags:[],version:"v0.14.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987e3,frontMatter:{id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},sidebar:"docs",previous:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.14.1/2_deploy_nifikop/2_customizable_install_with_helm"},next:{title:"Quick start",permalink:"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start"}},l={},c=[{value:"Pod level management",id:"pod-level-management",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"pod-level-management",children:"Pod level management"}),"\n",(0,s.jsxs)(i.p,{children:["NiFi is a stateful application. The first piece of the puzzle is the Node, which is a simple server capable of createing/forming a cluster with other Nodes. Every Node has his own ",(0,s.jsx)(i.strong,{children:"unique"})," configuration which differs slightly from all others."]}),"\n",(0,s.jsxs)(i.p,{children:["All NiFi on Kubernetes setup use ",(0,s.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",children:"StatefulSet"})," to create a NiFi Cluster. Just to quickly recap from the K8s docs:"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"StatefulSet manages the deployment and scaling of a set of Pods, and provide guarantees about their ordering and uniqueness. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains sticky identities for each of its Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that is maintained across any rescheduling."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"How does this looks from the perspective of Apache NiFi ?"}),"\n",(0,s.jsx)(i.p,{children:"With StatefulSet we get:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"unique Node IDs generated during Pod startup"}),"\n",(0,s.jsx)(i.li,{children:"networking between Nodes with headless services"}),"\n",(0,s.jsx)(i.li,{children:"unique Persistent Volumes for Nodes"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Using StatefulSet we ",(0,s.jsx)(i.strong,{children:"lose"})," the ability to:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"modify the configuration of unique Nodes"}),"\n",(0,s.jsx)(i.li,{children:"remove a specific Node from a cluster (StatefulSet always removes the most recently created Node)"}),"\n",(0,s.jsx)(i.li,{children:"use multiple, different Persistent Volumes for each Node"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The NiFi Operator uses ",(0,s.jsx)(i.code,{children:"simple"})," Pods, ConfigMaps, and PersistentVolumeClaims, instead of StatefulSet (based on the design used by ",(0,s.jsx)(i.a,{href:"https://github.com/banzaicloud/kafka-operator",children:"Banzai Cloud Kafka Operator"}),").\nUsing these resources allows us to build an Operator which is better suited to NiFi."]}),"\n",(0,s.jsx)(i.p,{children:"With the NiFi operator we can:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"modify the configuration of unique Nodes"}),"\n",(0,s.jsx)(i.li,{children:"remove specific Nodes from clusters"}),"\n",(0,s.jsx)(i.li,{children:"use multiple Persistent Volumes for each Node"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var s=n(63696);const t={},a=s.createContext(t);function o(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);