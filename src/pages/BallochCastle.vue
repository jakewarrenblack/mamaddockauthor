<template>
  <div id="flipbook_contain">
    <Flipbook class="flipbook" :zooms="null" :pages="[pages]"></Flipbook>
  </div>
</template>

<script>
import Flipbook from "flipbook-vue";
export default {
  name: "BallochCastle",
  components: {
    Flipbook,
  },
  data() {
    return {
      pages: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slrlounge.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fwhen-to-shoot-hdr.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slrlounge.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fwhen-to-shoot-hdr.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepsdbazaar.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsky-replace%2Fsun-rise%2Fsunrise-19-freepsdbazaar.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepsdbazaar.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsky-replace%2Fsun-rise%2Fsunrise-19-freepsdbazaar.jpg&f=1&nofb=1",
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>
