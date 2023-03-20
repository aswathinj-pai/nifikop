"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8407],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,g=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(25773),a=t(30808),i=(t(27378),t(35318)),o=["components"],l={id:"4_node",title:"Node",sidebar_label:"Node"},d=void 0,s={unversionedId:"5_references/1_nifi_cluster/4_node",id:"version-v1.0.0/5_references/1_nifi_cluster/4_node",title:"Node",description:"Node defines the nifi node basic configuration",source:"@site/versioned_docs/version-v1.0.0/5_references/1_nifi_cluster/4_node.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/4_node",permalink:"/nifikop/docs/v1.0.0/5_references/1_nifi_cluster/4_node",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.0.0/5_references/1_nifi_cluster/4_node.md",tags:[],version:"v1.0.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1668875267,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{id:"4_node",title:"Node",sidebar_label:"Node"},sidebar:"docs",previous:{title:"Node configuration",permalink:"/nifikop/docs/v1.0.0/5_references/1_nifi_cluster/3_node_config"},next:{title:"Node state",permalink:"/nifikop/docs/v1.0.0/5_references/1_nifi_cluster/5_node_state"}},c={},u=[{value:"Node",id:"node",level:2}],p={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Node defines the nifi node basic configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'    - id: 0\n      # nodeConfigGroup can be used to ease the node configuration, if set only the id is required\n      nodeConfigGroup: "default_group"\n      # readOnlyConfig can be used to pass Nifi node config\n      # which has type read-only these config changes will trigger rolling upgrade\n      readOnlyConfig:\n        nifiProperties:\n          overrideConfigs: |\n            nifi.ui.banner.text=NiFiKop - Node 0\n      # node configuration\n#       nodeConfig:\n    - id: 2\n      # readOnlyConfig can be used to pass Nifi node config\n      # which has type read-only these config changes will trigger rolling upgrade\n      readOnlyConfig:\n        overrideConfigs: |\n          nifi.ui.banner.text=NiFiKop - Node 2\n      # node configuration\n      nodeConfig:\n        resourcesRequirements:\n          limits:\n            cpu: "2"\n            memory: 3Gi\n          requests:\n            cpu: "1"\n            memory: 1Gi\n        storageConfigs:\n          # Name of the storage config, used to name PV to reuse into sidecars for example.\n          - name: provenance-repository\n            # Path where the volume will be mount into the main nifi container inside the pod.\n            mountPath: "/opt/nifi/provenance_repository"\n            # Kubernetes PVC spec\n            # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n            pvcSpec:\n              accessModes:\n                - ReadWriteOnce\n              storageClassName: "standard"\n              resources:\n                requests:\n                  storage: 8Gi\n')),(0,i.kt)("h2",{id:"node"},"Node"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"int32"),(0,i.kt)("td",{parentName:"tr",align:null},"unique Node id."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeConfigGroup"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"can be used to ease the node configuration, if set only the id is required"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"readOnlyConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./2_read_only_config"},"ReadOnlyConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"readOnlyConfig can be used to pass Nifi node config which has type read-only these config changes will trigger rolling upgrade."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./3_node_config"},"NodeConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"node configuration."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))))}f.isMDXComponent=!0}}]);