"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75378],{58860:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>u});var a=r(37953);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=t,u=d["".concat(l,".").concat(p)]||d[p]||g[p]||o;return r?a.createElement(u,i(i({ref:n},m),{},{components:r})):a.createElement(u,i({ref:n},m))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9149:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});r(37953);var a=r(58860);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const s={title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-swarm",source:"@site/blog/2023-10-05-docker-swarm.md",title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",date:"2023-10-05T00:00:00.000Z",formattedDate:"October 5, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.53,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},prevItem:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",permalink:"/blog/react-hot-toast"},nextItem:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",permalink:"/blog/react-crm-with-refine"},relatedPosts:[{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",permalink:"/blog/kubectl-logs",formattedDate:"December 28, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.435,date:"2023-12-28T00:00:00.000Z"},{title:"Docker Alternatives",description:"We'll discuss top alternatives of Docker walking your through their pros and cons and how they compare to Docker.",permalink:"/blog/docker-alternatives",formattedDate:"February 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.35,date:"2024-02-05T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"December 20, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.365,date:"2022-12-20T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"},{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",description:"We'll discuss the importance of restarting pods in Kubernetes, the different methods to do so, and the best practices to follow.",permalink:"/blog/kubectl-restart-pod",formattedDate:"October 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.14,date:"2023-10-22T00:00:00.000Z"},{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",permalink:"/blog/kubectl-logs",formattedDate:"December 28, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.435,date:"2023-12-28T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Brief overview of Docker",id:"brief-overview-of-docker",level:3},{value:"Explanation of what Docker Swarm mode is and its significance",id:"explanation-of-what-docker-swarm-mode-is-and-its-significance",level:2},{value:"Docker Swarm Mode is Significant due to the following reasons:",id:"docker-swarm-mode-is-significant-due-to-the-following-reasons",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setting up Your First Swarm",id:"setting-up-your-first-swarm",level:2},{value:"Joining Nodes to the Swarm",id:"joining-nodes-to-the-swarm",level:2},{value:"Deploying Services in Swarm",id:"deploying-services-in-swarm",level:2},{value:"Scaling Services",id:"scaling-services",level:2},{value:"Rolling Updates and Rollbacks",id:"rolling-updates-and-rollbacks",level:2},{value:"Monitoring Swarm Services",id:"monitoring-swarm-services",level:2},{value:"Cleaning Up and Removing Nodes",id:"cleaning-up-and-removing-nodes",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},p="wrapper";function u(e){var{components:n}=e,r=i(e,["components"]);return(0,a.yg)(p,o(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){t(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("h3",{id:"brief-overview-of-docker"},"Brief overview of Docker"),(0,a.yg)("p",null,"In the modern world of DevOps, you can package up your application(s) in portable containers using the Docker platform. Containers bundle software with all dependencies, ensuring consistent execution across environments. This enables a team of developers to concurrently work on multiple components of software. This isolation, portability, and scalability make Docker preferred for microservices, development consistency, and efficient resource utilization."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#brief-overview-of-docker"},"Brief overview of Docker")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#pre-requisites"},"Pre-requisites")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#setting-up-your-first-swarm"},"Setting up Your First Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#deploying-services-in-swarm"},"Deploying Services in Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#scaling-services"},"Scaling Services")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#monitoring-swarm-services"},"Monitoring Swarm Services")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"))),(0,a.yg)("h2",{id:"explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,a.yg)("p",null,"Docker Swarm mode is a feature of Docker Engine that allows you to create and manage a cluster of Docker nodes called a swarm. Basically, a swarm consists of multiple Docker hosts that function as managers and workers, where managers control delegation and membership while workers handle the swarm services. But a particular Docker host can act as a manager, a worker, or both."),(0,a.yg)("h3",{id:"docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scalability (Automated load-balancing):")," You can declare the number of tasks you want to run for each service. The swarm manager automatically adapts by adding or removing tasks to maintain the desired state whenever you scale up or down. When demand for the service grows, it will add more replicas to the service.\n",(0,a.yg)("strong",{parentName:"p"},"Simple to Use:")," You can use the same Docker CLI commands to create, manage, and operate a swarm as you would use to work with individual containers, which means there's no need to install additional software to use it.\n",(0,a.yg)("strong",{parentName:"p"},"Integrated Solution:")," Docker Swarm mode offers built-in features such as service discovery, load balancing, networking, security, and rolling updates. It uses its dedicated API and was specifically designed to make it easy to create and manage clusters of Docker nodes."),(0,a.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Docker Installation:")," Installing Docker Swarm is simple, even for those just getting started with container orchestration. All nodes that will be included in the Swarm must have Docker installed on them. You can install Docker according to your OS (Linux, Windows or macOS) from the following links:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Linux/distro/macOS:")," ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine | Docker Docs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Windows:")," ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"Install Docker Desktop on Windows | Docker Docs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Basic familiarity with Docker commands:")," There is no need to run or install a separate or new CLI because Docker Swarm natively integrates with the Docker CLI. Therefore, it's crucial to understand fundamental Docker commands and concepts like images, containers, and networks."),(0,a.yg)("h2",{id:"setting-up-your-first-swarm"},"Setting up Your First Swarm"),(0,a.yg)("p",null,"A node is a Docker engine instance that participates in the Swarm. This is also known as a Docker node. Although one or more nodes can run on a single physical computer or cloud server, production swarm deployments often have Docker nodes spread over multiple physical and cloud machines. Swarm mode consists of two types of nodes:\n",(0,a.yg)("strong",{parentName:"p"},"Manager:"),"\nThe manager node, as the name suggests, is responsible for cluster administration activities such as maintaining the cluster state, scheduling services, and serving Swarm mode HTTP API endpoints. It is recommended to implement more than one manager node for the production environment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Workers:"),"\nThe manager node transfers tasks to the worker nodes, who receive and execute them. Worker nodes are not involved in task management. You can configure commands and services to be global or replicated: a global service will operate on every Swarm node, whereas a replicated service will allocate tasks to worker nodes through the manager node."),(0,a.yg)("p",null,"In order to set up your first Swarm and initialize the swarm mode, you can run the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm init")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/swarm-init.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm"),(0,a.yg)("p",null,"As previously explained, there are two types of nodes in a cluster: manager nodes and worker nodes. Suppose you already have Swarm up and running and want to add more nodes to it. To join nodes to the Swarm, you must have the join token generated by the manager node when the Swarm was initiated by running the '",(0,a.yg)("strong",{parentName:"p"},"docker swarm init"),"' command. The join token is a secret that allows a node to become a manager or worker in the Swarm.\nYou can join a node as a worker or a manager. Let's assume that you are the administrator of the manager node and you want to add a new worker node in Swarm. For that purpose, first of all, you need to retrieve the join token by running the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm join-token worker")),(0,a.yg)("p",null,"This command will return you the full command of '",(0,a.yg)("strong",{parentName:"p"},"docker swarm join"),"' along with a token that you just need to run for the worker node to join the Swarm."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Now, you need to copy and run the full command you get in the output of '",(0,a.yg)("strong",{parentName:"p"},"docker swarm join-token worker"),"' in your ",(0,a.yg)("strong",{parentName:"p"},"worker node")," to join the Swarm."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"deploying-services-in-swarm"},"Deploying Services in Swarm"),(0,a.yg)("p",null,"Swarm containers are started via services, and service is the definition of tasks to be executed by nodes. When creating a service, you must specify the container image you intend to utilize. A global service will operate on all Swarm nodes, but a replicated service would have the manager node for distributing tasks to worker nodes.\nIn order to deploy a new Docker Swarm service, you can run the command below by replacing your service-specific parameters."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service create [parameters]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Service Replicas"),"\nDocker services enable you to declare the desired state, such as the number of replicas, and Swarm can maintain the state across the cluster. For instance, if you set three replicas of a service and one node fails, Swarm will make sure that another node immediately launches an instance to keep the service running. This ensures high availability and fault tolerance.\nWe can deploy the '",(0,a.yg)("strong",{parentName:"p"},"nginx"),"' service in the docker swarm with 3 service replicas by running the following command on the manager node:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service create --name nginx-service --replicas 3 --publish published=80,target=80 nginx:latest")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/ngix-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"To ensure that the service is correctly deployed, you can list the services with the state and the established replicas by running the command below:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service ls")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/service-ls.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"scaling-services"},"Scaling Services"),(0,a.yg)("p",null,"Docker Swarm mode makes scaling effortless. Scaling is important in modern application deployment, ensuring services can accommodate varying loads by adjusting the number of active instances. In Docker Swarm, this adjustment involves altering the number of replicas.\nIn order to scale an existing service on a Docker Swarm cluster, you can make use of the docker service scale command. This command allows you to either increase or decrease the number of service replicas. We can use the following command for scaling the services:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service scale SERVICE_NAME=REPLICA_COUNT")),(0,a.yg)("p",null,"Where ",(0,a.yg)("strong",{parentName:"p"},"SERVICE_NAME")," is the name of the service to be scaled, and ",(0,a.yg)("strong",{parentName:"p"},"REPLICA_COUNT")," is the new number of replicas desired. For Example, if you wish to increase the number of copies of the existing '",(0,a.yg)("strong",{parentName:"p"},"nginx"),"' service from three to 4, execute the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service scale nginx-service=4")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/scaling-service-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks"),(0,a.yg)("p",null,"Application deployment and administration require updates that are seamless. We need to ensure that the release of new features, bug fixes and enhancements to the application does not cause any disruption to users. Not all upgrades work as planned, and sometimes, we just need to revert the update immediately to prevent failures and minimize downtime.\nRolling updates make it possible to deploy new versions of containers without interfering with the availability of your application. For that purpose, you can make use of the docker service update command below by replacing your service-specific parameters:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service update [parameters] ")),(0,a.yg)("p",null,"For Example, if we want to update the version of '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"', we can utilize '",(0,a.yg)("strong",{parentName:"p"},"--image"),"' parameter:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service update --image nginx:1.21.4 nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Rollback Update:"),"\nThe ability to rollback or return to a previous state is extremely valuable not only to minimize downtime but also to ensure efficient handling of failures. The following command in Docker CLI enables quick rollbacks to earlier versions, where SERVICE_NAME is the name of the service required to revert."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service rollback SERVICE_NAME")),(0,a.yg)("p",null,"For Example, if there is any issue in an updated version, you can rollback to the previous version of '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"':"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service rollback nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"monitoring-swarm-services"},"Monitoring Swarm Services"),(0,a.yg)("p",null,"Any production environment must have monitoring as a critical component. Applications work easily and consistently when services are monitored for health, performance, and status. Given the distributed structure of services across multiple nodes in Docker Swarm, understanding the state of services and their tasks becomes extremely important.\nFor monitoring purposes, you can run the command that will provide insights related to tasks of any service. For Example, if we want to list the tasks with insights for '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"', we can run the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service ps nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Service Logs:"),"\nSometimes, while troubleshooting an issue, you might need to view detailed logs related to a specific service. In order to access logs of any particular service, you can make use of the docker service logs command. As an example, the below command displays the logs related to '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"':"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service logs nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"),(0,a.yg)("p",null,"While administrating the docker swarm cluster, you may be required to restructure or scale down the Swarm gracefully. In order to remove the node, it first needs to be removed from the Swarm. You need to run the command below on the node to leave the Swarm. You can add an additional parameter '",(0,a.yg)("strong",{parentName:"p"},"\u2014force"),"' to the same command if you are on Manager Node."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm leave")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Managers can remove a node from the node list if it has left the Swarm or if it is unavailable by replacing the ",(0,a.yg)("strong",{parentName:"p"},"NODE_NAME")," with the name or ID of any particular node they want to remove:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker node rm NODE_NAME")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Application Development and its operations have been transformed by Docker Swarm, which focuses on consistency, scalability, and integrated solutions. Application management is effective due to its smooth integration with the Docker CLI. Docker Swarm is ready to take your operations to new heights, whether you're trying to optimize current workflows or starting new projects. Embrace it, experiment with it, dive deeper and let Docker Swarm take your applications to the next level."))}u.isMDXComponent=!0}}]);