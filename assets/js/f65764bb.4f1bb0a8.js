"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4925],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var o=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return t?o.createElement(d,r(r({ref:n},c),{},{components:t})):o.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});t(37953);var o=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",slug:"mantine-ui-react",authors:"marvel_ken",tags:["mantine","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/mantine-ui-react",source:"@site/blog/2023-11-11-mantine-ui.md",title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",date:"2023-11-11T00:00:00.000Z",formattedDate:"November 11, 2023",tags:[{label:"mantine",permalink:"/blog/tags/mantine"},{label:"react",permalink:"/blog/tags/react"}],readingTime:12.935,hasTruncateMarker:!1,authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],frontMatter:{title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",slug:"mantine-ui-react",authors:"marvel_ken",tags:["mantine","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on kubectl describe",permalink:"/blog/kubectl-describe-pod"},nextItem:{title:"Error Boundaries in React -  Handling Errors Gracefully",permalink:"/blog/react-error-boundaries"},relatedPosts:[{title:"React Admin Panel Tutorial with Chakra UI and Strapi",description:"We'll build a React admin tutorial app with Refine",permalink:"/blog/react-admin-tutorial",formattedDate:"March 3, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:27.285,date:"2023-03-03T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"July 17, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.235,date:"2024-07-17T00:00:00.000Z"},{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"October 6, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.97,date:"2023-10-06T00:00:00.000Z"}],authorPosts:[{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",permalink:"/blog/react-query-guide",formattedDate:"July 4, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:9.735,date:"2023-07-04T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Setting Up Mantine UI",id:"setting-up-mantine-ui",level:2},{value:"Mantine UI Hooks",id:"mantine-ui-hooks",level:2},{value:"Why Mantine UI?",id:"why-mantine-ui",level:2},{value:"Mantine UI Components",id:"mantine-ui-components",level:2},{value:"Exploring the Use Case of Mantine Component",id:"exploring-the-use-case-of-mantine-component",level:2}],u={toc:m},g="wrapper";function d(e){var{components:n}=e,t=r(e,["components"]);return(0,o.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://mantine.dev"},"Mantine")," is a lightweight and easy-to-use library that provides a wide range of components and hooks for building high-performance web applications. It is built on top of React and TypeScript, making it a great choice for building modern web applications."),(0,o.yg)("p",null,"Steps we'll take in this article: -",(0,o.yg)("a",{parentName:"p",href:"#setting-up-mantine-ui"},"Setting Up Mantine UI")," -",(0,o.yg)("a",{parentName:"p",href:"#mantine-ui-hooks"},"Mantine UI Hooks")," -",(0,o.yg)("a",{parentName:"p",href:"#why-mantine-ui"},"Why Mantine UI?")," -",(0,o.yg)("a",{parentName:"p",href:"#mantine-ui-components"},"Mantine UI Components")," -",(0,o.yg)("a",{parentName:"p",href:"#exploring-the-use-case-of-mantine-component"},"Exploring the Use Case of Mantine Component")),(0,o.yg)("h2",{id:"setting-up-mantine-ui"},"Setting Up Mantine UI"),(0,o.yg)("p",null,"Mantine can be used with React,Refine, Next, Vite, Remix, and Gatsby."),(0,o.yg)("p",null,"In this article, we will be using Next. To install Mantine in a Next application follow the detailed steps below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npx create-next-app@latest --typescript\n")),(0,o.yg)("p",null,"Mantine has a list of packages that can be used in your project this is what they look like:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/1.png",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("p",null,"By selecting anyone you could add them to the installation process:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm install @mantine/core @mantine/hooks\n")),(0,o.yg)("p",null,"Now let's setup MantineProvider in our application:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Set up MantineProvider")),(0,o.yg)("p",null,"In your Next.js application, you'll want to wrap your entire app with the ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineProvider")," component. You can do this by creating a ",(0,o.yg)("inlineCode",{parentName:"p"},"_app.js")," file in your ",(0,o.yg)("inlineCode",{parentName:"p"},"pages")," directory if it doesn't already exist, and then import ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineProvider")," and wrap your ",(0,o.yg)("inlineCode",{parentName:"p"},"Component")," with it. Here's an example of what your ",(0,o.yg)("inlineCode",{parentName:"p"},"_app.js")," file might look like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { MantineProvider } from "@mantine/core";\nimport "../styles/globals.css"; // Import your global styles here\n\nfunction MyApp({ Component, pageProps }) {\n  return (\n    <MantineProvider>\n      <Component {...pageProps} />\n    </MantineProvider>\n  );\n}\n\nexport default MyApp;\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Start Using Mantine Components")),(0,o.yg)("p",null,"You can now start using Mantine components in your Next.js application. For example, create a new component in the ",(0,o.yg)("inlineCode",{parentName:"p"},"components")," directory and use Mantine components inside it:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/MyComponent"',title:'"components/MyComponent"'},'import React from "react";\nimport { Button } from "@mantine/core";\n\nfunction MyComponent() {\n  return <Button>Hello, Mantine!</Button>;\n}\n\nexport default MyComponent;\n')),(0,o.yg)("p",null,"Then, import and use ",(0,o.yg)("inlineCode",{parentName:"p"},"MyComponent")," in your pages:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/index"',title:'"pages/index"'},'import React from "react";\nimport MyComponent from "../components/MyComponent";\n\nfunction Home() {\n  return (\n    <div>\n      <h1>Welcome to My Next.js App with Mantine!</h1>\n      <MyComponent />\n    </div>\n  );\n}\n\nexport default Home;\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Run Your Next.js Application")),(0,o.yg)("p",null,"Finally, run your Next.js application to see the Mantine components in action:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm run dev\n")),(0,o.yg)("p",null,"Your Next.js application with Mantine is now set up and ready to go! You can continue to explore Mantine's Hooks and components and integrate them into your project as needed"),(0,o.yg)("h2",{id:"mantine-ui-hooks"},"Mantine UI Hooks"),(0,o.yg)("p",null,"Hooks were introduced to change the way React components are built as they are meant to simplify component logic. They allow you to use state and other React features in functional components without writing a class. This makes the code cleaner and easier to understand."),(0,o.yg)("p",null,"With hooks, the logic can be reused (like fetching data or subscribing to external events) can be encapsulated in custom hooks. These custom hooks can be reused across different components and even different projects, promoting reusability."),(0,o.yg)("p",null,"Mantine as a React component Library utilizes custom hooks to manage state, manipulate the DOM, and handle design-related functionalities. These custom hooks are designed to simplify complex tasks, such as managing form state, handling user interactions, managing modals, and more."),(0,o.yg)("p",null,"Let\u2019s explore a few of these hooks;"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The useClipboard()")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useClipboard")," hook is a custom hook worth of mention. This hook simplifies working with the clipboard by providing an easy-to-use interface. It accepts an options argument, which defines the timeout duration (in milliseconds) for the copied status. If the ",(0,o.yg)("inlineCode",{parentName:"p"},"copy")," function is called within the specified timeout, the ",(0,o.yg)("inlineCode",{parentName:"p"},"copied")," value will be ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", indicating that the copy operation was successful within that timeframe."),(0,o.yg)("p",null,"Here's the TypeScript definition of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useClipboard")," hook for reference:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"function useClipboard(options: { timeout: number } = { timeout: 2000 }): {\n  copy: (valueToCopy: any) => void;\n  reset: () => void;\n  error: Error;\n  copied: boolean;\n};\n")),(0,o.yg)("p",null,"Here's a breakdown of the properties returned by the ",(0,o.yg)("inlineCode",{parentName:"p"},"useClipboard()")," hook:\n",(0,o.yg)("inlineCode",{parentName:"p"},"copy: (valueToCopy: any) => void"),": This is a function that you can call with the value you want to copy to the clipboard. For example, if you want to copy a string, you would call ",(0,o.yg)("inlineCode",{parentName:"p"},"copy('text to copy')"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"reset: () => void"),": This function clears the timeout and resets the ",(0,o.yg)("inlineCode",{parentName:"p"},"copied")," value. You can use this function if you want to reset the copied status manually."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"error: Error"),": This property contains an ",(0,o.yg)("inlineCode",{parentName:"p"},"Error")," object if something goes wrong during the copying process. For example, if the browser does not support the clipboard API or if there are other issues, the ",(0,o.yg)("inlineCode",{parentName:"p"},"error")," property will be populated with an error object."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"copied: boolean"),": This property is a boolean value that indicates whether the ",(0,o.yg)("inlineCode",{parentName:"p"},"copy")," function was called less than ",(0,o.yg)("inlineCode",{parentName:"p"},"options.timeout")," milliseconds ago. If it was, ",(0,o.yg)("inlineCode",{parentName:"p"},"copied")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"; otherwise, it is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),'. This property is useful for showing feedback to the user, such as displaying a message like "Copied!" after a successful copy operation.'),(0,o.yg)("p",null,"Let\u2019s use this hook to simplify clipboard interactions in our React application:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useClipboard } from "@mantine/hooks";\n\nimport FileCopyIcon from "@mui/icons-material/FileCopy";\n\nconst App: React.FC = () => {\n  const items = ["https://refine.dev/blog/"];\n  const clipboard = useClipboard({ timeout: 1500 });\n  return (\n    <div>\n      <ul>\n        {items.map((description, index) => (\n          <li key={index}>\n            <button onClick={() => clipboard.copy(description)}>\n              {clipboard.copied ? (\n                <span>Copied! </span>\n              ) : (\n                <span>Copy Link </span>\n              )}\n              <FileCopyIcon />\n            </button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,o.yg)("p",null,"let's take a look at what it looks like:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/2-min.gif",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"UseWindowScroll()")),(0,o.yg)("p",null,"Building a web page involves making it as interactive as possible and making ease of use a top priority. If you are conversant with blogs, especially those bulky ones, where you must have scrolled a lot and you just want to go back to the top of the web page, scrolling backup becomes stressful."),(0,o.yg)("p",null,"As developers, we prioritize enhancing user experience, and this is where the ",(0,o.yg)("inlineCode",{parentName:"p"},"useWindowScroll()")," hook comes into play. This hook seamlessly interacts with the DOM, providing access to the current scroll position and enabling smooth scrolling to a specific location on the page."),(0,o.yg)("p",null,"This is what the actual implementation looks like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useWindowScroll } from "@mantine/hooks";\nimport { Button, Text, Group } from "@mantine/core";\n\nexport default function App() {\n  const [scroll, scrollTo] = useWindowScroll();\n\n  return (\n    <Group className="center">\n      <Button onClick={() => scrollTo({ y: document.body.scrollHeight })}>\n        Scroll to Bottom\n      </Button>\n      <Text>//Long Text</Text>\n      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>\n    </Group>\n  );\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use-Disclosure")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useDisclosure()")," hook is our last tool on the list and it deserves recognition. ",(0,o.yg)("inlineCode",{parentName:"p"},"useDisclosure()")," simplifies managing boolean state in React applications. It's particularly useful for handling components like ",(0,o.yg)("a",{parentName:"p",href:"https://mantine.dev/others/modals/"},"modals"),", popovers, and other UI elements that need to be conditionally displayed or hidden based on user interactions."),(0,o.yg)("p",null,"Open, Close, and Toggle Handlers hooks provide intuitive ",(0,o.yg)("inlineCode",{parentName:"p"},"open()"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"close()"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"toggle()")," handlers. These functions abstract away the complexities of managing state transitions, making it easier to control when a component should be displayed or hidden."),(0,o.yg)("p",null,"The hook accepts optional ",(0,o.yg)("inlineCode",{parentName:"p"},"onOpen")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"onClose")," callbacks. These callbacks enable you to execute specific actions or logic when the component is opened or closed. For instance, you could perform additional tasks or trigger animations when a modal opens or closes."),(0,o.yg)("p",null,"Let\u2019s look at how this is implemented:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useDisclosure } from "@mantine/hooks";\nimport { Modal, Button, Group, Col, Container } from "@mantine/core";\n\nexport default function App() {\n  const [opened, { open, close }] = useDisclosure(false);\n\n  return (\n    <div>\n      <Modal\n        opened={opened}\n        onClose={close}\n        title="We use cookies"\n        centered\n        size="sm"\n      >\n        <p>\n          This website uses cookies to ensure you get the best experience on our\n          website.\n        </p>\n        <Container mt={4}>\n          <Group position="right">\n            <Button color="gray" onClick={close}>\n              Decline\n            </Button>\n            <Button variant="filled" color="blue" onClick={close}>\n              Accept\n            </Button>\n          </Group>\n        </Container>\n      </Modal>\n      <Button onClick={open}>Click here to advance</Button>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"let's take a look at what it looks like:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/3-min.gif",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"why-mantine-ui"},"Why Mantine UI?"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Browser Support and Compatibility")),(0,o.yg)("p",null,"Mantine dedicatedly ensures compatibility and functionality across major browsers, including Chrome, Safari, Firefox, Edge, Safari for iOS, and Chrome for Android. Components and hooks are tested and optimized for Chromium browsers (version 108+), Firefox (version 101+), and Safari (version 15.4+)."),(0,o.yg)("p",null,"While older versions like IE are unsupported, Mantine seamlessly integrates with React versions, ensuring broad compatibility. For older browser support, users can refer to ",(0,o.yg)("a",{parentName:"p",href:"https://mantine.dev/about/"},"specific component documentation")," and implement necessary polyfills."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Reliable Release Cycle and Community-Driven Development")),(0,o.yg)("p",null,"Mantine follows a clear plan when it's updated, making it stable and reliable. They make small improvements every month in minor updates, and bigger changes happen less often in major updates."),(0,o.yg)("p",null,"What's great is that many people help make Mantine better - over 300 contributors are part of this community effort! Mantine UI isn't just a library; it's a vibrant ecosystem where user experience meets innovation."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"User-Friendly Components")),(0,o.yg)("p",null,"Mantine provides a large range of user-friendly components that are very easy to implement. Whether you need buttons, forms, modals, or navigation elements, Mantine's components are developer-friendly, making the development process smooth and easy."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Performance Optimization")),(0,o.yg)("p",null,"Mantine\u2019s ",(0,o.yg)("a",{parentName:"p",href:"https://reactjsexample.com/a-lightweight-yet-customizable-context-menu-for-your-mantine-applications/"},"components are lightweight"),", ensuring fast loading times and smooth user interactions. This makes it an excellent choice for building high-performance web applications."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Customization and Theming")),(0,o.yg)("p",null,"Mantine offers extensive customization options. You can easily customize the appearance of components to match your brand identity. With theming support, you can create consistent and visually appealing designs across your entire application."),(0,o.yg)("h2",{id:"mantine-ui-components"},"Mantine UI Components"),(0,o.yg)("p",null,"Mantine as a UI library simplifies the development process with the use of inbuilt easy-to-use components. We will explore the core aspects of Mantine's UI components, providing an overview of the available components and diving into some of its flagship elements which are: ",(0,o.yg)("strong",{parentName:"p"},"Forms")," and ",(0,o.yg)("strong",{parentName:"p"},"Inputs"),", ",(0,o.yg)("strong",{parentName:"p"},"Navigation"),", ",(0,o.yg)("strong",{parentName:"p"},"Notifications,")," ",(0,o.yg)("strong",{parentName:"p"},"Modals"),", and ",(0,o.yg)("strong",{parentName:"p"},"Theming"),"."),(0,o.yg)("p",null,"Mantine offers a wide array of components that cater to various UI requirements. Some of the core components include:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Forms and Inputs:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- **Text Input:** Allows users to input text data.\n- **Textarea:** Provides a multi-line text input field.\n- **Select:** A dropdown menu for selecting options.\n- **Radio:** A set of radio buttons for single-choice selection.\n- **Checkbox:** Checkboxes for multiple-choice selection.\n- **Form:** A container for grouping and handling form elements.\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Navigation:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- **Tabs:** Horizontal navigation tabs for switching between content.\n- **Breadcrumbs:** Indicates the current page's location within the website hierarchy.\n- **Menu:** A dropdown menu for navigation or actions.\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Notifications and Modals:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- **Notifications:** Provides feedback messages to users.\n- **Modals:** Dialog boxes or pop-ups for interactive user input or messages.\n- **Popover:** A small overlay for additional information or actions.\n- **Tooltip:** Displays additional information when hovering over an element.\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Data Display:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- **Avatar:** Displays profile pictures or avatars.\n- **Badge:** Small containers to highlight certain information.\n- **Card:** Container component for displaying various types of content.\n- **Table:** Displays data in a tabular format.\n- **List:** Renders a list of items.\n- **Typography:** Includes various text styles, headings, and paragraphs.\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Utilities:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- **Col:** Defines a column layout within a grid.\n- **Row:** Defines a row layout within a grid.\n- **Container:** A responsive container for managing layout width.\n- **Image:** Displays images with various customization options.\n")),(0,o.yg)("h2",{id:"exploring-the-use-case-of-mantine-component"},"Exploring the Use Case of Mantine Component"),(0,o.yg)("p",null,"In this section, we will be looking at the various implementations of the Mantine components and how they can be utilized in our projects."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Forms and Inputs")),(0,o.yg)("p",null,"Mantine's ",(0,o.yg)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},"form")," components are designed for ease of use and customization. For instance, the ",(0,o.yg)("a",{parentName:"p",href:"https://mantine.dev/core/input/"},"TextInput")," component allows developers to create input fields with various styles, validations, and placeholder texts. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Form")," component simplifies form management, elegantly handling form submissions, validations, and error messages."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";\nimport { useForm } from "@mantine/form";\n\nfunction App() {\n  const form = useForm({\n    initialValues: {\n      email: "",\n      termsOfService: false,\n    },\n    validate: {\n      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : "Invalid email"),\n    },\n  });\n\n  return (\n    <Box maw={340} mx="auto">\n      <form onSubmit={form.onSubmit((values) => console.log(values))}>\n        <TextInput\n          withAsterisk\n          label="Email"\n          placeholder="please provide your valid @email.com"\n          {...form.getInputProps("email")}\n        />\n        <Checkbox\n          mt="md"\n          label="I agree to read Refine\'s Blog always"\n          {...form.getInputProps("termsOfService", { type: "checkbox" })}\n        />\n        <Group justify="flex-end" mt="md">\n          <Button type="submit">Submit</Button>\n        </Group>\n      </form>\n    </Box>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/4.png",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Navigation:"),"\nMantine offers various navigation components, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"Menu"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Tab"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"Pagination"),", enhancing the user experience. Tabs enable organized content switching, while Paginations Display active pages and navigate between multiple pages. Menus and Dropdowns simplify complex navigational hierarchies."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Tabs.tsx"',title:'"Tabs.tsx"'},'import { Tabs } from "@mantine/core";\n\nfunction App() {\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first" color="blue">\n          Refine Blog\n        </Tabs.Tab>\n        <Tabs.Tab value="second" color="red">\n          Refine Pricing\n        </Tabs.Tab>\n        <Tabs.Tab value="third" color="green">\n          Refine Community\n        </Tabs.Tab>\n        <Tabs.Tab value="fourth" color="yellow">\n          Refine Open Source\n        </Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("br",null),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/tab.gif",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Pagination } from "@mantine/core";\n\nexport default function App() {\n  return <Pagination total={36} />;\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Menu.tsx"',title:'"Menu.tsx"'},'import { Menu, Button, Text, rem } from "@mantine/core";\nimport {\n  IconSettings,\n  IconSearch,\n  IconPhoto,\n  IconMessageCircle,\n  IconTrash,\n  IconArrowsLeftRight,\n} from "@tabler/icons-react";\n\nexport default function App() {\n  return (\n    <Menu shadow="md" width={200}>\n      <Menu.Target>\n        <Button>Main menu</Button>\n      </Menu.Target>\n      <Menu.Dropdown>\n        <Menu.Label>Application</Menu.Label>\n        <Menu.Item\n          leftSection={\n            <IconSettings style={{ width: rem(14), height: rem(14) }} />\n          }\n        >\n          blog\n        </Menu.Item>\n        <Menu.Item\n          leftSection={\n            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />\n          }\n        >\n          Pricing\n        </Menu.Item>\n        <Menu.Item\n          color="red"\n          leftSection={\n            <IconPhoto style={{ width: rem(14), height: rem(14) }} />\n          }\n        >\n          Github\n        </Menu.Item>\n        <Menu.Item\n          leftSection={\n            <IconSearch style={{ width: rem(14), height: rem(14) }} />\n          }\n        >\n          Search\n        </Menu.Item>\n        <Menu.Divider />\n      </Menu.Dropdown>\n    </Menu>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/7-min.gif",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Notifications"),"\nMantine's notifications and modals provide user feedback and interactive dialogues. Notifications offer informative or alerting messages to users, while modals and popovers facilitate interactive tasks, ensuring a seamless user experience. Let\u2019s look at how this is implemented below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Notifications.tsx"',title:'"Notifications.tsx"'},'import { IconX, IconCheck } from "@tabler/icons-react";\nimport { Notification, rem } from "@mantine/core";\n\nfunction App() {\n  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;\n  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;\n\n  return (\n    <>\n      <Notification icon={xIcon} color="blue" title="Hey!">\n        Got to Refine immediately\n      </Notification>\n      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">\n        Everything should be fine!!\n      </Notification>\n    </>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/8.png",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useDisclosure } from "@mantine/hooks";\nimport { Modal, Button } from "@mantine/core";\nimport { TextInput, Checkbox, Group, Box } from "@mantine/core";\nimport { useForm } from "@mantine/form";\n\nexport default function App() {\n  const [opened, { open, close }] = useDisclosure(false);\n\n  const form = useForm({\n    initialValues: {\n      email: "",\n      termsOfService: false,\n    },\n    validate: {\n      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : "Invalid email"),\n    },\n  });\n\n  return (\n    <>\n      <Modal opened={opened} onClose={close} title="Refine form" centered>\n        <Box maw={340} mx="auto">\n          <form onSubmit={form.onSubmit((values) => console.log(values))}>\n            <TextInput\n              withAsterisk\n              label="Email"\n              placeholder="please provide your valid @email.com"\n              {...form.getInputProps("email")}\n            />\n            <Checkbox\n              mt="md"\n              label="I agree to read Refine\'s Blog always"\n              {...form.getInputProps("termsOfService", { type: "checkbox" })}\n            />\n            <Group>\n              <Button className="BTN" onClick={close} type="submit">\n                Submit\n              </Button>\n            </Group>\n          </form>\n        </Box>\n      </Modal>\n      <Button onClick={open}>Open centered Modal</Button>\n    </>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-11-mantine-ui/9-min.gif",alt:"mojo framework"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Theming and Customization"),"\nMantine allows extensive theming and customization, allowing developers to align the UI with the brand identity. The ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineProvider")," component wraps the entire application, providing a context for theme customization. Themes include color schemes, typography, spacing, and other design elements, enabling a consistent look and feel across components."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { MantineProvider, Container, TextInput } from "@mantine/core";\n\nfunction App() {\n  return (\n    <MantineProvider theme={{ colorScheme: "dark" }}>\n      <Container>\n        <TextInput label="Dark Mode Input" placeholder="Enter text" />\n      </Container>\n    </MantineProvider>\n  );\n}\n')))}d.isMDXComponent=!0}}]);