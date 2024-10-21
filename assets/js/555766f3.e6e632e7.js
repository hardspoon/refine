"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84380],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(37953);var i=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",slug:"react-strict-mode-in-react-18",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-24-react-strict-mode/social-2.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/react-strict-mode-in-react-18",source:"@site/blog/2024-07-10-react-strict-mode.md",title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",date:"2024-07-10T00:00:00.000Z",formattedDate:"July 10, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.835,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",slug:"react-strict-mode-in-react-18",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-24-react-strict-mode/social-2.png",hide_table_of_contents:!1},prevItem:{title:"React Props Explained with Examples",permalink:"/blog/react-props"},nextItem:{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows"},relatedPosts:[{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"May 23, 2024",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:17.725,date:"2024-05-23T00:00:00.000Z"},{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 16, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:15.71,date:"2024-10-16T00:00:00.000Z"},{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",permalink:"/blog/react-props",formattedDate:"July 10, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.79,date:"2024-07-10T00:00:00.000Z"}],authorPosts:[{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"September 24, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:22.01,date:"2024-09-24T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"September 18, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:14.455,date:"2024-09-18T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.155,date:"2023-10-29T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Strict Mode?",id:"what-is-react-strict-mode",level:2},{value:"Comparison between React Strict Mode and Use Strict",id:"comparison-between-react-strict-mode-and-use-strict",level:2},{value:"React Strict Mode",id:"react-strict-mode",level:3},{value:"Use Strict",id:"use-strict",level:3},{value:"What\u2019s new in React v18.0?",id:"whats-new-in-react-v180",level:2},{value:"Benefits of React Strict Mode",id:"benefits-of-react-strict-mode",level:2},{value:"Features of React Strict Mode",id:"features-of-react-strict-mode",level:2},{value:"Identifying components with unsafe lifecycles in React",id:"identifying-components-with-unsafe-lifecycles-in-react",level:3},{value:"Warning About Legacy String Ref API Usage",id:"warning-about-legacy-string-ref-api-usage",level:3},{value:"Warning about deprecated findDOMNode usage",id:"warning-about-deprecated-finddomnode-usage",level:3},{value:"Detecting Unexpected Side Effects",id:"detecting-unexpected-side-effects",level:3},{value:"Detecting Legacy Context API",id:"detecting-legacy-context-api",level:3},{value:"Ensuring a reusable state",id:"ensuring-a-reusable-state",level:3},{value:"Cool Features of React Strict Mode You Should Know About",id:"cool-features-of-react-strict-mode-you-should-know-about",level:2},{value:"Warning About Legacy String Ref API Usage",id:"warning-about-legacy-string-ref-api-usage-1",level:4},{value:"Deprecated <code>findDOMNode</code> Usage Warning",id:"deprecated-finddomnode-usage-warning",level:4},{value:"Detecting Unexpected Side Effects",id:"detecting-unexpected-side-effects-1",level:4},{value:"Detecting Legacy Context API",id:"detecting-legacy-context-api-1",level:4},{value:"Ensuring Reusable State",id:"ensuring-reusable-state",level:4},{value:"ESLint",id:"eslint",level:3},{value:"Prettier",id:"prettier",level:3},{value:"Jest",id:"jest",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},g="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,i.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"This article was last updated on July 10, 2024, to add sections for React Strict Mode post.")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In recent years, React.js has undergone significant development by adding and improving new features to solve discovered bugs and provide tools that improve application performance. In March 2022, a new version (React v18.0) was released with features such as React Strict Mode, Server-Side Rendering (SSR), Suspense, Concurrency, Automatic Batching, and the introduction of new hooks."),(0,i.yg)("p",null,"Among all of the new features, the React Strict Mode feature stood out for its extensive improvements and functions in areas such as identifying coding patterns for bugs, providing feedback to developers with no impact on the production build, and much more."),(0,i.yg)("p",null,"In this article, we'll see the ",(0,i.yg)("strong",{parentName:"p"},"React Strict Mode"),", how it relates to the JavaScript ",(0,i.yg)("inlineCode",{parentName:"p"},"\u201cuse strict\u201d")," expression, its importance, benefits, features, and significant improvements."),(0,i.yg)("p",null,"Steps we'll cover:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#what-is-react-strict-mode"},"What is React Strict Mode?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#comparison-between-react-strict-mode-and-use-strict"},"Comparison between React Strict Mode and Use Strict")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#whats-new-in-react-v180"},"What\u2019s new in React v18.0?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#benefits-of-react-strict-mode"},"Benefits of React Strict Mode")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#features-of-react-strict-mode"},"Features of React Strict Mode"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#cool-features-of-react-strict-mode-you-should-know-about"},"Cool Features of React Strict Mode You Should Know About"))))),(0,i.yg)("h2",{id:"what-is-react-strict-mode"},"What is React Strict Mode?"),(0,i.yg)("p",null,"React Strict Mode is a developer tool highlighting potential bugs or issues in a React application's codebase. It provides warnings to developers as feedback for errors that occur in an application, with no effect on the result because it does not render any visible UI."),(0,i.yg)("p",null,"With React v18.0, new features were added to the framework, and some existing features were significantly improved."),(0,i.yg)("p",null,"React Strict Mode runs some functions in the development environment to ensure that they return values identical to the desired arguments and have no unintended side effects. These functions are as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Functional Component"),(0,i.yg)("li",{parentName:"ul"},"Initializer Function"),(0,i.yg)("li",{parentName:"ul"},"Updater Function"),(0,i.yg)("li",{parentName:"ul"},"React Strict Mode versus \u201cuse strict\u201d"),(0,i.yg)("li",{parentName:"ul"},'This section explains the relationship between Strict Mode and the JavaScript "use strict" expression. You can specify that a code block should be run in strict mode by appending "use strict" to the beginning of a script or function.')),(0,i.yg)("p",null,'Strict Mode, on the other hand, detects errors in coding patterns and flags previously accepted "bad syntax" as errors by eliminating silent errors and throwing errors when they occur. React Strict mode works similarly to JavaScript\'s "use strict" expression in that it ensures a more strict and type-safe version of JavaScript.'),(0,i.yg)("p",null,'The relationship between React Strict Mode and the "use strict" expression is described in the table below:'),(0,i.yg)("h2",{id:"comparison-between-react-strict-mode-and-use-strict"},"Comparison between React Strict Mode and Use Strict"),(0,i.yg)("h3",{id:"react-strict-mode"},"React Strict Mode"),(0,i.yg)("p",null,"Undeclared variables will return an error in React Strict mode. It checks for the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Components with unsafe lifecycles."),(0,i.yg)("li",{parentName:"ul"},"Usage of legacy or deprecated APIs or methods like the string ref API and Context API, and findDOMNode."),(0,i.yg)("li",{parentName:"ul"},"Unexpected side effects.")),(0,i.yg)("p",null,"You can reference the Strict Mode by using ",(0,i.yg)("inlineCode",{parentName:"p"},"<React.StrictMode>"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"import { StrictMode } from 'react'"),"\xa0in your code. Then, the component can be called as StrictMode."),(0,i.yg)("p",null,"Wrap the suspected code in the Strict Mode helper component as shown in the code block below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport ReactDOM from "react-dom/client";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nconst SuspiciousCode = () => {\n  return <div>Contains suspicious code blocks</div>;\n};\n\nroot.render(\n  <React.StrictMode>\n    <SuspiciousCode />\n  </React.StrictMode>,\n);\n')),(0,i.yg)("h3",{id:"use-strict"},"Use Strict"),(0,i.yg)("p",null,"The expression \u201cuse strict\u201d flags out the following as errors:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Assigning values to undeclared variables."),(0,i.yg)("li",{parentName:"ul"},"Use of keywords for variable name, e.g. public."),(0,i.yg)("li",{parentName:"ul"},"Writing data to constant variables."),(0,i.yg)("li",{parentName:"ul"},"Accessing a variable before it is declared etc.")),(0,i.yg)("p",null,"Both statements in the code example below will return errors because arguments is a reserved words and variable x is not defined."),(0,i.yg)("p",null,"Also, \u201cuse strict\u201d must be specified at the top of the file for it to take effect."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nlet arguments = "an argument";\n\nx = 500;\n')),(0,i.yg)("h2",{id:"whats-new-in-react-v180"},"What\u2019s new in React v18.0?"),(0,i.yg)("p",null,"Strict Mode plays a significant role in the incremental adoption of Concurrent rendering, a new implementation detail that, in simple terms, allows rendering UI to be interruptible. While in development, Strict Mode can be used to help expose concurrency-related bugs."),(0,i.yg)("p",null,"The new React Strict Mode behaviors are as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"React Strict Mode can now be used to detect bugs that occur as code runs concurrently (two or more tasks being carried out simultaneously)."),(0,i.yg)("li",{parentName:"ul"},"Strict Mode only runs in development, which does not impede the production build."),(0,i.yg)("li",{parentName:"ul"},"It logs extra warnings or errors and invokes functions twice to ensure that the expected results always occur."),(0,i.yg)("li",{parentName:"ul"},"With React 18, Strict Mode can now handle mounting and unmounting components and, in future, preserve and restore their state on subsequent mounts.")),(0,i.yg)("h2",{id:"benefits-of-react-strict-mode"},"Benefits of React Strict Mode"),(0,i.yg)("p",null,"React Strict Mode comes with a couple of outstanding benefits:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Preventing Mutations of Values: Strict Mode aids in the prevention of scenarios in applications where values are mutated by unpure functions, resulting in different results after each render. The developer can easily detect if the application returns the expected results thanks to its double invocation feature."),(0,i.yg)("li",{parentName:"ul"},"Ease of use: React Strict mode makes it easier to work with unfamiliar codebases, i.e. code that you did not write."),(0,i.yg)("li",{parentName:"ul"},"Bug detection: It makes it easier to detect programming bugs."),(0,i.yg)("li",{parentName:"ul"},"Facilitating Clean Code: Strict Mode helps you become a better React developer. It assists the developer in writing cleaner code by instilling the habit of writing code that follows React's best practices."),(0,i.yg)("li",{parentName:"ul"},"Catches Potential Issues Early: Strict Mode helps you catch unsafe lifecycle methods and deprecated APIs at the earliest stage possible\u2014that is, before they grow into bigger issues. This is very useful when working with older codebases or integrating third-party libraries."),(0,i.yg)("li",{parentName:"ul"},"Enforces Best Practices: It kinda is a best practice enforcer for React, because what it does is it points out parts in your code that might not be standard, such as the side effects within your components, in order to lead you to more predictable and maintainable code."),(0,i.yg)("li",{parentName:"ul"},"Prepares for Future Updates: With the use of Strict Mode, it assures that your code is ready when React plans an update in the future. This is so because Strict Mode highlights areas that might break or need some alterations with upcoming releases."),(0,i.yg)("li",{parentName:"ul"},"Code Quality: Checks and warnings enhance the overall quality of the code. The application becomes more robust and, consequently, is easier to maintain in the long run. It is indeed very easy to set up and gives a lot of value, particularly when your project is growing.")),(0,i.yg)("h2",{id:"features-of-react-strict-mode"},"Features of React Strict Mode"),(0,i.yg)("p",null,"In this section, you will learn about the current features of StrictMode, which include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Identifying components with unsafe lifecycles in React."),(0,i.yg)("li",{parentName:"ul"},"Warning about Legacy String Ref API usage."),(0,i.yg)("li",{parentName:"ul"},"Warning about deprecated findDOMNode usage."),(0,i.yg)("li",{parentName:"ul"},"Detecting unexpected side effects."),(0,i.yg)("li",{parentName:"ul"},"Detecting legacy context API."),(0,i.yg)("li",{parentName:"ul"},"Ensuring a reusable state.")),(0,i.yg)("h3",{id:"identifying-components-with-unsafe-lifecycles-in-react"},"Identifying components with unsafe lifecycles in React"),(0,i.yg)("p",null,"Legacy components such as componentWillMount, componentWillReceiveProps, and componentWillUpdate have been discovered to cause unhealthy code practices in React. When misused in asynchronous React applications, they produce undesirable results. As a result, React developers decided to prefix these lifecycles with UNSAFE","_"," in future releases."),(0,i.yg)("p",null,"As an improvement, React Strict Mode will now detect and warn the developer whenever these lifecycles are used. Furthermore, React Strict Mode inspects third-party packages in the development environment and can notify the user if these packages use deprecated dependencies."),(0,i.yg)("h3",{id:"warning-about-legacy-string-ref-api-usage"},"Warning About Legacy String Ref API Usage"),(0,i.yg)("p",null,"Due to difficulties in passing refs to child components and issues with referencing the names of created Refs, the use of the String Ref in React, which was previously acceptable in previous versions, now has a warning in Strict Mode. Strict Mode warns developers, instructing them to use Callback refs or React.createRef as best practices."),(0,i.yg)("h3",{id:"warning-about-deprecated-finddomnode-usage"},"Warning about deprecated findDOMNode usage"),(0,i.yg)("p",null,"FindDOMNode was a React feature designed to search the DOM node tree for a specific class interface. A refactoring issue caused by the FindDOMNode approach was that the parent component needed to be aware of their child's implementation details to return the appropriate child. Another issue was that FindDOMNode did not reflect changes in the state of node elements."),(0,i.yg)("br",null),(0,i.yg)("div",null,(0,i.yg)("a",{href:"https://discord.gg/refine"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.yg)("h3",{id:"detecting-unexpected-side-effects"},"Detecting Unexpected Side Effects"),(0,i.yg)("p",null,"Due to the Strict Mode practice of double invoking function routines, functions can scrutinize their results to ensure they are pure and produce the desired results whenever the functions run. As a result, if a side effect occurs erroneously during the function render process, it can easily be detected and traced in Development Mode due to visible inconsistencies in the program\u2019s output."),(0,i.yg)("h3",{id:"detecting-legacy-context-api"},"Detecting Legacy Context API"),(0,i.yg)("p",null,"StrictMode now highlights the use of the old Context API, prompting the user to upgrade to a higher version, as the Legacy Context API will be discontinued in future React releases."),(0,i.yg)("h3",{id:"ensuring-a-reusable-state"},"Ensuring a reusable state"),(0,i.yg)("p",null,"In future versions, the React Strict Mode aims to prevent state loss caused by component mounts and dismounts. This feature improves performance by retaining and restoring application states when dismounted components are mounted back into the component tree."),(0,i.yg)("h2",{id:"cool-features-of-react-strict-mode-you-should-know-about"},"Cool Features of React Strict Mode You Should Know About"),(0,i.yg)("p",null,"Some other features of React Strict Mode that you might be helpful are the following, which help you to write cleaner and more performant code:"),(0,i.yg)("h4",{id:"warning-about-legacy-string-ref-api-usage-1"},"Warning About Legacy String Ref API Usage"),(0,i.yg)("p",null,"Using string refs is not a great practice within React. Strict Mode will warn you about them and suggest using callback refs or ",(0,i.yg)("inlineCode",{parentName:"p"},"React.createRef")," instead."),(0,i.yg)("h4",{id:"deprecated-finddomnode-usage-warning"},"Deprecated ",(0,i.yg)("inlineCode",{parentName:"h4"},"findDOMNode")," Usage Warning"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"findDOMNode")," method is also now deprecated. React Strict Mode will now raise warnings when you are using this and will let you know what to use instead."),(0,i.yg)("h4",{id:"detecting-unexpected-side-effects-1"},"Detecting Unexpected Side Effects"),(0,i.yg)("p",null,"React Strict Mode runs some functions twice, specifically in development mode, thereby bringing to your attention those side effects that could slip by you during a normal cycle. This way, it makes sure that your functions are pure and reliable."),(0,i.yg)("h4",{id:"detecting-legacy-context-api-1"},"Detecting Legacy Context API"),(0,i.yg)("p",null,"The old Context API will be warning and suggesting your project update to use the newer version of the Context API, which is more stable and easier to use than before."),(0,i.yg)("h4",{id:"ensuring-reusable-state"},"Ensuring Reusable State"),(0,i.yg)("p",null,"Strict Mode tries to ensure that state isn't lost when components are unmounted and then remounted\u2014meaning your components can keep their state across mounts, making your app more efficient."),(0,i.yg)("p",null,"These features are very useful in improving your development workflow and catching any prospective issues as early as possible. If you have not yet enabled React Strict Mode, I strongly advise trying it out."),(0,i.yg)("p",null,"##\xa0Integrating React Strict Mode with Other Tools"),(0,i.yg)("p",null,"I would like to share some ideas with you regarding combining React Strict Mode with tools that can be used in your projects, thereby enhancing your development workflow and helping you catch more issues early."),(0,i.yg)("h3",{id:"eslint"},"ESLint"),(0,i.yg)("p",null,"ESLint is a tool to find and fix problems in your JavaScript code. For example, you could add rules into your ESLint configuration to enforce best practices that are aligned with React Strict Mode."),(0,i.yg)("p",null,"Add rules such as ",(0,i.yg)("inlineCode",{parentName:"p"},"react/no-deprecated")," to warn you about using deprecated lifecycle methods. This is meant to be a supplement to the warnings you'll get from React Strict Mode."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["eslint:recommended", "plugin:react/recommended"],\n  "plugins": ["react"],\n  "rules": {\n    "react/no-deprecated": "warn", // Warn about deprecated lifecycle methods\n    "react/no-direct-mutation-state": "error" // Prevent direct state mutation\n  },\n  "settings": {\n    "react": {\n      "version": "detect"\n    }\n  }\n}\n')),(0,i.yg)("h3",{id:"prettier"},"Prettier"),(0,i.yg)("p",null,"Setup Prettier is a code formatter that enforces code style consistently without arguing what it looks like. It works pretty easily in concert with ESLint so that you never have to worry about keeping your code in line with best practices.\nExample Configure Prettier in your project by installing it and configuring it to your ESLint. So your code not only looks correct but is right according to the best practices to do with React."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "eslint:recommended",\n    "plugin:react/recommended",\n    "plugin:prettier/recommended"\n  ],\n  "plugins": ["react", "prettier"],\n  "rules": {\n    "prettier/prettier": "error", // Enforce Prettier formatting\n    "react/no-deprecated": "warn"\n  },\n  "settings": {\n    "react": {\n      "version": "detect"\n    }\n  }\n}\n')),(0,i.yg)("h3",{id:"jest"},"Jest"),(0,i.yg)("p",null,"Setup Jest is a JavaScript testing framework. You will run your tests in an environment with a similar setup to React Strict Mode and catch more potential issues earlier in the development process.\nExample Set up your Jest environment to use React Strict Mode. This way, you can catch warnings and errors related to strict mode when tests are run."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],\n  testEnvironment: "jsdom",\n};\n\n// setupTests.js\nimport React from "react";\nimport { render } from "@testing-library/react";\n\nconst AllTheProviders = ({ children }) => {\n  return <React.StrictMode>{children}</React.StrictMode>;\n};\n\nconst customRender = (ui, options) =>\n  render(ui, { wrapper: AllTheProviders, ...options });\n\nexport * from "@testing-library/react";\nexport { customRender as render };\n')),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In this article, you learned about the React Strict Mode, its similarities to the JavaScript \u201cuse strict\u201d expression, and the enormous benefits and features of the React Strict Mode."))}m.isMDXComponent=!0}}]);