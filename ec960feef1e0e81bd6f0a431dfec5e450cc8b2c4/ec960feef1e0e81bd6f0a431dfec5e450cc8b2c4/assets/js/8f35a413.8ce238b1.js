"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Stack layout",l={unversionedId:"Lab/Data/quiz/stack-layout",id:"Lab/Data/quiz/stack-layout",title:"Stack layout",description:"Question Text",source:"@site/docs/Lab/Data/quiz/stack-layout.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/stack-layout",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Data/quiz/stack-layout",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stack-layout"},"Stack layout"),(0,r.kt)("h2",{id:"question-text"},"Question Text"),(0,r.kt)("p",null,"What is the stack layout for the ",(0,r.kt)("inlineCode",{parentName:"p"},"fun")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bo_write.c")," program (starting from a high address)?"),(0,r.kt)("h2",{id:"question-answers"},"Question Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"return address, old ",(0,r.kt)("inlineCode",{parentName:"li"},"rbp"),", maybe some padding, variable ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[0]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[1]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[2]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"return address, old ",(0,r.kt)("inlineCode",{parentName:"li"},"rbp"),", maybe some padding, variable ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[2]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[1]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b[0]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"return address, maybe some padding, variable ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b[0]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b[1]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b[2]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"return address, old ",(0,r.kt)("inlineCode",{parentName:"p"},"rbp"),", maybe some padding, ",(0,r.kt)("inlineCode",{parentName:"p"},"b[0]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b[1]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b[2]"),", variable ",(0,r.kt)("inlineCode",{parentName:"p"},"a")))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Look at the assembly code and notice the exact layout."))}d.isMDXComponent=!0}}]);