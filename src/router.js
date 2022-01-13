import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Bio from "./pages/Bio.vue";
import Novels from "./pages/Novels.vue";
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
      path: "/bio",
      name: "bio",
      component: Bio,
    },
    {
      path: "/novels",
      name: "novels",
      component: Novels,
    },
    {
      path: "/balloch-castle",
      name: "balloch-castle",
      component: BallochCastle,
    },
  ],
});
