<template>
  <header>
    <div id="container">
      <nav>
        <h2>MA MADDOCK</h2>
        <ul>
          <li class="navlink">HOME</li>
          <li class="navlink">NOVELS</li>
          <li class="navlink">BIO</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Bio",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import "../assets/colors.css";
header {
  /* background: var(--crimson); */
  padding: 46px 0 90px;
}
#container {
  font-family: "Oswald";
  font-size: 2rem;
  max-width: 1575px;
  margin: auto;
}
nav {
  display: flex;
}
ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  align-items: center;
}
</style>
