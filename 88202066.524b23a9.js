(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{360:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var i=t(2),r=t(6),o=(t(0),t(637)),a=["components"],c={id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},s={unversionedId:"3_tasks/2_security/2_authentication/1_oidc",id:"version-v0.12.0/3_tasks/2_security/2_authentication/1_oidc",isDocsHomePage:!1,title:"OpenId Connect",description:"To enable authentication via OpenId Connect refering to NiFi Administration guide required some configuration into nifi.properties.",source:"@site/versioned_docs/version-v0.12.0/3_tasks/2_security/2_authentication/1_oidc.md",slug:"/3_tasks/2_security/2_authentication/1_oidc",permalink:"/nifikop/docs/v0.12.0/3_tasks/2_security/2_authentication/1_oidc",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/3_tasks/2_security/2_authentication/1_oidc.md",version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064,sidebar_label:"OpenId Connect",sidebar:"version-v0.12.0/docs",previous:{title:"Securing NiFi with SSL",permalink:"/nifikop/docs/v0.12.0/3_tasks/2_security/1_ssl"},next:{title:"Provisioning NiFi Dataflows",permalink:"/nifikop/docs/v0.12.0/3_tasks/3_nifi_dataflow"}},p=[],u={rightToc:p};function d(e){var n=e.components,t=Object(r.a)(e,a);return Object(o.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To enable authentication via OpenId Connect refering to ",Object(o.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html"},"NiFi Administration guide")," required some configuration into ",Object(o.b)("inlineCode",{parentName:"p"},"nifi.properties"),"."),Object(o.b)("p",null,"In addition and to ensure multiple identity provider support, we recommended to add the following configuration to your ",Object(o.b)("inlineCode",{parentName:"p"},"nifi.properties")," : "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\nnifi.security.identity.mapping.value.dn=$1\nnifi.security.identity.mapping.transform.dn=NONE\n")),Object(o.b)("p",null,"To perform this with ",Object(o.b)("inlineCode",{parentName:"p"},"NiFiKop")," you just have to configure the ",Object(o.b)("inlineCode",{parentName:"p"},"Spec.NifiProperties.OverrideConfigs")," field with your OIDC configuration, for example :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.security.user.oidc.discovery.url=<oidc server discovery url>\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\n        nifi.security.identity.mapping.value.dn=$1\n        nifi.security.identity.mapping.transform.dn=NONE\n      ...\n   ...\n...\n")))}d.isMDXComponent=!0},637:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(a,".").concat(f)]||d[f]||l[f]||o;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);