(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1285:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mainItemPerPage",attrs:{id:"index"}},[e("div",{staticClass:"shouldCollapse maxIs",attrs:{id:"topOfIndex"}},[e("div",{attrs:{id:"topOfIndexWrapper"}},[e("slider"),t._v(" "),e("categorie",{attrs:{mainCats:JSON.parse(t.main_categories)}})],1)]),t._v(" "),e("div",{staticClass:"shouldCollapse maxIs"},[e("flip-card")],1),t._v(" "),JSON.parse(this.comments).length>=20?e("div",{staticStyle:{width:"100%",overflow:"hidden"}},[e("comments",{attrs:{comments:t.comments}})],1):t._e(),t._v(" "),t._l(JSON.parse(this.labeles),(function(n){return n.products.length>0?e("div",{key:n.id,staticClass:"allCards shouldCollapse maxIs"},[e("card",{attrs:{cardTitle:n.title,products:n.products,id:"mostSell",classr:t.makeid(10)}})],1):t._e()})),t._v(" "),e("div",{staticClass:"maxIs shouldCollapse"},[e("customers")],1)],2)};i._withStripped=!0;var a=function(){var t=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var r={mounted(){setTimeout(()=>{new Swiper(".swiper-container-topSite",{pagination:{el:".swiper-pagination-topside",clickable:!0},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}})},100)}},s=(e(794),e(0)),l=Object(s.a)(r,a,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"slider"}},[n("div",{staticClass:"swiper-container-topSite"},[n("div",{staticClass:"swiper-wrapper",attrs:{id:"sliderWrapper"}},[n("div",{staticClass:"swiper-slide"},[n("a",{attrs:{href:"/categories/خط-تولید/خط-تولید-لنت-ترمز-دیسکی/"}},[n("img",{attrs:{src:"/static/public/images/slider1.webp",alt:""}})])]),this._v(" "),n("div",{staticClass:"swiper-slide"},[n("a",{attrs:{href:"/categories/خط-تولید/خط-تولید-سیم-و-کابل/"}},[n("img",{attrs:{src:"/static/public/images/slider2.webp",alt:""}})])]),this._v(" "),n("div",{staticClass:"swiper-slide"},[n("a",{attrs:{href:"/categories/بسته-بندی/دستگاه-شیرینگ/"}},[n("img",{attrs:{src:"/static/public/images/slider3.webp",alt:""}})])])]),this._v(" "),n("div",{staticClass:"swiper-pagination-topside"})])])}],!1,null,"96a12ea2",null);l.options.__file="js/components/user/index/slider/slider.vue";var o=l.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.products.length>0?e("div",{staticClass:"card maxIs"},[e("div",{staticClass:"titleCard"},[e("p",[t._v(t._s(t.cardTitle))])]),t._v(" "),e("div",{class:t.classr},[e("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(n,i){return e("div",{key:i,staticClass:"swiper-slide"},[e("div",{staticClass:"singleSlide"},[e("div",{staticClass:"singleSlideWrapper"},[e("div",{staticClass:"img"},[e("a",{attrs:{href:t.getSlug(n.slug)}},[e("img",{staticClass:"lazyimages swiper-lazy",attrs:{"data-src":t.getImage(n.product_thumbnail),alt:""}})])]),t._v(" "),e("div",{staticClass:"shareProduct"},[e("share",{attrs:{title:"اشتراک گذاری",slug:n.slug}})],1),t._v(" "),e("div",{staticClass:"descs"},[e("div",{staticClass:"title"},[e("a",{staticClass:"link",attrs:{href:t.getSlug(n.slug)}},[t._v(t._s(n.title))])]),t._v(" "),e("div",{staticClass:"button"},[e("a",{staticClass:"submit",attrs:{href:t.getSlug(n.slug)}},[t._v("مشاهده محصول")])])])])])])})),0),t._v(" "),e("div",{class:["swiper-button-prev",t.classr]}),t._v(" "),e("div",{class:["swiper-button-next",t.classr]})])]):t._e()};d._withStripped=!0;var p=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"share",on:{click:this.openPopUp}},[n("div",{staticClass:"shareWrapper"},[n("div",{staticClass:"shareLogo"},[n("div",{staticClass:"shareLogoWrapper"},[n("share-icon"),this._v(" "),n("p",[this._v(this._s(this.title))])],1)])])])};p._withStripped=!0;var c=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{height:"512pt",viewBox:"-21 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m389.332031 160c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0"}}),n("path",{attrs:{d:"m389.332031 512c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0"}}),n("path",{attrs:{d:"m80 336c-44.097656 0-80-35.882812-80-80s35.902344-80 80-80 80 35.882812 80 80-35.902344 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0"}}),n("path",{attrs:{d:"m135.703125 240.425781c-5.570313 0-10.988281-2.902343-13.910156-8.0625-4.375-7.679687-1.707031-17.453125 5.972656-21.824219l197.953125-112.855468c7.65625-4.414063 17.449219-1.726563 21.800781 5.976562 4.375 7.679688 1.707031 17.449219-5.972656 21.824219l-197.953125 112.851563c-2.496094 1.40625-5.203125 2.089843-7.890625 2.089843zm0 0"}}),n("path",{attrs:{d:"m333.632812 416.425781c-2.6875 0-5.398437-.683593-7.894531-2.109375l-197.953125-112.855468c-7.679687-4.371094-10.34375-14.144532-5.972656-21.824219 4.351562-7.699219 14.125-10.367188 21.804688-5.972657l197.949218 112.851563c7.679688 4.375 10.347656 14.144531 5.976563 21.824219-2.945313 5.183594-8.363281 8.085937-13.910157 8.085937zm0 0"}})])};c._withStripped=!0;var f={name:"shareIcon"},u=(e(796),Object(s.a)(f,c,[],!1,null,"a985b9b0",null));u.options.__file="js/components/user/index/share/shareIcon.vue";var v=u.exports;const m={methods:{adjustFromTop(t,n=!0,e=!1){let i;return n&&(t.style.height="100vh"),e?(i=window.scrollY+window.innerHeight/2+"px",t.style.transform="translate(-50%,-50%)"):i=window.scrollY,console.log("thi si si",t),t.style.top=i+"px",i}}};e(28);var g={name:"share",props:["title","slug"],mixins:[m],components:{shareIcon:v},methods:{openPopUp(){this.$store.state.shareLink="www.damirco.com/products/product-detial/"+this.slug;const t=document.querySelector(".sharePopUp");t.style.display="flex",this.adjustFromTop(t,!1,!1),document.body.style.overflow="hidden"}}},h=(e(798),Object(s.a)(g,p,[],!1,null,"3eed8ae2",null));h.options.__file="js/components/user/index/share/share.vue";var x={props:["products","cardTitle","id","classr"],components:{share:h.exports},data:()=>({swiper:null}),mounted(){new Swiper("."+this.classr,{direction:"horizontal",loop:!0,preloadImages:!1,lazy:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1e3:{slidesPerView:4,spaceBetween:30,slidesPerGroup:4},660:{slidesPerView:3,spaceBetween:10,slidesPerGroup:3},430:{slidesPerView:2,spaceBetween:10,slidesPerGroup:2},1:{slidesPerView:1,slidesPerGroup:1}},on:{click:function(t,n){n.preventDefault();n.target.classList.contains("swiper-button-prev")&&this.slidePrev()}}});const t=document.querySelector("."+this.classr);t.style.width="100%",t.style.overflow="hidden"},methods:{getDescription:t=>t.length>130?t.substring(0,130)+"....":t,getSlug:t=>"/products/product-detial/"+t,getUrl:t=>t.url,getDesc:t=>t.length>30?t.substring(0,100)+"...":t,getImage:t=>t,getClass(){return"splide "+this.id}}},w=(e(800),Object(s.a)(x,d,[],!1,null,"51eb858f",null));w.options.__file="js/components/user/index/card/card.vue";var b=w.exports,_=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"lax",attrs:{id:"fliped","data-lax-preset":"spin fadeInOut"}},[n("div",{staticClass:"flipCardGlider",attrs:{id:"flipedWrapper"}},[n("card",{attrs:{title:"مرجوعی کالا",svg:"/static/public/images/svg/box.svg"}}),this._v(" "),n("card",{attrs:{title:"تایید و کنترل کیفیت",svg:"/static/public/images/svg/confirm.svg"}}),this._v(" "),n("card",{attrs:{title:"دسترسی به تامین کنندگان",svg:"/static/public/images/svg/networking.svg"}}),this._v(" "),n("card",{attrs:{title:"گارانتی",svg:"/static/public/images/svg/shield(1).svg"}})],1)])};_._withStripped=!0;var y=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-front"},[n("img",{attrs:{src:this.svg}})]),this._v(" "),n("div",{staticClass:"descs"},[n("p",[this._v(this._s(this.title))])])])};y._withStripped=!0;var C={props:["svg","title"]},S=(e(802),Object(s.a)(C,y,[],!1,null,"5cf06a22",null));S.options.__file="js/components/user/index/flipCard/card.vue";var j={components:{card:S.exports}},k=(e(804),Object(s.a)(j,_,[],!1,null,"3f9344af",null));k.options.__file="js/components/user/index/flipCard/flipCard.vue";var z=k.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"sideSliderCats"}},[e("div",{attrs:{id:"sideSlidesCatsWrapper"}},[e("div",{attrs:{id:"allCats"}},[e("ul",[t._l(t.getAllcats,(function(n,i){return[i<11?e("li",{staticClass:"parentLi"},[e("arrow"),t._v(" "),e("p",[t._v(t._s(n.title)+" ")]),t._v(" "),e("div",{staticClass:"sideSliderSubmenu"},[e("div",{staticClass:"subTitleWrapper"},[e("div",{staticClass:"SubTitle"},[e("p",[t._v(t._s(n.title))])]),t._v(" "),e("ul",t._l(n.subs,(function(n,i){return i<=5?e("li",{key:i},[e("a",{attrs:{href:t.getUrl(n.slug)}},[t._v(t._s(n.title))])]):t._e()})),0)])])],1):t._e()]}))],2)])])])};I._withStripped=!0;var P=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{staticClass:"arrow svg-inline--fa fa-angle-right fa-w-8",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"}},[n("path",{attrs:{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}})])};P._withStripped=!0;e(806);var O=Object(s.a)({},P,[],!1,null,"5338c0e1",null);O.options.__file="js/components/user/template/arrow/arrow.vue";var W=O.exports,E={components:{ham:e(176).a,arrow:W},data:()=>({catsList:null,num:null}),props:["mainCats"],mounted(){console.log("mainCats",this.mainCats),this.catsList=this.mainCats,window.addEventListener("resize",this.findNum),this.findNum()},methods:{getUrl:t=>`/product-category/${t}/`,findNum(){setInterval(()=>{const t=document.getElementsByClassName("swiper-container-topSite");let{height:n}=window.getComputedStyle(t[0],null);n=n.split("p"),n=+n[0],0!==n&&(this.num=Math.floor(+n/26),this.sliceCats())},500)},sliceCats(){this.catsList=this.catsList.slice(0,this.num)}},computed:{getAllcats(){return this.catsList}}},T=(e(808),Object(s.a)(E,I,[],!1,null,"6e39f182",null));T.options.__file="js/components/user/index/categorie/categorie.vue";var L=T.exports,$=function(){var t=this.$createElement;this._self._c;return this._m(0)};$._withStripped=!0;var B={mounted(){new Swiper(".swiper-container-customers",{slidesPerView:3,loopAdditionalSlides:100,loop:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1e3:{slidesPerView:4,spaceBetween:30,slidesPerGroup:4},660:{slidesPerView:3,spaceBetween:10,slidesPerGroup:3},430:{slidesPerView:2,spaceBetween:10,slidesPerGroup:3},1:{slidesPerView:1,slidesPerGroup:1}}})}},G=(e(810),Object(s.a)(B,$,[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"customers"}},[e("div",{attrs:{id:"customersWrapper"}},[e("div",{staticClass:"title"},[e("p",[t._v("مشتریان ما")])]),t._v(" "),e("div",{staticClass:"swiper-container-customers"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"گلرنگ",title:"گلرنگ",src:"/static/public/images/ours1.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"شرکت نفتت",title:"شرکت نفتت",src:"/static/public/images/ours2.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"سایپا",title:"سایپا",src:"/static/public/images/ours3.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"شیرین عسل",title:"شیرین عسل",src:"/static/public/images/ours4.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"ایران خودرو",title:"ایران خودرو",src:"/static/public/images/ours5.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"ایران خودرو",title:"ایران خودرو",src:"/static/public/images/pakshoo.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"ایران خودرو",title:"ایران خودرو",src:"/static/public/images/pishgaman.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"ایران خودرو",title:"ایران خودرو",src:"/static/public/images/delveseh.png"}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{alt:"ایران خودرو",title:"ایران خودرو",src:"/static/public/images/mina.png"}})])]),t._v(" "),e("div",{staticClass:"swiper-button-next"}),t._v(" "),e("div",{staticClass:"swiper-button-prev"})])])])}],!1,null,"05fa9c0a",null));G.options.__file="js/components/user/index/customers/customers.vue";var N=G.exports,V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"comments"}},[e("div",{attrs:{id:"commentsWrapper"}},[e("marquee-text",{attrs:{paused:t.isStop,duration:60}},[e("div",{staticClass:"marquee"},[t._l(t.getComments,(function(n,i){return[e("div",{staticClass:"singleTwinComment"},t._l(n,(function(n){return e("div",{staticClass:"singleComment",on:{mouseover:t.stop,mouseleave:t.cont}},[e("div",{staticClass:"singleCommentWrapper"},[e("p",{staticClass:"name"},[t._v(t._s(n.username))]),t._v(" "),e("a",{attrs:{href:t.getHref(n)}},[e("p",{staticClass:"categorie"},[t._v(t._s(n.item.title))])]),t._v(" "),e("p",[t._v(t._s(n.content))])])])})),0)]}))],2)])],1)])};V._withStripped=!0;var q=e(812),M=e.n(q),U=e(813),J=e.n(U),A={components:{MarqueeText:M.a},props:["comments"],methods:{stop(){this.isStop=!0},cont(){this.isStop=!1},getHref:t=>"/products/product-detial/"+t.item.slug,validate:t=>(t+1)%2==0},computed:{getComments(){const t=JSON.parse(this.comments);return J.a.chunk(t,2)}},data:()=>({isStop:!1,counter:0})},Y=(e(814),Object(s.a)(A,V,[],!1,null,"1016d68f",null));Y.options.__file="js/components/user/index/comments/comments.vue";var D={components:{slider:o,card:b,categorie:L,flipCard:z,customers:N,comments:Y.exports},created(){console.log("heyyyy"),console.log(this.userInfo+"ty"),console.log("this.products",JSON.parse(this.labeles))},props:["products","main_categories","comments","labeles"],methods:{makeid(t){for(var n="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=e.length,a=0;a<t;a++)n+=e.charAt(Math.floor(Math.random()*i));return n}}},H=(e(816),Object(s.a)(D,i,[],!1,null,null,null));H.options.__file="js/components/user/index/index.vue";n.default=H.exports},574:function(t,n,e){var i=e(795);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("efe07894",i,!1,{})},575:function(t,n,e){var i=e(797);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("38cca245",i,!1,{})},576:function(t,n,e){var i=e(799);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("57fd9c06",i,!1,{})},577:function(t,n,e){var i=e(801);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("24c3d9f2",i,!1,{})},578:function(t,n,e){var i=e(803);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("b3d486f4",i,!1,{})},579:function(t,n,e){var i=e(805);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("4739ac9e",i,!1,{})},580:function(t,n,e){var i=e(807);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("6c3b8775",i,!1,{})},581:function(t,n,e){var i=e(809);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("2df1b79b",i,!1,{})},582:function(t,n,e){var i=e(811);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("240c8118",i,!1,{})},584:function(t,n,e){var i=e(815);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("8a38b614",i,!1,{})},585:function(t,n,e){var i=e(817);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(2).default)("4f621a17",i,!1,{})},794:function(t,n,e){"use strict";var i=e(574);e.n(i).a},795:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n#slider[data-v-96a12ea2]{\r\n    position:relative;\r\n    background-color: #ffffff\n}\n.container p[data-v-96a12ea2]{\r\n    font-size:18pt;\r\n    font-weight: lighter;\n}\n.slide.active p[data-v-96a12ea2]{\r\n    opacity:0;\r\n    animation:captionTextAn 0.5s linear forwards;\r\n    animation-delay: 1.2s;\r\n    color:white;\r\n    margin-bottom:10px\n}\n.slide.active .container[data-v-96a12ea2]{\r\n    animation:fadeTrans 1s linear forwards;\r\n    animation-delay: 1.5s;\n}\n.slide.active button[data-v-96a12ea2]{\r\n    opacity:0;\r\n    animation:captionTextAn 0.5s linear forwards;\r\n    animation-delay: 1.4s;\n}\n.container p[data-v-96a12ea2]:nth-child(2){\r\n    font-size:12pt\n}\n@media (max-width:650px){\n.container button[data-v-96a12ea2]{\r\n        font-size:11pt;\r\n        font-weight: lighter;\n}\n.container p[data-v-96a12ea2]{\r\n        font-size: 11pt\n}\n}\n@media (max-width:924px)\r\n{\n#slider[data-v-96a12ea2]{\r\n        width:100%;\n}\nimg[data-v-96a12ea2]{\r\n        object-fit: contain;\r\n        height:auto;\n}\n}\n#slider[data-v-96a12ea2]{\r\n    width: 100%;\r\n    overflow: hidden;\n}\n.swiper-container-topSite[data-v-96a12ea2]{\r\n    width: 100%;\n}\n.swiper-slide[data-v-96a12ea2]{\r\n  max-height: 500px;\r\n  /*max-width: 1009px !important;*/\r\n  /*width: fit-content !important;*/\n}\n.swiper-slide-active[data-v-96a12ea2]{\r\n  width: 100% !important;\n}\n.swiper-slide img[data-v-96a12ea2]{\r\n    width: 100%;\r\n    height: 100%;\n}\n#slider + div[data-v-96a12ea2]{\r\n    height: 100% !important;\n}\r\n\r\n",""]),t.exports=n},796:function(t,n,e){"use strict";var i=e(575);e.n(i).a},797:function(t,n,e){(n=e(1)(!1)).push([t.i,"\nsvg[data-v-a985b9b0]{\r\n  width: 25px;\r\n  height: 25px;\n}\npath[data-v-a985b9b0]{\r\n  fill: var(--logoBlueUser);\n}\r\n",""]),t.exports=n},798:function(t,n,e){"use strict";var i=e(576);e.n(i).a},799:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n.share[data-v-3eed8ae2] {\r\n  cursor: pointer;\n}\n.shareProduct[data-v-3eed8ae2] {\r\n  width: 100%;\n}\n.shareLogoWrapper[data-v-3eed8ae2] {\r\n  display: flex;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\n}\np[data-v-3eed8ae2] {\r\n  font-size: 13px;\r\n  margin-left: 5px;\r\n  font-weight: bold;\n}\r\n",""]),t.exports=n},800:function(t,n,e){"use strict";var i=e(577);e.n(i).a},801:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n.titleCard p[data-v-51eb858f] {\r\n  font-size: 24px;\r\n  font-weight: 100;\r\n  margin: 30px;\n}\n.card[data-v-51eb858f] {\r\n  margin-top: 50px;\r\n  overflow: auto;\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  /* align-items: flex-end; */\r\n  flex-direction: column;\n}\nimg[data-v-51eb858f] {\r\n  width: 184px;\r\n  height: 184px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\n}\n.singleSlide[data-v-51eb858f] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-top: 10px;\n}\n.link[data-v-51eb858f] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  direction: rtl;\r\n  text-align: right;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #707070;\r\n  text-align: center;\n}\n.singleSlide img[data-v-51eb858f] {\r\n  width: 184px;\r\n  height: 184px;\n}\n.img[data-v-51eb858f] {\r\n  display: flex;\r\n  justify-content: center;\n}\n.singleSlide .descsP[data-v-51eb858f] {\r\n  height: 120px;\n}\n.descsP p[data-v-51eb858f] {\r\n  color: #707070;\r\n  font-weight: bold;\r\n  font-size: 13px;\n}\n.title[data-v-51eb858f] {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  height: 90px;\n}\n.splide--draggable > .splide__track > .splide__list > .splide__slide[data-v-51eb858f] {\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px\n}\n.swiper-container-for-index[data-v-51eb858f] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  /*height: 300px;*/\n}\n.swiper-button-next[data-v-51eb858f], .swiper-button-prev[data-v-51eb858f] {\r\n  top: calc(50% - -25px);\n}\n.swiper-slide[data-v-51eb858f] {\r\n  display: flex;\r\n  justify-content: center;\r\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, .1);\r\n  background: white;\r\n  border-radius: 25px;\n}\n.swiper-wrapper[data-v-51eb858f] {\r\n  padding-bottom: 10px;\n}\nimg[data-v-51eb858f] {\r\n  transition: all 0.2s;\n}\nimg[data-v-51eb858f]:hover {\r\n  transform: scale(1.1);\n}\n.singleSlideWrapper[data-v-51eb858f] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\n.titleCard p[data-v-51eb858f] {\r\n  position: relative;\n}\n.titleCard p[data-v-51eb858f]:before {\r\n  content: '';\r\n  position: absolute;\r\n  right: -13px;\r\n  border-radius: 500px;\r\n  background: var(--logoBlueUser);\r\n  width: 5px;\r\n  height: 31px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\n}\n.submit[data-v-51eb858f] {\r\n  padding: 5px 10px 5px 10px;\r\n  border-radius: 5px;\r\n  background: #0074d9;\r\n  border: 0;\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n  color: white;\r\n  font-family: 'yekan';\r\n  cursor: pointer;\r\n  margin-top: 30px;\n}\n.descs[data-v-51eb858f] {\r\n  width: 100%;\r\n  height: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\n}\n.button[data-v-51eb858f] {\r\n  position: relative;\r\n  left: 10px;\n}\n.shareProduct[data-v-51eb858f] {\r\n  position: relative;\r\n  left: 10px;\r\n  width: 100%;\n}\r\n",""]),t.exports=n},802:function(t,n,e){"use strict";var i=e(578);e.n(i).a},803:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n.flip-card[data-v-5cf06a22]{\r\n  margin:0 auto;\r\n  width: calc(25% - 4px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\n.flip-card-front[data-v-5cf06a22]{\r\n    display:flex;\r\n    flex-direction:column;\r\n    width:max-content;\r\n    \r\n    align-items: center;\r\n    justify-content: space-between;\n}\np[data-v-5cf06a22]{\r\n    text-align: center;\r\n    font-size: 13px;\r\n    font-weight: 800;\n}\nimg[data-v-5cf06a22]{\r\n    width:70px;\r\n    height:70px;\n}\r\n",""]),t.exports=n},804:function(t,n,e){"use strict";var i=e(579);e.n(i).a},805:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n#flipedWrapper[data-v-3f9344af]{\n      width:100%;\n      display:flex;\n    padding: 10px;\n      justify-content: space-between;\n      overflow-x:auto\n}\n#fliped[data-v-3f9344af]{\n      width:100%;\n      display:flex;\n      justify-content: center;\n  \n      margin-top:50px;\n      background: #ffffff;\n}\n#flipedWrapper[data-v-3f9344af]::-webkit-scrollbar {\ndisplay: none;\n}\n#flipedWrapper[data-v-3f9344af] {\n  -ms-overflow-style: none; \n  scrollbar-width: none;\n}\n",""]),t.exports=n},806:function(t,n,e){"use strict";var i=e(580);e.n(i).a},807:function(t,n,e){(n=e(1)(!1)).push([t.i,"\npath[data-v-5338c0e1]{\n    fill:rgb(9,111,209);\n}\nsvg[data-v-5338c0e1]{\n    transform:rotateY(180deg)\n}\n",""]),t.exports=n},808:function(t,n,e){"use strict";var i=e(581);e.n(i).a},809:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n#allCats[data-v-6e39f182]{\r\n    height: 100%;\n}\nul li:hover .sideSliderSubmenu[data-v-6e39f182]{\r\n        display:block;\r\n        animation:fadeIn-data-v-6e39f182 0.2s linear\n}\n@keyframes fadeIn-data-v-6e39f182{\nfrom{\r\n            opacity:0\n}\nto{\r\n            opacity:1;\n}\n}\nul li[data-v-6e39f182]:hover{\r\n        border-top:1px solid rgb(129, 129, 129);\r\n        border-bottom:1px solid rgb(129, 129, 129);\n}\nul li[data-v-6e39f182]{\r\n        text-align: right;\n}\n.sideSliderSubmenu[data-v-6e39f182]{\r\n        position: absolute;\r\n        display:none;\r\n        right:100%;\r\n        z-index:667;\r\n        background-color: white;\r\n        height:max-content;\r\n        top:-20px;\r\n        width:300px;\r\n        border-left:1px solid rgb(223, 223, 223);\r\n        background: #ffffff\n}\n.subTitleWrapper[data-v-6e39f182]{\r\n        display:flex;\r\n        flex-direction:column;\r\n        align-items: flex-end;\r\n        padding:10px\n}\n.subtitle[data-v-6e39f182]{\r\n        font-size:20pt;\n}\n.sideSliderSubmenu ul li a[data-v-6e39f182]{\r\n        font-size:12pt;\r\n        color:rgb(71, 71, 245) !important\n}\n.arrow[data-v-6e39f182]{\r\n        width:20px;\r\n        height:20px;\n}\n#sideSlidesCatsWrapper[data-v-6e39f182]{\r\n        width:100%;\n}\n#sideSliderCats[data-v-6e39f182]{\r\n        display:flex;\r\n        justify-content: flex-start;\n}\nul[data-v-6e39f182]{\r\n        width:max-content;\r\n        display:flex;\r\n        flex-direction:column;\r\n        justify-content:flex-start;\r\n        height:100%;\n}\nul>li[data-v-6e39f182]{\r\n        line-height: 2rem;\r\n        width:100%;\r\n        display:flex;\r\n        justify-content: space-between;\n}\n.sideSliderSubmenu li[data-v-6e39f182]{\r\n        display:flex;\r\n        justify-content:flex-end\n}\n.parentLi[data-v-6e39f182]{\r\n        position: relative;\r\n        font-size:14px;\r\n        cursor: pointer;\r\n        text-align: right;\r\n        padding:2px\n}\n.parentLi:hover .sideSliderSubmenu[data-v-6e39f182]{\r\n        display:block\n}\n#hamCats[data-v-6e39f182]{\r\n        display:flex;\r\n        align-items:center\n}\n@media (max-width:801px)\r\n\t{\n#sideSliderCats[data-v-6e39f182]{\r\n\t\t\tdisplay:none\n}\n}\n.seeMore[data-v-6e39f182]{\r\n        display:flex;\r\n        justify-content: flex-end\n}\r\n\r\n",""]),t.exports=n},810:function(t,n,e){"use strict";var i=e(582);e.n(i).a},811:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n#customers[data-v-05fa9c0a] {\r\n  background: #ffffff;\r\n  margin-top: 50px;\n}\n#customersWrapper[data-v-05fa9c0a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  width: 100%;\n}\n.title p[data-v-05fa9c0a] {\r\n  text-align: center;\r\n  font-size: 29px;\r\n  font-weight: 800;\n}\n.cusImgs[data-v-05fa9c0a] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\n}\n.cusImgs img[data-v-05fa9c0a] {\r\n  filter: grayscale(1);\r\n  width: 200px;\r\n  transition: all 0.4s;\r\n  margin: 10px;\n}\n@media (max-width: 400px) {\n.cusImgs[data-v-05fa9c0a] {\r\n    justify-content: center;\n}\n}\n@media (max-width: 425px) {\n.cusImgs[data-v-05fa9c0a] {\r\n    justify-content: center;\n}\n}\nimg[data-v-05fa9c0a]:hover {\r\n  filter: grayscale(0)\n}\n.swiper-container-customers[data-v-05fa9c0a] {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.swiper-slide[data-v-05fa9c0a] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 15px;\r\n  height: 150px;\n}\n.swiper-slide img[data-v-05fa9c0a] {\r\n  width: 150px;\r\n  height: 150px;\n}\n.swiper-button-next[data-v-05fa9c0a], .swiper-button-prev[data-v-05fa9c0a] {\r\n  top: calc(40% - -25px);\n}\r\n",""]),t.exports=n},814:function(t,n,e){"use strict";var i=e(584);e.n(i).a},815:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n#comments[data-v-1016d68f]{\r\n    background:#ffffff;\r\n    margin-top:50px;\r\n    width: 100%\n}\n.marquee[data-v-1016d68f]{\r\n        display:flex;\n}\n.singleTwinComment[data-v-1016d68f]{ \r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\n}\n.singleTwinComment[data-v-1016d68f]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        width: 200px;\r\n        /*max-width: 400px;*/\r\n        margin:8px;\n}\n.singleComment[data-v-1016d68f]{\r\n        width:100%;\r\n        border:1px solid #d9d8d8;\r\n        margin:5px;\r\n        padding:5px;\n}\n.categorie[data-v-1016d68f]{\r\n        font-size: 13px;\r\n        margin-top: 5px;\r\n        margin-bottom: 5px;\r\n        color: rgb(9,111,211);\r\n        font-weight: 800;\n}\n.marquee[data-v-1016d68f]{\r\n        position: relative;\r\n        /* left:100%; */\r\n        /* animation: moveIt 300s linear infinite */\n}\n@keyframes moveIt-data-v-1016d68f{\nfrom {\r\n            transform: translateX(0);\r\n            left:100%;\n}to{\r\n            left:0;\r\n            transform: translateX(-5320px);\n}\n}\n.marquee[data-v-1016d68f]:hover{\r\n        animation-play-state: paused;\n}\r\n",""]),t.exports=n},816:function(t,n,e){"use strict";var i=e(585);e.n(i).a},817:function(t,n,e){(n=e(1)(!1)).push([t.i,"\n.shouldCollapse {\r\n  width: 98% !important;\n}\n.digiCardIndex {\r\n  margin-top: 50px;\r\n  margin-bottom: 20px;\n}\n#topOfIndex {\r\n  background: #ffffff;\r\n  width: 100%;\n}\n#topOfIndexWrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\n}\n#index {\r\n  position: relative;\n}\n.allCards {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 530px;\n}\n#mostClicked {\r\n  grid-area: mostClicked;\n}\n#slider {\r\n  grid-area: slide;\n}\n#new {\r\n  grid-area: new;\n}\n.titleCard {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-end;\n}\n#index {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\n#flatMenu {\r\n  grid-area: flatMenu;\n}\n.singleCard {\r\n  background: white;\n}\n#footer {\r\n  grid-area: footer;\n}\n.hamCats {\r\n  grid-area: hamCats;\n}\n@media (max-width: 924px) {\n#slider {\r\n    width: 100%;\n}\n#sideSliderCats {\r\n    display: none;\n}\n.shouldCollapse {\r\n    width: 100% !important;\n}\n}\n@media (max-width: 800px) {\n#topOfIndexWrapper {\r\n    padding: 0;\n}\n}\r\n",""]),t.exports=n}}]);