<script>
import { RouterLink } from "vue-router";
import Header from "../src/components/Header.vue";
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

    <!-- <RouterView /> -->
  </div>
</template>

<style>
</style>
