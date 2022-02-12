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
          <vue-video-section
            class="img_contain"
            :elementId="'header-background-video'"
            :ref="'header-background-video'"
            :mp4Source="require('@/assets/sample.mp4')"
            :posterSource="require('@/assets/sample.jpg')"
            :mobileBreakpoint="762"
            :desktopHeight="750"
            :mobileHeight="450"
            :playsinline="true"
            :loop="true"
            :autoplay="false"
            :autobuffer="true"
            :muted="true"
          >
            <div
              slot="overlay-content"
              id="overlay-content"
              class="overlay-content"
            >
              <h4 id="video_title" class="two-rem STIXTwo" @click="playVideo()">
                Latest Release
              </h4>
              <h2 id="video_subtitle" class="four-rem STIXTwo">
                Title of book to be re-released
              </h2>
              <button id="video_button" @click="toggleVideo">
                Play trailer
              </button>
            </div>
          </vue-video-section>
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
          class="author_image miriam_image bg_size_cover clip_towards_left"
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
        <button id="readMore" @click="readMore()" class="swiper">
          Read more
        </button>
      </div>
    </section>

    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" style="margin-top: 8rem" class="author_bio_title">
      Join My Mailing List
    </h2>
    <!-- <hr style="max-width: 500px; margin: 2rem auto; color:var(--white)"/> -->
    <div class="diamond" style="margin: 2rem auto; font-size: 2vh">♦</div>
    <h4 style="font-family: 'STIXTwo">
      Stay up to date on all things Beyond the Darkness.
    </h4>
    <br /><br />
    <section id="newsletter">
      <ConvertKitForm v-bind="convertKitConfig" />
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
            <q>In the realm of my soul, I believe him to be a great Ruler. </q>
            <br /><cite>Lothian</cite>
            <br />
            <br />

            <strong>Scotland: 1564</strong><br />
            Deep within the bowels of Elboru, it waits—an immense force—locked
            inside a sacred stone, destined to give its bearer the power to be a
            formidable Ruler. It belongs to just one—the Magus—Lord of all
            Warlocks—and he belongs to it. But the world of mortals has been
            overshadowed by a menace: an evil entity that would have it to
            dominate and destroy all that is good. And yet, all is not lost.
            From within this stone, a light is about to re-ignite by innocence,
            instilling hope into the hearts of those who would risk everything,
            to see it placed in the hands of the chosen one—to see it shine
            beyond the darkness.
          </h5>
          <button class="swiper" @click="show()">
            <span class="swiper_text">View synopsis</span>
          </button>
        </div>
      </div>

      <modal
        :adaptive="true"
        :minWidth="800"
        :minHeight="1400"
        height="auto"
        :scrollable="true"
        name="synopsis-modal"
      >
        <article class="synopsis_contain">
          <h1>Synopsis</h1>
          <br />

          <p>
            <strong>Scotland 1564:</strong>
            Oran Shaw is no ordinary man: a Warlock, determined to leave his
            lengthy past behind, he disregards his elders, choosing to live a
            normal life among mortals … until he crosses paths with Kristene—a
            young, innocent woman, wrongfully accused of witchcraft. He feels
            compelled to rescue her from her death sentence. It is an act he
            would later regret.
          </p>

          <p>
            Together, they flee to a new life, settling in Triora—Italy. But
            life alters when a sinister rival from Oran’s past—Magia Nera, a
            dark Warlock—discovers them. He secretly manipulates Kristene,
            luring her away from Oran, bitterly ending their relationship.
            However, his interference eventually forces the three to go their
            separate ways.
          </p>

          <p>
            <strong>Four decades later:</strong>
            Oran has returned to Scotland, where he meets Rosalyn, a young widow
            with a baby. They marry and settle in the small village of Balloch,
            near the shores of Lac Lomond. At last, Oran feels content, living a
            normal and peaceful life with his new family. But when Rosalyn bears
            him a son, Gillis, life changes utterly for the reluctant Warlock.
          </p>

          <p>
            Oran’s past creeps up on him in the form of a Sorceress, named
            L’Ordana. He recognises her as Kristene, and there is an element of
            evil inside her. She is not alone and wants something from him: the
            location of a powerful amulet—the Shenn. Aware his son is destined
            to rule over the precious item, Oran vows to protect him … no matter
            what! Bound by duty, he is forced by his “council”—the Elliyan—to
            seek out the Sorceress and destroy her. Oran, however, is torn
            between their past and the present. But, when they come face to
            face, the Warlock unexpectedly finds himself as her prisoner.
          </p>

          <p>
            Over time, he allies with three unlikely characters, to help him
            escape; they are not what they seem. Half-human—half Vampire, the
            three Dhampir, Reece (a Soldier), Asai (a Samurai), and Tam (a
            Highlander), are also L’Ordana’s prisoners—through no fault of their
            own. They, too, want freedom and their mortality restored.
            Therefore, Oran makes a bargain with them: in exchange for their
            freedom, they find and protect his son. With many lives at stake,
            and time running out, a twist of fate then turns the table on them
            all, when Reece makes a shocking discovery …
          </p>
        </article>
      </modal>
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
    <h2 data-aos="fade-up" class="author_bio_title">Acclaims</h2>
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

    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Balloch Castle</h2>
    <br /><br />
    <Divider />
    <br />

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

    <div class="slant">&nbsp;</div>

    <section id="contact" class="contact_section">
      <h1 class="contact_title">Contact</h1>
      <br />
      <div class="contact_form_contain" id="vanta_form">
        <form action="" class="contact">
          <div class="form_input_contain">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your subject here"
            />
          </div>

          <div class="form_input_contain">
            <input type="email" placeholder="name@example.com" />
          </div>

          <div class="form_input_contain">
            <textarea placeholder="Your message here" />
          </div>

          <button class="swiper contact_button" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import VueVideoSection from "vue-video-section";

