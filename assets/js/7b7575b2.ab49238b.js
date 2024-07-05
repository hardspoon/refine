"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88440],{58860:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>m});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||a;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(37953);var t=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"breadcrumb",title:"Breadcrumb",swizzle:!0},p=void 0,s={unversionedId:"api-reference/chakra-ui/components/breadcrumb",id:"version-3.xx.xx/api-reference/chakra-ui/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Chakra UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/breadcrumb.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/breadcrumb",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/breadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1720204927,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"breadcrumb",title:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/clone-button"}},l={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],h=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},d=h("DocThumbsUpDownFeedbackWidget"),m=h("PropsTable"),b={toc:u},f="wrapper";function y(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},b,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  DashboardPage: () => <p>Dashboard Page</p>,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </RefineChakra.ChakraProvider>\n  );\n};\n\nconst PostIcon = (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    strokeWidth="2"\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n')),(0,t.yg)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Chakra UI ",(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," components using the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},(0,t.yg)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,t.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,t.yg)("strong",{parentName:"a"},"refine CLI")))),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"breadcrumbprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,t.yg)(d,{id:"breadcrumbprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Chakra UI ",(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," component so it can be configured with the ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px"},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-chakra-ui";\n\n// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          show: PostShow,\n          list: () => (\n            <RefineChakra.VStack alignItems="flex-start">\n              <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n              <ShowButton colorSheme="black" recordItemId="123">\n                Show Item 123\n              </ShowButton>\n            </RefineChakra.VStack>\n          ),\n          icon: PostIcon,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"showhome"},(0,t.yg)("inlineCode",{parentName:"h3"},"showHome")),(0,t.yg)(d,{id:"showhome",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If your application has a ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px"},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-chakra-ui";\n\n// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb showHome={false} />}\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          show: PostShow,\n          list: () => (\n            <RefineChakra.VStack>\n              <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n              <ShowButton bg="white" recordItemId="123">\n                Show Item 123\n              </ShowButton>\n            </RefineChakra.VStack>\n          ),\n          icon: PostIcon,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"hideicons"},(0,t.yg)("inlineCode",{parentName:"h3"},"hideIcons")),(0,t.yg)(d,{id:"hideicons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px"},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-chakra-ui";\n\n// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb hideIcons />}\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          show: PostShow,\n          list: () => (\n            <RefineChakra.VStack alignItems="flex-start">\n              <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n              <ShowButton colorScheme="black" recordItemId="123">\n                Show Item 123\n              </ShowButton>\n            </RefineChakra.VStack>\n          ),\n          icon: PostIcon,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(d,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(m,{module:"@pankod/refine-chakra-ui/Breadcrumb",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);