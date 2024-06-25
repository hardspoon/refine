"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76619],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,y=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(37953);var o=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},s=void 0,p={unversionedId:"core/hooks/utilities/use-modal/index",id:"core/hooks/utilities/use-modal/index",title:"useModal",description:"useModal hook allows you to manage a modal. Since it is designed as headless, it returns the show and close functions and the visible state. It expects you to handle the UI.",source:"@site/docs/core/hooks/utilities/use-modal/index.md",sourceDirName:"core/hooks/utilities/use-modal",slug:"/core/hooks/utilities/use-modal/",permalink:"/docs/core/hooks/utilities/use-modal/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-modal/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1719308259,formattedLastUpdatedAt:"Jun 25, 2024",frontMatter:{title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},sidebar:"mainSidebar",previous:{title:"Inferencer",permalink:"/docs/core/components/inferencer/"},next:{title:"useMenu",permalink:"/docs/core/hooks/utilities/use-menu/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"defaultVisible",id:"defaultvisible",level:3},{value:"Return Values",id:"return-values",level:2},{value:"visible",id:"visible",level:3},{value:"show",id:"show",level:3},{value:"close",id:"close",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},g=c("DocThumbsUpDownFeedbackWidget"),y=c("PropsTable"),m=c("CodeSandboxExample"),h={toc:d},b="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(b,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," functions and the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state. It expects you to handle the UI."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const { show, close, visible } = useModal();\n")),(0,o.yg)("p",null,"You can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal. The ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," functions' only use is changing the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state. You can use this hook anywhere."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Let's see an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n  // highlight-next-line\n  useModal,\n} from "@refinedev/core";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { visible, show, close } = useModal();\n\n  return (\n    <>\n      // highlight-start\n      <button onClick={show}>Show Modal</button>\n      {visible && (\n        <YourModalComponent>\n          <p>Dummy Modal Content</p>\n          <button onClick={close}>Close Modal</button>\n        </YourModalComponent>\n      )}\n      // highlight-end\n    </>\n  );\n};\n')),(0,o.yg)("p",null,"Here, we show a button somewhere on the page and use ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," on its ",(0,o.yg)("inlineCode",{parentName:"p"},"onClick")," callback to trigger the opening of the ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>"),". When the user clicks on the button, the ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>")," appears."),(0,o.yg)("p",null,"To demonstrate the ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," function, we created a ",(0,o.yg)("inlineCode",{parentName:"p"},"<button>")," that uses it in its ",(0,o.yg)("inlineCode",{parentName:"p"},"onClick")," property to close ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>"))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"defaultvisible"},"defaultVisible"),(0,o.yg)(g,{id:"defaultvisible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"defaultVisible")," is a boolean value that determines whether the modal is visible by default. By default, it is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useModal({\n  defaultVisible: true,\n});\n"))),(0,o.yg)("h2",{id:"return-values"},"Return Values"),(0,o.yg)("h3",{id:"visible"},"visible"),(0,o.yg)(g,{id:"visible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Visible state of the modal.")),(0,o.yg)("h3",{id:"show"},"show"),(0,o.yg)(g,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"A function that can change the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,o.yg)("h3",{id:"close"},"close"),(0,o.yg)(g,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"A function that can change the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(y,{module:"@refinedev/core/useModal",mdxType:"PropsTable"})),(0,o.yg)("h3",{id:"return-value"},"Return Value"),(0,o.yg)(g,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"visible"),(0,o.yg)("td",{parentName:"tr",align:null},"Returns the ",(0,o.yg)("inlineCode",{parentName:"td"},"visible")," state of the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"show"),(0,o.yg)("td",{parentName:"tr",align:null},"A function that can open the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"() => void"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"close"),(0,o.yg)("td",{parentName:"tr",align:null},"A function that can close the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"() => void")))))),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(m,{path:"core-use-modal",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);