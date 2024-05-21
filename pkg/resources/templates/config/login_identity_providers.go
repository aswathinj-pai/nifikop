package config

var LoginIdentityProvidersTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!--
    This file lists the login identity providers to use when running securely. In order
    to use a specific provider it must be configured here and it's identifier
    must be specified in the nifi.properties file.
-->
<loginIdentityProviders>
    <!--
        Identity Provider for users logging in with username/password against an LDAP server.

        'Authentication Strategy' - How the connection to the LDAP server is authenticated. Possible
            values are ANONYMOUS, SIMPLE, LDAPS, or START_TLS.

        'Manager DN' - The DN of the manager that is used to bind to the LDAP server to search for users.
        'Manager Password' - The password of the manager that is used to bind to the LDAP server to
            search for users.

        'TLS - Keystore' - Path to the Keystore that is used when connecting to LDAP using LDAPS or START_TLS.
        'TLS - Keystore Password' - Password for the Keystore that is used when connecting to LDAP
            using LDAPS or START_TLS.
        'TLS - Keystore Type' - Type of the Keystore that is used when connecting to LDAP using
            LDAPS or START_TLS such as PKCS12.
        'TLS - Truststore' - Path to the Truststore that is used when connecting to LDAP using LDAPS or START_TLS.
        'TLS - Truststore Password' - Password for the Truststore that is used when connecting to
            LDAP using LDAPS or START_TLS.
        'TLS - Truststore Type' - Type of the Truststore that is used when connecting to LDAP using
            LDAPS or START_TLS such as PKCS12.
        'TLS - Client Auth' - Client authentication policy when connecting to LDAP using LDAPS or START_TLS.
            Possible values are REQUIRED, WANT, NONE.
        'TLS - Protocol' - Protocol to use when connecting to LDAP using LDAPS or START_TLS. (i.e. TLS,
            TLSv1.1, TLSv1.2, etc).
        'TLS - Shutdown Gracefully' - Specifies whether the TLS should be shut down gracefully
            before the target context is closed. Defaults to false.

        'Referral Strategy' - Strategy for handling referrals. Possible values are FOLLOW, IGNORE, THROW.
        'Connect Timeout' - Duration of connect timeout. (i.e. 10 secs).
        'Read Timeout' - Duration of read timeout. (i.e. 10 secs).

        'Url' - Space-separated list of URLs of the LDAP servers (i.e. ldap://<hostname>:<port>).
        'User Search Base' - Base DN for searching for users (i.e. CN=Users,DC=example,DC=com).
        'User Search Filter' - Filter for searching for users against the 'User Search Base'.
            (i.e. sAMAccountName={0}). The user specified name is inserted into '{0}'.

        'Identity Strategy' - Strategy to identify users. Possible values are USE_DN and USE_USERNAME.
            The default functionality if this property is missing is USE_DN in order to retain
            backward compatibility. USE_DN will use the full DN of the user entry if possible.
            USE_USERNAME will use the username the user logged in with.
        'Authentication Expiration' - The duration of how long the user authentication is valid
            for. If the user never logs out, they will be required to log back in following
            this duration.
    -->
    {{if .LdapConfiguration.Enabled}}
    <provider>
        <identifier>ldap-provider</identifier>
        <class>org.apache.nifi.ldap.LdapProvider</class>
        <property name="Authentication Strategy">{{.LdapConfiguration.AuthenticationStrategy}}</property>
        <property name="Authentication Strategy">{{or .LdapConfiguration.AuthenticationStrategy "START_TLS"}}</property>
        <property name="Manager DN">{{.LdapConfiguration.ManagerDn}}</property>
        <property name="Manager Password">{{.LdapConfiguration.ManagerPassword}}</property>
        <property name="TLS - Keystore">{{.LdapConfiguration.TLSKeystore}}</property>
        <property name="TLS - Keystore Password">{{.LdapConfiguration.TLSKeystorePassword}}</property>
        <property name="TLS - Keystore Type">{{.LdapConfiguration.TLSKeystoreType}}</property>
        <property name="TLS - Truststore">{{.LdapConfiguration.TLSTruststore}}</property>
        <property name="TLS - Truststore Password">{{.LdapConfiguration.TLSTruststorePassword}}</property>
        <property name="TLS - Truststore Type">{{.LdapConfiguration.TLSTruststoreType}}</property>
        <property name="TLS - Client Auth">{{.LdapConfiguration.ClientAuth}}</property>
        <property name="TLS - Protocol">{{.LdapConfiguration.Protocol}}</property>
        <property name="TLS - Shutdown Gracefully">{{.LdapConfiguration.ShutdownGracefully}}</property>
        
        <property name="Referral Strategy">{{or .LdapConfiguration.ReferralStrategy "FOLLOW"}}</property>
        <property name="Connect Timeout">10 secs</property>
        <property name="Read Timeout">10 secs</property>
        <property name="Url">{{.LdapConfiguration.Url}}</property>
        <property name="User Search Base">{{.LdapConfiguration.SearchBase}}</property>
        <property name="User Search Filter">{{.LdapConfiguration.SearchFilter}}</property>
        <property name="Identity Strategy">{{or .LdapConfiguration.IdentityStrategy "USE_DN"}}</property>
        <property name="Authentication Expiration">12 hours</property>
    </provider>
    {{else if .SingleUserConfiguration.Enabled}}
    <provider>
        <identifier>single-user-provider</identifier>
        <class>org.apache.nifi.authentication.single.user.SingleUserLoginIdentityProvider</class>
        <property name="Username"/>
        <property name="Password"/>
    </provider>
    {{end}}
    <!--
        Identity Provider for users logging in with username/password against a Kerberos KDC server.
        'Default Realm' - Default realm to provide when user enters incomplete user principal (i.e. NIFI.APACHE.ORG).
        'Authentication Expiration' - The duration of how long the user authentication is valid for. If the user never logs out, they will be required to log back in following this duration.
    -->
    <!-- To enable the kerberos-provider remove 2 lines. This is 1 of 2.
    <provider>
        <identifier>kerberos-provider</identifier>
        <class>org.apache.nifi.kerberos.KerberosProvider</class>
        <property name="Default Realm">NIFI.APACHE.ORG</property>
        <property name="Authentication Expiration">12 hours</property>
    </provider>
    To enable the kerberos-provider remove 2 lines. This is 2 of 2. -->
</loginIdentityProviders>
`
