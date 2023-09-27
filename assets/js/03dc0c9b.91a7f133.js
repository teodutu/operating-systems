"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[214],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),f=l,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=f;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3976:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var t=a(7462),l=(a(7294),a(3905));const i={},o="Process Memory",r={unversionedId:"Lab/Data/process-memory",id:"Lab/Data/process-memory",title:"Process Memory",description:"Memory Regions",source:"@site/docs/Lab/Data/process-memory.md",sourceDirName:"Lab/Data",slug:"/Lab/Data/process-memory",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/process-memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Working with Memory",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/working-memory"},next:{title:"Investigate Memory Actions",permalink:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/investigate-memory"}},s={},p=[{value:"Memory Regions",id:"memory-regions",level:2},{value:"Practice",id:"practice",level:3},{value:"Memory Layout of Statically-Linked and Dynamically-Linked Executables",id:"memory-layout-of-statically-linked-and-dynamically-linked-executables",level:2},{value:"Quiz",id:"quiz",level:3},{value:"Practice",id:"practice-1",level:3},{value:"Modifying Memory Region Size",id:"modifying-memory-region-size",level:2},{value:"Practice",id:"practice-2",level:3},{value:"Allocating and Deallocating Memory",id:"allocating-and-deallocating-memory",level:2},{value:"Practice",id:"practice-3",level:3},{value:"Memory Mapping",id:"memory-mapping",level:2},{value:"Practice",id:"practice-4",level:3}],c={toc:p},d="wrapper";function m(e){let{components:n,...a}=e;return(0,l.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"process-memory"},"Process Memory"),(0,l.kt)("h2",{id:"memory-regions"},"Memory Regions"),(0,l.kt)("p",null,"To better manage a program's memory, the operating systems creates an address space for each process.\nThe address space is compartmentalized in multiple areas, each with its own role.\nMemory addresses use different permissions to decide what actions are allowed."),(0,l.kt)("p",null,"Let's investigate the memory areas of a given process.\nWe use ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," to see the memory layout of a running process.\nThe command below shows the memory layout of the current shell process:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ pmap -p $$\n1127:   /bin/bash\n000055fb4d77d000   1040K r-x-- /bin/bash\n000055fb4da80000     16K r---- /bin/bash\n000055fb4da84000     36K rw--- /bin/bash\n000055fb4da8d000     40K rw---   [ anon ]\n000055fb4e9bb000   1604K rw---   [ anon ]\n00007f8fcf670000   4480K r---- /usr/lib/locale/locale-archive\n00007f8fcfad0000     44K r-x-- /lib/x86_64-linux-gnu/libnss_files-2.27.so\n00007f8fcfadb000   2044K ----- /lib/x86_64-linux-gnu/libnss_files-2.27.so\n00007f8fcfcda000      4K r---- /lib/x86_64-linux-gnu/libnss_files-2.27.so\n00007f8fcfcdb000      4K rw--- /lib/x86_64-linux-gnu/libnss_files-2.27.so\n00007f8fcfcdc000     24K rw---   [ anon ]\n00007f8fcfce2000     92K r-x-- /lib/x86_64-linux-gnu/libnsl-2.27.so\n00007f8fcfcf9000   2044K ----- /lib/x86_64-linux-gnu/libnsl-2.27.so\n00007f8fcfef8000      4K r---- /lib/x86_64-linux-gnu/libnsl-2.27.so\n00007f8fcfef9000      4K rw--- /lib/x86_64-linux-gnu/libnsl-2.27.so\n00007f8fcfefa000      8K rw---   [ anon ]\n00007f8fcfefc000     44K r-x-- /lib/x86_64-linux-gnu/libnss_nis-2.27.so\n00007f8fcff07000   2044K ----- /lib/x86_64-linux-gnu/libnss_nis-2.27.so\n00007f8fd0106000      4K r---- /lib/x86_64-linux-gnu/libnss_nis-2.27.so\n00007f8fd0107000      4K rw--- /lib/x86_64-linux-gnu/libnss_nis-2.27.so\n00007f8fd0108000     32K r-x-- /lib/x86_64-linux-gnu/libnss_compat-2.27.so\n00007f8fd0110000   2048K ----- /lib/x86_64-linux-gnu/libnss_compat-2.27.so\n00007f8fd0310000      4K r---- /lib/x86_64-linux-gnu/libnss_compat-2.27.so\n00007f8fd0311000      4K rw--- /lib/x86_64-linux-gnu/libnss_compat-2.27.so\n00007f8fd0312000   1948K r-x-- /lib/x86_64-linux-gnu/libc-2.27.so\n00007f8fd04f9000   2048K ----- /lib/x86_64-linux-gnu/libc-2.27.so\n00007f8fd06f9000     16K r---- /lib/x86_64-linux-gnu/libc-2.27.so\n00007f8fd06fd000      8K rw--- /lib/x86_64-linux-gnu/libc-2.27.so\n00007f8fd06ff000     16K rw---   [ anon ]\n00007f8fd0703000     12K r-x-- /lib/x86_64-linux-gnu/libdl-2.27.so\n00007f8fd0706000   2044K ----- /lib/x86_64-linux-gnu/libdl-2.27.so\n00007f8fd0905000      4K r---- /lib/x86_64-linux-gnu/libdl-2.27.so\n00007f8fd0906000      4K rw--- /lib/x86_64-linux-gnu/libdl-2.27.so\n00007f8fd0907000    148K r-x-- /lib/x86_64-linux-gnu/libtinfo.so.5.9\n00007f8fd092c000   2048K ----- /lib/x86_64-linux-gnu/libtinfo.so.5.9\n00007f8fd0b2c000     16K r---- /lib/x86_64-linux-gnu/libtinfo.so.5.9\n00007f8fd0b30000      4K rw--- /lib/x86_64-linux-gnu/libtinfo.so.5.9\n00007f8fd0b31000    164K r-x-- /lib/x86_64-linux-gnu/ld-2.27.so\n00007f8fd0d24000     20K rw---   [ anon ]\n00007f8fd0d53000     28K r--s- /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache\n00007f8fd0d5a000      4K r---- /lib/x86_64-linux-gnu/ld-2.27.so\n00007f8fd0d5b000      4K rw--- /lib/x86_64-linux-gnu/ld-2.27.so\n00007f8fd0d5c000      4K rw---   [ anon ]\n00007ffff002f000    132K rw---   [ stack ]\n00007ffff00c5000     12K r----   [ anon ]\n00007ffff00c8000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total            24364K\n")),(0,l.kt)("p",null,"Information will differ among different systems."),(0,l.kt)("p",null,"See the different regions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the first region, with ",(0,l.kt)("inlineCode",{parentName:"li"},"r-x")," permissions is the ",(0,l.kt)("inlineCode",{parentName:"li"},".text")," (code) area"),(0,l.kt)("li",{parentName:"ul"},"the second region, with ",(0,l.kt)("inlineCode",{parentName:"li"},"r--")," premissions is the ",(0,l.kt)("inlineCode",{parentName:"li"},".rodata")," area"),(0,l.kt)("li",{parentName:"ul"},"the third region, with ",(0,l.kt)("inlineCode",{parentName:"li"},"rw-")," permissions is the ",(0,l.kt)("inlineCode",{parentName:"li"},".data")," area, for initialized global variables"),(0,l.kt)("li",{parentName:"ul"},"the fourth region, with ",(0,l.kt)("inlineCode",{parentName:"li"},"rw-")," permissions is the ",(0,l.kt)("inlineCode",{parentName:"li"},".bss")," area"),(0,l.kt)("li",{parentName:"ul"},"the fifth region, with the ",(0,l.kt)("inlineCode",{parentName:"li"},"rw-")," permissions is the dynamic data memory area, also known as heap"),(0,l.kt)("li",{parentName:"ul"},"there are multiple dynamic libraries mapped in the virtual address space of the process, each library with their own regions"),(0,l.kt)("li",{parentName:"ul"},"there is a ",(0,l.kt)("inlineCode",{parentName:"li"},"[stack]")," memory region, with ",(0,l.kt)("inlineCode",{parentName:"li"},"rw-")," permissions")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," also shows the total amount of virtual memory available to the process (",(0,l.kt)("inlineCode",{parentName:"p"},"24364K"),"), as a total of the sizes of the regions.\nNote that this is virtual memory, not actual physical memory used by the process.\nFor the process investigated above (with the ",(0,l.kt)("inlineCode",{parentName:"p"},"1127")," pid) we could use the command below to show the total virtual size and physical size (also called ",(0,l.kt)("em",{parentName:"p"},"resident set size"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ ps -o pid,rss,vsz -p $$\n  PID   RSS    VSZ\n 1127  1968  24364\n")),(0,l.kt)("p",null,"The resident size is ",(0,l.kt)("inlineCode",{parentName:"p"},"1968K"),", much smaller than the virtual size."),(0,l.kt)("p",null,"Note how each region has a size multiple of ",(0,l.kt)("inlineCode",{parentName:"p"},"4K"),", this has to do with the memory granularity.\nThe operating system allocates memory in chunks of a predefined size (in our case ",(0,l.kt)("inlineCode",{parentName:"p"},"4K"),") called pages."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/half-page"},"Quiz")),(0,l.kt)("h3",{id:"practice"},"Practice"),(0,l.kt)("p",null,"Enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"support/memory-areas/")," directory.\nWe investigate other programs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.c")," program prints out a message and then sleeps.\nBuild it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-areas$ make\n")),(0,l.kt)("p",{parentName:"li"},"then run it (it will block):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-areas$ ./hello\nHello, world!\n")),(0,l.kt)("p",{parentName:"li"},"In another terminal, use the command below to show the memory areas of the process:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-areas$ pmap $(pidof hello)\n8220:   ./hello\n000055c0bef4b000      8K r-x-- hello\n000055c0bf14c000      4K r---- hello\n000055c0bf14d000      4K rw--- hello\n000055c0bf454000    132K rw---   [ anon ]\n00007f2a9e4a5000   1948K r-x-- libc-2.27.so\n00007f2a9e68c000   2048K ----- libc-2.27.so\n00007f2a9e88c000     16K r---- libc-2.27.so\n00007f2a9e890000      8K rw--- libc-2.27.so\n00007f2a9e892000     16K rw---   [ anon ]\n00007f2a9e896000    164K r-x-- ld-2.27.so\n00007f2a9ea8c000      8K rw---   [ anon ]\n00007f2a9eabf000      4K r---- ld-2.27.so\n00007f2a9eac0000      4K rw--- ld-2.27.so\n00007f2a9eac1000      4K rw---   [ anon ]\n00007ffee6471000    132K rw---   [ stack ]\n00007ffee6596000     12K r----   [ anon ]\n00007ffee6599000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4520K\n")),(0,l.kt)("p",{parentName:"li"},"The output is similar, but with fewer dynamic libraries than ",(0,l.kt)("inlineCode",{parentName:"p"},"bash"),", since they are not used by the program.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make a program in another language of your choice that prints ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, world!")," and sleeps and investigate it with ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap"),".\nNote that in the case of interpreted languages (Python, Lua, Perl, Ruby, PHP, JavaScript etc.) you have to investigate the interpreter process."))),(0,l.kt)("h2",{id:"memory-layout-of-statically-linked-and-dynamically-linked-executables"},"Memory Layout of Statically-Linked and Dynamically-Linked Executables"),(0,l.kt)("p",null,"We want to see the difference in memory layout between the statically-linked and dynamically-linked executables."),(0,l.kt)("p",null,"Enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"support/static-dynamic/")," directory and build the statically-linked and dynamically-linked executables ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-static")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-dynamic"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/static-dynamic$ make\n")),(0,l.kt)("p",null,"Now, by running the two programs and inspecting them with ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," on another terminal, we get the output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/static-dynamic$ pmap $(pidof hello-static)\n9714:   ./hello-static\n0000000000400000    876K r-x-- hello-static\n00000000006db000     24K rw--- hello-static\n00000000006e1000      4K rw---   [ anon ]\n00000000017b5000    140K rw---   [ anon ]\n00007ffc6f1d6000    132K rw---   [ stack ]\n00007ffc6f1f9000     12K r----   [ anon ]\n00007ffc6f1fc000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             1196K\n\nstudent@os:~/.../lab/support/static-dynamic$ pmap $(pidof hello-dynamic)\n9753:   ./hello-dynamic\n00005566e757f000      8K r-x-- hello-dynamic\n00005566e7780000      4K r---- hello-dynamic\n00005566e7781000      4K rw--- hello-dynamic\n00005566e8894000    132K rw---   [ anon ]\n00007fd434eb8000   1948K r-x-- libc-2.27.so\n00007fd43509f000   2048K ----- libc-2.27.so\n00007fd43529f000     16K r---- libc-2.27.so\n00007fd4352a3000      8K rw--- libc-2.27.so\n00007fd4352a5000     16K rw---   [ anon ]\n00007fd4352a9000    164K r-x-- ld-2.27.so\n00007fd43549f000      8K rw---   [ anon ]\n00007fd4354d2000      4K r---- ld-2.27.so\n00007fd4354d3000      4K rw--- ld-2.27.so\n00007fd4354d4000      4K rw---   [ anon ]\n00007ffe497ba000    132K rw---   [ stack ]\n00007ffe497e3000     12K r----   [ anon ]\n00007ffe497e6000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4520K\n")),(0,l.kt)("p",null,"For the static executable, we can see there are no areas for dynamic libraries.\nAnd the ",(0,l.kt)("inlineCode",{parentName:"p"},".rodata")," section has been coalesced in the ",(0,l.kt)("inlineCode",{parentName:"p"},".text")," area."),(0,l.kt)("p",null,"We can see the size of each section in the two executables by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/static-dynamic$ size hello-static\ntext    data     bss     dec     hex filename\n893333   20996    7128  921457   e0f71 hello-static\n\nstudent@os:~/.../lab/support/static-dynamic$ size hello-dynamic\ntext    data     bss     dec     hex filename\n4598     736     824    6158    180e hello-dynamic\n")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("p",null,"Based on the information above, answer ",(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/memory-granularity"},"this quiz"),"."),(0,l.kt)("h3",{id:"practice-1"},"Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's investigate another static executable / process."),(0,l.kt)("p",{parentName:"li"},"If not already installed, install the ",(0,l.kt)("inlineCode",{parentName:"p"},"busybox-static")," package on your system.\nOn Debian/Ubuntu systems, use:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ sudo apt install busybox-static\n")),(0,l.kt)("p",{parentName:"li"},"Start a process using:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ busybox sleep 1000\n")),(0,l.kt)("p",{parentName:"li"},"Investigate the process using ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," and the executable using ",(0,l.kt)("inlineCode",{parentName:"p"},"size"),"."))),(0,l.kt)("h2",{id:"modifying-memory-region-size"},"Modifying Memory Region Size"),(0,l.kt)("p",null,"We want to observe the update in size of memory regions for different instructions used in a program."),(0,l.kt)("p",null,"Enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"support/modify-areas/")," directory.\nBrowse the contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.c")," file;\nit is an update to the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.c")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"memory-areas/")," directory.\nBuild the executable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/modify-areas$ make\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," to view the difference between the new executable and the one in the ",(0,l.kt)("inlineCode",{parentName:"p"},"memory-areas/")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/modify-areas$ size hello\n   text    data     bss     dec     hex filename\n  13131   17128   33592   63851    f96b hello\n\nstudent@os:~/.../lab/support/modify-areas$ size ../memory-areas/hello\n   text    data     bss     dec     hex filename\n   4598     736     824    6158    180e ../memory-areas/hello\n")),(0,l.kt)("p",null,"Explain the differences."),(0,l.kt)("p",null,"Then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," to watch the memory areas of the resulting processes from the two different executables.\nWe will see something like this for the new executable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/modify-areas$ pmap $(pidof hello)\n18254:   ./hello\n000055beff4d0000     16K r-x-- hello\n000055beff6d3000      4K r---- hello\n000055beff6d4000     20K rw--- hello\n000055beff6d9000     32K rw---   [ anon ]\n000055beffb99000    324K rw---   [ anon ]\n00007f7b6c2e6000   1948K r-x-- libc-2.27.so\n00007f7b6c4cd000   2048K ----- libc-2.27.so\n00007f7b6c6cd000     16K r---- libc-2.27.so\n00007f7b6c6d1000      8K rw--- libc-2.27.so\n00007f7b6c6d3000     16K rw---   [ anon ]\n00007f7b6c6d7000    164K r-x-- ld-2.27.so\n00007f7b6c8cd000      8K rw---   [ anon ]\n00007f7b6c900000      4K r---- ld-2.27.so\n00007f7b6c901000      4K rw--- ld-2.27.so\n00007f7b6c902000      4K rw---   [ anon ]\n00007ffe2b196000    204K rw---   [ stack ]\n00007ffe2b1d8000     12K r----   [ anon ]\n00007ffe2b1db000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4840K\n")),(0,l.kt)("p",null,"We notice the size increase of text, data, bss, heap and stack sections."),(0,l.kt)("h3",{id:"practice-2"},"Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Comment out different parts of the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.c")," program to notice differences in only specific areas (text, data, bss, heap, stack).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use a different argument (",(0,l.kt)("inlineCode",{parentName:"p"},"order"),") for the call to the ",(0,l.kt)("inlineCode",{parentName:"p"},"alloc_stack()")," function.\nSee how it affects the stack size during runtime (investigate with ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap"),").")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Do a static build of ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.c")," and check the size of the memory areas, both statically and dynamically.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"extend_mem_area.py")," Python script allocates a new string at each step by merging the two previous versions.\nStart the program and investigate the resulting process at each allocation step.\nNotice which memory area is updated and explain why."))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/page-allocation"},"Quiz")),(0,l.kt)("h2",{id:"allocating-and-deallocating-memory"},"Allocating and Deallocating Memory"),(0,l.kt)("p",null,"Memory areas in a process address space are static or dynamic.\nStatic memory areas are known at the beginning of process lifetime (i.e. at load-time), while dynamic memory areas are managed at runtime."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".rodata"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".data"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".bss")," are allocated at load-time and have a predefined size.\nThe stack and the heap and memory mappings are allocated at runtime and have a variable size.\nFor those, we say we use runtime allocation and deallocation."),(0,l.kt)("p",null,"Memory allocation is implicit for the stack and explicit for the heap.\nThat is, we don't make a particular call to allocate data on the stack;\nthe compiler generates the code that the operating system uses to increase the stack when required.\nFor the heap, we use the ",(0,l.kt)("inlineCode",{parentName:"p"},"malloc()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"free()")," calls to explicitly allocate and deallocate memory."),(0,l.kt)("p",null,"Omitting to deallocate memory results in memory leaks that hurt the resource use in the system.\nBecause of this, some language runtimes employ a garbage collector that automatically frees unused memory areas.\nMore than that, some languages (think of Python) provide no explicit means to allocate memory: you just define and use data."),(0,l.kt)("p",null,"Let's enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"support/alloc_size/")," directory.\nBrowse the ",(0,l.kt)("inlineCode",{parentName:"p"},"alloc_size.c")," file.\nBuild it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/alloc_size$ make\n")),(0,l.kt)("p",null,"Now see the update in the process layout, by running the program in one console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/alloc_size$ ./alloc_size\nPress key to allocate ...\n[...]\n")),(0,l.kt)("p",null,"And investigating it with ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," on another console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/alloc_size$ pmap $(pidof alloc_size)\n21107:   ./alloc_size\n000055de9d173000      8K r-x-- alloc_size\n000055de9d374000      4K r---- alloc_size\n000055de9d375000      4K rw--- alloc_size\n000055de9deea000    132K rw---   [ anon ]\n00007f1ea4fd4000   1948K r-x-- libc-2.27.so\n00007f1ea51bb000   2048K ----- libc-2.27.so\n00007f1ea53bb000     16K r---- libc-2.27.so\n00007f1ea53bf000      8K rw--- libc-2.27.so\n00007f1ea53c1000     16K rw---   [ anon ]\n00007f1ea53c5000    164K r-x-- ld-2.27.so\n00007f1ea55bb000      8K rw---   [ anon ]\n00007f1ea55ee000      4K r---- ld-2.27.so\n00007f1ea55ef000      4K rw--- ld-2.27.so\n00007f1ea55f0000      4K rw---   [ anon ]\n00007ffcf28e9000    132K rw---   [ stack ]\n00007ffcf29be000     12K r----   [ anon ]\n00007ffcf29c1000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4520K\n\nstudent@os:~/.../lab/support/alloc_size$ pmap $(pidof alloc_size)\n21107:   ./alloc_size\n000055de9d173000      8K r-x-- alloc_size\n000055de9d374000      4K r---- alloc_size\n000055de9d375000      4K rw--- alloc_size\n000055de9deea000    452K rw---   [ anon ]\n00007f1ea4fd4000   1948K r-x-- libc-2.27.so\n00007f1ea51bb000   2048K ----- libc-2.27.so\n00007f1ea53bb000     16K r---- libc-2.27.so\n00007f1ea53bf000      8K rw--- libc-2.27.so\n00007f1ea53c1000     16K rw---   [ anon ]\n00007f1ea53c5000    164K r-x-- ld-2.27.so\n00007f1ea55bb000      8K rw---   [ anon ]\n00007f1ea55ee000      4K r---- ld-2.27.so\n00007f1ea55ef000      4K rw--- ld-2.27.so\n00007f1ea55f0000      4K rw---   [ anon ]\n00007ffcf28e9000    132K rw---   [ stack ]\n00007ffcf29be000     12K r----   [ anon ]\n00007ffcf29c1000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4840K\n\nstudent@os:~/.../lab/support/alloc_size$ pmap $(pidof alloc_size)\n21107:   ./alloc_size\n000055de9d173000      8K r-x-- alloc_size\n000055de9d374000      4K r---- alloc_size\n000055de9d375000      4K rw--- alloc_size\n000055de9deea000    420K rw---   [ anon ]\n00007f1ea4fd4000   1948K r-x-- libc-2.27.so\n00007f1ea51bb000   2048K ----- libc-2.27.so\n00007f1ea53bb000     16K r---- libc-2.27.so\n00007f1ea53bf000      8K rw--- libc-2.27.so\n00007f1ea53c1000     16K rw---   [ anon ]\n00007f1ea53c5000    164K r-x-- ld-2.27.so\n00007f1ea55bb000      8K rw---   [ anon ]\n00007f1ea55ee000      4K r---- ld-2.27.so\n00007f1ea55ef000      4K rw--- ld-2.27.so\n00007f1ea55f0000      4K rw---   [ anon ]\n00007ffcf28e9000    132K rw---   [ stack ]\n00007ffcf29be000     12K r----   [ anon ]\n00007ffcf29c1000      4K r-x--   [ anon ]\nffffffffff600000      4K --x--   [ anon ]\n total             4808K\n")),(0,l.kt)("p",null,"The three runs above of the ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," command occur before the allocation, after allocation and before deallocation and after deallocation.\nNotice the update toe the 4th section, the heap."),(0,l.kt)("p",null,"Now, let's see what happens behind the scenes.\nRun the executable under ",(0,l.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"strace"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/alloc_size$ ltrace ./alloc_size\nmalloc(32768)                                                                                                    = 0x55e33f490b10\nprintf("New allocation at %p\\n", 0x55e33f490b10New allocation at 0x55e33f490b10\n)                                                                 = 33\n[...]\nfree(0x55e33f490b10)                                                                                             = <void>\n[...]\n\nstudent@os:~/.../lab/support/alloc_size$ strace ./alloc_size\n[...]\nwrite(1, "New allocation at 0x55ab98acfaf0"..., 33New allocation at 0x55ab98acfaf0\n) = 33\nwrite(1, "New allocation at 0x55ab98ad7b00"..., 33New allocation at 0x55ab98ad7b00\n) = 33\nbrk(0x55ab98b08000)                     = 0x55ab98b08000\nwrite(1, "New allocation at 0x55ab98adfb10"..., 33New allocation at 0x55ab98adfb10\n) = 33\nwrite(1, "Press key to deallocate ...", 27Press key to deallocate ...) = 27\nread(0,\n"\\n", 1024)                     = 1\nbrk(0x55ab98b00000)                     = 0x55ab98b00000\n[...]\n')),(0,l.kt)("p",null,"The resulting output above shows us the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"malloc()")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"free()")," library calls both map to the ",(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man2/sbrk.2.html"},(0,l.kt)("inlineCode",{parentName:"a"},"brk")," syscall"),", a syscall that updates the end of the heap (called ",(0,l.kt)("strong",{parentName:"li"},"program break"),")."),(0,l.kt)("li",{parentName:"ul"},"Multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"malloc()")," calls map to a single ",(0,l.kt)("inlineCode",{parentName:"li"},"brk")," syscall for efficiency.\n",(0,l.kt)("inlineCode",{parentName:"li"},"brk")," is called to preallocate a larger chunk of memory that ",(0,l.kt)("inlineCode",{parentName:"li"},"malloc")," will then use.")),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALLOC_SIZE_KB")," macro in the ",(0,l.kt)("inlineCode",{parentName:"p"},"alloc_size.c")," file to ",(0,l.kt)("inlineCode",{parentName:"p"},"256"),".\nRebuild the program and rerun it under ",(0,l.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"strace"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/alloc_size$ ltrace ./alloc_size\n[...]\nmalloc(262144)                                                                                                   = 0x7f4c016a9010\n[...]\nfree(0x7f4c016a9010)                                                                                             = <void>\n[...]\n\nstudent@os:~/.../lab/support/alloc_size$ strace ./alloc_size\n[...]\nmmap(NULL, 266240, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7feee19f2000\nwrite(1, "New allocation at 0x7feee19f2010"..., 33New allocation at 0x7feee19f2010\n) = 33\nmmap(NULL, 266240, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7feee19b1000\nwrite(1, "New allocation at 0x7feee19b1010"..., 33New allocation at 0x7feee19b1010\n) = 33\nwrite(1, "Press key to deallocate ...", 27Press key to deallocate ...) = 27\nread(0,\n"\\n", 1024)                     = 1\nmunmap(0x7feee19b1000, 266240)          = 0\n[...]\n')),(0,l.kt)("p",null,"For the new allocation size, notice that the remarks above don't hold:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"malloc()")," now invokes the ",(0,l.kt)("inlineCode",{parentName:"li"},"mmap")," syscall, while ",(0,l.kt)("inlineCode",{parentName:"li"},"free()")," invokes the ",(0,l.kt)("inlineCode",{parentName:"li"},"munmap")," syscall."),(0,l.kt)("li",{parentName:"ul"},"Each ",(0,l.kt)("inlineCode",{parentName:"li"},"malloc()")," calls results in a separate ",(0,l.kt)("inlineCode",{parentName:"li"},"mmap")," syscall.")),(0,l.kt)("p",null,"This is a behavior of the ",(0,l.kt)("inlineCode",{parentName:"p"},"malloc()")," in libc, documented in the ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/malloc.3.html#NOTES"},"manual page"),".\nA variable ",(0,l.kt)("inlineCode",{parentName:"p"},"MALLOC_THRESHOLD")," holds the size after which ",(0,l.kt)("inlineCode",{parentName:"p"},"mmap")," is used, instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"brk"),".\nThis is based on a heuristic of using the heap or some other area in the process address space."),(0,l.kt)("h3",{id:"practice-3"},"Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," to analyze the process address space for ",(0,l.kt)("inlineCode",{parentName:"p"},"ALLOC_SIZE_KB")," initialized to ",(0,l.kt)("inlineCode",{parentName:"p"},"256"),".\nNotice the new memory areas and the difference between the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"mmap")," syscall and ",(0,l.kt)("inlineCode",{parentName:"p"},"brk")," syscall.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"valgrind")," on the resulting executable, and notice there are memory leaks.\nThey are quite obvious due to the lack of proper freeing.\nSolve the leaks.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"valgrind")," on different executables in the system (in ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin/"),") and see if they have memory leaks."))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/malloc-brk"},"Quiz")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/malloc-mmap"},"Quiz")),(0,l.kt)("h2",{id:"memory-mapping"},"Memory Mapping"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"mmap")," syscall is used to allocate memory as ",(0,l.kt)("em",{parentName:"p"},"anonymous mapping"),", that is reserving memory in the process address space.\nAn alternate use is for mapping files in the memory address space.\nMapping of files is done by the loader for executables and libraries.\nThat is why, in the output of ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap"),", there is a column with a filename."),(0,l.kt)("p",null,"Mapping of a file results in getting a pointer to its contents and then using that pointer.\nThis way, reading and writing to a file is an exercise of pointer copying, instead of the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"write"),"-like system calls."),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"support/copy/")," folder, there are two source code files and two scripts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"read_write_copy.c")," implements copying with ",(0,l.kt)("inlineCode",{parentName:"li"},"read")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"write")," syscalls"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mmap_copy.c")," implements copying using ",(0,l.kt)("inlineCode",{parentName:"li"},"mmap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generate.sh")," script generates the input file ",(0,l.kt)("inlineCode",{parentName:"li"},"in.dat")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"benchmark_cp.sh")," script runs the two executables ",(0,l.kt)("inlineCode",{parentName:"li"},"mmap_copy")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"read_write_copy"))),(0,l.kt)("p",null,"Open the two source code files and investigate them.\nYou will notice that the ",(0,l.kt)("inlineCode",{parentName:"p"},"open()")," system call has the following prototype ",(0,l.kt)("inlineCode",{parentName:"p"},"int open(const char *pathname, int flags)"),".\nThe argument ",(0,l.kt)("inlineCode",{parentName:"p"},"flags")," must include one of the following access modes: ",(0,l.kt)("inlineCode",{parentName:"p"},"O_RDONLY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"O_WRONLY"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"O_RDWR")," - indicating that the file is opened in read-only, write-only, or read/write mode.\nYou can add an additional flag - ",(0,l.kt)("inlineCode",{parentName:"p"},"O_CREAT")," - that will create a new file with ",(0,l.kt)("inlineCode",{parentName:"p"},"pathname")," if the file does not already exist.\nThis is only the case when opening the file for writing (",(0,l.kt)("inlineCode",{parentName:"p"},"O_WRONLY")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"O_RDWR"),").\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"O_CREAT")," is set, a third argument ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_t mode")," is required for the ",(0,l.kt)("inlineCode",{parentName:"p"},"open()")," syscall.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," argument specifies the permissions of the newly created file.\nFor example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// If DST_FILENAME exists it will be open in read/write mode and truncated to length 0\n// If DST_FILENAME does not exist, a file at the path DST_FILENAME will be create with 644 permissions\ndst_fd = open(DST_FILENAME, O_RDWR | O_CREAT | O_TRUNC, 0644);\n")),(0,l.kt)("p",null,"Let's generate the input file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/copy$ ./generate.sh\n")),(0,l.kt)("p",null,"and let's build the two executable files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/copy$ make\n")),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"benchmark_cp.sh")," script:"),(0,l.kt)("p",null,"Run the script in your local environment, not in the Docker container.\nDocker does not have permission to write to ",(0,l.kt)("inlineCode",{parentName:"p"},"/proc/sys/vm/drop_caches")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/copy$ ./benchmark_cp.sh\nBenchmarking mmap_copy on in.dat\ntime passed 54015 microseconds\n\nBenchmarking read_write_copy on in.dat\ntime passed 42011 microseconds\n")),(0,l.kt)("p",null,"Run the script a few more times.\nAs you can see, there isn't much of a difference between the two approaches.\nAlthough we would have expected the use of multiple system calls to cause overhead, it's too little compared to the memory copying overhead."),(0,l.kt)("p",null,"If you inspect ",(0,l.kt)("inlineCode",{parentName:"p"},"benchmark_cp.sh"),", you will notice a weird-looking command ",(0,l.kt)("inlineCode",{parentName:"p"},'sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"'),".\nThis is used to disable a memory optimization that the kernel does.\nIt's called \"buffer cache\" and it's a mechanism by which the kernel caches data blocks from recently accessed files in memory.\nYou will get more detailed information about this in the I/O chapter."),(0,l.kt)("p",null,"Browse the two source code files (",(0,l.kt)("inlineCode",{parentName:"p"},"mmap_copy.c")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"read_write_copy.c"),") for a glimpse on how the two types of copies are implemented."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/98d8e7a279a02586c58f8c00c0cf157ba3e657a2/Lab/Data/quiz/mmap-file"},"Quiz")),(0,l.kt)("h3",{id:"practice-4"},"Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use a different value for ",(0,l.kt)("inlineCode",{parentName:"p"},"BUFSIZE")," and see if that affects the comparison between the two executables.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add a ",(0,l.kt)("inlineCode",{parentName:"p"},"sleep()")," call to the ",(0,l.kt)("inlineCode",{parentName:"p"},"mmap_copy.c")," file ",(0,l.kt)("strong",{parentName:"p"},"after")," the files were mapped.\nRebuild the program and run it.\nOn a different console, use ",(0,l.kt)("inlineCode",{parentName:"p"},"pmap")," to view the two new memory regions that were added to the process, by mapping the ",(0,l.kt)("inlineCode",{parentName:"p"},"in.dat")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"out.dat")," files."))))}m.isMDXComponent=!0}}]);