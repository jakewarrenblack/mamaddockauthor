(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mamaddockauthor/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"02db":function(t,e,o){t.exports=o.p+"img/sample.d5b3d2d0.jpg"},"034f":function(t,e,o){"use strict";o("85ec")},1391:function(t,e,o){"use strict";o("7df9")},"261d":function(t,e,o){t.exports=o.p+"media/sample.d55bddf8.mp4"},"2ad9":function(t,e,o){"use strict";o("8534")},"2e7a":function(t,e,o){t.exports=o.p+"img/1.b03f1f36.jpg"},"2f33":function(t,e,o){"use strict";o("70c3")},"32c7":function(t,e,o){t.exports=o.p+"img/icons_goodreads.92bee8a4.svg"},"40eb":function(t,e,o){t.exports=o.p+"img/2.cf3bcce9.jpg"},4271:function(t,e,o){t.exports=o.p+"img/icons_instagram.dedf90b9.svg"},"42c7":function(t,e,o){t.exports=o.p+"img/6.837555c1.jpg"},"479e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],s={name:"App",components:{}},r=s,l=(o("034f"),o("2877")),c=Object(l["a"])(r,n,i,!1,null,null,null),d=c.exports,u=o("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"nav_header_contain"}},[a("Navbar"),a("section",{attrs:{id:"header"}},[a("div",{staticClass:"header_container"},[t._m(0),a("vue-video-section",{ref:"header-background-video",staticClass:"img_contain",attrs:{elementId:"header-background-video",mp4Source:o("261d"),posterSource:o("02db"),mobileBreakpoint:762,desktopHeight:750,mobileHeight:450,playsinline:!0,loop:!0,autoplay:!1,autobuffer:!0,muted:!0}},[a("div",{staticClass:"overlay-content",attrs:{slot:"overlay-content",id:"overlay-content"},slot:"overlay-content"},[a("h4",{staticClass:"two-rem STIXTwo",attrs:{id:"video_title"},on:{click:function(e){return t.playVideo()}}},[t._v(" Latest Release ")]),a("h2",{staticClass:"four-rem STIXTwo",attrs:{id:"video_subtitle"}},[t._v(" Title of book to be re-released ")]),a("button",{attrs:{id:"video_button"},on:{click:t.toggleVideo}},[t._v(" Play trailer ")])])])],1)])],1),t._m(1),a("Divider"),a("section",{attrs:{id:"full_bio"}},[a("div",{staticClass:"full_bio_container d-flex justify-space-between align-items-center"},[a("div",{staticClass:"author_image miriam_image bg_size_cover clip_towards_left",attrs:{"data-aos":"fade-right"}}),t._m(2),a("button",{staticClass:"swiper",attrs:{id:"readMore"},on:{click:function(e){return t.readMore()}}},[t._v(" Read more ")])])]),a("br"),a("br"),a("Divider"),a("h2",{staticClass:"author_bio_title",staticStyle:{"margin-top":"8rem"},attrs:{"data-aos":"fade-up"}},[t._v(" Join My Mailing List ")]),a("div",{staticClass:"diamond",staticStyle:{margin:"2rem auto","font-size":"2vh"}},[t._v("♦")]),a("h4",{staticStyle:{"font-family":"'STIXTwo"}},[t._v(" Stay up to date on all things Beyond the Darkness. ")]),a("br"),a("br"),a("section",{attrs:{id:"newsletter"}},[a("ConvertKitForm",t._b({},"ConvertKitForm",t.convertKitConfig,!1))],1),a("Divider"),a("section",{ref:"bookSection",attrs:{id:"full_bio"}},[a("div",{staticClass:"full_bio_container d-flex justify-space-between align-items-center row-reverse"},[a("div",{staticClass:"author_image bg-size-cover bg-position-center book-image clip_towards_right_pointed_bottom",attrs:{"data-aos":"fade-left"}}),a("div",{staticClass:"author_bio_text",attrs:{"data-aos":"fade-right"}},[a("h2",{staticClass:"author_bio_title"},[t._v("Beyond the Darkness")]),t._m(3),a("button",{staticClass:"swiper",on:{click:function(e){return t.show()}}},[a("span",{staticClass:"swiper_text"},[t._v("View synopsis")])])])]),a("modal",{attrs:{adaptive:!0,minHeight:1400,minWidth:800,height:"auto",scrollable:!0,name:"synopsis-modal",classes:"modal-mobile"}},[a("article",{staticClass:"synopsis_contain"},[a("div",{attrs:{slot:"top-right"},slot:"top-right"},[a("button",{on:{click:function(e){return t.$modal.hide("synopsis-modal")}}},[t._v("❌")])]),a("h1",[t._v("Synopsis")]),a("br"),a("p",[a("strong",[t._v("Scotland 1564:")]),t._v(" Oran Shaw is no ordinary man: a Warlock, determined to leave his lengthy past behind, he disregards his elders, choosing to live a normal life among mortals … until he crosses paths with Kristene—a young, innocent woman, wrongfully accused of witchcraft. He feels compelled to rescue her from her death sentence. It is an act he would later regret. ")]),a("p",[t._v(" Together, they flee to a new life, settling in Triora—Italy. But life alters when a sinister rival from Oran’s past—Magia Nera, a dark Warlock—discovers them. He secretly manipulates Kristene, luring her away from Oran, bitterly ending their relationship. However, his interference eventually forces the three to go their separate ways. ")]),a("p",[a("strong",[t._v("Four decades later:")]),t._v(" Oran has returned to Scotland, where he meets Rosalyn, a young widow with a baby. They marry and settle in the small village of Balloch, near the shores of Lac Lomond. At last, Oran feels content, living a normal and peaceful life with his new family. But when Rosalyn bears him a son, Gillis, life changes utterly for the reluctant Warlock. ")]),a("p",[t._v(" Oran’s past creeps up on him in the form of a Sorceress, named L’Ordana. He recognises her as Kristene, and there is an element of evil inside her. She is not alone and wants something from him: the location of a powerful amulet—the Shenn. Aware his son is destined to rule over the precious item, Oran vows to protect him … no matter what! Bound by duty, he is forced by his “council”—the Elliyan—to seek out the Sorceress and destroy her. Oran, however, is torn between their past and the present. But, when they come face to face, the Warlock unexpectedly finds himself as her prisoner. ")]),a("p",[t._v(" Over time, he allies with three unlikely characters, to help him escape; they are not what they seem. Half-human—half Vampire, the three Dhampir, Reece (a Soldier), Asai (a Samurai), and Tam (a Highlander), are also L’Ordana’s prisoners—through no fault of their own. They, too, want freedom and their mortality restored. Therefore, Oran makes a bargain with them: in exchange for their freedom, they find and protect his son. With many lives at stake, and time running out, a twist of fate then turns the table on them all, when Reece makes a shocking discovery … ")])])])],1),a("br"),a("br"),a("Divider"),a("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Concept Art")]),a("br"),a("br"),a("Divider"),a("section",{attrs:{"data-aos":"fade-up",id:"book_images"}},[a("div",{attrs:{id:"example"}},[a("carousel-3d",{attrs:{startIndex:6,width:400,height:400,"inverse-scaling":1500,space:800}},t._l(t.slides,(function(e){return a("slide",{key:e.img,attrs:{index:e.img}},[a("img",{staticClass:"carousel_img",attrs:{src:o("9a88")("./"+e.img+".jpg")}}),a("span",{staticClass:"carousel_img_caption"},[t._v(t._s(e.caption))])])})),1)],1)]),a("br"),a("br"),a("Divider"),a("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Acclaims")]),a("br"),a("br"),a("Divider"),a("section",{attrs:{"data-aos":"fade-up",id:"reviews"}},[a("div",{staticClass:"quotation_container"}),a("swiper",{ref:"mySwiper",staticClass:"review_swiper",attrs:{options:t.swiperOptions}},[t._l(t.reviews,(function(e){return a("swiper-slide",{key:e.body},[a("div",{staticClass:"review_quote_contain"},[a("q",{staticClass:"quote_body"},[t._v(t._s(e.body))]),a("br"),a("h2",{staticClass:"quote_credit"},[t._v(t._s(e.credit))]),a("h4",{staticClass:"quote_credit_credential"},[t._v(" "+t._s(e.credential)+" ")])])])})),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),a("br"),a("br"),a("Divider"),a("h2",{staticClass:"author_bio_title",attrs:{"data-aos":"fade-up"}},[t._v("Balloch Castle")]),a("br"),a("br"),a("Divider"),a("br"),a("section",{staticClass:"balloch_castle"},[a("div",[a("Flipbook",{staticClass:"flipbook",attrs:{pages:t.pages},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("button",{staticClass:"flip_control",on:{click:e.flipLeft}},[t._v(" Previous Page ")]),a("button",{staticClass:"flip_control",on:{click:e.zoomOut}},[t._v("-")]),a("button",{staticClass:"flip_control",on:{click:e.zoomIn}},[t._v("+")]),a("button",{staticClass:"flip_control",on:{click:e.flipRight}},[t._v(" Next Page ")])])]}}])})],1)]),a("div",{staticClass:"slant"},[t._v(" ")]),a("section",{staticClass:"contact_section",attrs:{id:"contact"}},[a("h1",{staticClass:"contact_title"},[t._v("Contact")]),a("br"),t._m(4),a("Footer")],1)],1)},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero_text"},[o("h3",{staticClass:"author_short_desc",attrs:{"data-aos":"fade-down"}},[t._v(" Lorem ipsum Ipsum Dolor Sit Amet ")]),o("h1",{staticClass:"author_name",attrs:{"data-aos":"fade-up"}},[t._v("M.A Maddock")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"short_bio"}},[o("div",{staticClass:"short_bio_container"},[o("h6",[t._v(" M. A. Maddock is an Irish author, currently living in Dublin, Ireland. ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"author_bio_text",attrs:{"data-aos":"fade-left"}},[o("h2",{staticClass:"author_bio_title"},[t._v("About the Author")]),o("h5",{staticClass:"author_bio_body"},[t._v(" Asking an Irish person to write a ‘few’ words about themselves is, putting it mildly, almost impossible! But, here goes. I was born and raised in Dublin, Ireland. Having dabbled in other ‘interests’ over the years (I won’t bore you), in the background, however, I was always an avid reader, with words constantly floating around in my mind yet doing nothing about them, in a literary sense. I used to always say, ‘One day, I’ll write that book,’ but never seemed to get around to doing it. I think the mere thought of putting those words—along with my imagination—to literary use was daunting, therefore, always putting it off. That is, until 2011 when I finally took the plunge and picked up that pen and notebook (still have them, too). I began to string those words into sentences, then paragraphs, then pages, eventually joining them together to create my first novel—The Sixth Amulet - Book One. Then my imagination had other plans; it didn’t want to stop at just one. Why would it? And so, one novel turned into two, then three, then … Who knows where it will end? "),o("br"),o("br"),t._v(" I believe everyone has a story to tell, a potential book tucked away inside them, dying to get out. And all that’s needed to create it, is a simple recipe: a pen and a notebook. So, open your mind and let your imagination roam through the endless possibilities it has to offer … then simply write! "),o("br"),o("br"),t._v(" Many people have asked me, “Why Scotland? And why Balloch?” Well, it was while on my first trip there (around 2005), visiting good friends in Balloch, that I fell in love with the place. Always the perfect hosts each time I visit, Billy, Ciara and Megan are so lucky to live a stone’s throw from Balloch Castle, on the stunning shores of Loch Lomond (well worth a visit if you happen to be passing through). Anyway, it just seemed right to set The Sixth Amulet in this location. And who knows? Maybe I’ll retire there … one day. ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h5",{staticClass:"author_bio_body"},[o("q",[t._v("In the realm of my soul, I believe him to be a great Ruler. ")]),o("br"),o("cite",[t._v("Lothian")]),o("br"),o("br"),o("strong",[t._v("Scotland: 1564")]),o("br"),t._v(" Deep within the bowels of Elboru, it waits—an immense force—locked inside a sacred stone, destined to give its bearer the power to be a formidable Ruler. It belongs to just one—the Magus—Lord of all Warlocks—and he belongs to it. But the world of mortals has been overshadowed by a menace: an evil entity that would have it to dominate and destroy all that is good. And yet, all is not lost. From within this stone, a light is about to re-ignite by innocence, instilling hope into the hearts of those who would risk everything, to see it placed in the hands of the chosen one—to see it shine beyond the darkness. ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact_form_contain",attrs:{id:"vanta_form"}},[o("form",{staticClass:"contact",attrs:{action:""}},[o("div",{staticClass:"form_input_contain"},[o("input",{attrs:{type:"text",name:"subject",id:"subject",placeholder:"Your subject here"}})]),o("div",{staticClass:"form_input_contain"},[o("input",{attrs:{type:"email",placeholder:"name@example.com"}})]),o("div",{staticClass:"form_input_contain"},[o("textarea",{attrs:{placeholder:"Your message here"}})]),o("button",{staticClass:"swiper contact_button",attrs:{type:"submit",value:"Submit"}},[t._v(" Submit ")])])])}],f=(o("a15b"),o("a434"),o("ac1f"),o("1276"),o("7212")),m=(o("a7a3"),o("3aee")),g=o("2af0"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",{attrs:{id:"container"}},[o("nav",[o("h2",[t._v("MA MADDOCK")]),o("ul",[o("li",{staticClass:"navlink"},[t._v("BIO")]),o("li",{staticClass:"navlink"},[t._v("NOVEL")]),o("li",{staticClass:"navlink"},[t._v("CONTACT")])])])])])}],_={name:"Bio",data:function(){return{}},methods:{},mounted:function(){}},y=_,w=(o("773d"),Object(l["a"])(y,v,b,!1,null,"91e2416c",null)),C=w.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",{staticClass:"container"},[o("div",{staticClass:"divider"},[t._v("♦")])])])}],S={name:"Divider",data:function(){return{}},methods:{},mounted:function(){}},j=S,F=(o("2ad9"),Object(l["a"])(j,k,x,!1,null,"54ddb664",null)),O=F.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_contain"},[a("footer",{staticClass:"d-flex flex-column"},[t._m(0),a("div",{staticClass:"socials d-flex justify-space-around"},[a("div",{staticClass:"icon_contain"},[a("img",{staticClass:"social_icon",attrs:{src:o("a7ad")}})]),a("div",{staticClass:"icon_contain"},[a("img",{staticClass:"social_icon",attrs:{src:o("4271")}})]),a("div",{staticClass:"icon_contain"},[a("img",{staticClass:"social_icon",attrs:{src:o("32c7")}})])]),t._v(" © Copyright M.A Maddock 2022 ")])])},A=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("h3",[t._v("MA MADDOCK")])])}],E={name:"Footer",components:{},data:function(){return{}},methods:{},mounted:function(){}},I=E,M=(o("1391"),Object(l["a"])(I,T,A,!1,null,"21d28bc5",null)),B=M.exports,L=o("5a89"),D=o("c947"),H=o.n(D),$=o("8330"),N=o("3dd8"),W=o("c95f"),z=o.n(W),P=o("5e09"),K=o.n(P),R=o("691c"),V=o.n(R),q=o("dac3"),J=o.n(q),Y={name:"Home",components:{VueVideoSection:m["a"],ConvertKitForm:N["a"],Swiper:f["Swiper"],SwiperSlide:f["SwiperSlide"],Flipbook:$["a"],Footer:B,Navbar:C,Divider:O,Carousel3d:g["Carousel3d"],Slide:g["Slide"]},directives:{swiper:f["directive"]},data:function(){return{playButtonClicks:0,swiperOptions:{centeredSlides:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},pages:[null,z.a,K.a,V.a,J.a],slides:[{img:0,caption:"The lotus flower - engraved on Asai Nara’s Katana sword."},{img:1,caption:"The Kelpie – a Scottish mythical creature."},{img:2,caption:"fictional map of the lower Highlands - circa late 1500’s early 1600’s – by Lewis Hickson - Instagram    fantasy_map_cartographer"},{img:3,caption:"The Kelpie – a Scottish mythical creature."},{img:4,caption:"Scottish dirk (dagger) belonging to Eleanor Shaw."},{img:5,caption:"Oran Shaw’s coffer (chest) - contains hidden secrets from his past."},{img:6,caption:"The Shaw crest (broach) – made from solid silver. Oran had this made especially for himself, to give him a sense of ‘belonging’, linking him to his ancestors who were of Pictish origin."},{img:7,caption:"The Arezzo Mirror"},{img:8,caption:"The Window"}],reviews:[{body:"A tapestry of familiar mythology - and wholly original creations - weaved through a world you'll happily get lost in. A story that truly sings.",credit:"Gavin Gardiner",credential:"Author of For Rye and The Last Testament of Crighton Smythe"},{body:"A sumptuous slow burn of a book, in the grand style of epic fantasy, that consumes its reader and transports them to another place and time.",credit:"Julia Blake",credential:"Author of Erinsmore and The Forest ~ a tale of old magic ~"},{body:"An epic historical fantasy read, enriched with unique and wonderful characters whose journey will keep you hooked from beginning to end. Maddock has an eye for detail through her incredible imagination. So glad this is a series; one book is not enough!",credit:"Sarah O’Neill",credential:"Author of Deadly Obsession and Fatal Beliefs"},{body:"Masterfully weaved together, with such great flair, you can’t help but immerse yourself in the fantastical world M. A. Maddock has created. The diverse locations along with her motley cast of misfits will hold your attention from the start. The Sixth Amulet is an epic fantasy (historical) fiction read that packs a punch.",credit:"Emma Moohan",credential:"Actor/Writer"}],convertKitConfig:{formId:2986098,template:"clare",hideName:!0,stack:!1}}},methods:{show:function(){this.$modal.show("synopsis-modal")},hide:function(){this.$modal.hide("synopsis-modal")},readMore:function(){var t=localStorage.getItem("bio"),e=localStorage.getItem("bio_shortened"),o=document.getElementsByClassName("author_bio_body")[0];o.innerHTML==t?o.innerHTML=e:o.innerHTML=t;var a=document.getElementById("readMore");"read more"==a.innerHTML.toLowerCase()?a.innerHTML="read less":a.innerHTML="read more"},toggleVideo:function(){this.playButtonClicks++;var t=document.getElementById("overlay-content"),e=document.getElementById("video_title"),o=document.getElementById("video_subtitle");this.playButtonClicks%2!=0?(e.style.opacity="0",o.style.opacity="0",window.innerWidth>=768&&(t.style.transform="translateY(50%)"),this.$refs["header-background-video"].playVideo()):(e.style.opacity="1",o.style.opacity="1",window.innerWidth>=768&&(t.style.transform="translateY(0%)"),this.$refs["header-background-video"].pauseVideo())}},mounted:function(){this.vantaEffect=H()({el:"#nav_header_contain",THREE:L,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,highlightColor:4588291,midtoneColor:7867908,lowlightColor:460551,baseColor:131586,blurFactor:.41,speed:.4,zoom:1}),this.vantaEffect=H()({el:"#contact",THREE:L,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:1200,minWidth:200,highlightColor:4588291,midtoneColor:7867908,lowlightColor:460551,baseColor:131586,blurFactor:.41,speed:.4,zoom:1});var t=document.getElementsByClassName("vue-video-section__overlay-content-wrapper__content-wrapper__content")[0];t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center";var e=document.getElementsByClassName("swiper-wrapper");e[0].style.display="flex",e[0].style.alignItems="center";var o=document.getElementsByClassName("author_bio_body");localStorage.setItem("bio",o[0].innerHTML);var a=o[0].innerHTML.split(" ").splice(0,29).join(" ")+"...";localStorage.setItem("bio_shortened",a),window.innerWidth<=767&&(document.getElementById("readMore").style.display="block",o[0].innerHTML=a)},beforeDestroy:function(){this.vantaEffect&&this.vantaEffect.destroy()}},G=Y,X=(o("89f1"),o("571e"),Object(l["a"])(G,h,p,!1,null,"3163ee62",null)),U=X.exports,Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"container"}},[t._v("Bio")])},Z=[],tt={name:"Bio",data:function(){return{}},methods:{},mounted:function(){}},et=tt,ot=Object(l["a"])(et,Q,Z,!1,null,"777f7ce1",null),at=ot.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"container"}},[t._v("Novels")])},it=[],st={name:"Novels",data:function(){return{}},methods:{},mounted:function(){}},rt=st,lt=Object(l["a"])(rt,nt,it,!1,null,"57730170",null),ct=lt.exports,dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Flipbook",{staticClass:"flipbook",attrs:{pages:t.pages},scopedSlots:t._u([{key:"default",fn:function(e){return[o("button",{on:{click:e.flipLeft}},[t._v("Previous Page")]),o("button",{on:{click:e.zoomOut}},[t._v("-")]),o("button",{on:{click:e.zoomIn}},[t._v("+")]),o("button",{on:{click:e.flipRight}},[t._v("Next Page")])]}}])})],1)},ut=[],ht={name:"BallochCastle",components:{Flipbook:$["a"]},data:function(){return{pages:[null,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slrlounge.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fwhen-to-shoot-hdr.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slrlounge.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fwhen-to-shoot-hdr.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepsdbazaar.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsky-replace%2Fsun-rise%2Fsunrise-19-freepsdbazaar.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepsdbazaar.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsky-replace%2Fsun-rise%2Fsunrise-19-freepsdbazaar.jpg&f=1&nofb=1"]}},methods:{},mounted:function(){}},pt=ht,ft=(o("2f33"),Object(l["a"])(pt,dt,ut,!1,null,null,null)),mt=ft.exports;a["default"].use(u["a"]);var gt=new u["a"]({mode:"history",base:"/mamaddockauthor/",routes:[{path:"/",name:"home",component:U},{path:"/bio",name:"bio",component:at},{path:"/novels",name:"novels",component:ct},{path:"/balloch-castle",name:"balloch-castle",component:mt}]}),vt=o("f5af"),bt=o.n(vt),_t=(o("e829"),o("1881")),yt=o.n(_t);a["default"].use(yt.a),a["default"].use(gt),a["default"].config.productionTip=!1,new a["default"]({created:function(){bt.a.init()},router:gt,render:function(t){return t(d)}}).$mount("#app")},"571e":function(t,e,o){"use strict";o("479e")},"5db7":function(t,e,o){t.exports=o.p+"img/0.07409949.jpg"},"5e09":function(t,e,o){t.exports=o.p+"img/2.6dd34e19.jpg"},"691c":function(t,e,o){t.exports=o.p+"img/3.a3b90c62.jpg"},"70c3":function(t,e,o){},"773d":function(t,e,o){"use strict";o("7800")},7800:function(t,e,o){},"7df9":function(t,e,o){},8534:function(t,e,o){},"85ec":function(t,e,o){},"86c5":function(t,e,o){t.exports=o.p+"img/5.49bfcc10.jpg"},"89f1":function(t,e,o){"use strict";o("fca2")},"968a":function(t,e,o){t.exports=o.p+"img/8.0aed2f92.jpg"},"9a88":function(t,e,o){var a={"./0.jpg":"5db7","./1.jpg":"2e7a","./2.jpg":"40eb","./3.jpg":"b573","./4.jpg":"c3cd","./5.jpg":"86c5","./6.jpg":"42c7","./7.jpg":"b9dc","./8.jpg":"968a"};function n(t){var e=i(t);return o(e)}function i(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="9a88"},a7ad:function(t,e,o){t.exports=o.p+"img/icons_twitter.92d5794b.svg"},b573:function(t,e,o){t.exports=o.p+"img/3.726583f7.jpg"},b9dc:function(t,e,o){t.exports=o.p+"img/7.9e09596a.jpg"},c3cd:function(t,e,o){t.exports=o.p+"img/4.d191bcd1.jpg"},c95f:function(t,e,o){t.exports=o.p+"img/1.8843f824.jpg"},dac3:function(t,e,o){t.exports=o.p+"img/4.b5818fe0.jpg"},fca2:function(t,e,o){}});
//# sourceMappingURL=app.629c58ec.js.map