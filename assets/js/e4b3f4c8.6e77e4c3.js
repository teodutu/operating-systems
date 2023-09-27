"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},l="Receiver Socked File Descriptor",a={unversionedId:"Lab/IO/quiz/receiver-socket-fd",id:"Lab/IO/quiz/receiver-socket-fd",title:"Receiver Socked File Descriptor",description:"Question Text",source:"@site/docs/Lab/IO/quiz/receiver-socket-fd.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/receiver-socket-fd",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/quiz/receiver-socket-fd",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"receiver-socked-file-descriptor"},"Receiver Socked File Descriptor"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"What is the type of the file descriptor that corresponds to the socket created by ",(0,o.kt)("inlineCode",{parentName:"p"},"support/send-receive/receiver.py"),"?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"only file descriptors that are linked to files have types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DIR"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"REG"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CHR")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IPv4"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"lsof")," yields the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ lsof -p 59681\nCOMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF    NODE NAME\npython3 59681  student  cwd    DIR    8,1        0  559322 /home/student/operating-systems-oer/content/chapters/io/lab/support/send-receive\npython3 59681  student  rtd    DIR  259,6     4096       2 /\npython3 59681  student  txt    REG  259,6  5502744 1835857 /usr/bin/python3.8\npython3 59681  student  mem    REG  259,6  8631488 1835827 /usr/lib/locale/locale-archive\npython3 59681  student  mem    REG  259,6   108936 1835887 /usr/lib/x86_64-linux-gnu/libz.so.1.2.11\npython3 59681  student  mem    REG  259,6   182560 1836149 /usr/lib/x86_64-linux-gnu/libexpat.so.1.6.11\npython3 59681  student  mem    REG  259,6  1369384 1857443 /usr/lib/x86_64-linux-gnu/libm-2.31.so\npython3 59681  student  mem    REG  259,6    14880 1857476 /usr/lib/x86_64-linux-gnu/libutil-2.31.so\npython3 59681  student  mem    REG  259,6    18848 1857439 /usr/lib/x86_64-linux-gnu/libdl-2.31.so\npython3 59681  student  mem    REG  259,6   157224 1857471 /usr/lib/x86_64-linux-gnu/libpthread-2.31.so\npython3 59681  student  mem    REG  259,6  2029592 1857435 /usr/lib/x86_64-linux-gnu/libc-2.31.so\npython3 59681  student  mem    REG  259,6    27002 2506848 /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache\npython3 59681  student  mem    REG  259,6   191504 1835092 /usr/lib/x86_64-linux-gnu/ld-2.31.so\npython3 59681  student    0u   CHR  136,1      0t0       4 /dev/pts/1\npython3 59681  student    1u   CHR  136,1      0t0       4 /dev/pts/1\npython3 59681  student    2u   CHR  136,1      0t0       4 /dev/pts/1\npython3 59681  student    3u  IPv4 588386      0t0     UDP localhost:5000\n")),(0,o.kt)("p",null,"The last line displays the socket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"python3 59681  student    3u  IPv4 588386      0t0     UDP localhost:5000\n")),(0,o.kt)("p",null,"Its type is written on the the 5th column: ",(0,o.kt)("inlineCode",{parentName:"p"},"IPv4")," because it's a network socket."))}d.isMDXComponent=!0}}]);