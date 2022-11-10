"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[5975],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),a=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=a(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=a(t),v=o,f=p["".concat(i,".").concat(v)]||p[v]||m[v]||l;return t?r.createElement(f,u(u({ref:n},s),{},{components:t})):r.createElement(f,u({ref:n},s))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,u=new Array(l);u[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var a=2;a<l;a++)u[a]=t[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3480:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return m}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),u=["components"],c={title:"\u9f20\u6807\u7684\u62d6\u62fd\u6a21\u62df\u6eda\u52a8\u6761\u6eda\u52a8"},i=void 0,a={unversionedId:"mousemoveSimulationScroll",id:"mousemoveSimulationScroll",title:"\u9f20\u6807\u7684\u62d6\u62fd\u6a21\u62df\u6eda\u52a8\u6761\u6eda\u52a8",description:"\u76ee\u6807",source:"@site/packages/web/mousemoveSimulationScroll.md",sourceDirName:".",slug:"/mousemoveSimulationScroll",permalink:"/web/mousemoveSimulationScroll",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/web/mousemoveSimulationScroll.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1668064302,formattedLastUpdatedAt:"11/10/2022",frontMatter:{title:"\u9f20\u6807\u7684\u62d6\u62fd\u6a21\u62df\u6eda\u52a8\u6761\u6eda\u52a8"},sidebar:"docs",previous:{title:"\u4e24\u4e2a\u5217\u8868\u533a\u57df\u540c\u6b65\u6eda\u52a8",permalink:"/web/syncScrolling"},next:{title:"content.visibility",permalink:"/web/content.visibility"}},s={},m=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3}],p={toc:m};function v(e){var n=e.components,t=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("p",null,"\u5f53\u9875\u9762\u51fa\u73b0\u6a2a\u5411\u6eda\u52a8\u6761\u7684\u65f6\u5019\uff0c\u60f3\u8981\u5de6\u53f3\u6eda\u52a8\u53ea\u80fd\u901a\u8fc7\u62d6\u52a8\u6eda\u52a8\u6761\u7684\u65b9\u5f0f\uff0c\u4e0d\u65b9\u4fbf\u7528\u6237\u64cd\u4f5c\uff0c\u8981\u5b9e\u73b0\u7684\u662f\u901a\u8fc7\u9f20\u6807\u7684\u62d6\u52a8\u5b9e\u73b0\u9875\u9762\u7684\u6a2a\u5411\u6eda\u52a8"),(0,l.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"\u901a\u8fc7\u8bb0\u5f55\u9f20\u6807\u6309\u4e0b\u548c\u79fb\u52a8\u7684\u8ddd\u79bb\u8bbe\u7f6e\u6eda\u52a8\u6761\u7684\u6eda\u52a8\u8ddd\u79bb"),(0,l.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e26\u963b\u5c3c\u611f\u7684\u62d6\u52a8\uff0c\u66f4\u597d\u7684\u6a21\u62df\u539f\u751f\u6eda\u52a8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function mouseMoveSimulationScroll(el) {\n  if (!el) return\n  let startScroll = 0;\n  let startX = 0;\n  let previousX = 0; // \u4fdd\u5b58\u4e0a\u4e00\u6b21\u7684clientX\u5750\u6807\n  let currentX = 0; // \u83b7\u53d6\u6bcf\u6b21\u79fb\u52a8\u7684\u4f4d\u7f6e\n  let velocity = 0; // \u63a7\u5236\u901f\u5ea6\n  let direction = 0; // \u63a7\u5236\u5de6\u53f3\u6ed1\u52a8\n  let momentum = 0.875; // \u63a7\u5236\u6ed1\u52a8\u8ddd\u79bb\n  let momentumInterval = null;\n  let velocityInterval = null;\n  el.onmousedown = function (event) {\n    startScroll = el.scrollLeft;\n    startX = event.clientX;\n    previousX = startX;\n    currentX = startX;\n    clearInterval(velocityInterval);\n    velocityInterval = setInterval(function () {\n      // previousX\u4fdd\u5b58\u4e0a\u4e00\u6b21\u79fb\u52a8\u9f20\u6807\u7684clientX\u503c\n      // \u6162\u901f\u79fb\u52a8\u65f6currentX\u4e0epreviousX\u6570\u503c\u76f8\u540c\u6216\u8005\u5dee\u503c\u8f83\u5c0f\uff08\u6162\u901f\u79fb\u52a8\u9f20\u6807\u4e00\u76f4\u5728\u4e00\u4e2a\u70b9\u4e0a\uff09\n      // \u5feb\u901f\u6ed1\u52a8\u65f6\u9f20\u6807\u5de6\u6ed1previousX\u5927\u4e8ecurrentX\uff0c\u53f3\u6ed1currentX\u5927\u4e8epreviousX\n      // \u539f\u7406\uff1a\u5f53\u5feb\u901f\u79fb\u52a8\u65f6\uff0c\u677e\u5f00\u9f20\u6807\u7684\u65f6\u5019\u5df2\u7ecf\u4e0d\u5728\u5f53\u65f6\u70b9\u51fb\u7684\u70b9\u4f4d\u4e0a\uff0c50\u6beb\u79d2\u540e\u5c31\u51fa\u73b0\u4e862\u4e2a\u53d8\u91cf\u7684\u6570\u503c\u5dee\n      // \u539f\u56e0\uff1a\u9f20\u6807\u79fb\u52a8\u65f6\uff0c\u4e0d\u4f1a\u5b58\u50a8\u6240\u6709\u7684\u79fb\u52a8\u4fe1\u606f\u3002\u5c24\u5176\u662f\u5728\u5feb\u901f\u79fb\u52a8\u9f20\u6807\u65f6\n      velocity = Math.abs(currentX - previousX);\n      // \u6b63\u8d1f\u6570\u8f6c\u6362\u7528\u4e8e\u63a7\u5236\u5de6\u53f3\u6ed1\u52a8\n      // \u5de6\u6ed1\u52a8\u4e3a\u6b63\u6570\uff0c\u53f3\u6ed1\u52a8\u4e3a\u8d1f\u6570\n      direction = currentX > previousX ? -1 : 1;\n\n      previousX = currentX;\n    }, 50);\n    el.onmousemove = function(event) {\n      currentX = event.clientX;\n      el.scrollLeft = startScroll + (startX - currentX);\n    }\n    el.onmouseleave = function () {\n      el.onmousemove = null\n    };\n    el.onmouseup = function () {\n      let num = 0;\n      clearInterval(velocityInterval);\n      clearInterval(momentumInterval);\n      num = velocity;\n      // \u9f20\u6807\u677e\u5f00\u540e\u5f00\u59cb\u6267\u884c\u6ed1\u52a8\n      momentumInterval = setInterval(function () {\n        // \u6ed1\u52a8\u8ddd\u79bb\u4f9d\u6b21\u51cf\u5c0f\n        el.scrollLeft = el.scrollLeft + num * direction;\n        // \u6570\u503c\u4f9d\u6b21\u51cf\u5c0f\n        num *= momentum;\n        // \u5c0f\u4e8e1\u9500\u6bc1\u5b9a\u65f6\u5668\uff0c\u6ed1\u52a8\u7ed3\u675f\n        if (Math.abs(num) < 1) {\n          clearInterval(momentumInterval);\n        }\n      }, 15);\n      el.onmousemove = null\n      el.onmouseleave = null\n      el.onmouseup = null\n    };\n  };\n\n}\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec5\u4ec5\u662f\u62d6\u52a8\uff0c\u7b80\u5355\u7684\u5b9e\u73b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function handlemousedownControlScroll(evt, el) {\n  const scrollLeft = el.scrollLeft\n  const startPos = evt.clientX\n  document.onmouseup = function() {\n    document.onmousemove = null\n  }\n  document.onmouseleave = function() {\n    document.onmousemove = null\n  }\n  if (evt.which === 3) {\n    document.onmousemove = function(e) {\n      el.scrollLeft = scrollLeft + (startPos - e.clientX)\n    }\n  }\n}\n\n")))}v.isMDXComponent=!0}}]);