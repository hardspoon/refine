"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43604],{58860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/javascript-ternary-operator",source:"@site/blog/2024-01-24-js-ternary.md",title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",date:"2024-01-24T00:00:00.000Z",formattedDate:"January 24, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.685,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},prevItem:{title:"TDD vs BDD - A Detailed Guide",permalink:"/blog/tdd-vs-bdd"},nextItem:{title:"gRPC vs REST - A Brief Comparison",permalink:"/blog/grpc-vs-rest"},relatedPosts:[{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",permalink:"/blog/temporal-date-api",formattedDate:"June 21, 2024",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:9.665,date:"2024-06-21T00:00:00.000Z"},{title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",permalink:"/blog/tdd-vs-bdd",formattedDate:"January 25, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:16.89,date:"2024-01-25T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"}],authorPosts:[{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"December 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.11,date:"2023-12-13T00:00:00.000Z"},{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"October 23, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.88,date:"2023-10-23T00:00:00.000Z"},{title:"The Anatomy of the Web Development in 2024",description:"This post depicts a general picture of where web development is headed in 2024 with a focus on the Node.js/React ecosystem - and provides an inside-out report on how Refine.js is starting to make an impact as a React-based meta-framework.",permalink:"/blog/web-development",formattedDate:"December 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.205,date:"2023-12-20T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript Ternary Operator ?",id:"what-is-javascript-ternary-operator-",level:2},{value:"How JS Ternary Operator Works",id:"how-js-ternary-operator-works",level:2},{value:"What are Truthy/Falsy Values ?",id:"what-are-truthyfalsy-values-",level:3},{value:"When to Use the JS Ternary Operator ?",id:"when-to-use-the-js-ternary-operator-",level:2},{value:"JavaScript Ternary Operator: A Shorthand for <code>if/else</code>",id:"javascript-ternary-operator-a-shorthand-for-ifelse",level:3},{value:"Using the JavaScript Ternary Operator to Test a Function&#39;s Truthiness",id:"using-the-javascript-ternary-operator-to-test-a-functions-truthiness",level:3},{value:"Handling Nullish Values with JS Ternary Operator",id:"handling-nullish-values-with-js-ternary-operator",level:3},{value:"JavaScript Ternary Operator: When The Return Value Rules",id:"javascript-ternary-operator-when-the-return-value-rules",level:3},{value:"Chaining Ternary Operators in JavaScript",id:"chaining-ternary-operators-in-javascript",level:3},{value:"JavaScript Ternary Operator Best Practices",id:"javascript-ternary-operator-best-practices",level:2},{value:"Summary",id:"summary",level:2}],h={toc:u},d="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"This article was last updated on January 24, 2024 to add more detailed information and implementation of JavaScript Ternary Operator"))),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"This post is about the Ternary Operator in JavaScript. We discuss what the ternary operator is and how it works. We go over some examples demonstrating when and why to use it and how it compares to other JavaScript control structures like ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"switch"),". We also learn about some of the best practices while using JS Ternary Operator."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-javascript-ternary-operator-"},"What is JavaScript Ternary Operator ?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-js-ternary-operator-works"},"How JS Ternary Operator Works"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-are-truthyfalsy-values-"},"What are Truthy/Falsy Values ?")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#when-to-use-the-js-ternary-operator-"},"When to Use the JS Ternary Operator ?"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#javascript-ternary-operator-a-shorthand-for-ifelse"},"JavaScript Ternary Operator: A Shorthand for ",(0,n.yg)("inlineCode",{parentName:"a"},"if/else"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#using-the-javascript-ternary-operator-to-test-a-functions-truthiness"},"Using the JavaScript Ternary Operator to Test a Function's Truthiness")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#handling-nullish-values-with-js-ternary-operator"},"Handling Nullish Values with JS Ternary Operator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#javascript-ternary-operator-when-the-return-value-rules"},"JavaScript Ternary Operator: When The Return Value Rules")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#chaining-ternary-operators-in-javascript"},"Chaining Ternary Operators in JavaScript")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#javascript-ternary-operator-best-practices"},"JavaScript Ternary Operator Best Practices"))),(0,n.yg)("h2",{id:"what-is-javascript-ternary-operator-"},"What is JavaScript Ternary Operator ?"),(0,n.yg)("p",null,"The Ternary Operator in JavaScript is a conditional control structure that checks for the return value of an expression and executes a block of code based on whether the value is truthy or falsy. It then returns the return value of the executed block."),(0,n.yg)("p",null,"The JavaScript Ternary Operator is also referred to as the Conditional Operator."),(0,n.yg)("h2",{id:"how-js-ternary-operator-works"},"How JS Ternary Operator Works"),(0,n.yg)("p",null,"The Ternary Operator in JavaScript is denoted by the question mark: ",(0,n.yg)("inlineCode",{parentName:"p"},"?"),". It is called so because it takes three operands:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The conditional expression that returns either ",(0,n.yg)("inlineCode",{parentName:"li"},"true")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"false")," based on a check that evaluates to either ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Truthy"},"truthy")," or ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"},"falsy"),"."),(0,n.yg)("li",{parentName:"ol"},"The block of code which should be executed if the conditional check returns ",(0,n.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,n.yg)("li",{parentName:"ol"},"The block that should run if it returns ",(0,n.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,n.yg)("p",null,"The syntax for the JavaScript Ternary Operator looks like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"conditionalExpression ? exprIfTruthy : exprIfFalsy;\n")),(0,n.yg)("p",null,"As we can see, the Ternary Operator places the conditional expression before the ",(0,n.yg)("inlineCode",{parentName:"p"},"?")," and accepts the executable expressions as two other operands that are separated by a colon, ",(0,n.yg)("inlineCode",{parentName:"p"},":"),"."),(0,n.yg)("p",null,"If the ",(0,n.yg)("inlineCode",{parentName:"p"},"conditionalExpression")," evaluates to a truthy value, ",(0,n.yg)("inlineCode",{parentName:"p"},"exprIfTruthy")," is executed. If it evaluates to a falsy value, ",(0,n.yg)("inlineCode",{parentName:"p"},"exprIfFalsy")," is executed."),(0,n.yg)("h3",{id:"what-are-truthyfalsy-values-"},"What are Truthy/Falsy Values ?"),(0,n.yg)("p",null,"In JavaScript, a ",(0,n.yg)("strong",{parentName:"p"},"truthy")," value corresponds to a value that is considered equivalent to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),' had that been converted to a Boolean. This is another way of saying "this thing exists". All values in JavaScript are truthy if they do not evaluate to or are not defined to be ',(0,n.yg)("strong",{parentName:"p"},"falsy"),"."),(0,n.yg)("p",null,"A falsy value is a value that is casted as ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," when it is converted to a Boolean. In JavaScript, the following values are coerced / converted to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),":"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"false"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"0"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"-0"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"0n")," ",(0,n.yg)("inlineCode",{parentName:"p"},'""'),", ",(0,n.yg)("inlineCode",{parentName:"p"},"null"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"NaN")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"document.all"),"."),(0,n.yg)("p",null,"Expressions that evaluate to anything other than these are considered ",(0,n.yg)("strong",{parentName:"p"},"truthy"),"."),(0,n.yg)("h2",{id:"when-to-use-the-js-ternary-operator-"},"When to Use the JS Ternary Operator ?"),(0,n.yg)("p",null,"We use the JavaScript Ternary Operator when we need to control execution flow between two paths based on a conditional check that returns a Boolean."),(0,n.yg)("p",null,"A simplest example involves testing the value of an expression stored in a variable to see whether it exists or not, and then pursue an execution path based on the outcome. If it exists, we do relevant stuff and return it; if not, do some other relevant stuff and return that. The below code shows how:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'// Example\n\nconst student = "Abd";\nconst welcomeStudent = student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n')),(0,n.yg)("p",null,"In the above snippet, ",(0,n.yg)("inlineCode",{parentName:"p"},"student ?")," tests to see if ",(0,n.yg)("inlineCode",{parentName:"p"},"student")," is truthy. The value from this conditional test is used to decide the value of the stored variable, ",(0,n.yg)("inlineCode",{parentName:"p"},"welcomeStudent"),". In other words, we are using the conditional operator to control the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"welcomeStudent")," based on the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"student"),"."),(0,n.yg)("p",null,"Notice that the return value of the executed block following the check is returned as the operator's return value. That allow us to store it in ",(0,n.yg)("inlineCode",{parentName:"p"},"welcomeStudent"),"."),(0,n.yg)("h3",{id:"javascript-ternary-operator-a-shorthand-for-ifelse"},"JavaScript Ternary Operator: A Shorthand for ",(0,n.yg)("inlineCode",{parentName:"h3"},"if/else")),(0,n.yg)("p",null,"The Ternary Operator is a concise alternative to ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else"),". For example, we could have written the above control flow like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'const student = "Abd";\nlet welcomeStudent;\n\nif (student) {\n  welcomeStudent = `Welcome, ${student.name}!`;\n} else {\n  welcomeStudent = "Welcome, Guest!";\n}\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n')),(0,n.yg)("p",null,"Notice how the ternary operator used previously helped avoid using the above procedural ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else")," flow. The Ternary Operator made the code more readable, reusable and the logic easier to follow."),(0,n.yg)("h3",{id:"using-the-javascript-ternary-operator-to-test-a-functions-truthiness"},"Using the JavaScript Ternary Operator to Test a Function's Truthiness"),(0,n.yg)("p",null,"The ternary operator can also be used when we need to test the return a value of a function. As in the ",(0,n.yg)("inlineCode",{parentName:"p"},"welcomeStudentTernary")," function below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'// With if/else\nconst welcomeStudent = (student) => {\n  if (student) {\n    return `Welcome, ${student}!`;\n  } else {\n    return "Welcome, Guest!";\n  }\n};\n\nconsole.log(welcomeStudent("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudent("")); // Welcome, Guest!\nconsole.log(welcomeStudent(null)); // Welcome, Guest!\n\n// With ternary operator\nconst welcomeStudentTernary = (student) =>\n  student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudentTernary("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudentTernary("")); // Welcome, Guest!\nconsole.log(welcomeStudentTernary(null)); // Welcome, Guest!\n')),(0,n.yg)("p",null,"Again, it provides conciseness. And goes well with arrow functions."),(0,n.yg)("h3",{id:"handling-nullish-values-with-js-ternary-operator"},"Handling Nullish Values with JS Ternary Operator"),(0,n.yg)("p",null,"Notice how the nullish arguments are being considered in both cases. With just a few characters added, the Ternary one-liner offers more convenience to an efficient developer who doesn't want to waste lines for dealing with nullish logic."),(0,n.yg)("h3",{id:"javascript-ternary-operator-when-the-return-value-rules"},"JavaScript Ternary Operator: When The Return Value Rules"),(0,n.yg)("p",null,"It is important to notice that with the Ternary Operator, we are only interested in the return value of the conditional check as well as those of the two execution blocks. Side effects are less important."),(0,n.yg)("p",null,"For example, the Ternary Operator would not be useful for us had being polite or yelling was important to us:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const welcomeStudent = (student) => {\n  if (student) {\n    console.log("First YELL!");\n    return `Welcome, ${student}!`;\n  } else {\n    console.log("Be composed and polite.");\n    return "Welcome, Guest!";\n  }\n};\n\nconsole.log(welcomeStudent("Abd"));\n// "First YELL!"\n// Welcome, Abd!\nconsole.log(welcomeStudent());\n// "Be composed and polite."\n// Welcome, Guest!\n\n// With ternary operator\nconst welcomeStudentTernary = (student) =>\n  student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudentTernary("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudentTernary("")); // Welcome, Guest!\n')),(0,n.yg)("p",null,"In the case when they are more important, we should be using ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else")," statements, as in ",(0,n.yg)("inlineCode",{parentName:"p"},"welcomeStudent"),". So, the JavaScript Ternary Operator is useful in cases when the return value of the expressions matter more. This is a major distinction between the usage of ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else")," and the Ternary operator in JavaScript."),(0,n.yg)("h3",{id:"chaining-ternary-operators-in-javascript"},"Chaining Ternary Operators in JavaScript"),(0,n.yg)("p",null,"We can chain ternary operators to emulate a ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else if/else")," control structure or a ",(0,n.yg)("inlineCode",{parentName:"p"},"switch")," statement:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'// With if/else if/else\nconst grade = (mark) => {\n  if (mark > 100) {\n    return;\n  } else if (mark > 80) {\n    return "A";\n  } else if (mark > 70) {\n    return "B";\n  } else if (mark > 60) {\n    return "C";\n  } else if (mark > 50) {\n    return "D";\n  } else {\n    return "F";\n  }\n};\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n\n// With chained ternary operators\nconst grade = (mark) =>\n  mark > 100\n    ? undefined\n    : mark > 80\n    ? "A"\n    : mark > 70\n    ? "B"\n    : mark > 60\n    ? "C"\n    : mark > 50\n    ? "D"\n    : "F";\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n')),(0,n.yg)("p",null,"Here, we chained an additional conditional operator into the third operand at each level."),(0,n.yg)("h2",{id:"javascript-ternary-operator-best-practices"},"JavaScript Ternary Operator Best Practices"),(0,n.yg)("p",null,"Many developers do not prefer chained ternary operators like the one above because multiple conditional checks hurt readability and maintainability. Instead of chaining ternary operators, using plain ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else if/else")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"switch")," statements are recommended when there are multiple paths in a control flow."),(0,n.yg)("p",null,"So, here are some best practices:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use the JavaScript Ternary Operator when there are only two paths in the control flow."),(0,n.yg)("li",{parentName:"ul"},"Use the JS Ternary Operator consistently."),(0,n.yg)("li",{parentName:"ul"},"Avoid using chained Ternary Operators as they make the code difficult to read and maintain."),(0,n.yg)("li",{parentName:"ul"},"Use a JavaScript Ternary Operator with arrow functions as they also produce good one-liners."),(0,n.yg)("li",{parentName:"ul"},"In the case complex conditional checks are involved, use parentheses to properly implement the logic. This also improves readability and maintainability")),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"In this post, we expounded on the use of the Ternary Operator in JavaScript. We acknowledged its importance in writing concise code, especially in situations that involve a conditional check and two execution paths."),(0,n.yg)("p",null,"We saw with examples that the JS Ternary Operator is a good alternative to ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else")," and is preferable when the return values of the expressions matter more than side effects. We covered a case where it is useful for storing the value returned from evaluating primitives across the execution path as well as one where the same is done after executing a function."),(0,n.yg)("p",null,"We also encountered an example that shows JavaScript Ternary Operators can be chained to emulate ",(0,n.yg)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"switch")," blocks, but the recommended way is to avoid chaining multiple Ternary Operators. We learned about other best practices such as using it consistently in situations where there are only two paths in the control flow, with arrow functions and with parentheses when needed."))}m.isMDXComponent=!0}}]);