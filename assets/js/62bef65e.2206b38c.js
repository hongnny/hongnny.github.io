"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[7798],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(n),f=o,m=y["".concat(l,".").concat(f)]||y[f]||s[f]||a;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={},l=void 0,c={unversionedId:"typescript/keyof",id:"typescript/keyof",title:"keyof",description:"\u5b9a\u4e49\uff1a \u5c06\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u8054\u5408\u7c7b\u578b",source:"@site/packages/docs/typescript/keyof.md",sourceDirName:"typescript",slug:"/typescript/keyof",permalink:"/docs/typescript/keyof",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/typescript/keyof.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1668064302,formattedLastUpdatedAt:"11/10/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u62bd\u8c61\u7c7b",permalink:"/docs/typescript/abstract"},next:{title:"\u6cdb\u578b",permalink:"/docs/typescript/generics"}},u={},s=[{value:"1. keyof \u7c7b\u578b\u522b\u540d\uff0c\u63a5\u53e3\uff0c\u5bf9\u8c61",id:"1-keyof-\u7c7b\u578b\u522b\u540d\u63a5\u53e3\u5bf9\u8c61",level:2},{value:"2. keyof any",id:"2-keyof-any",level:2},{value:"3. keyof \u7d22\u5f15\u7c7b\u578b",id:"3-keyof-\u7d22\u5f15\u7c7b\u578b",level:2}],y={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9a\u4e49\uff1a \u5c06\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u8054\u5408\u7c7b\u578b"),(0,a.kt)("h2",{id:"1-keyof-\u7c7b\u578b\u522b\u540d\u63a5\u53e3\u5bf9\u8c61"},"1. keyof \u7c7b\u578b\u522b\u540d\uff0c\u63a5\u53e3\uff0c\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n  address: '\u6d66\u4e1c',\n  phone: 18\n}\ntype mytypkeyof = keyof typeof obj // 'address' | 'phone'\n")),(0,a.kt)("h2",{id:"2-keyof-any"},"2. keyof any"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"keyof any")," \u8fd4\u56de \u8054\u5408\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"string | number | symbol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type res1 = keyof any // string | number | symbol\n")),(0,a.kt)("h2",{id:"3-keyof-\u7d22\u5f15\u7c7b\u578b"},"3. keyof \u7d22\u5f15\u7c7b\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u8be5\u7c7b\u578b\u662f\u5e26\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u7d22\u5f15\u7b7e\u540d\u7684\u7c7b\u578b\uff0c\u90a3\u4e48keyof\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Map<T> {\n  [key: number]: T;\n}\ntype res1 = keyof Map<number>; // number\nlet value: Map<number>[1]; //number\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u8be5\u7c7b\u578b\u662f\u5e26\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u7d22\u5f15\u7b7e\u540d\u7684\u7c7b\u578b\uff0c\u90a3\u4e48keyof\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"string | number"),"\u8054\u5408\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Map<T> {\n  [key: string]: T;\n}\ntype res1 = keyof Map<number>; //string | number\nconst value: Map<number>['antzone'];//number\n")),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d, ",(0,a.kt)("inlineCode",{parentName:"p"},"type res1")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string | number")," \u8fd9\u662f\u56e0\u4e3a JavaScript \u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e"),"\u59cb\u7ec8\u5f3a\u5236\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u56e0\u6b64",(0,a.kt)("inlineCode",{parentName:"p"},'obj["0"]'),"\u59cb\u7ec8\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"obj[0]"),"\u7684\u7ed3\u679c\u662f\u76f8\u540c\u7684"))}f.isMDXComponent=!0}}]);