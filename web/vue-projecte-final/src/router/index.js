import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import HomeEjercicio from "../views/HomeEjercicio.vue";
import HomeAlimentacion from "../views/HomeAlimentacion.vue";
import HomeSaludmentalydescanso from "../views/HomeSaludmentalydescanso.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
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
