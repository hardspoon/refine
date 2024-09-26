"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19102],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",slug:"kubernetes-operators",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/kubernetes-operators",source:"@site/blog/2024-01-12-k8s-operators.md",title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",date:"2024-01-12T00:00:00.000Z",formattedDate:"January 12, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:9.425,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",slug:"kubernetes-operators",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/social.png",hide_table_of_contents:!1},prevItem:{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref"},nextItem:{title:"React Ecosystem in 2024 - Sustaining Popularity",permalink:"/blog/react-js-ecosystem-in-2024"},relatedPosts:[{title:"Docker Swarm vs. Kubernetes - DevOps Guide",description:"We'll present a detailed comparison between both Docker swarm and Kubernetes.",permalink:"/blog/docker-swarm-vs-kubernetes",formattedDate:"February 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.645,date:"2024-02-14T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2023-01-10T00:00:00.000Z"},{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",permalink:"/blog/kubernetes-statefulset-vs-deployment",formattedDate:"January 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.095,date:"2024-01-04T00:00:00.000Z"}],authorPosts:[{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"July 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.845,date:"2024-07-04T00:00:00.000Z"},{title:"Zsh and Bash",description:"We'll explore the unique features of these tools and their similarities and differences.",permalink:"/blog/zsh-vs-bash",formattedDate:"August 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:18.64,date:"2024-08-14T00:00:00.000Z"},{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Kubernetes Operators",id:"understanding-kubernetes-operators",level:2},{value:"What Kubernetes operators are",id:"what-kubernetes-operators-are",level:3},{value:"Why they should be used?",id:"why-they-should-be-used",level:3},{value:"Types of Kubernetes Operators",id:"types-of-kubernetes-operators",level:2},{value:"Overview of different types of operators",id:"overview-of-different-types-of-operators",level:3},{value:"Use cases for each type",id:"use-cases-for-each-type",level:3},{value:"Section 3. Building Your Own Kubernetes Operator",id:"section-3-building-your-own-kubernetes-operator",level:2},{value:"Environment Setup:",id:"environment-setup",level:3},{value:"<strong>Operator SDK Installation:</strong>",id:"operator-sdk-installation",level:3},{value:"<strong>Creating a New Operator:</strong>",id:"creating-a-new-operator",level:3},{value:"Developing Your Operator",id:"developing-your-operator",level:3},{value:"Testing Your Operator",id:"testing-your-operator",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Kubernetes operators are revolutionizing the way we manage complex applications in cloud environments. These operators, similar to intelligent assistants, automate critical tasks like upgrades, monitoring, and configuration changes in Kubernetes applications. This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented."),(0,r.yg)("p",null,"We will also provide detailed step-by-step instructions to create and deploy a basic operator in a Kubernetes cluster. Let's start by understanding operators in more detail."),(0,r.yg)("h2",{id:"understanding-kubernetes-operators"},"Understanding Kubernetes Operators"),(0,r.yg)("h3",{id:"what-kubernetes-operators-are"},"What Kubernetes operators are"),(0,r.yg)("p",null,"Operators handle Kubernetes applications like smart assistants. Imagine a complex system with many apps that need constant upgrades, changes, and monitoring. Handling this manually is difficult but Kubernetes operators simplify this. They are like customized helpers who know what an app needs. Automating component installation, upgrades, and repairs is super simple through operators. They are essential for application deployment, scalability, and management automation."),(0,r.yg)("h3",{id:"why-they-should-be-used"},"Why they should be used?"),(0,r.yg)("p",null,"Kubernetes Operators provide valuable services including the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"They manage application and service deployment lifecycles automatically."),(0,r.yg)("li",{parentName:"ul"},"They monitor performance and automatically adjust instances to match demand."),(0,r.yg)("li",{parentName:"ul"},"Operators perform backups, upgrades, and fixes. They maintain cluster application performance.")),(0,r.yg)("p",null,"Using the declarative Kubernetes API, operators can simplify these duties. This keeps them in the user-specified state."),(0,r.yg)("p",null,"Operators make these tasks easier by using the Kubernetes API and its declarative approach. This way, they maintain the desired state specified by the user."),(0,r.yg)("p",null,"A simple operator definition in YAML:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'apiVersion: operators.coreos.com/v1beta1\nkind: Operator\nmetadata:\n  name: my-custom-operator\nspec:\n  serviceName: "my-app-service"\n  size: 3\n  version: "1.0.0"\n')),(0,r.yg)("p",null,"The above configuration defines an operator named ",(0,r.yg)("inlineCode",{parentName:"p"},"my-custom-operator"),". It targets a service ",(0,r.yg)("inlineCode",{parentName:"p"},"my-app-service")," with three replicas of version ",(0,r.yg)("inlineCode",{parentName:"p"},"1.0.0"),". The operator will monitor and manage the state of this service in the Kubernetes cluster."),(0,r.yg)("h2",{id:"types-of-kubernetes-operators"},"Types of Kubernetes Operators"),(0,r.yg)("h3",{id:"overview-of-different-types-of-operators"},"Overview of different types of operators"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Core Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Core operators are included in Kubernetes by default. They're part of the Kubernetes system itself."),(0,r.yg)("li",{parentName:"ul"},"Examples: Deployment, ReplicaSet, DaemonSet."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Community Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"These are created and maintained by the Kubernetes community. These are not part of core Kubernetes, but they are used widely.")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Examples: Prometheus Operator, etcd Operator.")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Custom Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Made by users for their specific needs. They can do anything you configure them to do."),(0,r.yg)("li",{parentName:"ul"},"Example: A customer database operator to manage your databases in a way specific to your organization's technical needs.")))),(0,r.yg)("p",null,"Kubernetes operators are usually developed through the operator framework although you can also develop operators without using the operator framework. The operator framework has provided tools and workflows to simplify the development of operators their their operator SDK and this is the path we will follow in this guide too."),(0,r.yg)("h3",{id:"use-cases-for-each-type"},"Use cases for each type"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Core Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"You can them for basic Kubernetes operations."),(0,r.yg)("li",{parentName:"ul"},"Example: Use the deployment operator to roll out the new versions of your application."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Community Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"These operators are for common tools not available in Kubernetes by default."),(0,r.yg)("li",{parentName:"ul"},"Example: You can use Prometheus Operator to monitor Kubernetes clusters."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Custom Operators:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This is your best choice when you have a unique need not available in the core operator or in the community operator."),(0,r.yg)("li",{parentName:"ul"},"Example: Managing a special database or a complex app that requires specific actions to be performed during updates.")))),(0,r.yg)("p",null,"Now we will create a simple operator using the operator framework utilizing their operator SDK."),(0,r.yg)("h2",{id:"section-3-building-your-own-kubernetes-operator"},"Section 3. Building Your Own Kubernetes Operator"),(0,r.yg)("h3",{id:"environment-setup"},"Environment Setup:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install Go language (version 1.13+). You can use this link for installation. ",(0,r.yg)("a",{parentName:"li",href:"https://go.dev/doc/install"},"https://go.dev/doc/install")),(0,r.yg)("li",{parentName:"ul"},"Set up Kubernetes cluster (Minikube or a cloud-based solution)."),(0,r.yg)("li",{parentName:"ul"},"Install ",(0,r.yg)("inlineCode",{parentName:"li"},"kubectl")," command-line tool")),(0,r.yg)("h3",{id:"operator-sdk-installation"},(0,r.yg)("strong",{parentName:"h3"},"Operator SDK Installation:")),(0,r.yg)("p",null,"For Windows, the binary is not supported, you will need to use ",(0,r.yg)("inlineCode",{parentName:"p"},"WSL")," on Windows. I am on Windows and I installed WSL and Ubuntu for this purpose. So Linux and macOS are officially supported. So above-mentioned pre-requisites will be installed on the OS where the operator's SDK will be installed i.e. Linux in my case. Here are the steps that I performed:"),(0,r.yg)("p",null,"1- Open your WSL/Ubuntu terminal and install the required dependencies for the operators SDK through the below command:\n",(0,r.yg)("inlineCode",{parentName:"p"},"sudo apt-get install make gcc g++ git")),(0,r.yg)("p",null,"2- Download the operator SDK binary for your OS. I used the below URL as I am on linux.\n",(0,r.yg)("inlineCode",{parentName:"p"},"wget https://github.com/operator-framework/operator-sdk/releases/download/v1.17.0/operator-sdk_linux_amd64")),(0,r.yg)("p",null,"3- Make this binary executable so modify the permissions as below:\n",(0,r.yg)("inlineCode",{parentName:"p"},"chmod +x operator-sdk_linux_amd64")),(0,r.yg)("p",null,"4- To use the Operator SDK anywhere in your terminal, move it to a directory in your system PATH. A common place is ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/local/bin/"),".\n",(0,r.yg)("inlineCode",{parentName:"p"},"sudo mv operator-sdk_linux_amd64 /usr/local/bin/operator-sdk")),(0,r.yg)("p",null,"5- Verify the installation of your operators SDK.\n",(0,r.yg)("inlineCode",{parentName:"p"},"operator-sdk version")),(0,r.yg)("p",null,"See the below screenshot of all these steps that I performed on my Ubuntu:"),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image2.png",alt:"installing operator sdk"})),(0,r.yg)("h3",{id:"creating-a-new-operator"},(0,r.yg)("strong",{parentName:"h3"},"Creating a New Operator:")),(0,r.yg)("p",null,"Before we go into the details of creating a new operator, note that the operator will be developed locally and then will be deployed to the Kubernetes cluster(either local cluster or cloud-based cluster)."),(0,r.yg)("p",null,"So here are the steps:\n1- Create an operator project in your local environment\n",(0,r.yg)("inlineCode",{parentName:"p"},"operator-sdk init --domain=mydomain.com --repo=github.com/myuser/my-operator")),(0,r.yg)("p",null,"Here are the details of these parameters:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"--domain")),": This is used to provide a unique group name for your custom resource definitions (CRDs). It doesn't have to be a domain you own; it's just a way to ensure that your CRDs are unique and don't conflict with others. You can set this to any string that follows domain name conventions."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"--repo")),": This is used for Go module naming. If you're not planning to push your operator code to a remote repository, you can set this to any valid URL format. It doesn't need to point to an existing repository."),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image3.png",alt:"creating operator project"})),(0,r.yg)("p",null,"2- Create API and controller within the same directory:\n",(0,r.yg)("inlineCode",{parentName:"p"},"operator-sdk create api --group=webapp --version=v1 --kind=AppService --resource=true --controller=true")),(0,r.yg)("p",null,"You will notice that folders of ",(0,r.yg)("inlineCode",{parentName:"p"},"api")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"controllers")," are now created automatically."),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image9.png",alt:"controllers and api folders"})),(0,r.yg)("h3",{id:"developing-your-operator"},"Developing Your Operator"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1-Modify the API Types"),": Now you need to edit the files in the ",(0,r.yg)("inlineCode",{parentName:"p"},"api/v1/")," directory to define the spec and status of your ",(0,r.yg)("inlineCode",{parentName:"p"},"AppService")," custom resource. . As an example ",(0,r.yg)("inlineCode",{parentName:"p"},"api/v1/appservice_types.go")," can be updated to match the structure of your ",(0,r.yg)("inlineCode",{parentName:"p"},"AppService"),". Below are contents of ",(0,r.yg)("inlineCode",{parentName:"p"},"appservice_types.go"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'package v1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// AppServiceSpec specifies the desired state of AppService\ntype AppServiceSpec struct {\n    //You can mention any instructions here related to your app\n    Size int32 `json:"size"`\n}\n\n// Here AppServiceStatus specifies the observed state of AppService\ntype AppServiceStatus struct {\n    // Notet that the Nodes are actually the names of the AppService pods\n    Nodes []string `json:"nodes"`\n}\n\n// The schema\ntype AppService struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   AppServiceSpec   `json:"spec,omitempty"`\n    Status AppServiceStatus `json:"status,omitempty"`\n}\n\n// AppServiceList is merely a list of AppService\ntype AppServiceList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata,omitempty"`\n    Items           []AppService `json:"items"`\n}\n\nfunc init() {\n    SchemeBuilder.Register(&AppService{}, &AppServiceList{})\n}\n')),(0,r.yg)("p",null,"In above code snippet, ",(0,r.yg)("inlineCode",{parentName:"p"},"AppServiceSpec")," includes a ",(0,r.yg)("inlineCode",{parentName:"p"},"Size")," field, representing the target number of instances, and ",(0,r.yg)("inlineCode",{parentName:"p"},"AppServiceStatus")," contains a ",(0,r.yg)("inlineCode",{parentName:"p"},"Nodes")," field, that lists the names of currently running instances."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2-Implement Controller Logic"),": In the ",(0,r.yg)("inlineCode",{parentName:"p"},"controllers/")," folder, you will see a controller file for your resource (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"appservice_controller.go"),"). In this file, you will write the logic for handling CRUD operations for your ",(0,r.yg)("inlineCode",{parentName:"p"},"AppService")," resources. Below are the contents of the controller file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'package controllers\n\nimport (\n    "context"\n    appsv1 "github.com/myuser/custom-operator/api/v1"//<your-api-path>\n    ctrl "sigs.k8s.io/controller-runtime"\n    "sigs.k8s.io/controller-runtime/pkg/log"\n)\n\n// Below AppServiceReconciler reconciles an AppService object\ntype AppServiceReconciler struct {\n    client.Client\n    Scheme *runtime.Scheme\n}\n\nfunc (r *AppServiceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {\n    _ = context.Background()\n    log := log.FromContext(ctx)\n\n    // Get the AppService instance\n    appService := &appsv1.AppService{}\n    err := r.Get(ctx, req.NamespacedName, appService)\n    if err != nil {\n        log.Error(err, "Failed to fetch AppService")\n        return ctrl.Result{}, err\n    }\n\n    log.Info("Reconciling AppService", "namespace", req.Namespace, "name", req.Name)\n\n    // Here you can put Business logic to handle AppService\n\n    return ctrl.Result{}, nil\n}\n\nfunc (r *AppServiceReconciler) SetupWithManager(mgr ctrl.Manager) error {\n    return ctrl.NewControllerManagedBy(mgr).\n        For(&appsv1.AppService{}).\n        Complete(r)\n}\n')),(0,r.yg)("p",null,"In the above snippet, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Reconcile")," method logs a message whenever it will be triggered."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3-Generate CRDs and RBAC Manifests"),": The next step is to create the CRD's and RBAC manifests. Just execute the following commands in your project directory to generate and update CRD manifests and RBAC rules based on the markers present in your Go source files:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"make generate\nmake manifests\n")),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image4.png",alt:"Generating CRD and RBAC Manifests"})),(0,r.yg)("h3",{id:"testing-your-operator"},"Testing Your Operator"),(0,r.yg)("p",null,"Before testing the operator, you need to ensure that your ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl")," is configured and connected to your Kubernetes cluster. Here are the steps to test the operator:"),(0,r.yg)("p",null,"1- Deploy the created CRD's to your Kubernetes cluster. What this command will do? It will install or set up the necessary dependencies, configurations, and manifests for your operator within the Kubernetes cluster:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"make install"),"\n2- Now just run your operator with the below command. It will launch the operator and put it in listening mode, ready to respond to changes in the cluster.\n",(0,r.yg)("inlineCode",{parentName:"p"},"make run")),(0,r.yg)("p",null,"See the below screenshot when I executed this command on my Ubuntu."),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image5.png",alt:"Running operator"})),(0,r.yg)("p",null,"3- The last step is to apply a custom resource (CR) YAML file to the cluster using ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl apply -f"),", It creates an instance of a custom resource defined by your operator. In other words, you are telling Kubernetes to create a specific type of resource that your operator is designed to manage. This is how you request your operator to perform a certain task or provide a specific service."),(0,r.yg)("p",null,"Here is a sample custom resource YAML file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"apiVersion: webapp.mydomain.com/v1\nkind: AppService\nmetadata:\n  name: example-appservice\nspec:\n  size: 3  # Example size\n")),(0,r.yg)("p",null,"Just apply through ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl apply -f")," Now you have the terminal window open where ",(0,r.yg)("inlineCode",{parentName:"p"},"make run")," was executed, just check any new logs there. As you can see in below screenshot, the highlighted log shows the successful operator reconciliation."),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image6.png",alt:"Operator reconciling"})),(0,r.yg)("p",null,"You can check the status of your custom resource through the command ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get appservices"),". See the below screenshot showing this command output:"),(0,r.yg)("div",{className:"centered-image"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image7.png",alt:"checking operator status"})),(0,r.yg)("p",null,"Congratulations!!! you have created and deployed your first Kubernetes operator. It was not that hard !!!! Here is a brief summary of the role of the major components we created today:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Custom Resource (CR)"),": Specifies the desired state of a resource in a simple configuration."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Controller"),": Implements the core business logic for managing resources based on the desired state defined in CRs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"API"),": Defines the structure and schema of custom resources, ensuring their validity and conformity.")),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Kubernetes operators represent a significant leap in managing and automating Kubernetes applications. They not only simplify the lifecycle management of services and applications but also ensure high performance and reliability through automated adjustments and maintenance. This article has gone through the detailed steps to create, configure, and deploy a simple operator to a Kubernetes cluster through the operator framework."),(0,r.yg)("p",null,"Following the same approach, you can develop production-ready operators for your application. As we have seen, whether it's core, community, or custom operators, each plays a vital role in enhancing the Kubernetes experience, making them an indispensable tool in the arsenal of any cloud-native technology enthusiast."))}g.isMDXComponent=!0}}]);