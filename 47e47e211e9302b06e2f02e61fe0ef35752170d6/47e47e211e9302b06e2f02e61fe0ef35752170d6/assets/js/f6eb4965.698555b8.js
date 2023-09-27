"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Application Interaction",c={unversionedId:"Lab/Application Interaction/overview",id:"Lab/Application Interaction/overview",title:"Application Interaction",description:"In this chapter, you will discover various mechanisms through which applications on a system can interact.",source:"@site/docs/Lab/Application Interaction/overview.md",sourceDirName:"Lab/Application Interaction",slug:"/Lab/Application Interaction/overview",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Application Interaction",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/"},next:{title:"Time Server",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/time-server"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],s={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-interaction"},"Application Interaction"),(0,a.kt)("p",null,"In this chapter, you will discover various mechanisms through which applications on a system can interact.\nYou will see these mechanisms in action in existing applications, but also use them in some code of your own."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Make sure the following packages are installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get -y update; sudo apt-get -y install net-tools x11-apps libssl-dev d-feet firefox\n")),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/time-server"},"Time Server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/password-cracker"},"Password Cracker")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/x-window-system"},"The X Window System")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/dbus"},"D-Bus")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/os-cloud"},"OS Cloud")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/arena"},"Arena"))))}u.isMDXComponent=!0}}]);