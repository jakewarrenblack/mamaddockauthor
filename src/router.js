import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import BallochCastle from "./pages/BallochCastle.vue";
import Thanks from "./pages/Thanks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks,
    },
    {
      path: "/balloch-castle",
      name: "balloch-castle",
      component: BallochCastle,
    },
  ],
});
