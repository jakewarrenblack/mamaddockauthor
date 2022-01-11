<template>
  <div id="container">
    <Navbar />
    <div class="background">
      <section id="header">
        <div class="hero_text">
          <h3 class="author_short_desc">Lorem ipsum Ipsum Dolor Sit Amet</h3>
          <h1 class="author_name">M.A Maddock</h1>
        </div>
        <div class="img_contain">
          <img class="header_img" src="https://picsum.photos/1920/1080" />
        </div>
      </section>
      <section id="short_bio">
        <h6>
          M. A. Maddock is an Irish author, currently living in Dublin, Ireland.
        </h6>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import "../assets/colors.css";
.background {
  background: var(--crimson);
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#header {
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
}
#short_bio {
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
  color: var(--black);
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
