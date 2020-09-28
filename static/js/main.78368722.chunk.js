(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(58),a(22)),s=a(146),m=a(147),i=(a(18),a(8)),u=a(51),f=a(9);function p(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  font-weight: bold;\n"]);return p=function(){return e},e}function d(){var e=Object(i.a)(["\n  display: block;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," 1000ms linear;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(i.a)(["\n  position: absolute;\n  display: block;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," 700ms forwards;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(i.a)(["\n  display: inline-block;\n  position: relative;\n"]);return E=function(){return e},e}function h(){var e=Object(i.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(i.a)(["\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]);return g=function(){return e},e}var v=function(e){return{id:String(j(1e4,99999)),createdAt:Date.now(),color:e,size:j(10,30),style:{top:j(0,100)+"%",left:j(0,100)+"%",zIndex:999}}},N="(prefers-reduced-motion: no-preference)",y="undefined"===typeof window,w=function(){return!!y||!window.matchMedia(N).matches};var j=function(e,t){return Math.floor(Math.random()*(t-e))+e},x=function(e){var t=e.size,a=e.color,n=e.style;return r.a.createElement(z,{style:n},r.a.createElement(S,{width:t,height:t,viewBox:"0 0 68 68",fill:"none"},r.a.createElement("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:a})))},k=Object(f.b)(g()),O=Object(f.b)(h()),C=f.a.span(E()),z=f.a.span(b(),k),S=f.a.svg(d(),O),T=f.a.strong(p()),I=function(e){var t=e.color,a=void 0===t?"#CCC":t,c=e.children,o=Object(u.a)(e,["color","children"]),s=Object(n.useState)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[];"undefined"===typeof t&&(t=e,e=0);for(var r=e;r<t;r+=a)n.push(r);return n}(3).map((function(){return v(a)}))})),m=Object(l.a)(s,2),i=m[0],f=m[1],p=function(){var e=Object(n.useState)(w),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=window.matchMedia(N),t=function(e){r(!e.matches)};return e.addListener(t),function(){e.removeListener(t)}}),[]),a}();return function(e,t,a){var r=Object(n.useRef)(null),c=Object(n.useRef)(e);Object(n.useEffect)((function(){c.current=e})),Object(n.useEffect)((function(){if("number"===typeof t&&"number"===typeof a){!function e(){var n=j(t,a);r.current=window.setTimeout((function(){c.current(),e()}),n)}()}return function(){return window.clearTimeout(r.current)}}),[t,a]),Object(n.useCallback)((function(){window.clearTimeout(r.current)}),[])}((function(){var e=v(a),t=Date.now(),n=i.filter((function(e){return t-e.createdAt<750}));n.push(e),f(n)}),p?null:50,p?null:450),r.a.createElement(C,o,i.map((function(e){return r.a.createElement(x,{key:e.id,color:e.color,size:e.size,style:e.style})})),r.a.createElement(T,null,c))},M=a(16),B={color:"white"};var L=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("header",{className:"page-header"},r.a.createElement(s.a,{id:"nav",className:"navbar-dark",expand:"lg",expanded:a,role:"navigation"},r.a.createElement(s.a.Brand,{className:"mb-0 h1",style:B},r.a.createElement(I,null,"Jacob Thompson")),r.a.createElement(s.a.Toggle,{onClick:function(){return c(!a&&"expanded")},type:"button","aria-controls":"basic-nav","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement(s.a.Collapse,{id:"basic-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(M.b,{onClick:function(){return c(!a)},className:"nav-button mt-1 pt-1",to:"/",style:B},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," Home"),r.a.createElement(M.b,{onClick:function(){return c(!a)},className:"nav-button pt-1",to:"/project",style:B},"Portfolio"),r.a.createElement(M.b,{onClick:function(){return c(!a)},className:"nav-button pt-1",to:"/contact",style:B},"Contact")))),r.a.createElement("div",{id:"header-line",className:"py-1 mb-3"}))},A={color:"white"};var D=function(){return r.a.createElement("footer",{className:"page-footer font-small"},r.a.createElement("div",{id:"footer-line",className:"py-1"}),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("span",{className:"justify-content-center"},r.a.createElement("a",{target:"_blank",href:"#",className:"footer-icon"},r.a.createElement("i",{className:"fab fa-linkedin-in fa-lg mr-2",style:A})),r.a.createElement("a",{target:"_blank",href:"https://github.com/jkthomps21/",className:"footer-icon mr-2"},r.a.createElement("i",{className:"fab fa-github fa-lg",style:A})),r.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/jkthomps21/",className:"footer-icon"},r.a.createElement("i",{className:"fab fa-instagram fa-lg",style:A})))))},P=a(6),J=a(44),R=a.n(J),W=a(21);function _(){var e=Object(i.a)(["\n    animation: 1s ",";\n"]);return _=function(){return e},e}function q(){var e=Object(i.a)(["",""]);return q=function(){return e},e}var H=Object(f.b)(q(),W.fadeInLeft),Q=f.a.div(_(),H);var G=function(){return r.a.createElement("main",{id:"home-page",className:"container"},r.a.createElement("br",null),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(Q,{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 about mb-4"},r.a.createElement("img",{src:R.a,className:"rounded-circle img-fluid img-dec",alt:"Professional Photo"}),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("p",{className:"text-center"},"GIS Analyst studying to be a full-stack web developer."),r.a.createElement("p",{className:"text-center"},"My current work focuses on data analysis, programming and cartography. I utilize mapping software to analyze location-based data and design digital maps with geographic data and various other data sets."),r.a.createElement("p",{className:"text-center"},"Please feel free to contact me with any questions or for further information."),r.a.createElement("p",{className:"text-center"},"Click ",r.a.createElement("a",{href:"assets/WebResume.pdf"},"here")," to view my resume!"))),r.a.createElement("br",null))},Z=a(45),F=a.n(Z),K=a(46),U=a.n(K),V=a(47),X=a.n(V),Y=a(48),$=a.n(Y),ee=a(49),te=a.n(ee),ae=a(50),ne=a.n(ae);function re(){var e=Object(i.a)(["\n    animation: 1s ",";\n"]);return re=function(){return e},e}function ce(){var e=Object(i.a)(["\n    animation: 1s ",";\n"]);return ce=function(){return e},e}function oe(){var e=Object(i.a)(["",""]);return oe=function(){return e},e}function le(){var e=Object(i.a)(["",""]);return le=function(){return e},e}var se=Object(f.b)(le(),W.zoomInLeft),me=Object(f.b)(oe(),W.zoomInRight),ie=f.a.div(ce(),se),ue=f.a.div(re(),me);var fe=function(){return r.a.createElement("main",{id:"portfolio-page",className:"container"},r.a.createElement("br",null),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-3"},r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement("div",{className:"col about mb-5"},r.a.createElement("p",{className:"text-center mt-3"},"These are simple examples of my work utilizing HTML, CSS, Javascript, and APIs"))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ie,{className:"col contain about-portfolio bounce-left mb-3 px-0"},r.a.createElement("a",{href:"https://mysterious-refuge-71478.herokuapp.com/"},r.a.createElement("img",{src:F.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Buy-The-Book!"))))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ue,{className:"col contain about-portfolio bounce-right mb-3 px-0"},r.a.createElement("a",{href:"https://jkthomps21.github.io/Local-News-App/"},r.a.createElement("img",{src:U.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Local News App"))))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ie,{className:"col contain about-portfolio bounce-left mb-3 px-0"},r.a.createElement("a",{href:"https://nameless-hollows-54923.herokuapp.com/"},r.a.createElement("img",{src:X.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Eat-Da-Burger!"))))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ue,{className:"col contain about-portfolio bounce-right mb-3 px-0"},r.a.createElement("a",{href:"https://jkthomps21.github.io/weatherDashboard/"},r.a.createElement("img",{src:$.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Weather Dashboard"))))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ie,{className:"col contain about-portfolio bounce-left mb-3 px-0"},r.a.createElement("a",{href:"https://jkthomps21.github.io/workDayScheduler/"},r.a.createElement("img",{src:te.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Workday Scheduler"))))),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement(ue,{className:"col contain about-portfolio bounce-right mb-2 px-0"},r.a.createElement("a",{href:"https://jkthomps21.github.io/codingQuiz/"},r.a.createElement("img",{src:ne.a,width:"100%",height:"115px",alt:"",className:"img-style"}),r.a.createElement("div",{className:"overlay px-0"},r.a.createElement("div",{className:"text"},"Coding Quiz"))))))),r.a.createElement("br",null))},pe=a(145);var de=function(){return r.a.createElement("main",{id:"contact-page",className:"container"},r.a.createElement("br",null),r.a.createElement("section",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 col-xl-5 about bounce-right mb-4"},r.a.createElement("section",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("span",{className:"h1"},"Contact"))),r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"w-100 mx-1"},r.a.createElement("hr",null))),r.a.createElement("section",{className:"container"},r.a.createElement(pe.a,{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST",role:"form"},r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{for:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"John Smith"})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"example@gmail.com"})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{for:"subject"},"Subject"),r.a.createElement("input",{type:"text",id:"subject",name:"subject",className:"form-control"})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{for:"message"},"Message"),r.a.createElement("textarea",{type:"text",id:"message",name:"message",className:"form-control",rows:"4"})),r.a.createElement("button",{className:"btn button-color mb-3",onclick:"document.getElementById('contact-form').submit();"},"Send"))))),r.a.createElement("br",null))};var be=function(){return r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/about",component:G}),r.a.createElement(P.a,{exact:!0,path:"/project",component:fe}),r.a.createElement(P.a,{exact:!0,path:"/contact",component:de}),r.a.createElement(P.a,{path:"/",component:G}))),r.a.createElement(D,null))};o.a.render(r.a.createElement(M.a,null,r.a.createElement(be,null)),document.getElementById("root"))},18:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/profMe.93be9549.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/books.c2fd9239.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/news.386d891f.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/burgers.1976903d.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/weather.9b9b0fd7.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/schedules.c1b83b25.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/quiz.0edab2eb.jpg"},53:function(e,t,a){e.exports=a(143)},58:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.78368722.chunk.js.map