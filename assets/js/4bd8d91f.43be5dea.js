"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96958],{35318:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(27378);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=o(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19319:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),l=["components"],s={id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},p=void 0,o={unversionedId:"5_references/3_nifi_registry_client",id:"version-v0.9.0/5_references/3_nifi_registry_client",title:"NiFi Registry Client",description:"NifiRegistryClient is the Schema for the NiFi registry client API.",source:"@site/versioned_docs/version-v0.9.0/5_references/3_nifi_registry_client.md",sourceDirName:"5_references",slug:"/5_references/3_nifi_registry_client",permalink:"/nifikop/docs/v0.9.0/5_references/3_nifi_registry_client",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.9.0/5_references/3_nifi_registry_client.md",tags:[],version:"v0.9.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1648022160,formattedLastUpdatedAt:"Mar 23, 2022",frontMatter:{id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},sidebar:"version-v0.9.0/docs",previous:{title:"NiFi User",permalink:"/nifikop/docs/v0.9.0/5_references/2_nifi_user"},next:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/v0.9.0/5_references/4_nifi_parameter_context"}},u={},d=[{value:"NifiRegistryClient",id:"nifiregistryclient",level:2},{value:"NifiRegistryClientsSpec",id:"nifiregistryclientsspec",level:2},{value:"NifiRegistryClientStatus",id:"nifiregistryclientstatus",level:2}],c={toc:d};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NifiRegistryClient")," is the Schema for the NiFi registry client API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: squidflow\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Squidflow demo"\n  uri: "http://nifi-registry:18080"\n')),(0,a.kt)("h2",{id:"nifiregistryclient"},"NifiRegistryClient"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),(0,a.kt)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects registry clients must create."),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"nil")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#nifiregistryclientspec"},"NifiRegistryClientSpec")),(0,a.kt)("td",{parentName:"tr",align:null},"defines the desired state of NifiRegistryClient."),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"nil")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#nifiregistryclientstatus"},"NifiRegistryClientStatus")),(0,a.kt)("td",{parentName:"tr",align:null},"defines the observed state of NifiRegistryClient."),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"nil")))),(0,a.kt)("h2",{id:"nifiregistryclientsspec"},"NifiRegistryClientsSpec"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"describes the Registry client."),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URI of the NiFi registry that should be used for pulling the flow."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusterRef"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nifikop/docs/v0.9.0/5_references/2_nifi_user#clusterreference"},"ClusterReference")),(0,a.kt)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"nifiregistryclientstatus"},"NifiRegistryClientStatus"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"nifi registry client's id."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"the last nifi registry client revision version catched."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);