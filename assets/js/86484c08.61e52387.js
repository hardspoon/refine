"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97698],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>d});t(96540);var r=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={id:"file",title:"File",swizzle:!0},p=void 0,s={unversionedId:"api-reference/antd/components/fields/file",id:"version-3.xx.xx/api-reference/antd/components/fields/file",title:"File",description:"This field is used to display files and uses `` from Ant Design.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/file.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/file",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/file",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/file.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Jelf",lastUpdatedAt:1713167608,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{id:"file",title:"File",swizzle:!0},sidebar:"someSidebar",previous:{title:"Email",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/email"},next:{title:"Image",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/image"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],f=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},u=f("DocThumbsUpDownFeedbackWidget"),m=f("PropsTable"),y={toc:d},g="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field is used to display files and uses ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/typography"},(0,r.yg)("inlineCode",{parentName:"a"},"<Typography.Link>"))," from Ant Design."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"<FileField>")," with the example in the edit page."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  List,\n  Table,\n  useTable,\n  // highlight-next-line\n  FileField,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="50%" />\n        <Table.Column<IPost>\n          title="Image"\n          dataIndex="image"\n          render={(_, record) => (\n            // highlight-next-line\n            <FileField src={record.image[0].url} />\n          )}\n          width="50%"\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  image: [\n    {\n      url: string;\n    },\n  ];\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you don't use ",(0,r.yg)("inlineCode",{parentName:"p"},"title")," prop it will use ",(0,r.yg)("inlineCode",{parentName:"p"},"src")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"title")))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(u,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@pankod/refine-antd/FileField",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/typography/#How-to-use-Typography.Link-in-react-router"},"Link"),"."))))}b.isMDXComponent=!0}}]);