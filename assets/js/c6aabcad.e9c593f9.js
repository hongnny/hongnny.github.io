"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,y=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"\u81ea\u5b9a\u4e49\u5b88\u536b"},u=void 0,p={unversionedId:"typescript/guard",id:"typescript/guard",title:"\u81ea\u5b9a\u4e49\u5b88\u536b",description:"1. \u5148\u6765\u770b\u4e2a\u95ee\u9898",source:"@site/packages/docs/typescript/guard.md",sourceDirName:"typescript",slug:"/typescript/guard",permalink:"/docs/typescript/guard",draft:!1,editUrl:"https://github.com/jonbenery.github.io/packages/docs/typescript/guard.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1657507612,formattedLastUpdatedAt:"7/11/2022",frontMatter:{title:"\u81ea\u5b9a\u4e49\u5b88\u536b"},sidebar:"docs",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/javascript/regExp"},next:{title:"\u62bd\u8c61\u7c7b",permalink:"/docs/typescript/abstract"}},s={},l=[{value:"1. \u5148\u6765\u770b\u4e2a\u95ee\u9898",id:"1-\u5148\u6765\u770b\u4e2a\u95ee\u9898",level:3},{value:"2. \u7531\u6b64\u5f15\u51fa\u7c7b\u578b\u5b88\u536b \uff5c \u5b57\u7b26\u4e32\u7c7b\u578b\u5b88\u536b",id:"2-\u7531\u6b64\u5f15\u51fa\u7c7b\u578b\u5b88\u536b--\u5b57\u7b26\u4e32\u7c7b\u578b\u5b88\u536b",level:3},{value:"3. \u5bf9\u8c61\u7c7b\u578b\u5b88\u536b",id:"3-\u5bf9\u8c61\u7c7b\u578b\u5b88\u536b",level:3},{value:"4. \u51fd\u6570\u7c7b\u578b\u5b88\u536b",id:"4-\u51fd\u6570\u7c7b\u578b\u5b88\u536b",level:3},{value:"5. promise\u7c7b\u578b\u5b88\u536b",id:"5-promise\u7c7b\u578b\u5b88\u536b",level:3},{value:"6. \u5176\u4ed6\u7c7b\u578b\u7684\u5b88\u536b\uff0c\u5de5\u4f5c\u4e2d\u9047\u5230\u540e\u4f9d\u6b21\u8865\u5145",id:"6-\u5176\u4ed6\u7c7b\u578b\u7684\u5b88\u536b\u5de5\u4f5c\u4e2d\u9047\u5230\u540e\u4f9d\u6b21\u8865\u5145",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-\u5148\u6765\u770b\u4e2a\u95ee\u9898"},"1. \u5148\u6765\u770b\u4e2a\u95ee\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function isString(data: any): boolean {\n  return typeof data === 'string'\n}\nfunction adjustType(data: unknown) {\n  if (isString(data)) {\n    data.substring() // \u7c7b\u578b\u201cunknown\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201csubstring\u201d\u3002\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u7c7b\u578b\u201cunknown\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201csubstring\u201d"),"\u662f\u56e0\u4e3a\uff0c\u6b64\u5904\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"isString"),"\u51fd\u6570\u5728\u8fd8\u672a\u8fd0\u884c\u7684\u72b6\u6001\u4e0bts\u662f\u83b7\u53d6\u4e0d\u5230\u51fd\u6570\u5185\u90e8\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u65e0\u6cd5\u65ad\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,i.kt)("h3",{id:"2-\u7531\u6b64\u5f15\u51fa\u7c7b\u578b\u5b88\u536b--\u5b57\u7b26\u4e32\u7c7b\u578b\u5b88\u536b"},"2. \u7531\u6b64\u5f15\u51fa\u7c7b\u578b\u5b88\u536b \uff5c \u5b57\u7b26\u4e32\u7c7b\u578b\u5b88\u536b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function isString(data: any): data is string {\n  return typeof data === 'string'\n}\n\nfunction adjustType(data: unknown) {\n  if (isString(data)) {\n    data.substring()\n  }\n}\n")),(0,i.kt)("h3",{id:"3-\u5bf9\u8c61\u7c7b\u578b\u5b88\u536b"},"3. \u5bf9\u8c61\u7c7b\u578b\u5b88\u536b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function isObject(data: any): data is Record<any, any> {\n  return data !== null && typeof data === 'object'\n}\n")),(0,i.kt)("h3",{id:"4-\u51fd\u6570\u7c7b\u578b\u5b88\u536b"},"4. \u51fd\u6570\u7c7b\u578b\u5b88\u536b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function isFunction(data: any): data is Function {\n  return typeof data === 'function'\n}\n")),(0,i.kt)("h3",{id:"5-promise\u7c7b\u578b\u5b88\u536b"},"5. promise\u7c7b\u578b\u5b88\u536b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function isPromise(data: any): data is Promise<any> {\n  return isObject(data) && isFunction(data.then)\n}\n")),(0,i.kt)("h3",{id:"6-\u5176\u4ed6\u7c7b\u578b\u7684\u5b88\u536b\u5de5\u4f5c\u4e2d\u9047\u5230\u540e\u4f9d\u6b21\u8865\u5145"},"6. \u5176\u4ed6\u7c7b\u578b\u7684\u5b88\u536b\uff0c\u5de5\u4f5c\u4e2d\u9047\u5230\u540e\u4f9d\u6b21\u8865\u5145"))}f.isMDXComponent=!0}}]);