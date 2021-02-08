import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "test1",
    component: () => import("../docs/test1.md"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
