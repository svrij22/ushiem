(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"065e":function(e,t,n){"use strict";n("0eb6")},"0eb6":function(e,t,n){},"13ea":function(e,t,n){},2947:function(e,t,n){},"31d7":function(e,t,n){"use strict";n("2947")},4303:function(e,t,n){"use strict";n("13ea")},4401:function(e,t,n){},"464d":function(e,t,n){},"4deb":function(e,t,n){e.exports=n.p+"img/bestrating.5f92143d.jpg"},5023:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header-component"),n("router-view"),n("footer-component")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-comp"},[n("div",{staticClass:"d-block text-white top-info"},[n("div",{staticClass:"slogan"},[e._v("Tuinaanleg is ons werk en onze passie. Gratis advies en offerte:")]),n("div",{staticClass:"phone"},[n("v-icon",{attrs:{name:"phone"}}),n("a",{attrs:{href:"tel:06-40455969"}},[e._v("06 - 123 12 123")])],1),n("div",{staticClass:"mail"},[n("v-icon",{attrs:{name:"envelope"}}),n("a",{attrs:{href:"mailto:info@tuinaanleg-vandorresteijn.nl"}},[e._v("info@test.nl")])],1)]),n("header",{class:"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar "+e.headerclass},[n("div",{staticClass:"container"},[e._m(0),n("side-bar-component")],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"navbar-brand mr-0 mr-md-2"},[a("img",{attrs:{src:n("c103")}})])}],c=(n("99af"),n("2ef0")),l=n.n(c),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}]},[n("div",{staticClass:"menu-btn"},[n("v-icon",{staticClass:"mr-2",attrs:{name:"bars",scale:"2"}}),e._v(" Menu ")],1)]),n("b-sidebar",{attrs:{id:"sidebar-right",title:"Menu",right:"","bg-variant":"dark","text-variant":"light",shadow:"sm",backdrop:""}},[n("b-list-group",{attrs:{"bg-variant":"dark"}},[n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.$router.push("/")}}},[e._v("Home")]),n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.$router.push("/ontwerpen")}}},[e._v("Ontwerpen")]),n("b-list-group-item",[e._v("Morbi leo risus")]),n("b-list-group-item",[e._v("Porta ac consectetur ac")]),n("b-list-group-item",[e._v("Vestibulum at eros")])],1)],1)],1)},d=[],p={name:"SideBarComponent"},v=p,m=(n("ff3c"),n("2877")),f=Object(m["a"])(v,u,d,!1,null,"5975378d",null),g=f.exports,h={name:"HeaderComponent",components:{SideBarComponent:g},data:function(){return{headerclass:!1,scrollDif:0}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:l.a.debounce((function(){var e="small-header"==this.headerclass?40:0,t=document.documentElement.scrollTop+e;console.log("test addscroll ".concat(e," scrolledy ").concat(t)),this.headerclass=t>50?"small-header":""}),80)}},b=h,w=(n("4303"),Object(m["a"])(b,s,o,!1,null,"08829329",null)),_=w.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container row"},[n("div",{staticClass:"grid-col"},[e._m(0),n("h5",[e._v("Ringwei 8")]),n("h5",[e._v("9153 BK")]),n("h5",[e._v("Brantgum")]),n("h5",[n("v-icon",{attrs:{name:"phone",scale:"2"}}),e._v(" 06 2008 1280")],1),n("h5",{staticClass:"mail"},[n("v-icon",{attrs:{name:"envelope",scale:"2"}}),e._v(" ushiemhoveniers@kpnmail.nl")],1)]),e._m(1),e._m(2),n("div",{staticClass:"grid-col"})])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[n("b",[e._v("Leen van der Sluijs")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-col"},[n("h4",[n("b",[e._v("Anne Coster")])]),n("h5",[e._v("Langgrousterwei 16")]),n("h5",[e._v("9137 RM")]),n("h5",[e._v("Oosternijkerk")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-col"},[n("h4",[n("b",[e._v("Informatie/advies")])]),n("h5",[e._v("Aarzel niet om ons om meer informatie of advies te vragen. Vul (geheel vrijblijvend het contactformulier in.")])])}],k={name:"FooterComponent"},x=k,y=(n("31d7"),Object(m["a"])(x,C,j,!1,null,"9b37940c",null)),O=y.exports,S={name:"App",components:{FooterComponent:O,HeaderComponent:_}},E=S,$=(n("034f"),Object(m["a"])(E,r,i,!1,null,null,null)),H=$.exports,T=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("head-carousel-component",[n("div",{staticClass:"container"},[n("div",{staticClass:"contact-card-head"},[n("contact-card",{attrs:{contactstyle:"max-width: 22rem;"}})],1)])]),n("div",{staticClass:"container main-page"},[e._m(0),e._m(1),n("div",{staticClass:"small-contact-card text-view"},[n("contact-card")],1)])],1)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 text-view"},[a("h1",{staticStyle:{color:"rebeccapurple"}},[e._v("Welkom!")]),a("h4",[e._v("Bij Ús Hiem hoveniers uit Brantgum."),a("br"),e._v("Het adres in Noord Oost Friesland voor:")]),a("h5",[a("ul",[a("li",[e._v("Ontwerp")]),a("li",[e._v("Aanleg van tuinen en sierbestrating in al haar facetten")]),a("li",[e._v("Groenonderhoud")])]),e._v(" Voor al uw tuinwensen bent u bij ons aan het goede adres. Maar ook voor “doe het zelvers” is Ús Hiem dé partner voor ontwerp en advies. ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:n("ed6b")}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",staticStyle:{"padding-top":"3rem"}},[a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:n("4deb")}})])]),a("div",{staticClass:"col-lg-7 text-view"},[a("h1",{staticStyle:{color:"rebeccapurple"}},[e._v("Complete tuinaanleg!")]),a("h5",[e._v(" Us Hiem is ook gespecialiseerd in de aanleg van nieuwe tuinen. "),a("br"),e._v(" We doen aan inmeten van het grondwerk, bestrating van terrassen, het plaatsen vanschuttingen, looppaden en inritten, overkappingen, veranda's en meer. ")])])])}],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-cont"},[n("swiper",{ref:"swiperTop",staticClass:"swiper gallery-top",attrs:{options:e.swiperOptionTop}},[n("swiper-slide",{staticClass:"slide-1"}),n("swiper-slide",{staticClass:"slide-2"}),n("swiper-slide",{staticClass:"slide-3"}),n("swiper-slide",{staticClass:"slide-4"}),n("swiper-slide",{staticClass:"slide-5"}),n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],1),n("div",{staticClass:"overlay",staticStyle:{width:"100%"}},[e._t("default")],2)],1)},z=[],L=n("7212"),A=n.n(L),D=(n("a7a3"),{name:"HeadCarouselComponent",title:"Thumbs gallery with Two-way control",components:{Swiper:L["Swiper"],SwiperSlide:L["SwiperSlide"]},data:function(){return{swiperOptionTop:{loop:!0,autoplay:{delay:5e3,stopOnLastSlide:!1},loopedSlides:5,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),F=D,I=(n("065e"),Object(m["a"])(F,B,z,!1,null,"aed4c29e",null)),N=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{staticClass:"mb-2",style:e.contactstyle,attrs:{title:"Aaanleg, onderhoud etc.",tag:"article"}},[n("hr"),n("div",{staticClass:"card-content"},[n("b-card-text",{staticStyle:{"text-align":"left","font-size":"18px"}},[n("b",[e._v("Leen van der Sluijs")]),n("br"),e._v(" Ringwei 8,"),n("br"),e._v(" 9153 BK Brantgum,"),n("br")]),n("b-button",{staticStyle:{"margin-bottom":"10px"},attrs:{href:"tel:0620081280",variant:"primary",size:"lg"}},[e._v("06 2008 1280")]),n("b-button",{attrs:{href:"mailto:ushiemhoveniers@kpnmail.nl",variant:"primary",size:"lg"}},[e._v("ushiemhoveniers@kpnmail.nl")])],1)])},V=[],W={name:"ContactCard",props:["contactstyle"]},G=W,J=(n("bbb2"),Object(m["a"])(G,R,V,!1,null,"43745866",null)),K=J.exports,U={name:"MainPageComponent",components:{ContactCard:K,HeadCarouselComponent:N}},q=U,Q=(n("af3a"),Object(m["a"])(q,M,P,!1,null,"012c4498",null)),X=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("head-image",[a("img",{attrs:{src:n("7c39")}})]),e._m(0)],1)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 text-view"},[a("h1",{staticStyle:{color:"rebeccapurple"}},[e._v("Tuinontwerp")]),a("h2",{staticStyle:{color:"rebeccapurple"}},[e._v("Een persoonlijk maatwerk")]),a("h5",[e._v(" Uw woning verdient een mooie tuin. Dit begint bij een vakkundig en doordacht ontwerp dat past bij uw woning maar vooral bij u. Wij komen graag bij u langs voor een oriënterend gesprek. Dit is kosteloos en verplicht u tot niets . Hierin kunnen wij u informeren over de mogelijkheden en onmogelijkheden van uw tuin en u snel een prijsindicatie geven van uw wensen. ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:n("ace5")}})])])])]),a("div",{attrs:{id:"container-2"}},[a("div",{staticClass:"row container"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:n("cc94")}})])]),a("div",{staticClass:"col-lg-6 text-view"},[a("h5",[e._v("Hierna kunnen uw ideeën en wensen eventueel worden verwerkt in een uniek en creatief ontwerp voor úw tuin. Natuurlijk wordt ieder ontwerp begeleid door een vrijblijvende en gespecificeerde offerte wat betreft eventuele aanleg en materiaalkosten. Doordat de tekening digitaal gemaakt word kan er nog naar hartelust geschoven en veranderd worden tot het ontwerp aan al uw wensen voldoet. ")])])])])])}],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-container"},[e._t("default")],2)},te=[],ne={name:"HeadImage"},ae=ne,re=(n("eac4"),Object(m["a"])(ae,ee,te,!1,null,"438aea52",null)),ie=re.exports,se={name:"OntwerpPageComponent",components:{HeadImage:ie}},oe=se,ce=(n("7cc7"),Object(m["a"])(oe,Y,Z,!1,null,"4e9ec5db",null)),le=ce.exports,ue=new T["a"]({routes:[{path:"/",component:X},{path:"/ontwerpen",component:le}]}),de=(n("d06d"),n("0874")),pe=n("5f5b"),ve=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(T["a"]),a["default"].use(A.a),a["default"].component("v-icon",de["a"]),a["default"].use(pe["a"]),a["default"].use(ve["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(H)},router:ue}).$mount("#app")},7060:function(e,t,n){},"7c39":function(e,t,n){e.exports=n.p+"img/drawn.8c5aed47.jpg"},"7cc7":function(e,t,n){"use strict";n("5023")},"85ec":function(e,t,n){},ace5:function(e,t,n){e.exports=n.p+"img/tek1.4ab494d5.jpg"},af3a:function(e,t,n){"use strict";n("464d")},bbb2:function(e,t,n){"use strict";n("c859")},c103:function(e,t,n){e.exports=n.p+"img/logo_m.ac97dbfa.png"},c859:function(e,t,n){},cc94:function(e,t,n){e.exports=n.p+"img/tek3.17d37d64.jpg"},eac4:function(e,t,n){"use strict";n("7060")},ed6b:function(e,t,n){e.exports=n.p+"img/pond2.626f0f8a.jpg"},ff3c:function(e,t,n){"use strict";n("4401")}});
//# sourceMappingURL=app.0b7c9343.js.map