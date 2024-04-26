"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51082],{10180:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(62540),n=t(43023);const r={id:"7_nifi_nodegroup_autoscaler",title:"NiFi NodeGroup Autoscaler",sidebar_label:"NiFi NodeGroup Autoscaler"},d=void 0,o={id:"5_references/7_nifi_nodegroup_autoscaler",title:"NiFi NodeGroup Autoscaler",description:"NifiNodeGroupAutoscaler is the Schema through which you configure automatic scaling of NifiCluster deployments.",source:"@site/versioned_docs/version-v1.6.0/5_references/7_nifi_nodegroup_autoscaler.md",sourceDirName:"5_references",slug:"/5_references/7_nifi_nodegroup_autoscaler",permalink:"/nifikop/docs/v1.6.0/5_references/7_nifi_nodegroup_autoscaler",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.6.0/5_references/7_nifi_nodegroup_autoscaler.md",tags:[],version:"v1.6.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1702899203e3,frontMatter:{id:"7_nifi_nodegroup_autoscaler",title:"NiFi NodeGroup Autoscaler",sidebar_label:"NiFi NodeGroup Autoscaler"},sidebar:"docs",previous:{title:"NiFi UserGroup",permalink:"/nifikop/docs/v1.6.0/5_references/6_nifi_usergroup"},next:{title:"NiFi Connection",permalink:"/nifikop/docs/v1.6.0/5_references/8_nifi_connection"}},c={},l=[{value:"NifiNodeGroupAutoscaler",id:"nifinodegroupautoscaler",level:2},{value:"NifiNodeGroupAutoscalerSpec",id:"nifinodegroupautoscalerspec",level:2},{value:"NifiNodeGroupAutoscalerStatus",id:"nifinodegroupautoscalerstatus",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"NifiNodeGroupAutoscaler"})," is the Schema through which you configure automatic scaling of ",(0,s.jsx)(i.code,{children:"NifiCluster"})," deployments."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiNodeGroupAutoscaler\nmetadata:\n  name: nifinodegroupautoscaler-sample\nspec:\n  # contains the reference to the NifiCluster with the one the node group autoscaler is linked.\n  clusterRef:\n    name: nificluster-name\n    namespace: nifikop\n  # defines the id of the NodeConfig contained in NifiCluster.Spec.NodeConfigGroups\n  nodeConfigGroupId: default-node-group\n  # The selector used to identify nodes in NifiCluster.Spec.Nodes this autoscaler will manage\n  # Use Node.Labels in combination with this selector to clearly define which nodes will be managed by this autoscaler \n  nodeLabelsSelector: \n    matchLabels:\n      nifi_cr: nificluster-name\n      nifi_node_group: default-node-group\n  # the strategy used to decide how to add nodes to a nifi cluster\n  upscaleStrategy: simple\n  # the strategy used to decide how to remove nodes from an existing cluster\n  downscaleStrategy: lifo\n"})}),"\n",(0,s.jsx)(i.h2,{id:"nifinodegroupautoscaler",children:"NifiNodeGroupAutoscaler"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"metadata"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,s.jsx)(i.td,{children:"is metadata that all persisted resources must have, which includes all objects nodegroupautoscalers must create."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"spec"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#nifinodegroupautoscalerspec",children:"NifiNodeGroupAutoscalerSpec"})}),(0,s.jsx)(i.td,{children:"defines the desired state of NifiNodeGroupAutoscaler."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"status"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#nifinodegroupautoscalerstatus",children:"NifiNodeGroupAutoscalerStatus"})}),(0,s.jsx)(i.td,{children:"defines the observed state of NifiNodeGroupAutoscaler."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"nil"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"nifinodegroupautoscalerspec",children:"NifiNodeGroupAutoscalerSpec"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"clusterRef"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"./2_nifi_user#clusterreference",children:"ClusterReference"})}),(0,s.jsx)(i.td,{children:"contains the reference to the NifiCluster containing the node group this autoscaler should manage."}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"nodeConfigGroupId"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsxs)(i.td,{children:["defines the id of the ",(0,s.jsx)(i.a,{href:"./1_nifi_cluster/3_node_config",children:"NodeConfig"})," contained in ",(0,s.jsx)(i.code,{children:"NifiCluster.Spec.NodeConfigGroups"}),"."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"nodeLabelsSelector"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#LabelSelector",children:"LabelSelector"})}),(0,s.jsxs)(i.td,{children:["defines the set of labels used to identify nodes in a ",(0,s.jsx)(i.code,{children:"NifiCluster"})," node config group. Use ",(0,s.jsx)(i.code,{children:"Node.Labels"})," in combination with this selector to clearly define which nodes will be managed by this autoscaler. Take care to avoid having mutliple autoscalers managing the same nodes."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"readOnlyConfig"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"./1_nifi_cluster/2_read_only_config",children:"ReadOnlyConfig"})}),(0,s.jsxs)(i.td,{children:["defines a readOnlyConfig to apply to each node in this node group. Any settings here will override those set in the configured ",(0,s.jsx)(i.code,{children:"nodeConfigGroupId"}),"."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"nodeConfig"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"./1_nifi_cluster/3_node_config",children:"NodeConfig"})}),(0,s.jsxs)(i.td,{children:["defines a nodeConfig to apply to each node in this node group. Any settings here will override those set in the configured ",(0,s.jsx)(i.code,{children:"nodeConfigGroupId"}),"."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"upscaleStrategy"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsxs)(i.td,{children:["The strategy NiFiKop will use to scale up the nodes managed by this autoscaler. Must be one of ","simple","."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"downscaleStrategy"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsxs)(i.td,{children:["The strategy NiFiKop will use to scale down the nodes managed by this autoscaler. Must be one of ","lifo","."]}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"replicas"}),(0,s.jsx)(i.td,{children:"int"}),(0,s.jsxs)(i.td,{children:["the initial number of replicas to configure the ",(0,s.jsx)(i.code,{children:"HorizontalPodAutoscaler"})," with. After the initial configuration, this ",(0,s.jsx)(i.code,{children:"replicas"})," configuration will be automatically updated by the Kubernetes ",(0,s.jsx)(i.code,{children:"HorizontalPodAutoscaler"})," controller."]}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"nifinodegroupautoscalerstatus",children:"NifiNodeGroupAutoscalerStatus"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Field"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Default"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"state"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"the state of the nodegroup autoscaler. This is set by the autoscaler."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"replicas"}),(0,s.jsx)(i.td,{children:"int"}),(0,s.jsx)(i.td,{children:"the current number of replicas running in the node group this autoscaler is managing. This is set by the autoscaler."}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"selector"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsxs)(i.td,{children:["the ",(0,s.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"selector"})," used by the ",(0,s.jsx)(i.code,{children:"HorizontalPodAutoscaler"})," controller to identify the replicas in this node group. This is set by the autoscaler."]}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"-"})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43023:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>o});var s=t(63696);const n={},r=s.createContext(n);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);