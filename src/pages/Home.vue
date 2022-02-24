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
            :mp4Source="require('@/assets/trailer_web.mp4')"
            :posterSource="require('@/assets/trailer_placeholder.webp')"
            :mobileBreakpoint="762"
            :desktopHeight="750"
            :mobileHeight="450"
            :playsinline="true"
            :loop="true"
            :autoplay="false"
            :autobuffer="true"
            :muted="false"
          >
            <div
              slot="overlay-content"
              id="overlay-content"
              class="overlay-content"
            >
              <h4 id="video_title" class="two-rem STIXTwo" @click="playVideo()">
                The Latest Release
              </h4>
              <h2 id="video_subtitle" class="four-rem STIXTwo">
                The Sixth Amulet
              </h2>
              <button
                id="video_button"
                class="swiper"
                style="padding: 1rem"
                @click="toggleVideo"
              >
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
        <div v-if="this.data" data-aos="fade-left" class="author_bio_text">
          <h2 class="author_bio_title">{{ this.data.bio.title }}</h2>
          <h5 class="author_bio_body">
            {{ this.data.bio.content }}
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
      Stay up to date on all things The Sixth Amulet.
    </h4>
    <br /><br />
    <section id="newsletter">
      <ConvertKitForm v-bind="convertKitConfig" />
    </section>
    <Divider />
    <section v-if="this.data" id="full_bio" ref="bookSection">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center row-reverse"
      >
        <div
          data-aos="fade-left"
          class="author_image bg-size-cover bg-position-center book-image clip_towards_right_pointed_bottom"
        ></div>
        <div data-aos="fade-right" class="author_bio_text">
          <h2 class="author_bio_title">{{ this.data.synopsis.title }}</h2>
          <h5 class="author_bio_body">
            <q>{{ this.data.synopsis.quote }}</q>
            <br /><cite>{{ this.data.synopsis.quote_credit }}</cite>
            <br />
            <br />

            <strong>{{ this.data.synopsis.paragraph_context }}</strong
            ><br />
            {{ this.data.synopsis.preview }}
          </h5>
          <button class="swiper" @click="show()">
            <span class="swiper_text">View synopsis</span>
          </button>
        </div>
      </div>

      <modal
        :adaptive="true"
        :minHeight="1400"
        :minWidth="800"
        height="auto"
        :scrollable="true"
        name="synopsis-modal"
        classes="modal-mobile"
      >
        <article v-if="this.data" class="synopsis_contain">
          <div slot="top-right">
            <button @click="$modal.hide('synopsis-modal')">❌</button>
          </div>
          <h1>Synopsis</h1>
          <br />

          <p>
            <strong>{{ this.data.synopsis.paragraph_context }}</strong>
            {{ this.data.synopsis.full_part_1 }}
          </p>

          <p>
            <strong>{{ this.data.synopsis.later }}</strong>
            {{ this.data.synopsis.full_part_2 }}
          </p>
        </article>
      </modal>
    </section>
    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Gallery</h2>
    <br /><br />
    <Divider />
    <section v-if="this.data" data-aos="fade-up" id="book_images">
      <div id="example">
        <carousel-3d
          :startIndex="6"
          :width="400"
          :height="400"
          :inverse-scaling="1500"
          :space="800"
        >
          <slide
            v-for="slide in this.data.slides"
            :index="slide.img"
            :key="slide.img"
          >
            <img
              class="carousel_img"
              :src="require(`@/assets/review_images/${slide.img}.webp`)"
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
    <section v-if="this.data" data-aos="fade-up" id="reviews">
      <div class="quotation_container"></div>
      <swiper class="review_swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="review in this.data.reviews" :key="review.body">
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
        <form
          action="https://formsubmit.co/mamaddock1@gmail.com"
          method="POST"
          class="contact"
        >
          <div class="form_input_contain">
            <input
              required
              v-model="form.subject"
              type="text"
              name="subject"
              id="subject"
              placeholder="Your subject here"
            />
          </div>

          <div class="form_input_contain">
            <input
              required
              v-model="form.email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>

          <div class="form_input_contain">
            <textarea
              required
              v-model="form.message"
              name="message"
              placeholder="Your message here"
            />
          </div>

          <input type="text" name="_honey" style="display: none" />

          <button
            @submit="handleSubmit()"
            class="swiper contact_button"
            type="submit"
            value="Submit"
          >
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
import axios from "axios";

