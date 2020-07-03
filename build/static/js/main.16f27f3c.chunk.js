(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(25),a(26),a(2)),i=a(3),m=a(5),s=a(4),u=a(1),h=a.n(u),d={name:"Branden.",headerTagline:["Hi \ud83d\udc4b You found me! I am Branden.","Full Stack Developer  ","from Cleveland, Ohio"],contactEmail:"brandenlanghals@gmail.com",abouttext:"I used to be a moderately successful musician, and now I am a moderately talented software developer. Like many others, I needed a career change and decided to follow through with a passion I had years ago.   Back then, obsessing over my Xanga page, or customizing the details of my  MySpace  was never something I thought could lead to a career. My passion for web development, and my drive for getting things done led me to the Case Western Reserve Coding Bootcamp.   Full stack development cannot be mastered in six months, but the real value is in the effort you put forth to confidently study each skill.  In this time I have developed dynamic applications using HTML, CSS, JavaScript, React, SQL, JSON, AJAX, NodeJS, apps using third-party APIs,  got really good at debugging, and all during the new reality of the COVID-19 pandemic.   With continued learning, I look forward to working with passion, and integrity for a company whose values are aligned with my own.   ",aboutImage:"https://i.ibb.co/nkwkH4V/tie5.png",ShowAboutImage:!0,projects:[{id:1,title:"I'm Hungry",service:"UI/UX Design",imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:2,title:"Project Two",service:"Website Development",imageSrc:"https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:3,title:"Project Three",service:"Web App",imageSrc:"https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:4,title:"Project Four",service:"Branding",imageSrc:"https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"}],social:[{name:"Github",url:"https://github.com/Brandenlanghals"}]},p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"CREATIVE"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},d.name))),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},d.headerTagline[0],r.a.createElement("br",null),d.headerTagline[1],r.a.createElement("br",null),d.headerTagline[2],r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement("a",{href:"mailto:".concat(d.contactEmail),rel:"noopener noreferrer"},"Contact")))))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},"About.")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",null,d.abouttext))),d.ShowAboutImage?r.a.createElement("img",{src:d.aboutImage,alt:"about iamge"}):null)}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service)))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(h.a,{bottom:!0,cascade:!0},"Work.")),r.a.createElement("div",{className:"work-content"},d.projects.map(function(e){return r.a.createElement(b,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})})))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0}," Contact.")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("h1",null,"Let\u2019s create your next",r.a.createElement("br",null),r.a.createElement("span",{className:"amazing-color"},"experience together")),r.a.createElement("a",{href:"mailto:".concat(d.contactEmail),className:"email"},d.contactEmail),r.a.createElement("ul",null,d.social.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))})))))}}]),a}(n.Component),g=a(7),y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.scrollToTop=function(){g.animateScroll.scrollToTop()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),a}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(p,null)),r.a.createElement("div",{className:"About"},r.a.createElement(v,null)),r.a.createElement("div",{className:"work"},r.a.createElement(f,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.16f27f3c.chunk.js.map