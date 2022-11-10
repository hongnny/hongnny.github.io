"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[8580],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},147:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={title:"class \u7c7b"},l=void 0,c={unversionedId:"typescript/class",id:"typescript/class",title:"class \u7c7b",description:"1. \u4ec0\u4e48\u662f\u7c7b",source:"@site/packages/docs/typescript/class.md",sourceDirName:"typescript",slug:"/typescript/class",permalink:"/docs/typescript/class",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/typescript/class.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1668064302,formattedLastUpdatedAt:"11/10/2022",frontMatter:{title:"class \u7c7b"},sidebar:"docs",previous:{title:"\u5185\u7f6e\u7c7b\u578b",permalink:"/docs/typescript/utilTypes"},next:{title:"require.context",permalink:"/docs/webpack/require.context"}},p={},u=[{value:"1. \u4ec0\u4e48\u662f\u7c7b",id:"1-\u4ec0\u4e48\u662f\u7c7b",level:3},{value:"2. \u7c7b\u5b9a\u4e49\u5c5e\u6027\u7684\u65b9\u5f0f",id:"2-\u7c7b\u5b9a\u4e49\u5c5e\u6027\u7684\u65b9\u5f0f",level:3},{value:"3. \u7c7b\u7f16\u8bd1\u540e\u7684\u6e90\u7801",id:"3-\u7c7b\u7f16\u8bd1\u540e\u7684\u6e90\u7801",level:3},{value:"4. \u7c7b\u7684\u7ee7\u627f",id:"4-\u7c7b\u7684\u7ee7\u627f",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u4ec0\u4e48\u662f\u7c7b"},"1. \u4ec0\u4e48\u662f\u7c7b"),(0,o.kt)("p",null,"\u7c7b\u5c31\u662f\u62e5\u6709\u76f8\u540c\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u4e00\u7cfb\u5217\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u7c7b\u662f\u4e00\u4e2a\u6a21\u7248\uff0c\u662f\u4ece\u8fd9\u8be5\u7c7b\u5305\u542b\u7684\u6240\u6709\u5177\u4f53\u5bf9\u8c61\u4e2d\u62bd\u8c61\u51fa\u6765\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u7c7b\u5b9a\u4e49\u4e86\u5b83\u6240\u5305\u542b\u7684\u5168\u4f53\u5bf9\u8c61\u7684\u9759\u6001\u7279\u5f81\u548c\u52a8\u6001\u7279\u5f81"),(0,o.kt)("h3",{id:"2-\u7c7b\u5b9a\u4e49\u5c5e\u6027\u7684\u65b9\u5f0f"},"2. \u7c7b\u5b9a\u4e49\u5c5e\u6027\u7684\u65b9\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5148\u5728\u7c7b\u4e2d\u5b9a\u4e49\u5c5e\u6027\u7136\u540e\u5728\u6784\u9020\u51fd\u6570\u4e2d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"li"},"this"),"\u8d4b\u503c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  name: string\n  constructor(name: string) {\n    this.name = name\n  }\n  say() {}\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u76f4\u63a5\u4e3a\u53c2\u6570\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"public"),"\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  constructor(public name: string) {\n    this.name = name\n  }\n  say() {}\n}\n")),(0,o.kt)("h3",{id:"3-\u7c7b\u7f16\u8bd1\u540e\u7684\u6e90\u7801"},"3. \u7c7b\u7f16\u8bd1\u540e\u7684\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var Person = /** @class */ (function () {\n    function Person(name_) {\n        this.name = name_\n    }\n    Person.prototype.say = function () {\n    };\n    return Person;\n  }());\n")),(0,o.kt)("h3",{id:"4-\u7c7b\u7684\u7ee7\u627f"},"4. \u7c7b\u7684\u7ee7\u627f"),(0,o.kt)("p",null,"ts\u7c7b\u7684\u7ee7\u627f\u5176\u5b9e\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u539f\u578b\u94fe"),"\u4e4b\u95f4\u7ee7\u627f\u7684\u5b9e\u73b0\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u5f7b\u5e95\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"ts\u7c7b\u7684\u7ee7\u627f"),"\u5c31\u9700\u8981\u5148\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"\u539f\u578b\u94fe\u7684\u7ee7\u627f")),(0,o.kt)("p",null,"\u73b0\u5728\u6709\u4e24\u4e2a\u7c7b",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Student"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Student"),"\u7ee7\u627f\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Person")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  name: string\n  constructor(name: string) {\n    this.name = name\n  }\n  say() {}\n}\n\nclass Student extends Person {\n  school: string\n  constructor(name: string, school: string) {\n    super(name)\n    this.school = school\n  }\n}\n\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u540e\u7684\u6e90\u7801\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var Person = /** @class */ (function () {\n    function Person(name) {\n      this.name = name;\n    }\n    Person.prototype.say = function () { };\n    return Person;\n}());\nvar Student = /** @class */ (function (_super) {\n    // \u4f7f\u7528__extend\u51fd\u6570\u5b9e\u73b0\u9759\u6001\u65b9\u6cd5\u548c\u5c5e\u6027\u5b8c\u6210\u539f\u578b\u94fe\u4e4b\u95f4\u7684\u7ee7\u627f\n    __extends(Student, _super);\n    function Student(name, school) {\n        var _this = _super.call(this, name) || this;\n        _this.school = school;\n        return _this;\n    }\n    return Student;\n}(Person));\n\n")),(0,o.kt)("p",null,"\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"__extend"),"\u51fd\u6570\u7684\u5b9e\u73b0\u5373\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"\u539f\u578b\u94fe"),"\u7ee7\u627f\u7684\u5b9e\u73b0\uff0c\u53ef\u79fb\u6b65\u81f3",(0,o.kt)("a",{parentName:"p",href:"../javascript/extends"},(0,o.kt)("inlineCode",{parentName:"a"},"javascript | extends\u51fd\u6570\u7684\u5b9e\u73b0"))))}d.isMDXComponent=!0}}]);