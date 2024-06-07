"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16740],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>c});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=d(t),u=r,c=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return t?a.createElement(c,o(o({ref:n},l),{},{components:t})):a.createElement(c,o({ref:n},l))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>g});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const p={id:"nextjs",title:"Next.js"},s=void 0,d={unversionedId:"advanced-tutorials/ssr/nextjs",id:"version-3.xx.xx/advanced-tutorials/ssr/nextjs",title:"Next.js",description:"refine can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/ssr/nextjs.md",sourceDirName:"advanced-tutorials/ssr",slug:"/advanced-tutorials/ssr/nextjs",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/nextjs",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/ssr/nextjs.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1717747931,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"nextjs",title:"Next.js"},sidebar:"someSidebar",previous:{title:"Remix",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/remix"},next:{title:"Base64 Upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/base64-upload"}},l={},g=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Custom Page",id:"custom-page",level:2},{value:"SSR",id:"ssr",level:3},{value:"Standard CRUD Page",id:"standard-crud-page",level:2},{value:"SSR",id:"ssr-1",level:3},{value:"Server Side Authentication",id:"server-side-authentication",level:2},{value:"<code>syncWithLocation</code> and Query Parameters in SSR",id:"syncwithlocation-and-query-parameters-in-ssr",level:2},{value:"<code>appDir</code> Support",id:"appdir-support",level:2},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},u=m("DocThumbsUpDownFeedbackWidget"),c=m("InstallPackagesCommand"),y=m("CreateRefineAppCommand"),h=m("CodeSandboxExample"),f={toc:g},x="wrapper";function N(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(x,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," can be used with ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},(0,a.yg)("strong",{parentName:"a"},"Next.js"))," to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)(u,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,a.yg)("strong",{parentName:"a"},"nextjs-router"))," package provided by ",(0,a.yg)("strong",{parentName:"p"},"refine")," must be used for the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"routerProvider"))),(0,a.yg)(c,{args:"@refinedev/nextjs-router",mdxType:"InstallPackagesCommand"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"We recommend using ",(0,a.yg)("inlineCode",{parentName:"p"},"create refine-app")," to initialize your refine projects. It configures the project according to your needs including SSR with Next.js."),(0,a.yg)(y,{args:"-o refine-nextjs my-refine-nextjs-app",mdxType:"CreateRefineAppCommand"})),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine>"))," must wrap your pages in a ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/custom-app"},"custom App")," component. This way your ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},"pages")," are integrated to refine."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\n\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-nextjs-router";\n\nimport { PostList, PostEdit, PostCreate, PostShow } from "pages/posts";\nimport { UserList, UserShow } from "pages/users";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    // highlight-start\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          create: PostCreate,\n          edit: PostEdit,\n          show: PostShow,\n        },\n        {\n          name: "users",\n          list: UserList,\n          show: UserShow,\n        },\n      ]}\n    >\n      <Component {...pageProps} />\n    </Refine>\n    // highlight-end\n  );\n}\n\nexport default MyApp;\n'))),(0,a.yg)("h2",{id:"custom-page"},"Custom Page"),(0,a.yg)(u,{id:"custom-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's say we want to show a list of users in ",(0,a.yg)("inlineCode",{parentName:"p"},"/users"),". After creating ",(0,a.yg)("inlineCode",{parentName:"p"},"users.tsx")," under ",(0,a.yg)("inlineCode",{parentName:"p"},"pages")," in your Nextjs app, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook to list the users in a table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import { LayoutWrapper } from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC = () => {\n  const { tableProps } = useTable<IUser>({\n    resource: "users",\n  });\n\n  return (\n    <LayoutWrapper>\n      <List title="Users">\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" sorter />\n          <Table.Column dataIndex="firstName" title="Name" />\n        </Table>\n      </List>\n    </LayoutWrapper>\n  );\n};\n// highlight-end\ninterface IUser {\n  id: number;\n  firstName: string;\n}\n\nexport default UserList;\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you want to handle your ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," with a custom page or create a custom page with or without a resource, these will not be visible in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sider />")," component. You can trick the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sider/>")," by passing an empty resource to show your custom route in it."),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Example"',title:'"Example"'},'const App = () => (\n  <Refine\n    resources={[\n      // This will add an item to `<Sider/>` with route `/my-custom-item`\n      { name: "my-custom-item", list: () => null },\n    ]}\n  />\n);\n'))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Notice how we passed ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," prop to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useTable"},(0,a.yg)("inlineCode",{parentName:"a"},"useTable")),". This is necessary since for ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," to be able to get ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," name from route, it needs to be a route parameter in a dynamic route. ",(0,a.yg)("a",{parentName:"p",href:"#standard-crud-page"},"Refer here")," where standard CRUD pages can be built with dynamic routing.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"We also used ",(0,a.yg)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," to show the page in the layout provided to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine>")),". This is deliberately opt-in to provide flexibility. ",(0,a.yg)("a",{parentName:"p",href:"#standart-crud-page"},"If you're building a standard CRUD page layout can be baked in automatically"),"."))),(0,a.yg)("h3",{id:"ssr"},"SSR"),(0,a.yg)(u,{id:"ssr",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," uses ",(0,a.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," in its hooks for data management. ",(0,a.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/ssr#using-initialdata"},"Following react-query's guide"),", SSR can be achieved like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'// highlight-next-line\nimport { GetServerSideProps } from "next";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  LayoutWrapper,\n  // highlight-next-line\n  GetListResponse,\n} from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC<{ users: GetListResponse<IUser> }> = ({\n  users,\n}) => {\n  // highlight-end\n  const { tableProps } = useTable<IUser>({\n    resource: "users",\n    // highlight-start\n    queryOptions: {\n      initialData: users,\n    },\n    // highlight-end\n  });\n\n  return (\n    <LayoutWrapper>\n      <List title="Users">\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" sorter />\n          <Table.Column dataIndex="firstName" title="Name" />\n        </Table>\n      </List>\n    </LayoutWrapper>\n  );\n};\n\n// highlight-start\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  const data = await dataProvider(API_URL).getList({\n    resource: "users",\n  });\n\n  return {\n    props: { users: data },\n  };\n};\n// highlight-end\n\ninterface IUser {\n  id: number;\n  firstName: string;\n}\n\nexport default UserList;\n')),(0,a.yg)("p",null,"We use the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/#getlist-"},(0,a.yg)("inlineCode",{parentName:"a"},"getList"))," method from our ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider"))," to fetch ",(0,a.yg)("inlineCode",{parentName:"p"},"users")," data and pass through ",(0,a.yg)("inlineCode",{parentName:"p"},"props")," as conventionally done in Next.js. Then ",(0,a.yg)("inlineCode",{parentName:"p"},"users")," data is available in the props of our ",(0,a.yg)("inlineCode",{parentName:"p"},"/users")," page. ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useTable"},(0,a.yg)("inlineCode",{parentName:"a"},"useTable"))," can take options for underlying react-query queries with ",(0,a.yg)("inlineCode",{parentName:"p"},"queryOptions"),". Passing ",(0,a.yg)("inlineCode",{parentName:"p"},"users")," data to its ",(0,a.yg)("inlineCode",{parentName:"p"},"initialData")," loads the data on server side."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"We used ",(0,a.yg)("inlineCode",{parentName:"p"},"getList")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," but data can be fetched in any way you desire."))),(0,a.yg)("h2",{id:"standard-crud-page"},"Standard CRUD Page"),(0,a.yg)(u,{id:"standard-crud-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," for routing in ",(0,a.yg)("strong",{parentName:"p"},"refine")," resources. Simply export the component from the page and add a ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching"},"data fetching function"),". While you can create pages with defined params like ",(0,a.yg)("inlineCode",{parentName:"p"},"[resource]/[action]/[id].tsx"),", we recommend using a catch-all route to handle all ",(0,a.yg)("strong",{parentName:"p"},"refine")," routing in a single file. You can start by creating a ",(0,a.yg)("inlineCode",{parentName:"p"},"[[...refine]].tsx")," file under ",(0,a.yg)("inlineCode",{parentName:"p"},"pages")," in your Nextjs app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n')),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You can also define routes without using ",(0,a.yg)("inlineCode",{parentName:"p"},"[[...refine]].tsx")," file like below, but a catch-all route is an easier approach with nested route support."),(0,a.yg)("p",{parentName:"admonition"},"Export ",(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," as default in the following pages:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pages/[resource].tsx")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pages/[resource]/[action].tsx")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pages/[resource]/[action]/[id].tsx")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pages/index.tsx"))),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," will use route parameters ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"action")," and render the associated component defined in ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,a.yg)("inlineCode",{parentName:"a"},"resources")),"."),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"list")," component will be rendered for ",(0,a.yg)("inlineCode",{parentName:"li"},"/[resource]")," route"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"edit")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"show")," will be rendered for ",(0,a.yg)("inlineCode",{parentName:"li"},"/[resource]/[action]")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"/[resource]/[action]/[id]")," routes"),(0,a.yg)("li",{parentName:"ul"},"For the root ",(0,a.yg)("inlineCode",{parentName:"li"},"/")," route, it will render ",(0,a.yg)("inlineCode",{parentName:"li"},"DashboardPage")," if it's defined and if not will navigate to the first resource in ",(0,a.yg)("inlineCode",{parentName:"li"},"resources"),"."))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," will wrap the page with ",(0,a.yg)("inlineCode",{parentName:"p"},"Layout")," provided to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine>"))))),(0,a.yg)("h3",{id:"ssr-1"},"SSR"),(0,a.yg)(u,{id:"ssr-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," accepts a ",(0,a.yg)("inlineCode",{parentName:"p"},"initialData")," prop for SSR data."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type NextRouteComponentProps = {\n  initialData?: any;\n};\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"initialData")," must be passed as props from ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," will pass this data as ",(0,a.yg)("inlineCode",{parentName:"p"},"initialData")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"show")," components."),(0,a.yg)("p",null,"For example, for a ",(0,a.yg)("inlineCode",{parentName:"p"},"list")," component that will be rendered for ",(0,a.yg)("inlineCode",{parentName:"p"},"/[resource]"),", the page can use SSR like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\nimport { handleRefineParams } from "@pankod/refine-nextjs-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { GetServerSideProps } from "next";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  const { resource, action, id } = handleRefineParams(context.params?.refine);\n\n  try {\n    if (resource && action === "show" && id) {\n      const data = await dataProvider(API_URL).getOne({\n        // we\'re slicing the resource param to get the resource name from the last part\n        resource: resource.slice(resource.lastIndexOf("/") + 1),\n        id,\n      });\n\n      return {\n        props: {\n          initialData: data,\n        },\n      };\n    } else if (resource && !action && !id) {\n      const data = await dataProvider(API_URL).getList({\n        // we\'re slicing the resource param to get the resource name from the last part\n        resource: resource.slice(resource.lastIndexOf("/") + 1),\n      });\n\n      return {\n        props: {\n          initialData: data,\n        },\n      };\n    }\n  } catch (error) {\n    return { props: {} };\n  }\n\n  return { props: {} };\n};\n')),(0,a.yg)("p",null,"And in the ",(0,a.yg)("inlineCode",{parentName:"p"},"list")," component for a ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),' e.g. "posts":'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/posts/list.tsx"',title:'"src/components/posts/list.tsx"'},'import { GetListResponse, IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nexport const PostList: React.FC<\n  IResourceComponentsProps<GetListResponse<IPost>>\n  // highlight-next-line\n> = ({ initialData }) => {\n  const { tableProps } = useTable<IPost>({\n    // highlight-start\n    queryOptions: {\n      initialData,\n    },\n    // highlight-end\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="status" title="Status" />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  firstName: string;\n}\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can also achieve SSR with ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticPaths")," for static generation. All you need to do is to add the paths you want to statically generate to ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticPaths")," and pass the data as ",(0,a.yg)("inlineCode",{parentName:"p"},"initialData")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps"),"."))),(0,a.yg)("h2",{id:"server-side-authentication"},"Server Side Authentication"),(0,a.yg)(u,{id:"server-side-authentication",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,a.yg)("inlineCode",{parentName:"p"},"checkAuthentication")," to easily handle server side authentication."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n// highlight-next-line\nimport { checkAuthentication } from "@pankod/refine-nextjs-router";\n\nimport { GetServerSideProps } from "next";\n\nimport { authProvider } from "../../src/authProvider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // highlight-start\n  const { isAuthenticated, ...props } = await checkAuthentication(\n    authProvider,\n    context,\n  );\n\n  if (!isAuthenticated) {\n    return props;\n  }\n  // highlight-end\n\n  return {\n    props: {},\n  };\n};\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"checkAuthentication")," expects your ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," and ",(0,a.yg)("strong",{parentName:"p"},"getServerSideProps"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"context"),". It uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"checkAuth")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," to check for authentication and returns ",(0,a.yg)("inlineCode",{parentName:"p"},"isAuthenticated")," accordingly. It also returns a ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect")," object to handle unauthenticated case. It redirects to ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," while keeping the original route to be navigated to after successful login.")),(0,a.yg)("h2",{id:"syncwithlocation-and-query-parameters-in-ssr"},(0,a.yg)("inlineCode",{parentName:"h2"},"syncWithLocation")," and Query Parameters in SSR"),(0,a.yg)(u,{id:"syncwithlocation-and-query-parameters-in-ssr",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"syncWithLocation")," is enabled, query parameters must be handled while doing SSR."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import { GetServerSideProps } from "next";\n// highlight-next-line\nimport { parseTableParamsFromQuery } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // highlight-start\n  const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =\n    parseTableParamsFromQuery(context.query);\n  // highlight-end\n  const data = await dataProvider(API_URL).getList({\n    resource: "users",\n    // highlight-start\n    filters: parsedFilters,\n    pagination: {\n      current: parsedCurrent || 1,\n      pageSize: parsedPageSize || 10,\n    },\n    sort: parsedSorter,\n    // highlight-end\n  });\n\n  return {\n    props: { users: data },\n  };\n};\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"parseTableParams")," parses the query string and returns query parameters(",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#crudfilters"},"refer here for their interfaces"),"). They can be directly used for ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," methods that accepts them.")),(0,a.yg)("h2",{id:"appdir-support"},(0,a.yg)("inlineCode",{parentName:"h2"},"appDir")," Support"),(0,a.yg)(u,{id:"appdir-support",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Next.js introduced a new way of defining pages within the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory. ",(0,a.yg)("em",{parentName:"p"},"This new directory has support for layouts, nested routes, and uses Server Components by default.")," To learn more about the feature check out ",(0,a.yg)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/upgrade-guide"},"Next.js Beta docs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," also follows this feature and provides a way to use ",(0,a.yg)("inlineCode",{parentName:"p"},"appDir")," with your ",(0,a.yg)("strong",{parentName:"p"},"refine")," apps."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"app/")," is currently in beta and is ",(0,a.yg)("strong",{parentName:"p"},"not recommended")," for production use in Next.js. In ",(0,a.yg)("strong",{parentName:"p"},"refine"),", we're providing the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," support as experimental and not recommended for production use.")),(0,a.yg)("p",null,"To start using ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," with ",(0,a.yg)("strong",{parentName:"p"},"refine"),", you need to set create the ",(0,a.yg)("strong",{parentName:"p"},"refine")," routes in your ",(0,a.yg)("inlineCode",{parentName:"p"},"/app")," directory with the following convention:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nyour-project\n\u2514\u2500\u2500 app\n    \u2514\u2500\u2500 [[...refine]]\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Initializing ",(0,a.yg)("inlineCode",{parentName:"strong"},"<Refine/>")," in ",(0,a.yg)("inlineCode",{parentName:"strong"},"layout.tsx"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/[[...refine]]/layout.tsx"',title:'"app/[[...refine]]/layout.tsx"'},'"use client";\n\nimport routerProvider from "@pankod/refine-nextjs-router/app";\n\nexport default function RefineLayout({\n  children,\n  params,\n}: {\n  children: React.ReactNode;\n  params: Record<"refine", string[]>;\n}) {\n  return (\n    <Refine\n      routerProvider={routerProvider.call({ params })}\n      /* ... */\n    >\n      {children}\n    </Refine>\n  );\n}\n')),(0,a.yg)("p",null,"We need to bind the ",(0,a.yg)("inlineCode",{parentName:"p"},"params")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"routerProvider")," and call it to initialize the ",(0,a.yg)("inlineCode",{parentName:"p"},"routerProvider"),". This is because the ",(0,a.yg)("inlineCode",{parentName:"p"},"params")," are not available via hooks for ",(0,a.yg)("strong",{parentName:"p"},"refine")," to use."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Creating ",(0,a.yg)("inlineCode",{parentName:"strong"},"page.tsx"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/[[...refine]]/page.tsx"',title:'"app/[[...refine]]/page.tsx"'},'"use client";\n\nimport { NextRouteComponent } from "@pankod/refine-nextjs-router/app";\n\nexport default NextRouteComponent;\n')),(0,a.yg)("p",null,"Note that we're importing ",(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-nextjs-router/app")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-nextjs-router"),". This is because we're using the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory and we need to import the ",(0,a.yg)("inlineCode",{parentName:"p"},"app")," version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"NextRouteComponent"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},'"use client";')," is a directive that instructs Next.js to opt-out from Server Components. This is because ",(0,a.yg)("strong",{parentName:"p"},"refine")," and dependencies are not yet compatible with Server Components. That's why we're using it in both ",(0,a.yg)("inlineCode",{parentName:"p"},"layout.tsx")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"page.tsx")," files.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"checkAuthentication")," does not work with ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory. You need to handle the authentication of your views while using ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory."),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"refine")," aims to provide a middleware for ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory to substitute ",(0,a.yg)("inlineCode",{parentName:"p"},"checkAuthentication")," but it's not available yet.")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You can find the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/")," directory example with ",(0,a.yg)("strong",{parentName:"p"},"refine")," in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/examples/remix/antd"},"examples/nextjs/appdir")))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{path:"with-nextjs",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);