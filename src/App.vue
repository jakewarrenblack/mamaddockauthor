<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "assets/css/colors.css";

html {
  background: var(--silver);
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body canvas {
  width: 100% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
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
