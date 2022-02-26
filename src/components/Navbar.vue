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
        <button
          @click="
            openCurtain();
            animate();
          "
          class="nav_toggle"
        >
          <div id="border1" class="border" />
          <div id="border2" class="border" />
          <div id="border3" class="border" />
        </button>
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
      open: false,
      curtain_contain: null,
      border1: null,
      border2: null,
      border3: null,
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    checkRouter(link) {
      if (this.open) {
        // close the menu if we click a link
        this.curtain_contain.classList.remove("curtainVisible");
        document.getElementById("header").style.zIndex = "1";
        // prevent need for double click
        this.clicks = 0;
      }

      link.router ? this.router.push(link.href) : "";
    },
    openCurtain() {
      this.clicks++;

      if (this.clicks % 2 != 0) {
        this.curtain_contain.classList.add("curtainVisible");
        document.getElementById("header").style.zIndex = "-1";
        this.open = true;
      } else {
        this.curtain_contain.classList.remove("curtainVisible");
        document.getElementById("header").style.zIndex = "1";
        this.open = false;
      }
    },
    animate() {
      this.border1.classList.toggle("rotatePositive");
      this.border2.classList.toggle("opacity0");
      this.border3.classList.toggle("rotateNegative");
    },
  },
  mounted() {
    this.curtain_contain = document.getElementById("curtain_contain");
    this.border1 = document.getElementById("border1");
    this.border2 = document.getElementById("border2");
    this.border3 = document.getElementById("border3");
  },
};
</script>

<style scoped>
@import "../assets/css/colors.css";
header {
  /* background: var(--crimson); */
  padding: 46px 0 90px;
}

.opacity0 {
  opacity: 0;
}

.rotatePositive {
  transform: rotate(45deg) translateX(12px);
}
.rotateNegative {
  transform: rotate(-45deg) translateX(12px);
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
  top: 0;
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
    width: 100vw;
    position: absolute;
    z-index: 99999999999999999;
    height: 100vh;
    /* top: 15%; */
    transform: translateY(-100%);
    transition: all ease-in-out 0.2s;
  }

  .nav_toggle {
    display: flex;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    height: 20px;
    justify-content: space-between;
  }

  .nav_toggle:hover {
    cursor: pointer;
  }

  .border {
    border-bottom: 1px solid var(--white);
    width: 100%;
    transition: all ease-in-out 0.3s;
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
}

/* ------------------------------------------------- */
</style>
