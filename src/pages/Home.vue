<template>
  <div id="container">
    <div id="nav_header_contain">
      <section id="header_main">
        <div class="header_container">
          <div class="hero_text">
            <h3 data-aos="fade-down" class="author_short_desc">
              <!-- Lorem ipsum Ipsum Dolor Sit Amet -->
            </h3>
            <h1 v-if="this.data" data-aos="fade-up" class="author_name">
              {{ this.data.authorInfo.title }}
            </h1>
          </div>
          <Video />
        </div>
      </section>
    </div>

    <section id="short_bio">
      <div class="short_bio_container">
        <h6 v-if="this.data">
          {{ this.data.authorInfo.authorDesc }}
        </h6>
      </div>
    </section>
    <Divider />
    <section ref="full_bio" id="full_bio">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center"
      >
        <img
          src="~@/assets/bio_photo.jpg"
          data-aos="fade-right"
          class="author_image miriam_image bg_size_cover clip_corners"
        />

        <div v-if="this.data" data-aos="fade-left" class="author_bio_text">
          <h2 class="author_bio_title">{{ this.data.bio.title }}</h2>

          <p class="author_bio_body">
            <span>
              {{ this.bioPreview }}
            </span>
            <span id="contentMore">{{ this.bioFull }}</span>
          </p>
        </div>
        <button id="readMore" @click="readMore()" class="swiper">
          Read more
        </button>
      </div>
    </section>

    <br /><br />
    <Divider />
    <h2
      v-if="this.data"
      data-aos="fade-up"
      style="margin-top: 8rem"
      class="author_bio_title"
    >
      {{ this.data.mail.title }}
    </h2>
    <!-- <hr style="max-width: 500px; margin: 2rem auto; color:var(--white)"/> -->
    <div class="diamond" style="margin: 2rem auto; font-size: 2vh">♦</div>
    <h4 v-if="this.data" style="font-family: 'STIXTwo">
      {{ this.data.mail.desc }}
    </h4>
    <br /><br />
    <section id="newsletter">
      <!-- <ConvertKitForm v-bind="convertKitConfig" /> -->
      <Mailerlite />
    </section>
    <Divider />

    <!-- iterate through data.books -->
    <div v-if="this.data">
      <div v-for="(book, index) in this.data.books" :key="book.id">
        <section :key="book.id" id="synopsis" ref="bookSection">
          <!-- row reverse every odd element -->
          <div
            class="full_bio_container d-flex justify-space-between align-items-center"
            :class="index % 2 === 0 ? 'row-reverse' : ''"
          >
            <img
              :src="require(`@/assets/${book.img}.jpg`)"
              data-aos="fade-left"
              class="book_section_image"
            />

            <div
              data-aos="fade-right"
              style="width: 85%"
              class="author_bio_text"
            >
              <h2 class="author_bio_title">{{ book.title }}</h2>
              <h5 v-if="book.type != 'audiobook'" class="author_bio_body">
                <q>{{ book?.quote }}</q>
                <br /><cite>{{ book.quote_credit }}</cite>
                <br />
                <br />

                <strong>{{ book.paragraph_context }}</strong
                ><br />
                {{ book.preview }}
              </h5>
              <button
                v-if="book.show_synopsis"
                style="border-bottom: 4px solid var(--white)"
                class="swiper"
                @click="show()"
              >
                <span class="swiper_text">View synopsis</span>
              </button>
              <Buy :options="book.buy" />

              <div class="audio_container" v-if="book.type == 'audiobook'">
                <h5
                  style="
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: var(--crimson);
                    font-family: 'stixTwo';
                    margin-top: 0;
                  "
                >
                  Hear a sample:
                </h5>

                <audio
                  class="audio_player"
                  controls
                  :src="require(`@/assets/audio_samples/${book.sample}.mp3`)"
                ></audio>
              </div>
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
            <article v-if="book.show_synopsis" class="synopsis_contain">
              <div slot="top-right">
                <button @click="$modal.hide('synopsis-modal')">❌</button>
              </div>
              <h1>Synopsis</h1>
              <br />

              <p>
                <strong>{{ book.paragraph_context }}</strong>
                {{ book.full_part_1 }}
              </p>

              <p>
                <strong>{{ book.later }}</strong>
                {{ book.full_part_2 }}
              </p>
            </article>
          </modal>
        </section>
      </div>
    </div>

    <br /><br />
    <Divider />
    <h2 data-aos="fade-up" class="author_bio_title">Gallery</h2>
    <br /><br />
    <Divider />
    <section v-if="this.data" data-aos="fade-up" id="book_images">
      <div id="example">
        <carousel-3d
          :startIndex="0"
          :width="400"
          :height="400"
          :inverse-scaling="1500"
          :space="800"
        >
          <slide
            style="width: max-content"
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
    <h2 data-aos="fade-up" class="author_bio_title">Acknowledgements</h2>
    <br /><br />
    <Divider />
    <br />

    <section data-aos="fade-up" id="acknowledgements">
      <h1 data-aos="fade-up" class="author_name narrator_name">
        J Dallon Taylor
      </h1>
      <h2>About the Narrator</h2>
      <div class="narrator_bio_container">
        <img
          class="acknowledgements_image"
          alt="Acknowledgements"
          :src="require('@/assets/man.jpg')"
        />
        <p class="narrator_bio_body">
          Born and raised in Alberta, Canada, J Dallin Taylor grew up with a
          natural flair for performing. He would often act out his favourite
          scenes from film and TV—a passion that has not changed. Through hard
          work and dedication, he progressed from supporting to leading roles in
          his grade school theatre productions. This would lead to Dallin being
          awarded multiple awards for acting during his senior year. Dallin
          eventually found his way to Audible where he began auditioning as an
          audiobook narrator.
          <br /><br />
          This is where his path crossed with author, M. A. Maddock. After a
          rigorous audition, he landed the job, taking on the mammoth task of
          elevating her fantasy fiction novels to another level, by bringing her
          misfit of characters to “life”. Maddock’s Sixth Amulet Series is
          currently an ongoing project, which Dallin describes as a “Labour of
          love” – and for which Maddock sings his praises; “I could not be
          happier with what Dallin has done with my characters. He’s truly a
          gifted actor.” Dallin is also an accomplished screenwriter and is
          currently in the process of submitting his latest venture, After
          Eden—a post society Sc-Fi—co-written with fellow screenwriter, Scott
          Biggs, to production companies.
        </p>
      </div>

      <div class="final_acknowledgements_container">
        <h2>Final Acknowledgements</h2>
        <ul class="acknowledgements_list">
          <li>
            <span style="color: var(--crimson); padding: 0.25rem">*</span>Book
            Cover design by Diana Toledo Calcado – Triumph Book Covers
          </li>
          <li>
            <span style="color: var(--crimson); padding: 0.25rem">*</span>Cover
            illustrations by Tegan Sommers – Artist
          </li>
          <li>
            <span style="color: var(--crimson); padding: 0.25rem">*</span
            >Interior illustrations by Geraldine O’Malley – Artist
          </li>
          <li>
            <span style="color: var(--crimson); padding: 0.25rem">*</span>Maps
            by Lewis Hickson – Cartographer – Fantasy Maps
          </li>
          <li>
            <span style="color: var(--crimson); padding: 0.25rem">*</span
            >Website by my “Wee Master of the Web” – Jake Black
          </li>
        </ul>
      </div>
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

    <section ref="contact" id="contact" class="contact_section">
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

