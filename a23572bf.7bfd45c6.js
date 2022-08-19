(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{420:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var i=r(2),n=r(6),a=(r(0),r(637)),o=["components"],s={id:"1_authorizer",title:"Custom User Authorizers",sidebar_label:"Custom Authorizers"},c={unversionedId:"3_tasks/2_security/2_authorization/1_authorizer",id:"3_tasks/2_security/2_authorization/1_authorizer",isDocsHomePage:!1,title:"Custom User Authorizers",description:"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient.",source:"@site/../docs/3_tasks/2_security/2_authorization/1_custom_authorizer.md",slug:"/3_tasks/2_security/2_authorization/1_authorizer",permalink:"/nifikop/docs/next/3_tasks/2_security/2_authorization/1_authorizer",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_tasks/2_security/2_authorization/1_custom_authorizer.md",version:"current",lastUpdatedBy:"Michael H",lastUpdatedAt:1648460716,sidebar_label:"Custom Authorizers",sidebar:"docs",previous:{title:"OpenId Connect",permalink:"/nifikop/docs/next/3_tasks/2_security/2_authentication/1_oidc"},next:{title:"Provisioning NiFi Dataflows",permalink:"/nifikop/docs/next/3_tasks/3_nifi_dataflow"}},p=[],u={rightToc:p};function d(e){var t=e.components,r=Object(n.a)(e,o);return Object(a.b)("wrapper",Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient."))),Object(a.b)("p",null,"According to the NiFi Admin Guide, an ",Object(a.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"},"Authorizer")," grants users the privileges to manage users and policies by creating preliminary authorizations at startup. By default, the ",Object(a.b)("inlineCode",{parentName:"p"},"StandardManagedAuthorizer")," leverages a ",Object(a.b)("inlineCode",{parentName:"p"},"FileUserGroupProvider")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"FileAccessPolicyProvider")," which are file-based rules for each user you allow to interact with your NiFi cluster."),Object(a.b)("p",null,"In many cases, the default authorizer configuration is enough to control access to a NiFi cluster. However, there may be advanced cases where the default ",Object(a.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#standardmanagedauthorizer"},Object(a.b)("inlineCode",{parentName:"a"},"managed-authorizer"))," isn't sufficient to make every authorization decision you need. In this case, you can provide a custom authorizer extension and use that instead."),Object(a.b)("p",null,"Suppose a custom Authorizer is written and deployed with NiFi that reads the rules from a remote database rather than a local file. We'll call this ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseAuthorizer"),". Also suppose it is composed of a ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseUserGroupProvider")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseAccessPolicyProvider"),". In order to leverage these, they must end up on NiFi's classpath."),Object(a.b)("p",null,"In order to use this authorizer, you need to update NiFi's ",Object(a.b)("inlineCode",{parentName:"p"},"authorizers.xml")," configuration. This can be done through NiFiKOp by setting either the ",Object(a.b)("inlineCode",{parentName:"p"},"Spec.readOnlyConfig.authorizerConfig.replaceTemplateConfigMap")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Spec.readOnlyConfig.authorizerConfig.replaceTemplateSecretConfig"),". The NiFiKOp deployment is dynamic in that node identities are determined at deploy time, so the authorizer configuration is templated to account for this. This means that the replacement ConfigMap or Secret must also be templated."),Object(a.b)("p",null,"Following the example, the below would be a sufficient authorizer template replacement:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'{{- $nodeList := .NodeList }}\n{{- $clusterName := .ClusterName }}\n{{- $namespace := .Namespace }}<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<authorizers>\n    <userGroupProvider>\n        <identifier>file-user-group-provider</identifier>\n        <class>org.apache.nifi.authorization.FileUserGroupProvider</class>\n        <property name="Users File">../data/users.xml</property>\n        <property name="Legacy Authorized Users File"></property>\n        <property name="Initial User Identity admin">{{ .ControllerUser }}</property>\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <userGroupProvider>\n        <identifier>database-user-group-provider</identifier>\n        <class>my.custom.DatabaseUserGroupProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <accessPolicyProvider>\n        <identifier>file-access-policy-provider</identifier>\n        <class>org.apache.nifi.authorization.FileAccessPolicyProvider</class>\n        <property name="User Group Provider">file-user-group-provider</property>\n        <property name="Authorizations File">../data/authorizations.xml</property>\n        <property name="Initial Admin Identity">{{ .ControllerUser }}</property>\n        <property name="Legacy Authorized Users File"></property>\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n        <property name="Node Group"></property>\n    </accessPolicyProvider>\n    <accessPolicyProvider>\n        <identifier>database-access-policy-provider</identifier>\n        <class>my.custom.DatabaseAccessPolicyProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n        <property name="Node Group"></property>\n    </accessPolicyProvider>\n    <authorizer>\n        <identifier>managed-authorizer</identifier>\n        <class>org.apache.nifi.authorization.StandardManagedAuthorizer</class>\n        <property name="Access Policy Provider">file-access-policy-provider</property>\n    </authorizer>\n    <authorizer>\n        <identifier>custom-database-authorizer</identifier>\n        <class>my.custom.DatabaseAuthorizer</class>\n        <property name="Access Policy Provider">database-access-policy-provider</property>\n    </authorizer>\n</authorizers>\n')),Object(a.b)("p",null,"And finally, the NiFi property ",Object(a.b)("inlineCode",{parentName:"p"},"nifi.security.user.authorizer")," indicates which of the configured authorizers in the authorizers.xml file to use. Following the example, we'd set the property to:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"nifi.security.user.authorizer=custom-database-authorizer\n")))}d.isMDXComponent=!0},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,m=d["".concat(o,".").concat(h)]||d[h]||l[h]||a;return r?n.a.createElement(m,s(s({ref:t},p),{},{components:r})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);