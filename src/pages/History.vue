<template>
  <div v-if="this.data" id="container">
    <section id="short_bio">
      <div class="short_bio_container">
        <h6 class="title">{{ this.data.history.title }}</h6>
      </div>
    </section>

    <section id="full_bio">
      <img
        :src="doublecover"
        data-aos="fade-right"
        class="object-fit-contain author_image history_author_image bg_size_cover"
      />
    </section>

    <section
      class="d-flex justify-content-center"
      id="synopsis"
      ref="bookSection"
    >
      <div
        data-aos="fade-up"
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
        <MySwiper :kelpieImages="this.kelpieImages" />

        <h5 class="author_bio_body">
          {{ this.data.history.p3 }}
        </h5>

        <b>{{ this.data.history.p3_bold_after }}</b>

        <div class="quote">
          <blockquote>{{ this.data.history.quote }}</blockquote>
          <cite>{{ this.data.history.quote_credit }}</cite>
        </div>

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
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import MySwiper from "@/components/MySwiper";

import axios from "axios";

import kelpie1 from "@/assets/history/kelpie-1.jpg";
import kelpie2 from "@/assets/history/kelpie-2.jpg";
import kelpie3 from "@/assets/history/kelpie-3.jpg";

import doublecover from "@/assets/history/double-cover.jpg";

// import * as THREE from "three";
// import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "History",

  components: {
    Footer,
    Divider,
    MySwiper,
  },
  data() {
    return {
      doublecover: doublecover,
      kelpieImages: [kelpie1, kelpie2, kelpie3],
      data: null,
    };
  },
  methods: {},
  async mounted() {
    document.title = "M.A Maddock";

    await axios.get("./data.json").then((res) => (this.data = res.data));
  },
  // beforeCreate() {
  //   document.getElementById("container").opacity = "0";
  // },
};
</script>

<!-- Can't be scoped -->
<style>
.title {
  font-size: 4rem;
  color: var(--crimson);
  font-family: "altcaps";
  margin-bottom: 0;
  padding-bottom: 0;
}

a {
  color: white;
}

.quote {
  margin: 4rem auto;
  border-left: 2px solid var(--crimson);
  padding-left: 2rem;
}

blockquote {
  margin-left: 0;
  margin-top: 0;
}

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

@media only screen and (min-width: 767px) {
  #synopsis {
    margin: auto;
    max-width: 1800px;
  }

  .author_bio_text {
    width: 55%;
  }
}
</style>
