<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "assets/colors.css";

html {
  background: var(--silver);
  overflow-x: hidden;
}

canvas {
  width: 100% !important;
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
  font-family: "Oswald";
  src: url("./assets/fonts/Oswald.ttf");
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
  font-family: "Prociono";
  src: url("./assets/fonts/Prociono.otf");
}

@font-face {
  font-family: "Cloister";
  src: url("./assets/fonts/CloisterOpti.otf");
}

@font-face {
  font-family: "Frederick";
  src: url("./assets/fonts/Frederick.TTF");
}

@font-face {
  font-family: "GotischA";
  src: url("./assets/fonts/GotischA.otf");
}
</style>
