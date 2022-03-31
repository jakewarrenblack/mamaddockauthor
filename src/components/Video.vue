<template>
  <vue-video-section
    class="img_contain"
    :elementId="'header-background-video'"
    :ref="'header-background-video'"
    :mp4Source="require('@/assets/trailer_web.mp4')"
    :posterSource="require('@/assets/trailer_placeholder.webp')"
    :mobileBreakpoint="762"
    :desktopHeight="850"
    :mobileHeight="450"
    :playsinline="true"
    :loop="true"
    :autoplay="false"
    :autobuffer="true"
    :muted="false"
  >
    <div slot="overlay-content" id="overlay-content" class="overlay-content">
      <h4 id="video_title" class="two-rem STIXTwo" @click="playVideo()">
        The new revised edition
      </h4>
      <h2 id="video_subtitle" class="four-rem STIXTwo">The Sixth Amulet</h2>
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
</template>

<script>
import VueVideoSection from "vue-video-section";
export default {
  name: "Video",
  components: {
    VueVideoSection,
  },
  props: {},
  data() {
    return {
      playButtonClicks: 0,
    };
  },
  mounted() {
    var video = document.getElementsByClassName(
      "vue-video-section__overlay-content-wrapper__content-wrapper__content"
    )[0];

    video.style.display = "flex";
    video.style.justifyContent = "center";
    video.style.alignItems = "center";
  },
  methods: {
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
          container.style.transform = "translateY(40%)";
        } else {
          container.style.transform = "translateY(10%)";
        }

        // Remove darkened background
        document
          .getElementsByClassName(
            "vue-video-section__overlay-content-wrapper__background"
          )[0]
          .classList.add("video_bg_none");

        document.getElementById("header-background-video").style.filter =
          "none";

        btn.innerHTML = "Pause trailer";
        btn.style.opacity = "0.2";
        this.$refs["header-background-video"].playVideo();
      } else {
        video_title.style.opacity = "1";
        video_subtitle.style.opacity = "1";

        //if (window.innerWidth >= 768) {
        container.style.transform = "translateY(0%)";
        //}
        document
          .getElementsByClassName(
            "vue-video-section__overlay-content-wrapper__background"
          )[0]
          .classList.remove("video_bg_none");

        document.getElementById("header-background-video").style.filter =
          "blur(0.25rem)";

        btn.innerHTML = "Play trailer";
        btn.style.opacity = "1";

        this.$refs["header-background-video"].pauseVideo();
      }
    },
  },
};
</script>

<style scoped></style>
