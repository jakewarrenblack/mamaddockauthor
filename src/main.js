import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import VModal from "vue-js-modal";

import Meta from "vue-meta";

Vue.use(Meta);
Vue.use(VModal);
Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  async created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
