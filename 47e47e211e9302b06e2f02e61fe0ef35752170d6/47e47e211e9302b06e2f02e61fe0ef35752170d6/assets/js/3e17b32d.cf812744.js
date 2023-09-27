"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Strcpy Buffer Overflow",l={unversionedId:"Lab/Data/quiz/string-strcpy",id:"Lab/Data/quiz/string-strcpy",title:"Strcpy Buffer Overflow",description:"Question Text",source:"@site/docs/Lab/Data/quiz/string-strcpy.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/string-strcpy",permalink:"/47e47e211e9302b06e2f02e61fe0ef35752170d6/Lab/Data/quiz/string-strcpy",draft:!1,tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"strcpy-buffer-overflow"},"Strcpy Buffer Overflow"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Does any buffer overflow occur with the latest version of the program?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"no, because ",(0,a.kt)("inlineCode",{parentName:"p"},"strcpy()")," was designed to correctly handle such situations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"no, because the string is correctly printed, i.e. no extra characters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"we cannot know"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"yes, ",(0,a.kt)("inlineCode",{parentName:"li"},"strcpy()")," copies the entirety of the source, including the ",(0,a.kt)("inlineCode",{parentName:"li"},"\\0"),"; since the size of ",(0,a.kt)("inlineCode",{parentName:"li"},"dst")," is 4 the null byte overwrites the least significant byte of ",(0,a.kt)("inlineCode",{parentName:"li"},"var"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Print the contents of variable ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"."))}f.isMDXComponent=!0}}]);