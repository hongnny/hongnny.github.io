"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"sessionStroage",title:"sessionStroage",authors:"jonben",tags:["javascript"]},i=void 0,l={permalink:"/blog/sessionStroage",editUrl:"https://github.com/jonbenery/weblog/blog/2023-02-10-sessionStorage/index.md",source:"@site/blog/2023-02-10-sessionStorage/index.md",title:"sessionStroage",description:"1. \u6765\u81eaMDN\u7684\u89e3\u91ca",date:"2023-02-10T00:00:00.000Z",formattedDate:"February 10, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"jonben"}],frontMatter:{slug:"sessionStroage",title:"sessionStroage",authors:"jonben",tags:["javascript"]},nextItem:{title:"\u65f6\u95f4\u5faa\u73af-\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",permalink:"/blog/eventLoop"}},s={authorsImageUrls:[void 0]},p=[{value:"1. \u6765\u81eaMDN\u7684\u89e3\u91ca",id:"1-\u6765\u81eamdn\u7684\u89e3\u91ca",level:2},{value:"2. \u6848\u4f8b",id:"2-\u6848\u4f8b",level:2},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6765\u81eamdn\u7684\u89e3\u91ca"},"1. \u6765\u81eaMDN\u7684\u89e3\u91ca"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage"},"MDN")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u5c5e\u6027\u5141\u8bb8\u4f60\u8bbf\u95ee\u4e00\u4e2a\uff0c\u5bf9\u5e94\u5f53\u524d\u6e90\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"session Storage"),"\u5bf9\u8c61\u3002\u5b83\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),"\u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),"\u91cc\u9762\u5b58\u50a8\u7684\u6570\u636e\u6ca1\u6709\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\uff0c\u800c\u5b58\u50a8\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u91cc\u9762\u7684\u6570\u636e\u5728\u9875\u9762\u4f1a\u8bdd\u7ed3\u675f\u65f6\u4f1a\u88ab\u6e05\u9664\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u4f1a\u8bdd\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u671f\u95f4\u4e00\u76f4\u4fdd\u6301\uff0c\u5e76\u4e14\u91cd\u65b0\u52a0\u8f7d\u6216\u6062\u590d\u9875\u9762\u4ecd\u4f1a\u4fdd\u6301\u539f\u6765\u7684\u9875\u9762\u4f1a\u8bdd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5728\u65b0\u6807\u7b7e\u6216\u7a97\u53e3\u6253\u5f00\u4e00\u4e2a\u9875\u9762\u65f6\u4f1a\u590d\u5236\u9876\u7ea7\u6d4f\u89c8\u4f1a\u8bdd\u7684\u4e0a\u4e0b\u6587\u4f5c\u4e3a\u65b0\u4f1a\u8bdd\u7684\u4e0a\u4e0b\u6587\uff0c"),"\u8fd9\u70b9\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"session cookies"),"\u7684\u8fd0\u884c\u65b9\u5f0f\u4e0d\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00\u591a\u4e2a\u76f8\u540c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"URL"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Tabs"),"\u9875\u9762\uff0c\u4f1a\u521b\u5efa\u5404\u81ea\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"sessionStorage"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed\u5bf9\u5e94\u6d4f\u89c8\u5668\u6807\u7b7e\u6216\u7a97\u53e3\uff0c\u4f1a\u6e05\u9664\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"sessionStorage"),"\u3002")),(0,a.kt)("h2",{id:"2-\u6848\u4f8b"},"2. \u6848\u4f8b"),(0,a.kt)("p",null,"\u73b0\u6709\u4e00\u4e2a\u9875\u9762A\uff0c\u6267\u884c\u4e0b\u9762\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  window.sessionStorage.setItem('init', '\u521d\u59cb\u5316')\n")),(0,a.kt)("p",null,"\u5728A\u9875\u9762\u6709\u4e2a\u6309\u94ae\uff0c\u70b9\u51fb\u540e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"window.open(location.href)"),"\u6253\u5f00\u540c\u6e90\u7684\u9875\u9762\uff0c\u7136\u540e\u5728\u8be5\u9875\u9762\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.sessionStorage.getItem('init') // \u521d\u59cb\u5316\n")),(0,a.kt)("p",null,"\u7ed3\u679c\uff0c\u6211\u4eec\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u5728\u6253\u5f00\u65b0\u7a97\u53e3\u540e\u662f\u53ef\u4ee5\u5171\u4eab",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u7684\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u63a5\u7740\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5728\u4e0a\u6b21\u6848\u4f8b\u6253\u5f00\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u9875\u9762\u4e0b\u7ee7\u7eed\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.sessionStorage.setItem('init', '\u88ab\u4fee\u6539')\nwindow.sessionStorage.setItem('name', 'jonben')\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u65b0\u5f00\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u540c\u6e90\u7a97\u53e3"),"\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.sessionStorage.getItem('init') // \u521d\u59cb\u5316\nwindow.sessionStorage.getItem('name') // null\n")),(0,a.kt)("p",null,"\u7ed3\u679c\uff0c\u6211\u4eec\u53d1\u73b0\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u7684\u503c\u4ecd\u7136\u88ab\u4fee\u6539\u524d\u7684\u503c\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\u7684\u503c\u786e\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u518d\u56de\u53bb\u7406\u89e3\u4e00\u4e0bMDN\u7684\u8bf4\u6cd5\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5728\u65b0\u6807\u7b7e\u6216\u7a97\u53e3\u6253\u5f00\u4e00\u4e2a\u9875\u9762\u65f6\u4f1a\u590d\u5236\u9876\u7ea7\u6d4f\u89c8\u4f1a\u8bdd\u7684\u4e0a\u4e0b\u6587\u4f5c\u4e3a\u65b0\u4f1a\u8bdd\u7684\u4e0a\u4e0b\u6587\uff0c"),"\u3002"),(0,a.kt)("p",null,"\u539f\u6765\u53ea\u6709\u5728\u672c\u9875\u9762\u4e2d\u4ee5\u65b0\u9875\u7b7e\u6216\u7a97\u53e3\u6253\u5f00\u7684\u540c\u6e90\u9875\u9762\u4f1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e34\u65f6\u5171\u4eab"),"\u4e4b\u524d\u9875\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u3002\u4ee5\u540e\u8bbe\u7f6e\u7684\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u662f\u4e0d\u80fd\u88ab\u5171\u4eab\u7684\u3002"),(0,a.kt)("h2",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,a.kt)("p",null,"\u591a\u7a97\u53e3\u4e4b\u95f4",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u4e0d\u53ef\u4ee5\u5171\u4eab\u72b6\u6001\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u7279\u5b9a\u573a\u666f\u4e0b\u65b0\u5f00\u7684\u9875\u9762\u4f1a\u590d\u5236\u4e4b\u524d\u9875\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\uff01\uff01"))}u.isMDXComponent=!0}}]);