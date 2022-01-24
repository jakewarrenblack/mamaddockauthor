<template>
  <div id="container">
    <div id="nav_header_contain">
      <Navbar />
      <section id="header">
        <div class="header_container">
          <div class="hero_text">
            <h3 data-aos="fade-down" class="author_short_desc">
              Lorem ipsum Ipsum Dolor Sit Amet
            </h3>
            <h1 data-aos="fade-up" class="author_name">M.A Maddock</h1>
          </div>
          <div class="img_contain">
            <div class="img_contain_content">
              <h4 class="two-rem STIXTwo">Latest Release</h4>
              <h2 class="four-rem STIXTwo">Title of book to be re-released</h2>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section id="short_bio">
      <div class="short_bio_container">
        <h6>
          M. A. Maddock is an Irish author, currently living in Dublin, Ireland.
        </h6>
      </div>
    </section>
    <Divider />
    <section id="full_bio">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center"
      >
        <div
          data-aos="fade-right"
          class="author_image bg_size_cover clip_towards_left"
        ></div>
        <div data-aos="fade-left" class="author_bio_text">
          <h2 class="author_bio_title">About the Author</h2>
          <h5 class="author_bio_body">
            Asking an Irish person to write a ‘few’ words about themselves is,
            putting it mildly, almost impossible! But, here goes. I was born and
            raised in Dublin, Ireland. Having dabbled in other ‘interests’ over
            the years (I won’t bore you), in the background, however, I was
            always an avid reader, with words constantly floating around in my
            mind yet doing nothing about them, in a literary sense. I used to
            always say, ‘One day, I’ll write that book,’ but never seemed to get
            around to doing it. I think the mere thought of putting those
            words—along with my imagination—to literary use was daunting,
            therefore, always putting it off. That is, until 2011 when I finally
            took the plunge and picked up that pen and notebook (still have
            them, too). I began to string those words into sentences, then
            paragraphs, then pages, eventually joining them together to create
            my first novel—The Sixth Amulet - Book One. Then my imagination had
            other plans; it didn’t want to stop at just one. Why would it? And
            so, one novel turned into two, then three, then … Who knows where it
            will end?
            <br /><br />
            I believe everyone has a story to tell, a potential book tucked away
            inside them, dying to get out. And all that’s needed to create it,
            is a simple recipe: a pen and a notebook. So, open your mind and let
            your imagination roam through the endless possibilities it has to
            offer … then simply write!
            <br /><br />
            Many people have asked me, “Why Scotland? And why Balloch?” Well, it
            was while on my first trip there (around 2005), visiting good
            friends in Balloch, that I fell in love with the place. Always the
            perfect hosts each time I visit, Billy, Ciara and Megan are so lucky
            to live a stone’s throw from Balloch Castle, on the stunning shores
            of Loch Lomond (well worth a visit if you happen to be passing
            through). Anyway, it just seemed right to set The Sixth Amulet in
            this location. And who knows? Maybe I’ll retire there … one day.
          </h5>
        </div>
      </div>
    </section>

    <Divider />
    <section id="full_bio" ref="bookSection">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center row-reverse"
      >
        <div
          data-aos="fade-left"
          class="author_image bg-size-cover bg-position-center book-image clip_towards_right_pointed_bottom"
        ></div>
        <div data-aos="fade-right" class="author_bio_text">
          <h2 class="author_bio_title">Beyond the Darkness</h2>
          <h5 class="author_bio_body">
            It belongs to just one-the Magus-Lord of all Warlocks-and he belongs
            to it. But the world of mortals has been overshadowed by a menace:
            an evil entity that would have it in order to dominate and destroy
            all that is good.

            <br />

            And yet, all is not lost. From within this stone, a light is about
            to re-ignite by innocence, instilling hope into the hearts of those
            who would risk everything, to see it placed in the hands of the
            chosen one-to see it shine beyond the darkness.
          </h5>
          <button class="swiper" @click="reviews()">
            <span class="swiper_text">View synopsis</span>
          </button>
        </div>
      </div>
    </section>
    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Concept Art</h2>
    <br /><br />
    <Divider />
    <section data-aos="fade-up" id="book_images">
      <div id="example">
        <carousel-3d
          :startIndex="6"
          :width="400"
          :height="400"
          :inverse-scaling="1500"
          :space="800"
        >
          <slide v-for="slide in slides" :index="slide.img" :key="slide.img">
            <img
              class="carousel_img"
              :src="require(`@/assets/review_images/${slide.img}.jpg`)"
            />
            <span class="carousel_img_caption">{{ slide.caption }}</span>
          </slide>
        </carousel-3d>
      </div>
    </section>

    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Reviews</h2>
    <br /><br />
    <Divider />
    <section data-aos="fade-up" id="reviews">
      <div class="quotation_container"></div>
      <swiper class="review_swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="review in reviews" :key="review.body">
          <div class="review_quote_contain">
            <q class="quote_body">{{ review.body }}</q>
            <br />
            <h2 class="quote_credit">{{ review.credit }}</h2>
            <h4 class="quote_credit_credential">
              {{ review.credential }}
            </h4>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </section>

    <section class="balloch_castle">
      <div>
        <Flipbook class="flipbook" :pages="pages" v-slot="flipbook">
          <div>
            <button class="flip_control" @click="flipbook.flipLeft">
              Previous Page
            </button>

            <button class="flip_control" @click="flipbook.zoomOut">-</button>
            <button class="flip_control" @click="flipbook.zoomIn">+</button>
            <button class="flip_control" @click="flipbook.flipRight">
              Next Page
            </button>
          </div>
        </Flipbook>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { Carousel3d, Slide } from "vue-carousel-3d";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";
