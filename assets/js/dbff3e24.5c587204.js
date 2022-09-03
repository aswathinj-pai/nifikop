"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1362],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=n(25773),r=n(30808),a=(n(27378),n(35318)),o=["components"],l={id:"4_external_cluster",title:"External cluster",sidebar_label:"External cluster"},s=void 0,c={unversionedId:"3_tasks/1_nifi_cluster/4_external_cluster",id:"version-v0.8.0/3_tasks/1_nifi_cluster/4_external_cluster",title:"External cluster",description:"This task shows you how to configure an external cluster.",source:"@site/versioned_docs/version-v0.8.0/3_tasks/1_nifi_cluster/4_external_cluster.md",sourceDirName:"3_tasks/1_nifi_cluster",slug:"/3_tasks/1_nifi_cluster/4_external_cluster",permalink:"/nifikop/docs/v0.8.0/3_tasks/1_nifi_cluster/4_external_cluster",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.8.0/3_tasks/1_nifi_cluster/4_external_cluster.md",tags:[],version:"v0.8.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,formattedLastUpdatedAt:"Mar 6, 2022",frontMatter:{id:"4_external_cluster",title:"External cluster",sidebar_label:"External cluster"},sidebar:"version-v0.8.0/docs",previous:{title:"Cluster Scaling",permalink:"/nifikop/docs/v0.8.0/3_tasks/1_nifi_cluster/2_cluster_scaling"},next:{title:"SSL",permalink:"/nifikop/docs/v0.8.0/3_tasks/2_security/1_ssl"}},u={},p=[{value:"Common configuration",id:"common-configuration",level:2},{value:"Secret configuration for Basic authentication",id:"secret-configuration-for-basic-authentication",level:2},{value:"Secret configuration for TLS authentication",id:"secret-configuration-for-tls-authentication",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This task shows you how to configure an external cluster."),(0,a.kt)("h2",{id:"common-configuration"},"Common configuration"),(0,a.kt)("p",null,"The operator allows you to manage the Dataflow lifecycle for internal (i.e cluster managed by the operator) and external NiFi cluster.\nA NiFi cluster is considered as external as soon as the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource used as reference in other NiFi resource explicitly detailed the way to comunicate with the cluster."),(0,a.kt)("p",null,"This feature allows you :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To automate your Dataflow CI/CD using yaml"),(0,a.kt)("li",{parentName:"ul"},"To manage the same way your Dataflow management wherever your cluster is, on bare metal, VMs, k8s, on-premise or on cloud.")),(0,a.kt)("p",null,"To deploy different resources (",(0,a.kt)("inlineCode",{parentName:"p"},"NifiRegistryClient"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUserGroup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiParameterContext"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiDataflow"),") you simply have to declare a ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource explaining how to discuss with the external cluster, and refer to this resource as usual using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec.ClusterRef")," field."),(0,a.kt)("p",null,"To declare an external cluster you have to follow this kind of configuration :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: externalcluster\nspec:\n  # rootProcessGroupId contains the uuid of the root process group for this cluster.\n  rootProcessGroupId: 'd37bee03-017a-1000-cff7-4eaaa82266b7'\n  # nodeURITemplate used to dynamically compute node uri.\n  nodeURITemplate: 'nifi0%d.integ.mapreduce.m0.p.fti.net:9090'\n  # all node requiresunique id\n  nodes:\n    - id: 1\n    - id: 2\n    - id: 3\n  # type defines if the cluster is internal (i.e manager by the operator) or external.\n  # :Enum={\"external\",\"internal\"}\n  type: 'external'\n  # clientType defines if the operator will use basic or tls authentication to query the NiFi cluster.\n  # Enum={\"tls\",\"basic\"}\n  clientType: 'basic'\n  # secretRef reference the secret containing the informations required to authenticate to the cluster.\n  secretRef:\n    name: nifikop-credentials\n    namespace: nifikop-nifi\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.RootProcessGroupId")," field is required to give the ability to the operator of managing root level policy and default deployment and policy."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.NodeURITemplate")," field, defines the hostname template of your NiFi cluster nodes, the operator will use this information and the list of id specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.Nodes")," field to generate the hostname of the nodes (in the configuration above you will have : ",(0,a.kt)("inlineCode",{parentName:"li"},"nifi01.integ.mapreduce.m0.p.fti.net:9090"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nifi02.integ.mapreduce.m0.p.fti.net:9090"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nifi03.integ.mapreduce.m0.p.fti.net:9090"),")."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.Type")," field defines the type of cluster that this resource is refering to, by default it is ",(0,a.kt)("inlineCode",{parentName:"li"},"internal"),", in our case here we just want to use this resource to reference an existing NiFi cluster, so we set this field to ",(0,a.kt)("inlineCode",{parentName:"li"},"external"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.ClientType")," field defines how we want to authenticate to the NiFi cluster API, for now we are supporting two modes :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls")," : using client TLS certificate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"basic")," : using a username and a password to get an access token."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Spec.SecretRef")," defines a reference to a secret which contains the sensitive values that will be used by the operator to authenticate to the NiFi cluster API (ie in basic mode it will contain the password and username).")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The id of node only support ",(0,a.kt)("inlineCode",{parentName:"p"},"int32")," as type, so if the hostname of your nodes doesn't match with this, you can't use this feature.")),(0,a.kt)("h2",{id:"secret-configuration-for-basic-authentication"},"Secret configuration for Basic authentication"),(0,a.kt)("p",null,"When you are using the basic authentication, you have to pass some informations into the secret that is referenced into the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username")," : the username associated to the user that will be used by the operator to request the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," : the password associated to the user that will be used by the operator to request the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ca.crt (optional)"),": the certificate authority to trust the server certificate if needed")),(0,a.kt)("p",null,"The following command shows how you can create this secret :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic nifikop-credentials \\\n  --from-file=username=./secrets/username\\\n  --from-file=password=./secrets/password\\\n  --from-file=ca.crt=./secrets/ca.crt\\\n  -n nifikop-nifi\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When you use the basic authentication, the operator will create a secret ",(0,a.kt)("inlineCode",{parentName:"p"},"<cluster name>-basic-secret")," containing for each node an access token that will be maintained by the operator.")),(0,a.kt)("h2",{id:"secret-configuration-for-tls-authentication"},"Secret configuration for TLS authentication"),(0,a.kt)("p",null,"When you are using the tls authentication, you have to pass some information into the secret that is referenced into the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls.key")," : The user private key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls.crt")," : The user certificate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," : the password associated to the user that will be used by the operator to request the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ca.crt"),": The CA certificate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"truststore.jks"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keystore.jks"),":")))}f.isMDXComponent=!0}}]);