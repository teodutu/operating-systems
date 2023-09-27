"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Time Server",p={unversionedId:"Lab/Application Interaction/time-server",id:"Lab/Application Interaction/time-server",title:"Time Server",description:"Check out the code in support/time-server/server.c and support/time-server/client.c.",source:"@site/docs/Lab/Application Interaction/time-server.md",sourceDirName:"Lab/Application Interaction",slug:"/Lab/Application Interaction/time-server",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/time-server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Application Interaction",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/overview"},next:{title:"Password Cracker",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application Interaction/password-cracker"}},c={},l=[{value:"Python Version",id:"python-version",level:2},{value:"Practice",id:"practice",level:3}],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-server"},"Time Server"),(0,o.kt)("p",null,"Check out the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/server.c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/client.c"),"."),(0,o.kt)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,o.kt)("p",null,"Let's build and run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support/time-server$ ./server\n")),(0,o.kt)("p",null,"Then, in another terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,o.kt)("h2",{id:"python-version"},"Python Version"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/python")," we have the equivalent python implementation for both the server and client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")),(0,o.kt)("h3",{id:"practice"},"Practice"),(0,o.kt)("p",null,"Try to figure out the protocol used by the server and the client.\nYou can do this by reading the source code, corroborated with information obtained at runtime."),(0,o.kt)("p",null,"Run the server again (the version in C), but instead of running the client, let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"netcat")," and pipe the output to ",(0,o.kt)("inlineCode",{parentName:"p"},"hexdump"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nc -d 127.0.0.1 2000 | hexdump -C\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/quiz/time-server"},"Quiz")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Application%20Interaction/quiz/time-server-interop"},"Quiz")))}m.isMDXComponent=!0}}]);