(function(t){function s(s){for(var a,l,o=s[0],c=s[1],r=s[2],C=0,g=[];C<o.length;C++)l=o[C],A[l]&&g.push(A[l][0]),A[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);n&&n(s);while(g.length)g.shift()();return e.push.apply(e,r||[]),i()}function i(){for(var t,s=0;s<e.length;s++){for(var i=e[s],a=!0,o=1;o<i.length;o++){var c=i[o];0!==A[c]&&(a=!1)}a&&(e.splice(s--,1),t=l(l.s=i[0]))}return t}var a={},A={app:0},e=[];function l(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,s,i){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)l.d(i,a,function(s){return t[s]}.bind(null,a));return i},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var r=0;r<o.length;r++)s(o[r]);var n=c;e.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"0ac8":function(t,s){t.exports="data:image/jpeg;base64,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"},"101f":function(t,s,i){},"10a8":function(t,s,i){"use strict";var a=i("b2e1"),A=i.n(a);A.a},"136f":function(t,s,i){t.exports=i.p+"img/product-3.9c8230a5.jpg"},1559:function(t,s,i){"use strict";var a=i("22ea"),A=i.n(a);A.a},1690:function(t,s,i){t.exports=i.p+"img/product-2.8e978258.jpg"},"1e3d":function(t,s,i){},"22ea":function(t,s,i){},"2eaf":function(t,s,i){t.exports=i.p+"img/product-1.d65ba704.jpg"},"308e":function(t,s,i){},3402:function(t,s,i){t.exports=i.p+"img/product-9.c48a418a.jpg"},3840:function(t,s,i){},"3d56":function(t,s,i){t.exports=i.p+"img/product-4.3a533ee2.jpg"},"56d7":function(t,s,i){"use strict";i.r(s);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),A=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"container"},[i("Header")],1)]),i("main",[i("Home",{staticClass:"home"})],1),i("Footer")],1)},e=[],l=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("Logo"),i("HeaderNav")],1)},o=[],c=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"header__logo logo",attrs:{href:"#",title:"link to root page"}},[a("img",{staticClass:"logo__image",attrs:{src:i("9b19"),alt:"logo"}})])}],n={name:"Logo"},C=n,g=(i("86e3"),i("2877")),u=Object(g["a"])(C,c,r,!1,null,"0fb4158e",null),p=u.exports,_=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav",{staticClass:"header-nav"},[i("ul",{staticClass:"header-nav__list"},[i("li",{staticClass:"header-nav__item"},[i("a",{staticClass:"header-nav__links header-nav__links-active",attrs:{href:"#",title:"link to Home page"}},[t._v("Home")])]),i("li",{staticClass:"header-nav__item"},[i("a",{staticClass:"header-nav__links",attrs:{href:"#",title:"link to About page"}},[t._v("Products")])]),i("li",{staticClass:"header-nav__item"},[i("a",{staticClass:"header-nav__links",attrs:{href:"#",title:"link to Portfolio page"}},[t._v("Portfolio")])]),i("li",{staticClass:"header-nav__item"},[i("a",{staticClass:"header-nav__links",attrs:{href:"#",title:"link to Blog page"}},[t._v("Blog")])]),i("li",{staticClass:"header-nav__item"},[i("a",{staticClass:"header-nav__links",attrs:{href:"#",title:"link to Contact page"}},[t._v("Contact")])])])])}],m={name:"HeaderNav"},f=m,Q=(i("d117"),Object(g["a"])(f,_,d,!1,null,"33b403b8",null)),B=Q.exports,E={name:"Header",components:{Logo:p,HeaderNav:B}},h=E,I=(i("782b"),Object(g["a"])(h,l,o,!1,null,"4828d116",null)),b=I.exports,v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Slider"),i("Products",{staticClass:"products"})],1)},K=[],k=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("slick",{ref:"slick",staticClass:"slider",attrs:{options:t.slickOptions}},[i("div",{staticClass:"slider__item slider__item_1"},[i("div",{staticClass:"slider__content container"},[i("h3",{staticClass:"slider__title"},[t._v("Lian Creative Agency")]),i("p",{staticClass:"slider__subtitle"},[t._v("Minimal Freelance Portfolio")])])]),i("div",{staticClass:"slider__item slider__item_2"},[i("div",{staticClass:"slider__content container"},[i("h3",{staticClass:"slider__title"},[t._v("Design & Branding")]),i("p",{staticClass:"slider__subtitle"},[t._v("We Deliver Quality Results")])])]),i("div",{staticClass:"slider__item slider__item_3"},[i("div",{staticClass:"slider__content container"},[i("h3",{staticClass:"slider__title"},[t._v("Design & Branding")]),i("p",{staticClass:"slider__subtitle"},[t._v("We Deliver Quality Results")])])])])},U=[],F=i("7ecd"),x={name:"Slider",components:{Slick:F["a"]},data:function(){return{slickOptions:{slidesToShow:1,dots:!0,autoplay:!0,autoplaySpeed:4e3}}}},j=x,w=(i("6afe"),Object(g["a"])(j,k,U,!1,null,null,null)),y=w.exports,M=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("article",{staticClass:"products"},[i("div",{staticClass:"container"},[i("ProductTabs",{staticClass:"products__tabs"}),i("ProductsList",{staticClass:"products__list"})],1)])},S=[],D=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"products-tabs__list"},[i("li",{staticClass:"products-tabs__item products-tabs__item--active"},[t._v("All")]),i("li",{staticClass:"products-tabs__item"},[t._v("Logo")]),i("li",{staticClass:"products-tabs__item"},[t._v("Mobile App")]),i("li",{staticClass:"products-tabs__item"},[t._v("Wordpress")]),i("li",{staticClass:"products-tabs__item"},[t._v("Web Design")]),i("li",{staticClass:"products-tabs__item"},[t._v("UI/IX")]),i("li",{staticClass:"products-tabs__item"},[t._v("Branding")])])}],G={name:"ProductTabs"},O=G,Y=(i("1559"),Object(g["a"])(O,D,P,!1,null,"363e1646",null)),R=Y.exports,T=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"products__list-wrapper"},[a("ul",{staticClass:"products__list"},[a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("2eaf"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("1690"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("136f"),alt:"product image"}})])])]),a("ul",{staticClass:"products__list"},[a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("3d56"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("0ac8"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("df10"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("6ad6"),alt:"product image"}})])])]),a("ul",{staticClass:"products__list"},[a("li",{staticClass:"products__item"},[a("a",{staticClass:"product_item_link d-block position-relative",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("e48b"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("3402"),alt:"product image"}})])]),a("li",{staticClass:"products__item"},[a("a",{staticClass:"products__link",attrs:{href:"#"}},[a("img",{staticClass:"products__image",attrs:{src:i("d884"),alt:"product image"}})])])]),a("button",{staticClass:"products__more-button"},[t._v("Load More")])])}],N={name:"ProductsList"},z=N,W=(i("df3f"),Object(g["a"])(z,T,H,!1,null,"3eba0516",null)),J=W.exports,L={name:"Products",components:{ProductTabs:R,ProductsList:J}},q=L,Z=(i("10a8"),Object(g["a"])(q,M,S,!1,null,"3dadc65a",null)),V=Z.exports,X={name:"Home",components:{Slider:y,Products:V}},$=X,tt=(i("96e2"),Object(g["a"])($,v,K,!1,null,"0d35b172",null)),st=tt.exports,it=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"footer_logo"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-center py-5"},[i("a",{staticClass:"footer_logo_link d-inline-block",attrs:{href:"#",title:"link to root page"}},[i("img",{staticClass:"footer_logo_image d-block",attrs:{src:"img/logo.svg",alt:"logo"}})])])])])]),i("div",{staticClass:"footer_social"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 py-4"},[i("ul",{staticClass:"social_list text-center mb-0"},[i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://www.facebook.com",title:"link to facebook"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Facebook.svg",alt:"facebook icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://plus.google.com",title:"link to google plus"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Google+.svg",alt:"google plus icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://twitter.com",title:"link to twitter"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Twitter.svg",alt:"twitter icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://www.linkedin.com",title:"link to linkedin"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Linkedin.svg",alt:"linkedin icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://dribbble.com",title:"link to dribbble"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Dribbble.svg",alt:"dribbble icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://www.pinterest.com",title:"link to pinterest"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Pinterest.svg",alt:"pinterest icon"}})])]),i("li",{staticClass:"social_items d-inline-block"},[i("a",{staticClass:"social_item_links_",attrs:{href:"https://www.instagram.com",title:"link to instagram"}},[i("img",{staticClass:"social_item_img d-block",attrs:{src:"img/Instagram.svg",alt:"instagram icon"}})])])])])])])]),i("div",{staticClass:"footer_copyright"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("p",{staticClass:"footer_copyright_text text-uppercase text-center mb-0"},[t._v("\n            © 2016\n            "),i("span",{staticClass:"footer_copyright_span"},[t._v("Mulitix Theme")]),t._v(" by ThemeForces. All Rights Reserved.\n          ")])])])])])])}],At={name:"Footer"},et=At,lt=(i("7ee6"),Object(g["a"])(et,it,at,!1,null,"402d2a4c",null)),ot=lt.exports,ct={name:"App",components:{Header:b,Home:st,Footer:ot}},rt=ct,nt=(i("5c0b"),Object(g["a"])(rt,A,e,!1,null,null,null)),Ct=nt.exports,gt=i("2f62");a["a"].use(gt["a"]);var ut=new gt["a"].Store({state:{}});i("b7e3");new a["a"]({store:ut,render:function(t){return t(Ct)}}).$mount("#app")},"5c0b":function(t,s,i){"use strict";var a=i("8fba"),A=i.n(a);A.a},"6ad6":function(t,s,i){t.exports=i.p+"img/product-7.bd515e5e.jpg"},"6afe":function(t,s,i){"use strict";var a=i("b127"),A=i.n(a);A.a},"782b":function(t,s,i){"use strict";var a=i("101f"),A=i.n(a);A.a},"7ee6":function(t,s,i){"use strict";var a=i("308e"),A=i.n(a);A.a},"86e3":function(t,s,i){"use strict";var a=i("9650"),A=i.n(a);A.a},"8fba":function(t,s,i){},9650:function(t,s,i){},"96e2":function(t,s,i){"use strict";var a=i("3840"),A=i.n(a);A.a},"9b19":function(t,s,i){t.exports=i.p+"img/logo.daebb74c.svg"},b127:function(t,s,i){},b2e1:function(t,s,i){},b7e3:function(t,s,i){},bcb1:function(t,s,i){},d117:function(t,s,i){"use strict";var a=i("bcb1"),A=i.n(a);A.a},d884:function(t,s,i){t.exports=i.p+"img/product-10.4bac7352.jpg"},df10:function(t,s,i){t.exports=i.p+"img/product-6.a422ba77.jpg"},df3f:function(t,s,i){"use strict";var a=i("1e3d"),A=i.n(a);A.a},e48b:function(t,s,i){t.exports=i.p+"img/product-8.93cd694d.jpg"}});
//# sourceMappingURL=app.e77d8696.js.map