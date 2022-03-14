import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Thanks from "./pages/Thanks.vue";
import History from "./pages/History.vue";
import BallochCastle from "./pages/BallochCastle.vue";
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
      path: "/history",
      name: "history",
      component: History,
    },
    {
      path: "/balloch_castle",
      name: "balloch_castle",
      component: BallochCastle,
    },
  ],
});
