<template>
  <div id="container">
    <div id="nav_header_contain">
      <Navbar :links="this.links" />
    </div>
    <section id="short_bio">
      <div class="short_bio_container">
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
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

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";

import axios from "axios";

// import * as THREE from "three";
// import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "History",

  components: {
    Footer,
    Navbar,
    Divider,
  },
  data() {
    return {
      links: [
        {
          title: "BIO",
          href: "#full_bio",
        },
        {
          title: "NOVEL",
          href: "#synopsis",
        },
        {
          title: "CONTACT",
          href: "#contact",
        },
      ],
    };
  },
  methods: {},
  async mounted() {
    document.title = "M.A Maddock";

    await axios.get("./data.json").then((res) => (this.data = res.data));

    // this.vantaEffect = Vanta({
    //   el: "#nav_header_contain",
    //   THREE,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.0,
    //   minWidth: 200.0,
    //   highlightColor: 0x462403,
    //   midtoneColor: 0x780e04,
    //   lowlightColor: 0x70707,
    //   baseColor: 0x20202,
    //   blurFactor: 0.41,
    //   speed: 0.4,
    //   zoom: 1,
    // });
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
</style>
