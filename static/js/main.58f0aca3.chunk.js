(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=(a(56),a(22)),i=a(146),s=a(147),m=(a(18),a(8)),u=a(50),f=a(9);function p(){var e=Object(m.a)(["\n  position: relative;\n  z-index: 2;\n  font-weight: bold;\n"]);return p=function(){return e},e}function d(){var e=Object(m.a)(["\n  display: block;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," 1000ms linear;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(m.a)(["\n  position: absolute;\n  display: block;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," 700ms forwards;\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(m.a)(["\n  display: inline-block;\n  position: relative;\n"]);return h=function(){return e},e}function E(){var e=Object(m.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]);return E=function(){return e},e}function g(){var e=Object(m.a)(["\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]);return g=function(){return e},e}var v=function(e){return{id:String(y(1e4,99999)),createdAt:Date.now(),color:e,size:y(10,30),style:{top:y(0,100)+"%",left:y(0,100)+"%",zIndex:999}}},N="(prefers-reduced-motion: no-preference)",j="undefined"===typeof window,x=function(){return!!j||!window.matchMedia(N).matches};var y=function(e,t){return Math.floor(Math.random()*(t-e))+e},w=function(e){var t=e.size,a=e.color,n=e.style;return c.a.createElement(z,{style:n},c.a.createElement(T,{width:t,height:t,viewBox:"0 0 68 68",fill:"none"},c.a.createElement("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:a})))},k=Object(f.b)(g()),O=Object(f.b)(E()),C=f.a.span(h()),z=f.a.span(b(),k),T=f.a.svg(d(),O),I=f.a.strong(p()),S=function(e){var t=e.color,a=void 0===t?"#CCC":t,r=e.children,o=Object(u.a)(e,["color","children"]),i=Object(n.useState)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[];"undefined"===typeof t&&(t=e,e=0);for(var c=e;c<t;c+=a)n.push(c);return n}(3).map((function(){return v(a)}))})),s=Object(l.a)(i,2),m=s[0],f=s[1],p=function(){var e=Object(n.useState)(x),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=window.matchMedia(N),t=function(e){c(!e.matches)};return e.addListener(t),function(){e.removeListener(t)}}),[]),a}();return function(e,t,a){var c=Object(n.useRef)(null),r=Object(n.useRef)(e);Object(n.useEffect)((function(){r.current=e})),Object(n.useEffect)((function(){if("number"===typeof t&&"number"===typeof a){!function e(){var n=y(t,a);c.current=window.setTimeout((function(){r.current(),e()}),n)}()}return function(){return window.clearTimeout(c.current)}}),[t,a]),Object(n.useCallback)((function(){window.clearTimeout(c.current)}),[])}((function(){var e=v(a),t=Date.now(),n=m.filter((function(e){return t-e.createdAt<750}));n.push(e),f(n)}),p?null:50,p?null:450),c.a.createElement(C,o,m.map((function(e){return c.a.createElement(w,{key:e.id,color:e.color,size:e.size,style:e.style})})),c.a.createElement(I,null,r))},B=a(15),L={color:"white"};var M=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return c.a.createElement("header",{className:"page-header"},c.a.createElement(i.a,{id:"nav",className:"navbar-dark",expand:"lg",expanded:a,role:"navigation"},c.a.createElement(i.a.Brand,{className:"mb-0 h1",style:L},c.a.createElement(S,null,"Jacob Thompson")),c.a.createElement(i.a.Toggle,{onClick:function(){return r(!a&&"expanded")},type:"button","aria-controls":"basic-nav","aria-expanded":"false","aria-label":"Toggle navigation"}),c.a.createElement(i.a.Collapse,{id:"basic-nav"},c.a.createElement(s.a,{className:"mr-auto"},c.a.createElement(B.b,{className:"nav-button pt-1 mr-2",to:"/",style:L,onClick:function(){return r(!1)}},c.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," Home"),c.a.createElement(B.b,{className:"nav-button pt-1 mr-2",to:"/project",style:L,onClick:function(){return r(!1)}},"Portfolio"),c.a.createElement(B.b,{className:"nav-button pt-1",to:"/contact",style:L,onClick:function(){return r(!1)}},"Contact")))),c.a.createElement("div",{id:"header-line",className:"py-1 mb-3"}))},D={color:"white"};var A=function(){return c.a.createElement("footer",{className:"page-footer font-small"},c.a.createElement("div",{id:"footer-line",className:"py-1"}),c.a.createElement("div",{className:"footer-copyright text-center py-3"},c.a.createElement("span",{className:"justify-content-center"},c.a.createElement("a",{target:"_blank",href:"#",className:"footer-icon"},c.a.createElement("i",{className:"fab fa-linkedin-in fa-lg mr-2",style:D})),c.a.createElement("a",{href:"https://github.com/jkthomps21/",className:"footer-icon mr-2"},c.a.createElement("i",{className:"fab fa-github fa-lg",style:D})),c.a.createElement("a",{href:"https://www.instagram.com/jkthomps21/",className:"footer-icon"},c.a.createElement("i",{className:"fab fa-instagram fa-lg",style:D})))))},J=a(4),R=a(41),P=a.n(R),H=a(21),W=a(42),Q=a.n(W);function q(){var e=Object(m.a)(["\n    animation: 1s ",";\n"]);return q=function(){return e},e}function Z(){var e=Object(m.a)(["",""]);return Z=function(){return e},e}var _=Object(f.b)(Z(),H.fadeInLeft),F=f.a.div(q(),_);var G=function(){return c.a.createElement("main",{id:"home-page",className:"container"},c.a.createElement("br",null),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(F,{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 about mb-4"},c.a.createElement("img",{src:P.a,className:"rounded-circle img-fluid img-dec",alt:"Professional"}),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement("p",{className:"text-center"},"Hi, I'm Jake and welcome to my portfolio!"),c.a.createElement("p",{className:"text-center"},"I'm a full-stack developer that enjoys creating interactive elements in the browser and developing server-side websites/applications utilizing databases."),c.a.createElement("p",{className:"text-center"},"I like to code things from scratch and enjoy bringing ideas to life in the browser."),c.a.createElement("p",{className:"text-center"},"Click ",c.a.createElement("a",{href:Q.a},"here")," to view my resume!"))),c.a.createElement("br",null))},K=a(43),U=a.n(K),V=a(44),X=a.n(V),Y=a(45),$=a.n(Y),ee=a(46),te=a.n(ee),ae=a(47),ne=a.n(ae),ce=a(48),re=a.n(ce),oe=a(49),le=a.n(oe);function ie(){var e=Object(m.a)(["\n    animation: 1s ",";\n"]);return ie=function(){return e},e}function se(){var e=Object(m.a)(["\n    animation: 1s ",";\n"]);return se=function(){return e},e}function me(){var e=Object(m.a)(["",""]);return me=function(){return e},e}function ue(){var e=Object(m.a)(["",""]);return ue=function(){return e},e}var fe=Object(f.b)(ue(),H.zoomInLeft),pe=Object(f.b)(me(),H.zoomInRight),de=f.a.div(se(),fe),be=f.a.div(ie(),pe);var he=function(){return c.a.createElement("main",{id:"portfolio-page",className:"container"},c.a.createElement("br",null),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-3"},c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement("div",{className:"col about mb-5"},c.a.createElement("p",{className:"text-center mt-3"},"These are simple examples of my work utilizing HTML, CSS, Javascript, and APIs"))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(be,{className:"col contain about-portfolio bounce-right mb-3 px-0"},c.a.createElement("a",{href:"https://project-3-recipe-box.herokuapp.com/login"},c.a.createElement("img",{src:le.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Recipe Box"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(de,{className:"col contain about-portfolio bounce-left mb-3 px-0"},c.a.createElement("a",{href:"https://mysterious-refuge-71478.herokuapp.com/"},c.a.createElement("img",{src:U.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Buy-The-Book!"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(be,{className:"col contain about-portfolio bounce-right mb-3 px-0"},c.a.createElement("a",{href:"https://jkthomps21.github.io/Local-News-App/"},c.a.createElement("img",{src:X.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Local News App"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(de,{className:"col contain about-portfolio bounce-left mb-3 px-0"},c.a.createElement("a",{href:"https://nameless-hollows-54923.herokuapp.com/"},c.a.createElement("img",{src:$.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Eat-Da-Burger!"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(be,{className:"col contain about-portfolio bounce-right mb-3 px-0"},c.a.createElement("a",{href:"https://jkthomps21.github.io/weatherDashboard/"},c.a.createElement("img",{src:te.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Weather Dashboard"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(de,{className:"col contain about-portfolio bounce-left mb-3 px-0"},c.a.createElement("a",{href:"https://jkthomps21.github.io/workDayScheduler/"},c.a.createElement("img",{src:ne.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Workday Scheduler"))))),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement(be,{className:"col contain about-portfolio bounce-right mb-2 px-0"},c.a.createElement("a",{href:"https://jkthomps21.github.io/codingQuiz/"},c.a.createElement("img",{src:re.a,width:"100%",height:"115px",alt:"",className:"img-style"}),c.a.createElement("div",{className:"overlay px-0"},c.a.createElement("div",{className:"text"},"Coding Quiz"))))))),c.a.createElement("br",null))};var Ee=function(){return c.a.createElement("main",{id:"contact-page",className:"container"},c.a.createElement("br",null),c.a.createElement("section",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 about bounce-right my-4"},c.a.createElement("section",{className:"row mt-4"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h3",null,"Thanks for reaching out!"))),c.a.createElement("section",{className:"row"},c.a.createElement("div",{className:"w-100 mx-1"},c.a.createElement("hr",null))),c.a.createElement("section",{className:"container text-center"},c.a.createElement("h5",null,"Email: ",c.a.createElement("a",{href:"mailto:jkthomps21@gmail.com"},"jkthomps21@gmail.com")),c.a.createElement("h5",{className:"pb-2"},"Phone: (218) 280-8828")))),c.a.createElement("br",null))};var ge=function(){return c.a.createElement("div",{className:""},c.a.createElement("div",null,c.a.createElement(M,null),c.a.createElement(J.c,null,c.a.createElement(J.a,{exact:!0,path:"/about",component:G}),c.a.createElement(J.a,{exact:!0,path:"/project",component:he}),c.a.createElement(J.a,{exact:!0,path:"/contact",component:Ee}),c.a.createElement(J.a,{path:"/",component:G}))),c.a.createElement(A,null))};o.a.render(c.a.createElement(B.a,null,c.a.createElement(ge,null)),document.getElementById("root"))},18:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/profMe.93be9549.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/WebResume1.49ea4198.pdf"},43:function(e,t,a){e.exports=a.p+"static/media/books.c2fd9239.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/news.386d891f.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/burgers.1976903d.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/weather.9b9b0fd7.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/schedules.c1b83b25.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/quiz.0edab2eb.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/recipes.d0302c58.jpg"},51:function(e,t,a){e.exports=a(143)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.58f0aca3.chunk.js.map