(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"10Zl":function(e,t,n){e.exports={wrapper:"header-module--wrapper--2PxOX",logoWrapper:"header-module--logoWrapper--3DpK4",logo:"header-module--logo--3Q9Sa",menuWrapper:"header-module--menuWrapper--2jKIJ",menuLinkOn:"header-module--menuLinkOn--2ITnq",menuLinkOff:"header-module--menuLinkOff--2vAqp"}},ATp1:function(e,t,n){e.exports=n.p+"static/logo-cf366d688a35fc3069bcb733a2d8bd05.png"},Bl7J:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("q1tI"),r=n.n(a),u=n("10Zl"),o=n.n(u),l=n("ATp1"),i=n.n(l),c=(n("xfY5"),n("+ZDr")),s=n.n(c);n("lw3w"),n("emEt").default.enqueue;function f(e){var t=e.pathName,n=e.headerRef;return r.a.createElement("div",{className:o.a.wrapper,ref:n},r.a.createElement("div",{className:o.a.logoWrapper},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:i.a,alt:"Forif Logo",className:o.a.logo}))),r.a.createElement("div",{className:o.a.menuWrapper},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/About",className:o.a["menuLink"+("/About"===t?"On":"Off")]},"About")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/Announcement",className:o.a["menuLink"+("/Announcement"===t?"On":"Off")]},"Announcement")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/Staffs",className:o.a["menuLink"+("/Staffs"===t?"On":"Off")]},"Staffs")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/Studies",className:o.a["menuLink"+("/Studies"===t?"On":"Off")]},"Studies")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/Hackathon",className:o.a["menuLink"+("/Hackathon"===t?"On":"Off")]},"Hackathon")))))}var m=n("UNbL"),p=n.n(m);function d(){return r.a.createElement("div",{className:p.a.footerWrapper},"This is your FFFFFFFFFFFFOOOOOOOOOOTTTTTTTTTTTeR")}var E=n("VQ3a"),N=n.n(E);function O(e){var t=e.sideList,n=e.setSideCurrent,u=Object(a.useState)(0),o=u[0],l=u[1];return r.a.createElement("div",{className:N.a.sidebarWrapper},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:N.a["sideMenu"+(o===t?"On":"Off")],onClick:(a=t,function(){n(a),l(a)})},e));var a}))))}n("IXuT");var h=n("fcpr"),v=n.n(h);function b(e){var t=e.sideList,n=e.setSideCurrent,u=e.pathName,o=e.children;Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]);var l=Object(a.useRef)(null),i=Object(a.useRef)(null),c=function(e){l.current.style.top=0===e.srcElement.scrollingElement.scrollTop?"0px":"-60px"};return r.a.createElement("div",null,r.a.createElement(f,{pathName:u,headerRef:l}),r.a.createElement(O,{sideList:t,setSideCurrent:n}),r.a.createElement("div",{className:v.a.bodyWrapper,ref:i},o),r.a.createElement(d,null))}b.defaultProps={sideList:[],setSideCurrent:function(e){console.log(e)},pathName:null}},IXuT:function(e,t,n){},UNbL:function(e,t,n){e.exports={footerWrapper:"footer-module--footerWrapper--2urVz"}},VQ3a:function(e,t,n){e.exports={sidebarWrapper:"sidebar-module--sidebarWrapper--5Woum",sideMenuOn:"sidebar-module--sideMenuOn--35McL",sideMenuOff:"sidebar-module--sideMenuOff--2j6lx"}},"dF/s":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("q1tI"),r=n.n(a),u=n("Bl7J");function o(e){var t=e.location;return r.a.createElement(u.a,{pathName:t.pathname},r.a.createElement("h1",null," This is About page!"))}},fcpr:function(e,t,n){e.exports={bodyWrapper:"layout-module--bodyWrapper--2tiw1"}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},qncB:function(e,t,n){var a=n("XKFU"),r=n("vhPU"),u=n("eeVq"),o=n("/e88"),l="["+o+"]",i=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),s=function(e,t,n){var r={},l=u((function(){return!!o[e]()||"​"!="​"[e]()})),i=r[e]=l?t(f):o[e];n&&(r[n]=i),a(a.P+a.F*l,"String",r)},f=s.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e};e.exports=s},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var a=n("q1tI"),r=n.n(a),u=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json)):null}},xfY5:function(e,t,n){"use strict";var a=n("dyZX"),r=n("aagx"),u=n("LZWt"),o=n("Xbzi"),l=n("apmT"),i=n("eeVq"),c=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,m=n("qncB").trim,p=a.Number,d=p,E=p.prototype,N="Number"==u(n("Kuth")(E)),O="trim"in String.prototype,h=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,u=(t=O?t.trim():m(t,3)).charCodeAt(0);if(43===u||45===u){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===u){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var o,i=t.slice(2),c=0,s=i.length;c<s;c++)if((o=i.charCodeAt(c))<48||o>r)return NaN;return parseInt(i,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(N?i((function(){E.valueOf.call(n)})):"Number"!=u(n))?o(new d(h(t)),n,p):h(t)};for(var v,b=n("nh4g")?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;b.length>g;g++)r(d,v=b[g])&&!r(p,v)&&f(p,v,s(d,v));p.prototype=E,E.constructor=p,n("KroJ")(a,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-about-js-a0f267062e32fe088424.js.map