"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91246],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(p,".").concat(d)]||u[d]||l[d]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"custom-inputs",title:"Custom Inputs"},p=void 0,c={unversionedId:"ui-integrations/ant-design/components/inputs/custom-inputs",id:"ui-integrations/ant-design/components/inputs/custom-inputs",title:"Custom Inputs",description:"Refine uses Ant Design's ` components to control and work with form data. Ant Design supports custom form items inside the  components. These items should be controllable via their value property and should implement onChange (or a custom callback name specified by 's trigger` prop).",source:"@site/docs/ui-integrations/ant-design/components/inputs/custom-inputs.md",sourceDirName:"ui-integrations/ant-design/components/inputs",slug:"/ui-integrations/ant-design/components/inputs/custom-inputs",permalink:"/docs/ui-integrations/ant-design/components/inputs/custom-inputs",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/inputs/custom-inputs.md",tags:[],version:"current",lastUpdatedBy:"Jelf",lastUpdatedAt:1713167608,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{id:"custom-inputs",title:"Custom Inputs"}},m={},u=[{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=l("DocThumbsUpDownFeedbackWidget"),g=l("Image"),f=l("CodeSandboxExample"),y={toc:u},b="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Refine uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form>"))," components to control and work with form data. Ant Design supports custom form items inside the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form.Item>"))," components. These items should be controllable via their ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," property and should implement ",(0,r.yg)("inlineCode",{parentName:"p"},"onChange")," (or a custom callback name specified by ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form.Item>")),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"trigger")," prop)."),(0,r.yg)("p",null,"For some data types, displaying and editing as plain text may cause user experience problems."),(0,r.yg)("p",null,"Custom components may be useful when working with markdown (with markdown editor), JSON based rich text (draft, quill like editors), and HTML (a HTML editor). It can be used in table columns and form fields"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Ant Design's ",(0,r.yg)("inlineCode",{parentName:"a"},"<Form>")," documentation. ","\u2192"))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(d,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will demonstrate how to use custom input fields for markdown data by adding a markdown editor to edit and create forms:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/edit.tsx"',title:'"/src/pages/posts/edit.tsx"'},'import React, { useState } from "react";\nimport { Edit, useForm } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n\n// highlight-start\nimport MDEditor from "@uiw/react-md-editor";\n// highlight-end\n\nimport { IPost } from "interfaces";\n\nexport const PostEdit: React.FC = (props) => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  return (\n    <Edit {...props} saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        // highlight-start\n        <Form.Item\n          label="Content"\n          name="content"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <MDEditor data-color-mode="light" />\n        </Form.Item>\n        // highlight-end\n      </Form>\n    </Edit>\n  );\n};\n')),(0,r.yg)(g,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/components/inputs/custom-inputs/markdown-input.png",alt:"Markdown input",mdxType:"Image"}),(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"example-1"},"Example"),(0,r.yg)(d,{id:"example-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{path:"input-custom",mdxType:"CodeSandboxExample"})))}h.isMDXComponent=!0}}]);