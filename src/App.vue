<template>
  <div id="app">
    <div v-if="this.loading" class="cover">
      <Loader />
    </div>
    <Navbar
      v-if="this.$router.currentRoute.path !== '/thanks'"
      :links="this.links"
    />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { mapState } from "vuex";
export default {
  name: "App",
  metaInfo: {
    title: "M.A MADDOCK",
    titleTemplate: "%s | M.A MADDOCK",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "og:title", content: "yeehaw" },
      { name: "og:image", content: "https://picsum.photos/200/300" },
      {
        name: "description",
        content:
          "Official website of M.A Maddock, author of The Sixth Amulet series.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  computed: {
    ...mapState(["loading"]),
  },
  components: { Navbar, Loader },
  data() {
    return {
      links: [
        {
          id: 0,
          title: "BIO",
          href: "full_bio",
          router: false,
        },
        {
          id: 1,
          title: "NOVEL",
          href: "synopsis",
          router: false,
        },
        {
          id: 2,
          title: "HISTORY",
          href: "/history",
          router: true,
        },
        {
          id: 3,
          title: "BALLOCH CASTLE",
          href: "/balloch_castle",
          router: true,
        },
        {
          id: 4,
          title: "CONTACT",
          href: "contact",
          router: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "assets/css/colors.css";

body canvas {
  width: 100% !important;
}

.cover {
  background: var(--silver);
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  @media only screen and (max-width: 767px) {
    #app,
    html,
    body {
      overflow-y: scroll;
      height: 100% !important;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style>
@import "assets/css/colors.css";

@media only screen and (max-width: 767px) {
  #app,
  html,
  body {
    overflow-y: scroll;
    height: 100% !important;
  }
}

html {
  background: var(--silver);
  overflow-x: hidden;
  scroll-behavior: smooth;
  overflow-y: hidden;
}

body canvas {
  width: 100% !important;
}

router-view {
  background: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Put this in the media query because it seems to break the review slider otherwise */
@media only screen and (max-width: 767px) {
  body {
    overflow-x: hidden;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--white);
  /* margin-top: 60px; */
}

@font-face {
  font-family: "STIXTwo Italic";
  src: url("./assets/fonts/STIXTwo_Italic.ttf");
}

@font-face {
  font-family: "STIXTwo";
  src: url("./assets/fonts/STIXTwo.ttf");
}

@font-face {
  font-family: "Dorovar";
  src: url("./assets/fonts/Dorovar.ttf");
}

@font-face {
  font-family: "Dorovar-Italic";
  src: url("./assets/fonts/Dorovar-Italic.ttf");
}

@font-face {
  font-family: "altcaps";
  src: url("./assets/fonts/altcaps.ttf");
}
</style>
