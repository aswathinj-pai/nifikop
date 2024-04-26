"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96003],{72926:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var i=s(62540),d=s(43023);const n={id:"5_node_state",title:"Node state",sidebar_label:"Node state"},r=void 0,c={id:"5_references/1_nifi_cluster/5_node_state",title:"Node state",description:"Holds information about nifi state",source:"@site/versioned_docs/version-v1.4.0/5_references/1_nifi_cluster/5_node_state.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/5_node_state",permalink:"/nifikop/docs/v1.4.0/5_references/1_nifi_cluster/5_node_state",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.0/5_references/1_nifi_cluster/5_node_state.md",tags:[],version:"v1.4.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1695033526e3,frontMatter:{id:"5_node_state",title:"Node state",sidebar_label:"Node state"},sidebar:"docs",previous:{title:"Node",permalink:"/nifikop/docs/v1.4.0/5_references/1_nifi_cluster/4_node"},next:{title:"Listeners Config",permalink:"/nifikop/docs/v1.4.0/5_references/1_nifi_cluster/6_listeners_config"}},l={},h=[{value:"NodeState",id:"nodestate",level:2},{value:"GracefulActionState",id:"gracefulactionstate",level:2},{value:"ConfigurationState",id:"configurationstate",level:2},{value:"InitClusterNode",id:"initclusternode",level:2},{value:"State",id:"state",level:2},{value:"Upscale",id:"upscale",level:3},{value:"Downscale",id:"downscale",level:3},{value:"ActionStep",id:"actionstep",level:2}];function a(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Holds information about nifi state"}),"\n",(0,i.jsx)(t.h2,{id:"nodestate",children:"NodeState"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"gracefulActionState"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#gracefulactionstate",children:"GracefulActionState"})}),(0,i.jsx)(t.td,{children:"holds info about nifi cluster action status."}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"configurationState"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#configurationstate",children:"ConfigurationState"})}),(0,i.jsx)(t.td,{children:"holds info about the config."}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"initClusterNode"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#initclusternode",children:"InitClusterNode"})}),(0,i.jsx)(t.td,{children:"contains if this nodes was part of the initial cluster."}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"podIsReady"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"True if the pod for this node is up and running. Otherwise false."}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"creationTime"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#Time",children:"v1.Time"})}),(0,i.jsx)(t.td,{children:"The time at which this node was created and added to the cluster"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"gracefulactionstate",children:"GracefulActionState"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"errorMessage"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"holds the information what happened with Nifi Cluster."}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actionStep"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#actionstep",children:"ActionStep"})}),(0,i.jsx)(t.td,{children:"holds info about the action step ran."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"nil"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"taskStarted"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"hold the time when the execution started."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actionState"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#state",children:"State"})}),(0,i.jsx)(t.td,{children:"holds the information about Action state."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"configurationstate",children:"ConfigurationState"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigInSync"}),(0,i.jsx)(t.td,{children:"ConfigInSync"}),(0,i.jsx)(t.td,{children:"states that the generated nodeConfig is in sync with the Node"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigOutOfSync"}),(0,i.jsx)(t.td,{children:"ConfigOutOfSync"}),(0,i.jsx)(t.td,{children:"states that the generated nodeConfig is out of sync with the Node"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"initclusternode",children:"InitClusterNode"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsInitClusterNode"}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"states the node is part of initial cluster setup"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"NotInitClusterNode"}),(0,i.jsx)(t.td,{children:"false"}),(0,i.jsx)(t.td,{children:"states the node is not part of initial cluster setup"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"state",children:"State"}),"\n",(0,i.jsx)(t.h3,{id:"upscale",children:"Upscale"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulUpscaleRequired"}),(0,i.jsx)(t.td,{children:"GracefulUpscaleRequired"}),(0,i.jsx)(t.td,{children:"states that a node upscale is required."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulUpscaleRunning"}),(0,i.jsx)(t.td,{children:"GracefulUpscaleRunning"}),(0,i.jsx)(t.td,{children:"states that the node upscale task is still running."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulUpscaleSucceeded"}),(0,i.jsx)(t.td,{children:"GracefulUpscaleSucceeded"}),(0,i.jsx)(t.td,{children:"states the node is updated gracefully."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"downscale",children:"Downscale"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulDownscaleRequired"}),(0,i.jsx)(t.td,{children:"GracefulDownscaleRequired"}),(0,i.jsx)(t.td,{children:"states that a node downscale is required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulDownscaleRunning"}),(0,i.jsx)(t.td,{children:"GracefulDownscaleRunning"}),(0,i.jsx)(t.td,{children:"states that the node downscale is still running in"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GracefulUpscaleSucceeded"}),(0,i.jsx)(t.td,{children:"GracefulUpscaleSucceeded"}),(0,i.jsx)(t.td,{children:"states the node is updated gracefully"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"actionstep",children:"ActionStep"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DisconnectNodeAction"}),(0,i.jsx)(t.td,{children:"DISCONNECTING"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is disconnecting from NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DisconnectStatus"}),(0,i.jsx)(t.td,{children:"DISCONNECTED"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is disconnected from NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OffloadNodeAction"}),(0,i.jsx)(t.td,{children:"OFFLOADING"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is offloading data to NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OffloadStatus"}),(0,i.jsx)(t.td,{children:"OFFLOADED"}),(0,i.jsx)(t.td,{children:"states that the NiFi node offloaded data to NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemovePodAction"}),(0,i.jsx)(t.td,{children:"POD_REMOVING"}),(0,i.jsx)(t.td,{children:"states that the NiFi node pod and object related are removing by operator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemovePodStatus"}),(0,i.jsx)(t.td,{children:"POD_REMOVED"}),(0,i.jsx)(t.td,{children:"states that the NiFi node pod and object related have been removed by operator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveNodeAction"}),(0,i.jsx)(t.td,{children:"REMOVING"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is removing from NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveStatus"}),(0,i.jsx)(t.td,{children:"REMOVED"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is removed from NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConnectNodeAction"}),(0,i.jsx)(t.td,{children:"CONNECTING"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is connecting to the NiFi Cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConnectStatus"}),(0,i.jsx)(t.td,{children:"CONNECTED"}),(0,i.jsx)(t.td,{children:"states that the NiFi node is connected to the NiFi Cluster."})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var i=s(63696);const d={},n=i.createContext(d);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);