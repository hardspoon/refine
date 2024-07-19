"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16342],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=a,d=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>h});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",slug:"material-ui-checkbox-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/material-ui-checkbox-component",source:"@site/blog/2022-12-15-mui-checkbox.md",title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",date:"2022-12-15T00:00:00.000Z",formattedDate:"December 15, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:9.47,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",slug:"material-ui-checkbox-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/social.png",hide_table_of_contents:!1},prevItem:{title:"rem vs em - Everything you need to know",permalink:"/blog/rem-vs-em"},nextItem:{title:"Svelte vs React Comparison",permalink:"/blog/svelte-vs-react"},relatedPosts:[{title:"Building a React Admin Panel with PrimeReact and Refine",description:"We'll build a simple React admin Panel using Refine and PrimeReact.",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine",formattedDate:"July 26, 2023",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:42.665,date:"2023-07-26T00:00:00.000Z"},{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",permalink:"/blog/react-lazy-loading",formattedDate:"July 12, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.045,date:"2024-07-12T00:00:00.000Z"},{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"May 22, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.435,date:"2024-05-22T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"May 22, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.435,date:"2024-05-22T00:00:00.000Z"},{title:"Material UI Icons in React",description:"A complete guide on using Material UI Icons in a React app",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.5,date:"2022-08-24T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.83,date:"2024-07-03T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Checkbox",id:"getting-started-with-material-ui-checkbox",level:2},{value:"Customizing your Material UI Checkbox",id:"customizing-your-material-ui-checkbox",level:2},{value:"Adding Labels",id:"adding-labels",level:3},{value:"Controlling the Checkbox Size",id:"controlling-the-checkbox-size",level:3},{value:"Controlling the Checkbox Color",id:"controlling-the-checkbox-color",level:3},{value:"Label Placement",id:"label-placement",level:3},{value:"Checkbox Icons",id:"checkbox-icons",level:3},{value:"Other handy features",id:"other-handy-features",level:2},{value:"FormGroup",id:"formgroup",level:3},{value:"Indeterminate",id:"indeterminate",level:3},{value:"When to use the Material UI Checkbox",id:"when-to-use-the-material-ui-checkbox",level:2},{value:"Checkboxes vs Radio buttons",id:"checkboxes-vs-radio-buttons",level:3},{value:"Checkboxes vs Switches",id:"checkboxes-vs-switches",level:3},{value:"Material UI Checkbox Accessibility",id:"material-ui-checkbox-accessibility",level:2}],u=(p="Label",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var p;const d={toc:h},g="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Material UI offers a wide range of component and utilities that empowers developers with the appropriate tools to create more responsive web designs and bolster the UX of their apps. A checkbox is a small box that, when selected by the user, indicates that a specific feature or option has been enabled. Material UI provides this valuable component on a platter and makes them customizable to apply to your project fittingly. This article will deeply traverse the Material UI Checkbox component, investigate its processes and highlight its syntax application. We will also explore a potential use case in a real-world application."),(0,o.yg)("p",null,"Steps we'll cover:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#getting-started-with-material-ui-checkbox"},"Getting started with Material UI Checkbox")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#customizing-your-material-ui-checkbox"},"Customizing your Material UI Checkbox"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#adding-labels"},"Adding Labels")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#controlling-the-checkbox-size"},"Controlling the Checkbox Size")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#controlling-the-checkbox-color"},"Controlling the Checkbox Color")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#label-placement"},"Label Placement")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#checkbox-icons"},"Checkbox Icons")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#other-handy-features"},"Other handy features"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#formgroup"},"FormGroup")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#indeterminate"},"Indeterminate")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#when-to-use-the-mui-checkbox"},"When to use the Material UI Checkbox"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#checkboxes-vs-radio-buttons"},"Checkboxes vs Radio buttons")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#checkboxes-vs-switches"},"Checkboxes vs Switches")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#material-ui-checkbox-accessibility"},"Material UI Checkbox Accessibility"))),(0,o.yg)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,o.yg)("p",null,"Material UI is a powerful and efficient tool that simplifies web design by providing ready-made components and technically available utilities. It is a design language created by Google in 2014. It can be used with all JavaScript frameworks and libraries, such as AngularJS and VueJS, to make the application more amazing and responsive. Material UI is one of the top React User Interface libraries, with over 35,000 stars on GitHub. Many developers now structure their projects with Material UI because it simplifies and improves web design."),(0,o.yg)("p",null,"Material UI comes with several component categories, including\nLayout, Navigation, Feedback, Data display components, Input components, e.t.c."),(0,o.yg)("p",null,"The Material UI Checkbox is a striking example of the Input components."),(0,o.yg)("h2",{id:"getting-started-with-material-ui-checkbox"},"Getting started with Material UI Checkbox"),(0,o.yg)("p",null,"Material UI Checkboxes allow you to choose an option out of a list of options to represent the response(s) to a question or a preferential choice(s) on a particular subject. Checkboxes can be used to toggle between options. To save space, use checkboxes instead of on/off switches when multiple options exist."),(0,o.yg)("p",null,"Below is a simple illustration of how you can typically import and use the Material UI Checkbox in your next project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function Checkboxes() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Checkbox defaultChecked />\n      <Checkbox />\n      <Checkbox disabled />\n      <Checkbox disabled checked />\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-1.png",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"customizing-your-material-ui-checkbox"},"Customizing your Material UI Checkbox"),(0,o.yg)("p",null,"The Material UI Checkbox showcases the dynamism of the Material UI framework because it offers several props and utilities with which you can easily customize it to fit your web application. Below are some ways to use the Material UI Checkbox:"),(0,o.yg)("h3",{id:"adding-labels"},"Adding Labels"),(0,o.yg)("p",null,"The FormControlLabel component allows you to give the Checkbox a label."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport FormGroup from "@mui/material/FormGroup";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function CheckboxLabels() {\n  return (\n    <FormGroup>\n      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />\n      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />\n    </FormGroup>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-2.png",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"controlling-the-checkbox-size"},"Controlling the Checkbox Size"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"size")," prop denotes the size of the component. You can customize the size of your Material UI Checkbox with the ",(0,o.yg)("inlineCode",{parentName:"p"},"size")," prop. Here\u2019s how:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function SizeCheckboxes() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Checkbox defaultChecked size="small" />\n      <Checkbox defaultChecked />\n      <Checkbox\n        defaultChecked\n        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}\n      />\n    </div>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-3.png",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"controlling-the-checkbox-color"},"Controlling the Checkbox Color"),(0,o.yg)("p",null,"You can customize the color of your Material UI Checkbox with the ",(0,o.yg)("inlineCode",{parentName:"p"},"color")," prop like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function BasicButtonGroup() {\n  return (\n    <div>\n      <div\n        className="head"\n        style={{\n          width: "fit-content",\n          margin: "auto",\n        }}\n      >\n        <h1\n          style={{\n            color: "green",\n          }}\n        >\n          Checkbox colors\n        </h1>\n        <strong>React Material UI Checkbox API</strong>\n        <br />\n        <br />\n      </div>\n      <div\n        style={{\n          width: "fit-content",\n          margin: "auto",\n        }}\n      >\n        <Checkbox color="secondary" />\n        <Checkbox color="success" />\n        <Checkbox color="default" />\n        <Checkbox color="primary" />\n      </div>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-4.png",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"label-placement"},"Label Placement"),(0,o.yg)("p",null,"You can customize your Checkbox labels to be positioned on the top, bottom, start or end of the checkbox."),(0,o.yg)("p",null,"Check this out:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Checkbox from "@mui/material/Checkbox";\nimport FormGroup from "@mui/material/FormGroup";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport FormControl from "@mui/material/FormControl";\nimport FormLabel from "@mui/material/FormLabel";\n\nexport default function FormControlLabelPosition() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Label placement</FormLabel>\n      <FormGroup aria-label="position" row>\n        <FormControlLabel\n          value="top"\n          control={<Checkbox />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Checkbox />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Checkbox />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Checkbox />}\n          label="End"\n          labelPlacement="end"\n        />\n      </FormGroup>\n    </FormControl>\n  );\n}\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-5.gif",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"checkbox-icons"},"Checkbox Icons"),(0,o.yg)("p",null,"The material UI Checkbox component can be represented in the form of icons."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Checkbox from "@mui/material/Checkbox";\nimport FavoriteBorder from "@mui/icons-material/FavoriteBorder";\nimport Favorite from "@mui/icons-material/Favorite";\nimport RecommendBorderIcon from "@mui/icons-material/Recommend";\nimport RecommendIcon from "@mui/icons-material/Recommend";\n\nexport default function IconCheckboxes() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />\n      <Checkbox\n        icon={<RecommendBorderIcon />}\n        checkedIcon={<RecommendIcon />}\n      />\n    </div>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-6.gif",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"other-handy-features"},"Other handy features"),(0,o.yg)("h3",{id:"formgroup"},"FormGroup"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"FormGroup")," is a handy wrapper for grouping selection control components."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport FormLabel from "@mui/material/FormLabel";\nimport FormControl from "@mui/material/FormControl";\nimport FormGroup from "@mui/material/FormGroup";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport FormHelperText from "@mui/material/FormHelperText";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function CheckboxesGroup() {\n  const [state, setState] = React.useState({\n    mathematics: true,\n    physics: false,\n    chemistry: false,\n  });\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setState({\n      ...state,\n      [event.target.name]: event.target.checked,\n    });\n  };\n\n  const { mathematics, physics, chemistry } = state;\n  const error = [mathematics, physics, chemistry].filter((v) => v).length !== 2;\n\n  return (\n    <div style={{ margin: "25%" }}>\n      <Box sx={{ display: "flex" }}>\n        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">\n          <FormLabel component="legend">Choose Subject</FormLabel>\n          <FormGroup>\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={mathematics}\n                  onChange={handleChange}\n                  name="mathematics"\n                />\n              }\n              label="mathematics"\n            />\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={physics}\n                  onChange={handleChange}\n                  name="physics"\n                />\n              }\n              label="physics"\n            />\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={chemistry}\n                  onChange={handleChange}\n                  name="chemistry"\n                />\n              }\n              label="chemistry"\n            />\n          </FormGroup>\n          <FormHelperText>Be careful</FormHelperText>\n        </FormControl>\n        <FormControl\n          required\n          error={error}\n          component="fieldset"\n          sx={{ m: 3 }}\n          variant="standard"\n        >\n          <FormLabel component="legend">Pick two</FormLabel>\n          <FormGroup>\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={mathematics}\n                  onChange={handleChange}\n                  name="mathematics"\n                />\n              }\n              label="mathematics"\n            />\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={physics}\n                  onChange={handleChange}\n                  name="physics"\n                />\n              }\n              label="Physics"\n            />\n            <FormControlLabel\n              control={\n                <Checkbox\n                  checked={chemistry}\n                  onChange={handleChange}\n                  name="chemistry"\n                />\n              }\n              label="Chemistry"\n            />\n          </FormGroup>\n          <FormHelperText>choose correctly</FormHelperText>\n        </FormControl>\n      </Box>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"The code above displays a list of subjects for students ti choose from. The Material UI Checkboxes are wrapped and rendered with the ",(0,o.yg)("inlineCode",{parentName:"p"},"<FornGroup/>")," component."),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-7.gif",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"indeterminate"},"Indeterminate"),(0,o.yg)("p",null,"A checkbox can be in one of three states: checked, unchecked, or indeterminate. The ",(0,o.yg)("inlineCode",{parentName:"p"},"indeterminate")," prop determines whether the component is in an unknown state."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Checkbox from "@mui/material/Checkbox";\nimport FormControlLabel from "@mui/material/FormControlLabel";\n\nexport default function IndeterminateCheckbox() {\n  const [checked, setChecked] = React.useState([true, false]);\n\n  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setChecked([event.target.checked, event.target.checked]);\n  };\n\n  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setChecked([event.target.checked, checked[1]]);\n  };\n\n  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setChecked([checked[0], event.target.checked]);\n  };\n\n  const children = (\n    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>\n      <FormControlLabel\n        label="First Child"\n        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}\n      />\n      <FormControlLabel\n        label="Second Child"\n        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}\n      />\n    </Box>\n  );\n\n  return (\n    <div>\n      <FormControlLabel\n        label="Parent"\n        control={\n          <Checkbox\n            checked={checked[0] && checked[1]}\n            indeterminate={checked[0] !== checked[1]}\n            onChange={handleChange1}\n          />\n        }\n      />\n      {children}\n    </div>\n  );\n}\n')),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-8.gif",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("div",null,(0,o.yg)("a",{href:"https://discord.gg/refine"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.yg)("h2",{id:"when-to-use-the-material-ui-checkbox"},"When to use the Material UI Checkbox"),(0,o.yg)("h3",{id:"checkboxes-vs-radio-buttons"},"Checkboxes vs Radio buttons"),(0,o.yg)("p",null,"You may come to a point in your application's development where you need to set a list of options for users to choose from, and you may be unsure whether to use a Checkbox or a Radio button component to render this list. Well, this section will provide general UI guidelines on how to pick these components to match your application appropriately."),(0,o.yg)("p",null,"Radio buttons are useful when users must choose between two options that cannot both be true at the same time. In other words, clicking a non-selected radio button will deselect any other button in the list that the user previously selected.\nCheckboxes are more effective when users have the option of selecting two or more options. In other words, checking one checkbox in the list does not uncheck the others.\nA standalone checkbox represents a single option that the user can enable or disable."),(0,o.yg)("h3",{id:"checkboxes-vs-switches"},"Checkboxes vs Switches"),(0,o.yg)("p",null,"For better context, switches are toggle buttons that represent a physical switch, such as a light switch, that allows users to turn things on and off. Tapping a toggle switch is a two-step action that involves selection and execution. In contrast, a checkbox simply selects an option, and its execution usually necessitates using another control. When choosing between a checkbox and a toggle switch control, consider the usage context rather than the function."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use Checkboxes when:"),"\n",(0,o.yg)("strong",{parentName:"p"},"Use toggle switches when:"),"\nDefined settings require a confirmation action before displaying results.\nA setting requires an on/off or show/hide function to display the results.\nThe user has to perform additional steps for changes to become effective.\nThe user must take immediate actions that do not require review or confirmation.\nThe user must choose one or more options from a list of related items.\nThe user is switching between independent features or behaviors.\nThere is only one binary yes/no option.\nA single choice is required, and you want to provide two options for an on/off decision."),(0,o.yg)("p",null,"Building a Contact form UI with React and the Material UI Checkbox\nThe Material UI Checkbox can be incorporated into various aspects of a variety of web applications. For the sake of this article, we will explore a potential use case by building a simple contact form UI with the Material UI Checkbox as a distinct component."),(0,o.yg)("p",null,"Here\u2019s the code:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport FormGroup from "@mui/material/FormGroup";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport Checkbox from "@mui/material/Checkbox";\n\nexport default function TransitionsTooltips() {\n  return (\n    <section className="login">\n      <div className="loginContainer">\n        <label>Name</label>\n        <input type="text" autoFocus required />\n        <label>Email</label>\n        <input type="text" required />\n\n        <label>Comment or Message</label>\n        <textarea placeholder="Enter comment here"></textarea>\n\n        <h3 style={{ background: "none" }}>Stay connected</h3>\n        <FormGroup style={{ background: "none" }}>\n          <FormControlLabel\n            control={<Checkbox defaultChecked />}\n            label="Sign Up for our Newsletter"\n          />\n        </FormGroup>\n\n        <div className="btnContainer">\n          <button>Submit</button>\n        </div>\n      </div>\n    </section>\n  );\n}\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-15-mui-checkbox/mui-checkbox-9.gif",alt:"Material UI checkbox"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"material-ui-checkbox-accessibility"},"Material UI Checkbox Accessibility"),(0,o.yg)("p",null,"All form controls including Checkboxes, radio buttons and switches should typically have labels. In most cases, this is accomplished by utilizing the ",(0,o.yg)(u,{mdxType:"Label"}),(0,o.yg)("inlineCode",{parentName:"p"},"component. You can also add an attribute to the input component with the"),"inputProps",(0,o.yg)("inlineCode",{parentName:"p"},"prop. Some of these attributes include"),"aria-label",(0,o.yg)("inlineCode",{parentName:"p"},", "),"aria-labelledby",(0,o.yg)("inlineCode",{parentName:"p"},", and "),"title`."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'<Checkbox\n  value="checkedA"\n  inputProps={{\n    "aria-label": "Checkbox A",\n  }}\n/>\n')))}b.isMDXComponent=!0}}]);