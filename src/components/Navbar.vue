<template>
  <header>
    <div id="container">
      <nav>
        <h2>MA MADDOCK</h2>
        <ul>
          <a
            :href="link.href"
            v-for="link in this.links"
            :key="link"
            class="anchor"
          >
            <li>{{ link.title }}</li>
          </a>
        </ul>
        <!-- <li v-for="link in props.links" :key="link">test</li> -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: Array,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.props.links);
  },
};
</script>

<style scoped>
@import "../assets/css/colors.css";
header {
  /* background: var(--crimson); */
  padding: 46px 0 90px;
}
#container {
  font-family: "STIXTwo";
  font-size: 2rem;
  max-width: 1575px;
  margin: auto;
  background: transparent;
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

.anchor {
  display: contents;
  color: var(--white);
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

/* Tablet size and down */
@media only screen and (max-width: 767px) {
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
@media only screen and (max-width: 767px) {
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
