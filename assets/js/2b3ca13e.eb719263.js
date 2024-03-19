"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Clone",swizzle:!0},l=void 0,p={unversionedId:"ui-integrations/material-ui/components/buttons/clone-button/index",id:"ui-integrations/material-ui/components/buttons/clone-button/index",title:"Clone",description:"` Material UI's  component. It uses the clone` method from useNavigation under the hood.",source:"@site/docs/ui-integrations/material-ui/components/buttons/clone-button/index.md",sourceDirName:"ui-integrations/material-ui/components/buttons/clone-button",slug:"/ui-integrations/material-ui/components/buttons/clone-button/",permalink:"/docs/ui-integrations/material-ui/components/buttons/clone-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/buttons/clone-button/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1710841267,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Clone",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Show",permalink:"/docs/ui-integrations/material-ui/components/basic-views/show/"},next:{title:"Create",permalink:"/docs/ui-integrations/material-ui/components/buttons/create-button/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),f=d("PropsTable"),b={toc:u};function g(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<CloneButton>")," Material UI's ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},"useNavigation")," under the hood."),(0,o.kt)("p",null,"It can be useful when redirecting the app to the create page with the record id route of resource."),(0,o.kt)("admonition",{title:"Good to know",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.kt)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  List,\n  // highlight-next-line\n  CloneButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nconst columns: GridColDef[] = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n  {\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n      // highlight-next-line\n      return <CloneButton size="small" recordItemId={row.id} />;\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n        create: () => (\n          <RefineMui.Create>Rest of the page here...</RefineMui.Create>\n        ),\n      },\n    ]}\n  />,\n);\n'))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},"recordItemId"),(0,o.kt)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { CloneButton } from "@refinedev/mui";\n\nconst MyCloneComponent = () => {\n  return <CloneButton resource="posts" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        create: ClonedPage,\n      },\n    ]}\n    DashboardPage={MyCloneComponent}\n  />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," action path of the resource, filling the necessary parameters in the route.")),(0,o.kt)("h3",{id:"resource"},"resource"),(0,o.kt)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"It is used to redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," action of the given resource name. By default, the app redirects to the inferred resource's ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," action path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mui";\n\nconst MyCloneComponent = () => {\n  return <CloneButton resource="categories" recordItemId="2" />;\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n        create: ClonedPage,\n      },\n    ]}\n    DashboardPage={MyCloneComponent}\n  />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,o.kt)("h3",{id:"meta"},"meta"),(0,o.kt)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"It is used to pass additional parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," method. You can pass additional parameters or override the existing ones using the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," action route is defined by the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/clone/:id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyCloneComponent = () => {\n  return <CloneButton meta={{ authorId: "10" }} />;\n};\n'))),(0,o.kt)("h3",{id:"hidetext"},"hideText"),(0,o.kt)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mui";\n\nconst MyCloneComponent = () => {\n  return (\n    <CloneButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyCloneComponent,\n        create: ClonedPage,\n      },\n    ]}\n  />,\n);\n'))),(0,o.kt)("h3",{id:"accesscontrol"},"accessControl"),(0,o.kt)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@refinedev/mui";\n\nexport const MyCloneComponent = () => {\n  return (\n    <CloneButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.kt)(h,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)(m,{id:"api-reference",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)(f,{module:"@refinedev/mui/CloneButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),"."))))}g.isMDXComponent=!0}}]);