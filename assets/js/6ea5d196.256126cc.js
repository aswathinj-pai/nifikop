"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88010],{2273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(62540),r=n(43023);const i={id:"1_ssl",title:"Securing NiFi with SSL",sidebar_label:"SSL"},c=void 0,a={id:"3_tasks/2_security/1_ssl",title:"Securing NiFi with SSL",description:"The NiFi operator makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration.",source:"@site/versioned_docs/version-v0.11.0/3_tasks/2_security/1_ssl.md",sourceDirName:"3_tasks/2_security",slug:"/3_tasks/2_security/1_ssl",permalink:"/nifikop/docs/v0.11.0/3_tasks/2_security/1_ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/3_tasks/2_security/1_ssl.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987e3,frontMatter:{id:"1_ssl",title:"Securing NiFi with SSL",sidebar_label:"SSL"},sidebar:"docs",previous:{title:"External cluster",permalink:"/nifikop/docs/v0.11.0/3_tasks/1_nifi_cluster/4_external_cluster"},next:{title:"OpenId Connect",permalink:"/nifikop/docs/v0.11.0/3_tasks/2_security/2_authentication/1_oidc"}},l={},o=[{value:"Using an existing Issuer",id:"using-an-existing-issuer",level:2},{value:"Example: Let&#39;s encrypt",id:"example-lets-encrypt",level:3},{value:"Create SSL credentials",id:"create-ssl-credentials",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"NiFi operator"})," makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration."]}),"\n",(0,s.jsx)(t.p,{children:"Below this is an example configuration required to secure your cluster with SSL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  managedAdminUsers:\n    - identity: "alexandre.guitton@konpyutaika.com"\n      name: "aguitton"\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n        ...\n  ...\n  listenersConfig:\n    internalListeners:\n      - type: "https"\n        name: "https"\n        containerPort: 8443\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"managedAdminUsers"}),": list of users account which will be configured as admin into NiFi cluster, please check ",(0,s.jsx)(t.a,{href:"../4_nifi_user_group#managed-groups-for-simple-setup"})," for more information."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"readOnlyConfig.nifiProperties.webProxyHosts"}),": A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host[",":port","] than it is bound to. ",(0,s.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties",children:"web-properties"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"listenersConfig.sslSecrets.create"})," is set to ",(0,s.jsx)(t.code,{children:"false"}),", the operator will look for the secret at ",(0,s.jsx)(t.code,{children:"listenersConfig.sslSecrets.tlsSecretName"})," and expect these values:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"key"}),(0,s.jsx)(t.th,{children:"value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"caCert"}),(0,s.jsx)(t.td,{children:"The CA certificate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"caKey"}),(0,s.jsx)(t.td,{children:"The CA private key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientCert"}),(0,s.jsx)(t.td,{children:"A client certificate (this will be used by operator for NiFI operations)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientKey"}),(0,s.jsx)(t.td,{children:"The private key for clientCert"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"using-an-existing-issuer",children:"Using an existing Issuer"}),"\n",(0,s.jsxs)(t.p,{children:["As described in the ",(0,s.jsx)(t.a,{href:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/6_listeners_config#sslsecrets",children:"Reference section"}),", instead of using a self-signed certificate as CA, you can use an existing one.\nIn order to do so, you only have to refer it into your ",(0,s.jsx)(t.code,{children:"Spec.ListenerConfig.SslSecrets.IssuerRef"})," field."]}),"\n",(0,s.jsx)(t.h3,{id:"example-lets-encrypt",children:"Example: Let's encrypt"}),"\n",(0,s.jsxs)(t.p,{children:["Let's say you have an existing DNS server, with ",(0,s.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"external dns"})," deployed into your cluster's namespace.\nYou can easily use Let's encrypt as authority for your certificate."]}),"\n",(0,s.jsx)(t.p,{children:"To do this, you have to:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create an issuer:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email address>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Setup External dns and correctly create your issuer into your cluster configuration:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  clusterSecure: true\n  siteToSiteSecure: true\n  ...\n  listenersConfig:\n    clusterDomain: <DNS zone name>\n    useExternalDNS: true\n    ...\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n'})}),"\n",(0,s.jsx)(t.h2,{id:"create-ssl-credentials",children:"Create SSL credentials"}),"\n",(0,s.jsxs)(t.p,{children:["You may use ",(0,s.jsx)(t.code,{children:"NifiUser"})," resource to create new certificates for your applications, allowing them to query your Nifi cluster."]}),"\n",(0,s.jsxs)(t.p,{children:["To create a new client you will need to generate new certificates sign by the CA. The operator can automate this for you using the ",(0,s.jsx)(t.code,{children:"NifiUser"})," CRD:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"cat << EOF | kubectl apply -n nifi -f -\napiVersion:  nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: example-client\n  namespace: nifi\nspec:\n  clusterRef:\n    name: nifi\n  secretName: example-client-secret\nEOF\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will create a user and store its credentials in the secret ",(0,s.jsx)(t.code,{children:"example-client-secret"}),". The secret contains these fields:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"key"}),(0,s.jsx)(t.th,{children:"value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ca.crt"}),(0,s.jsx)(t.td,{children:"The CA certificate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tls.crt"}),(0,s.jsx)(t.td,{children:"The user certificate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tls.key"}),(0,s.jsx)(t.td,{children:"The user private key"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"You can then mount these secret to your pod. Alternatively, you can write them to your local machine by running:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"kubectl get secret example-client-secret -o jsonpath=\"{['data']['ca\\.crt']}\" | base64 -d > ca.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.crt']}\" | base64 -d > tls.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.key']}\" | base64 -d > tls.key\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The operator can also include a Java keystore format (JKS) with your user secret if you'd like. Add ",(0,s.jsx)(t.code,{children:"includeJKS"}),": ",(0,s.jsx)(t.code,{children:"true"})," to the ",(0,s.jsx)(t.code,{children:"spec"})," like shown above, and then the user-secret will gain these additional fields:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"key"}),(0,s.jsx)(t.th,{children:"value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tls.jks"}),(0,s.jsx)(t.td,{children:"The java keystore containing both the user keys and the CA (use this for your keystore AND truststore)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pass.txt"}),(0,s.jsx)(t.td,{children:"The password to decrypt the JKS (this will be randomly generated)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(63696);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);