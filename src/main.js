import Vue from "vue";
import App from "./App.vue";
import router from "./router";
var VueScrollTo = require("vue-scrollto");

import AOS from "aos";
import "aos/dist/aos.css";

import VModal from "vue-js-modal";

import Meta from "vue-meta";

import store from "./store";

Vue.use(VueScrollTo);
Vue.use(Meta);
Vue.use(VModal);
Vue.use(router);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false;

new Vue({
  async created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
