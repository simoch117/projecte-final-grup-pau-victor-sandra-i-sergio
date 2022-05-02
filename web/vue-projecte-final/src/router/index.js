import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ejercicio",
      name: "ejercicio",
      component: HomeEjercicio,
    },
    {
      path: "/alimentacion",
      name: "alimentacion",
      component: HomeAlimentacion,
    },
    {
      path: "/saludmentalydescanso",
      name: "saludmentalydescanso",
      component: HomeSaludmentalydescanso,
    },
  ],
});

export default router;