import { Carousel3d, Slide } from "vue-carousel-3d";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";
import Flipbook from "flipbook-vue";
import ConvertKitForm from "convertkit-vue";

// Flipbook pages
import page1 from "@/assets/balloch_castle/1.jpg";
import page2 from "@/assets/balloch_castle/2.jpg";
import page3 from "@/assets/balloch_castle/3.jpg";
import page4 from "@/assets/balloch_castle/4.jpg";

export default {
  name: "Home",

  components: {
    VueVideoSection,
    ConvertKitForm,
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
      playButtonClicks: 0,
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
        {
          img: 7,
          caption: "The Arezzo Mirror",
        },
        {
          img: 8,
          caption: "The Window",
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
            "Author of Erinsmore and The Forest ~ a tale of old magic ~",
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

      convertKitConfig: {
        formId: 2986098,
        template: "clare",
        hideName: true,
        stack: false,
      },
    };
  },
  methods: {
    show() {
      this.$modal.show("synopsis-modal");
    },
    hide() {
      this.$modal.hide("synopsis-modal");
    },
    readMore() {
      // the full text
      var fullBio = localStorage.getItem("bio");
      var shortBio = localStorage.getItem("bio_shortened");

      var currentValue = document.getElementsByClassName("author_bio_body")[0];

      currentValue.innerHTML == fullBio
        ? (currentValue.innerHTML = shortBio)
        : (currentValue.innerHTML = fullBio);

      var readMore = document.getElementById("readMore");
      readMore.innerHTML.toLowerCase() == "read more"
        ? (readMore.innerHTML = "read less")
        : (readMore.innerHTML = "read more");
    },
    toggleVideo() {
      this.playButtonClicks++;

      var container = document.getElementById("overlay-content");
      var video_title = document.getElementById("video_title");
      var video_subtitle = document.getElementById("video_subtitle");

      if (this.playButtonClicks % 2 != 0) {
        video_title.style.opacity = "0";
        video_subtitle.style.opacity = "0";

        if (window.innerWidth >= 768) {
          container.style.transform = "translateY(50%)";
        }

        this.$refs["header-background-video"].playVideo();
      } else {
        video_title.style.opacity = "1";
        video_subtitle.style.opacity = "1";
        if (window.innerWidth >= 768) {
          container.style.transform = "translateY(0%)";
        }
        this.$refs["header-background-video"].pauseVideo();
      }
    },
  },
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
    this.vantaEffect = Vanta({
      el: "#contact",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1200.0,
      minWidth: 200.0,
      highlightColor: 0x460303,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 1,
    });

    var video = document.getElementsByClassName(
      "vue-video-section__overlay-content-wrapper__content-wrapper__content"
    )[0];

    video.style.display = "flex";
    video.style.justifyContent = "center";
    video.style.alignItems = "center";

    var swiper_wrapper = document.getElementsByClassName("swiper-wrapper");

    swiper_wrapper[0].style.display = "flex";
    swiper_wrapper[0].style.alignItems = "center";

    // Shorten the very long bio
    var author_bio_body = document.getElementsByClassName("author_bio_body");
    localStorage.setItem("bio", author_bio_body[0].innerHTML);

    // Split the text by its spaces, get first 29 words, join array into a string again separated by spaces
    var bio_shortened =
      author_bio_body[0].innerHTML.split(" ").splice(0, 29).join(" ") + "...";
    localStorage.setItem("bio_shortened", bio_shortened);

    if (window.innerWidth <= 767) {
      document.getElementById("readMore").style.display = "block";
      author_bio_body[0].innerHTML = bio_shortened;
    }
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

@import "../../node_modules/vue-video-section/dist/vue-video-section.css";

.formkit-powered-by-convertkit {
  display: none;
}

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
  position: relative;
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

  z-index: -1;
}

