(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{313:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(558)),i={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},o={unversionedId:"5_references/1_nifi_cluster/3_node_config",id:"version-v0.10.0/5_references/1_nifi_cluster/3_node_config",isDocsHomePage:!1,title:"Node configuration",description:"NodeConfig defines the node configuration",source:"@site/versioned_docs/version-v0.10.0/5_references/1_nifi_cluster/3_node_config.md",slug:"/5_references/1_nifi_cluster/3_node_config",permalink:"/nifikop/docs/v0.10.0/5_references/1_nifi_cluster/3_node_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.10.0/5_references/1_nifi_cluster/3_node_config.md",version:"v0.10.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1648141996,sidebar_label:"Node configuration",sidebar:"version-v0.10.0/docs",previous:{title:"Read only configurations",permalink:"/nifikop/docs/v0.10.0/5_references/1_nifi_cluster/2_read_only_config"},next:{title:"Node",permalink:"/nifikop/docs/v0.10.0/5_references/1_nifi_cluster/4_node"}},l=[{value:"NodeConfig",id:"nodeconfig",children:[]},{value:"StorageConfig",id:"storageconfig",children:[]},{value:"ExternalVolumeConfig",id:"externalvolumeconfig",children:[]},{value:"Metadata",id:"metadata",children:[]}],b={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"NodeConfig defines the node configuration"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Additionnal metadata to merge to the pod associated\n      podMetadata:\n        annotations:\n          node-annotation: "node-annotation-value"\n        labels:\n          node-label: "node-label-value"\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # externalVolumeConfigs specifies a list of volume to mount into the main container.\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: "/opt/nifi/example"\n          secret:\n            secretName: "raw-controller"\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n')),Object(c.b)("h2",{id:"nodeconfig"},"NodeConfig"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"provenanceStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"}),"write-ahead-provenance-repository-properties")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"8 GB"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"runAsUser"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define the id of the user to run in the Nifi image"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fsGroup"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define the id of the group for each volumes in Nifi image"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isNode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set this to true if the instance is a node in a cluster: ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup"}),"basic-cluster-setup")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"image"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Docker image used by the operator to create the node associated. ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://hub.docker.com/r/apache/nifi/"}),"Nifi docker registry")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imagePullPolicy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"}),"PullPolicy")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define the pull policy for NiFi cluster docker image.)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeAffinity"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"operator populates this value if new pvc added later to node ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity"}),"node-affinity")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storageConfigs"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#storageconfig"}),"StorageConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the node related configs."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"externalVolumeConfigs"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#externalvolumeconfig"}),"ExternalVolumeConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies a list of volume to mount into the main container."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"serviceAccountName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the serviceAccount used for this specific node."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"default"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"resourcesRequirements"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"}),"ResourceRequirements")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"works exactly like Container resources, the user can specify the limit and the requests through this property ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"}),"manage-compute-resources-container"),"."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imagePullSecrets"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference"}),"LocalObjectReference")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the secret to use when using private registry."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeSelector"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeSelector can be specified, which set the pod to fit on a node ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector"}),"nodeselector")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tolerations"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#Toleration"}),"Toleration")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tolerations can be specified, which set the pod's tolerations ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts"}),"taint-and-toleration"),"."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"podMetadata"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#metadata"}),"Metadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define additionnal metadata to merge to the pod associated."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(c.b)("h2",{id:"storageconfig"},"StorageConfig"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the storage config, used to name PV to reuse into sidecars for example."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mountPath"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the volume will be mount into the main nifi container inside the pod."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pvcSpec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"}),"PersistentVolumeClaimSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes PVC spec. ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"}),"create-a-persistentvolumeclaim"),"."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h2",{id:"externalvolumeconfig"},"ExternalVolumeConfig"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeMount"}),"VolueMount")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes a mounting of a Volume within a container."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeSource"}),"VolumeSource")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VolumeSource represents the location and type of the mounted volume."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h2",{id:"metadata"},"Metadata"),Object(c.b)("p",null,"| annotations | map","[","string","]","string | Additionnal annotation to merge to the pod associated ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"}),"annotations"),". |No|nil|\n| nodeLabels  | map","[","string","]","string | Additionnal labels to merge to the pod associated ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"}),"labels"),".               |No|nil|"))}d.isMDXComponent=!0},558:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,O=p["".concat(i,".").concat(u)]||p[u]||s[u]||c;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);