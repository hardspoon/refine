"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"useParsed"},p=void 0,l={unversionedId:"routing/hooks/use-parsed/index",id:"routing/hooks/use-parsed/index",title:"useParsed",description:"useParsed is a hook that leverages the parse method of the routerProvider to access the URL and query parameters along with the inferred resource, action and id from the URL.",source:"@site/docs/routing/hooks/use-parsed/index.md",sourceDirName:"routing/hooks/use-parsed",slug:"/routing/hooks/use-parsed/",permalink:"/docs/routing/hooks/use-parsed/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-parsed/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1705066757,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{title:"useParsed"},sidebar:"mainSidebar",previous:{title:"useBack",permalink:"/docs/routing/hooks/use-back/"},next:{title:"useLink",permalink:"/docs/routing/hooks/use-link/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Values",id:"return-values",level:2},{value:"resource",id:"resource",level:3},{value:"action",id:"action",level:3},{value:"id",id:"id",level:3},{value:"pathname",id:"pathname",level:3},{value:"params.filters",id:"paramsfilters",level:3},{value:"params.sorters",id:"paramssorters",level:3},{value:"params.current",id:"paramscurrent",level:3},{value:"params.pageSize",id:"paramspagesize",level:3},{value:"params",id:"params",level:3}],d={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useParsed")," is a hook that leverages the ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to access the URL and query parameters along with the inferred ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," from the URL."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\ntype MyParams = {\n  someParam: string;\n};\n\nconst MyComponent = () => {\n  const {\n    resource,\n    action,\n    id,\n    pathname,\n    params: {\n      filters,\n      sorters,\n      current,\n      pageSize,\n      ...restParams // TParams - Any other parameters are also parsed and available in `params`\n    },\n  } = useParsed<MyParams>();\n\n  /* ... */\n};\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("h3",{id:"resource"},"resource"),(0,n.kt)("p",null,"This is the active resource that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"action"},"action"),(0,n.kt)("p",null,"This is the active action that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,"This is the main parameter used by the Refine in API interactions. It will also be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object but it is also available as a separate value for convenience. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter in the URL."),(0,n.kt)("h3",{id:"pathname"},"pathname"),(0,n.kt)("p",null,"This is the current pathname of the URL."),(0,n.kt)("h3",{id:"paramsfilters"},"params.filters"),(0,n.kt)("p",null,"This is the filters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"filters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramssorters"},"params.sorters"),(0,n.kt)("p",null,"This is the sorters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"sorters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramscurrent"},"params.current"),(0,n.kt)("p",null,"This is the current page that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"current")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramspagesize"},"params.pageSize"),(0,n.kt)("p",null,"This is the page size that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"pageSize")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"params"},"params"),(0,n.kt)("p",null,"This is the object that contains all the parameters that are parsed from the URL. It will be an empty object if there is no parameter in the URL. ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object contains both the URL parameters and the query parameters."))}m.isMDXComponent=!0}}]);