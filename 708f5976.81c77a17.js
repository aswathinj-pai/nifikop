(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),r=(n(0),n(488)),o={id:"4_nifi_user_group",title:"Provisioning NiFi Users and Groups",sidebar_label:"NiFi Users and Groups"},s={unversionedId:"3_tasks/4_nifi_user_group",id:"version-v0.7.0/3_tasks/4_nifi_user_group",isDocsHomePage:!1,title:"Provisioning NiFi Users and Groups",description:"User management",source:"@site/versioned_docs/version-v0.7.0/3_tasks/4_nifi_user_group.md",slug:"/3_tasks/4_nifi_user_group",permalink:"/nifikop/docs/v0.7.0/3_tasks/4_nifi_user_group",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.0/3_tasks/4_nifi_user_group.md",version:"v0.7.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"NiFi Users and Groups",sidebar:"version-v0.7.0/docs",previous:{title:"Provisioning NiFi Dataflows",permalink:"/nifikop/docs/v0.7.0/3_tasks/3_nifi_dataflow"},next:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/1_nifi_cluster"}},c=[{value:"User management",id:"user-management",children:[]},{value:"UserGroup management",id:"usergroup-management",children:[]},{value:"Managed groups for simple setup",id:"managed-groups-for-simple-setup",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"user-management"},"User management"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser")," resource was already introduced for the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.0/3_tasks/2_security/1_ssl#create-ssl-credentials"}),"SSL credentials")," concerns.\nWhat we are covering here is the NiFi user management part introduced in this resource."),Object(r.b)("p",null,"When you create a ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser")," resource the operator will :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Try to check if a user already exists with the same name on the NiFi cluster, if it does, the operator will set ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/nifikop/docs/v0.7.0/3_tasks/2_security/1_ssl#create-ssl-credentials"}),"NifiUser.Status.Id")," to bind it with the kubernetes resource."),Object(r.b)("li",{parentName:"ol"},"If no user is found, the operator will create and manage it (i.e it will ensure the synchronisation with the NiFi Cluster).")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  # identity field is use to define the user identity on NiFi cluster side,\n  # it use full when the user\'s name doesn\'t suite with Kubernetes resource name.\n  identity: alexandre.guitton@orange.com\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # Whether or not the the operator also include a Java keystore format (JKS) with you secret\n  includeJKS: false\n  # Whether or not a certificate will be created for this user.\n  createCert: false\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n    # defines the kind of access policy, could be "global" or "component".\n    - type: component\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /data\n      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n      # access policy\n      componentType: \'process-groups\'\n      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n      # access policy\n      componentId: \'\'\n')),Object(r.b)("p",null,"By default the user name that will be used is the name of the resource."),Object(r.b)("p",null,"But as there are some constraints on this name (e.g ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names"}),"RFC 1123"),") that doesn't match with those applied on NiFi, you can override it with the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser.Spec.Identity")," field which is more permissive.\nIn the example above the kubernetes resource name will be ",Object(r.b)("inlineCode",{parentName:"p"},"aguitton")," but the NiFi use created on the cluster will be ",Object(r.b)("inlineCode",{parentName:"p"},"alexandre.guitton@orange.com"),"."),Object(r.b)("p",null,"In the case the user will not authenticate himself using TLS authentication, the operator doesn't have to create a certificate, so just set ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser.Spec.CreateCert")," to false."),Object(r.b)("p",null,"For each user, you have the ability to define a list of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.0/5_references/2_nifi_user#accesspolicy"}),"AccessPolicies")," to give a list of access to your user.\nIn the example above we are giving to user ",Object(r.b)("inlineCode",{parentName:"p"},"alexandre.guitton@orange.com")," the right to view metadata et content for the root process group in flowfile queues in outbound connections and through provenance events."),Object(r.b)("h2",{id:"usergroup-management"},"UserGroup management"),Object(r.b)("p",null,"To simplify the access management Apache NiFi allows to define groups containing a list of users, on which we apply a list of access policies.\nThis part is supported by the operator using the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," resource :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # contains the list of reference to NifiUsers that are part to the group.\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    #      namespace: nifikop\n    - name: nc-controller.nifikop.mgt.cluster.local\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n    # defines the kind of access policy, could be "global" or "component".\n    - type: global\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /counters\n#      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n#      # access policy\n#      componentType: "process-groups"\n#      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n#      # access policy\n#      componentId: ""\n')),Object(r.b)("p",null,"When you create a ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," resource, the operator will create and manage a group named ",Object(r.b)("inlineCode",{parentName:"p"},"${resource namespace}-${resource name}")," in Nifi.\nTo declare the users that are part of this group, you just have to declare them in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.0/5_references/6_nifi_usergroup#userreference"}),"NifiUserGroup.UsersRef")," field."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.0/5_references/6_nifi_usergroup#userreference"}),"NifiUserGroup.UsersRef")," requires to declare the name and namespace of a ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser")," resource, so it is previously required to declare the resource."),Object(r.b)("p",{parentName:"div"},"It's required to create the resource even if the user is already declared in NiFi Cluster (In that case the operator will just sync the kubernetes resource)."))),Object(r.b)("p",null,"Like for ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser")," you can declare a list of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.0/5_references/2_nifi_user#accesspolicy"}),"AccessPolicies")," to give a list of access to your user."),Object(r.b)("p",null,"In the example above we are giving to users ",Object(r.b)("inlineCode",{parentName:"p"},"nc-0-node.nc-headless.nifikop.svc.cluster.local")," and ",Object(r.b)("inlineCode",{parentName:"p"},"nc-controller.nifikop.mgt.cluster.local")," the right to view the counters informations."),Object(r.b)("h2",{id:"managed-groups-for-simple-setup"},"Managed groups for simple setup"),Object(r.b)("p",null,"In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of ",Object(r.b)("inlineCode",{parentName:"p"},".yaml")," files ...\nTo simplify this, we implement in the operator 2 ",Object(r.b)("inlineCode",{parentName:"p"},"managed groups")," :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Admins :")," a group giving access to everything on the NiFi Cluster,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Readers :")," a group giving access as viewer on the NiFi Cluster.")),Object(r.b)("p",null,"You can directly define the list of users who belong to each of them in the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster.Spec")," field :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  ...\n  oneNifiNodePerNode: false\n  #\n  propagateLabels: true\n  managedAdminUsers:\n    -  identity : "alexandre.guitton@orange.com"\n       name: "aguitton"\n    -  identity : "nifiuser@orange.com"\n       name: "nifiuser"\n  managedReaderUsers:\n    -  identity : "toto@orange.com"\n       name: "toto"\n    ...\n')),Object(r.b)("p",null,"In this example the operator will create and manage 3 ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUsers")," :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"aguitton"),", with the identity : ",Object(r.b)("inlineCode",{parentName:"li"},"alexandre.guitton@orange.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nifiuser"),", with the identity : ",Object(r.b)("inlineCode",{parentName:"li"},"nifiuser@orange.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"toto"),", with the identity : ",Object(r.b)("inlineCode",{parentName:"li"},"toto@orange.com"))),Object(r.b)("p",null,"And create and manage two groups :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"managed-admins :")," that will contain 3 users (",Object(r.b)("strong",{parentName:"li"},"aguitton"),", ",Object(r.b)("strong",{parentName:"li"},"nifiuser"),", ",Object(r.b)("strong",{parentName:"li"},"nc-controller.nifikop.mgt.cluster.local")," which is the controller user)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"managed-readers :")," that will contain 1 user (",Object(r.b)("strong",{parentName:"li"},"toto"),")")),Object(r.b)("p",null,"And the rest of the stuff will be reconciled and managed as described for ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUsers")," and ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUserGroups"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is one more group that is created and managed by the operator, this is the ",Object(r.b)("strong",{parentName:"p"},"managed-nodes")," group, for each node a ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser")," is created, and we automatically add them to this group to give them the right list of accesses."),Object(r.b)("p",{parentName:"div"},"To get the list of managed groups just check the list of ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," :"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-console"}),"kubectl get -n nifikop nifiusergroups.nifi.orange.com\nNAME              AGE\nmanaged-admins    6d7h\nmanaged-nodes     6d7h\nmanaged-readers   6d7h\n")))))}p.isMDXComponent=!0},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);