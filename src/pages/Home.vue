<template>
  <div id="container">
    <div id="nav_header_contain">
      <Navbar :links="this.links" />
      <section id="header">
        <div class="header_container">
          <div class="hero_text">
            <h3 data-aos="fade-down" class="author_short_desc">
              <!-- Lorem ipsum Ipsum Dolor Sit Amet -->
            </h3>
            <h1 data-aos="fade-up" class="author_name">M.A Maddock</h1>
          </div>
          <Video />
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
        <img
          src="~@/assets/bio_photo.jpg"
          data-aos="fade-right"
          class="author_image miriam_image bg_size_cover clip_towards_left"
        />

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
    <section v-if="this.data" id="synopsis" ref="bookSection">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center row-reverse"
      >
        <img
          src="~@/assets/sixth_amulet.jpg"
          data-aos="fade-left"
          style="width: auto"
          class="author_image"
        />

        <div data-aos="fade-right" style="width: 85%" class="author_bio_text">
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
      <MySwiper :slides="this.data.reviews" />
    </section>

    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Balloch Castle</h2>
    <br /><br />
    <Divider />
    <br />

    <!------------------------------------------------------------------------------------------>

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

    <!------------------------------------------------------------------------------------------>

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
import { Carousel3d, Slide } from "vue-carousel-3d";

import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import MySwiper from "@/components/MySwiper";

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
    MySwiper,
    Video,
    ConvertKitForm,
    Flipbook,
    Footer,
    Navbar,
    Divider,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      // reviewSwipeCount: 1,
      pages: [null, page1, page2, page3, page4],

      convertKitConfig: {
        formId: 2986098,
        template: "minimal",
        hideName: true,
        stack: false,
      },
      form: {
        email: "",
        subject: "",
        message: "",
      },
      data: null,

      links: [
        {
          title: "BIO",
          href: "#full_bio",
          router: false,
        },
        {
          title: "NOVEL",
          href: "#synopsis",
          router: false,
        },
        {
          title: "HISTORY",
          href: "/history",
          router: true,
        },
        {
          title: "BALLOCH CASTLE",
          href: "/balloch_castle",
          router: true,
        },
        {
          title: "CONTACT",
          href: "#contact",
          router: false,
        },
      ],
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
      readMore.innerHTML.toLowerCase() != "read more"
        ? (readMore.innerHTML = "read less")
        : (readMore.innerHTML = "read more");
    },

    handleSubmit(e) {
      e.preventDefault();
      if (!this.form.email || !this.form.subject || this.form.message) return;

      this.router.push("/thanks");
    },
  },
  async mounted() {
    document.title = "M.A Maddock";

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

    document.getElementById("ck-email").required = true;
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

  .video_bg_none {
    background: none !important;
  }
}

.vue-video-section video {
  object-fit: contain !important;
}

.vue-video-section__video-element {
  width: 100% !important;
}

.vue-video-section-wrapper {
  background: none !important;
}

.vue-video-section__overlay-content-wrapper__content-wrapper__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
@import "../assets/css/colors.css";
@import "../assets/css/helpers.css";

@import "../../node_modules/vue-video-section/dist/vue-video-section.css";

@import "../assets/css/style.css";
</style>
