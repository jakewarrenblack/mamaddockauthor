<template>
  <header>
    <div id="container">
      <nav>
        <h2 @click="home()">MA MADDOCK</h2>
        <div id="curtain_contain" class="curtain_contain">
          <ul id="linklist">
            <a
              @click="checkRouter(link)"
              :href="link.href"
              v-for="link in this.links"
              :key="link"
              class="anchor"
            >
              <li>{{ link.title }}</li>
            </a>
          </ul>
        </div>
        <button @click="openCurtain()" class="nav_toggle">X</button>
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
    return {
      clicks: 0,
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    checkRouter(link) {
      link.router ? this.router.push(link.href) : "";
    },
    openCurtain() {
      this.clicks++;

      const curtain_contain = document.getElementById("curtain_contain");

      if (this.clicks % 2 != 0) {
        curtain_contain.classList.add("curtainVisible");
        document.getElementById("header").style.zIndex = "-1";
      } else {
        curtain_contain.classList.remove("curtainVisible");
        document.getElementById("header").style.zIndex = "1";
      }
    },
  },
  mounted() {},
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

.curtainVisible {
  display: block !important;
  position: absolute;
  top: 0l;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--background_red);
  transform: translateY(0%) !important;
}

.zIndexMinus1 {
  z-index: -1 !important;
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

h2:hover {
  cursor: pointer;
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
    /* border-bottom: 2px solid var(--white); */
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

/* ------------------------------------------------- */

.curtain_contain {
  display: flex;
  width: 100%;
}

.nav_toggle {
  display: none;
  position: static;
  width: 10%;
  margin-right: auto;
  z-index: 99999999999999999999999999999999999999999999;
}

@media only screen and (max-width: 767px) {
  li {
    margin: 1rem;
  }

  #linklist {
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
  }

  .curtain_contain {
    /* display: none; */

    width: 100vw;
    position: absolute;
    z-index: 99999999999999999;
    height: 100vh;
    /* top: 15%; */
    transform: translateY(-100%);
    transition: all ease-in-out 0.2s;
  }

  nav {
    flex-direction: row;
    align-items: center;
    margin-left: auto;
  }

  h2 {
    font-size: 1.5rem;
    width: 75%;
  }
  .nav_toggle {
    display: block;
  }
}

/* ------------------------------------------------- */
</style>
