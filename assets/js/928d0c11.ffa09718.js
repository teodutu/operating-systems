"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=o,d=c["".concat(s,".").concat(b)]||c[b]||f[b]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Sleeping on a Fiber",l={unversionedId:"Lab/Compute/quiz/sleeping-on-a-fiber",id:"Lab/Compute/quiz/sleeping-on-a-fiber",title:"Sleeping on a Fiber",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/sleeping-on-a-fiber.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/sleeping-on-a-fiber",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Compute/quiz/sleeping-on-a-fiber",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sleeping-on-a-fiber"},"Sleeping on a Fiber"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"What happens if a fiber calls ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep()"),"?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the whole kernel-level thread is blocked")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"only that fiber is blocked, and is scheduled out")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"nothing, a fiber can't sleep")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the whole process sleeps - regardless of how many threads there are"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"The whole thread on which the fiber runs is blocked until the ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep()")," call is finished.\nFor this reason, the fibers are best used with asynchronous operations, which you will explore in the following weeks."))}f.isMDXComponent=!0}}]);