"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25107],{84364:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(24246),r=i(71670);const o={id:"1_developer_guide",title:"Developer guide",sidebar_label:"Developer guide"},s=void 0,l={id:"6_contributing/1_developer_guide",title:"Developer guide",description:"Operator SDK",source:"@site/../docs/6_contributing/1_developer_guide.md",sourceDirName:"6_contributing",slug:"/6_contributing/1_developer_guide",permalink:"/nifikop/docs/next/6_contributing/1_developer_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/6_contributing/1_developer_guide.md",tags:[],version:"current",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707495031,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"1_developer_guide",title:"Developer guide",sidebar_label:"Developer guide"},sidebar:"docs",previous:{title:"Contribution organization",permalink:"/nifikop/docs/next/6_contributing/0_contribution_organization"},next:{title:"Reporting bugs",permalink:"/nifikop/docs/next/6_contributing/2_reporting_bugs"}},a={},c=[{value:"Operator SDK",id:"operator-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initial setup",id:"initial-setup",level:3},{value:"Operator sdk",id:"operator-sdk-1",level:3},{value:"Build NiFiKop",id:"build-nifikop",level:3},{value:"Local environment",id:"local-environment",level:4},{value:"Run NiFiKop",id:"run-nifikop",level:3},{value:"Run the Operator Locally with the Go Binary",id:"run-the-operator-locally-with-the-go-binary",level:4},{value:"Deploy using the Helm Charts",id:"deploy-using-the-helm-charts",level:4},{value:"Helm",id:"helm",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"operator-sdk",children:"Operator SDK"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"NiFiKop has been validated with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://golang.org/doc/install",children:"go"})," version v1.22+."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"docker"})," version 18.09+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"kubectl"})," version v1.16+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," version v3.4.2"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/operator-framework/operator-sdk",children:"Operator sdk"})," version v1.33.0"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"initial-setup",children:"Initial setup"}),"\n",(0,t.jsx)(n.p,{children:"Checkout the project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/konpyutaika/nifikop.git\ncd nifikop\n"})}),"\n",(0,t.jsx)(n.h3,{id:"operator-sdk-1",children:"Operator sdk"}),"\n",(0,t.jsxs)(n.p,{children:["The full list of commands is available here: ",(0,t.jsx)(n.a,{href:"https://sdk.operatorframework.io/docs/cli/",children:"https://sdk.operatorframework.io/docs/cli/"})]}),"\n",(0,t.jsx)(n.h3,{id:"build-nifikop",children:"Build NiFiKop"}),"\n",(0,t.jsx)(n.h4,{id:"local-environment",children:"Local environment"}),"\n",(0,t.jsx)(n.p,{children:"If you prefer working directly with your local go environment you can simply uses:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-nifikop",children:"Run NiFiKop"}),"\n",(0,t.jsx)(n.p,{children:"We can quickly run NiFiKop in development mode (on your local host), then it will use your kubectl configuration file to connect to your kubernetes cluster."}),"\n",(0,t.jsx)(n.p,{children:"There are several ways to execute your operator:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using your IDE directly"}),"\n",(0,t.jsx)(n.li,{children:"Executing directly the Go binary"}),"\n",(0,t.jsx)(n.li,{children:"deploying using the Helm charts"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you want to configure your development IDE, you need to give it environment variables so that it will uses to connect to kubernetes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"KUBECONFIG={path/to/your/kubeconfig}\nWATCH_NAMESPACE={namespace_to_watch}\nPOD_NAME={name for operator pod}\nLOG_LEVEL=Debug\nOPERATOR_NAME=ide\n"})}),"\n",(0,t.jsx)(n.h4,{id:"run-the-operator-locally-with-the-go-binary",children:"Run the Operator Locally with the Go Binary"}),"\n",(0,t.jsx)(n.p,{children:"This method can be used to run the operator locally outside of the cluster. This method may be preferred during development as it facilitates faster deployment and testing."}),"\n",(0,t.jsx)(n.p,{children:"Set the name of the operator in an environment variable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export OPERATOR_NAME=nifi-operator\n"})}),"\n",(0,t.jsx)(n.p,{children:"Deploy the CRDs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"And deploy the operator."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make run\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will run the operator in the ",(0,t.jsx)(n.code,{children:"default"})," namespace using the default Kubernetes config file at ",(0,t.jsx)(n.code,{children:"$HOME/.kube/config"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"deploy-using-the-helm-charts",children:"Deploy using the Helm Charts"}),"\n",(0,t.jsx)(n.p,{children:"This section provides an instructions for running the operator Helm charts with an image that is built from the local branch."}),"\n",(0,t.jsx)(n.p,{children:"Build the image from the current branch."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export DOCKER_REPO_BASE={your-docker-repo}\nmake docker-build\n"})}),"\n",(0,t.jsx)(n.p,{children:"Push the image to docker hub (or to whichever repo you want to use)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ make docker-push\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The image tag is a combination of the version as defined in ",(0,t.jsx)(n.code,{children:"verion/version.go"})," and the branch name."]})}),"\n",(0,t.jsx)(n.p,{children:"Install the Helm chart."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm install skeleton ./helm/nifikop \\\n    --set image.tag=v0.5.1-release \\\n    --namespace-{"nifikop"}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"image.repository"})," and ",(0,t.jsx)(n.code,{children:"image.tag"})," template variables have to match the names from the image that we pushed in the previous step."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"We set the chart name to the branch, but it can be anything."})}),"\n",(0,t.jsx)(n.p,{children:"Lastly, verify that the operator is running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kubectl get pods -n nifikop\nNAME                                                READY   STATUS    RESTARTS   AGE\nskeleton-nifikop-8946b89dc-4cfs9   1/1     Running   0          7m45s\n"})}),"\n",(0,t.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,t.jsxs)(n.p,{children:["The NiFiKop operator is released in the ",(0,t.jsx)(n.code,{children:"konpyutaika-incubator"})," helm repository."]}),"\n",(0,t.jsx)(n.p,{children:"In order to package the chart you need to run the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make helm-package\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(27378);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);