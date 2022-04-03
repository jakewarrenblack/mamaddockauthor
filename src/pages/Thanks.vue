<template>
  <div id="background">
    <div id="container">
      <h1>Thank you!</h1>
      <h2>I'll get back to you as soon as possible</h2>
      <br />
      <button class="swiper" @click="home()">Go home</button>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "Thanks",

  metaInfo: {
    title: "Thanks",
    meta: [],
  },

  data() {
    return {};
  },
  methods: {
    home() {
      console.log("click");
      this.$router.back();
    },
  },
  mounted() {
    this.vantaEffect = Vanta({
      el: "#background",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1200.0,
      minWidth: 200.0,
      highlightColor: 0x460303,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 1,
    });

    document.querySelectorAll(".vanta-canvas").style.height = "100%";
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";

#container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
}

.swiper {
  padding-left: 0;
  background: transparent;
  color: var(--white);
  /* border: 2px solid var(--crimson); */

  padding: 1rem;

  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: "STIXTwo";
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: none;

  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: all;
  box-shadow: inset 0 0 0 4px var(--silver), 0 0 1px rgba(0, 0, 0, 0);
}

.swiper:hover {
  cursor: pointer;
}

.swiper:hover {
  padding: 1rem 2rem;
  justify-content: center;
  box-shadow: inset 0 0 0 4px var(--crimson), 0 0 1px rgba(0, 0, 0, 0);
}
</style>
