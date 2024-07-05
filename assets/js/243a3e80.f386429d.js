"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72877],{58860:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),y=a,g=s["".concat(c,".").concat(y)]||s[y]||u[y]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},66676:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>s});t(37953);var n=t(58860);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={id:"useDataProvider",title:"useDataProvider",source:"packages/core/src/hooks/data/useDataProvider.tsx"},c=void 0,d={unversionedId:"api-reference/core/hooks/data/useDataProvider",id:"version-3.xx.xx/api-reference/core/hooks/data/useDataProvider",title:"useDataProvider",description:"useDataProvider is a React hook that returns the dataProvider which is passed to `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDataProvider.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useDataProvider",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDataProvider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDataProvider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1720204927,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"useDataProvider",title:"useDataProvider",source:"packages/core/src/hooks/data/useDataProvider.tsx"},sidebar:"someSidebar",previous:{title:"useCustomMutation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"},next:{title:"useDelete",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3}],u=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var y;const g={toc:s},m="wrapper";function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(m,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},g,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useDataProvider")," is a React hook that returns the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," which is passed to ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,n.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,n.yg)("p",null,"It is useful when you have multiple data providers and you want to access one of them."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Let's say we have two data providers:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={{\n                default: dataProvider("API_URL"),\n                second: dataProvider("SECOND_API_URL"),\n            }}\n        />\n    );\n};\n\nexport default App;\n')),(0,n.yg)("p",null,"Now we can access the data providers with the ",(0,n.yg)("inlineCode",{parentName:"p"},"useDataProvider")," hook:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useDataProvider } from "@pankod/refine-core";\n\nconst dataProvider = useDataProvider();\n\nconst defaultDataProvider = dataProvider(); // return default data provider\nconst secondDataProvider = dataProvider("second"); // return second data provider\n'))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(u,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the data provider you want to access"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"default")))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(u,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Data Provider"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"Data Provider"))))))))}f.isMDXComponent=!0}}]);