"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Application Interaction",c={unversionedId:"Lab/Application Interaction/overview",id:"Lab/Application Interaction/overview",title:"Application Interaction",description:"In this chapter, you will discover various mechanisms through which applications on a system can interact.",source:"@site/docs/Lab/Application Interaction/overview.md",sourceDirName:"Lab/Application Interaction",slug:"/Lab/Application Interaction/overview",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application Interaction/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Application Interaction",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application Interaction/"},next:{title:"Time Server",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application Interaction/time-server"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-interaction"},"Application Interaction"),(0,r.kt)("p",null,"In this chapter, you will discover various mechanisms through which applications on a system can interact.\nYou will see these mechanisms in action in existing applications, but also use them in some code of your own."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Make sure the following packages are installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get -y update; sudo apt-get -y install net-tools x11-apps libssl-dev d-feet firefox\n")),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/time-server"},"Time Server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/password-cracker"},"Password Cracker")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/x-window-system"},"The X Window System")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/dbus"},"D-Bus")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/os-cloud"},"OS Cloud")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Application%20Interaction/arena"},"Arena"))))}f.isMDXComponent=!0}}]);