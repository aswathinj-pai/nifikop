"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16276],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,g=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},p=void 0,d={unversionedId:"5_references/1_nifi_cluster/2_read_only_config",id:"version-v0.4.3/5_references/1_nifi_cluster/2_read_only_config",title:"Read only configurations",description:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.",source:"@site/versioned_docs/version-v0.4.3/5_references/1_nifi_cluster/2_read_only_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/2_read_only_config",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/2_read_only_config",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.4.3/5_references/1_nifi_cluster/2_read_only_config.md",tags:[],version:"v0.4.3",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1610979212,formattedLastUpdatedAt:"Jan 18, 2021",frontMatter:{id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},sidebar:"version-v0.4.3/docs",previous:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/"},next:{title:"Node configuration",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/3_node_config"}},s={},u=[{value:"ReadOnlyConfig",id:"readonlyconfig",level:2},{value:"NifiProperties",id:"nifiproperties",level:2},{value:"ZookeeperProperties",id:"zookeeperproperties",level:2},{value:"BootstrapProperties",id:"bootstrapproperties",level:2}],c={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  # readOnlyConfig specifies the read-only type Nifi config cluster wide, all theses\n  # will be merged with node specified readOnly configurations, so it can be overwritten per node.\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.ui.banner.text=NiFiKop by Orange\n      # A comma separated list of allowed HTTP Host header values to consider when NiFi\n      # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n#      webProxyHost:\n      # Nifi security client auth\n      needClientAuth: false\n      # Indicates which of the configured authorizers in the authorizers.xml file to use\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n#      authorizer:\n    # ZookeeperProperties configuration that will be applied to the node.\n    zookeeperProperties:\n      # Additionnals zookeeper.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        initLimit=15\n        autopurge.purgeInterval=24\n        syncLimit=5\n        tickTime=2000\n        dataDir=./state/zookeeper\n        autopurge.snapRetainCount=30\n    # BootstrapProperties configuration that will be applied to the node.\n    bootstrapProperties:\n      # JVM memory settings\n      nifiJvmMemory: "512m"\n      # Additionnals bootstrap.properties configuration that will override the one produced based\n      # on template and configurations.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n      overrideConfigs: |\n        # java.arg.4=-Djava.net.preferIPv4Stack=true\n\n')),(0,i.kt)("h2",{id:"readonlyconfig"},"ReadOnlyConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifiProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#nifiproperties"},"NifiProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"nifi.properties configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zookeeperProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#zookeeperproperties"},"ZookeeperProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"zookeeper.properties configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bootstrapProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#bootstrapproperties"},"BootstrapProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap.conf configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"nifiproperties"},"NifiProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template and configurations."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"webProxyHosts"),(0,i.kt)("td",{parentName:"tr",align:null},"["," ","]","string"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"},"web-properties")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"needClientAuth"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Nifi security client auth."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorizer"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates which of the configured authorizers in the authorizers.xml file to use ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"},"authorizer-configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"managed-authorizer"')))),(0,i.kt)("h2",{id:"zookeeperproperties"},"ZookeeperProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template and configurations."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')))),(0,i.kt)("h2",{id:"bootstrapproperties"},"BootstrapProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals bootstrap.conf configuration that will override the one produced based on template and configurations."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NifiJvmMemory"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"JVM memory settings."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"512m"')))))}f.isMDXComponent=!0}}]);