"use strict";(self.webpackChunkheatguru_tech=self.webpackChunkheatguru_tech||[]).push([[363],{7781:function(e,t,a){a.r(t),a.d(t,{ProjectListing:function(){return f},ProjectListings:function(){return v},default:function(){return k}});var n=a(7294),l=a(6550),r=a(6010),c=a(9960),i=a(4996),m=a(2263),o=a(7961),s=a(7814),u=a(9417),d=a(3024),E="projectPageHeader__pp0",p="projectItem_UQAg",g="directory_Oisk",b=[];function h(e){var t,a=e.category,l=e.size,r=void 0===l?"1x":l;switch(a){case"Project":default:t=u.gMD;break;case"Open Source Tool":t=u.CgH;break;case"Website":t=d.bRs;break;case"Game":t=u.l9D}return n.createElement(s.G,{alt:a,size:r,icon:t})}function v(){return n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-0"},b.map((function(e){return n.createElement("div",{id:e.title,key:e.title+"-card",className:"bg-secondary-800 hover:bg-secondary-900 transition rounded-lg overflow-hidden"},n.createElement(c.Z,{to:(0,i.Z)(e.slug),className:"block h-full text-white hover:text-white no-underline hover:no-underline"},e.imageUrl?n.createElement("div",{className:"overflow-hidden h-40 md:h-48"},n.createElement("img",{src:(0,i.Z)(e.imageUrl),alt:e.title})):n.createElement("div",{className:"alternate"==e.bgColor?"overflow-hidden bg-danger h-40 md:h-48":"overflow-hidden bg-success h-40 md:h-48"},n.createElement("h2",{className:"m-3 inline-block"},e.title)),n.createElement("div",{className:"pt-4 px-4"},n.createElement("h3",{className:"mb-1"},e.title),n.createElement("p",{className:"text-s mb-2 text-secondary-500"},e.period),n.createElement("p",null,e.subtitle),n.createElement("p",{className:"text-primary-default font-bold"},"Read more"))))})))}function f(e){var t=e.projectItem;return n.createElement("div",{className:(0,r.Z)("text--center margin-bottom--xl px-4",p)},n.createElement(c.Z,{to:(0,i.Z)("/projects")},n.createElement("button",{className:"border-0 rounded py-2 px-4 mb-2 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer"},"Back")),n.createElement("h1",null,t.title),n.createElement("h2",null,t.subtitle),t.imageUrl&&n.createElement("img",{src:(0,i.Z)(t.imageUrl),alt:t.title}),n.createElement("div",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(h,{category:t.category})," ",t.category),n.createElement("li",null,n.createElement(s.G,{alt:"Calendar",icon:u.fT7})," ",t.period),n.createElement("li",null,n.createElement(s.G,{alt:"Code",icon:u.dT$})," ",t.tech),t.team&&n.createElement("li",null,n.createElement(s.G,{alt:"Team",icon:u.FVb})," ",t.team.map((function(e,a){return n.createElement("span",{key:a},e.link&&n.createElement("a",{href:e.link},e.name),!e.link&&e.name,a<t.team.length-1?", ":"")})))),n.createElement("b",null,"Description"),n.createElement("div",null,t.description),t.links&&n.createElement(n.Fragment,null,n.createElement("b",null,"Links"),n.createElement("ul",null,t.links.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.link},n.createElement(s.G,{alt:"Link",icon:u.nNP})," ",e.name))}))))),n.createElement(c.Z,{to:(0,i.Z)("/projects")},n.createElement("button",{className:"border-0 rounded py-2 px-4 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer"},"More projects")))}function N(){return n.createElement("section",{className:g},n.createElement("div",{className:"container"},n.createElement("h3",null,"Continue exploring?"),n.createElement("nav",{className:"pagination-nav"},n.createElement("div",{className:"pagination-nav__item"},n.createElement(c.Z,{className:"pagination-nav__link",to:(0,i.Z)("blog/")},n.createElement("div",{className:"pagination-nav__sublabel"},"Read"),n.createElement("div",{className:"pagination-nav__label"},"My blog"))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n.createElement("a",{className:"pagination-nav__link",href:(0,i.Z)("pdf/resume.pdf")},n.createElement("div",{className:"pagination-nav__sublabel"},"Download"),n.createElement("div",{className:"pagination-nav__label"},"My resume"))))))}function k(){var e=(0,m.Z)().siteConfig,t=void 0===e?{}:e,a=(0,n.useState)(!1),r=a[0],c=a[1],i=(0,n.useState)(!1),s=i[0],u=i[1],d=(0,n.useState)(b[0]),p=d[0],g=d[1],h=(0,l.TH)();return(0,n.useEffect)((function(){var e;h.hash&&(e=b.find((function(e){return e.slug==h.hash}))),e?(g(e),u(!0),window.scrollTo(0,0)):u(!1),c(!0)})),n.createElement(o.Z,{title:"Portfolio",description:t.tagline},n.createElement("header",{className:E},n.createElement("h2",{className:"border-0 border-b-4 border-solid border-success"},"Portfolio")),r&&n.createElement("main",null,n.createElement("div",{className:"py-6 md:py-12"},n.createElement("div",{className:"my-0 mx-auto max-w-7xl"},!s&&n.createElement(v,null),s&&n.createElement(f,{projectItem:p}))),n.createElement(N,null)))}}}]);