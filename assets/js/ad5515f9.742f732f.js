"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={slug:"ClipboardEvent",title:"\u526a\u5207\u677f",authors:"jonben",tags:["javascript","\u7f51\u7edc"]},l=void 0,o={permalink:"/blog/ClipboardEvent",editUrl:"https://github.com/hongnny/weblog/blog/2023-05-12-clipboardEvent/index.mdx",source:"@site/blog/2023-05-12-clipboardEvent/index.mdx",title:"\u526a\u5207\u677f",description:"1. ClipboardEvent",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"\u7f51\u7edc",permalink:"/blog/tags/\u7f51\u7edc"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://hongnny.github.io",imageURL:"https://hongnny.github.io/img/favicon.ico",key:"jonben"}],frontMatter:{slug:"ClipboardEvent",title:"\u526a\u5207\u677f",authors:"jonben",tags:["javascript","\u7f51\u7edc"]},nextItem:{title:"http\u7f13\u5b58",permalink:"/blog/http-cache"}},p={authorsImageUrls:[void 0]},s=[{value:"1. ClipboardEvent",id:"1-clipboardevent",level:2},{value:"2. ClipboardEvent.clipboardData",id:"2-clipboardeventclipboarddata",level:2},{value:"3. DataTransfer",id:"3-datatransfer",level:2},{value:"1. items",id:"1-items",level:3},{value:"2. types",id:"2-types",level:3},{value:"4. DataTransferItem",id:"4-datatransferitem",level:2},{value:"5. \u5b9e\u6218",id:"5-\u5b9e\u6218",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-clipboardevent"},"1. ",(0,r.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent"},"ClipboardEvent")),(0,r.kt)("h2",{id:"2-clipboardeventclipboarddata"},"2. ",(0,r.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent/clipboardData"},"ClipboardEvent.clipboardData")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClipboardEvent.clipboardData"),"\u5c5e\u6027\u4fdd\u5b58\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"DataTransfer"),"\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u7528\u4e8e\uff1a"),(0,r.kt)("p",null,"\u63cf\u8ff0\u54ea\u4e9b\u6570\u636e\u53ef\u4ee5\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"cut"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"copy"),"\u4e8b\u4ef6\u5904\u7406\u5668\u653e\u5165\u526a\u5207\u677f\uff0c\u901a\u5e38\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setData(format, data)"),"\u65b9\u6cd5\uff1b\n\u83b7\u53d6\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"paste"),"\u4e8b\u4ef6\u5904\u7406\u5668\u62f7\u8d1d\u8fdb\u526a\u5207\u677f\u7684\u6570\u636e\uff0c\u901a\u5e38\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"getData(format)"),"\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getData()"),"\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u4ece\u526a\u8d34\u677f\u83b7\u53d6\u6570\u636e\u3002\u5b83\u53ea\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u8981\u83b7\u53d6\u7684\u6570\u636e\u7c7b\u578b\uff08\u4e5f\u79f0\u4e3a\u683c\u5f0f\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"MIME"),"\u7c7b\u578b\uff09\u3002\u8be5\u53c2\u6570\u901a\u5e38\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u662f\u9884\u5b9a\u4e49\u7684MIME\u7c7b\u578b\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"text/plain"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"text/html"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"image/png"),"\u7b49\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MIME"),"\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"3-datatransfer"},"3. ",(0,r.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer"},"DataTransfer")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DataTransfer"),"\u5bf9\u8c61\u7528\u4e8e\u4fdd\u5b58\u62d6\u52a8\u5e76\u653e\u4e0b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"drag and drop"),"\uff09\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u3002\u5b83\u53ef\u4ee5\u4fdd\u5b58\u4e00\u9879\u6216\u591a\u9879\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u9879\u53ef\u4ee5\u662f\u4e00\u79cd\u6216\u8005\u591a\u79cd\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\u4e0a\u7684\u4e24\u4e2a\u5c5e\u6027")),(0,r.kt)("h3",{id:"1-items"},"1. items"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"items"),"\u5c5e\u6027\u53ea\u8bfb\uff0c\u662f\u62d6\u52a8\u64cd\u4f5c\u4e2d \u6570\u636e\u4f20\u8f93\u9879\u7684\u5217\u8868\u3002\u8be5\u5217\u8868\u5305\u542b\u4e86\u64cd\u4f5c\u4e2d\u6bcf\u4e00\u9879\u76ee\u7684\u5bf9\u5e94\u9879\uff0c\u5982\u679c\u64cd\u4f5c\u6ca1\u6709\u9879\u76ee\uff0c\u5219\u5217\u8868\u4e3a\u7a7a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"itemList = dataTransfer.items;\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"DataTransferItemList"),"\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u8868\u793a\u62d6\u52a8\u64cd\u4f5c\u4e2d\u88ab\u62d6\u52a8\u9879\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DataTransferItem"),"\u5bf9\u8c61\uff0c\u6bcf\u4e00\u4e2a\u62d6\u52a8\u9879\u5bf9\u5e94\u4e00\u4e2a\u5217\u8868\u9879\u3002\u5982\u679c\u62d6\u52a8\u64cd\u4f5c\u4e2d\u6ca1\u6709\u6570\u636e\uff0c\u5219\u5217\u8868\u4e3a\u7a7a\u3002"),(0,r.kt)("h3",{id:"2-types"},"2. types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"types"),"\u662f\u53ea\u8bfb\u5c5e\u6027\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"dragstart"),"\u4e8b\u4ef6\u4e2d\u8bbe\u7f6e\u7684\u62d6\u52a8\u6570\u636e\u683c\u5f0f (\u5982 \u5b57\u7b26\u4e32) \u7684\u6570\u7ec4\u3002\u683c\u5f0f\u987a\u5e8f\u4e0e\u62d6\u52a8\u64cd\u4f5c\u4e2d\u5305\u542b\u7684\u6570\u636e\u987a\u5e8f\u76f8\u540c\u3002\u62d6\u52a8\u64cd\u4f5c\u4e2d\u4f7f\u7528\u7684\u6570\u636e\u683c\u5f0f\u6570\u7ec4\u3002\u6bcf\u79cd\u683c\u5f0f\u90fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u5982\u679c\u62d6\u52a8\u64cd\u4f5c\u4e0d\u5305\u542b\u6570\u636e\uff0c\u5219\u6b64\u6570\u7ec4\u5217\u8868\u5c06\u4e3a\u7a7a\u3002\u5982\u679c\u62d6\u52a8\u64cd\u4f5c\u4e2d\u5305\u542b\u4efb\u4f55\u6587\u4ef6\uff0c\u5219\u5176\u4e2d\u4e00\u4e2a\u7c7b\u578b\u5c06\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Files"),"\u3002"),(0,r.kt)("h2",{id:"4-datatransferitem"},"4. ",(0,r.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItem/kind"},"DataTransferItem")),(0,r.kt)("p",null,"\u6587\u6863\u5199\u7684\u6bd4\u8f83\u8be6\u7ec6\uff0c\u76f4\u63a5\u53c2\u8003"),(0,r.kt)("h2",{id:"5-\u5b9e\u6218"},"5. \u5b9e\u6218"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('paste', e => {\n  e.preventDefault()\n  const dataTransfer = e.clipboardData\n  const items = dataTransfer.items\n  if (!items) return\n  let item\n  for (let i = 0; i < items.length; i++) {\n    item = items[i]\n    if (item.kind === 'file') {\n      if (!item.type.match('^image/')) return\n      // \u56fe\u7247\n      console.log(item.getAsFile())\n    } else {\n      if (!item.type.match('^text/plain')) return\n      // \u6587\u672c\n      item.getAsString(s => {\n        console.log(s)\n      })\n    }\n  }\n})\n")))}m.isMDXComponent=!0}}]);