"use strict";(self.webpackChunkheatguru_tech=self.webpackChunkheatguru_tech||[]).push([[363],{7781:function(e,t,a){a.r(t),a.d(t,{ProjectListing:function(){return y},ProjectListings:function(){return E},default:function(){return k}});var n=a(7294),l=a(6550),r=a(6010),o=a(9960),i=a(4996),c=a(2263),s=a(7961),m=a(7814),u=a(9417),d=a(3024),p="projectPageHeader__pp0",g="projectItem_UQAg",h="directory_Oisk",f=[{category:"Project",title:"nodejs-mysql-cloudformation",slug:"#nodejs-mysql-cloudformation",subtitle:"An example for deploying a NodeJS app to Beanstalk using AWS CloudFormation.",period:"November 2020",tech:"AWS CloudFormation",description:n.createElement(n.Fragment,null,n.createElement("p",null,"An example of how you can perform Infrastructure-As-Code (IaC) using AWS CloudFormation and Continuous-Integration/Continuous-Deployment (CI/CD) using AWS CodePipeline."),n.createElement("p",null,"This example deploys the NodeJS-ExpressJS-MySQL Create-Read-Update-Delete (CRUD) application at"," ",n.createElement("a",{href:"https://github.com/DigiPie/nodejs-mysql-aws-beanstalk"},"DigiPie/nodejs-mysql-aws-beanstalk"),", by using the CloudFormation IaC templates in this repository and setting up a simple AWS CodePipeline."),n.createElement("p",null,"I worked on this project to learn more about the"," ",n.createElement("a",{href:"https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac"},"Infrastructure-as-Code")," ","concept and"," ",n.createElement("a",{href:"https://aws.amazon.com/cloudformation/"},"AWS CloudFormation"),".")),links:[{name:"GitHub repository",link:"https://github.com/DigiPie/nodejs-mysql-cloudformation"}]},{category:"Website",title:"KayaFolio",slug:"#kaya-folio",imageUrl:"img/projects/kayafolio.png",subtitle:"A software engineer portfolio template built with Docusaurus v2 and ReactJS.",period:"October 2020 to Present",tech:"Docusaurus v2, ReactJS",description:n.createElement(n.Fragment,null,n.createElement("p",null,"I first started this portfolio template project back in October 2020. The template has gone through numerous iterations ever since, and is still updated presently."),n.createElement("p",null,"I built it using"," ",n.createElement("a",{href:"https://v2.docusaurus.io/",target:"_blank"},"Docusaurus v2")," ","and"," ",n.createElement("a",{href:"https://reactjs.org/",target:"_blank"},"ReactJS"),"."),n.createElement("p",null,n.createElement("a",{href:"https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg"},n.createElement("img",{src:"https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg"}))," ",n.createElement("a",{href:"https://camo.githubusercontent.com/5111623fd1442456a5718af6ff9c8e4bf080e3756511b436343eac4971bb518a/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d"},n.createElement("img",{src:"https://camo.githubusercontent.com/5111623fd1442456a5718af6ff9c8e4bf080e3756511b436343eac4971bb518a/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d"}))),n.createElement("p",null,"I wrote this template for my own use but you are free to use it as long as you credit me. Check out the"," ",n.createElement("a",{href:"https://github.com/DigiPie/kaya-folio"},"GitHub repository")," ","for how to do so.")),links:[{name:"GitHub repository",link:"https://github.com/DigiPie/kaya-folio"},{name:"Website",link:"https://evantay.com/"},{name:"Blog post: History of EvanTay.com",link:"http://evantay.com/blog/history"}]}];function b(e){var t,a=e.category,l=e.size,r=void 0===l?"1x":l;switch(a){case"Project":default:t=u.gMD;break;case"Open Source Tool":t=u.CgH;break;case"Website":t=d.bRs;break;case"Game":t=u.l9D}return n.createElement(m.G,{alt:a,size:r,icon:t})}function E(){return n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-0"},f.map((function(e){return n.createElement("div",{id:e.title,key:e.title+"-card",className:"bg-secondary-800 hover:bg-secondary-900 transition rounded-lg overflow-hidden"},n.createElement(o.Z,{to:(0,i.Z)(e.slug),className:"block h-full text-white hover:text-white no-underline hover:no-underline"},e.imageUrl?n.createElement("div",{className:"overflow-hidden h-40 md:h-48"},n.createElement("img",{src:(0,i.Z)(e.imageUrl),alt:e.title})):n.createElement("div",{className:"alternate"==e.bgColor?"overflow-hidden bg-danger h-40 md:h-48":"overflow-hidden bg-success h-40 md:h-48"},n.createElement("h2",{className:"m-3 inline-block"},e.title)),n.createElement("div",{className:"pt-4 px-4"},n.createElement("h3",{className:"mb-1"},e.title),n.createElement("p",{className:"text-s mb-2 text-secondary-500"},e.period),n.createElement("p",null,e.subtitle),n.createElement("p",{className:"text-primary-default font-bold"},"Read more"))))})))}function y(e){var t=e.projectItem;return n.createElement("div",{className:(0,r.Z)("text--center margin-bottom--xl px-4",g)},n.createElement(o.Z,{to:(0,i.Z)("/projects")},n.createElement("button",{className:"border-0 rounded py-2 px-4 mb-2 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer"},"Back")),n.createElement("h1",null,t.title),n.createElement("h2",null,t.subtitle),t.imageUrl&&n.createElement("img",{src:(0,i.Z)(t.imageUrl),alt:t.title}),n.createElement("div",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(b,{category:t.category})," ",t.category),n.createElement("li",null,n.createElement(m.G,{alt:"Calendar",icon:u.fT7})," ",t.period),n.createElement("li",null,n.createElement(m.G,{alt:"Code",icon:u.dT$})," ",t.tech),t.team&&n.createElement("li",null,n.createElement(m.G,{alt:"Team",icon:u.FVb})," ",t.team.map((function(e,a){return n.createElement("span",{key:a},e.link&&n.createElement("a",{href:e.link},e.name),!e.link&&e.name,a<t.team.length-1?", ":"")})))),n.createElement("b",null,"Description"),n.createElement("div",null,t.description),t.links&&n.createElement(n.Fragment,null,n.createElement("b",null,"Links"),n.createElement("ul",null,t.links.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.link},n.createElement(m.G,{alt:"Link",icon:u.nNP})," ",e.name))}))))),n.createElement(o.Z,{to:(0,i.Z)("/projects")},n.createElement("button",{className:"border-0 rounded py-2 px-4 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer"},"More projects")))}function v(){return n.createElement("section",{className:h},n.createElement("div",{className:"container"},n.createElement("h3",null,"Continue exploring?"),n.createElement("nav",{className:"pagination-nav"},n.createElement("div",{className:"pagination-nav__item"},n.createElement(o.Z,{className:"pagination-nav__link",to:(0,i.Z)("blog/")},n.createElement("div",{className:"pagination-nav__sublabel"},"Read"),n.createElement("div",{className:"pagination-nav__label"},"My blog"))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n.createElement("a",{className:"pagination-nav__link",href:(0,i.Z)("pdf/resume.pdf")},n.createElement("div",{className:"pagination-nav__sublabel"},"Download"),n.createElement("div",{className:"pagination-nav__label"},"My resume"))))))}function k(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e,a=(0,n.useState)(!1),r=a[0],o=a[1],i=(0,n.useState)(!1),m=i[0],u=i[1],d=(0,n.useState)(f[0]),g=d[0],h=d[1],b=(0,l.TH)();return(0,n.useEffect)((function(){var e;b.hash&&(e=f.find((function(e){return e.slug==b.hash}))),e?(h(e),u(!0),window.scrollTo(0,0)):u(!1),o(!0)})),n.createElement(s.Z,{title:"Portfolio",description:t.tagline},n.createElement("header",{className:p},n.createElement("h2",{className:"border-0 border-b-4 border-solid border-success"},"Portfolio")),r&&n.createElement("main",null,n.createElement("div",{className:"py-6 md:py-12"},n.createElement("div",{className:"my-0 mx-auto max-w-7xl"},!m&&n.createElement(E,null),m&&n.createElement(y,{projectItem:g}))),n.createElement(v,null)))}}}]);