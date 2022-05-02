<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderGeneral.vue";
export default {
  components: {
    RouterLink,
    Header,
  },
};
</script>

<template>
  <div class="wrapper">
    <nav>
      <Header />
    </nav>
    <RouterLink class="btn btn-primary" to="/ejercicio">Ejercicio</RouterLink>
    <RouterLink class="btn btn-primary" to="/alimentacion"
      >Alimentación</RouterLink
    >
    <RouterLink class="btn btn-primary" to="/saludmental"
      >Salud Mental y Descanso</RouterLink
    >

    <RouterView />
  </div>
</template>

<style></style>
