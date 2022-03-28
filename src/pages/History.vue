<template>
  <div v-if="this.data" id="container">
    <div id="nav_header_contain">
      <Navbar :links="this.links" />
    </div>
    <section id="short_bio">
      <div class="short_bio_container">
        <h6>{{ this.data.history.title }}</h6>
      </div>
    </section>
    <Divider />
    <section id="full_bio">
      <img
        :src="doublecover"
        data-aos="fade-right"
        class="author_image history_author_image bg_size_cover"
      />
    </section>

    <section id="synopsis" ref="bookSection">
      <div
        data-aos="fade-up"
        style="width: 85%"
        class="author_bio_text d-flex justify-content-center margin-auto flex-column"
      >
        <h5 class="author_bio_body">
          {{ this.data.history.p1 }}
        </h5>
        <b>{{ this.data.history.please_note }}</b>
        <h5 class="author_bio_body">
          {{ this.data.history.p2 }}
        </h5>

        <!-- kelpie gallery -->
        <swiper class="review_swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="image in swiperimages" :key="image">
            <div class="swiper-image-contain">
              <img :src="image" />
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>

        <h5 class="author_bio_body">
          {{ this.data.history.p3 }}
        </h5>

        <b>{{ this.data.history.p3_bold_after }}</b>

        <blockquote>{{ this.data.history.quote }}</blockquote>
        <cite>{{ this.data.history.quote_credit }}</cite>

        <h5 class="author_bio_body">
          {{ this.data.history.p4 }}
        </h5>

        <h5 class="author_bio_body">
          {{ this.data.history.learn_more }}
        </h5>

        <h5 class="author_bio_body">
          <a :href="this.data.history.link">{{ this.data.history.link }}</a>
        </h5>
      </div>
    </section>

    <Divider style="margin-top: 10rem" />

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";

import axios from "axios";

import kelpie1 from "@/assets/history/kelpie-1.jpg";
import kelpie2 from "@/assets/history/kelpie-2.jpg";
import kelpie3 from "@/assets/history/kelpie-3.jpg";

import doublecover from "@/assets/history/double-cover.jpg";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import * as THREE from "three";
// import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "History",

  components: {
    Footer,
    Navbar,
    Divider,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      doublecover: doublecover,
      swiperimages: [kelpie1, kelpie2, kelpie3],
      data: null,
      directives: {
        swiper: directive,
      },
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
  methods: {},
  async mounted() {
    document.title = "M.A Maddock";

    await axios.get("./data.json").then((res) => (this.data = res.data));
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
</style>

<style scoped>
@import "../assets/css/colors.css";
@import "../assets/css/helpers.css";
@import "../assets/css/style.css";

@import "../../node_modules/vue-video-section/dist/vue-video-section.css";

.history_author_image {
  margin: 4rem 0;
}
</style>
