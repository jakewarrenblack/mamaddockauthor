(function(t){function e(e){for(var i,r,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0056":function(t,e,a){},"005a":function(t,e,a){t.exports=a.p+"img/cover_mockup.441f64d6.jpg"},"02e1":function(t,e,a){},1012:function(t,e,a){"use strict";a("6e26")},"145f":function(t,e,a){"use strict";a("2d71")},"21bd":function(t,e,a){},"25d2":function(t,e,a){t.exports=a.p+"img/1.d98fdc3d.webp"},2880:function(t,e,a){t.exports=a.p+"img/0.3ba99b6d.webp"},"293c":function(t,e,a){t.exports=a.p+"img/bio_photo.67bcee5f.jpg"},"2cf8":function(t,e,a){},"2d71":function(t,e,a){},"2ff1":function(t,e,a){t.exports=a.p+"img/6.df1ce890.webp"},3113:function(t,e,a){t.exports=a.p+"img/8.9c7c6bd5.webp"},"311f":function(t,e,a){t.exports=a.p+"img/the_sixth_amulet.ab778f64.jpg"},4271:function(t,e,a){t.exports=a.p+"img/icons_instagram.dedf90b9.svg"},"431c":function(t,e,a){t.exports=a.p+"media/trailer_2025.7aa14089.mp4"},"4aae":function(t,e,a){t.exports=a.p+"img/9.9e6f88e5.webp"},"4d69":function(t,e,a){t.exports=a.p+"img/man.284d3f23.jpg"},"4e22":function(t,e,a){t.exports=a.p+"img/13.b6465069.webp"},"4f2f":function(t,e,a){},"4f6c":function(t,e,a){"use strict";a("f368")},"504c":function(t,e,a){"use strict";a("e7b4")},5185:function(t,e,a){t.exports=a.p+"img/4.0ecfadcb.webp"},5510:function(t,e,a){"use strict";a("7f36")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[this.loading?e("div",{staticClass:"cover"},[e("Loader")],1):t._e(),"/thanks"!==this.$router.currentRoute.path?e("Navbar",{attrs:{links:this.links}}):t._e(),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},o=[],r=function(){var t=this,e=t._self._c;return e("header",{attrs:{id:"nav_header"}},[e("div",{attrs:{id:"container"}},[e("nav",[e("h2",{on:{click:function(e){return t.home()}}},[t._v("M.A. MADDOCK")]),e("div",{staticClass:"curtain_contain",attrs:{id:"curtain_contain"}},[e("ul",{attrs:{id:"linklist"}},t._l(this.links,(function(a){return e("a",{key:a.id,staticClass:"anchor",attrs:{href:"#"+a.href},on:{click:function(e){return t.checkRouter(a)}}},[e("li",[t._v(t._s(a.title))])])})),0)]),e("button",{staticClass:"nav_toggle",on:{click:function(e){return t.openCurtain()}}},[e("div",{staticClass:"border",attrs:{id:"border1"}}),e("div",{staticClass:"border",attrs:{id:"border2"}}),e("div",{staticClass:"border",attrs:{id:"border3"}})])])])])},n=[],l=(a("14d9"),{name:"Navbar",props:{links:Array},data(){return{clicks:0,curtain_contain:null,border1:null,border2:null,border3:null,app:null,header_main:null}},methods:{home(){this.$router.push("/")},checkRouter(t){this.border1.classList.remove("rotatePositive"),this.border2.classList.remove("opacity0"),this.border3.classList.remove("rotateNegative"),this.curtain_contain.classList.remove("curtainVisible"),document.querySelectorAll("html")[0].style.overflowY="unset",document.getElementById("app").style.overflow="unset",this.header_main&&(this.header_main.style.zIndex="1"),!0===t.router?(this.$router.push(t.href),document.querySelector("html").style.overflowY="unset",document.getElementById("app").style.overflow="unset"):"/"!=this.$router.currentRoute.path&&(this.$router.push("/"),this.$store.dispatch("scroll",{element:t.href}),document.querySelector("html").style.overflowY="unset",document.getElementById("app").style.overflow="unset",this.header_main&&(this.header_main.style.zIndex="1"))},openCurtain(){"hidden"===document.querySelector("html").style.overflow?document.querySelector("html").style.overflow="unset":document.querySelector("html").style.overflow="hidden","hidden"===document.getElementById("app").style.overflow?document.getElementById("app").style.overflow="unset":document.getElementById("app").style.overflow="hidden",this.curtain_contain.classList.toggle("curtainVisible"),this.header_main&&("-1"===this.header_main.style.zIndex?this.header_main.style.zIndex="1":this.header_main.style.zIndex="-1"),this.border1.classList.toggle("rotatePositive"),this.border2.classList.toggle("opacity0"),this.border3.classList.toggle("rotateNegative")}},mounted(){this.curtain_contain=document.getElementById("curtain_contain"),this.border1=document.getElementById("border1"),this.border2=document.getElementById("border2"),this.border3=document.getElementById("border3"),this.app=document.querySelector("body"),this.header_main=document.getElementById("header_main")}}),c=l,d=(a("d9c7"),a("2877")),u=Object(d["a"])(c,r,n,!1,null,"50f64bdb",null),m=u.exports,p=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lds-ellipsis"},[e("div"),e("div"),e("div"),e("div")])}],f={name:"Loader"},_=f,b=(a("e88a"),Object(d["a"])(_,p,h,!1,null,"3ba83264",null)),v=b.exports,g=a("2f62"),y={name:"App",metaInfo:{title:"M.A MADDOCK",titleTemplate:"%s | M.A MADDOCK",htmlAttrs:{lang:"en-US"},meta:[{charset:"utf-8"},{name:"og:title",content:"yeehaw"},{name:"og:image",content:"https://picsum.photos/200/300"},{name:"description",content:"Official website of M.A Maddock, author of The Sixth Amulet series."},{name:"viewport",content:"width=device-width, initial-scale=1"}]},computed:{...Object(g["b"])(["loading"])},components:{Navbar:m,Loader:v},data(){return{links:[{id:0,title:"BIO",href:"full_bio",router:!1},{id:1,title:"NOVEL",href:"synopsis",router:!1},{id:2,title:"HISTORY",href:"/history",router:!0},{id:3,title:"BALLOCH CASTLE",href:"/balloch_castle",router:!0},{id:4,title:"CONTACT",href:"contact",router:!1}]}}},w=y,C=(a("1012"),a("d963"),Object(d["a"])(w,s,o,!1,null,"228c8008",null)),k=C.exports,x=a("8c4f"),S=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"nav_header_contain"}},[e("section",{attrs:{id:"header_main"}},[e("div",{staticClass:"header_container"},[e("div",{staticClass:"hero_text"},[e("h3",{staticClass:"author_short_desc",attrs:{"data-aos":"fade-down"}}),this.data?e("h1",{staticClass:"author_name",attrs:{"data-aos":"fade-up"}},[t._v(" "+t._s(this.data.authorInfo.title)+" ")]):t._e()]),e("Video")],1)])]),e("section",{attrs:{id:"short_bio"}},[e("div",{staticClass:"short_bio_container"},[this.data?e("h6",[t._v(" "+t._s(this.data.authorInfo.authorDesc)+" ")]):t._e()])]),e("Divider"),e("section",{ref:"full_bio",attrs:{id:"full_bio"}},[e("div",{staticClass:"full_bio_container d-flex justify-space-between align-items-center"},[e("img",{staticClass:"author_image miriam_image bg_size_cover clip_corners",attrs:{src:a("293c"),"data-aos":"fade-right"}}),this.data?e("div",{staticClass:"author_bio_text",attrs:{"data-aos":"fade-left"}},[e("h2",{staticClass:"author_bio_title"},[t._v(t._s(this.data.bio.title))]),e("p",{staticClass:"author_bio_body"},[e("span",[t._v(" "+t._s(this.bioPreview)+" ")]),e("span",{attrs:{id:"contentMore"}},[t._v(t._s(this.bioFull))])])]):t._e(),e("button",{staticClass:"swiper",attrs:{id:"readMore"},on:{click:function(e){return t.readMore()}}},[t._v(" Read more ")])])]),e("br"),e("br"),e("Divider"),this.data?e("h2",{staticClass:"author_bio_title",staticStyle:{"margin-top":"8rem"},attrs:{"data-aos":"fade-up"}},[t._v(" "+t._s(this.data.mail.title)+" ")]):t._e(),e("div",{staticClass:"diamond",staticStyle:{margin:"2rem auto","font-size":"2vh"}},[t._v("♦")]),this.data?e("h4",{staticStyle:{"font-family":"'STIXTwo"}},[t._v(" "+t._s(this.data.mail.desc)+" ")]):t._e(),e("br"),e("br"),e("section",{attrs:{id:"newsletter"}},[e("Mailerlite")],1),e("Divider"),this.data?e("div",t._l(this.data.books,(function(i,s){return e("div",{key:i.id},[e("section",{key:i.id,ref:"bookSection",refInFor:!0,attrs:{id:"synopsis"}},[e("div",{staticClass:"full_bio_container d-flex justify-space-between align-items-center",class:s%2===0?"row-reverse":"",staticStyle:{margin:"0 2rem"}},[e("img",{staticClass:"book_section_image",attrs:{src:a("710a")(`./${i.img}.jpg`),"data-aos":"fade-left"}}),e("div",{staticClass:"author_bio_text",staticStyle:{width:"85%"},attrs:{"data-aos":"fade-right"}},[e("h2",{staticClass:"author_bio_title"},[t._v(t._s(i.title))]),"audiobook"!=i.type?e("h5",{staticClass:"author_bio_body"},[e("q",[t._v(t._s(null===i||void 0===i?void 0:i.quote))]),e("br"),e("cite",[t._v(t._s(i.quote_credit))]),e("br"),e("br"),e("strong",[t._v(t._s(i.paragraph_context))]),e("br"),t._v(" "+t._s(i.preview)+" ")]):t._e(),i.show_synopsis?e("button",{staticClass:"swiper",staticStyle:{"border-bottom":"4px solid var(--white)"},on:{click:function(e){return t.show()}}},[e("span",{staticClass:"swiper_text"},[t._v("View synopsis")])]):t._e(),e("Buy",{attrs:{options:i.buy}}),"audiobook"==i.type?e("div",{staticClass:"audio_container"},[e("h5",{staticStyle:{"font-weight":"bold","font-size":"1.2rem",color:"var(--crimson)","font-family":"'stixTwo'","margin-top":"0"}},[t._v(" Hear a sample: ")]),e("audio",{staticClass:"audio_player",attrs:{controls:"",src:a("5afd")(`./${i.sample}.mp3`)}})]):t._e()],1)]),e("modal",{attrs:{adaptive:!0,minHeight:1400,minWidth:800,height:"auto",scrollable:!0,name:"synopsis-modal",classes:"modal-mobile"}},[i.show_synopsis?e("article",{staticClass:"synopsis_contain"},[e("div",{attrs:{slot:"top-right"},slot:"top-right"},[e("button",{on:{click:function(e){return t.$modal.hide("synopsis-modal")}}},[t._v("❌")])]),e("h1",[t._v("Synopsis")]),e("br"),e("p",[e("strong",[t._v(t._s(i.paragraph_context))]),t._v(" "+t._s(i.full_part_1)+" ")]),e("p",[e("strong",[t._v(t._s(i.later))]),t._v(" "+t._s(i.full_part_2)+" ")])]):t._e()])],1)])})),0):t._e(),e("br"),e("br"),e("Divider"),e("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Gallery")]),e("br"),e("br"),e("Divider"),this.data?e("section",{attrs:{"data-aos":"fade-up",id:"book_images"}},[e("div",{attrs:{id:"example"}},[e("carousel-3d",{attrs:{startIndex:0,width:400,height:400,"inverse-scaling":1500,space:800}},t._l(this.data.slides,(function(i){return e("slide",{key:i.img,staticStyle:{width:"max-content"},attrs:{index:i.img}},[e("img",{staticClass:"carousel_img",attrs:{src:a("f063")(`./${i.img}.webp`)}}),e("span",{staticClass:"carousel_img_caption"},[t._v(t._s(i.caption))])])})),1)],1)]):t._e(),e("br"),e("br"),e("Divider"),e("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Acclaims")]),e("br"),e("br"),e("Divider"),this.data?e("section",{attrs:{"data-aos":"fade-up",id:"reviews"}},[e("div",{staticClass:"quotation_container"}),e("MySwiper",{attrs:{slides:this.data.reviews}})],1):t._e(),e("br"),e("br"),e("Divider"),e("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Acknowledgements")]),e("br"),e("br"),e("Divider"),e("br"),e("section",{attrs:{"data-aos":"fade-up",id:"acknowledgements"}},[e("h1",{staticClass:"author_name narrator_name",attrs:{"data-aos":"fade-up"}},[t._v(" J Dallon Taylor ")]),e("h2",[t._v("About the Narrator")]),e("div",{staticClass:"narrator_bio_container"},[e("img",{staticClass:"acknowledgements_image",attrs:{alt:"Acknowledgements",src:a("4d69")}}),t._m(0)]),t._m(1)]),e("br"),e("br"),e("Divider"),e("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Balloch Castle")]),e("br"),e("br"),e("Divider"),e("br"),e("section",{staticClass:"balloch_castle"},[e("div",[e("Flipbook",{staticClass:"flipbook",attrs:{pages:t.pages},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[e("button",{staticClass:"flip_control",on:{click:a.flipLeft}},[t._v(" Previous Page ")]),e("button",{staticClass:"flip_control",on:{click:a.zoomOut}},[t._v("-")]),e("button",{staticClass:"flip_control",on:{click:a.zoomIn}},[t._v("+")]),e("button",{staticClass:"flip_control",on:{click:a.flipRight}},[t._v(" Next Page ")])])]}}])})],1)]),e("div",{staticClass:"slant"},[t._v(" ")]),e("section",{ref:"contact",staticClass:"contact_section",attrs:{id:"contact"}},[e("h1",{staticClass:"contact_title"},[t._v("Contact")]),e("br"),e("div",{staticClass:"contact_form_contain",attrs:{id:"vanta_form"}},[e("form",{staticClass:"contact",attrs:{action:"https://formsubmit.co/mamaddock1@gmail.com",method:"POST"}},[e("div",{staticClass:"form_input_contain"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],attrs:{required:"",type:"text",name:"subject",id:"subject",placeholder:"Your subject here"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})]),e("div",{staticClass:"form_input_contain"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{required:"",type:"email",name:"email",placeholder:"name@example.com"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"form_input_contain"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],attrs:{required:"",name:"message",placeholder:"Your message here"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),e("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_honey"}}),e("button",{staticClass:"swiper contact_button",attrs:{type:"submit",value:"Submit"},on:{submit:function(e){return t.handleSubmit()}}},[t._v(" Submit ")])])]),e("Footer")],1)],1)},j=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"narrator_bio_body"},[t._v(" Born and raised in Alberta, Canada, J Dallin Taylor grew up with a natural flair for performing. He would often act out his favourite scenes from film and TV—a passion that has not changed. Through hard work and dedication, he progressed from supporting to leading roles in his grade school theatre productions. This would lead to Dallin being awarded multiple awards for acting during his senior year. Dallin eventually found his way to Audible where he began auditioning as an audiobook narrator. "),e("br"),e("br"),t._v(" This is where his path crossed with author, M. A. Maddock. After a rigorous audition, he landed the job, taking on the mammoth task of elevating her fantasy fiction novels to another level, by bringing her misfit of characters to “life”. Maddock’s Sixth Amulet Series is currently an ongoing project, which Dallin describes as a “Labour of love” – and for which Maddock sings his praises; “I could not be happier with what Dallin has done with my characters. He’s truly a gifted actor.” Dallin is also an accomplished screenwriter and is currently in the process of submitting his latest venture, After Eden—a post society Sc-Fi—co-written with fellow screenwriter, Scott Biggs, to production companies. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"final_acknowledgements_container"},[e("h2",[t._v("Final Acknowledgements")]),e("ul",{staticClass:"acknowledgements_list"},[e("li",[e("span",{staticStyle:{color:"var(--crimson)",padding:"0.25rem"}},[t._v("*")]),t._v("Book Cover design by Diana Toledo Calcado – Triumph Book Covers ")]),e("li",[e("span",{staticStyle:{color:"var(--crimson)",padding:"0.25rem"}},[t._v("*")]),t._v("Cover illustrations by Tegan Sommers – Artist ")]),e("li",[e("span",{staticStyle:{color:"var(--crimson)",padding:"0.25rem"}},[t._v("*")]),t._v("Interior illustrations by Geraldine O’Malley – Artist ")]),e("li",[e("span",{staticStyle:{color:"var(--crimson)",padding:"0.25rem"}},[t._v("*")]),t._v("Maps by Lewis Hickson – Cartographer – Fantasy Maps ")]),e("li",[e("span",{staticStyle:{color:"var(--crimson)",padding:"0.25rem"}},[t._v("*")]),t._v("Website by my “Wee Master of the Web” – Jake Warren Black ")])])])}],E=a("2af0"),O=function(){var t=this;t._self._c;return t._m(0)},I=[function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"container"},[e("div",{staticClass:"divider"},[t._v("♦")])])])}],T={name:"Divider",data(){return{}},methods:{},mounted(){}},D=T,B=(a("4f6c"),Object(d["a"])(D,O,I,!1,null,"0784554c",null)),M=B.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer_contain"},[e("footer",{staticClass:"d-flex flex-column"},[t._m(0),e("div",{staticClass:"socials d-flex justify-space-around"},[e("a",{attrs:{target:"_blank",href:"https://twitter.com/mamaddock1_a"}},[e("div",{staticClass:"icon_contain"},[e("img",{staticClass:"social_icon",attrs:{src:a("a7ad")}})])]),e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/ma.maddock_author"}},[e("div",{staticClass:"icon_contain"},[e("img",{staticClass:"social_icon",attrs:{src:a("4271")}})])]),e("a",{attrs:{target:"_blank",href:"https://fb.me/thesixthamuletseries"}},[e("div",{staticClass:"icon_contain"},[e("img",{staticClass:"social_icon",attrs:{src:a("e345")}})])])]),t._v(" © Copyright M.A. Maddock 2022 ")])])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("h3",[t._v("M.A. MADDOCK")])])}],N={name:"Footer",components:{},data(){return{}},methods:{},mounted(){}},q=N,P=(a("e03f"),Object(d["a"])(q,L,A,!1,null,"1da92594",null)),F=P.exports,H=function(){var t=this,e=t._self._c;return e("vue-video-section",{ref:"header-background-video",staticClass:"img_contain",attrs:{elementId:"header-background-video",mp4Source:a("431c"),posterSource:a("6483"),mobileBreakpoint:762,desktopWidth:1920,desktopHeight:850,mobileHeight:450,playsinline:!0,loop:!0,autoplay:!1,autobuffer:!0,muted:!1}},[e("div",{staticClass:"overlay-content",attrs:{slot:"overlay-content",id:"overlay-content"},slot:"overlay-content"},[e("h4",{staticClass:"two-rem STIXTwo",attrs:{id:"video_title"},on:{click:function(e){return t.playVideo()}}},[t._v(" Book two of The Sixth Amulet series ")]),e("h2",{staticClass:"four-rem STIXTwo",attrs:{id:"video_subtitle"}},[t._v("The Moon Chasers")]),e("button",{staticClass:"swiper",staticStyle:{padding:"1rem"},attrs:{id:"video_button"},on:{click:t.toggleVideo}},[t._v(" Play trailer ")])])])},$=[],V=(a("e9f5"),a("910d"),a("3aee")),z={name:"Video",components:{VueVideoSection:V["a"]},props:{},data(){return{playButtonClicks:0}},mounted(){var t=document.getElementsByClassName("vue-video-section__overlay-content-wrapper__content-wrapper__content")[0];t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center"},methods:{toggleVideo(){this.playButtonClicks++;var t=document.getElementById("video_button"),e=document.getElementById("overlay-content"),a=document.getElementById("video_title"),i=document.getElementById("video_subtitle");this.playButtonClicks%2!=0?(a.style.opacity="0",i.style.opacity="0",window.innerWidth>=768?e.style.transform="translateY(40%)":e.style.transform="translateY(10%)",document.getElementsByClassName("vue-video-section__overlay-content-wrapper__background")[0].classList.add("video_bg_none"),document.getElementById("header-background-video").style.filter="none",t.innerHTML="Pause trailer",t.style.opacity="0.2",this.$refs["header-background-video"].playVideo()):(a.style.opacity="1",i.style.opacity="1",e.style.transform="translateY(0%)",document.getElementsByClassName("vue-video-section__overlay-content-wrapper__background")[0].classList.remove("video_bg_none"),document.getElementById("header-background-video").style.filter="blur(0.25rem)",t.innerHTML="Play trailer",t.style.opacity="1",this.$refs["header-background-video"].pauseVideo())}}},R=z,W=Object(d["a"])(R,H,$,!1,null,"7f031206",null),Y=W.exports,G=function(){var t=this,e=t._self._c;return this.slides?e("Swiper",{ref:"mySwiper",staticClass:"review_swiper",attrs:{options:t.swiperOptions}},[t._l(this.slides,(function(a){return e("SwiperSlide",{key:a.id},[e("div",{staticClass:"review_quote_contain"},[e("q",{staticClass:"quote_body"},[t._v(t._s(a.body))]),e("br"),e("h2",{staticClass:"quote_credit"},[t._v(t._s(a.credit))]),e("h4",{staticClass:"quote_credit_credential"},[t._v(" "+t._s(a.credential)+" ")])])])})),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2):this.kelpieImages?e("Swiper",{ref:"mySwiper",staticClass:"review_swiper",staticStyle:{margin:"4rem auto"},attrs:{options:t.swiperOptions}},[t._l(t.kelpieImages,(function(t){return e("SwiperSlide",{key:t},[e("div",{staticClass:"swiper-image-contain"},[e("img",{staticClass:"object-fit-contain",attrs:{src:t}})])])})),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2):t._e()},U=[],J=a("7212"),K=(a("a7a3"),{name:"MySwiper",props:{slides:Array,kelpieImages:Array},directives:{swiper:J["directive"]},components:{Swiper:J["Swiper"],SwiperSlide:J["SwiperSlide"]},data(){return{test:[{id:0,body:"lorem",credit:"ipsum",credential:"joe bloggs"}],swiperOptions:{centeredSlides:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted(){var t=document.getElementsByClassName("swiper-wrapper");t[0].style.display="flex",t[0].style.alignItems="center"}}),X=K,Q=Object(d["a"])(X,G,U,!1,null,"364da7b8",null),Z=Q.exports,tt=function(){var t=this,e=t._self._c;return e("div",[this.options?e("div",{staticClass:"container"},t._l(this.options,(function(a){return e("div",{key:a.link},[e("div",{ref:"buyButton",refInFor:!0},[e("a",{attrs:{target:"_blank",href:a.link}},[e("button",{staticClass:"buy-button"},[t._v(t._s(a.name))])])])])})),0):t._e()])},et=[],at=(a("7d54"),{name:"Buy",props:{options:{type:Array,default:()=>[]}},components:{},data(){return{drawerOpen:!1,counter:0}},mounted(){},methods:{expand(){this.$refs.buyButton.forEach(t=>{this.counter%2===0?(t.classList.remove("fadeSlideB"),t.classList.add("fadeSlideF")):(t.classList.remove("fadeSlideF"),t.classList.add("fadeSlideB"))}),this.counter++}}}),it=at,st=(a("504c"),Object(d["a"])(it,tt,et,!1,null,"b38ea484",null)),ot=st.exports,rt=a("5a89"),nt=a("c947"),lt=a.n(nt),ct=a("8330"),dt=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"signup",className:"gradient-gray"}},[e("div",{attrs:{id:"mlb2-CODE",className:"ml-subscribe-form ml-subscribe-form-Gqf4Gb"}},[e("div",{attrs:{className:"ml-vertical-align-center"}},[e("div",{staticStyle:{display:"none"},attrs:{className:"subscribe-form ml-block-success"}},[e("div",{attrs:{className:"form-section"}},[e("p",[t._v(t._s(this.message))])])]),e("form",{attrs:{className:"ml-block-form",action:"https://assets.mailerlite.com/jsonp/37343/forms/53825848642373021/subscribe","data-id":"CODE","data-code":"CODE",method:"POST",target:"_blank"},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[e("div",{attrs:{className:"subscribe-form"}},[e("div",{attrs:{className:"form-section"}},[e("div",{attrs:{className:"form-group ml-field-email ml-validate-required ml-validate-email"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{required:"",type:"email",name:"fields[email]",className:"form-control signup-text",placeholder:"Email address",autoComplete:"email",spellCheck:"false",autoCapitalize:"off",autoCorrect:"off"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),e("input",{attrs:{type:"hidden",name:"ml-submit",value:"1"}}),e("button",{attrs:{type:"submit",className:"primary signup-button"}},[t._v(" Subscribe ")]),e("button",{staticStyle:{display:"none"},attrs:{disabled:"",type:"button",className:"loading"}},[t._v(" Submitting... ")])])])])])])])])},ut=[],mt=a("bc3a"),pt=a.n(mt),ht={name:"Mailerlite",data(){return{email:"",message:""}},mounted(){},methods:{submit(){pt.a.post("https://assets.mailerlite.com/jsonp/37343/forms/53825848642373021/subscribe",{fields:{email:this.email}}).then(()=>{console.log(this.email),this.$router.push("/thanks"),this.message="Thank you, you have successfully subscribed!"}).catch(()=>{this.$router.push("/"),this.message="Sorry, something went wrong with the previous form submission"})}}},ft=ht,_t=Object(d["a"])(ft,dt,ut,!1,null,"3ad7d4a7",null),bt=_t.exports,vt=a("25d2"),gt=a.n(vt),yt=a("7abe"),wt=a.n(yt),Ct=a("c2bc"),kt=a.n(Ct),xt=a("d3c6"),St=a.n(xt),jt={name:"Home",metaInfo:{title:"Home",meta:[]},components:{Buy:ot,MySwiper:Z,Video:Y,Mailerlite:bt,Flipbook:ct["a"],Footer:F,Divider:M,Carousel3d:E["Carousel3d"],Slide:E["Slide"]},computed:{...Object(g["b"])(["scrolledElement"])},data(){return{pages:[null,gt.a,wt.a,kt.a,St.a],loading:!0,convertKitConfig:{formId:2986098,template:"minimal",hideName:!1,stack:!1},form:{email:"",subject:"",message:""},data:null,bioPreview:"",bioFull:""}},methods:{convertBio(){window.innerWidth<=767?(this.bioPreview=this.data.bio.content.split(" ").slice(0,parseInt(this.data.bio.splitAfter)).join(" "),this.bioFull=this.data.bio.content.split(" ").slice(parseInt(this.data.bio.splitAfter),this.data.bio.content.length-1).join(" ")):this.bioPreview=this.data.bio.content},show(){this.$modal.show("synopsis-modal")},hide(){this.$modal.hide("synopsis-modal")},readMore(){var t=document.getElementById("contentMore"),e=document.getElementById("readMore");"inline"===t.style.display?(t.style.display="none",e.innerHTML="Read more",t.scrollIntoView()):(t.style.display="inline",e.innerHTML="Read less")},handleSubmit(t){t.preventDefault(),this.form.email&&this.form.subject&&!this.form.message&&this.router.push("/thanks")}},created(){setTimeout(()=>{if(this.scrolledElement){var t=document.getElementById(this.scrolledElement).offsetTop;t&&window.scrollTo(0,t)}},500)},async mounted(){await pt.a.get("./data.json").then(t=>this.data=t.data),this.vantaEffect=lt()({el:"#nav_header_contain",THREE:rt,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:300,minWidth:200,highlightColor:4596739,midtoneColor:7867908,lowlightColor:460551,baseColor:131586,blurFactor:.41,speed:.4,zoom:1}),this.convertBio(),document.getElementsByClassName("vanta-canvas")[0].style.top="-450px",this.vantaEffect=lt()({el:"#contact",THREE:rt,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:1200,minWidth:200,highlightColor:4596739,midtoneColor:7867908,lowlightColor:460551,baseColor:131586,blurFactor:.41,speed:.4,zoom:1}),window.innerWidth<=767&&(document.getElementById("readMore").style.display="block"),this.$nextTick((function(){this.$store.dispatch("setLoading",{isLoading:!1})}))},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy()}},Et=jt,Ot=(a("145f"),a("a2c1"),Object(d["a"])(Et,S,j,!1,null,"44e0413d",null)),It=Ot.exports,Tt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"background"}},[e("div",{attrs:{id:"container"}},[e("h1",[t._v("Thank you!")]),e("h2",[t._v("Thanks for your form submission")]),e("h3",[t._v("Remember to check your spam and 'promotions' folder!")]),e("br"),e("button",{staticClass:"swiper",on:{click:function(e){return t.home()}}},[t._v("Go home")])])])},Dt=[],Bt={name:"Thanks",metaInfo:{title:"Thanks",meta:[]},data(){return{}},methods:{home(){console.log("click"),this.$router.push("/")}},mounted(){this.vantaEffect=lt()({el:"#background",THREE:rt,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:1200,minWidth:200,highlightColor:4596739,midtoneColor:7867908,lowlightColor:460551,baseColor:131586,blurFactor:.41,speed:.4,zoom:1}),document.querySelectorAll(".vanta-canvas").style.height="100%"}},Mt=Bt,Lt=(a("605c"),Object(d["a"])(Mt,Tt,Dt,!1,null,"f8565204",null)),At=Lt.exports,Nt=function(){var t=this,e=t._self._c;return this.data?e("div",{attrs:{id:"container"}},[e("section",{attrs:{id:"short_bio"}},[e("h2",{staticClass:"author_bio_title"},[t._v(t._s(this.data.history.title))])]),e("Divider"),e("section",{attrs:{id:"full_bio"}},[e("img",{staticClass:"object-fit-contain author_image history_author_image bg_size_cover history_image",attrs:{src:t.doublecover,"data-aos":"fade-right"}})]),e("section",{ref:"bookSection",staticClass:"d-flex justify-content-center",attrs:{id:"synopsis"}},[e("div",{staticClass:"author_bio_text d-flex justify-content-center margin-auto flex-column"},[e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.history.p1)+" ")]),e("b",[t._v(t._s(this.data.history.please_note))]),e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.history.p2)+" ")]),e("MySwiper",{attrs:{kelpieImages:this.kelpieImages}}),e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.history.p3)+" ")]),e("b",[t._v(t._s(this.data.history.p3_bold_after))]),e("div",{staticClass:"quote"},[e("blockquote",[t._v(t._s(this.data.history.quote))]),e("cite",[t._v(t._s(this.data.history.quote_credit))])]),e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.history.p4)+" ")]),e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.history.learn_more)+" ")]),e("h5",{staticClass:"author_bio_body"},[e("a",{attrs:{href:this.data.history.link}},[t._v(t._s(this.data.history.link))])])],1)]),e("Divider",{staticClass:"history_divider"}),e("Footer")],1):t._e()},qt=[],Pt=a("8bb2"),Ft=a.n(Pt),Ht=a("709e"),$t=a.n(Ht),Vt=a("e2f2"),zt=a.n(Vt),Rt=a("a051"),Wt=a.n(Rt),Yt={name:"History",metaInfo:{title:"History",meta:[]},components:{Footer:F,Divider:M,MySwiper:Z},data(){return{doublecover:Wt.a,kelpieImages:[Ft.a,$t.a,zt.a],data:null}},methods:{},async mounted(){document.title="M.A Maddock",await pt.a.get("./data.json").then(t=>this.data=t.data)}},Gt=Yt,Ut=(a("5510"),a("7ba9"),Object(d["a"])(Gt,Nt,qt,!1,null,"7070487e",null)),Jt=Ut.exports,Kt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("section",{attrs:{id:"full_bio"}},[e("fig",[e("img",{staticClass:"author_image history_author_image bg_size_cover",attrs:{src:a("25d2"),"data-aos":"fade-right"}}),e("figcaption",[t._v("Photograph courtesy of Billy Aitken")])])],1),e("br"),e("br"),e("h2",{staticClass:"author_bio_title"},[t._v(t._s(this.data.balloch.heading1))]),e("Divider"),e("section",{ref:"bookSection",attrs:{id:"synopsis"}},[e("div",{staticClass:"full_bio_container d-flex flex-column justify-content-center align-items-center"},[e("div",{staticClass:"author_bio_text margin-auto balloch_article_paragraph",attrs:{"data-aos":"fade-up"}},[e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.balloch.p1)+" ")])]),e("h2",{staticClass:"author_bio_title"},[t._v(t._s(this.data.balloch.heading2))]),e("Divider"),e("div",{staticClass:"author_bio_text margin-auto balloch_article_paragraph",attrs:{"data-aos":"fade-up"}},[e("h5",{staticClass:"author_bio_body"},[t._v(" "+t._s(this.data.balloch.p2)),e("br"),e("a",{attrs:{target:"_blank",href:""+this.data.balloch.link}},[t._v(t._s(this.data.balloch.link))])])])],1)]),e("Divider"),e("Footer",{staticStyle:{"margin-top":"0"}})],1)},Xt=[],Qt={name:"BallochCastle",metaInfo:{title:"Balloch Castle",meta:[]},components:{Footer:F,Divider:M},data(){return{links:[{title:"BIO",href:"#full_bio",router:!1},{title:"NOVEL",href:"#synopsis",router:!1},{title:"HISTORY",href:"/history",router:!0},{title:"BALLOCH CASTLE",href:"/balloch_castle",router:!0},{title:"CONTACT",href:"#contact",router:!1}],data:null}},methods:{},async mounted(){document.title="M.A Maddock",await pt.a.get("./data.json").then(t=>this.data=t.data)}},Zt=Qt,te=(a("6c19"),a("c778"),Object(d["a"])(Zt,Kt,Xt,!1,null,"1501e108",null)),ee=te.exports;i["default"].use(x["a"]);var ae=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:It},{path:"/thanks",name:"thanks",component:At},{path:"/history",name:"history",component:Jt},{path:"/balloch_castle",name:"balloch_castle",component:ee}]}),ie=a("f5af"),se=a.n(ie),oe=(a("e829"),a("1881")),re=a.n(oe),ne=a("58ca");i["default"].use(g["a"]);var le=new g["a"].Store({state:{scrolledElement:null,loading:!0},getters:{},mutations:{SET_SCROLLED_ELEMENT(t,e=null){t.scrolledElement=e?e.element:null},SET_LOADING(t,e=null){e&&(t.loading=e.isLoading,document.querySelector("html").style.overflowY="scroll")}},actions:{scroll(t,e=null){t.commit("SET_SCROLLED_ELEMENT",e)},setLoading(t,e=null){t.commit("SET_LOADING",e)}}}),ce=a("f13c");i["default"].use(ce),i["default"].use(ne["a"]),i["default"].use(re.a),i["default"].use(ae),i["default"].use(ce,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["default"].config.productionTip=!1,new i["default"]({async created(){se.a.init()},router:ae,store:le,render:t=>t(k)}).$mount("#app")},"5afd":function(t,e,a){var i={"./the_moon_chasers.mp3":"9294","./the_sixth_amulet.mp3":"9cca"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="5afd"},6015:function(t,e,a){},"605c":function(t,e,a){"use strict";a("a1c6")},"60f3":function(t,e,a){t.exports=a.p+"img/moon_chasers.c2e7fa30.jpg"},6483:function(t,e,a){t.exports=a.p+"img/placeholder_2025.8c15ebe0.png"},"654d":function(t,e,a){t.exports=a.p+"img/10.3ab9770b.webp"},6860:function(t,e,a){},"6c19":function(t,e,a){"use strict";a("4f2f")},"6e26":function(t,e,a){},"709e":function(t,e,a){t.exports=a.p+"img/kelpie-2.4192b2fd.jpg"},"710a":function(t,e,a){var i={"./bio_photo.jpg":"293c","./book_cover_full_width.jpg":"b059","./cover_mockup.jpg":"005a","./covers/audiobooks/the_moon_chasers.jpg":"f2a1","./covers/audiobooks/the_sixth_amulet.jpg":"311f","./covers/flutter_on_the_wind.jpg":"a662","./covers/moon_chasers.jpg":"60f3","./covers/sixth_amulet.jpg":"fa0d","./history/double-cover.jpg":"a051","./history/kelpie-1.jpg":"8bb2","./history/kelpie-2.jpg":"709e","./history/kelpie-3.jpg":"e2f2","./man.jpg":"4d69"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="710a"},7340:function(t,e,a){t.exports=a.p+"img/12.2405c467.webp"},"7abe":function(t,e,a){t.exports=a.p+"img/2.e7facfb8.webp"},"7ba9":function(t,e,a){"use strict";a("2cf8")},"7f36":function(t,e,a){},"8bb2":function(t,e,a){t.exports=a.p+"img/kelpie-1.839c2c86.jpg"},"8f40":function(t,e,a){},9294:function(t,e,a){t.exports=a.p+"media/the_moon_chasers.60381209.mp3"},"9cca":function(t,e,a){t.exports=a.p+"media/the_sixth_amulet.db63ac5a.mp3"},a051:function(t,e,a){t.exports=a.p+"img/double-cover.c4f078ab.jpg"},a1c6:function(t,e,a){},a2c1:function(t,e,a){"use strict";a("02e1")},a662:function(t,e,a){t.exports=a.p+"img/flutter_on_the_wind.46a5fd15.jpg"},a7ad:function(t,e,a){t.exports=a.p+"img/icons_twitter.92d5794b.svg"},acc3:function(t,e,a){t.exports=a.p+"img/1.6da433cb.webp"},b059:function(t,e,a){t.exports=a.p+"img/book_cover_full_width.7dbf3a4c.jpg"},bd4a:function(t,e,a){t.exports=a.p+"img/7.fdf57268.webp"},c2bc:function(t,e,a){t.exports=a.p+"img/3.3d76916d.webp"},c520:function(t,e,a){t.exports=a.p+"img/3.c3742cc6.webp"},c778:function(t,e,a){"use strict";a("6015")},cd7f:function(t,e,a){t.exports=a.p+"img/11.e3cb6a7a.webp"},d3c6:function(t,e,a){t.exports=a.p+"img/4.d34b4b18.webp"},d952:function(t,e,a){t.exports=a.p+"img/5.e165d857.webp"},d963:function(t,e,a){"use strict";a("0056")},d9c7:function(t,e,a){"use strict";a("6860")},de9f:function(t,e,a){t.exports=a.p+"img/2.3c07daa6.webp"},e03f:function(t,e,a){"use strict";a("8f40")},e2f2:function(t,e,a){t.exports=a.p+"img/kelpie-3.06a3012b.jpg"},e345:function(t,e,a){t.exports=a.p+"img/icons_facebook.e30586f8.svg"},e7b4:function(t,e,a){},e88a:function(t,e,a){"use strict";a("21bd")},f063:function(t,e,a){var i={"./0.webp":"2880","./1.webp":"acc3","./10.webp":"654d","./11.webp":"cd7f","./12.webp":"7340","./13.webp":"4e22","./2.webp":"de9f","./3.webp":"c520","./4.webp":"5185","./5.webp":"d952","./6.webp":"2ff1","./7.webp":"bd4a","./8.webp":"3113","./9.webp":"4aae"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="f063"},f2a1:function(t,e,a){t.exports=a.p+"img/the_moon_chasers.9dbf0085.jpg"},f368:function(t,e,a){},fa0d:function(t,e,a){t.exports=a.p+"img/sixth_amulet.459afd40.jpg"}});
//# sourceMappingURL=app.ec51896e.js.map