// Flipbook pages
import page1 from "@/assets/balloch_castle/1.webp";
import page2 from "@/assets/balloch_castle/2.webp";
import page3 from "@/assets/balloch_castle/3.webp";
import page4 from "@/assets/balloch_castle/4.webp";

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

      convertKitConfig: {
        formId: 2986098,
        template: "clare",
        hideName: true,
        stack: false,
      },
      form: {
        email: "",
        subject: "",
        message: "",
      },

      data: null,
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

      var btn = document.getElementById("video_button");
      var container = document.getElementById("overlay-content");
      var video_title = document.getElementById("video_title");
      var video_subtitle = document.getElementById("video_subtitle");

      if (this.playButtonClicks % 2 != 0) {
        video_title.style.opacity = "0";
        video_subtitle.style.opacity = "0";

        if (window.innerWidth >= 768) {
          container.style.transform = "translateY(50%)";
        }

        // Remove darkened background
        document.getElementsByClassName("vue-video-section__overlay-content-wrapper__background")[0].classList.add("video_bg_none");

        document.getElementById("header-background-video").style.filter = "none";

        btn.innerHTML = "Pause trailer";
        btn.style.opacity = "0.2";
        this.$refs["header-background-video"].playVideo();

      } else {
        video_title.style.opacity = "1";
        video_subtitle.style.opacity = "1";

        if (window.innerWidth >= 768) {
          container.style.transform = "translateY(0%)";
        }
        document.getElementsByClassName("vue-video-section__overlay-content-wrapper__background")[0].classList.remove("video_bg_none");

        document.getElementById("header-background-video").style.filter = "blur(0.25rem)";

        btn.innerHTML = "Play trailer";
        btn.style.opacity = "1";

        this.$refs["header-background-video"].pauseVideo();        
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      if (!this.form.email || !this.form.subject || this.form.message) return;

      this.router.push("/thanks");
    },
  },
  async mounted() {
    await axios.get("./data.json").then((res) => (this.data = res.data));

    this.vantaEffect = Vanta({
      el: "#nav_header_contain",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x462403,
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
      highlightColor: 0x462403,
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

<!-- Can't be scoped -->
<style>
@media only screen and (max-width: 767px) {
  /* Allow scroll on mobile */
  .modal-mobile {
    left: 0 !important;
    width: 100% !important;
    padding: 1rem !important;
    margin-left: 0 !important;
    height: unset !important;
    /* height: 100% !important; */
  }

  .video_bg_none{
    background:none!important;    
  }
}
</style>

<style scoped>
@import "../assets/colors.css";
@import "../assets/helpers.css";

@import "../../node_modules/vue-video-section/dist/vue-video-section.css";

.formkit-powered-by-convertkit {
  display: none;
}

.formkit-submit {
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
  font-family: "STIXTwo";
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
  /* background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"); */
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
  background-image: url("~@/assets/bio_photo.webp");
}

.book-image {
  background-image: url("~@/assets/sixth_amulet.webp");
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
  font-family: "STIXTwo";
  margin-top: 0.5rem;
}

.author_bio_title {
  font-size: 4rem;
  color: var(--crimson);
  font-family: "altcaps";
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
  font-family: "STIXTwo";
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
  /* background: var(--white); */
  text-align: left;
  font-size: 1.15rem;
}

.synopsis_contain h1,
.synopsis_contain strong {
  font-family: "altcaps";
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
  font-family: "altcaps";
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
  font-family: "STIXTwo";
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
  font-family: "altcaps";
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

/* Break on \r\r from json */
.synopsis_contain,
.author_bio_body {
  white-space: pre-wrap;
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

  .synopsis_contain {
    width: 100% !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
}
</style>
