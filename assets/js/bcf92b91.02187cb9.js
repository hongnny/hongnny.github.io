"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"\u6839\u636e\u65f6\u95f4\u6233\u8ba1\u7b97\u51fa\u5177\u4f53\u65f6\u95f4"},u=void 0,l={unversionedId:"example/computedTime",id:"example/computedTime",title:"\u6839\u636e\u65f6\u95f4\u6233\u8ba1\u7b97\u51fa\u5177\u4f53\u65f6\u95f4",description:"",source:"@site/packages/utils/example/computedTime.md",sourceDirName:"example",slug:"/example/computedTime",permalink:"/utils/example/computedTime",draft:!1,editUrl:"https://github.com/trefoils/packages/utils/example/computedTime.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1656919297,formattedLastUpdatedAt:"7/4/2022",frontMatter:{title:"\u6839\u636e\u65f6\u95f4\u6233\u8ba1\u7b97\u51fa\u5177\u4f53\u65f6\u95f4"},sidebar:"docs",previous:{title:"\u9f20\u6807\u79fb\u52a8\u6a21\u62df\u6eda\u52a8\u6761\u6eda\u52a8",permalink:"/utils/example/mousemoveSimulationScroll"}},p={},m=[],s={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function computedTime(time) {\n  // \u83b7\u53d6\u8f93\u5165\u65f6\u95f4\u4e0e\u4eca\u5929\u65f6\u95f4\u6233\u7684\u5dee\u503c\n  const duration = new Date().getTime() - time\n  // \u5929\n  const d = Math.floor(duration / (24 * 60 * 60 * 1000));\n  // \u5c0f\u65f6\n  const h = Math.floor((duration % (24 * 60 * 60 * 1000)) / 3600000);\n  // \u5206\u949f\n  const m = Math.floor((duration % (60 * 60 * 1000)) / 60000);\n  // \u79d2\n  const s = Math.floor(duration % (60 * 1000) / 1000);\n\n  return `${d}\u5929${h}\u5c0f\u65f6${m}\u5206\u949f${s}\u79d2`\n}\n\n")))}f.isMDXComponent=!0}}]);