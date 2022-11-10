"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[4913],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Ts\u7b80\u4ecb"},s=void 0,p={unversionedId:"typescript/tsconfig",id:"typescript/tsconfig",title:"Ts\u7b80\u4ecb",description:"1. Typescript\u5b9a\u4e49",source:"@site/packages/docs/typescript/tsconfig.md",sourceDirName:"typescript",slug:"/typescript/tsconfig",permalink:"/docs/typescript/tsconfig",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/typescript/tsconfig.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1668064302,formattedLastUpdatedAt:"11/10/2022",frontMatter:{title:"Ts\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/javascript/regExp"},next:{title:"\u81ea\u5b9a\u4e49\u5b88\u536b",permalink:"/docs/typescript/guard"}},l={},u=[{value:"1. Typescript\u5b9a\u4e49",id:"1-typescript\u5b9a\u4e49",level:3},{value:"2. \u4f18\u52bf:",id:"2-\u4f18\u52bf",level:3},{value:"3. \u73af\u5883\u642d\u5efa",id:"3-\u73af\u5883\u642d\u5efa",level:3},{value:"4. <code>tsconfig.json</code> \u5e38\u7528 18 \u9879\u914d\u7f6e\u9009\u9879\u8be6\u89e3",id:"4-tsconfigjson-\u5e38\u7528-18-\u9879\u914d\u7f6e\u9009\u9879\u8be6\u89e3",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-typescript\u5b9a\u4e49"},"1. Typescript\u5b9a\u4e49"),(0,a.kt)("p",null,"\u878d\u5408\u4e86\u9762\u5411\u5bf9\u8c61\u540e\u7aef\u7684\u601d\u60f3\u7684\u8d85\u7ea7\u7248\u7684 javaScript  \u8bed\u8a00\u3002"),(0,a.kt)("h3",{id:"2-\u4f18\u52bf"},"2. \u4f18\u52bf:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8bd1\u65f6\u9759\u6001\u7c7b\u578b\u68c0\u6d4b"),"\uff1a\u51fd\u6570\u6216\u65b9\u6cd5\u4f20\u53c2\u6216\u53d8\u91cf\u8d4b\u503c\u4e0d\u5339\u914d\u65f6\uff0c\u4f1a\u51fa\u73b0\u7f16\u8bd1\u9519\u8bef\u63d0\u793a \uff0c\u89c4\u907f\u4e86\u5f00\u53d1\u671f\u95f4\u7684\u5927\u91cf\u4f4e\u7ea7\u9519\u8bef\uff0c\u7701\u65f6\uff0c\u7701\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u80fd\u81ea\u52a8\u63d0\u793a"),"\uff1a\u53d8\u91cf\u7c7b\u578b\u3001\u53d8\u91cf\u5c5e\u6027\uff0c\u4e0d\u7528\u6765\u56de\u5207\u6362\u6587\u4ef6\u6216\u4e0d\u5c0f\u5fc3\u5199\u9519\u5bfc\u81f4\u7684\u7f16\u7801\u9690\u60a3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f15\u5165\u4e86\u6cdb\u578b"),"\uff1a\u8ba9\u5927\u4e2d\u9879\u76ee\uff0c\u524d\u7aef\u6846\u67b6\u5e95\u5c42\u6e90\u7801\u5177\u5907\u4e86\u9ad8\u53ef\u6269\u5c55\u6027\u8fd9\u4e2a\u5de8\u5927\u7684\u4f18\u52bf\uff0c\u540c\u65f6\u4e5f\u6709\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\u7684\u4f18\u52bf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f3a\u5927\u7684 d.ts \u58f0\u660e\u6587\u4ef6"),"\uff1a\u58f0\u660e\u6587\u4ef6\u50cf\u4e00\u4e2a\u4e66\u7684\u76ee\u5f55\u4e00\u6837\uff0c\u6e05\u6670\u76f4\u89c2\u5c55\u793a\u4e86\u4f9d\u8d56\u5e93\u6587\u4ef6\u7684\u63a5\u53e3\uff0ctype\u7c7b\u578b\uff0c\u7c7b\uff0c\u51fd\u6570\uff0c\u53d8\u91cf\u7b49\u58f0\u660e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8f7b\u677e\u7f16\u8bd1\u6210 JS \u6587\u4ef6"),"\uff1a\u5373\u4f7f TS \u6587\u4ef6\u6709\u9519\u8bef\uff0c\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e5f\u80fd\u7f16\u8bd1\u51fa JS \u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7075\u6d3b\u6027\u9ad8\uff1a")," \u5c3d\u7ba1 TS \u662f\u4e00\u95e8 \u5f3a\u7c7b\u578b\u68c0\u67e5\u8bed\u8a00\uff0c\u4f46\u4e5f\u63d0\u4f9b\u4e86 any \u7c7b\u578b \u548c as any \u65ad\u8a00\uff0c\u8fd9\u63d0\u4f9b\u4e86 TS\u7684\u7075\u6d3b\u5ea6\u3002")),(0,a.kt)("h3",{id:"3-\u73af\u5883\u642d\u5efa"},"3. \u73af\u5883\u642d\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"npm init -y \n\nyarn  add typescript -D\n\ntsc --init\n")),(0,a.kt)("h3",{id:"4-tsconfigjson-\u5e38\u7528-18-\u9879\u914d\u7f6e\u9009\u9879\u8be6\u89e3"},"4. ",(0,a.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")," \u5e38\u7528 18 \u9879\u914d\u7f6e\u9009\u9879\u8be6\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "compilerOptions": {\n    // \u6307\u5b9a TS \u7f16\u8bd1\u6210 JS \u540e\u7684js\u7248\u672c\n    "target": "es2020",\n    // TS \u7f16\u8bd1\u6210 JS \u540e\u91c7\u7528\u7684\u6a21\u5757\u89c4\u8303 commonjs amd cmd  es\u7b49  \n    "module": "commonjs", \n    // \u6307\u5b9a TS \u7f16\u7801\u671f\u95f4\u53ef\u4ee5\u4f7f\u7528\u7684\u5e93\u6587\u4ef6\u7248\u672c \u6bd4\u5982\uff1aES5\u5c31\u4e0d\u652f\u6301Set\u96c6\u5408       \n    "lib": ["DOM","ES2020"],\n    // \u6307\u5b9a TS \u6587\u4ef6\u7f16\u8bd1\u6210 JS \u540e\u7684\u8f93\u51fa\u76ee\u5f55\n    "outDir": "./dist",\n    // \u6307\u5b9a TS \u6587\u4ef6\u6e90\u7801\u76ee\u5f55\n    "rootDir": "./src",\n    // \u542f\u7528\u4e25\u683c\u68c0\u67e5\u6a21\u5f0f\n    "strict": true,\n    // null \u548c undefined\u5373\u662f\u503c\uff0c\u4e5f\u662f\u7c7b\u578b, null \u548c undefined \u503c \u53ea\u80fd\u8d4b\u503c\u7ed9 any ,unknown\u548c\u5b83\u4eec\u5404\u81ea\u7684\u7c7b\u578b\n    "strictNullChecks":false,\n    // \u4e00\u822c\u662f\u6307\u8868\u8fbe\u5f0f\u6216\u51fd\u6570\u53c2\u6570\u4e0a\u6709\u9690\u542b\u7684 any\u7c7b\u578b\u65f6\u62a5\u9519\n    "noImplicitAny": true,\n    // \u542f\u7528ES7\u88c5\u9970\u5668\u5b9e\u9a8c\u5f00\u542f\u9009\u9879\n    "experimentalDecorators": true,\n    // \u542f\u7528\u88c5\u9970\u5668\u5143\u6570\u636e\u5f00\u542f\u9009\u9879\n    "emitDecoratorMetadata": true,\n    // \u6307\u5b9a TS \u6587\u4ef6\u7f16\u8bd1\u540e\u751f\u6210\u76f8\u5e94\u7684.d.ts\u6587\u4ef6\n    "declaration": true,\n    // TS \u6587\u4ef6\u7f16\u8bd1\u540e\u5220\u9664\u6240\u6709\u7684\u6ce8\u91ca\n    "removeComments": false,\n    // \u5de5\u4f5c\u6839\u76ee\u5f55  \u89e3\u6790\u975e\u76f8\u5bf9\u6a21\u5757\u7684\u57fa\u5730\u5740\n    "baseUrl": "src",\n    "paths": {\n      "@/datatype/*": ["datatype/*"]\n    },    \n    // \u6709\u4e9b\u4f9d\u8d56\u5e93\u5e95\u5c42 \u4e3a\u4e86\u517c\u5bb9CommonJs\u89c4\u8303\u3001AMD\u89c4\u8303\u8fd9\u4e8c\u8005\u7684\u89c4\u8303\u4e2d\u76f8\u4e92\u517c\u5bb9\uff0c\u4f7f\u7528\u4e86 export =\uff0c\u5c06\u4e8c\u8005\u89c4\u8303\u7edf\u4e00\u3002\n    // "esModuleInterop":true\u8868\u793a\u5141\u8bb8\u4f9d\u8d56\u5e93\u4e2d\u51fa\u73b0export = \u8fd9\u79cd\u517c\u5bb9\u89c4\u8303\u5bfc\u51fa\u7684\u683c\u5f0f\uff0cTS \u53ef\u4ee5\u7528import from\u5bfc\u5165 \n    "esModuleInterop": true,  \n  },\n  // \u9700\u8981\u7f16\u8bd1\u7684ts\u6587\u4ef6\u4e00\u4e2a*\u8868\u793a\u6587\u4ef6\u5339\u914d**\u8868\u793a\u5ffd\u7565\u6587\u4ef6\u7684\u6df1\u5ea6\u95ee\u9898\n  "include": [ \n    // \u5339\u914dsrc\u4e0b\u6240\u6709\u7684ts\u6587\u4ef6\n    "./src/**/*.ts", \n    "src/datatype/typepsenumts"\n  ],\n  "exclude": [\n    "./src/**/test",\n    "./src/**/premit", \n  ]\n} \n')))}m.isMDXComponent=!0}}]);