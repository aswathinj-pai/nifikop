"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[53052],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(25773),r=n(30808),a=(n(27378),n(35318)),o=["components"],s={id:"4_nifi_user_group",title:"Provisioning NiFi Users and Groups",sidebar_label:"NiFi Users and Groups"},l=void 0,c={unversionedId:"3_tasks/4_nifi_user_group",id:"version-v0.6.1/3_tasks/4_nifi_user_group",title:"Provisioning NiFi Users and Groups",description:"User management",source:"@site/versioned_docs/version-v0.6.1/3_tasks/4_nifi_user_group.md",sourceDirName:"3_tasks",slug:"/3_tasks/4_nifi_user_group",permalink:"/nifikop/docs/v0.6.1/3_tasks/4_nifi_user_group",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/3_tasks/4_nifi_user_group.md",tags:[],version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,formattedLastUpdatedAt:"May 16, 2021",frontMatter:{id:"4_nifi_user_group",title:"Provisioning NiFi Users and Groups",sidebar_label:"NiFi Users and Groups"},sidebar:"version-v0.6.1/docs",previous:{title:"NiFi Dataflows",permalink:"/nifikop/docs/v0.6.1/3_tasks/3_nifi_dataflow"},next:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.6.1/5_references/1_nifi_cluster/"}},p={},u=[{value:"User management",id:"user-management",level:2},{value:"UserGroup management",id:"usergroup-management",level:2},{value:"Managed groups for simple setup",id:"managed-groups-for-simple-setup",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"user-management"},"User management"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource was already introduced for the ",(0,a.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.6.1/3_tasks/2_security/1_ssl#create-ssl-credentials"},"SSL credentials")," concerns.\nWhat we are covering here is the NiFi user management part introduced in this resource."),(0,a.kt)("p",null,"When you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource the operator will :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Try to check if a user already exists with the same name on the NiFi cluster, if it does, the operator will set ",(0,a.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.6.1/3_tasks/2_security/1_ssl#create-ssl-credentials"},"NifiUser.Status.Id")," to bind it with the kubernetes resource."),(0,a.kt)("li",{parentName:"ol"},"If no user is found, the operator will create and manage it (i.e it will ensure the synchronisation with the NiFi Cluster).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  # identity field is use to define the user identity on NiFi cluster side,\n  # it use full when the user\'s name doesn\'t suite with Kubernetes resource name.\n  identity: alexandre.guitton@orange.com\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # Whether or not the the operator also include a Java keystore format (JKS) with you secret\n  includeJKS: false\n  # Whether or not a certificate will be created for this user.\n  createCert: false\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: component\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /data\n      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n      # access policy\n      componentType: "process-groups"\n      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n      # access policy\n      componentId: ""\n')),(0,a.kt)("p",null,"By default the user name that will be used is the name of the resource."),(0,a.kt)("p",null,"But as there are some constraints on this name (e.g ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names"},"RFC 1123"),") that doesn't match with those applied on NiFi, you can override it with the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser.Spec.Identity")," field which is more permissive.\nIn the example above the kubernetes resource name will be ",(0,a.kt)("inlineCode",{parentName:"p"},"aguitton")," but the NiFi use created on the cluster will be ",(0,a.kt)("inlineCode",{parentName:"p"},"alexandre.guitton@orange.com"),"."),(0,a.kt)("p",null,"In the case the user will not authenticate himself using TLS authentication, the operator doesn't have to create a certificate, so just set ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser.Spec.CreateCert")," to false."),(0,a.kt)("p",null,"For each user, you have the ability to define a list of ",(0,a.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.6.1/5_references/2_nifi_user#accesspolicy"},"AccessPolicies")," to give a list of access to your user.\nIn the example above we are giving to user ",(0,a.kt)("inlineCode",{parentName:"p"},"alexandre.guitton@orange.com")," the right to view metadata et content for the root process group in flowfile queues in outbound connections and through provenance events."),(0,a.kt)("h2",{id:"usergroup-management"},"UserGroup management"),(0,a.kt)("p",null,"To simplify the access management Apache NiFi allows to define groups containing a list of users, on which we apply a list of access policies.\nThis part is supported by the operator using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUserGroup")," resource : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # contains the list of reference to NifiUsers that are part to the group.\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n#      namespace: nifikop\n    - name: nc-controller.nifikop.mgt.cluster.local\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: global\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /counters\n#      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n#      # access policy\n#      componentType: "process-groups"\n#      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n#      # access policy\n#      componentId: ""\n')),(0,a.kt)("p",null,"When you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUserGroup")," resource, the operator will create and manage a group named ",(0,a.kt)("inlineCode",{parentName:"p"},"${resource namespace}-${resource name}")," in Nifi.\nTo declare the users that are part of this group, you just have to declare them in the ",(0,a.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.6.1/5_references/6_nifi_usergroup#userreference"},"NifiUserGroup.UsersRef")," field."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.6.1/5_references/6_nifi_usergroup#userreference"},"NifiUserGroup.UsersRef")," requires to declare the name and namespace of a ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource, so it is previously required to declare the resource. "),(0,a.kt)("p",{parentName:"admonition"},"It's required to create the resource even if the user is already declared in NiFi Cluster (In that case the operator will just sync the kubernetes resource).")),(0,a.kt)("p",null,"Like for ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser")," you can declare a list of ",(0,a.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.6.1/5_references/2_nifi_user#accesspolicy"},"AccessPolicies")," to give a list of access to your user."),(0,a.kt)("p",null,"In the example above we are giving to users ",(0,a.kt)("inlineCode",{parentName:"p"},"nc-0-node.nc-headless.nifikop.svc.cluster.local")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nc-controller.nifikop.mgt.cluster.local")," the right to view the counters informations."),(0,a.kt)("h2",{id:"managed-groups-for-simple-setup"},"Managed groups for simple setup"),(0,a.kt)("p",null,"In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," files ...\nTo simplify this, we implement in the operator 2 ",(0,a.kt)("inlineCode",{parentName:"p"},"managed groups")," : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Admins :")," a group giving access to everything on the NiFi Cluster,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Readers :")," a group giving access as viewer on the NiFi Cluster.")),(0,a.kt)("p",null,"You can directly define the list of users who belong to each of them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec")," field : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  ...\n  oneNifiNodePerNode: false\n  #\n  propagateLabels: true\n  managedAdminUsers:\n    -  identity : "alexandre.guitton@orange.com"\n       name: "aguitton"\n    -  identity : "nifiuser@orange.com"\n       name: "nifiuser"\n  managedReaderUsers:\n    -  identity : "toto@orange.com"\n       name: "toto"\n    ...\n')),(0,a.kt)("p",null,"In this example the operator will create and manage 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUsers")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"aguitton"),", with the identity : ",(0,a.kt)("inlineCode",{parentName:"li"},"alexandre.guitton@orange.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nifiuser"),", with the identity : ",(0,a.kt)("inlineCode",{parentName:"li"},"nifiuser@orange.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"toto"),", with the identity : ",(0,a.kt)("inlineCode",{parentName:"li"},"toto@orange.com"))),(0,a.kt)("p",null,"And create and manage two groups : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"managed-admins :")," that will contain 3 users (",(0,a.kt)("strong",{parentName:"li"},"aguitton"),", ",(0,a.kt)("strong",{parentName:"li"},"nifiuser"),", ",(0,a.kt)("strong",{parentName:"li"},"nc-controller.nifikop.mgt.cluster.local")," which is the controller user)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"managed-readers :")," that will contain 1 user (",(0,a.kt)("strong",{parentName:"li"},"toto"),")")),(0,a.kt)("p",null,"And the rest of the stuff will be reconciled and managed as described for ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUsers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUserGroups"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is one more group that is created and managed by the operator, this is the ",(0,a.kt)("strong",{parentName:"p"},"managed-nodes")," group, for each node a ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUser")," is created, and we automatically add them to this group to give them the right list of accesses."),(0,a.kt)("p",{parentName:"admonition"},"To get the list of managed groups just check the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiUserGroup")," : "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get -n nifikop nifiusergroups.nifi.orange.com \nNAME              AGE\nmanaged-admins    6d7h\nmanaged-nodes     6d7h\nmanaged-readers   6d7h\n"))))}m.isMDXComponent=!0}}]);