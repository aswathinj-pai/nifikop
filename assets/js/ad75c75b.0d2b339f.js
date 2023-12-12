"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70992],{93649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=r(24246),i=r(71670);const n={id:"4_nifi_parameter_context",title:"NiFi Parameter Context",sidebar_label:"NiFi Parameter Context"},d=void 0,c={id:"5_references/4_nifi_parameter_context",title:"NiFi Parameter Context",description:"NifiParameterContext is the Schema for the NiFi parameter context API.",source:"@site/versioned_docs/version-v0.13.0/5_references/4_nifi_parameter_context.md",sourceDirName:"5_references",slug:"/5_references/4_nifi_parameter_context",permalink:"/nifikop/docs/v0.13.0/5_references/4_nifi_parameter_context",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/5_references/4_nifi_parameter_context.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"4_nifi_parameter_context",title:"NiFi Parameter Context",sidebar_label:"NiFi Parameter Context"},sidebar:"docs",previous:{title:"NiFi Registry Client",permalink:"/nifikop/docs/v0.13.0/5_references/3_nifi_registry_client"},next:{title:"NiFi Dataflow",permalink:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"}},h={},l=[{value:"NifiParameterContext",id:"nifiparametercontext",level:2},{value:"NifiParameterContextsSpec",id:"nifiparametercontextsspec",level:2},{value:"NifiParameterContextStatus",id:"nifiparametercontextstatus",level:2},{value:"Parameter",id:"parameter",level:2},{value:"SecretReference",id:"secretreference",level:2},{value:"ParameterContextUpdateRequest",id:"parametercontextupdaterequest",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"NifiParameterContext"})," is the Schema for the NiFi parameter context API."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  description: "It is a test"\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      description: toto\n      sensistive: true\n'})}),"\n",(0,s.jsx)(t.h2,{id:"nifiparametercontext",children:"NifiParameterContext"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,s.jsx)(t.td,{children:"is metadata that all persisted resources must have, which includes all objects parameter contexts must create."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#NifiParameterContextspec",children:"NifiParameterContextSpec"})}),(0,s.jsx)(t.td,{children:"defines the desired state of NifiParameterContext."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#NifiParameterContextstatus",children:"NifiParameterContextStatus"})}),(0,s.jsx)(t.td,{children:"defines the observed state of NifiParameterContext."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"nifiparametercontextsspec",children:"NifiParameterContextsSpec"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"description"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"describes the Parameter Context."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"parameters"}),(0,s.jsxs)(t.td,{children:["[ ]",(0,s.jsx)(t.a,{href:"#parameter",children:"Parameter"})]}),(0,s.jsx)(t.td,{children:"a list of non-sensitive Parameters."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secretRefs"}),(0,s.jsxs)(t.td,{children:["[ ]",(0,s.jsx)(t.a,{href:"#secretreference",children:"SecretReference"})]}),(0,s.jsx)(t.td,{children:"a list of secret containing sensitive parameters (the key will name of the parameter)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clusterRef"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/nifikop/docs/v0.13.0/5_references/2_nifi_user#clusterreference",children:"ClusterReference"})}),(0,s.jsx)(t.td,{children:"contains the reference to the NifiCluster with the one the user is linked."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"disableTakeOver"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"whether or not the operator should take over an existing parameter context if its name is the same."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"nifiparametercontextstatus",children:"NifiParameterContextStatus"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"nifi parameter context's id."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"version"}),(0,s.jsx)(t.td,{children:"int64"}),(0,s.jsx)(t.td,{children:"the last nifi parameter context revision version catched."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"latestUpdateRequest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#parametercontextupdaterequest",children:"ParameterContextUpdateRequest"})}),(0,s.jsx)(t.td,{children:"the latest update request."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"version"}),(0,s.jsx)(t.td,{children:"int64"}),(0,s.jsx)(t.td,{children:"the last nifi parameter context revision version catched."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the name of the Parameter."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the value of the Parameter."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"description"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the description of the Parameter."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sensitive"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Whether the parameter is sensitive or not."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"secretreference",children:"SecretReference"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"name of the secret."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"namespace"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the secret namespace location."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"parametercontextupdaterequest",children:"ParameterContextUpdateRequest"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the id of the update request."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uri"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the uri for this request."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"submissionTime"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the timestamp of when the request was submitted This property is read only."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lastUpdated"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the timestamp of when the request was submitted This property is read only."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"complete"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"whether or not this request has completed."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"failureReason"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"an explication of why the request failed, or null if this request has not failed."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"percentCompleted"}),(0,s.jsx)(t.td,{children:"int32"}),(0,s.jsx)(t.td,{children:"the percentage complete of the request, between 0 and 100."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"the state of the request."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>d});var s=r(27378);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);