import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import MySwiper from "@/components/MySwiper";
import Buy from "@/components/Buy";

import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";
import Flipbook from "flipbook-vue";
import Mailerlite from "@/components/Mailerlite";
import axios from "axios";

// Flipbook pages
import page1 from "@/assets/balloch_castle/1.webp";
import page2 from "@/assets/balloch_castle/2.webp";
import page3 from "@/assets/balloch_castle/3.webp";
import page4 from "@/assets/balloch_castle/4.webp";

import { mapState } from "vuex";
export default {
  name: "Home",

  metaInfo: {
    title: "Home",
    meta: [],
  },
  components: {
    Buy,
    MySwiper,
    Video,
    Mailerlite,
    Flipbook,
    Footer,
    Divider,
    Carousel3d,
    Slide,
  },
  computed: {
    ...mapState(["scrolledElement"]),
  },
  data() {
    return {
      // reviewSwipeCount: 1,
      pages: [null, page1, page2, page3, page4],
      loading: true,
      convertKitConfig: {
        formId: 2986098,
        template: "minimal",
        hideName: false,
        stack: false,
      },
      form: {
        email: "",
        subject: "",
        message: "",
      },
      data: null,
      bioPreview: "",
      bioFull: "",
    };
  },
  methods: {
    convertBio() {
      if (window.innerWidth <= 767) {
        this.bioPreview = this.data.bio.content
          .split(" ")
          .slice(0, parseInt(this.data.bio.splitAfter))
          .join(" ");

        this.bioFull = this.data.bio.content
          .split(" ")
          .slice(
            parseInt(this.data.bio.splitAfter),
            this.data.bio.content.length - 1
          )
          .join(" ");
      } else {
        this.bioPreview = this.data.bio.content;
      }
    },
    show() {
      this.$modal.show("synopsis-modal");
    },
    hide() {
      this.$modal.hide("synopsis-modal");
    },
    readMore() {
      // the full text
      var contentMore = document.getElementById("contentMore");
      var btn = document.getElementById("readMore");

      if (contentMore.style.display === "inline") {
        contentMore.style.display = "none";
        btn.innerHTML = "Read more";
        contentMore.scrollIntoView();
      } else {
        contentMore.style.display = "inline";
        btn.innerHTML = "Read less";
      }
    },

    handleSubmit(e) {
      e.preventDefault();
      if (!this.form.email || !this.form.subject || this.form.message) return;

      this.router.push("/thanks");
    },
  },
  created() {
    setTimeout(() => {
      if (this.scrolledElement) {
        var top = document.getElementById(this.scrolledElement).offsetTop;
        if (top) window.scrollTo(0, top);
      }
    }, 500);
  },
  async mounted() {
    // document.title = "M.A Maddock";

    // await axios
    //   .get("https://maddock-backend.herokuapp.com/api")
    //   .then((res) => (this.data = res.data[0]))
    //   .catch(async (e) => {
    //     console.log(e);
    //     await axios.get("./data.json").then((res) => (this.data = res.data));
    //   });

    // Removed above, heroku removing their free tier
    await axios.get("./data.json").then((res) => (this.data = res.data));

    this.vantaEffect = Vanta({
      el: "#nav_header_contain",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 300.0,
      minWidth: 200.0,
      highlightColor: 0x462403,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 1,
    });

    this.convertBio();

    document.getElementsByClassName("vanta-canvas")[0].style.top = "-450px";
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

    if (window.innerWidth <= 767) {
      document.getElementById("readMore").style.display = "block";
    }

    // document.getElementById("ck-email").required = true;

    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      this.$store.dispatch("setLoading", {
        isLoading: false,
      });
    });
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
