"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"module",title:"ADM,CMD\u89c4\u8303",authors:"jonben",tags:["javascript","module"]},i=void 0,l={permalink:"/blog/module",editUrl:"https://github.com/hongnny/weblog/blog/2023-02-13-module/index.md",source:"@site/blog/2023-02-13-module/index.md",title:"ADM,CMD\u89c4\u8303",description:"1. AMD",date:"2023-02-13T00:00:00.000Z",formattedDate:"February 13, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"module",permalink:"/blog/tags/module"}],readingTime:1.59,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://hongnny.github.io",imageURL:"https://hongnny.github.io/img/favicon.ico",key:"jonben"}],frontMatter:{slug:"module",title:"ADM,CMD\u89c4\u8303",authors:"jonben",tags:["javascript","module"]},prevItem:{title:"http\u7f13\u5b58",permalink:"/blog/http-cache"},nextItem:{title:"sessionStroage",permalink:"/blog/sessionStroage"}},u={authorsImageUrls:[void 0]},c=[{value:"1. AMD",id:"1-amd",level:2},{value:"1. RequireJS\u7684\u57fa\u672c\u7528\u6cd5",id:"1-requirejs\u7684\u57fa\u672c\u7528\u6cd5",level:3},{value:"2. RequireJS\u7684\u7279\u70b9",id:"2-requirejs\u7684\u7279\u70b9",level:3},{value:"2. CMD",id:"2-cmd",level:2},{value:"1. SeaJS\u7684\u57fa\u672c\u7528\u6cd5",id:"1-seajs\u7684\u57fa\u672c\u7528\u6cd5",level:3},{value:"2.SeaJS\u7684\u7279\u70b9",id:"2seajs\u7684\u7279\u70b9",level:3}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-amd"},"1. AMD"),(0,a.kt)("p",null,"AMD\u5168\u79f0\u662fAsynchronous Module Definition\uff0c\u5373\u5f02\u6b65\u6a21\u5757\u52a0\u8f7d\u673a\u5236\u3002\u540e\u6765RequireJS\u5b9e\u73b0\u4e86AMD\u89c4\u8303\uff0c\u6240\u4ee5\u4e00\u822c\u8bf4AMD\u4e5f\u662f\u6307RequireJS\u3002"),(0,a.kt)("h3",{id:"1-requirejs\u7684\u57fa\u672c\u7528\u6cd5"},"1. RequireJS\u7684\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"define"),"\u6765\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"require"),"\u53ef\u4ee5\u5bfc\u5165\u5b9a\u4e49\u7684\u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//a.js\n// define\u53ef\u4ee5\u4f20\u5165\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f\u6a21\u5757\u540d(\u5b57\u7b26\u4e32)\u3001\u4f9d\u8d56\u6a21\u5757(\u6570\u7ec4)\u3001\u56de\u8c03\u51fd\u6570(\u51fd\u6570)\ndefine(function(){\n    return 1;\n})\n\n// b.js\n// \u4f9d\u8d56\u8981\u63d0\u524d\u4e66\u5199\ndefine('b', ['a'], function(val){\n    return val + 1;\n})\n\n// c.js\n//\u6570\u7ec4\u4e2d\u58f0\u660e\u9700\u8981\u52a0\u8f7d\u7684\u6a21\u5757\uff0c\u53ef\u4ee5\u662f\u6a21\u5757\u540d\u3001js\u6587\u4ef6\u8def\u5f84\nrequire(['b'], function(val){\n    console.log(val); // 2\n});\n")),(0,a.kt)("h3",{id:"2-requirejs\u7684\u7279\u70b9"},"2. RequireJS\u7684\u7279\u70b9"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f9d\u8d56\u7684\u6a21\u5757\uff0cAMD\u63a8\u5d07\u4f9d\u8d56\u524d\u7f6e\uff0c\u63d0\u524d\u6267\u884c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728define\u65b9\u6cd5\u91cc\u4f20\u5165\u7684\u4f9d\u8d56\u6a21\u5757(\u6570\u7ec4)\uff0c\u4f1a\u5728\u4e00\u5f00\u59cb\u5c31\u4e0b\u8f7d\u5e76\u6267\u884c\u3002\xe5"),(0,a.kt)("h2",{id:"2-cmd"},"2. CMD"),(0,a.kt)("p",null,"CMD\u662fSeaJS\u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u751f\u4ea7\u7684\u5bf9\u6a21\u5757\u5b9a\u4e49\u7684\u89c4\u8303\uff0c\u5728Web\u6d4f\u89c8\u5668\u7aef\u7684\u6a21\u5757\u52a0\u8f7d\u5668\u4e2d\u3002"),(0,a.kt)("h3",{id:"1-seajs\u7684\u57fa\u672c\u7528\u6cd5"},"1. SeaJS\u7684\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define(function(require, exports, module) {\n  // \u4f9d\u8d56\u53ef\u4ee5\u5c31\u8fd1\u4e66\u5199\n  const a = require('./a')\n  a.doSomething();\n  const b = require('./b')\n  b.doSomething();\n})\n")),(0,a.kt)("h3",{id:"2seajs\u7684\u7279\u70b9"},"2.SeaJS\u7684\u7279\u70b9"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f9d\u8d56\u7684\u6a21\u5757\uff0cCMD\u63a8\u5d07\u4f9d\u8d56\u5c31\u8fd1\uff0c\u5ef6\u8fdf\u6267\u884c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u6709\u5230require\u65f6\u4f9d\u8d56\u6a21\u5757\u624d\u6267\u884c\u3002"))}p.isMDXComponent=!0}}]);