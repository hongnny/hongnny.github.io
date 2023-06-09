"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"webpack/require-context",id:"webpack/require-context",title:"require-context",description:"It allows you to pass in a directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against.",source:"@site/docs/webpack/require-context.md",sourceDirName:"webpack",slug:"/webpack/require-context",permalink:"/docs/webpack/require-context",draft:!1,editUrl:"https://github.com/hongnny/weblog/docs/webpack/require-context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack\u52a8\u6001\u5bfc\u5165\u6a21\u5757\u539f\u7406",permalink:"/docs/webpack/async-module/"},next:{title:"git\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/git/"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"It allows you to pass in a directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against.")),(0,a.kt)("p",null,"\u610f\u601d\u662f\u5b83\u5141\u8bb8\u4f60\u901a\u8fc7\u4e00\u4e2a\u76ee\u5f55\u8fdb\u884c\u641c\u7d22,flag\u6307\u5b9a\u662f\u5426\u641c\u7d22\u5b50\u76ee\u5f55\uff0c\u4ee5\u53ca\u4e0e\u6587\u4ef6\u5339\u914d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e5f\u5c31\u662f\u8bf4 require.context \u6709\u4e09\u4e2a\u53c2\u6570\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"directory\uff1a\u8bf4\u660e\u9700\u8981\u68c0\u7d22\u7684\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"useSubdirectories\uff1a\u662f\u5426\u68c0\u7d22\u5b50\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"regExp: \u5339\u914d\u6587\u4ef6\u7684\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.kt)("p",null,"\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"require.context('./test', false, /\\.test\\.js$/);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"context module API")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A context module exports a (require) function that takes one argument: the request.\nThe exported function has 3 properties: resolve, keys, id.\nresolve is a function and returns the module id of the parsed request.\nkeys is a function that returns an array of all possible requests that the context module can handle.\nid is the module id of the context module. This may be useful for module.hot.accept")),(0,a.kt)("p",null,"\u610f\u601d\u662f\u8be5\u4e0a\u4e0b\u6587\u5bfc\u51fa\u4e00\u4e2a\u5fc5\u987b\u7684\u51fd\u6570,\u5e76\u4e14\u8fd9\u4e2a\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u8bf7\u6c42\u7684\u53c2\u6570.\n\u5bfc\u51fa\u7684\u51fd\u6570\u67093\u4e2a\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"resolve"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolve")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u89e3\u6790\u8bf7\u6c42\u7684\u6a21\u5757ID\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keys")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e0a\u4e0b\u6587\u6a21\u5757\u53ef\u4ee5\u5904\u7406\u7684\u6240\u6709\u53ef\u80fd\u8bf7\u6c42\u7684\u6570\u7ec4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," \u662f\u4e0a\u4e0b\u6587\u6a21\u5757\u7684\u6a21\u5757ID\u3002 \u8fd9\u53ef\u80fd\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"module.hot.accept")," \u6709\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var cache = {};\nfunction importAll (r) {\n  r.keys().forEach(key => cache[key] = r(key));\n}\nimportAll(require.context('../components/', true, /\\.js$/));\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5bfc\u51fa\u5f53\u524d\u76ee\u5f55\u6587\u4ef6\u4e0b\u7684\u6240\u6709js\u6587\u4ef6\u5e76\u4e14\u4e0d\u5305\u542b\u8be5index.js\u6587\u4ef6"),"\n\u9996\u5148\u521b\u5efa\u4e24\u4e2a\u6d4b\u8bd5\u6587\u4ef6index.js\u548ctest.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var cache = {};\nfunction importAll (r) {\n  r.keys().forEach(key => {\n    if(key === './index.js') return\n    cache[key] = r(key).defalut\n  });\n}\nimportAll(require.context('.', false, /\\.js$/));\nconsole.log(cache) //\u53ef\u4ee5\u770b\u4e0bcache\u73b0\u5728\u662f\u4ec0\u4e48\u6837\u5b50\nexport default cache\n")))}u.isMDXComponent=!0}}]);