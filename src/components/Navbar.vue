<template>
  <header>
    <div id="container">
      <nav>
        <h2>MA MADDOCK</h2>
        <ul>
          <li class="navlink">HOME</li>
          <li class="navlink">NOVEL</li>
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
li {
  position: relative;
  transition: all 0.3s ease-in-out;
}

li::after {
  transition: all 0.3s ease;
  opacity: 0;
  content: "●";
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

li:hover {
  cursor: pointer;
}

li:hover::after {
  opacity: 1;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  ul {
    /* flex-direction: column; */
    margin-left: 0;
    padding-left: 0;
    border-bottom: 2px solid var(--white);
  }

  header {
    padding: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  ul {
    /* flex-direction: column; */
    margin-left: 0;
    padding-left: 0;
  }
}
</style>
