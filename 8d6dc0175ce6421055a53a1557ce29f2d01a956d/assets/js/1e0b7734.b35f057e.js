"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l="Operator Overloading",c={unversionedId:"Lab/Data/quiz/operators",id:"Lab/Data/quiz/operators",title:"Operator Overloading",description:"Question Text",source:"@site/docs/Lab/Data/quiz/operators.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/operators",permalink:"/8d6dc0175ce6421055a53a1557ce29f2d01a956d/Lab/Data/quiz/operators",draft:!1,tags:[],version:"current",frontMatter:{}},s={},i=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operator-overloading"},"Operator Overloading"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"How many constructor calls, copy constructor calls, assignment operator calls and destructor calls does the following program issue?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-d"},"Obj quiz(Obj o1, Obj o2)\n{\n    o2 = o1;\n    return o2;\n}\nvoid main()\n{\n    Obj b = quiz(o1, o2);\n}\n")),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"constructor calls = 0, copy constructor calls = 3, assignment operator calls = 1, destructor calls = 3")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constructor calls = 1, copy constructor calls = 2, assignment operator calls = 1, destructor calls = 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constructor calls = 0, copy constructor calls = 2, assignment operator calls = 1, destructor calls = 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constructor calls = 0, copy constructor calls = 3, assignment operator calls = 1, destructor calls = 1"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are no constructor calls because there is no object construction when using ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are 3 copy constructor calls: for passing ",(0,a.kt)("inlineCode",{parentName:"p"},"o1"),", for passing ",(0,a.kt)("inlineCode",{parentName:"p"},"o2"),", and for returning ",(0,a.kt)("inlineCode",{parentName:"p"},"o2"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is 1 assignment operator call for ",(0,a.kt)("inlineCode",{parentName:"p"},"o2 = o1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are 3 destructor calls, because each constructed object needs to be destroyed."))))}d.isMDXComponent=!0}}]);