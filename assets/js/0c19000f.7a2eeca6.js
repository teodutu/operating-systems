"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="Setting up the Lab Environment",p={unversionedId:"Lab/lab-setup",id:"Lab/lab-setup",title:"Setting up the Lab Environment",description:"If you have already cloned the repository, make sure it is updated:",source:"@site/docs/Lab/lab-setup.md",sourceDirName:"Lab",slug:"/Lab/lab-setup",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/lab-setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lab",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/"},next:{title:"Software Stack",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Software Stack/"}},i={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-the-lab-environment"},"Setting up the Lab Environment"),(0,r.kt)("p",null,"If you have already cloned the repository, make sure it is updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ cd operating-systems\n\nstudent@os:~/operating-systems$ git pull --rebase\n")),(0,r.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, stash your changes, retry, and pop the stash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ git stash\n\nstudent@os:~/operating-systems$ git pull --rebase\n\nstudent@os:~/operating-systems$ git stash pop\n")),(0,r.kt)("p",null,"If you haven't already cloned the repository, do so and then enter the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ git clone https://github.com/open-education-hub/operating-systems\n\nstudent@os:~$ cd operating-systems\n")),(0,r.kt)("p",null,"Navigate to a chapter's lab directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ cd content/chapters/<chapter-name>/lab/\n")),(0,r.kt)("p",null,"The possible options are: ",(0,r.kt)("inlineCode",{parentName:"p"},"software-stack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compute"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"app-interact"),"."),(0,r.kt)("p",null,"If you're using the OS-runner Docker container, you can use the following shortcuts:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-ss"),"       - changes directory to Software Stack lab"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-data"),"     - changes directory to Data lab"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-compute"),"  - changes directory to Compute lab"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-io"),"       - changes directory to IO lab"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-appInt"),"   - changes directory to App Interaction lab"))}d.isMDXComponent=!0}}]);