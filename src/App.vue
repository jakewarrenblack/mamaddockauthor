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
