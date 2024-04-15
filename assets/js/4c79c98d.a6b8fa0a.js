"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15216],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,y=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},18793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},p=void 0,s={unversionedId:"data/hooks/use-api-url/index",id:"data/hooks/use-api-url/index",title:"useApiUrl",description:"useApiUrl is a React hook that returns the API URL. It uses the getApiUrl method to get the API URL from the dataProvider.",source:"@site/docs/data/hooks/use-api-url/index.md",sourceDirName:"data/hooks/use-api-url",slug:"/data/hooks/use-api-url/",permalink:"/docs/data/hooks/use-api-url/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-api-url/index.md",tags:[],version:"current",lastUpdatedBy:"Jelf",lastUpdatedAt:1713167608,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},sidebar:"mainSidebar",previous:{title:"useDataProvider",permalink:"/docs/data/hooks/use-data-provider/"},next:{title:"Airtable",permalink:"/docs/data/packages/airtable/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3}],d=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var g;const y={toc:c},f="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useApiUrl")," is a React hook that returns the API URL. It uses the ",(0,n.yg)("inlineCode",{parentName:"p"},"getApiUrl")," method to get the API URL from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,n.yg)("p",null,"It is useful when you want to use the API URL in your custom hooks."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useApiUrl")," hook will invoke the ",(0,n.yg)("inlineCode",{parentName:"p"},"getApiUrl")," method from the current resource's ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," and return the result. If no resource can be inferred, it will return default data provider's URL."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'//highlight-next-line\nimport { useCustom, useApiUrl } from "@refinedev/core";\n\ninterface PostUniqueCheckResponse {\n  isAvailable: boolean;\n}\n\n//highlight-next-line\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n  //highlight-next-line\n  url: `${apiUrl}/posts-unique-check`,\n  method: "get",\n  config: {\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useApiUrl")," hook also accepts optional ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," parameter to explicitly get specific ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s URL regardless of current resource's ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'export const App: React.FC = () => {\n    return (\n        <Refine\n            // highlight-start\n            dataProvider={{\n                default: dataProvider("https://api.fake-rest.refine.dev/"),\n                other: dataProvider("https://other-api.fake-rest.refine.dev/"),\n            }}\n            // highlight-end\n        >\n            {/* ... */}\n        </Refine>\n    );\n};\n    ...\n</Refine>\n\n\nconst apiUrl = useApiUrl("other");\n//    ^ https://other-api.fake-rest.refine.dev/\n'))),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(d,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"API URL"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")))))))}m.isMDXComponent=!0}}]);