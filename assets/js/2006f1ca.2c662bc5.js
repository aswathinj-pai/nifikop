"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50592],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},s=void 0,p={unversionedId:"5_references/1_nifi_cluster/3_node_config",id:"version-v0.6.0/5_references/1_nifi_cluster/3_node_config",title:"Node configuration",description:"NodeConfig defines the node configuration",source:"@site/versioned_docs/version-v0.6.0/5_references/1_nifi_cluster/3_node_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/3_node_config",permalink:"/nifikop/docs/v0.6.0/5_references/1_nifi_cluster/3_node_config",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.0/5_references/1_nifi_cluster/3_node_config.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1617027075,formattedLastUpdatedAt:"Mar 29, 2021",frontMatter:{id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},sidebar:"version-v0.6.0/docs",previous:{title:"Read only configurations",permalink:"/nifikop/docs/v0.6.0/5_references/1_nifi_cluster/2_read_only_config"},next:{title:"Node",permalink:"/nifikop/docs/v0.6.0/5_references/1_nifi_cluster/4_node"}},d={},c=[{value:"NodeConfig",id:"nodeconfig",level:2},{value:"StorageConfig",id:"storageconfig",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NodeConfig defines the node configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n')),(0,i.kt)("h2",{id:"nodeconfig"},"NodeConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"provenanceStorage"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"},"write-ahead-provenance-repository-properties")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"8 GB"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"runAsUser"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"define the id of the user to run in the Nifi image"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fsGroup"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"define the id of the group for each volumes in Nifi image"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isNode"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true if the instance is a node in a cluster: ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup"},"basic-cluster-setup")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker image used by the operator to create the node associated. ",(0,i.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/apache/nifi/"},"Nifi docker registry")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"imagePullPolicy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"},"PullPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},"define the pull policy for NiFi cluster docker image.)"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeAffinity"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"operator populates this value if new pvc added later to node ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity"},"node-affinity")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"storageConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"#storageconfig"},"StorageConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the node related configs."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serviceAccountName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the serviceAccount used for this specific node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"default"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourcesRequirements"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"},"ResourceRequirements")),(0,i.kt)("td",{parentName:"tr",align:null},"works exactly like Container resources, the user can specify the limit and the requests through this property ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"manage-compute-resources-container"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"imagePullSecrets"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference"},"LocalObjectReference")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the secret to use when using private registry."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeSelector"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,i.kt)("td",{parentName:"tr",align:null},"nodeSelector can be specified, which set the pod to fit on a node ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector"},"nodeselector")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tolerations"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#Toleration"},"Toleration")),(0,i.kt)("td",{parentName:"tr",align:null},"tolerations can be specified, which set the pod's tolerations ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts"},"taint-and-toleration"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeAnnotations"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnal annotation to attach to the pod associated ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"annotations"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"storageconfig"},"StorageConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the storage config, used to name PV to reuse into sidecars for example."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mountPath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path where the volume will be mount into the main nifi container inside the pod."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pvcSpec"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"},"PersistentVolumeClaimSpec")),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes PVC spec. ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"},"create-a-persistentvolumeclaim"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);