<template>
  <div class="footer_contain">
    <footer class="d-flex flex-column">
      <!-- logo -->
      <div class="logo">
        <!-- socials -->
        <h3>MA MADDOCK</h3>
      </div>
      <div class="socials d-flex justify-space-around">
        <div class="icon_contain">
          <img
            class="social_icon"
            :src="require('@/assets/social_icons/icons_twitter.svg')"
          />
        </div>
        <div class="icon_contain">
          <img
            class="social_icon"
            :src="require('@/assets/social_icons/icons_instagram.svg')"
          />
        </div>
        <div class="icon_contain">
          <img
            class="social_icon"
            :src="require('@/assets/social_icons/icons_goodreads.svg')"
          />
        </div>
      </div>
      <!-- copyright notice -->
      &copy; Copyright M.A Maddock 2022
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
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import "../assets/helpers.css";
@import "../assets/colors.css";

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
  width: 25%;
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
</style>
