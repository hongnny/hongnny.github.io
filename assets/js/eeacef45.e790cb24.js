"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,u=s["".concat(o,".").concat(d)]||s[d]||k[d]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6606:(e,t,n)=>{n.d(t,{z:()=>l});var a=n(7294);const r="preview_wToN",i="img_MFLS";function l(e){let{width:t="atuo",src:n,text:l}=e;return a.createElement("div",{className:r,style:{width:t}},a.createElement("img",{className:i,src:n.default,alt:""}),a.createElement("div",null,l))}},5181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(6606);const l={slug:"http-cache",title:"http\u7f13\u5b58",authors:"jonben",tags:["javascript","\u7f51\u7edc"]},p=void 0,o={permalink:"/blog/http-cache",editUrl:"https://github.com/jonbenery/weblog/blog/2023-02-25-cache/index.mdx",source:"@site/blog/2023-02-25-cache/index.mdx",title:"http\u7f13\u5b58",description:"1. \u7f13\u5b58",date:"2023-02-25T00:00:00.000Z",formattedDate:"February 25, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"\u7f51\u7edc",permalink:"/blog/tags/\u7f51\u7edc"}],readingTime:8.13,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://jonbenery.github.io",imageURL:"https://jonbenery.github.io/img/favicon.ico",key:"jonben"}],frontMatter:{slug:"http-cache",title:"http\u7f13\u5b58",authors:"jonben",tags:["javascript","\u7f51\u7edc"]},nextItem:{title:"ADM,CMD\u89c4\u8303",permalink:"/blog/module"}},m={authorsImageUrls:[void 0]},c=[{value:"1. \u7f13\u5b58",id:"1-\u7f13\u5b58",level:2},{value:"2. HTTP\u7f13\u5b58\u7b56\u7565",id:"2-http\u7f13\u5b58\u7b56\u7565",level:2},{value:"2.1 Expires \u548c max-age",id:"21-expires-\u548c-max-age",level:3},{value:"2.2 Etag \u548c If-none-match",id:"22-etag-\u548c-if-none-match",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:2}],s={toc:c};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u7f13\u5b58"},"1. \u7f13\u5b58"),(0,r.kt)("p",null,"\u5408\u7406\u5229\u7528\u7f13\u5b58\u662fWeb\u6027\u80fd\u4f18\u5316\u7684\u5fc5\u8981\u624b\u6bb5\uff0c\u524d\u7aef\u5de5\u7a0b\u5e08\u6240\u63a5\u89e6\u7684\u4e3b\u8981\u662f\u9488\u5bf9\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u7b56\u7565\uff0c\u5ba2\u6237\u7aef\u7684\u7f13\u5b58\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u672c\u5730\u5b58\u50a8\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"LocalStorage"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"SessionStorage"),"\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528",(0,r.kt)("strong",{parentName:"li"},"HTTP\u7f13\u5b58\u7b56\u7565"),"\uff0c\u5176\u4e2d\u53c8\u5206\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236\u7f13\u5b58"),"\u4e0e",(0,r.kt)("strong",{parentName:"li"},"\u534f\u5546\u7f13\u5b58"),"\u3002")),(0,r.kt)("p",null,"\u5176\u4e2d\u5bf9\u4e8e\u672c\u5730\u5b58\u50a8\u7684\u5229\u7528\u5c5e\u4e8e\u4ee3\u7801\u67b6\u6784\u5c42\u9762\u7684\u4f18\u5316\u63aa\u65bd\uff0c\u4e0d\u5c5e\u4e8e\u524d\u7aef\u5de5\u7a0b\u4f53\u7cfb\u7684\u670d\u52a1\u8303\u7574\u3002HTTP\u7f13\u5b58\u9700\u8981\u670d\u52a1\u5668\u914d\u5408\uff0c\u6bd4\u5982Apache\u3001Ngnix\u7b49\u670d\u52a1\u5668\u8f6f\u4ef6\u53ef\u4ee5\u4e3a\u8d44\u6e90\u8bbe\u7f6e\u4e0d\u540c\u7684HTTP\u7f13\u5b58\u7b56\u7565\u3002\u589e\u91cf\u66f4\u65b0\u662f\u76ee\u524d\u5927\u90e8\u5206\u56e2\u961f\u91c7\u7528\u7684\u7f13\u5b58\u66f4\u65b0\u65b9\u6848\uff0c\u7ed3\u5408HTTP\u5f3a\u5236\u7f13\u5b58\u7b56\u7565\uff0c\u65e2\u80fd\u591f\u4fdd\u8bc1\u7528\u6237\u5728\u7b2c\u4e00\u65f6\u95f4\u83b7\u53d6\u6700\u65b0\u8d44\u6e90\uff0c\u53c8\u53ef\u4ee5\u51cf\u5c11\u7f51\u7edc\u8d44\u6e90\u6d88\u8017\uff0c\u63d0\u9ad8Web\u5e94\u7528\u7a0b\u5e8f\u7684\u6267\u884c\u901f\u5ea6\u3002"),(0,r.kt)("h2",{id:"2-http\u7f13\u5b58\u7b56\u7565"},"2. HTTP\u7f13\u5b58\u7b56\u7565"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u5bf9\u9759\u6001\u8d44\u6e90\u7684\u7f13\u5b58\u672c\u8d28\u4e0a\u662fHTTP\u534f\u8bae\u7684\u7f13\u5b58\u7b56\u7565\uff0c\u5176\u4e2d\u53c8\u53ef\u4ee5\u5206\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u5236\u7f13\u5b58"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u534f\u5546\u7f13\u5b58"),"\u3002\u4e24\u79cd\u7f13\u5b58\u7b56\u7565\u90fd\u4f1a\u5c06\u8d44\u6e90\u7f13\u5b58\u5230\u672c\u5730\u3002\u5177\u4f53\u91c7\u7528\u54ea\u79cd\u7f13\u5b58\u7b56\u7565\uff0c\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP\u534f\u8bae"),"\u7684\u9996\u90e8",(0,r.kt)("inlineCode",{parentName:"p"},"Headers"),"\u4fe1\u606f\u51b3\u5b9a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236\u7f13\u5b58\u7b56\u7565"),"\u6839\u636e\u8fc7\u671f\u65f6\u95f4\u51b3\u5b9a\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u8fd8\u662f\u8bf7\u6c42\u65b0\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u534f\u5546\u7f13\u5b58"),"\u6bcf\u6b21\u90fd\u4f1a\u53d1\u51fa\u8bf7\u6c42\uff0c\u7ecf\u8fc7\u670d\u52a1\u5668\u8fdb\u884c\u5bf9\u6bd4\u540e\u51b3\u5b9a\u91c7\u7528\u672c\u5730\u7f13\u5b58\u8fd8\u662f\u65b0\u8d44\u6e90\u3002")),(0,r.kt)("h3",{id:"21-expires-\u548c-max-age"},"2.1 Expires \u548c max-age"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"max-age"),"\u662f\u5f3a\u5236\u7f13\u5b58\u7b56\u7565\u7684\u5173\u952e\u4fe1\u606f\uff0c\u4e24\u8005\u5747\u662f\u54cd\u5e94\u9996\u90e8\u4fe1\u606f\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u662f",(0,r.kt)("strong",{parentName:"p"},"HTTP 1.0"),"\u52a0\u5165\u7684\u7279\u6027\uff0c\u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u660e\u786e\u7684\u65f6\u95f4\u70b9\u4f5c\u4e3a\u7f13\u5b58\u8d44\u6e90\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5728\u6b64\u65f6\u95f4\u70b9\u4e4b\u524d\u5ba2\u6237\u7aef\u5c06\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u7684\u6587\u4ef6\u5e94\u7b54\u8bf7\u6c42\uff0c\u800c\u4e0d\u4f1a\u5411\u670d\u52a1\u5668\u53d1\u51fa\u5b9e\u4f53\u8bf7\u6c42\uff08\u5728\u6d4f\u89c8\u5668\u8c03\u8bd5\u9762\u677f\u4e2d\u53ef\u4ee5\u770b\u5230\u6b64\u8bf7\u6c42\u5e76\u4e14\u72b6\u6001\u7801\u4e3a200\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u7684\u4f18\u70b9\uff1a"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u5185\u51cf\u5c11\u5ba2\u6237\u7aef\u7684HTTP\u8bf7\u6c42\uff0c\u4e0d\u4ec5\u8282\u7701\u4e86\u5ba2\u6237\u7aef\u5904\u7406\u65f6\u95f4\u548c\u63d0\u9ad8\u4e86Web\u5e94\u7528\u7684\u6267\u884c\u901f\u5ea6\uff0c\u800c\u4e14\u4e5f\u51cf\u5c11\u4e86\u670d\u52a1\u5668\u8d1f\u8f7d\u4ee5\u53ca\u5ba2\u6237\u7aef\u7f51\u7edc\u8d44\u6e90\u7684\u6d88\u8017\u3002\u4e00\u4e2a\u5178\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u9996\u90e8\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Expoores:Web, 23 Aug 2017 14:00:00 FMT\n")),(0,r.kt)("p",null,"\u8be5\u4fe1\u606f\u6307\u5b9a\u5bf9\u5e94\u8d44\u6e90\u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u4e3a2017\u5e748\u670823\u65e514\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u6709\u4e00\u4e2a\u81f4\u547d\u7684\u7f3a\u9677\u662f\uff1a"),(0,r.kt)("p",null,"\u5b83\u6240\u6307\u5b9a\u7684\u65f6\u95f4\u70b9\u662f\u4ee5\u670d\u52a1\u5668\u4e3a\u51c6\u7684\u65f6\u95f4\uff0c\u4f46\u662f\u5ba2\u6237\u7aef\u8fdb\u884c\u8fc7\u671f\u5224\u65ad\u65f6\u662f\u5c06\u672c\u5730\u7684\u65f6\u95f4\u4e0e\u6b64\u65f6\u95f4\u70b9\u5bf9\u6bd4\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u7684\u65f6\u95f4\u4e0e\u670d\u52a1\u5668\u5b58\u5728\u8bef\u5dee\uff0c\u6bd4\u5982\u670d\u52a1\u5668\u7684\u65f6\u95f4\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"2017\u5e748\u670823\u65e513\u70b9"),"\uff0c\u800c\u5ba2\u6237\u7aef\u7684\u65f6\u95f4\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"2017\u5e748\u670823\u65e515\u70b9"),"\uff0c\u90a3\u4e48\u901a\u8fc7\u4e0a\u8ff0Expires\u63a7\u5236\u7684\u7f13\u5b58\u8d44\u6e90\u5c06\u4f1a\u5931\u6548\uff0c\u5ba2\u6237\u7aef\u5c06\u4f1a\u53d1\u9001\u5b9e\u4f53\u8bf7\u6c42\u83b7\u53d6\u5bf9\u5e94\u8d44\u6e90\u3002\u8fd9\u663e\u7136\u662f\u4e0d\u5408\u7406\u7684\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c",(0,r.kt)("strong",{parentName:"p"},"HTTP 1.1"),"\u65b0\u589e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-control"),"\u9996\u90e8\u4fe1\u606f\u4ee5\u4fbf\u66f4\u7cbe\u51c6\u5730\u63a7\u5236\u7f13\u5b58\u3002"),(0,r.kt)("p",null,"\u5e38\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-control"),"\u4fe1\u606f\u6709\u4ee5\u4e0b\u51e0\u79cd:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"no-cache"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"no-store"),"\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"no-cache"),"\u5e76\u975e\u7981\u6b62\u7f13\u5b58\uff0c\u800c\u662f\u9700\u8981\u5148\u4e0e\u670d\u52a1\u5668\u786e\u8ba4\u8fd4\u56de\u7684\u54cd\u5e94\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5982\u679c\u8d44\u6e90\u672a\u53d1\u751f\u53d8\u5316\uff0c\u5219\u53ef\u4f7f\u7528\u7f13\u5b58\u526f\u672c\u4ece\u800c\u907f\u514d\u4e0b\u8f7d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"no-store"),"\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u7981\u6b62\u7f13\u5b58\uff0c\u7981\u6b62\u6d4f\u89c8\u5668\u4ee5\u53ca\u6240\u6709\u4e2d\u95f4\u7f13\u5b58\u5b58\u50a8\u4efb\u4f55\u7248\u672c\u7684\u8fd4\u56de\u54cd\u5e94\u3002\u6bcf\u6b21\u7528\u6237\u90fd\u4f1a\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u4e0b\u8f7d\u5b8c\u6574\u7684\u54cd\u5e94\u3002"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"public"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"private"),"\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public"),"\u8868\u793a\u6b64\u54cd\u5e94\u53ef\u4ee5\u88ab\u6d4f\u89c8\u5668\u4ee5\u53ca\u4e2d\u95f4\u7f13\u5b58\u5668\u65e0\u9650\u671f\u7f13\u5b58\uff0c\u6b64\u4fe1\u606f\u5e76\u4e0d\u5e38\u7528\uff0c\u5e38\u89c4\u65b9\u6848\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"max-age"),"\u6307\u5b9a\u7cbe\u786e\u7684\u7f13\u5b58\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"private"),"\u8868\u793a\u6b64\u54cd\u5e94\u53ef\u4ee5\u88ab\u7528\u6237\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u4f46\u662f\u4e0d\u5141\u8bb8\u4efb\u4f55\u4e2d\u95f4\u7f13\u5b58\u5668\u5bf9\u5176\u8fdb\u884c\u7f13\u5b58\u3002\u4f8b\u5982\uff0c\u7528\u6237\u7684\u6d4f\u89c8\u5668\u53ef\u4ee5\u7f13\u5b58\u5305\u542b\u7528\u6237\u79c1\u4eba\u4fe1\u606f\u7684HTML\u7f51\u9875\uff0c\u4f46CDN\u5374\u4e0d\u80fd\u7f13\u5b58\u3002")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max-age"),"\uff1a\n\u6307\u5b9a\u4ece\u8bf7\u6c42\u7684\u65f6\u523b\u5f00\u59cb\u8ba1\u7b97\uff0c\u6b64\u54cd\u5e94\u7684\u7f13\u5b58\u526f\u672c\u6709\u6548\u7684\u6700\u957f\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"max-age=3600"),"\u8868\u793a\u6d4f\u89c8\u5668\u5728\u63a5\u4e0b\u6765\u76841\u5c0f\u65f6\u5185\u4f7f\u7528\u6b64\u54cd\u5e94\u7684\u672c\u5730\u7f13\u5b58\uff0c\u4e0d\u4f1a\u53d1\u9001\u5b9e\u4f53\u8bf7\u6c42\u5230\u670d\u52a1\u5668\u3002\n",(0,r.kt)("inlineCode",{parentName:"li"},"max-age"),"\u6307\u5b9a\u7684\u662f",(0,r.kt)("strong",{parentName:"li"},"\u7f13\u5b58\u7684\u65f6\u95f4\u8de8\u5ea6\uff0c\u800c\u975e\u7f13\u5b58\u5931\u6548\u7684\u65f6\u95f4\u70b9"),"\uff0c\u4e0d\u4f1a\u53d7\u5230\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u65f6\u95f4\u8bef\u5dee\u7684\u5f71\u54cd\u3002\u6240\u4ee5\uff0c\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"Expires"),"\u76f8\u6bd4\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"max-age"),"\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u63a7\u5236\u7f13\u5b58\uff0c\u5e76\u4e14\u6bd4",(0,r.kt)("inlineCode",{parentName:"li"},"Expires"),(0,r.kt)("strong",{parentName:"li"},"\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7"),"\u3002")),(0,r.kt)("p",null,"\u5f3a\u5236\u7f13\u5b58\u7b56\u7565\u4e0b\uff08Cache-control\u672a\u6307\u5b9ano-cache\u548cno-store\uff09\u7684\u7f13\u5b58\u5224\u65ad\u6d41\u7a0b\u5982\u56fe\u6240\u793a:"),(0,r.kt)(i.z,{src:n(7028),mdxType:"RenderImg"}),(0,r.kt)("h3",{id:"22-etag-\u548c-if-none-match"},"2.2 Etag \u548c If-none-match"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Fri, 30 Oct 1998 13:19:41 GMT\nServer: Apache/1.3.3 (Unix)\nCache-Control: max-age=3600, must-revalidate\nExpires: Fri, 30 Oct 1998 14:19:41 GMT\nLast-Modified: Mon, 29 Jun 1998 02:28:12 GMT\nETag: "3e86-410-3596fbbc"\nContent-Length: 1040\nContent-Type: text/html\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"\u662f",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u4e3a\u8d44\u6e90\u5206\u914d\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u7684\u552f\u4e00\u6027\u6807\u8bc6"),"\uff0c\u4f5c\u4e3a\u54cd\u5e94\u9996\u90e8\u4fe1\u606f\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u3002\u6d4f\u89c8\u5668\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-control"),"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"no-cache"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"max-age"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u5747\u8fc7\u671f\u4e4b\u540e\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"\u503c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"If-none-match"),"\u4f5c\u4e3a\u8bf7\u6c42\u9996\u90e8\u4fe1\u606f\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u3002\u670d\u52a1\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u4e4b\u540e\uff0c\u5bf9\u6bd4\u6240\u8bf7\u6c42\u8d44\u6e90\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"\u503c\u662f\u5426\u6539\u53d8\uff0c\u5982\u679c\u672a\u6539\u53d8\u5c06\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"304 Not Modified"),"\uff0c\u5e76\u4e14\u6839\u636e\u65e2\u5b9a\u7684\u7f13\u5b58\u7b56\u7565\u5206\u914d\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-control"),"\u4fe1\u606f\uff1b\u5982\u679c\u8d44\u6e90\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u5219\u4f1a\u8fd4\u56de\u6700\u65b0\u7684\u8d44\u6e90\u4ee5\u53ca\u91cd\u65b0\u5206\u914d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"\u503c\u3002\u6574\u4f53\u6d41\u7a0b\u5982\u56fe\u6240\u793a:"),(0,r.kt)(i.z,{src:n(253),mdxType:"RenderImg"}),(0,r.kt)("p",null,"\u5982\u679c\u5f3a\u5236\u6d4f\u89c8\u5668\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u534f\u5546\u7f13\u5b58\u7b56\u7565"),"\uff0c\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-control"),"\u9996\u90e8\u4fe1\u606f\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"no-cache"),"\uff0c\u8fd9\u6837\u4fbf\u4e0d\u4f1a\u5224\u65ad",(0,r.kt)("inlineCode",{parentName:"p"},"max-age"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),"\u8fc7\u671f\u65f6\u95f4\uff0c\u4ece\u800c\u6bcf\u6b21\u8d44\u6e90\u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7\u670d\u52a1\u5668\u5bf9\u6bd4\u3002"),(0,r.kt)("h2",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u534f\u5546\u7f13\u5b58"),"\u5e76\u975e\u662f\u4e00\u79cd\u6bd4",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f3a\u5236\u7f13\u5b58"),(0,r.kt)("strong",{parentName:"p"},"\u4f4e\u7ea7"),"\u7684\u7b56\u7565\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u7684\u5e94\u7528\u573a\u666f\u6216\u8d44\u6e90\uff0c\u534f\u5546\u7f13\u5b58\u662f\u4f18\u4e8e\u5f3a\u5236\u7f13\u5b58\u7684\u3002\u6bd4\u5982\u975e\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u9879\u76ee\u4e2d\u7684HTML\u6587\u6863\uff0c\u7531\u4e8e\u5b83\u662f\u6240\u6709\u5176\u4ed6\u9759\u6001\u8d44\u6e90\u7684\u5f15\u7528\u8005\uff0c\u6240\u4ee5\u5fc5\u987b\u4fdd\u8bc1\u6bcf\u6b21\u8bf7\u6c42\u5230\u7684\u8d44\u6e90\u90fd\u662f\u6700\u65b0\u7684\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u670d\u52a1\u5668\u89e3\u6790\u548c\u4fdd\u8bc1\u7f51\u7ad9\u5730\u5740\u7684\u552f\u4e00\u6027\uff0chtml\u6587\u4ef6\u4e0d\u80fd\u5e94\u7528hash\u6307\u7eb9\u3002\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u53ea\u80fd\u4f7f\u7528\u534f\u5546\u7f13\u5b58\u3002"))}k.isMDXComponent=!0},7028:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/cache1-e67b83505063da9543786c7f503f4a64.png"},253:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/cache2-b2949f9dbdd0af740b0947f7083c7154.png"}}]);