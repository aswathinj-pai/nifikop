"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70673],{35318:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,N=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(N,i(i({ref:e},c),{},{components:a})):n.createElement(N,i({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55789:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),i=["components"],s={id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},o=void 0,p={unversionedId:"5_references/2_nifi_user",id:"version-v0.7.0/5_references/2_nifi_user",title:"NiFi User",description:"NifiUser is the Schema for the nifi users API.",source:"@site/versioned_docs/version-v0.7.0/5_references/2_nifi_user.md",sourceDirName:"5_references",slug:"/5_references/2_nifi_user",permalink:"/nifikop/docs/v0.7.0/5_references/2_nifi_user",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.0/5_references/2_nifi_user.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,formattedLastUpdatedAt:"Mar 6, 2022",frontMatter:{id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},sidebar:"version-v0.7.0/docs",previous:{title:"External Service Config",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/7_external_service_config"},next:{title:"NiFi Registry Client",permalink:"/nifikop/docs/v0.7.0/5_references/3_nifi_registry_client"}},c={},u=[{value:"NifiUser",id:"nifiuser",level:2},{value:"NifiUserSpec",id:"nifiuserspec",level:2},{value:"NifiUserStatus",id:"nifiuserstatus",level:2},{value:"ClusterReference",id:"clusterreference",level:2},{value:"AccessPolicy",id:"accesspolicy",level:2},{value:"AccessPolicyType",id:"accesspolicytype",level:2},{value:"AccessPolicyAction",id:"accesspolicyaction",level:2},{value:"AccessPolicyResource",id:"accesspolicyresource",level:2}],d={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NifiUser")," is the Schema for the nifi users API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  identity: alexandre.guitton@orange.com\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  createCert: false\n")),(0,l.kt)("h2",{id:"nifiuser"},"NifiUser"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects users must create."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nifiuserspec"},"NifiUserSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the desired state of NifiUser."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nifiuserstatus"},"NifiUserStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the observed state of NifiUser."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))),(0,l.kt)("h2",{id:"nifiuserspec"},"NifiUserSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"used to define the user identity on NiFi cluster side, when the user's name doesn't suit with Kubernetes resource name."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the secret where all cert resources will be stored."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterRef"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clusterreference"},"ClusterReference")),(0,l.kt)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNSNames"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"list of DNSNames that the user will used to request the NifiCluster (allowing to create the right certificates associated)."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeJKS"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"whether or not the the operator also include a Java keystore format (JKS) with you secret."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createCert"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"whether or not a certificate will be created for this user."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessPolicies"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"#accesspolicy"},"AccessPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the list of access policies that will be granted to the group."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("h2",{id:"nifiuserstatus"},"NifiUserStatus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the nifi user's node id."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the last nifi user's node revision version catched."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"clusterreference"},"ClusterReference"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the NifiCluster."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the NifiCluster namespace location."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"accesspolicy"},"AccessPolicy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#accesspolicytype"},"AccessPolicyType")),(0,l.kt)("td",{parentName:"tr",align:null},'defines the kind of access policy, could be "global" or "component".'),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#accesspolicyaction"},"AccessPolicyAction")),(0,l.kt)("td",{parentName:"tr",align:null},'defines the kind of action that will be granted, could be "read" or "write".'),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#accesspolicyresource"},"AccessPolicyResource")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the kind of resource targeted by this access policies, please refer to the following page : ",(0,l.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies"},"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'used if the type is "component", it allows to define the kind of component on which is the access policy.'),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'used if the type is "component", it allows to define the id of the component on which is the access policy.'),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"accesspolicytype"},"AccessPolicyType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GlobalAccessPolicyType"),(0,l.kt)("td",{parentName:"tr",align:null},"global"),(0,l.kt)("td",{parentName:"tr",align:null},"Global access policies govern the following system level authorizations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ComponentAccessPolicyType"),(0,l.kt)("td",{parentName:"tr",align:null},"component"),(0,l.kt)("td",{parentName:"tr",align:null},"Component level access policies govern the following component level authorizations")))),(0,l.kt)("h2",{id:"accesspolicyaction"},"AccessPolicyAction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReadAccessPolicyAction"),(0,l.kt)("td",{parentName:"tr",align:null},"read"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to view")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WriteAccessPolicyAction"),(0,l.kt)("td",{parentName:"tr",align:null},"write"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to modify")))),(0,l.kt)("h2",{id:"accesspolicyresource"},"AccessPolicyResource"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FlowAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/flow"),(0,l.kt)("td",{parentName:"tr",align:null},"About the UI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ControllerAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/controller"),(0,l.kt)("td",{parentName:"tr",align:null},"about the controller including Reporting Tasks, Controller Services, Parameter Contexts and Nodes in the Cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ParameterContextAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/parameter-context"),(0,l.kt)("td",{parentName:"tr",align:null},'About the Parameter Contexts. Access to Parameter Contexts are inherited from the "access the controller" policies unless overridden.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProvenanceAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/provenance"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to submit a Provenance Search and request Event Lineage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RestrictedComponentsAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/restricted-components"),(0,l.kt)("td",{parentName:"tr",align:null},"About the restricted components assuming other permissions are sufficient. The restricted components may indicate which specific permissions are required. Permissions can be granted for specific restrictions or be granted regardless of restrictions. If permission is granted regardless of restrictions, the user can create/modify all restricted components.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoliciesAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/policies"),(0,l.kt)("td",{parentName:"tr",align:null},"About the policies for all components")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TenantsAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/tenants"),(0,l.kt)("td",{parentName:"tr",align:null},"About the users and user groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SiteToSiteAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/site-to-site"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows other NiFi instances to retrieve Site-To-Site details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SystemAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/system"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to view System Diagnostics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProxyAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/proxy"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows proxy machines to send requests on the behalf of others")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CountersAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/counters"),(0,l.kt)("td",{parentName:"tr",align:null},"About counters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ComponentsAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"About the component configuration details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OperationAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/operation"),(0,l.kt)("td",{parentName:"tr",align:null},"to operate components by changing component run status (start/stop/enable/disable), remote port transmission status, or terminating processor threads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProvenanceDataAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/provenance-data"),(0,l.kt)("td",{parentName:"tr",align:null},"to view provenance events generated by this component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/data"),(0,l.kt)("td",{parentName:"tr",align:null},"About metadata and content for this component in flowfile queues in outbound connections and through provenance events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoliciesComponentAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/policies"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataTransferAccessPolicyResource"),(0,l.kt)("td",{parentName:"tr",align:null},"/data-transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows a port to receive data from NiFi instances")))))}m.isMDXComponent=!0}}]);