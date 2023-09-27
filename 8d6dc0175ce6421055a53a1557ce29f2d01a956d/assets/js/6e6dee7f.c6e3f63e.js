"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Parent of `sleep` Processes",p={unversionedId:"Lab/Compute/quiz/parent-of-sleep-processes",id:"Lab/Compute/quiz/parent-of-sleep-processes",title:"Parent of `sleep` Processes",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/parent-of-sleep-processes.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/parent-of-sleep-processes",permalink:"/8d6dc0175ce6421055a53a1557ce29f2d01a956d/Lab/Compute/quiz/parent-of-sleep-processes",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parent-of-sleep-processes"},"Parent of ",(0,a.kt)("inlineCode",{parentName:"h1"},"sleep")," Processes"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Who is the parent of the ",(0,a.kt)("inlineCode",{parentName:"p"},"sleep")," processes?\nWhy?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py")," because it is the one who created them")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"bash")," because it is ",(0,a.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"systemd")," because this is the default process that adopts orphans")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"systemd")," because it is ",(0,a.kt)("inlineCode",{parentName:"li"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"When a process dies without waiting for the termination of all its children, those processes are now orphans.\nThen the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," process adopts those orphan processes by default.\nOn older Linux systems, it was the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," process who adopted orphans."))}d.isMDXComponent=!0}}]);