import Flipbook from "flipbook-vue";

// Flipbook pages
import page1 from "@/assets/balloch_castle/1.jpg";
import page2 from "@/assets/balloch_castle/2.jpg";
import page3 from "@/assets/balloch_castle/3.jpg";
import page4 from "@/assets/balloch_castle/4.jpg";

export default {
  name: "Home",

  components: {
    Swiper,
    SwiperSlide,
    Flipbook,
    Footer,
    Navbar,
    Divider,
    Carousel3d,
    Slide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      // reviewSwipeCount: 1,
      pages: [null, page1, page2, page3, page4],
      slides: [
        {
          img: 0,
          caption: "The lotus flower - engraved on Asai Nara’s Katana sword.",
        },
        { img: 1, caption: "The Kelpie – a Scottish mythical creature." },
        {
          img: 2,
          caption:
            "fictional map of the lower Highlands - circa late 1500’s early 1600’s – by Lewis Hickson - Instagram    fantasy_map_cartographer",
        },
        { img: 3, caption: "The Kelpie – a Scottish mythical creature." },
        {
          img: 4,
          caption: "Scottish dirk (dagger) belonging to Eleanor Shaw.",
        },
        {
          img: 5,
          caption:
            "Oran Shaw’s coffer (chest) - contains hidden secrets from his past.",
        },
        {
          img: 6,
          caption:
            "The Shaw crest (broach) – made from solid silver. Oran had this made especially for himself, to give him a sense of ‘belonging’, linking him to his ancestors who were of Pictish origin.",
        },
      ],
      reviews: [
        {
          body: "A tapestry of familiar mythology - and wholly original creations - weaved through a world you'll happily get lost in. A story that truly sings.",
          credit: "Gavin Gardiner",
          credential:
            "Author of For Rye and The Last Testament of Crighton Smythe",
        },
        {
          body: "A sumptuous slow burn of a book, in the grand style of epic fantasy, that consumes its reader and transports them to another place and time.",
          credit: "Julia Blake",
          credential:
            "Author of For Rye and The Last Testament of Crighton Smythe",
        },
        {
          body: "An epic historical fantasy read, enriched with unique and wonderful characters whose journey will keep you hooked from beginning to end. Maddock has an eye for detail through her incredible imagination. So glad this is a series; one book is not enough!",
          credit: "Sarah O’Neill",
          credential: "Author of Deadly Obsession and Fatal Beliefs",
        },
        {
          body: "Masterfully weaved together, with such great flair, you can’t help but immerse yourself in the fantastical world M. A. Maddock has created. The diverse locations along with her motley cast of misfits will hold your attention from the start. The Sixth Amulet is an epic fantasy (historical) fiction read that packs a punch.",
          credit: "Emma Moohan",
          credential: "Actor/Writer",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    this.vantaEffect = Vanta({
      el: "#nav_header_contain",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x460303,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 1,
    });

    var swiper_wrapper = document.getElementsByClassName("swiper-wrapper");

    swiper_wrapper[0].style.display = "flex";
    swiper_wrapper[0].style.alignItems = "center";
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style scoped>
@import "../assets/colors.css";
@import "../assets/helpers.css";

#container {
  background: var(--silver);
}
#header {
  /* background: var(--crimson); */
  position: relative;
}
.header_container {
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
}
#header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 160px;
  bottom: 0;
  left: 0;
  background-color: var(--silver);
  z-index: 0;
}
#short_bio {
  background: var(--silver);
}
.short_bio_container {
  color: var(--white);
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
  font-family: "Prociono";
  font-size: 5rem;
}
#short_bio h6 {
  margin: 0 auto;
  width: 100%;
  max-width: 1040px;
  padding: 120px 0;
}

