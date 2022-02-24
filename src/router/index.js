import { createRouter, createWebHistory } from "vue-router";
import ShPopUp from "../views/ShPopUp.vue";

const routes = [
  {
    path: "/",
    name: "ShPopUp",
    component: ShPopUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
