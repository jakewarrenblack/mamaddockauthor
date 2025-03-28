<template>
  <div class="footer_contain">
    <footer class="d-flex flex-column">
      <!-- logo -->
      <div class="logo">
        <!-- socials -->
        <h3>M.A. MADDOCK</h3>
      </div>
      <div class="socials d-flex justify-space-around">
        <a target="_blank" href="https://www.instagram.com/ma.maddock_author">
          <div class="icon_contain">
            <img
              class="social_icon"
              :src="require('@/assets/social_icons/icons_instagram.svg')"
            />
          </div>
        </a>
        <a target="_blank" href="https://fb.me/thesixthamuletseries">
          <div class="icon_contain">
            <img
              class="social_icon"
              :src="require('@/assets/social_icons/icons_facebook.svg')"
            />
          </div>
        </a>
      </div>
      <!-- copyright notice -->
      &copy; Copyright M.A. Maddock {{ this.getYears(2022).join(", ") }}
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  methods: {
    getYears(from) {
      const current = new Date().getFullYear();
      const years = [];

      for (var i = from; i <= current; i++) {
        years.push(i);
      }

      return years;
    },
  },

  mounted() {},
};
</script>

<style scoped>
@import "../assets/css/helpers.css";
@import "../assets/css/colors.css";

a {
  display: contents;
}

.footer_contain {
  display: flex;
  flex-direction: column;
  height: 20rem;
  margin-top: 12rem;
}

footer {
  height: 100%;
  padding: 2rem;
}

.socials {
  width: 10%;
  display: flex;
  flex-direction: row;
  margin: auto;
}

.icon_contain {
  width: 50px;
  height: auto;
}
.social_icon {
  filter: invert(100%);
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 767px) {
  .footer_contain {
    margin-top: 0rem;
  }

  .socials {
    width: 25%;
  }
}
</style>
