"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10117],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(t),m=o,h=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>l});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Breadcrumb",swizzle:!0},p=void 0,c={unversionedId:"ui-integrations/ant-design/components/breadcrumb/index",id:"ui-integrations/ant-design/components/breadcrumb/index",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. The ` component was built with Ant Design's Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/ui-integrations/ant-design/components/breadcrumb/index.md",sourceDirName:"ui-integrations/ant-design/components/breadcrumb",slug:"/ui-integrations/ant-design/components/breadcrumb/",permalink:"/docs/ui-integrations/ant-design/components/breadcrumb/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/breadcrumb/index.md",tags:[],version:"current",lastUpdatedBy:"Jelf",lastUpdatedAt:1713167608,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Breadcrumb",swizzle:!0},sidebar:"mainSidebar",previous:{title:"<AuthPage />",permalink:"/docs/ui-integrations/ant-design/components/auth-page/"},next:{title:"<FilterDropdown />",permalink:"/docs/ui-integrations/ant-design/components/filter-dropdown/"}},d={},l=[{value:"breadcrumbProps",id:"breadcrumbprops",level:3},{value:"showHome",id:"showhome",level:3},{value:"meta",id:"meta",level:3},{value:"hideIcons",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),h=u("PropsTable"),g={toc:l},b="wrapper";function y(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(b,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. The ",(0,r.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component was built with Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," components using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-breadcrumb"},(0,r.yg)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { BrowserRouter } from "react-router-dom";\nimport {\n  ConfigProvider,\n  RefineThemes,\n  Show,\n  // highlight-next-line\n  Breadcrumb,\n} from "@refinedev/antd";\n\n//highlight-start\nconst PostIcon = (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    strokeWidth="2"\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n//highlight-end\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb />}\n    >\n      <p>Content of your show page...</p>\n    </Show>\n  );\n};\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          //...\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n              show: "/posts/show/:id",\n              // highlight-next-line\n              meta: { icon: PostIcon },\n            },\n          ]}\n        >\n          //...\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\n\nconst PostList = () => {\n  return (\n    <RefineAntd.List>\n      <p>Content of your list page...</p>\n    </RefineAntd.List>\n  );\n};\n\nsetInitialRoutes(["/posts/show/123"]);\n\nrender(\n  <ReactRouterDom.BrowserRouter>\n    <RefineCore.Refine\n      dataProvider={RefineSimpleRest.default(\n        "https://api.fake-rest.refine.dev",\n      )}\n      routerProvider={RefineReactRouterV6.default}\n      resources={[\n        {\n          name: "posts",\n          meta: { icon: PostIcon },\n          show: "/posts/show/:id",\n          list: "/posts",\n        },\n      ]}\n    >\n      <RefineAntd.Layout>\n        <ReactRouterDom.Routes>\n          <ReactRouterDom.Route path="/posts" element={<PostList />} />\n          <ReactRouterDom.Route path="/posts/show/:id" element={<PostShow />} />\n        </ReactRouterDom.Routes>\n      </RefineAntd.Layout>\n    </RefineCore.Refine>\n  </ReactRouterDom.BrowserRouter>,\n);\n')),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the earlier versions of Refine, ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,r.yg)("inlineCode",{parentName:"p"},"DashboardPage"),", which could be used to add an index page to your app. With the changes in the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," API of Refine however, ",(0,r.yg)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In earlier versions, the home icon in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,r.yg)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,r.yg)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),".")))),(0,r.yg)("h3",{id:"breadcrumbprops"},"breadcrumbProps"),(0,r.yg)(m,{id:"breadcrumbprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," component so it can be configured with the ",(0,r.yg)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,r.yg)("h3",{id:"showhome"},"showHome"),(0,r.yg)(m,{id:"showhome",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you have a page with route ",(0,r.yg)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,r.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb showHome={true} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, the existing URL parameters are used. You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,r.yg)("h3",{id:"hideicons"},"hideIcons"),(0,r.yg)(m,{id:"hideicons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,r.yg)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb hideIcons />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/antd/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://ant.design/components/breadcrumb/#API)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://ant.design/components/breadcrumb/#Breadcrumb)",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);