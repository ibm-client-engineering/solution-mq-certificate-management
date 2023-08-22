"use strict";(self.webpackChunksolution_middleware_automation=self.webpackChunksolution_middleware_automation||[]).push([[667],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={id:"knowledge",sidebar_position:2,title:"Knowledge Transfer"},i=void 0,l={unversionedId:"Transition/knowledge",id:"Transition/knowledge",title:"Knowledge Transfer",description:"Playbook Example",source:"@site/docs/4-Transition/Knowledge Transfer.md",sourceDirName:"4-Transition",slug:"/Transition/knowledge",permalink:"/solution-middleware-automation/Transition/knowledge",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"knowledge",sidebar_position:2,title:"Knowledge Transfer"},sidebar:"tutorialSidebar",previous:{title:"Adopt",permalink:"/solution-middleware-automation/Transition/adopt"}},p={},c=[{value:"Playbook Example",id:"playbook-example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"playbook-example"},"Playbook Example"),(0,o.kt)("p",null,"A typical example of using this role would be to first import it via ansible-galaxy and then point a playbook to it."),(0,o.kt)("p",null,"An example entry in your requirements file in your roles directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- name MQ Certificate Management\n  src: https://github.com/client-engineering-devops/mq-cert-management-role.git\n  name: mq-cert-managment-role\n  scm: git\n  version: main\n")),(0,o.kt)("p",null,"And our playbook would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- hosts: washington,dallas\n  become: true\n  become_user: root\n  gather_facts: true\n  roles:\n  - role: mq-cert-management-role\n")))}m.isMDXComponent=!0}}]);