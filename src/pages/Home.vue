<template>
  <div id="container">
    <Navbar />
    <section id="header">
      <div class="header_container">
        <div class="hero_text">
          <h3 class="author_short_desc">Lorem ipsum Ipsum Dolor Sit Amet</h3>
          <h1 class="author_name">M.A Maddock</h1>
        </div>
        <div class="img_contain">
          <img class="header_img" src="https://picsum.photos/1920/1080" />
        </div>
      </div>
    </section>
    <section id="short_bio">
      <div class="short_bio_container">
        <h6>
          M. A. Maddock is an Irish author, currently living in Dublin, Ireland.
        </h6>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.vantaEffect = Vanta({
      el: "#container",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x460303,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 0.5,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style scoped>
@import "../assets/colors.css";
#header {
  /* background: var(--crimson); */
  position: relative;
}
.header_container {
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
}
#header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 160px;
  bottom: 0;
  left: 0;
  background-color: var(--white);
  z-index: 0;
}
#short_bio {
  background: var(--white);
}
.short_bio_container {
  color: var(--white);
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
  font-family: "Oswald";
  font-size: 5rem;
}
#short_bio h6 {
  margin: 0 auto;
  width: 100%;
  max-width: 1040px;
  padding: 120px 0;
}
.header_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: -5%;
  position: relative;
  z-index: -1;
  filter: brightness(0.4);
}
.img_contain {
  height: 50rem;
}
.hero_text {
  text-align: center;
  color: var(--white);
}
.author_short_desc {
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.author_name {
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 10rem;
  font-family: "STIXTwo";
  letter-spacing: 2rem;
}
</style>
