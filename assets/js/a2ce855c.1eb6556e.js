"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61535],{10070:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=t(62540),r=t(43023);const n={id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},d=void 0,c={id:"5_references/3_nifi_registry_client",title:"NiFi Registry Client",description:"NifiRegistryClient is the Schema for the NiFi registry client API.",source:"@site/versioned_docs/version-v0.12.0/5_references/3_nifi_registry_client.md",sourceDirName:"5_references",slug:"/5_references/3_nifi_registry_client",permalink:"/nifikop/docs/v0.12.0/5_references/3_nifi_registry_client",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/5_references/3_nifi_registry_client.md",tags:[],version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064e3,frontMatter:{id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},sidebar:"docs",previous:{title:"NiFi User",permalink:"/nifikop/docs/v0.12.0/5_references/2_nifi_user"},next:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/v0.12.0/5_references/4_nifi_parameter_context"}},l={},h=[{value:"NifiRegistryClient",id:"nifiregistryclient",level:2},{value:"NifiRegistryClientsSpec",id:"nifiregistryclientsspec",level:2},{value:"NifiRegistryClientStatus",id:"nifiregistryclientstatus",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"NifiRegistryClient"})," is the Schema for the NiFi registry client API."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: squidflow\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Squidflow demo"\n  uri: "http://nifi-registry:18080"\n'})}),"\n",(0,s.jsx)(i.h2,{id:"nifiregistryclient",children:"NifiRegistryClient"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"metadata"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,s.jsx)(i.td,{children:"is metadata that all persisted resources must have, which includes all objects registry clients must create."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"spec"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#nifiregistryclientspec",children:"NifiRegistryClientSpec"})}),(0,s.jsx)(i.td,{children:"defines the desired state of NifiRegistryClient."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"status"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#nifiregistryclientstatus",children:"NifiRegistryClientStatus"})}),(0,s.jsx)(i.td,{children:"defines the observed state of NifiRegistryClient."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"nifiregistryclientsspec",children:"NifiRegistryClientsSpec"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"description"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"describes the Registry client."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"uri"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"URI of the NiFi registry that should be used for pulling the flow."}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"clusterRef"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/nifikop/docs/v0.12.0/5_references/2_nifi_user#clusterreference",children:"ClusterReference"})}),(0,s.jsx)(i.td,{children:"contains the reference to the NifiCluster with the one the user is linked."}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"nifiregistryclientstatus",children:"NifiRegistryClientStatus"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"id"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"nifi registry client's id."}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"version"}),(0,s.jsx)(i.td,{children:"int64"}),(0,s.jsx)(i.td,{children:"the last nifi registry client revision version catched."}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]})]})]})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43023:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>c});var s=t(63696);const r={},n=s.createContext(r);function d(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);