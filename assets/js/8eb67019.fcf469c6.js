"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[62459],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(38944);const i="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(25773),r=n(27378),i=n(38944),o=n(83457),l=n(35331),u=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,p=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=f[0],b=f[1],v=k({queryString:u,groupId:s}),g=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],_=N[1],C=function(){var e=null!=g?g:w;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),_(e)}),[y,_,p]),tabValues:p}}var h=n(76457);const b="tabList_J5MA",v="tabItem_l0OV";function g(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==l&&(p(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},25086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=n(23930),l=n(39798),u=["components"],s={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},c=void 0,p={unversionedId:"2_deploy_nifikop/1_quick_start",id:"version-v1.2.0/2_deploy_nifikop/1_quick_start",title:"Quick start",description:"For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the version compatibility page",source:"@site/versioned_docs/version-v1.2.0/2_deploy_nifikop/1_quick_start.md",sourceDirName:"2_deploy_nifikop",slug:"/2_deploy_nifikop/1_quick_start",permalink:"/nifikop/docs/v1.2.0/2_deploy_nifikop/1_quick_start",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.2.0/2_deploy_nifikop/1_quick_start.md",tags:[],version:"v1.2.0",lastUpdatedBy:"fbarchetta",lastUpdatedAt:1694531065,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/v1.2.0/1_concepts/4_roadmap"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v1.2.0/2_deploy_nifikop/2_customizable_install_with_helm"}},m={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cluster Setup",id:"cluster-setup",level:3},{value:"Install kubectl",id:"install-kubectl",level:3},{value:"Configure kubectl",id:"configure-kubectl",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:2},{value:"Deploy NiFiKop",id:"deploy-nifikop",level:2}],k={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the ",(0,i.kt)("a",{parentName:"p",href:"../4_compatibility_versions"},"version compatibility page")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"cluster-setup"},"Cluster Setup"),(0,i.kt)("p",null,"For local testing we recommend following one of the following setup guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/kubernetes"},"Docker Desktop (Mac)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start"},"Minikube"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Start Minikube with at least 4gb RAM with ",(0,i.kt)("inlineCode",{parentName:"p"},"minikube start --memory=4000")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")),(0,i.kt)("li",{parentName:"ul"},"For testing on GKE you can ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster"},"create a cluster with the command line or the Cloud Console UI"),"."),(0,i.kt)("li",{parentName:"ul"},"For testing on EKS you can ",(0,i.kt)("a",{parentName:"li",href:"https://eksctl.io/introduction/"},"install eksctl")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"eksctl create cluster")," to create an EKS cluster/VPC/subnets/etc. This process should take 10-15 minutes.")),(0,i.kt)("h3",{id:"install-kubectl"},"Install kubectl"),(0,i.kt)("p",null,"If you do not already have the CLI tool ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," installed, please follow ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"these instructions to install"),"."),(0,i.kt)("h3",{id:"configure-kubectl"},"Configure kubectl"),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster by using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config use-context my-cluster-name"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For GKE",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud auth login"),"."),(0,i.kt)("li",{parentName:"ul"},"On the Google Cloud Console, the cluster page will have a ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect")," button, which will give a command to run locally that looks like")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"gcloud container clusters get-credentials CLUSTER_NAME --zone ZONE_NAME --project PROJECT_NAME.\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config get-contexts")," to show the contexts available."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config use-context ${gke context}")," to access the cluster from ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),"."))),(0,i.kt)("li",{parentName:"ul"},"For EKS ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"},"Configure your AWS CLI")," to connect to your project. "),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://eksctl.io/introduction/"},"eksctl")," "),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"eksctl utils write-kubeconfig --cluster=${CLUSTER NAME}")," to make the context available to ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," "),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config get-context"),"s to show the contexts available. "),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config use-context ${eks context}")," to access the cluster with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),".")))),(0,i.kt)("h2",{id:"install-cert-manager"},"Install cert-manager"),(0,i.kt)("p",null,"The NiFiKop operator uses ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."),(0,i.kt)(o.Z,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"directly",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"))),(0,i.kt)(l.Z,{value:"helm3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n")))),(0,i.kt)("h2",{id:"deploy-nifikop"},"Deploy NiFiKop"),(0,i.kt)("p",null,"You can deploy the operator using a Helm chart ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/konpyutaika/nifikop/tree/master/helm"},"Helm chart"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To install an other version of the operator use ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"))),(0,i.kt)("p",null,"In the case where you don't want to deploy the crds using helm (",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-crds"),"), you have to deploy manually the crds :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n")),(0,i.kt)("admonition",{title:"Conversion webhook",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"In case you keep the conversion webhook enabled (to handle the conversion of resources from ",(0,i.kt)("inlineCode",{parentName:"p"},"v1alpha1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),")\nyou will need to add the following settings to your yaml definition of CRDs:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n")),(0,i.kt)("p",{parentName:"admonition"},"Where :"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace"),": is the namespace in which you will deploy your helm chart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certificate_name"),": is ",(0,i.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webhook_service_name"),": is ",(0,i.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert")))),(0,i.kt)("p",null,"Now deploy the helm chart :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 1.2.0 \\\n    --set image.tag=v1.2.0-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Add the following parameter if you are using this instance to only deploy unsecured clusters : ",(0,i.kt)("inlineCode",{parentName:"p"},"--set certManager.enabled=false"))))}f.isMDXComponent=!0}}]);