#video_title,
#video_subtitle {
  transition: all ease-in-out 0.3s;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.5s;
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
  text-transform: uppercase;
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
  /* filter: blur(5px); */
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

.balloch_castle {
  overflow: hidden;
}

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
  background-position: center;
  background-repeat: no-repeat;
}

#reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 10rem; */
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

/* contact button */

.contact_button {
  padding: 1rem 2rem;
  justify-content: center;
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

.synopsis_contain {
  color: var(--black);
  padding: 2rem;
  font-family: "STIXTwo";
  background: var(--white);
  text-align: left;
  font-size: 1.15rem;
}

.synopsis_contain h1,
.synopsis_contain strong {
  font-family: "GotischA";
}

.synopsis_contain h1 {
  color: var(--crimson);
  text-align: center;
  font-size: 2rem;
}

.synopsis-modal {
  color: var(--black);
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

/* Contact section */

canvas.vanta-canvas:nth-child(4) {
  height: 1200px;
  margin-top: -15%;
  z-index: 0;
}

.balloch_castle {
  z-index: 1;
  padding: revert;
  position: relative;
  z-index: 10;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}

.contact_form_contain {
  width: 50%;
  margin: auto;
  height: 25rem;
  padding: 5rem;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 0.25rem;
}

.form_input_contain {
  width: 50%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

input,
textarea {
  /* background: rgba(255, 255, 255, 0.4); */
  color: var(--white);
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "Oswald";
  background: transparent;
  /* border: 2px solid var(--white); */
  border: none;
  box-shadow: inset 0 0 0 4px var(--silver), 0 0 1px rgba(0, 0, 0, 0);

  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: all;
  text-align: center;
}

input:focus-visible,
textarea:focus-visible {
  box-shadow: inset 0 0 0 4px var(--crimson), 0 0 1px rgba(0, 0, 0, 0);
}

input:focus-visible,
textarea:focus-visible {
  outline: none;
}

.swiper:nth-of-type(1) {
  color: var(--white);
  /* box-shadow: inset 0 0 0 4px var(--white), 0 0 1px rgba(0, 0, 0, 0); */
}

.contact_title {
  z-index: 10;
  position: relative;
  padding: 5rem 0 2rem 0;
  font-family: "GotischA";
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

#contact {
  margin-top: -5%;
  padding-top: 10rem;
}

/* Newsletter */
#newsletter {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 8rem;
  display: flex;
  justify-content: center;
}

#mc_embed_signup {
  display: flex;
  justify-content: center;
  align-items: center;
}

#mc_embed_signup_scroll {
  display: flex;
  align-items: baseline;
}

#mc-embedded-subscribe-form {
  border-bottom: 2px solid var(--crimson);
  width: 75%;
}

.newsletter_button:hover {
  box-shadow: none;
  color: var(--crimson);
}

#readMore {
  display: none;
}

.miriam_image {
  filter: saturate(0);
}

/* laptops */
@media only screen and (max-width: 1224px) {
  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    font-size: 3rem;
  }

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

@media only screen and (max-width: 767px) {
  .hero_text {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 18vh;
  }
  .swiper {
    margin: auto;
  }

  .contact_form_contain {
    width: auto;
    margin: 0 1.5rem;
    padding: 1rem;
  }

  .contact_button {
    margin: 0;
  }

  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    font-size: 3rem;
  }

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
