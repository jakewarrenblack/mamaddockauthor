<template>
  <div id="container">
    <section id="full_bio">
      <fig>
        <img
          src="~@/assets/balloch_castle/1.webp"
          data-aos="fade-right"
          class="author_image history_author_image bg_size_cover"
        />
        <figcaption>Photograph courtesy of Billy Aitken</figcaption>
      </fig>
    </section>

    <br /><br />
    <h2 class="author_bio_title">{{ this.data.balloch.heading1 }}</h2>
    <Divider />

    <section id="synopsis" ref="bookSection">
      <div
        class="full_bio_container d-flex flex-column justify-content-center align-items-center"
      >
        <div
          data-aos="fade-up"
          class="author_bio_text margin-auto balloch_article_paragraph"
        >
          <h5 class="author_bio_body">
            {{ this.data.balloch.p1 }}
          </h5>
        </div>

        <h2 class="author_bio_title">{{ this.data.balloch.heading2 }}</h2>
        <Divider />
        <div
          data-aos="fade-up"
          class="author_bio_text margin-auto balloch_article_paragraph"
        >
          <h5 class="author_bio_body">
            {{ this.data.balloch.p2 }}<br />
            <a target="_blank" :href="`${this.data.balloch.link}`">{{
              this.data.balloch.link
            }}</a>
          </h5>
        </div>
      </div>
    </section>

    <Divider />

    <Footer style="margin-top: 0" />
  </div>
</template>

<script>
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "BallochCastle",

  metaInfo: {
    title: "Balloch Castle",
    meta: [],
  },

  components: {
    Footer,
    Divider,
  },
  data() {
    return {
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
      data: null,
    };
  },
  methods: {},
  async mounted() {
    document.title = "M.A Maddock";

    // await axios
    //   .get("https://maddock-backend.herokuapp.com/api")
    //   .then((res) => (this.data = res.data[0]));

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

.author_image {
  width: 50%;
}

.history_author_image {
  margin: 4rem 0;
}

.balloch_article_paragraph {
  width: 55%;
}

a {
  color: white;
}

@media only screen and (max-width: 767px) {
  .balloch_article_paragraph {
    width: 90%;
  }
  .author_image {
    width: 100%;
  }
}
</style>