.img_contain {
  margin-top: -5%;
  height: 50rem;
  background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: brightness(0.5); */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.hero_text {
  text-align: center;
  color: var(--white);
}
.author_short_desc {
  font-family: "STIXTwo Italic";
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.author_name {
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 10rem;
  font-family: "STIXTwo";
  letter-spacing: 2rem;
}

/* Author full bio section */
.author_image {
  background-image: url("~@/assets/bio_photo.jpg");
}

.book-image {
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LKTfC2I1I_e094f0yXKRKgAAAA%26pid%3DApi&f=1");
}

.full_bio_container {
  max-width: 1800px;
  margin: auto;
}

.author_image {
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 55rem;
  width: 75%;
  margin: 4rem 4rem 0 0;
  filter: blur(5px);
}

.author_bio_text {
  width: 75%;
  margin: 4rem 3rem 3rem 4rem;
  text-align: left;
}

#full_bio {
  background: var(--silver);
}

.author_bio_body {
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 2.4rem;
  color: var(--white);
  font-family: "Prociono";
  margin-top: 0.5rem;
}

.author_bio_title {
  font-size: 4rem;
  color: var(--crimson);
  font-family: "GotischA";
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Book gallery */
.carousel_img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

#book_images {
  background: var(--silver);
  padding: 5rem 0;
}

.carousel_img {
  position: relative;
}

.carousel_img_caption {
  color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-align: center;
}

.carousel_img_caption:hover {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

/* Balloch Castle */

.flipbook {
  margin: auto;
}

.flip_control {
  padding: 0.75rem;
  margin: 0.5rem;
  font-family: "STIXTwo";
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background: transparent;
  /* border: 2px solid var(--crimson); */
  color: var(--white);
}

.flip_control:hover {
  cursor: pointer;
}

/* Reviews */

.review_swiper {
  min-height: 20rem;
}

.quotation {
  width: 100%;
  height: 100%;
  /* filter: invert(100%); */
  filter: saturate(20);
}

.quotation_container {
  width: 10rem;
  height: 10rem;
  background: url("~@/assets/quotation_vantabg.svg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

#reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  padding: 5rem 0;
}

/* button */
.swiper {
  padding-left: 0;
  background: transparent;
  color: var(--crimson);
  /* border: 2px solid var(--crimson); */

  padding: 1rem 0;

  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: "Oswald";
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: none;

  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: all;
  box-shadow: inset 0 0 0 4px var(--silver), 0 0 1px rgba(0, 0, 0, 0);
}

.swiper:hover {
  cursor: pointer;
}

.swiper:hover {
  padding: 1rem 2rem;
  justify-content: center;
  box-shadow: inset 0 0 0 4px var(--crimson), 0 0 1px rgba(0, 0, 0, 0);
}

.swiper-container {
  /* margin-top: 8rem; */
  width: 80%;
  display: flex;
  align-items: center;
}

.swiper-wrapper {
  display: flex !important;
  align-items: center !important;
}

.quote_credit {
  color: var(--crimson);
  font-weight: 700;
}

.quote_credit {
  font-weight: lighter;
  font-family: "GotischA";
}

.quote_body {
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 300;
  font-family: "STIXTwo";
}

.review_quote_contain {
  width: 75%;
  margin: auto;
}

.quote_credit_credential {
  font-weight: 300;
  font-family: "STIXTwo";
}

.swiper-button-prev,
.swiper-button-next {
  color: var(--crimson);
}

@media only screen and (max-width: 600px) {
  .hero_text {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 18vh;
  }
}

@media only screen and (max-width: 600px) {
  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    font-size: 3rem;
  }
}
@media only screen and (max-width: 600px) {
  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    letter-spacing: 0.5rem;
  }
  .four-rem {
    font-size: 3rem;
  }
  .short_bio_container {
    font-size: 4rem;
  }
  .author_image {
    margin: 0;
    background-size: cover;
    height: 30rem;
    background-position: center;
  }
  .author_bio_text {
    margin: 0;
    text-align: center;
  }
  .full_bio_container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
