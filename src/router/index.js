import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import RichOrPoor from "../views/RichOrPoor.vue";
import AddRich from "../views/AddRich.vue";
import Start from "../views/Start.vue";
import Prize from "../views/Prize.vue";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/selected",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RichOrPoor,
  },
  {
    path: "/addrich",
    name: "",
    component: AddRich,
  },
  {
    path: "/start",
    name: "start",
    component: Start,
  },
  {
    path: "/prize/:count",
    name: "prize",
    component: Prize,
    beforeEnter: (to) => {
      const count = to.params.count;
      const stone = store.state.stone;
      if (stone >= count * 160) {
        return true;
      } else {
        return false;
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
